import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    flask,
    python,
    java,
    scotiabank,
    woodward,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Private Equity Analyst",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Global Wealth Management Data Analyst",
      company_name: "Scotiabank",
      icon: scotiabank,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Reduced compliance violations by 36% by automating the Excel records management system using Python",
        "Decreased financial fraud incidents by 27% using Pandas and NumPy to analyze internal control vulnerabilities",
        "Improved first-line defence efficiency by 31% by leveraging VLOOKUP and PivotTables to organize datasets",
        "Implemented data visualization using Plotly to recommend internal changes and enhance client satisfaction",
      ],
    },
    {
      title: "Private Equity Analyst",
      company_name: "Woodward Capital",
      icon: woodward,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - April 2023",
      points: [
        "Sourced a pipeline of 1000+ acquisition targets in Excel by leveraging CrunchBase, Hunter.io, and ZoomInfo",
        "Achieved an 84% success rate in identifying profitable acquisition targets through financial due diligence",
        "Utilized Excel’s data analysis capabilities to identify trends in datasets for informed investment decisions",
        "Assessed target companies’ fit with criteria by developing and presenting weekly financial models in PowerPoint",
      ],
    },
  
  ];
  
  const projects = [
    {
      name: "AI 3D Animation Website",
      description:
        "ThreeJS 3D product website infused with the power of artificial intelligence to generate custom t-shirts!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Nicholaschoi04/3D-AI-Tshirt-Website",
    },
    {
      name: "AI Image Generation App",
      description:
        "Full-stack MERN web application that generates highly realistic images using OpenAI DALL-E model!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Nicholaschoi04/dalle_clone2",
    },
    {
      name: "AI GPT ChatBot",
      description:
        "AI chatbot web application utilizing natural language processing techniques!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Nicholaschoi04/dalle_clone2",
    },
  ];
  
  export { services, technologies, experiences, projects };