import React, { useState } from 'react';
import "./form.scss";
import toast, { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/submit-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    title,
                    message,
                }),
            });

            if (response.ok) {
                toast.success("E-mail envoyé avec succès");
                setName("");
                setEmail("");
                setTitle("");
                setMessage("");
                setError(false);
                setSent(true);
            } else {
                toast.error("Envoi échoué");
                setError(true);
                setSent(true);
            }
        } catch (error) {
            toast.error("Envoi échoué");
            setError(true);
            setSent(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='form-container' data-aos="zoom-in-up">
            <Toaster />
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <div className="form-item">
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name" required />
                        <span>Name</span>
                    </div>
                    <div className="form-item">
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" required />
                        <span>Email</span>
                    </div>
                </div>
                <div className="item">
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} name="title" required />
                    <span>Title</span>
                </div>
                <div className="item">
                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} name="message" required></textarea>
                    <span>Message</span>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? (
                        <Oval
                            height={20}
                            width={20}
                            color="#fff"
                            ariaLabel="loading"
                        />
                    ) : (
                        "Send"
                    )}
                </button>
            </form>
        </div>
    );
}

export default Form;
