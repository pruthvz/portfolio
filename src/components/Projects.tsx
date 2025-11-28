import instabooth from "../assets/projectImg/booth.png";
import crescent from "../assets/projectImg/crescent.png";
import nisha from "../assets/projectImg/nisha.png";
import verselet from "../assets/projectImg/verselet.png";
import spate from "../assets/projectImg/spatepate.png";
import oopsDev from "../assets/projectImg/oopsdev.png";
import diu from "../assets/projectImg/diutravels.png";
import wee from "../assets/projectImg/weee.png";
import wetave from "../assets/projectImg/wetave.png";
import upchee from "../assets/projectImg/upcheee.png";
import vcall from "../assets/projectImg/vcall.png";
import youtubedownloader from "../assets/projectImg/yt-download.png";
import auth from "../assets/projectImg/auth.png";
import cmovies from "../assets/projectImg/cmovies.png";
import code from "../assets/projectImg/code.png";
import spateagain from "../assets/projectImg/spate.png";
import webpage from "../assets/projectImg/ionics-webpage.png";
import flask from "../assets/projectImg/flasktodo.png";
import reactloader from "../assets/projectImg/react-skeleton.png";
import valocrate from "../assets/projectImg/valocrate.png";
// Revvlane screenshots
import revvlane1 from "../assets/revvlane/img_7268.png";
import revvlane2 from "../assets/revvlane/img_7269.png";
import revvlane3 from "../assets/revvlane/img_7273.png";
import revvlane4 from "../assets/revvlane/img_7274.png";
import revvlane5 from "../assets/revvlane/img_7275.png";
import revvlane6 from "../assets/revvlane/img_7278.png";
// WeTogether screenshots
import wetogether1 from "../assets/wetogether/navigation.png";
import wetogether2 from "../assets/wetogether/group destination.png";
import wetogether3 from "../assets/wetogether/user display.png";
import wetogether4 from "../assets/wetogether/group.png";
import wetogether5 from "../assets/wetogether/normal map.png";
import wetogether6 from "../assets/wetogether/signup.png";

// Mobile projects with multiple screenshots
const mobileProjects = [
  {
    title: "Revvlane",
    subTitle: "Automotive Social Platform",
    desc: "A premium mobile application connecting car enthusiasts for meets, garage management, and showcasing vehicles with other people all inside a modern and minimal mobile app.",
    screenshots: [revvlane1, revvlane2, revvlane3, revvlane4, revvlane5, revvlane6],
    category: "Mobile",
    github: "https://github.com/pruthvz",
    website: "#coming-soon",
    hash1: "#React Native/Node.js",
    hash2: "#MongoDB",
    hash4: "#Socket.io",
    hash3: "#Social Platform/Car Meetups",
    isMobile: true,
  },
  {
    title: "WeTogether",
    subTitle: "Location Sharing Platform",
    desc: "A collaborative mobile platform enabling groups to set destinations, track members, and coordinate meetups with real-time navigation.",
    screenshots: [wetogether1, wetogether2, wetogether3, wetogether4, wetogether5, wetogether6],
    category: "Mobile",
    github: "https://github.com/pruthvz",
    website: "#coming-soon",
    hash1: "#React Native/Node.js",
    hash2: "#Mapbox SDK",
    hash3: "#Socket.io Real-time",
    hash4: "#Real-time & Group Navigation",
    isMobile: true,
  },
];

