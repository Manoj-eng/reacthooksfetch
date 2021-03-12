
import React, {useState, useEffect} from 'react'
import Input from './Input'
import Api from './Api'


import { render } from '@testing-library/react'
const Form = () => {


    const [posts, setPost] = useState([])    
    useEffect(() => {
            fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(json => setPost(json))
        },[])
          
  
          const [name, setFirstName] = useState("");

            const onInputChange = (event) => {
              setFirstName(event.target.value);
            };
          
          
            const [email, setEmail] = useState("");
          
            const onInputCha = (event) => {
              setEmail(event.target.value);
            };
          
            const [password, setPassword] = useState("");
          
            const onInputCh = (event) => {
              setPassword(event.target.value);
            };      


            function OutPut(){
              
              
              render( <Api data ={posts} />)
               
            }


    return (
     
        <div className="one">  
         <h1>REGISTRATION FORM</h1>           
               <b> Enter Your First Name</b><Input  type="text" placeholder="Enter first Name" value={name} onChange = {(e) => onInputChange(e)}/>
               <b> Enter Your Last Name</b><Input type="text" placeholder="Enter last Name " value={email} onChange = {(e) => onInputCha(e)} />
               <b> Enter Your Email Address</b><Input type="text" placeholder="Enter Email" value={password} onChange = {(e) => onInputCh(e)} />
               <b>Enter Your Password</b><Input type="text" placeholder="Enter Password"  />                
                <button className="btnone" onClick = {OutPut} ><b>DISPLAY ALL DATA</b></button>
                <button className="btntwo" onClick={() => {
            let arr = {
              fName: `${name}`,
              lName: `${email}`,
              email: `${password}`,
             
            };

            fetch("http://localhost:8080/users", {
              method: "POST",
              body: JSON.stringify({
                name: arr.fName,
                email: arr.email,
                password: arr.password,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);

                
  

               
              });

              setFirstName("");
              setEmail("");
              setPassword("");

            

          }
             
                } ><b> SUBMIT</b></button>
          
        </div>
    )
    
    
    
}



export default Form
