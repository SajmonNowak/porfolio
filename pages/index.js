import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ProjectSummary from "../components/ProjectSummaryHome";
import Skills from "../components/Skills";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../components/Modal"), { srr: false });

export default function Home() {
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
    <>
      <Head>
        <title>Sajmon Nowak Webdeveloper</title>
        <meta name="description" content="Sajmon Nowak Webdeveloper Portfolio" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <Header />
          <Box>
            <About />
          </Box>
          <Box>
            <Skills />
          </Box>
          <Box mt={[36, 36, 60]}>
            <ProjectSummary openProjectModal={openProjectModal} />
          </Box>
          <Box>
            <Contact />
          </Box>
          {openModal && (
            <Modal
              projectName={projectNameSelected}
              setOpenModal={setOpenModal}
              openModal={openModal}
            />
          )}
        </main>
      </Layout>
    </>
  );
}
