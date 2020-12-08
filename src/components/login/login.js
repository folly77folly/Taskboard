import React from 'react'
import { Topography, Header, InputBox, ButtonBox } from '../atoms/text'
import { LoginContainer, InputContainer } from './style'


function Login() {
    return (
        <LoginContainer>
            <div className="login-container">
                <Header 
                className ="login-container__header"
                Title = {'Log in!'}
                >
                </Header>
                <InputContainer>
                    <fieldset>
                        <legend>Email Address</legend>
                        <InputBox
                        Placeholder = {'Email Address'}
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
                            Title={'Remember Me'}
                            /></label>
                        </div>
                        <Topography
                        
                        Title={'Forgot Password?'}
                        >

                        </Topography>
                    </div>
                </InputContainer>
                <ButtonBox
                Title = {'Login'}
                />
            </div>
        </LoginContainer>
    )
}

export default Login
