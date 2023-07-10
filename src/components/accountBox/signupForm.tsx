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

export function SignupForm(props: any) {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Form>
                    <Input name="signin-name" type="text" placeholder="Full Name" />
                    <Input name="signin-email" type="email" placeholder="Email" />
                    <Input name="signin-password" type="password" placeholder="Password" />
                    <Input name="signin-confirm" type="password" placeholder="Confirm Password" />

                    //submit here
                </Form>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Signin
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}