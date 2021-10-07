import React from 'react';
import {useState} from 'react';
import './Hero.scss';
import pod from './Images/logo.svg';
import spotify from './Images/spotify.svg';
import apple from './Images/apple-podcast.svg';
import google from './Images/google-podcasts.svg';
import pocket from './Images/pocket-casts.svg';
import dots from './Images/bg-pattern-dots.svg';


const Hero = () => {
    const myInput = document.getElementById('myInput');

    const [input, setInput] = useState('');

    const [submit, setSubmit] = useState('');

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const submitCheck = () =>{
        if(emailRegex.test(submit) === false && submit !== ''){
            return false;
        } else {
            return true;
        }
    };

    const ariaInput = () =>{
        if(emailRegex.test(submit) === false){
            myInput.setAttribute("aria-invalid", "true");
            myInput.setAttribute("aria-describedBy", "error");
        } else if(emailRegex.test(submit) && myInput.hasAttribute("aria-invalid")){
            myInput.removeAttribute("aria-invalid");
            myInput.removeAttribute("aria-describedBy");
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        ariaInput();
        if(emailRegex.test(submit)){
            setInput('');
        }
    };

    return (
        <main className='main-section'>
           <img src={pod} alt='pod' className='pod' ></img>
           <div className='card-div'>
               <h1>
                    Publish your podcasts&nbsp;<br />
                    <span>everywhere.</span>
               </h1>
               <p>
                   Upload your audio to Pod with a single 
                   click. We'll then distribute your podcast
                   to Spotify, Apple Podcasts, Google Podcasts
                   Pocket Casts and more!
               </p>
               <div className='bottom-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-area'>
                                <input type='text' 
                                placeholder='Email address'
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                id='myInput'>
                                </input>
                                <button type='submit' onClick={() =>setSubmit(input)}>
                            Request Access
                            </button>
                        </div>
                            <p className={submitCheck() ? 'error' : 'error-active' }
                            id='error'>
                                    Oops! Please check your email
                            </p>
                    </form>
                    <div className='site-div'>
                            <img src={spotify} alt='spotify' className='spotify' ></img>
                            <img src={apple} alt='apple-pod' className='apple' ></img>
                            <img src={google} alt='google-pod' className='google' ></img>
                            <img src={pocket} alt='pocket' className='pocket' ></img>
                    </div>
                </div>
           </div>
           <div className='background-images' />
           <img src={dots} 
           alt='' 
           className='dots'
           aria-hidden="true"></img>
        </main>
    );
}
 
export default Hero;