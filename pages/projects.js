import { Button } from "@chakra-ui/button";
import { Center, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import ProjectList from "../components/ProjectList";
import Link from "next/link";

const projects = () => {
  const [projectNameSelected, setProjectNameSelected] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  const openProjectModal = (projectName) => {
    setProjectNameSelected(projectName);
    setOpenModal(true);
  };

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
        <Modal projectName={projectNameSelected} setOpenModal={setOpenModal} />
      )}
      <Center py="50px">
        <Link href="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </Center>
    </Layout>
  );
};

export default projects;
