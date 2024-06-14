import React from "react";
import "./Contacts.scss";
import Contact from "../../component/Contact/Contact";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { CopyButton, Tooltip } from "@mantine/core";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Contacts = ({ path }) => {
  return (
    <div className="contacts-container">
      <div className="wrapper">
        <Navbar path={path} />
        <div className="up">
          <h1>
            <span>/</span>Contacts
          </h1>
          <p>Contact me</p>
        </div>
        <Contact title={false} />
        <div className="media-container">
          <h3>
            <span>#</span>All-Media
          </h3>
          <div className="social">
            <div data-aos="fade-right" data-aos-delay="100">
              <a
                href="https://github.com/whoamif"
                target="_blank"
                rel="noreferrer"
              >
                <GoMarkGithub className="icon" /> /whoamif
              </a>
            </div>
            <div data-aos="fade-right" data-aos-delay="200">
              <a
                href="https://www.linkedin.com/in/fatima-amina-adjissi-info/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin className="icon" /> /Adjissi-Fatima-Amina
              </a>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="400">
              <a
                href="mailto:adjissifatimaamina@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail className="icon" /> /adjissifatimaamina@gmail.com
              </a>
            </div>
            <CopyButton value="adjissifatimaamina" timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="right"
                >
                  <div
                    className="item"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    onClick={copy}
                  >
                    <SiDiscord className="icon" />
                    <span>/adjissifatimaamina</span>
                  </div>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
