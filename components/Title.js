import { Heading } from '@chakra-ui/layout'
import React from 'react'

const Title = ({text}) => {
    return (
        <Heading as="h2">&lt;/ {text}&gt;</Heading>
    )
}

export default Title
