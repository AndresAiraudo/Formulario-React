import React,{useState, useEffect} from "react";
import Form from "./components/Form";
import axios from 'axios';


function Register(props){
    const [contactData, setContactData] = useState({name:"", email:"", phone:"", message:""})
    const disable = !contactData.name.length || !contactData.email.length || !contactData.phone.length || !contactData.message.length

    function handleChangeGeneral(event){
      /* const newData = {...userData}
         newData.name = event.target.value
         setContactData(newData) */
        setContactData({...contactData, [event.target.name]:event.target.value})
    }

    function handleSend(event){
        event.preventDefault() //para evitar el submit
        axios.post("http://127.0.0.1:8000/api/save-contact", contactData)
        .then(response=>{
            console.log(response)
            setContactData({name:"", email:"", phone:"", message:""}) //volvemos a vaciar el objeto
        }).catch(err=>{
            console.log(err)
        })
    }


    return (
        <div className="register-container">
            <h1>Registro de usuario</h1>
            <Form disable={disable} handleChangeGeneral={handleChangeGeneral} contactData={contactData} handleSend={handleSend}/>
        </div>
    )

}

export default Register;