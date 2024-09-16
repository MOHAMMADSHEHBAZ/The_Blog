import React, { useId } from "react"

const Input = React.forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props
    },ref){
    const id = useId();    
    return(
        <div className='w-full'>
            {label && <label 
            className='text-gray-600 dark:text-gray-300' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-slate-500 ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>

    )
})

export default Input
