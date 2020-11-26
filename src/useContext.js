import React,{createContext,useState,useContext} from "react";

const context = createContext(null)

function UseContext() {
    const [n,setN] = useState(0)
    return (
        <context.Provider value={{n,setN}}>
            <Child />
        </context.Provider>
    )
}

function Child() {
    const {n,setN} = useContext(context)
    const onClick = () =>{
        setN(i=>i+1)
    }
    return (
        <div>
            <div>n: {n}</div>
            <button onClick={onClick}>+1</button>
        </div>
    )
}

export default UseContext