import { useParams} from "react-router-dom"
import { useEffect,useState} from "react"
import axios from "axios";

export const EmployeeDetails = () => {

  const{id}=useParams()
  const[emply,setEmply]=useState([]);


  useEffect(()=>{
      axios.get(`http://localhost:8080/employees/${id}`).then(({data})=>{

          setEmply(data)
      })
  },[]);
  return (
    <div className="user_details">
      <img className="user_image" src={emply.image}/>
      <h4 className="user_name">{emply.employee_name}</h4>
      <span className="user_salary">${emply.salary}</span>
      <span className="tasks">
        <li className="task">{emply.tasks}</li>
      </span>
      Status: <b className="status">{emply.status}</b>
      Title: <b className="title">{emply.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
    
  );
};
