import React,{useState, useEffect} from "react";


function Form(props){

    return (
        <div className="form-container">
            <form /*method="POST"*/ id="form">
                <label htmlFor="name">Name</label>
                <input value={props.contactData.name} type="text" name="name" id="name" onChange={props.handleChangeGeneral}></input>
                <label htmlFor="email">Email</label>
                <input value={props.contactData.email} type="email" name="email" id="email" onChange={props.handleChangeGeneral}></input>
                <label htmlFor="phone">Phone</label>
                <input value={props.contactData.phone} type="number" name="phone" id="phone" onChange={props.handleChangeGeneral}></input>
                <label htmlFor="message">Message</label>
                <input value={props.contactData.message} type="text" name="message" id="message" onChange={props.handleChangeGeneral}></input>
                <button disabled={props.disable} onClick={props.handleSend} type="submit">Send</button>
            </form>

        </div>
    )

}

export default Form;