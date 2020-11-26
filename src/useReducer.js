import React from "react";

const initial = {
    n: 1
}

const reducer = (state, action) => {
    if (action.type === 'add') {
        return ({n: state.n + action.number})
    } else if (action.type === 'multi') {
        return ({n: state.n * action.number})
    } else {
        throw new Error('unknown type')
    }
}

function UseReducer() {
    const [state, dispatch] = React.useReducer(reducer, initial)
    const onClick = () => {
        dispatch({type:'multi', number: 2})
    }
    return (
        <div>
            n: {state.n}
            <button onClick={onClick}>+1</button>
        </div>
    )
}

export default UseReducer