import {useContext,createContext} from "react"

const Usercontext= createContext({
    information:"",
    setInformation:()=>{}
})

export const UsercontextProvider=Usercontext.Provider ;

export default function useUser(){
    return useContext(Usercontext)
}

