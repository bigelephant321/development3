export default function Checkbox(props) { 
  
  const toggle = props.toggle; 
  let value = props.value; 
  const checkedText = props.checkedText; 
  const uncheckedText = props.uncheckedText;
  const name = props.name;
  const id = props.id;
  let filter = false;

  if (id === "filter") {
    filter = true;
  }

  const handleChange = () => {
    if (filter) {
      toggle(name);
    } else {
      toggle(value);
    }
    value = !value;
  }; 
  
  return ( 
    <div> 
        <input checked={value} type="checkbox" id="name" onChange={handleChange}></input>
        <label>{value ? checkedText: uncheckedText}</label>
    </div>    
     
  ); 
}; 

