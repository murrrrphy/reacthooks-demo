import React,{useState,useMemo} from "react";

function UseMemo() {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)
    const onClick = () => {
        setN(n => n + 1)
    }
    const Click = useMemo(() => {
        console.log(m)
    }, [m])
    return (
        <div>
            <button onClick={onClick}>update n {n}</button>
            <Child data={m} onClick={Click}/>
        </div>
    )
}

const Child = React.memo((props)=>{
    console.log('child执行了');
    return (
        <button onClick={props.onClick}>{props.data}</button>
    )
})

export default UseMemo