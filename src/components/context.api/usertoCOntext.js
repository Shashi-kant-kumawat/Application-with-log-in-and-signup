import {createContext,useContext,useState} from "react" ;

export const userContext=createContext();

export const UserContextProvider=({children})=>{
    const[please_log_in,setPlease_log_in]=useState(false)
return (
    <userContext.Provider value={{please_log_in,setPlease_log_in}}>
        {children}
    </userContext.Provider>
)
}
export default function useUser(){
    return useContext(userContext)
}
