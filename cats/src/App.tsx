import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [randomCatImg, setRandomCatImg] = useState("");

    const getRandomCatImage = () => {
        setRandomCatImg("");
        fetch(`https://aws.random.cat/meow`)
            .then((res: Response) => res.json())
            .then((catInfo: { file: string }) => {
                setRandomCatImg(catInfo.file);
            });
    };

    useEffect(() => {
        if (randomCatImg === "") {
            getRandomCatImage();
        }
    }, []);

    return (
        <div>
            <header>
                <h3>Cats</h3>
                <div>
                    <button onClick={() => getRandomCatImage()}>새 Random 고양이 사진</button>
                </div>
                {randomCatImg !== "" ? (
                    <div>
                        <img src={randomCatImg} width="400px" alt="Cat" />
                    </div>
                ) : (
                    <div>Loading Image</div>
                )}
            </header>
        </div>
    );
};

export default App;
