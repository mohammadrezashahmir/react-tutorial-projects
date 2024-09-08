import React,{createContext,useState,useEffect} from 'react'
import { getProducts } from '../services/api'
export const productContext = createContext()
function ProductContextProvider(props) {
    const [data, setData] = useState([])
    useEffect(() => {
         const fetchAPI = async ()=>{
            setData(await getProducts())
         }
         fetchAPI();
    }, [])
   
    return (
       <productContext.Provider value={data}>
         {props.children}
       </productContext.Provider>
    )
}

export default ProductContextProvider