const myProjects = [
  {
    title: "Valorant Crate Simulator",
    subTitle: "React.js & Vite",
    desc: "An immersive web application that simulates opening Valorant weapon skin crates. Features an inventory system with localStorage persistence, authentic Valorant-themed design, and full responsiveness across all devices.",
    img: valocrate,
    imgAlt: "Valorant Crate Simulator",
    github: "https://github.com/pruthvz/track-valorant",
    website: "https://track-valorant.vercel.app/",
    hash1: "#React.js",
    hash2: "#Vite",
    hash3: "#TailwindCSS",
    hash4: "#Valorant API",
    margin: "mb-8",
  },
  {
    title: "Instabooth",
    subTitle: "Online Photobooth Web App",
    desc: "A free-to-use photobooth web application where users can capture 4 images, add decorative frames, draw within frames, and download the final collage as a PNG. Perfect for creating instant booth-style photos with filters and real-time camera effects.",
    img: instabooth,
    imgAlt: "Instabooth photobooth app",
    github: "https://github.com/pruthvz/photobooth",
    website: "https://instabooth.netlify.app/",
    hash1: "#React.js",
    hash2: "#Vite",
    hash3: "#TailwindCSS",
    margin: "mb-8",
  },
  {
    title: "Crescent",
    subTitle: "Clothing Brand E-Commerce",
    desc: "A clothing brand business founded in 2022 with my sister, specializing in premium hoodies, tracksuits, and streetwear. I designed the entire Shopify website from frontend layout to backend app integrations, managing inventory updates and ensuring smooth user experience for our growing customer base.",
    img: crescent,
    imgAlt: "Crescent clothing brand Shopify website",
    github: "#private-business-project",
    website: "https://shopcrescent.uk/",
    hash1: "#Shopify",
    hash2: "#E-Commerce Design",
    hash3: "#Frontend/Backend Integration",
    hash4: "#Inventory Management",
    margin: "mb-8",
  },
  {
    title: "Nisha Fashion Portfolio",
    subTitle: "Client Portfolio Website",
    desc: "A professional portfolio website built for a fashion design student client. Features an elegant gallery showcasing their work progression from university projects to final outcomes, with optimized image lazy loading for smooth performance despite extensive imagery.",
    img: nisha,
    imgAlt: "Nisha fashion portfolio website",
    github: "#private-client-project",
    website: "https://nisha.page/",
    hash1: "#React.js",
    hash2: "#CSS",
    hash3: "#Image Lazy Loading",
    hash4: "#Responsive Design",
  },
  {
    title: "Verselet",
    subTitle: "Learning programming website",
    desc: "I came across the project Verselet through Discord. I joined a team of small developers who were developing Verselet. I helped out with the front-end for Verselet. It was a fun project, and we are still improving it today! ",
    img: verselet,
    imgAlt: "Verselet Image",
    github: "#private-project",
    website: "https://verselet.net/",
    hash1: "#Flask",
    hash2: "#Bootstrap 4/5",
    hash3: "#Challenges",
  },
  {
    title: "Spatepate",
    subTitle: "Programming Tutorials",
    desc: "I created spatepate for developers who are looking for videos on how to code. I included the most of programming languages and gathered beginner friendly and advanced tutorials.",
    img: spate,
    imgAlt: "Spatepate Image",
    github: "https://github.com/pruthvz/spatepate",
    website: "https://pruthvz.github.io/spatepate/",
    hash1: "#React.js",
    hash2: "#Bootstrap",
    hash3: "#Tutorials",
  },
  {
    title: "ooopsDev",
    subTitle: "Useful Developer Resources",
    desc: "ooopsDev.com began as a joke, but I realized that this kind of website would be helpful to more than just me. The website's contains front-end and back-end resources.",
    img: oopsDev,
    imgAlt: "ooopsDev Image",
    github: "https://github.com/pruthvz/project-atlas",
    website: "https://ooopsdev.com/#/",
    hash1: "#React.js",
    hash2: "#Bootstrap",
    hash3: "#JavaScript",
    margin: "mb-8",
  },
  {
    title: "Diu Travels",
    subTitle: "Travel Website",
    desc: "My first project for a client was Diu Travels. It's a static travel website that displays all of the destinations that my customer requested. For the website, I utilized Material Design Bootstrap.",
    img: diu,
    imgAlt: "DiuTravels image",
    github: "https://github.com/pruthvz/updatedTravelsite",
    website: "https://diutravels.com/",
    hash1: "#HTML/CSS",
    hash2: "#Material Design Bootstrap",
    hash3: "#JavaScript",
  },
  {
    title: "Project Weeee",
    subTitle: "Next.js Project",
    desc: "This was a fun experiment that I developed to learn the fundamentals of Next.js before starting a new project with Next.js. I built this entire portfolio website using Next.js as one of my projects too.",
    img: wee,
    imgAlt: "Project Weee image",
    github: "https://github.com/pruthvz/project-weee",
    website: "https://project-weee.vercel.app/",
    hash1: "#Next.js",
    hash2: "#TailwindCSS",
    hash3: "#Server-side-rendering",
  },
  {
    title: "Wetave",
    subTitle: "React.js & Tailwindcss",
    desc: "This was one of my project, that had most of the react components and syntax covered. wetave, is a project where you can store you contact details, this was a fun project where I experimented with Tailwind CSS darkmode feature.",
    img: wetave,
    imgAlt: "wetave image",
    github: "https://github.com/pruthvz/wetave",
    website: "https://pruthvz.github.io/wetave/",
    hash1: "#React.js",
    hash2: "#TailwindCSS",
    hash3: "#CRUD Operations",
    margin: "mb-2",
  },
  {
    title: "upcheee - Chat Application",
    subTitle: "Sockets.io & Tailwindcss",
    desc: "I had a lot of fun working with sockets and learning the fundamentals of socket connections. In this chat program, you can input your name and the room you want to communicate in to begin chatting with others.",
    img: upchee,
    imgAlt: "upcheee image",
    github: "https://github.com/pruthvz/upcheee",
    website: "https://upcheee.netlify.app/",
    hash1: "#React.js",
    hash2: "#TailwindCSS",
    hash3: "#Socket.io",
    margin: "mb-0",
  },
  {
    title: "vcall",
    subTitle: "Sockets.io & Tailwindcss",
    desc: "A fun React.js project with Socket.io learning the basics of sockets. I created a video chatting application. For this application, I used Node.js as backend and React.js along with some Tailwind css for front-end.",
    img: vcall,
    imgAlt: "vcall image",
    github: "#!code-base privated",
    website: "https://weeechat.netlify.app/",
    hash1: "#React.js",
    hash2: "#TailwindCSS",
    hash3: "#Node.js #Socket.io",
    margin: "mb-2",
  },
  {
    title: "YouTube Video Downloader",
    subTitle: "Tkinter Project",
    desc: "This was a beginner python project, I created to experiment with different types of libraries. I used pytube for this project to convert YouTube video urls into mp4 files. The project is avaiable on my GitHub.",
    img: youtubedownloader,
    imgAlt: "yt-downloader image",
    github: "https://github.com/pruthvz/youtube-video-downloader",
    website: "#!404",
    hash1: "#Tkinter",
    hash2: "#Python",
    hash3: "#Pytube library",
    margin: "mb-2",
  },
  {
    title: "Firebase Authentication",
    subTitle: "React & Firebase",
    desc: "I was experimenting with the Firebase authentication, and created a login system using a tutorial on YouTube. I learnt the basics of firebase, and how to configurate firebase auth. The front-end for this project was done using React.js",
    img: auth,
    imgAlt: "firebase project image",
    github: "https://github.com/pruthvz/react-firebase-auth",
    website: "https://pruthvz.github.io/react-firebase-auth/",
    hash1: "#React.js",
    hash2: "#Fierbase",
    hash3: "#Login System",
    margin: "mb-2",
  },
  {
    title: "cmovies ",
    subTitle: "React.js & Movie API",
    desc: "This project included, me experimenting around with API within React.js, the API I used in this project is in the code base, however since the API is Http and not Https, it wouldn't run properly on GitHub Pages.  ",
    img: cmovies,
    imgAlt: "cmovies image",
    github: "https://github.com/pruthvz/cmovies",
    website: "https://pruthvz.github.io/cmovies/",
    hash1: "#React.js",
    hash2: "#API",
    hash3: "#Movie App",
    margin: "mb-8",
  },
  {
    title: "Code Text-Editor",
    subTitle: "Highlighting syntax editor",
    desc: "Maxi, a contributor, and I decided to try and create an online coding text editor with syntax highlighting for certain languages such as Python, JavaScript, HTML/CSS, C#, and others. This was a side project, and the working editor is now utilized in Verselet. ",
    img: code,
    imgAlt: "code editor image",
    github: "https://github.com/Maxix25/text-editor",
    website: "#not-hosted",
    hash1: "#HTML/CSS",
    hash2: "#codemirror",
    hash3: "#text-editor",
    margin: "mb-2",
  },
  {
    title: "System Listing Application",
    subTitle: "Electron.js",
    desc: "This is a small project that taught me the fundamentals of Electron.js, such as how to start and create a window, as well as how to render an index.html file within the application. I want to keep learning Electron.js and create bigger and better applications.",
    img: spateagain,
    imgAlt: "system listing image",
    github: "https://github.com/pruthvz/systemcheck",
    website: "#not-hosted",
    hash1: "#HTML/CSS",
    hash2: "#Electron.js",
    hash3: "#System",
    margin: "mb-2",
  },
  {
    title: "Ionics - View Crypto Currency",
    subTitle: "Electron.js",
    desc: "This project invovled me working with a free public API that allowed me to fetch information about the crypto currency and then display it in the format I have, using Tailwind css. I learnt how to use React.js and Electron.js together, It was a fun project and I intent to build more.",
    img: webpage,
    imgAlt: "ionics image",
    github: "https://github.com/pruthvz/project-ionics",
    website: "#Download exe not ready!",
    hash1: "#React.js",
    hash2: "#Electron.js",
    hash3: "#TailwindCSS",
    margin: "mb-0",
  },
  {
    title: "Ionics Website",
    subTitle: "React.js",
    desc: "This is a fork of the electron application, that I created, and since it was running with React.js I decided to publish the website on GitHub pages, so you can review it. The API is the same. What is best about Electron.js and React.js is that I can run both on a webpage or within the Electron window.",
    img: webpage,
    imgAlt: "ionics image",
    github: "https://github.com/pruthvz/project-ionics",
    website: "https://pruthvz.github.io/project-ionics/",
    hash1: "#React.js",
    hash2: "#Crypto API",
    hash3: "#TailwindCSS",
    margin: "mb-0",
  },
  {
    title: "Flask Todo Application",
    subTitle: "Flask",
    desc: "This website was really fun to build, since I was learning flask I wanted to get to know the basics of flask, this includes the basic crud operations. I used TailwindCSS to do the styling for the front-end design. I plan to create a full functional application using flask.",
    img: flask,
    imgAlt: "ionics image",
    github: "https://github.com/pruthvz/flask-todo",
    website: "#website-not-hosted",
    hash1: "#Flask",
    hash2: "#TailwindCSS",
    hash3: "#Python",
    margin: "mb-2",
  },
  {
    title: "React Skeleton Loading Experiment",
    subTitle: "React.js",
    desc: "I wanted to try this skeleton loading, with react because I have seen alot of big websites such as YouTube, Facebook, Instagram, LinkedIn have these kind of loading content. It was alot of fun creating this skeleton loading with pure css. I intend to use this inside a project.",
    img: reactloader,
    imgAlt: "react skeleton loading.",
    github: "https://github.com/pruthvz/react-skeleton-loading",
    website: "https://pruthvz.github.io/react-skeleton-loading/",
    hash1: "#React.js",
    hash2: "#Skeleton Loading",
    hash3: "#JSON",
    margin: "mb-2",
  },
];

