import styled from 'styled-components';

export const Title = styled.h1`
    color: ${props => props.primary? '#1C437E': 'white'};
    size : ${props => props.size || '1.4rem'};
`

export const Text = styled.p`
    color: ${props => props.primary? '#1C437E': 'white'};
    font-size : ${props => props.size || '1.5rem'};
    font-family:google-sans;
`

export const Input = styled.input`
placeholder: ${props=> props.placeholder || ''};
type: ${props=>props.type}
padding: 10px;
border: none;
color:#ffff;
font-size: 20px;
`
export const Legend = styled.legend`
padding: 5px;
align:center;
`

export const Button = styled.button`
width:40%;
pointer:cursor;

`

export const RoundButton = styled.button`
height: ${props => props.height};
width: ${props => props.weight};
border-radius: ${props => props.border_radius|| '50%'};
background: ${props => props.background_color};
color: ${props => props.color};
`