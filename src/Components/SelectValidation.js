import {  Select } from 'antd';
import { memo } from 'react';

const SelectValidation = memo(({label,value,...props}) => {

    return(
        
        <>
         <Select
    showSearch

    optionFilterProp="children"
    filterOption={(input, options) =>
      (options?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
  >{value.map((select) => (
    <Select.Option select={select} key={select.title} >{value.plaka}</Select.Option>
    ))} 
  </Select>
   
        
        <small    className="input-text">{label}</small>
        </>
    )
    
} )
export default SelectValidation