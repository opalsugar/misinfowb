import "./style.css";
import { useParams } from "react-router-dom";
import { gameData } from './data';
import { getImageURL } from './utils/image-util';
import { Link } from "react-router-dom";

export default function GamePage() {

    const params = useParams();
    const gameId = params.id;

    return (
        <div>
            <div className="game-header">
                <div className="logo-container">
                    <img src={getImageURL("logo.png")}></img>
                    <Link style={{ textDecoration: 'none' }} to={`/misinfowb/`}>
                        <p>misinfo games.</p>
                    </Link>
                </div>
            </div>
            {gameData.filter((item) =>
                item.id == gameId
            ).map((item) => {
                return (
                    <div style={{ backgroundImage: `url(${getImageURL(item.img)})` }} className="game-about" >
                        <Link style={{ textDecoration: 'none' }} to={`/misinfowb/`}>
                            <div className="back-button">
                                <p>Back</p>
                            </div>
                        </Link>
                        <div className="game-main">
                            <div className="game-images">
                                <img src={getImageURL(item.img)}></img>
                            </div>
                            <div className="game-content">
                                <h1>{item.title}</h1>
                                <p>Genre: {item.genre.toString()}</p>
                                <p>Type: {item.type.toString()}</p>
                                <p>Format: {item.format.toString()}</p>
                                <p>Target players: {item.age.toString()}</p>
                                <p>Developer: {item['Developer'].toString()}</p>
                                <p>Release year: {item['Release Year'].toString()}</p>
                                <p>{item.desc}</p>
                                <p>Play Now</p>
                            </div>
                        </div>

                    </div>)
            })}
        </div>
    )
}
