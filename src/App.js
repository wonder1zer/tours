import React, {useState, useEffect} from 'react'
import Loading from './comps/Loading'
import Tours from './comps/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const fetchData = async()=>{
    const response = await fetch(url)
    const data = await response.json();
    setData(data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[refresh]);
  function deleteItem(id){
    const newArray =data.filter(el=> el.id !== id)
    setData(newArray)
  }
  if(loading){
    return(
      <Loading/>
    )
  }
  return(
    <Tours data={data} deleteItem={deleteItem} setRefresh={setRefresh} refresh={refresh}/>
  )
  
}

export default App
