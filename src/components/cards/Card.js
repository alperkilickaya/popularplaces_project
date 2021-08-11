import './Card.css'
import {data} from '../../data'



const Cards = (props) => {
    return (
        
        
            <div className="card">
                <p>{props.title}</p>
                <img src={props.image}></img>
                <p className="desc">{props.desc}</p>
            </div>
    
        
    )
}


export default Cards;