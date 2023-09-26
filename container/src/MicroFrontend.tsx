import { useEffect } from "react";
import { History } from 'history';

interface Window {
    [key:string]: any; // Add index signature
}

interface MircroFrontendOptions {
    name: string;
    host: string | undefined;
    history: History;
}

const MicroFrontend = ({ name, host, history }: MircroFrontendOptions) => {
    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            (window as Window)[`render${name}`](`${name}-container`, history);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            (window as Window)[`unmount${name}`] && (window as Window)[`unmount${name}`](`${name}-container`);
        };
    });

    return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;
