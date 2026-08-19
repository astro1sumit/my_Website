import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Reveal from "../Reveal";
import { scaleIn, viewportOnce } from "../../utils/motion";
import AmbientGlow from "../AmbientGlow";
import SectionTag from "../SectionTag";
import { Bio } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      rgb(64, 0, 255) 100%
    );
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;
    gap: 14px;
  }
`;

const MotionContactForm = motion(ContactForm);

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = form.current.email.value;
        const name = form.current.name.value;
        const subject = form.current.subject.value;
        const message = form.current.message.value;

        if (!email || !name || !subject || !message) {
            toast.error("Please fill all fields before submitting.");
            return;
        }

        emailjs
            .sendForm(
                "service_9r6ecu6",
                "template_gh8y61j",
                form.current,
                "gH0JJpRQNWrtypC3q"
            )
            .then(
                (result) => {
                    console.log(result);
                    toast.success("Email sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    toast.error("Failed to send email. Please try again later.");
                }
            );
    };

    return (
        <Container>
            <AmbientGlow
                colorOne="rgba(255, 126, 179, 0.4)"
                colorTwo="rgba(133, 76, 230, 0.4)"
            />
            <Wrapper>
                <Reveal>
                    <SectionTag>07 — Get In Touch</SectionTag>
                </Reveal>
                <Reveal delay={0.05}>
                    <Title>Contact</Title>
                </Reveal>
                <Reveal delay={0.1}>
                    <Desc>
                        Feel free to reach out to me for any questions or opportunities!
                    </Desc>
                </Reveal>
                <Reveal delay={0.15}>
                    <ContactDetails>
                        <a href={`mailto:${Bio.email}`}>✉️ {Bio.email}</a>
                        <a href={`tel:${Bio.phone.replace(/\s+/g, "")}`}>📞 {Bio.phone}</a>
                        <span>📍 {Bio.location}</span>
                    </ContactDetails>
                </Reveal>
                <MotionContactForm
                    ref={form}
                    onSubmit={handleSubmit}
                    variants={scaleIn(0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="email" />
                    <ContactInput placeholder="Your Name" name="name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" />
                    <ContactButton type="submit" value="Send" />
                </MotionContactForm>
            </Wrapper>
        </Container>
    );
};

export default Contact;
