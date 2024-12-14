import "./style.css";
import { useParams } from "react-router-dom";
import { gameData } from './data';
import { getImageURL } from './utils/image-util';

export default function GamePage() {

    const params = useParams();
    const gameId = params.id;



    return (
        <div>
            {gameData.filter((item) => {
                return item.id == gameId;
            })
                .map((item) => {

                    return (
                        <div key={item.id}>
                            < div className="game-backdrop" >
                                <img src={getImageURL(item.img)} alt="Game" />
                            </div >
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h1 className="game-desc">{item.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="game-desc">
                                <div className="container">
                                    <div className="row justify-content-between">
                                        <div className="col-sm-6">
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="col-sm-4 game-about">
                                            <div className="row stats">
                                                <h4>{item.title}</h4>
                                                <p>Genre: {item.genre.toString()}</p>
                                                <p>Type: {item.type.toString()}</p>
                                                <p>Format: {item.format.toString()}</p>
                                                <p>Target players: {item['Target players'].toString()}</p>
                                                <p>Developer: {item['Developer'].toString()}</p>
                                                <p>Release year: {item['Release Year'].toString()}</p>
                                            </div>
                                            <div className="row url">
                                                <a href={item['Links'].toString()}><p>Play the game here</p></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

