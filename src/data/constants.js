export const Bio = {
    name: "Sumit Maurya",
    roles: [
        "Full Stack Developer",
        "Java & C# & Python Developer",
        "AI App Builder",
        "MERN Stack Developer",
        "Open Source Contributor",
    ],

    description:
        "Full Stack Developer | Java, React, Next.js, Node.js, Kotlin, C# | AI & SaaS Builder | MongoDB | MySQL | DSA | OOP | Open to Remote Roles",
    github: "https://github.com/astro1sumit",
    resume:
        "https://drive.google.com/file/d/1EJUsnofWzZbsyDp4SGXLyjyTobfFBxdl/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
    Leetcode: "https://leetcode.com/u/ASTROSUMIT/",
    insta: "",
    email: "sumitkushwaha00001@gmail.com",
    phone: "+91 9695287622",
    location: "Noida, UP",
};

export const featuredProjects = [
    {
        title: "CentralWPDA",
        slug: "centralwpda",
        description:
            "🔗 A national registry and guild platform for the Indian film, OTT, television, and digital media industry — verifying creative professionals' identities, registering their works, and connecting them with casting opportunities, jobs, and collaborations. Built with a Talent Directory (searchable database of verified professionals), a Creative Rights Registry (timestamped registration with certificates for scripts, screenplays, stories, lyrics, music, and AI-assisted works), a Casting Portal, an Industry Marketplace for crew hiring, and a Learning & Growth hub for workshops and courses. Ships as a Progressive Web App with 42,300+ verified members, 9,800+ registered works, and 27 state chapters live in production.",
        images: [
            "../project/Central.png",
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PWA"],
        url: "https://www.centralwpda.org/index.html",
    },
    {
        title: "BartKart — Marketplace App, Website & Admin Panel",
        slug: "bartkart",
        description:
            "📱🌐 A full-stack peer-to-peer marketplace built as a mobile app, companion website, and internal admin panel — supporting barter, rental, and sale listings, with 40+ screens and end-to-end Supabase integration for auth, database, storage, and realtime updates. The React Native + TypeScript app pairs with a Node.js/Express backend and admin panel using Supabase service-role access for admin operations (KYC review, user bans, listing moderation), enforcing Row-Level Security (RLS) on the client while safely bypassing it server-side for privileged workflows. Reusable cross-platform UI components (image picker, date picker), Razorpay payments, Firebase Cloud Messaging, and TanStack React Query for data fetching/caching, styled with NativeWind (Tailwind for React Native).",
        images: [
            "../project/bartkart.png",
                ],
        stack: ["React Native", "TypeScript", "Node.js/Express", "Supabase", "Razorpay", "Firebase Cloud Messaging", "RLS"],
        url: "https://github.com/astro1sumit/BARTKART",
    },
    {
        title: "Load24 — Logistics App, Website & Admin Panel",
        slug: "load24",
        description:
            "📱🌐 A full-stack logistics marketplace delivered as a mobile app, website, and admin panel (React Native + Node/Express + Supabase/PostgreSQL) connecting truck owners and shippers, architected as a monorepo with a mobile client, web frontend, and REST backend. Secure authentication and identity verification including WhatsApp OTP login, MPIN app-lock, and a KYC document upload/verification flow with role-based required-document logic and consent tracking — covering both client-side (RN) and server-side (Express middleware, Supabase RLS) enforcement. The admin panel drives the product's core CRM — client management, lead tracking, and multi-role permissions (Shipper / Vehicle Owner / Staff). End-to-end delivery from database design to API routes to native mobile UI (React Native Paper, NativeWind/Tailwind, React Query).",
        images: [
            "../project/Load24.png",
        ],
        stack: ["React Native", "Node.js/Express", "Supabase", "PostgreSQL", "React Query", "React Native Paper", "NativeWind"],
        url: "https://load24.in/",
    },
    {
        title: "AI Call Agent — Healthcare Voice Bot",
        slug: "ai-call-agent",
        description:
            "🎙️ A production-grade AI voice call agent integrated with Twilio Media Streams and WebSockets, enabling real-time phone call handling for a healthcare diagnostic platform (Redcliffe Labs). Integrates Google Gemini AI as the conversational brain and Google Cloud Speech-to-Text / Text-to-Speech for real-time audio transcription and voice synthesis, supporting English and Hindi. A stateful ConversationManager handles multi-turn dialogues, collecting test booking details (phone, city, test name, date, time, collection type) and confirming via SMS using the Fast2SMS API.",
        images: [
            "../project/aicall.png",
        ],
        stack: ["Python", "FastAPI", "Gemini AI", "Google Speech-to-Text/TTS", "Twilio", "WebSocket", "WebRTC"],
        url: "https://github.com/astro1sumit",
    },
    {
        title: "MedNexus — RAG-Based Medical Report Summarizer",
        slug: "mednexus",
        description:
            "🩺 An AI-powered medical report summarization platform using Retrieval-Augmented Generation (RAG) to process and summarize medical documents — showcasing LLM integration, information retrieval, scalable AI workflows, and real-world healthcare problem solving.",
        images: [
            "../project/Backend-1.png",
        ],
        stack: ["Python", "RAG", "LLMs", "NLP", "Vector Database"],
        url: "https://github.com/astro1sumit",
    },
    {
        title: "Mystic Vibe",
        slug: "mysticvibe",
        description:
            "🔗 A mobile-first, responsive event-venue booking website built with HTML5, CSS3, JavaScript, and Bootstrap 5. Features a multi-step booking form (event type, guest count, catering), client-side validation, and modal confirmation, demonstrating polished frontend and form UI/UX skills. Deployed on Vercel.",
        images: [
            "../project/mysticvibe.png",
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Vercel"],
        url: "https://www.mysticvibe.in/",
    },
    {
        title: "Noida International Airport",
        slug: "noida-international-airport",
        description:
            "🔗 A high-performance, fully responsive web platform dedicated to the Noida International Airport. Designed as a dynamic, user-centric information hub, the platform delivers seamless access to live updates, project development phases, and essential traveler resources. The frontend was built using React.js and TypeScript, leveraging modern component architecture, lazy loading, and code-splitting for exceptional Core Web Vitals and a flawless mobile-first experience across all devices. The backend relies on a scalable Spring Boot architecture with secure, optimized RESTful APIs and a structured PostgreSQL database. CI/CD workflows via GitHub Actions fully automate build and deployment pipelines to guarantee high availability and stable updates.",
        images: [
            "../project/noida.png",
        ],
        stack: ["React.js", "TypeScript", "Spring Boot", "PostgreSQL", "RESTful API", "CI/CD", "GitHub Actions"],
        url: "https://noida-airport.com/",
    },
    {
        title: "MyBuildingGuru",
        slug: "mybuildingguru",
        description:
            "🔗 A comprehensive, full-stack digital platform engineered to streamline and simplify the complexities of construction, architecture, and building management. Built to act as a seamless bridge between clients, vendors, and project data, the platform provides a centralized hub for managing construction resources, exploring architectural designs, and tracking project lifecycles. The frontend was crafted using React.js and TypeScript, ensuring a highly responsive, modern, and mobile-first interface. The backend infrastructure is powered by Spring Boot, handling complex business logic, user authentication, and secure data transactions through optimized RESTful APIs. Relational data is managed via PostgreSQL, with automated CI/CD pipelines via GitHub Actions for zero-downtime updates.",
        images: [
            "../project/building-guru.png",
        ],
        stack: ["React.js", "TypeScript", "Spring Boot", "PostgreSQL", "RESTful API", "CI/CD", "GitHub Actions"],
        url: "https://mybuildingguru.com/",
    },
    {
        title: "Full-Stack E-Commerce Platform",
        slug: "ai-blog-assistant",
        description:
            "🔗 This project showcases a complete e-commerce solution built with React.js and Spring Boot. It features secure authentication using Spring Security and JWT, efficient PostgreSQL database management, and essential functionalities like product browsing, cart management, and checkout. The application reflects strong full-stack development and real-world implementation skills.",
        images: [
            "../project/shop-1.png",
            "../project/shop-2.png",
            "../project/shop-3.png",
            "../project/shop-4.png",
        ],
        stack: ["React", "Node.js", "SpringBoot", "Postgres", "RESTful API", "Spring Security and JWT", "end-to-end user transactions"],
        url: "https://e-shop-sigma-rosy.vercel.app/",
    },

    {
        title: "Barcode & QR Code Scanner",
        slug: "score-zyada",
        description:
            "The Barcode & QR Code Scanner is a fast and reliable web-based tool that allows users to scan and decode both barcodes and QR codes instantly using their device camera. It supports multiple formats such as product barcodes, URLs, and custom data, providing real-time results with high accuracy. Built using technologies like HTML, CSS, JavaScript, and React with libraries such as html5-qrcode, it offers a smooth and responsive scanning experience directly from the browser. The tool ensures secure data handling, quick processing, and user-friendly design optimized for both mobile and desktop devices. This project helped me learn how to integrate camera-based APIs, handle real-time data streams, and build interactive applications that bridge the gap between digital and physical data efficiently.",
        images: [
            "../project/score1.png",
            "../project/score2.png",
            "../project/score3.png",
        ],
        stack: ["Kotlin"],
        url: "https://github.com/astro1sumit/QRBarcodescannerapp",
    },
    {
        title: "WebConnect",
        slug: "teamhr-crm",
        description:
        "WebConnect is an advanced real-time communication platform designed to deliver seamless video conferencing and collaborative coding experiences. By optimizing WebRTC configurations, it successfully enhanced latency by 45%, ensuring smoother and faster video calls. The platform also features a collaborative code editor that supports unit, load, and integration testing, allowing multiple users to code and test simultaneously in real time. Continuous testing is automated through GitHub Actions, which triggers test pipelines on every push, improving development efficiency and reducing manual overhead by 30%. Built with TypeScript, JavaScript, and CSS, WebConnect demonstrates expertise in real-time communication, performance tuning, and CI/CD integration for modern web applications.",
        images: [
            "../project/t1.png",
            "../project/t2.png",
            "../project/t3.png",
            "../project/t4.png",
            "../project/t5.png",
            "../project/t6.png",
            "../project/t7.png",
            "../project/t8.png",
            "../project/t9.png",
        ],
        stack: ["TypeScript","JavaScript","CSS"],
        url: "https://webconnect-9xxh.vercel.app/",
    },
];

import java from "../images/java.svg";
import Cs from "../images/Cs.svg";
import python from "../images/python.svg";
import linux from "../images/linux.svg";
import javascript from "../images/javascript.svg";
import mongodb from "../images/mongodb.svg";
import sql from "../images/sql.svg";
import mysql from "../images/mysql.svg";
import typescript from "../images/typescript.svg";
import kotlin from "../images/kotlin.svg";
import WebStorm from "../images/WebStorm.svg";
import intellij from "../images/intellij.svg";
import xampp from "../images/xampp.svg";
import pycharm from "../images/pycharm.svg";
import redis from "../images/redis.svg";
import swagger from "../images/swagger.svg";

// Small generic placeholder icon (purple dot) for skills without a
// dedicated logo (e.g. concepts/practices rather than named tools).
const genericIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM4NTRjZTYiLz48L3N2Zz4=";


export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image:
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            },
            {
                name: "Redux Toolkit",
                image:
                    "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            },
            {
                name: "Tailwind Css",
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAA1VBMVEWWHS0WvssVHi0XHSwVHi4WvsoYHC0WHS8XvcwWvskWHisWHCwWvc0YHC8UHy0ZHC0QFCMXGCkieYUkvMcSESUUEiMhipcrtMEQEycouscNIS8rnqwWHTEVGCYnk54VHyoKKDkQO0scYm0WTVkPM0EVQU8LGi4PCyMIEyYJIDILECMkmKcrrbsIHC0JDh0VUmEif4wQDikfbHgIJzIPND0URlkUUlwaYHINLD8lrLUiT18IHzUcW2wVFiAos8UOFi0OABklkKMdcHofhI0iOUkNO0MXUWTrtrP8AAAMM0lEQVR4nO2d6XqqMBBAJUQodcG1tlqpS2tre9//+W6oWgWyTAiB4DfnNwaOZiQkk6HTQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCm2X5Pu3Wda/Y91zl8Mhaan3KY9AghD8btQJgeAhL5YMVtEgTRp+GXHx9Cj0EGU7N2AHz1g/RUXm8EOry76PnsaHqIjc76SrwTQQI7b1nO18vw+5Djx4SeDifvRuc9ns/KzhsszDu8kFcSXk7kRerfZLsmf9e1MTpx8ifoeSH5MWpLzOOBXE/jEVVYxX+/9q+h0alvBW2F4tcq8DwNwb/eWb0g6z79qkOxuwty55ALjtYke3i1gp7fW1R6V/ygNHcGqWA30zttCLJQjF6Nmrzl7UAK7csEx1FYOLxyQXYFhzejRi8854JPKbjjHW9BkN0VV89GzabE+3zwqQTnPd7hVgRZKO4MQzH3XwgRXBT7pzVBNkaiHwbtzjec4FMJ9rkXY0vQJBQnT4X/QhcF2eitVCjGS5meS4Kp4l47FMe+KPgcFNQPxVl+INKw4FolmIYi/ClcHnyOCrJ+eoSFYvweAZpzTzBVXAKeq79VweeuYBqKY0VL23UEa0pXMKxFkF3WeiZpZ/gpGJeZCw5qEmSjt6eJqJl3zlNARYJ0UZdgqsgPxRdg8JUR9CPht1q9IPs6ve9CE9sEGnwlBKm/NfLTFfS8KBeKw+IjeHWCoi5jU5Cd9POm0zwEGsGnKxj1zZ9K9QXT6cX38/c6HSjHZeUFqfdirFdO8DcUmeKsz52RqEawgt5pIMgukhwoKftZkeDq2mAVcyZGgiYIBZeXu001vfOXTf1+YsHJqctX1TvdE+zMCQ1pZb3TQcHO8Gex11oDbptg9aAgCrZX0De5Rco+7IYgJUk/LDPSPH14nRTXBZ0SjH4nfKHTSFnYjZp9OP4RPSa6IEjPuRvxkug+DvnBZWZjKjB0QfA60TN5gs8m/V795vpAfOR/0gHBcHdzyEyyEpYnO9H/zf+gA4I0m7umXE45k1+qeXRA8AARVC6InSiMktsjyELxqFLkLJe2SVC+KJ0GHyf3ZNoqQW5OzxlB9lDbBDvxjt9Pg/4X9/jWCfJTe8QZfC0UZH8euanQMBDnYLZSMJvbyoJPkkXbUsFOd3EZvUXyPGhTwfnuacmPbjhlBDudUcIUfeIrZi/NBFm8hz7tmeRbdcoKsms/HhJlArSJYPfyj92TLSyrGZQUBGEgeL3n+k9G1+CmYHbUZHQNVgVfygk+Z8e9Zmkk7gnG+1w20Z0JFp8970qQN3twT4LchIY7Elxwj78fwck/7uH3Iyg4/H4EBbOMZoLcJlEQxvNKb2a7ZYLCnT13Iije2XMXgtL1DJHguDWCis0FbRdULmS0XFC9FFWrIP+7Li8I2NkjFuR/My4Jgnb2tFcwfodlkLZVEJySUatg2XnRAjPwzh5hLQsrgntuo9qCk0/45gJ/JWjEiuCQcrfTaApq7ewR1pP5sCHYeeYNqvQEtXb2UF84FW9HkHtn1hEc6ezs8SNJOrYtQc7YCi6otbNHtn/NpmDxBg0W1NrZI9+BaFUw/3wDFNTa2UND1R5Sq4Lpn/S1fQqpfTRKNHb2QPZCWBZkofi36hEAUvvn/zSCD7SP27Zgmq91mkYJ14CDBXlaPMgGtBfCvmAaigGlwQZSfwwsSAlwmb0OQfbHsVzCKnMBBf0AXJimHkEwMMFgBc8DeW2foF6dNn5BIIcFQ16KpZihYETrqqA8y4sDvw6Cs4KKLK8CbwPRoM9JQV+zSGK+/KHrgv5Ga49qV7hO46og0coRFKdKuyroJxrtyJPd3RQM4RVSLsPfdgn6R2AboA0nDgp6FDb8HMuDz2FBUB+FrNO4KugRZf1v2DqNs4Kqis/xErwr0bAMdXlUY1HZk8TYg08V11Smvoj6aUJUfF1nx6VH9QZFFQJ4HuQWX59oVGBLW2jKD/ZEHxY6mNY6TbQ2rMllAnBOJlv7Rm+dprqyOWUAz6pFyeVngJc/9G5LYzXEF7dmNI/zs73OImmuuFkzaJSDCnv9Rb/XluC7MNGJJz/UKDfAKzDYBJzC+1VQac0qQ0YlS8dJ9aSLpLVTrvifGNUiaQP86Px5KKBEtUjaBJWFIqxUchNoJVqI9Y5OBV+WqWcaijrlyhvhQbt00C00NNyLXAPDhV7poBvKvDKgCbTSLm7oVVqt0Spl7orOB18W3VA0e/FKE2gmr5m+OqcJ4APUakul1sgLKBTJ4bHpCy2PeoAaBtW9gKwJFKHYzuDLIhugRoIiUC1jKpigr+ONqjXBuyvaexFnExQGqHZfpdoE2ddt2H4ZbiNcB6hk0OhcvD1OoRhGD47OSJjDQrF3d8GXw+H5FgRBEARBEARBEARBEARBEARBEARBEARBEMZ/Z7h0SlKcxhsAAAAASUVORK5CYII=",
            },
            {
                name: "Python",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
            },
            {
                name: "JavaScript",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            },
            {
                name: "HTML5",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            },
            {
                name: "CSS3",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            },
            {
                name: "Bootstrap",
                image:
                    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            },
            {
                name: "Material UI",
                image:
                    "data:image/png;base64,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",
            },
            {
                name: "React Native",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Java",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
            },
            {
                name: "SpringBoot",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg",
            },
            {
                name: "Node Js",
                image: "https://nodejs.org/static/images/logo.svg",
            },
            {
                name: "Express Js",
                image:
                    "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
            },
            {
                name: "My Sql",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            },
            {
                name: "MongoDB",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            },
            {
                name: "JavaScript",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            },
            {
                name: "C#",
                image: Cs,
            },
            {
                name: "Kotlin",
                image:kotlin,
            },
            {
                name: "Redis",
                image:redis,
            },
            {
                name: "Swagger",
                image:swagger,
            },
            {
                name: "FastAPI",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
            },
            {
                name: "Pandas",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
            },
            {
                name: "NumPy",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
            },
            {
                name: "Scikit-learn",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg",
            },
        ],
    },
    {
        title: "AI / LLMs",
        skills: [
            {
                name: "Gemini AI",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
            },
            {
                name: "Google Speech-to-Text / TTS",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
            },
            {
                name: "LangGraph",
                image: genericIcon,
            },
            {
                name: "Agent-based Workflows",
                image: genericIcon,
            },
            {
                name: "ML Model Integration",
                image: genericIcon,
            },
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            {
                name: "AWS (S3, EC2)",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            },
            {
                name: "Docker",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
            },
            {
                name: "GitHub Actions CI/CD",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",
            },
            {
                name: "Jenkins",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
            },
            {
                name: "Vercel",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
            },
            {
                name: "Serverless Architecture",
                image: genericIcon,
            },
            {
                name: "Microservices",
                image: genericIcon,
            },
        ],
    },
    {
        title: "Databases",
        skills: [
            {
                name: "PostgreSQL",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
            },
            {
                name: "Supabase",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
            },
            {
                name: "DynamoDB",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            },
            {
                name: "NoSQL",
                image: genericIcon,
            },
        ],
    },
    {
        title: "Language",
        skills: [
            {
                name: "Java",
                image:java,
            },
            {
                name: "C#",
                image: Cs,
            },
            {
                name: "Python",
                image: python,
            },
            {
                name: "Linux",
                image:linux,
            },
            {
                name: "JavaScript",
                image:javascript,
            },
            {
                name: "MongoDB",
                image:mongodb,
            },
            {
                name: "SQL",
                image:sql,
            },
            {
                name: "MySQL",
                image:mysql,
            },
            {
                name: "TypeScript",
                image:typescript,
            },
            {
                name: "Kotlin",
                image:kotlin,
            },
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
            },
            {
                name: "GitHub",
                image:
                    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            },
            {
                name: "VS Code",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
            },
            {
                name: "Postman",
                image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
            },

            {
                name: "WebStorm",
                image:WebStorm,
            },
            {
                name: "Intellij IDEA",
                image: intellij,
            },
            {
                name: "Xampp",
                image:xampp,
            },
            {
                name: "Pycharm",
                image:pycharm,
            },
            {
                name: "Figma",
                image:
                    "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb.png",
            },
        ],
    },
];

