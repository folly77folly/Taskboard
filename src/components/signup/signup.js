import React from 'react'
import { Topography, Header, InputBox, ButtonBox } from '../atoms/text'
import { LoginContainer, InputContainer } from '../login/style'


function Signup() {
    return (
        <LoginContainer>
            <div className="login-container">
                <Header
                Title = {'Sign Up'}
                >
                </Header>
                <InputContainer>
                    <fieldset>
                        <legend>Username</legend>
                        <InputBox
                        Placeholder = {'Enter Name'}
                        ></InputBox>
                    </fieldset>
                    <fieldset>
                        <legend>Email Address</legend>
                        <InputBox
                        Placeholder = {'abcd@gmail.com'}
                        ></InputBox>
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <InputBox
                        Placeholder = {'Password'}
                        ></InputBox>
                    </fieldset>
                    <div className="login-container__remember">
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="checkbox" name="" id="remember" value=""/>
                            <label htmlFor="remember">
                            <Topography
                            Title={'I Accept the terms and condition'}
                            /></label>
                        </div>
                    </div>
                </InputContainer>
                <ButtonBox
                Title = {'Sign up'}
                />
            </div>
        </LoginContainer>
    )
}

export default Signup
