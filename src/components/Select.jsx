import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react'
function Select({
    option,
    lable,
    className,
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {lable &&   <label htmlFor={id} className='block text-sm font-medium text-gray-700'>{lable}</label>}
        <select {
            ...props
        } id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} >
            {option?.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)