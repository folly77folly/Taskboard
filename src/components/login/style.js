import styled from 'styled-components';

export const LoginContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#1C437E;
height:100vh;
text-align:center;

.login-container{
    width:50%;
    // height:70%;
    // background-color:yellow;
}
.login-container__remember{
    display:flex;
    justify-content:space-between;
}

h1{
    margin-bottom:20px;
}

`
export const InputContainer = styled.section`

input[type=text]{
    width:90%;
    background-color: #1C437E;
    border:none;
    padding:15px;
}

input:focus{
    border:none;
}

legend{
    color: #ffff;
    border-color: #ffff;
    
}
fieldset{
    margin-bottom:30px;
}
`
