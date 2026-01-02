const Input = ({className,label,id,name,value,onChange,type}) =>{
    return (
        <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
     id={id}
     name={name} 
     value={value} 
     onChange={onChange} 
      className={`w-full px-4 py-2 
        border border-gray-300 
        bg-white text-gray-900 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 focus:ring-indigo-500
        ${className}`}
      type={type || "text"}
    />
   
  </div>
    )
}
export default Input