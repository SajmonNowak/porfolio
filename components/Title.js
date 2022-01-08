import { Heading } from '@chakra-ui/layout'
import React from 'react'

const Title = ({text, white}) => {
    return (
        <Heading as="h2" color={ white ? "white" : "mainRed"} fontSize={["xl", "2xl","3xl", "3xl", "4xl"]}>&lt;/ {text}&gt;</Heading>
    )
}

export default Title
