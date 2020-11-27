import React,{useRef,forwardRef} from 'react'

function UseRef () {
    const buttonRef = useRef(null)
    console.log(buttonRef.current);
    return (
        <div>
            <Button2 ref={buttonRef}>按钮</Button2>
        </div>
    )
}

const Button2 = forwardRef((props,ref)=>{
    return <button ref={ref} {...props} />
})

export default UseRef