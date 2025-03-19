import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo-dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import project1 from './ClearCargoWeb.png';
import project2 from './ClearCargoMobile.png';
import project3 from './work3.png';
import project4 from './work4.png'
import project5 from './project5.png'
import project6 from './project6.png'
import project7 from './project7.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Clear Cargo Dashboard',
        description: 'Cargo Clearance Dashboard is a web application designed to monitor the real-time status and progress of shipments.',
        bgImage: project1,
        techStack: ['React.js', 'Typescript', 'Tailwind Css', 'Context API', 'REST API', 'Figma', 'Git']
    },
    {
        title: 'Clear Cargo Mobile',
        description: 'Cargo Clearance Mobile is a Progressive Web App (PWA) designed to help users efficiently manage cargo shipments. The application enables users to manage and monitor progress with ease.',
        bgImage: project2,
        techStack: ['React.js', 'Typescript', 'Tailwind Css', 'Context API', 'REST API', 'Figma', 'Git']
    },
    {
        title: 'Subscription Web Component',
        description: 'This component allows users to subscribe to available products. I provides a configurable content framework that can be managed through pages or shortcodes in WordPress.',
        bgImage: project3,
        techStack: ['React.js', 'Javascript', 'CSS', 'Context API', 'REST API', 'Git']
    },
    {
        title: 'Dashboard Web Component',
        description: 'The Dashboard Page is a web component designed to help users manage shipments. This page includes sorting, filtering, and search functionalities for efficient tracking and management.',
        bgImage: project4,
        techStack: ['React.js', 'Javascript', 'Tailwind CSS', 'Context API', 'REST API', 'Git']
    },
    {
        title: 'Other Web Components',
        description: 'Developed various web components for the company website, including the Dashboard Page, Subscription Page, Setup Payment page integrate with stripe, App Container and Setup Company Page. These components are designed to be embedded into WordPress as the main website after the build process.',
        bgImage: project4,
        techStack: ['React.js', 'Javascript', 'Tailwind CSS', 'SCSS', 'Context API', 'Git']
    },
    {
        title: 'Cubeforall Rewards',
        description: 'Developed and maintained applications using React Native. Collaborated with the team to build features, analyze, and fix bugs alongside the QA team. Published the app on the Google Play Store and App Store.',
        bgImage: project5,
        techStack: ['React Native', 'Javascript', 'Context API', 'CSS', 'Git']
    },
    {
        title: 'CUBE Social Media',
        description: `CUBE Social Media is a mobile application designed to enhance user connectivity and interaction. I worked in a small team consisting of two Mobile Developers and one Product Owner, contributing to the development and improvement of several key features:  

        - Dashboard – A main page where users can explore and select recommended matches.  
        - User Profile – A detailed user profile page displaying user information.  
        - Authentication – A login and account registration system.  
        - Edit Profile – A page allowing users to update their personal information.  
        - Custom User Recommendation Filter – A feature that filters user recommendations based on user preferences.`,
        bgImage: project7,
        techStack: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'Git']
    },
    {
        title: 'My Zurich Advisor',
        description: `My Zurich Advisor is an insurance application designed for recruiting and registering Zurich agents.  
I worked as part of a team of four Mobile Developers, following the SCRUM methodology to ensure efficient development and collaboration.`,
        bgImage: project6,
        techStack: ['React Native', 'JavaScript', 'WatermelonDB', 'Redux', 'Axios', 'Git']
    }
    
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' }
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const experienceList = [
    {
        title: 'Software Engineer React Native & React JS',
        company: 'Cargo Community Network - Singapore',
        date: 'Oct 2022 - Present',
        jobDesc: ['Develop and maintain web applications using React.js and mobile applications with React Native.', 'Work with the team to design and develop new features and improve existing features.', 'Write clean, maintainable, and efficient code.', 'Collaborate with the team to build features and enhance application performance.', 'Optimize UI/UX for better responsiveness and user-friendliness.', 'Contribute to the development of reusable components using Storybook.', 'Coordinate with the backend team for API integration.']
    },
    {
        title: 'Freelance React Native Developer',
        company: 'CUBE SOCIAL MEDIA - Remote',
        date: 'Jan 2022 - August 2023',
        jobDesc: ['Develop and maintain applications using React Native.', 'Collaborate in a small team with one other developer to build a social media application.', 'Work closely with the Product Owner to design and implement features.', 'Analyze and fix bugs in collaboration with the QA team.', 'Write code documentation to ensure maintainability.', 'Integrate Firebase for database management and notifications.']
    },
    {
        title: 'Mobile React Native Developer',
        company: 'PT Quadrant Synergy International (QSI) – Jakarta, Indonesia',
        date: 'Nov 2020 - September 2022',
        jobDesc: ['Developed and maintained applications using React Native.', 'Collaborated with the team to build features and enhance application performance.', 'Analyzed and fixed bugs in collaboration with the QA team.', 'Wrote code documentation to ensure maintainability.', 'Created a React Native basic learning module for new employees.', 'Worked using the SCRUM methodology.']
    }
]