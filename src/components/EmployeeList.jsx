import { useEffect,useState } from "react";
import { Link } from "react-router-dom"
export const EmployeeList = () => {
  const [employeeList, setEmployeeList]=useState([]);
  useEffect(()=>{
    getData();
},[]);
const getData=async()=>{
    const data=await fetch(`http://localhost:8080/employees`).then((d)=>
    d.json()
    );
    setEmployeeList(data);
};
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employeeList.map((t)=>(
      <div className="employee_card" key={t.id}>
        <img className="employee_image" src={t.image}/>
        <span className="employee_name"><Link to={`/employees/${t.id}`}>{t.employee_name}</Link></span>
        <span className="employee_title"><Link to={`/employees/${t.id}`}>{t.title}</Link></span>
      </div>
        ))}
    </div>
  );
};
