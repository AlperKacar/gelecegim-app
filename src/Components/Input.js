import { useEffect, useState } from "react"
import { Button, Checkbox, Form, Input } from 'antd';


export default function InputValidion({message,name,label,email,password, type = '', ...props}) {

    
    const [show, setShow] = useState(false)

    const [inputType,setInputType] = useState(type)
    useEffect(() => {
        if (show) {
            setInputType('')

        }
        else if (type == 'password') {
            setInputType('password')
        }
    }, [show])
        
        

    return(
        
        <>
                <Input  type={inputType} className='input-tasarım' {...props} />
                <small className="input-text">{label}</small>
                {type == 'password' && props?.value &&  (
                    <div type="button" className="show-hide-button " onClick={() => setShow(show =>!show)}>
                       {
                        show? <a className="hide-show-trigger"></a> : <a className="show-hide-trigger"></a>
                       } 
                    </div>
                )
                }                  
        </>
    )
    
} 