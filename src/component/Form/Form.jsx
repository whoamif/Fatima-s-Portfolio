import React, { useState, useRef } from 'react';
import "./form.scss";
import emailjs from 'emailjs-com';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PROFILE_KEY)
          .then((result) => {
            //   console.log(result.text);
              setName("")
              setEmail("")
              setTitle("")
              setMessage("")
              if(result){
                setError(false)
                // console.log(error, result.text)
              }
              setSent(true)
          }, (error) => {
              console.log(error.text);
              console.log("this is an error")
              setError(true)
              setSent(true)
          });
    }

    return (
        <div className='form-container' data-aos="zoom-in-up">
            <form onSubmit={handleSubmit} ref={form}>
                <div className="item">
                    <div className="form-item">
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name"  required/>
                        <span >Name</span>
                    </div>
                    <div className="form-item">
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" required />
                        <span>Email</span>
                    </div>
                </div>
                <div className="item">
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} name="title" required />
                    <span >Title</span>
                </div>
                <div className="item">
                    <textarea name="message" id="message" cols="30" rows="5"  value={message} onChange={(event) => setMessage(event.target.value)} required ></textarea>
                    <span>Message</span>
                </div>
                {sent && <div className='card'>
                    <div className={`square ${!error ? "green" : "red"}`}></div>
                    {!error ? 
                    <div className="content successes">Message sent successfully! Thank you</div>
                    : <div className="content fail ">Their was a problem ! Please retry </div>
                }
                </div>}
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Form;
