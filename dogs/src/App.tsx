import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [dogImg, setDogImg] = useState('');

    const getDogImage = () => {
        setDogImg('');
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then((res: Response) => res.json())
            .then((dogInfo: { message: string; statues: string; }) => {
                setDogImg(dogInfo.message);
            });
    };

    useEffect(() => {
        if (dogImg === '') {
            getDogImage();
        }
    }, []);

    return (
        <div>
            <header>
                <h3>Dogs Project</h3>
                <div>
                    <button onClick={() => getDogImage()}>새 멍뭉이 사진</button>
                </div>
                {dogImg !== '' ? (
                    <div>
                      <img src={dogImg} alt="dog pircture" width="400px" />
                    </div>
                ) : (
                    <div>Loading Image</div>
                )}
            </header>
        </div>
    );
};

export default App;
