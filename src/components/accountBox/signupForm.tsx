import React, {Fragment, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {Form} from "reactstrap";
import axios from "axios";



export function SignupForm(props: any) {
    const { switchToSignin } = useContext(AccountContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });

    const { name, email, password, confirm } = formData;

    const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== confirm) {
      console.log("Passwords do not match");
    } else {
      // console.log(formData);
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("http://localhost:8080/auth/register", body, config);
        console.log(res.data);
      } catch (err: any) {
        console.error(err.response.data);
      }
    }
  };


    return (
   <BoxContainer>

       <Fragment>
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Create Your Account
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                onChange={onChange}
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                required
              />
            </div>
            <div className='form-group'>
              <input
                onChange={onChange}
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
              />
            </div>
            <div className='form-group'>
              <input
                onChange={onChange}
                type='password'
                placeholder='Password'
                name='password'
                // minLength='6'
                value={password}
              />
            </div>
            <div className='form-group'>
              <input
                onChange={onChange}
                type='password'
                placeholder='Confirm Password'
                name='confirm'
                // minLength='6'
                value={confirm}
              />
            </div>
            <SubmitButton
              onChange={onChange}
              type='submit'
              value='Register'>
            </SubmitButton>
          </form>
       </Fragment>
       <Marginer direction="vertical" margin={10} />

       <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
            </MutedLink>
       <BoldLink href="#" onClick={switchToSignin}>
           Signin
       </BoldLink>
     </BoxContainer>
    );
}