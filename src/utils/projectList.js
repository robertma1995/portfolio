// project name -> logo url, demo url, github url, technologies used

const projects = {
    "hotdogs": {
        name: "Secret Ninja Hotdogs",
        logoUrl: "https://www.svgrepo.com/show/133687/hot-dog.svg",
        demoUrl: "https://secret-hotdogs.web.app",
        videoUrl: "https://www.youtube.com/watch?v=BGGiiBvF15M",
        codeUrl: "https://github.com/robert-jy-ma/secret_hotdogs_react",
        technologies: ["React.js", "Firebase", "Material-UI", "PHP", "MySQL", "Express.js", "REST API"],
        description: "Social media-like web application where users can post, like, and comment on hotdog recipes. \n\nInitially, the project was based on PHP and MySQL (REST API to access MySQL). Later on, the project was moved to React and Firebase for interactivity and a real-time database. \n\nThe main challenge of this app was combining real-time posting, editing, deleting and the pagination of posts. \n\nCurrently, this is done by useEffect hooks and passing variables down child components. This avoids the overhead of using many snapshot listeners and ensures there is no stale data. \n\nuseEffect hooks - static overhead (1 per operation - post, delete, edit), database listeners - dynamic overhead (could change based on no. of posts). However, there are definitely better options to be explored, such as MobX's observer.",
    },
    "portfolio": {
        name: "Portfolio",
        logoUrl: "https://www.svgrepo.com/show/191381/cat.svg",
        demoUrl: "https://robert-jy-ma.github.io/portfolio/",
        codeUrl: "https://github.com/robert-jy-ma/portfolio",
        technologies: ["React.js", "Material-UI"],
        description: "Showcase of recent projects. UI is kept minimal and intuitive. The main challenge with this app was making components responsive to viewport dimensions. \n\n React.js allows for code/component reuse, and Material-UI provides the responsiveness.",
    },
}

export default projects;