import ceaImage from "../images/Untitled design.png";
import guftguImage from "../images/Untitled design2.png";
import IOMImage from "../images/IOMImage.png";
import webpyImage from "../images/webpyImage.png";
export const experiences = [
    {
        id: 0,
        img: IOMImage,
        role: "Software Developer Executive",
        company: "International Online Media (IOM)",
        date: "Mar 2026 – Present",
        desc: "Owned end-to-end delivery of 5+ major features — role-based access, KYC verification, WhatsApp OTP auth — across React Native, Node.js/Express, and Supabase/PostgreSQL, shipping to production on the Google Play Store with zero critical regressions. Architected and shipped Load24, a full-stack logistics marketplace connecting truck owners and shippers, from PostgreSQL schema design on Supabase through a Node.js/Express REST API to a live release on the Google Play Store. Designed the product's core CRM — client management, lead tracking, and multi-role permissions (Shipper / Vehicle Owner / Staff) — on a normalized relational schema with Row-Level Security enforcement. Built and integrated a production AI voice-calling agent (FastAPI, Gemini AI, Twilio Media Streams, Google Speech-to-Text/TTS) for automated real-time customer communication, supporting English and Hindi. Owned the full mobile release lifecycle — build config, Play Store submission, testing, and technical documentation — as the sole/lead developer.",
        skills: ["React Native", "Node.js", "Express", "Supabase", "PostgreSQL", "RLS", "RBAC", "WhatsApp OTP", "KYC", "FastAPI", "Gemini AI", "Twilio", "Google Speech-to-Text/TTS"],
        doc: "",
    },
    {
        id: 1,
        img: webpyImage,
        role: "Full Stack Developer Intern",
        company: "WebPy SEO Club",
        date: "Sept 2025 – Feb 2026",
        desc: "🚀 6 Months of Full Stack Development Experience. Contributed to 4+ production web applications using React JS, Node.js, HTML, CSS, JavaScript and PostgreSQL within Agile bi-weekly sprints, delivering features consistently with zero critical regressions. Designed and deployed 2+ scalable REST APIs using Spring Boot and Node.js; built CI/CD pipelines and conducted load testing validating stability under 500+ concurrent requests at <200ms response time. Implemented JWT authentication eliminating unauthorized access vulnerabilities across 3+ permission tiers; applied RBAC patterns applicable to dashboard and multi-role product features. Integrated frontend (React JS) with backend services and worked on data-driven UI components including dashboards and reporting interfaces.",
        skills: ["React JS", "Node.js", "Spring Boot", "PostgreSQL", "JWT", "RBAC", "CI/CD", "REST APIs", "GitHub Actions", "Agile", "HTML", "CSS", "JavaScript", "Load Testing"],
        doc: "",
    },
    {
        id: 2,
        img: guftguImage,
        role: "Data Science Intern",
        company: "Technical Guftgu",
        date: "June 2024 - August 2024",
        desc: "Built a flight delay prediction model that enhanced baseline accuracy by 22% using real-world aviation data. Processed 100k+ rows with Pandas/NumPy, boosting pipeline efficiency by 40%. Achieved F1-score of 0.89 using Logistic Regression and Random Forest models.",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Python", "R", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly","Power BI","PyTorch","Hadoop", "GitHub Actions"],
        doc: "",
    },
    {
        id: 3,
        img: ceaImage,
        role: "Web Developer Intern",
        company: "CEA Department, GLA University",
        date: "June 2024 - August 2024",
        desc: "Designed and deployed 20+ responsive web pages, accelerated student portal engagement by 25%. Revitalized UI/UX for Interview site with design team, reducing bounce rate by 18%.",
        skills: ["Figma", "Ejs", "Canva", "HTML5", "Tailwind CSS", "JavaScript", "React.js", "Node.js","Python","MySQL","Firebase","Git & GitHub","GitLab","GitHub Pages","VS Code","Postman"],
        doc: "",
    },
];

