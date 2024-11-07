import Input from "./Input.jsx";

function AddGeneralInfo({onChange, submit, edit, value}) {

  return (
    <form>
      <h2>Fill in your general information</h2>
        <Input 
            id = "fullName"
            placeholder = "Name"
            labelText = "Name: "
            type = "text"
            value = {value.fullName}
            onChange = {onChange}
        />
        <Input 
            id = "email"
            placeholder = "Email Address"
            labelText = "Email Address: "
            type = "text"
            value = {value.email}
            onChange = {onChange}
        />
        <Input 
            id = "phoneNum"
            placeholder = "XXX-XXX-XXX"
            labelText = "Phone Number: "
            type = "text"
            value = {value.phoneNum}
            onChange = {onChange}
        />
      <button onClick = {submit} >
          Submit
      </button>
      <button onClick = {edit}>
          Edit
      </button>
    </form>
  );
}

export default AddGeneralInfo;
