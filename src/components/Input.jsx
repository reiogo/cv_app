function Input({ id, placeholder, labelText, type, value, onChange }) {

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <br />
      <input type={type} id={id} placeholder = {placeholder} value={value} onChange = {onChange}/>
      <br />
    </div>
  );
}

export default Input;
