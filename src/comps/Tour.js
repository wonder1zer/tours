import React,{useState} from 'react'

const Tour = ({el, deleteItem}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className='single-tour'>
            <img src={el.image} alt={el.name}/>
            <footer>
                <div  className='tour-info'>
                    <h2>{el.name}</h2>
                    <h4 className='tour-price'>{el.price}</h4>
                </div>
                <p>{readMore?  el.info :    el.info.substring(0,200)}...
                    <button onClick={()=> setReadMore(!readMore)}>{readMore?'show less':'read more'}</button>
                </p>
                <button className='delete-btn' onClick={()=>deleteItem(el.id)}>not interested in</button>
            </footer>
            
        </article>
    )
}

export default Tour
