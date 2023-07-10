import React, { useContext } from "react";
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

  return (
      <BoxContainer>
        <FormContainer>
          <Form>
              <Input name="login-email" type="email" placeholder="Email" />
              <Input name="login-password" type="password" placeholder="Password" />
          </Form>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an accoun?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>
  );
}