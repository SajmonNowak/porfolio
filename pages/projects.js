import { Flex } from '@chakra-ui/layout'
import React from 'react'
import Layout from '../components/Layout'
import ProjectList from "../components/ProjectList"

const projects = ({openProjectModal }) => {

    return (
        <Layout>
            <Flex direction="column" justifyContent="center" alignItems="center" py="100px">
                <ProjectList openProjectModal={openProjectModal}/>
            </Flex>
        </Layout>
    )
}

export default projects
