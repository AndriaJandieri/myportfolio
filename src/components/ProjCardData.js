import happylobsterimg from "../assets/happylobster.png"
import portfolioimg from "../assets/Portfolio.png"
import projimg1 from "../assets/Project1.png";
import projimg2 from "../assets/Project2.png";
import projimg3 from "../assets/Project3.png";

const ProjCardData = [
    {
        imgsrc: happylobsterimg,
        title: "Happy Lobster Studio",
        text: "Fully responsive portfolio website made from scratch, where you can see studio's projects and contact them.",
        viewlink: "https://happy-lobster.netlify.app",
        sourcelink: "https://github.com/AndriaJandieri/happylobster"
    },
    {
        imgsrc: portfolioimg,
        title: "My Portfolio",
        text: "Fully responsive portfolio website made from scratch, where you can donwload CV and see some of my projects I worked on.",
        viewlink: "https://andria-jandieri-portfolio.netlify.app",
        sourcelink: "https://github.com/AndriaJandieri/myportfolio"
    },
    {
        imgsrc: projimg1,
        title: "Weather App",
        text: "PWA(Progressive web application) React Weather, where you can search weather for any city worldwide, using API.",
        viewlink: "https://aj-pwa-weather.netlify.app",
        sourcelink: "https://github.com/AndriaJandieri/weather"
    },
    {
        imgsrc: projimg2,
        title: "ToDo App",
        text: "Simple React ToDo application, where you can add, delete, mark as complete and filter ToDos view by category.",
        viewlink: "https://aj-todo-list.netlify.app",
        sourcelink: "https://github.com/AndriaJandieri/todolist"
    },
    {
        imgsrc: projimg3,
        title: "Calculator App",
        text: "Simple React Calculator application with usual functionals like following: plus, minus, multiply, devide and root.",
        viewlink: "https://aj-calc.netlify.app",
        sourcelink: "https://github.com/AndriaJandieri/calculator"
    }
];

export default ProjCardData