import React, {Fragment, useContext, useState} from "react";
import {
  BoldLink,
  BoxContainer,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import { redirect } from 'react-router-dom';

export function LoginForm(props: any) {
  const { switchToSignup } = useContext(AccountContext);
  const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

  const { email, password } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

   //const [term, setTerm] = useState('');
   // const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
   //     // Preventing the page from reloading
   //     event.preventDefault();
   //     // Do something
   //     alert(term)
   // }

    const onSubmit = async (e: any) => {
    e.preventDefault();
      const User = {
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(User);
        const res = await axios.post("http://localhost:8080/auth/login", body, config)
            .then(function (response) {
                if(response.status === 200 ){
                     return redirect("http://localhost:3000/api" );
                }
            })
      } catch (err: any) {
        console.error(err.response.data);
      }
  };

  return (
      <BoxContainer>
          <Fragment>
          <h1 className='large text-primary'>Sign In</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Welcome back!
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>

            <div className='form-group'>
              <input
                className="credentials-input"
                onChange={onChange}
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
              />
            </div>
            <div className='form-group'>
              <input
                className="credentials-input"
                onChange={onChange}
                type='password'
                placeholder='Password'
                name='password'
                value={password}
              />
            </div>
            <SubmitButton
              onChange={onChange}
              type='submit'
              value='Login'>
                Sign in
            </SubmitButton>
          </form>
       </Fragment>
        <MutedLink href="#">
          Don't have an account?{" "}
        </MutedLink>
          <BoldLink href="#" onClick={switchToSignup}>
              Signup
          </BoldLink>
      </BoxContainer>

  );
}