export const education = [
    {
        id: 0,
        img: ceaImage,
        school: "GLA University (Mathura, UP)",
        date: "August 2022 - May 2026",
        grade: "7 CGPA",
        desc: "I am currently pursuing a Bachelor of Technology in Computer Science & Engineering at GLA University (Mathura, UP), with a CGPA of 7.0. Relevant coursework includes Data Structures & Algorithms, System Design, Object-Oriented Programming, and Databases, among others. I am also a member of the Advance Certificate in Software Engineering, where I am learning and working on exciting projects with a team of talented developers.",
        degree:"Bachelor of Technology in Computer Science and Engineering",
    },
];

export const achievements = [
    {
        id: 0,
        title: "Smart India Hackathon",
        desc: "Led a team selected for the Top 10 (Software track) out of 200+ competing teams.",
        tag: "Hackathon",
    },
    {
        id: 1,
        title: "600+ LeetCode Problems Solved",
        desc: "Strong problem-solving and algorithmic thinking applicable to debugging complex full-stack issues.",
        tag: "Problem Solving",
        link: "https://leetcode.com/u/ASTROSUMIT/",
    },
    {
        id: 2,
        title: "Postman Student Expert",
        desc: "Certified for API design, testing, and documentation practices.",
        tag: "Certification",
    },
    {
        id: 3,
        title: "Cisco Cybersecurity Essentials",
        desc: "Certified in core cybersecurity principles and best practices.",
        tag: "Certification",
    },
    {
        id: 4,
        title: "NPTEL",
        desc: "Certified coursework from IIT Guwahati / IIT Kharagpur.",
        tag: "Certification",
    },
];

