// Curseur
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
});


const links = document.querySelectorAll("a");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        cursor.style.width = "30px";
        cursor.style.height = "30px";
    });

    link.addEventListener("mouseleave", () => {
        cursor.style.width = "15px";
        cursor.style.height = "15px";
    });

});

// API Liens
fetch("data/projets.json")
    .then(response => response.json())
    .then(projects => {

        document.querySelectorAll(".source").forEach(link => {
            const project = projects[link.dataset.project];

            link.href = project.github;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });

        document.querySelectorAll(".demo").forEach(link => {
            const project = projects[link.dataset.project];

            link.href = project.demo;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });

    });