import "./style.css";
import { useParams } from "react-router-dom";
import { gameData } from './data';
import { getImageURL } from './utils/image-util';
import { Link } from "react-router-dom";
import Tags from './Tags';

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
                        <div className="back-container">
                            <Link style={{ textDecoration: 'none' }} to={`/misinfowb/`}>
                                <div className="back-button">
                                    <img src={getImageURL("back.png")}></img>
                                    <p>Back</p>
                                </div>
                            </Link>
                        </div>
                        <div className="game-main">
                            <div className="game-images">
                                <img src={getImageURL(item.img)}></img>
                            </div>
                            <div className="game-content">
                                <div className="game-descr">
                                    <h1>{item.title}</h1>
                                    <Tags labels={['format', 'age', 'type', 'genre']} tagData={item} />
                                    <div className="game-info-container">
                                        <div className="game-info-item">Developer</div>
                                        <div>{item['Developer'].toString()}</div>
                                    </div>
                                    <div className="game-info-container">
                                        <div className="game-info-item">Release Year</div>
                                        <div>{item['Release Year'].toString()}</div>
                                    </div>
                                    <p>{item.desc}</p>
                                    <div className="play"><a href={item['Links'].toString()}><p>Play Now!</p></a></div>
                                </div>
                            </div>
                        </div>

                    </div>)
            })}
        </div>
    )
}

//                             <img src={getImageURL(item.img)}></img> 