import hero from "../images/HeroImage.png";
import image from "../images/MOVIEpage.png";
export const projects = [
    {
        id: 29,
        title: "CentralWPDA",
        date: "2025 - 2026",
        description:
            "🔗 A national registry and guild platform for the Indian film, OTT, television, and digital media industry — verifying creative professionals' identities, registering their works, and connecting them with casting opportunities, jobs, and collaborations. Features a Talent Directory, a Creative Rights Registry (timestamped registration with certificates for scripts, screenplays, stories, lyrics, music, and AI-assisted works), a Casting Portal, an Industry Marketplace for crew hiring, and a Learning & Growth hub. Ships as a Progressive Web App with 42,300+ verified members, 9,800+ registered works, and 27 state chapters live in production.",
        image: "../project/central.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PWA"],
        category: "Website",
        github: "https://www.centralwpda.org/index.html",
        webapp: "https://www.centralwpda.org/index.html",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 25,
        title: "Mystic Vibe — Event Venue Website",
        date: "2025 - 2026",
        description:
            "🔗 A mobile-first, responsive event-venue booking website built with HTML5, CSS3, JavaScript, and Bootstrap 5. Features a multi-step booking form (event type, guest count, catering), client-side validation, and modal confirmation, demonstrating polished frontend and form UI/UX skills. Deployed on Vercel.",
        image: "../project/mysticvibe.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Vercel"],
        category: "Website",
        github: "https://www.mysticvibe.in/",
        webapp: "https://www.mysticvibe.in/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 22,
        title: "Noida International Airport",
        date: "2025 - 2026",
        description:
            "🔗 A high-performance, fully responsive web platform dedicated to the Noida International Airport. Designed as a dynamic, user-centric information hub, the platform delivers seamless access to live updates, project development phases, and essential traveler resources. The frontend was built using React.js and TypeScript, leveraging modern component architecture, lazy loading, and code-splitting for exceptional Core Web Vitals and a flawless mobile-first experience. The backend relies on a scalable Spring Boot architecture with secure, optimized RESTful APIs and a structured PostgreSQL database. CI/CD workflows via GitHub Actions fully automate build and deployment pipelines to guarantee high availability and stable updates.",
        image: "../project/noida.png",
        tags: ["React.js", "TypeScript", "Spring Boot", "PostgreSQL", "RESTful API", "CI/CD", "GitHub Actions"],
        category: "Website",
        github: "https://noida-airport.com/",
        webapp: "https://noida-airport.com/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 23,
        title: "MyBuildingGuru",
        date: "2025 - 2026",
        description:
            "🔗 A comprehensive, full-stack digital platform engineered to streamline and simplify the complexities of construction, architecture, and building management. Built to act as a seamless bridge between clients, vendors, and project data, the platform provides a centralized hub for managing construction resources, architectural designs, and project lifecycles. The frontend uses React.js and TypeScript for a highly responsive, modern, mobile-first interface. The Spring Boot backend handles complex business logic, authentication, and secure RESTful APIs. Relational data — from vendor profiles to project milestones — is managed via PostgreSQL, with automated CI/CD pipelines via GitHub Actions for zero-downtime updates.",
        image: "../project/building-guru.png",
        tags: ["React.js", "TypeScript", "Spring Boot", "PostgreSQL", "RESTful API", "CI/CD", "GitHub Actions"],
        category: "Website",
        github: "https://mybuildingguru.com/",
        webapp: "https://mybuildingguru.com/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 24,
        title: "BartKart — Marketplace App, Website & Admin Panel",
        date: "2025",
        description:
            "📱🌐 A full-stack peer-to-peer marketplace built as a mobile app, companion website, and internal admin panel — supporting barter, rental, and sale listings, with 40+ screens and end-to-end Supabase integration for auth, database, storage, and realtime updates. The React Native + TypeScript app pairs with a Node.js/Express backend and admin panel using Supabase service-role access for admin operations (KYC review, user bans, listing moderation), enforcing Row-Level Security (RLS) on the client while safely bypassing it server-side for privileged workflows. Built with Razorpay payments and Firebase Cloud Messaging, styled with NativeWind (Tailwind for React Native).",
        image: "../project/bartkart.png",
        tags: ["React Native", "TypeScript", "Node.js/Express", "Supabase", "Razorpay", "Firebase Cloud Messaging", "RLS"],
        category: "App",
        github: "https://github.com/astro1sumit/BARTKART",
        webapp: "https://github.com/astro1sumit/BARTKART",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 26,
        title: "Load24 — Logistics App, Website & Admin Panel",
        date: "2026",
        description:
            "📱🌐 A full-stack logistics marketplace delivered as a mobile app, website, and admin panel (React Native + Node/Express + Supabase/PostgreSQL) connecting truck owners and shippers, architected as a monorepo with a mobile client, web frontend, and REST backend. Secure authentication and identity verification including WhatsApp OTP login, MPIN app-lock, and a KYC document upload/verification flow with role-based required-document logic and consent tracking — covering both client-side (RN) and server-side (Express middleware, Supabase RLS) enforcement. The admin panel drives the product's core CRM — client management, lead tracking, and multi-role permissions (Shipper / Vehicle Owner / Staff).",
        image: "../project/Load24.png",
        tags: ["React Native", "Node.js/Express", "Supabase", "PostgreSQL", "React Query", "React Native Paper", "NativeWind"],
        category: "App",
        github: "https://load24.in/",
        webapp: "https://load24.in/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 27,
        title: "AI Call Agent — Healthcare Voice Bot",
        date: "2026",
        description:
            "🎙️ A production-grade AI voice call agent integrated with Twilio Media Streams and WebSockets, enabling real-time phone call handling for a healthcare diagnostic platform (Redcliffe Labs). Integrates Google Gemini AI as the conversational brain and Google Cloud Speech-to-Text / Text-to-Speech for real-time audio transcription and voice synthesis, supporting English and Hindi. A stateful ConversationManager handles multi-turn dialogues, collecting test booking details and confirming via SMS using the Fast2SMS API.",
        image: "../project/ai-blog-1.png",
        tags: ["Python", "FastAPI", "Gemini AI", "Google Speech-to-Text/TTS", "Twilio", "WebSocket", "WebRTC"],
        category: "Backend",
        github: "https://github.com/astro1sumit",
        webapp: "https://github.com/astro1sumit",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 28,
        title: "MedNexus — RAG-Based Medical Report Summarizer",
        date: "2026",
        description:
            "🩺 An AI-powered medical report summarization platform using Retrieval-Augmented Generation (RAG) to process and summarize medical documents — showcasing LLM integration, information retrieval, scalable AI workflows, and real-world healthcare problem solving.",
        image: "../project/Backend-1.png",
        tags: ["Python", "RAG", "LLMs", "NLP", "Vector Database"],
        category: "Backend",
        github: "https://github.com/astro1sumit",
        webapp: "https://github.com/astro1sumit",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 12,
        title: "QR Barcode Generator",
        date: "",
        description:
            "🔗 QR Barcode Generator – The QR Barcode Generator is a smart and efficient tool that instantly creates custom QR codes and barcodes for any text, link, or data with just one click. It supports generating codes for text, URLs, contact details, and product IDs, along with instant download and share options in PNG or SVG formats. The tool offers customization for color, size, and background, and provides a real-time preview before downloading. Built with React, Node.js, Express, HTML, CSS, and JavaScript, and powered by libraries like qrcode and JsBarcode, it ensures secure and fast code generation. This project helped me understand how to integrate dynamic libraries into real-world web apps, manage real-time data rendering, and build responsive tools that simplify daily tasks like generating shareable and scannable codes efficiently.",
        image:"../project/ai-blog-1.png",
        tags: ["JavaScript", "HTML", "CSS","API", "Postman"] ,
        category: "Website",
        github: "#",
        webapp: "https://astro1sumit.github.io/QRCodeGenerator/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 9,
        title: "MOVIES site",
        date: "",
        description:
            "🚀 Successfully launched A movie search app that fetches real-time data from a movie API. Users can explore movies by title, genre, or year with detailed info and posters. 🎉📊✨",
        image:image,
        tags: ["HTML", "CSS", "JavaScript", "API", "Postman"] ,
        category: "Website",
        github: "https://github.com/astro1sumit/MOVIEpage",
        webapp: "https://astro1sumit.github.io/MOVIEpage/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 13,
        title: "Barcode & QR Code Scanner",
        date: "",
        description:
            "The Barcode & QR Code Scanner is a fast and reliable web-based tool that allows users to scan and decode both barcodes and QR codes instantly using their device camera. It supports multiple formats such as product barcodes, URLs, and custom data, providing real-time results with high accuracy. Built using technologies like HTML, CSS, JavaScript, and React with libraries such as html5-qrcode, it offers a smooth and responsive scanning experience directly from the browser. The tool ensures secure data handling, quick processing, and user-friendly design optimized for both mobile and desktop devices. This project helped me learn how to integrate camera-based APIs, handle real-time data streams, and build interactive applications that bridge the gap between digital and physical data efficiently.",
        image:"../project/score3.png",
     tags: [
            ["Kotlin"],
        ],
        category: "App",
        github: "https://github.com/astro1sumit/QRBarcodescannerapp",
        webapp: "https://github.com/astro1sumit/QRBarcodescannerapp",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 14,
        title: "WebConnect",
        date: "",
        description:
        "WebConnect is an advanced real-time communication platform designed to deliver seamless video conferencing and collaborative coding experiences. By optimizing WebRTC configurations, it successfully enhanced latency by 45%, ensuring smoother and faster video calls. The platform also features a collaborative code editor that supports unit, load, and integration testing, allowing multiple users to code and test simultaneously in real time. Continuous testing is automated through GitHub Actions, which triggers test pipelines on every push, improving development efficiency and reducing manual overhead by 30%. Built with TypeScript, JavaScript, and CSS, WebConnect demonstrates expertise in real-time communication, performance tuning, and CI/CD integration for modern web applications.",
        image:"../project/t1.png",
        tags: [
            "Convex",
            "Html",
            "Css",
            "JavaScript",
            "Typescript",
            "API",
            "GitHub Actions",
        ],
        category: "Website",
        github: "https://github.com/astro1sumit/webconnect",
        webapp: "https://webconnect-9xxh.vercel.app/",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 15,
        title: "3D carousel slider!",
        date: "",
        description:
            "🔹Excited 🎉 to share a new UI project I designed in Figma – a 3D carousel slider! ️  This isn't just any slider – it's built for flexibility, perfect for showcasing anything from products to campaigns. The design process was a journey of brainstorming and iteration. I used a mix of Figma's powerful tools and Canva for the finer touches to create a visually stunning and user-friendly experience. 💳📊🚀✨",
        image:"../project/f1.png",
        tags: [
            "Figma", "Design"
        ],
        category: "Figma",
        github: "https://www.figma.com/design/GGPQcDwwKEUNEcpvhVu4tO/Untitled?node-id=0-1&p=f",
        webapp: "https://www.figma.com/design/GGPQcDwwKEUNEcpvhVu4tO/Untitled?node-id=0-1&p=f",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },

    {
        id: 16,
        title: "Full-Stack E-Commerce Platform",
        description:
            "🔗 In conclusion, this full-scale e-commerce application demonstrates strong full-stack development capabilities by integrating a dynamic React.js frontend with a secure and scalable Spring Boot backend. The use of Spring Security and JWT ensures robust authentication and authorization, protecting sensitive user data and application resources. A well-structured PostgreSQL database efficiently manages complex relationships between users, products, and orders. Core e-commerce features such as product browsing, shopping cart management, and a seamless checkout process provide a complete end-to-end shopping experience. Overall, the project highlights proficiency in modern web technologies, secure API design, and real-world application development.",
        image: "../project/shop-2.png",
        category: "Website",
        tags: ["React", "Node.js", "SpringBoot", "Postgres", "RESTful API", "Spring Security and JWT", "end-to-end user transactions"],
        webapp: "https://e-shop-sigma-rosy.vercel.app/",
        github:"https://github.com/astro1sumit/e-shop",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },

    {
        id: 17,
        title: "E-commerce Website Figma Design",
        description:"This Figma design presents a clean, intuitive interface that balances typography and layout for clear user interaction. It showcases visually cohesive elements with consistent spacing, hierarchy, and color use to guide navigation. The layout supports user tasks efficiently, reflecting thoughtful UI/UX principles and an organized structure for usability and engagement.",
        image: "../project/figma-2.png",
        category: "Design",
        tags: ["Figma", "Design"],
        webapp: "https://www.figma.com/design/XEb5zgsQ1Z8VxOm6qcuGbN/Untitled",
        github:"https://www.figma.com/design/XEb5zgsQ1Z8VxOm6qcuGbN/Untitled",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 18,
        title: "Music Website Figma Design",
        description:"This Figma design presents a clean, intuitive interface that balances typography and layout for clear user interaction. It showcases visually cohesive elements with consistent spacing, hierarchy, and color use to guide navigation. The layout supports user tasks efficiently, reflecting thoughtful UI/UX principles and an organized structure for usability and engagement.",
        image: "../project/figma-3.png",
        category: "Design",
        tags: ["Figma", "Design"],
        webapp: "https://www.figma.com/design/ZDMDD0Z0Ij1dc4OqVYBD74/Music-Player-Website---App--Melodies---Community-?node-id=0-1&p=f",
        github: "https://www.figma.com/design/ZDMDD0Z0Ij1dc4OqVYBD74/Music-Player-Website---App--Melodies---Community-?node-id=0-1&p=f",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 19,
        title: "Real Estate Website Figma Design",
        description:"This Figma design presents a clean, intuitive interface that balances typography and layout for clear user interaction. It showcases visually cohesive elements with consistent spacing, hierarchy, and color use to guide navigation. The layout supports user tasks efficiently, reflecting thoughtful UI/UX principles and an organized structure for usability and engagement.",
        image: "../project/figma-4.png",
        category: "Design",
        tags: ["Figma", "Design"],
        webapp: "https://www.figma.com/design/WNjRqKsoS9Q2Y5Wtv0nbc9/Website-of-architects---free-website--Community-?node-id=0-1&p=f",
        github: "https://www.figma.com/design/WNjRqKsoS9Q2Y5Wtv0nbc9/Website-of-architects---free-website--Community-?node-id=0-1&p=f",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 20,
        title: "Books Service REST API OpenAPI",
        description:"This repository contains a Books Service REST API developed using Spring Boot, designed to perform complete CRUD operations for managing book data. The project integrates Swagger / OpenAPI for clear, interactive API documentation, making endpoints easy to understand and test. It follows clean RESTful principles with proper request mappings, response handling, and layered architecture. The application demonstrates backend development skills including controller design, service logic, and repository usage. Swagger UI enables developers to visualize and validate APIs efficiently. Overall, this project highlights strong knowledge of Spring Boot, REST APIs, and API documentation best practices, making it suitable for real-world backend applications and portfolio showcasing.",
        image: "../project/Backend-1.png",
        category: "Backend",
        tags: ["Spring Boot", "REST API", "Backend","CRUD operations", "Swagger / OpenAPI", "RESTful principles", "backend"],
        webapp: "https://github.com/astro1sumit/books_service_Swagger_OpenAPI",
        github: "https://github.com/astro1sumit/books_service_Swagger_OpenAPI",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
    {
        id: 21,
        title: "Event-Booking-System-API",
        description:"This repository hosts the Event-Booking-System-API, a RESTful backend built with Spring Boot to manage events and user bookings. It supports full CRUD operations for events, users, and reservations, ensuring seamless interaction between clients and the server. The API uses clear routing, request validation, and structured responses for reliability and ease of use. Proper exception handling and service layering improve maintainability and scalability. This project showcases expertise in backend development, RESTful design principles, and building event-driven services. Ideal for real-world use cases, it demonstrates practical skills in API design and server-side application development, making it a strong addition to your professional portfolio.",
        image: "../project/Backend-2.png",
        category: "Backend",
        tags: ["Spring Boot", "REST API", "Backend","CRUD operations", "Swagger / OpenAPI", "RESTful principles", "backend"],
        webapp: "https://github.com/astro1sumit/Event-Booking-System-API",
        github: "https://github.com/astro1sumit/Event-Booking-System-API",
        member: [
            {
                name: "Sumit Maurya",
                img: hero,
                linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
                github: "https://github.com/astro1sumit",
            },
        ],
    },
];

export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
];