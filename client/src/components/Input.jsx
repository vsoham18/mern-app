const Input = ({label,id,name,value,onChange}) =>{
    return (
        <div className="input-container">
    <label htmlFor="title">{label}</label>
    <input
     id={id}
     name={name} 
     value={value} 
     onChange={onChange} 
    />
    {/* <p className='error'>{error}</p> */}
  </div>
    )
}
export default Input