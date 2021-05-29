import React from 'react'
import Tour from './Tour'

const Tours = ({data, deleteItem, setRefresh, refresh}) => {
    return (
        <section>
            <div className='title'>
                <h2>our tour</h2>
                <div className='underline'></div>
                {data.length === 0? <button className='btn' onClick={()=>setRefresh(!refresh)}>refresh</button>:''}
            </div>
            
            <div>
                {data.map(el=>{
                    return(
                        <Tour el={el} deleteItem={deleteItem}/>
                    )
                })}
            </div>
        </section>
        
    )
}

export default Tours
