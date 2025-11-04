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
        "https://drive.google.com/file/d/1Nos20ioj4EqdbRrGkypm3DqFziVKf2Vr/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/sumit-maurya-57191a255/",
    twitter: "",
    insta: "",
};

export const featuredProjects = [
    {
        title: "QR Barcode Generator",
        slug: "ai-blog-assistant",
        description:
            "🔗 QR Barcode Generator – The QR Barcode Generator is a smart and efficient tool that instantly creates custom QR codes and barcodes for any text, link, or data with just one click. It supports generating codes for text, URLs, contact details, and product IDs, along with instant download and share options in PNG or SVG formats. The tool offers customization for color, size, and background, and provides a real-time preview before downloading. Built with React, Node.js, Express, HTML, CSS, and JavaScript, and powered by libraries like qrcode and JsBarcode, it ensures secure and fast code generation. This project helped me understand how to integrate dynamic libraries into real-world web apps, manage real-time data rendering, and build responsive tools that simplify daily tasks like generating shareable and scannable codes efficiently.",
        images: [
            "../project/ai-blog-1.png",
            "../project/ai-blog-2.png",
            "../project/ai-blog-3.png",
        ],
        stack: ["JavaScript", "HTML", "CSS"],
        url: "https://github.com/astro1sumit/QRCodeGenerator",
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
                    "data:image/png;base64,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",
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
export const experiences = [
    {
        id: 0,
        img: ceaImage,
        role: "Web Developer Intern",
        company: "CEA Department, GLA University",
        date: "June 2024 - August 2024",
        desc: "Designed and deployed 20+ responsive web pages, accelerated student portal engagement by 25%. Revitalized UI/UX for Interview site with design team, reducing bounce rate by 18%.",
        skills: ["Figma", "Ejs", "Canva", "HTML5", "Tailwind CSS", "JavaScript", "React.js", "Node.js","Python","MySQL","Firebase","Git & GitHub","GitLab","GitHub Pages","VS Code","Postman"],
        doc: "",
    },
    {
        id: 1,
        img: guftguImage,
        role: "Data Science Intern",
        company: "Technical Guftgu",
        date: "June 2024 - August 2024",
        desc: "Built a flight delay prediction model that enhanced baseline accuracy by 22% using real-world aviation data. Processed 100k+ rows with Pandas/NumPy, boosting pipeline efficiency by 40%. Achieved F1-score of 0.89 using Logistic Regression and Random Forest models.",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Python", "R", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly","Power BI","PyTorch","Hadoop", "GitHub Actions"],
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
        desc: "I am currently pursuing a Bachelor of Information Technolody at GLA University (Mathura, UP). I have completed 7 semesters and have a CGPA of 7. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks,Agile Methodology, among others. I am also a member of the Advance Certificate in Software Engineering, where I am learning and working on exciting projects with a team of talented developers.",
        degree:"Bachelor of Technology in Computer Science and Engineering",
    },
];

import hero from "../images/HeroImage.png";
import image from "../images/MOVIEpage.png";
export const projects = [
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
            "Figma",
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
    // {
    //     id: 16,
    //     title: "GrandDoor Artisanry",
    //     date: "",
    //     description:
    //         "🔹 GrandDoor Artisanry A luxurious platform showcasing handcrafted doors with customizable options. Combines elegance and functionality to deliver an unparalleled user experience while managing orders and inquiries efficiently. 🚪✨🎨",
    //     image:
    //         "https://i.pinimg.com/736x/45/30/1f/45301f233bb772321aa0a70e478b8669.jpg",
    //     tags: ["Html", "Css", "Java Script", "Bootstrap", "Php", "Ajax"],
    //     category: "Website & CRM",
    //     github: "#",
    //     webapp: "https://granddoor.in/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 0,
    //     title: "Youtube Clone",
    //     date: "Nov 2023 - Dec 2023",
    //     description:
    //         "A YouTube clone  facilitating video discovery, viewing, and community engagement. Emulating the popular platform, it prioritizes seamless navigation. with search facilities and trending features.",
    //     image:
    //         "https://i.pinimg.com/736x/68/00/78/68007842618802e65c30d40e3f119fc6.jpg",
    //     tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/Youtube-clone/tree/main/youtube-clone",
    //     webapp: "https://youtube-clone-reacts.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 10,
    //     title: "Insta-Clone",
    //     date: "Jan 2024",
    //     description:
    //         "Express Node backend powers this Instagram clone, replicating the popular platform's features. With a responsive design, users can share, like, and comment on photos, while the backend manages data and interactions. The combination delivers a seamless experience mirroring the functionality of Instagram with server-side support",
    //     image:
    //         "https://i.pinimg.com/736x/d9/72/fd/d972fdd09d1588feb59c942c253d4746.jpg",
    //     tags: ["React Js", "MongoDb", "Node Js", "Express Js", "EJB"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/Instagram-Clone/tree/main/instaclone",
    //     webapp:
    //         "https://github.com/manishgupta72/Instagram-Clone/tree/main/instaclone",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 11,
    //     title: "Pintrest Profile",
    //     date: "Jan 2024",
    //     description:
    //         "This Express Node backend-driven Pinterest profile clone replicates the platform's aesthetic, enabling users to fetch and display all posts seamlessly. With responsive design, users experience the familiar Pinterest profile layout, showcasing an array of posts. The backend efficiently manages data retrieval, enhancing the overall user experience.",
    //     image:
    //         "https://i.pinimg.com/736x/ec/35/c4/ec35c4047f654573d7430976d88f892d.jpg",
    //     tags: ["React Js", "MongoDb", "Node Js", "Express Js", "EJB"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/pintrest-clone/tree/main/pintrest",
    //     webapp:
    //         "https://github.com/manishgupta72/pintrest-clone/tree/main/pintrest",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 1,
    //     title: "SocialMedia UI",
    //     date: "NOV 2023",
    //     description:
    //         "This social media UI clone replicates the popular platform's design with a sleek and intuitive interface. Featuring a familiar layout, it includes a news feed for seamless content consumption, profile pages for personal customization, and a chat function for real-time communication.",
    //     image:
    //         "https://i.pinimg.com/736x/9e/4f/87/9e4f87176b3c6c3d230c46afc0c29622.jpg",
    //     tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/SocialMediaAppUI/tree/main/client",
    //     webapp: "https://insta-clone-frontend.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 2,
    //     title: "Book Store",
    //     date: "NOV 2023 ",
    //     description:
    //         "This book store application includes a user-friendly interface for adding and fetching books, seamlessly managed through an admin panel. Users can easily contribute new books, while the admin panel ensures efficient content management. The streamlined design enhances accessibility, making it a convenient platform for book enthusiasts and administrators alike",
    //     image:
    //         "https://i.pinimg.com/736x/e7/ec/b5/e7ecb5ea5d935a0ae0e337595dc1f78f.jpg",
    //     tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Context"],
    //     category: "Web App",
    //     github: "https://github.com/manishgupta72/bookstore",
    //     webapp: "https://bookstore-ten-khaki.vercel.app/books",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 3,
    //     title: "textUtills",
    //     date: "Oct 2023",
    //     description:
    //         "This text-based operator offers essential functionalities like converting text to uppercase or lowercase, providing character count, and performing various text operations. Users can manipulate and analyze text easily, enhancing efficiency in tasks such as formatting and data processing, making it a versatile tool for textual ",
    //     image:
    //         "https://i.pinimg.com/736x/d8/7b/3c/d87b3c2003a309cdcc49bf2cd23fd1d9.jpg",
    //     tags: ["React Js"],
    //     category: "Web app",
    //     github:
    //         "https://github.com/manishgupta72/TextUtillsApp/tree/main/text-tutils",
    //     webapp: "https://textutills-manish.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 10,
    //     title: "KeepNoteApp",
    //     date: "SEP 2023 ",
    //     description:
    //         "This React-based note-taking app simplifies organization and productivity. Users can create, and delete notes with a responsive and intuitive interface. The app offers a seamless experience for capturing and managing ideas, tasks, and reminders, enhancing efficiency in daily note-taking and organization",
    //     image:
    //         "https://i.pinimg.com/736x/aa/2f/e5/aa2fe50f38044b9688383ab8e2725c17.jpg",
    //     tags: ["React JS", "JavaScript"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/Keep-Notes-App/tree/main/keep-notes-app",
    //     webapp: "https://keep-notes-app-react.netlify.app",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 4,
    //     title: "CRUD JSON SERVER",
    //     date: "NOV 2023",
    //     description:
    //         "This React CRUD web app facilitates seamless Create, Read, Update, and Delete operations. With an intuitive user interface, users can effortlessly manage data, add new entries, modify existing ones, and remove records. The app ensures a smooth and efficient experience for interacting with dynamic content in a web environment.",
    //     image:
    //         "https://i.pinimg.com/736x/2b/e2/fb/2be2fb313c9cdc524bf66afb1a75b911.jpg",
    //     tags: ["React Js", "JSON Server"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/CRUD-IN-REACT/tree/main/CRUD%20REACT",
    //     webapp: "https://usercrudoperation.netlify.app",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 5,
    //     title: "Weather App",
    //     date: "JULY 2023",
    //     description:
    //         "This JavaScript weather app provides real-time weather information with a clean and user-friendly interface. Users can easily access current conditions, forecasts, and temperature details for any location. The app integrates with weather APIs, delivering accurate and up-to-date meteorological data, enhancing the user's ability to plan and stay informed.",
    //     image:
    //         "https://i.pinimg.com/736x/81/b6/19/81b619ca46e338e5690fa06c476e33b5.jpg",
    //     tags: ["HTML", "CSS", "JAVA SCRIPT"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/Weather-App-js/tree/main/Whether%20App",
    //     webapp: "https://weatherapp-manish.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 6,
    //     title: "Food App UI",
    //     date: "DEC 2023",
    //     description:
    //         "Sleek and user-friendly food app UI with vibrant visuals, easy navigation, and quick ordering features for a delightful dining experience.",
    //     image:
    //         "https://i.pinimg.com/736x/b4/56/28/b4562885bf99f8731956c42a9d7032db.jpg",
    //     tags: ["React Js", "JSON"],
    //     category: "web app",
    //     github: "https://github.com/manishgupta72/FoodApp/tree/main/FOODAPP/mern",
    //     webapp: "https://foodorderingonlineapp.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 7,
    //     title: "Calculator - Js",
    //     date: "AUG 2022",
    //     description:
    //         "A simple and responsive calculator using HTML, CSS, and JS for basic arithmetic operations with an intuitive design for user-friendly calculations.",
    //     image:
    //         "https://i.pinimg.com/736x/ca/5a/4e/ca5a4e6061c4bff743c4fbcea4221761.jpg",
    //     tags: ["Java Sript", "Html", "Css"],
    //     category: "Web App",
    //     github:
    //         "https://github.com/manishgupta72/Calculator-js/tree/main/calculator",
    //     webapp: "https://calculator-manishgupta.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
    // {
    //     id: 8,
    //     title: "Password Generator",
    //     date: "OCT 2023",
    //     description:
    //         "This password generator, crafted with HTML, CSS, and JS, provides a secure solution for generating customizable passwords. Featuring a user-friendly interface, it allows users to adjust parameters such as length and character types, ensuring the creation of strong and unique passwords for enhanced online security.",
    //     image:
    //         "https://i.pinimg.com/736x/85/07/e8/8507e8afda714c2e19a6953ecec2fa35.jpg",
    //     tags: ["Html", "Css", "Java Script"],
    //     category: "web app",
    //     github:
    //         "https://github.com/manishgupta72/Password-generator-js/tree/main/passwordGenerator",
    //     webapp: "https://password-generator-manishgupta.netlify.app/",
    //     member: [
    //         {
    //             name: "Manish Gupta",
    //             img: "https://avatars.githubusercontent.com/u/69005837?v=4",
    //             linkedin: "https://www.linkedin.com/in/manishgupta724464/",
    //             github: "https://github.com/manishgupta72/",
    //         },
    //     ],
    // },
];

export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
];
