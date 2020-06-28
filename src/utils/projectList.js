// project name -> logo url, demo url, github url, technologies used

const projects = {
    "hotdogs": {
        name: "Secret Ninja Hotdogs",
        logoUrl: "https://www.svgrepo.com/show/133687/hot-dog.svg",
        demoUrl: "https://secret-hotdogs.web.app",
        codeUrl: "https://github.com/robertma1995/secret_hotdogs_react",
        technologies: ["React.js", "Firebase", "Material-UI", "PHP", "MySQL", "Express.js", "REST API"],
        description: "This project started as a PHP (and MySQL) learning exercise. \n\n Later on, I decided I wanted more interactivity and real-time databases, hence React and Firebase. I also wanted to explore React and Firebase beyond one university course. \n\n To make the code more readable, I also created an Express REST API for accessing the database - but Promises can't be used for real-time data. The main challenge of this app was the conversion to direct Firebase calls as opposed to proxying through an API, and also learning the use of React hooks for state variable tracking.",
    },
    "portfolio": {
        name: "Portfolio",
        logoUrl: "https://www.svgrepo.com/show/191381/cat.svg",
        demoUrl: "TODO.url",
        codeUrl: "https://github.com/robertma1995/portfolio",
        technologies: ["React.js", "Material-UI"],
        description: "This is a showcase of my recent projects. The UI is kept as minimal and intuitive as possible. The main challenge with this app was figuring out how to make elements responsive based on viewport dimensions. Material-UI simplifies this using breakpoints, but isn't as responsive as using SASS or SCSS. \n\n React.js allows for component re-use and modularity, while Material-UI provides the responsiveness.",
    },
}

export default projects;
