import './Card.css'
import {data} from '../../data'



const Cards = () => {
    return (
        <>
            <div className ="container">
                <div className="card">
                    <p>{data[0].title}</p>
                    <img src={data[0].image}></img>
                    <p className="desc">{data[0].desc}</p>
                </div>
                <div className="card">
                    <p>{data[1].title}</p>
                    <img src={data[1].image}></img>
                    <p className="desc">{data[1].desc}</p>
                </div>
                <div className="card">
                    <p>{data[2].title}</p>
                    <img src={data[2].image}></img>
                    <p className="desc">{data[2].desc}</p>
                </div>
                <div className="card">
                    <p>{data[3].title}</p>
                    <img src={data[3].image}></img>
                    <p className="desc">{data[3].desc}</p>
                </div>
                <div className="card">
                    <p>{data[4].title}</p>
                    <img src={data[4].image}></img>
                    <p className="desc">{data[4].desc}</p>
                </div>
                <div className="card">
                    <p>{data[5].title}</p>
                    <img src={data[5].image}></img>
                    <p className="desc">{data[5].desc}</p>
                </div>
                <div className="card">
                    <p>{data[6].title}</p>
                    <img src={data[6].image}></img>
                    <p className="desc">{data[6].desc}</p>
                </div>
                <div className="card">
                    <p>{data[7].title}</p>
                    <img src={data[7].image}></img>
                    <p className="desc">{data[7].desc}</p>
                </div>
                <div className="card">
                    <p>{data[8].title}</p>
                    <img src={data[8].image}></img>
                    <p className="desc">{data[8].desc}</p>
                </div>
                <div className="card">
                    <p>{data[0].title}</p>
                    <img src={data[0].image}></img>
                    <p className="desc">{data[0].desc}</p>
                </div>
                <div className="card">
                    <p>{data[9].title}</p>
                    <img src={data[9].image}></img>
                    <p className="desc">{data[9].desc}</p>
                </div>
                <div className="card">
                    <p>{data[10].title}</p>
                    <img src={data[10].image}></img>
                    <p className="desc">{data[10].desc}</p>
                </div>
            </div>
        </>
    )
}


export default Cards;