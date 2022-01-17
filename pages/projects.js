import { Button } from "@chakra-ui/button";
import { Center, Flex } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import ProjectList from "../components/ProjectList";
import Link from "next/link";
import {BiArrowBack} from "react-icons/bi"
import Icon from "@chakra-ui/icon";

const projects = () => {
  const [projectNameSelected, setProjectNameSelected] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  const openProjectModal = (projectName) => {
    setProjectNameSelected(projectName);
    setOpenModal(true);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else [(document.body.style.overflow = "unset")];
  }, [openModal]);

  return (
    <Layout>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        pt="100px"
      >
        <ProjectList openProjectModal={openProjectModal} />
      </Flex>
      {openModal && (
        <Modal projectName={projectNameSelected} setOpenModal={setOpenModal} openModal={openModal} />
      )}
      <Center pb="50px">
        <Link href="/">
          <Button mt={[12, 16]} leftIcon={<Icon mr="5px" as={BiArrowBack}/>} variant="primary">Home</Button>
        </Link>
      </Center>
    </Layout>
  );
};

export default projects;