const languages = [
  {
    language: "Python",
    desc: "I have 4 years of expereince with Python.",
  },
  {
    language: "JavaScript",
    desc: "JavaScript is the programming language of the Web.",
  },
  {
    language: "Node.js",
    desc: "Node.js is an open source server environment",
  },
  {
    language: "C#",
    desc: "I learnt C# to make 3 mobile Unity games.",
  },
  {
    language: "React.js",
    desc: "A JavaScript library for building user interfaces.",
  },
  {
    language: "Next.js",
    desc: "This portfolio is made using Next.js",
  },
  {
    language: "Django",
    desc: "6 Months of Django experience, Python web framework.",
  },
  {
    language: "Unity 2D/3D",
    desc: "I've developed a number of games, including 3 on Android.",
  },
  {
    language: "HTML/CSS",
    desc: "I made a number of simple websites using HTML/CSS.",
  },
  {
    language: "TailwindCSS",
    desc: "A utility-first CSS framework packed with classes",
  },
  {
    language: "Bootstrap",
    desc: "Material Design Bootstrap and Bootstrap",
  },
  {
    language: "Flask",
    desc: "Python is a micro web framework written in Python",
  },
  {
    language: "Python Selenium",
    desc: "Selenium is an open-source web-based automation tool.",
  },
];

const internalData = {
  myProjects,
  mobileProjects,
  languages,
};

export default internalData;
