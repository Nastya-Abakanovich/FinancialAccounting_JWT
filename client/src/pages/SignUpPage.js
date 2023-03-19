import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
    const [err, setErr] = useState(null);
    
  
    const signUp = async (body) => { 
        const formData = new FormData();        
        formData.append('name', body.name);
        formData.append('email', body.email);
        formData.append('password', body.password);
    
        await fetch('/api/users/register', {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            response.json();
            if (response.status === 201) { 
                alert('OK 200');
                setErr(null);
            } else if (response.status === 409) {
                setErr('Пользователь с таким email уже существует');
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
  
    return (
        <div className="wrapper">
            <Header/>
            <div className="sign-content">
                <SignUpForm
                    signUp={signUp}
                    serverErr={err}
                />
            </div>  
            <Footer/>  
        </div>
    )
  }
  
  export default SignUpPage; 