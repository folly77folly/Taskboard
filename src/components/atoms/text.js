import React from 'react';
import { Text, Title, Input, Button } from './style';


export function Topography(props) {
    return (
        <Text
        primary ={props.Primary}
        size ={props.size}
        >
            {props.Title}
        </Text>
    )
}

export function Header(props) {
    return (
        <Title
        
        >
            {props.Title || 'Title Here'}
        </Title>
    )
}

export function InputBox(props) {
    return (
        <Input
        placeholder = {props.Placeholder || ''}
        type ={props.Type||'text'}
        >
        </Input>
    )
}

export function ButtonBox(props){
    return(
        <Button>
            <Text
            primary
            >
                {props.Title}
            </Text>
        </Button>
        
    )
}
