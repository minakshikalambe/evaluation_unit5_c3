import { useState } from "react"

export const Admin = () => {
  const[formData, setFormData]=useState({
    "id": "",
    "employee_name": "",
    "employee_id": "",
    "title": "",
    "salary": "",
    "image": "",
    "username": "",
    "password": "",
    "tasks": [""],
    "status": "",
    "team": ""
});
const handleChange=(e)=>{
    const[id, value]=e.target
        setFormData({
            ...formData,
            [id]:value
        });
       
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    fetch("http://localhost:8080/employees",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(formData)
            })
}
  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name" onChange={handleChange} />
      <input type="text" placeholder="Employee id" name="employee_id" onChange={handleChange} />
      <select name="title" onChange={handleChange}>
        <option value="intern" onChange={handleChange}>Intern</option>
        <option value="Jr Software Developer" onChange={handleChange}>Jr Software Developer</option>
        <option value="Sr Software Developer" onChange={handleChange}>Sr Software Developer</option>
        <option value="Team Lead" onChange={handleChange}>Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handleChange} />
      <input type="text" placeholder="Image" name="image"  onChange={handleChange}/>
      <input type="text" placeholder="User Name" name="username" onChange={handleChange} />
      <input type="password" placeholder="Password" name="password" onChange={handleChange} />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handleChange}
      />
      <select name="status" id="status" onChange={handleChange}>
        <option value="" onChange={handleChange}>Select Status</option>
        <option value="terminated" onChange={handleChange}>Terminated</option>
        <option value="working" onChange={handleChange}>Working</option>
      </select>
      <select name="team" id="team" onChange={handleChange}>
        <option value="" onChange={handleChange}>Select team</option>
        <option value="frontend" onChange={handleChange}>Frontend</option>
        <option value="backend" onChange={handleChange}>Backend</option>
        <option value="qa" onChange={handleChange}>QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} onChange={handleChange}/>
    </form>
  );
};
