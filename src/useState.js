import React from "react";
import ReactDOM from 'react-dom'

let _state = []
let index = 0
const myUseState = initialValue => {
    let currentIndex = index
    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
    let setState = newValue => {
        _state[currentIndex] = newValue
        render()
    }
    index += 1
    return [_state[currentIndex], setState]
}

const render = () => {
    index = 0
    ReactDOM.render(
        <UseState/>,
        document.getElementById('root')
    )
}
const UseState = () => {
    const [n, setN] = myUseState(0)
    const [m, setM] = myUseState(0)
    return (
        <>
            <div>
                {n}
                <button onClick={() => setN(n + 1)}>+1</button>
            </div>
            <div>
                {m}
                <button onClick={() => setM(m + 1)}>+1</button>
            </div>
        </>
    )
}

export default UseState