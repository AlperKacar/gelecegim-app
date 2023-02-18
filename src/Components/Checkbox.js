import { useEffect, useState } from "react"
import { ImCheckboxUnchecked,ImCheckboxChecked} from "react-icons/im"

export default function Cheackbox({label,Cheackbox,...props}) {

    const [show,setShow] = useState(false)
    useEffect (()=> {
        Cheackbox(!props?.value)
    },[show])
    return(
        <label className="cheachbox">

            <div required={true} onClick={() => setShow(show =>!show)} {...props} >
            {
                show?  <ImCheckboxChecked/> : <ImCheckboxUnchecked /> 
            }

            </div>
            <small className="cheachboxtext" >{label}</small>
        </label>
    )
} 