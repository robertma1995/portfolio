// project name -> logo url, demo url, github url, technologies used

const projects = {
    "hotdogs": {
        name: "Secret Ninja Hotdogs",
        logoUrl: "https://www.svgrepo.com/show/133687/hot-dog.svg",
        demoUrl: "https://secret-hotdogs.web.app",
        codeUrl: "https://github.com/robert-jy-ma/secret_hotdogs_react",
        technologies: ["React.js", "Firebase", "Material-UI", "PHP", "MySQL", "Express.js", "REST API"],
        description: "This project started as a PHP (and MySQL) learning exercise. The goal was to create a social media-like web application where users could post, like, and comment on hotdog recipes. \n\n Express REST API was initially used for accessing MySQL. Later on, I wanted more interactivity and explore real-time databases, hence React and Firebase. \n\n The main challenge of this app was combining real-time posting, editing, deleting and the pagination of posts. Currently, this is done by useEffect hooks and passing variables down child components. This avoids the overhead of using many snapshot listeners, and ensures there is no stale data. \n\n Note: Sign Up function is disabled in current hosted version - sample login credentials can be provided on request",
    },
    "portfolio": {
        name: "Portfolio",
        logoUrl: "https://www.svgrepo.com/show/191381/cat.svg",
        demoUrl: "https://robert-jy-ma.github.io/portfolio/",
        codeUrl: "https://github.com/robert-jy-ma/portfolio",
        technologies: ["React.js", "Material-UI"],
        description: "This is a showcase of my recent projects. The UI is kept as minimal and intuitive as possible. The main challenge with this app was figuring out how to make elements responsive based on viewport dimensions. \n\n React.js allows for code/component reuse, while Material-UI provides the responsiveness.",
    },
}

export default projects;
