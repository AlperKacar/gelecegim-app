import { useEffect, useState } from "react"

export default function Input({label, type = 'text', ...props}) {

    const [show, setShow] = useState(false)
    const [inputType,setInputType] = useState(type)
    useEffect(() => {
        if (show) {
            setInputType('text')

        }
        else if (type == 'password') {
            setInputType('password')
        }
    }, [show])

    return(
        <>
            <div>
                <input  required={true} type={inputType} className='input-tasarım' {...props}/>
                <small className="input-text">{label}</small>
                {type == 'password' && props?.value &&  (
                    <div type="button" className="show-hide-button " onClick={() => setShow(show =>!show)}>
                       {
                        show? <a className="hide-show-trigger"></a> : <a className="show-hide-trigger"></a>
                       } 
                    </div>
                )
                }        
            </div>
        </>
    )
    
} 