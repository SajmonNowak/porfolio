import { Flex } from '@chakra-ui/layout'
import React, {useState} from 'react'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import ProjectList from "../components/ProjectList"

const projects = () => {
    const [projectNameSelected, setProjectNameSelected] = useState(undefined);
    const [openModal, setOpenModal] = useState(false);
  
    const openProjectModal = (projectName) => {
      setProjectNameSelected(projectName);
      setOpenModal(true);
    };


    return (
        <Layout>
            <Flex direction="column" justifyContent="center" alignItems="center" py="100px">
                <ProjectList openProjectModal={openProjectModal}/>
            </Flex>
            {openModal && <Modal projectName={projectNameSelected} setOpenModal={setOpenModal}/>}
        </Layout>
    )
}

export default projects
