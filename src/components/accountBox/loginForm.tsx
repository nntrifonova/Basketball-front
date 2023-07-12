import React, {useContext, useState} from "react";
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

export function LoginForm(props: any) {
  const { switchToSignup } = useContext(AccountContext);

   const [term, setTerm] = useState('');
   const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
       // Preventing the page from reloading
       event.preventDefault();
       // Do something
       alert(term)
   }

  return (
      <BoxContainer>
          <Form method="post" action="http://localhost:8080/auth/login">
              <Input name="login-email" type="email" placeholder="Email" />
              <Input name="login-password" type="password" placeholder="Password" />
              <Marginer direction="vertical" margin={10} />
              <MutedLink href="#">Forget your password?</MutedLink>
              <Marginer direction="vertical" margin="1.6em" />
              <SubmitButton type="submit">Sign in</SubmitButton>
              <Marginer direction="vertical" margin="1em" />
          </Form>
        <MutedLink href="#">
          Don't have an account?{" "}
        </MutedLink>
          <BoldLink href="#" onClick={switchToSignup}>
              Signup
          </BoldLink>
      </BoxContainer>
  );
}