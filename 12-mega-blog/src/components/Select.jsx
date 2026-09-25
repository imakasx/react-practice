import React , {useId} from "react"
function Select({
    options,
    label, 
    className,
    ...props
}, ref){
    const id = useId()
    return(
        <div>
            {label && <label htmlFor={id} className=""> </label>}
            <select ref={ref} id={id} className={``}></select>
        </div>
    )
}

export default Select