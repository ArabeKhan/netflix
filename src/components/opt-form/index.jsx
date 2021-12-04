import React from 'react'
import { Container, Input, Button, Text, Break } from './styles/opt-form'

export default function OptFrom({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

OptFrom.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

OptFrom.Button = function OptFormButton({ children, ...restProps }) {
    return <Button {...restProps} >
        {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />

    </Button>
}

OptFrom.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps} > {children} </Text>
}

OptFrom.Break = function OptFormText({ ...restProps }) {
    return <Break {...restProps} />
}