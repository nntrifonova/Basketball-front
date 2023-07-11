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
                    <Input name="signup-name" type="text" placeholder="Full Name" />
                    <Input name="signup-email" type="email" placeholder="Email" />
                    <Input name="signup-password" type="password" placeholder="Password" />
                    <Input name="signup-confirm" type="password" placeholder="Confirm Password" />
                    <Marginer direction="vertical" margin={10} />
                    <SubmitButton type="submit">Signup</SubmitButton>
                </Form>
            </FormContainer>

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