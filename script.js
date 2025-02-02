"use strict";
window.onload = function () {
    document.querySelector('input[name="name"]').value = localStorage.getItem("name") || "";
    document.querySelector('input[name="title"]').value = localStorage.getItem("title") || "";
    document.querySelector('textarea[name="work_experience"]').value = localStorage.getItem("workExperience") || "";
    document.querySelector('textarea[name="academic_details"]').value = localStorage.getItem("academicDetails") || "";
    document.querySelector('input[name="objective"]').value = localStorage.getItem("objective") || "";
    document.querySelector('textarea[name="skills"]').value = localStorage.getItem("skills") || "";
    document.querySelector('textarea[name="projects"]').value = localStorage.getItem("projects") || "";
    document.querySelector('textarea[name="achievements"]').value = localStorage.getItem("achievements") || "";
    document.querySelector('textarea[name="contact"]').value = localStorage.getItem("contact") || "";
};
function generateResume() {
    const name = document.querySelector('input[name="name"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const workExperience = document.querySelector('textarea[name="work_experience"]').value;
    const academicDetails = document.querySelector('textarea[name="academic_details"]').value;
    const objective = document.querySelector('input[name="objective"]').value;
    const skills = document.querySelector('textarea[name="skills"]').value;
    const projects = document.querySelector('textarea[name="projects"]').value;
    const achievements = document.querySelector('textarea[name="achievements"]').value;
    const contact = document.querySelector('textarea[name="contact"]').value;
    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
    localStorage.setItem("workExperience", workExperience);
    localStorage.setItem("academicDetails", academicDetails);
    localStorage.setItem("objective", objective);
    localStorage.setItem("skills", skills);
    localStorage.setItem("projects", projects);
    localStorage.setItem("achievements", achievements);
    localStorage.setItem("contact", contact);
    const resumeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume Creator</title>
            <link rel="stylesheet" href="style.css">
            <script src="script.js" defer></script>
        </head>
        <body>
            <div class="container">
                <h1>Interactive Resume Builder</h1>
                <section class="resume-builder">
                    <form class="inputField">
                        <input type="text" name="name" placeholder="${name}" readonly>
                        <input type="text" name="title" placeholder="${title}" readonly>
                        <div class="section">
                            <h2 class="left-align">Objective</h2>
                            <input type="text" name="objective" placeholder="${objective}" readonly>
                        </div>
                        <div class="section">
                            <h2 class="left-align">Work Experience</h2>
                            <textarea name="work_experience" placeholder="${workExperience}" readonly></textarea>
                        </div>
                        <div class="section">
                            <h2 class="left-align">Academic Details</h2>
                            <textarea name="academic_details" placeholder="${academicDetails}" readonly></textarea>
                        </div>
                        <div class="section">
                            <h2 class="left-align">Skills</h2>
                            <textarea name="skills" placeholder="${skills}" readonly></textarea>
                        </div>
                        <div class="section">
                            <h2 class="left-align">Projects</h2>
                            <textarea name="projects" placeholder="${projects}" readonly></textarea>
                        </div>
                        <div class="section">
                            <h2 class="left-align">Achievements</h2>
                            <textarea name="achievements" placeholder="${achievements}" readonly></textarea>
                        </div>
                        <div class="section">
                            <h2 class="left-align">Contact</h2>
                            <textarea name="contact" placeholder="${contact}" readonly></textarea>
                        </div>
                        <a href="create_resume.html" class="edit-button">Edit</a>
                        <a href="index.html" class="edit-button">Download</a>
                    </form>
                </section>
            </div>
        </body>
        </html>
    `;
    const outputContainer = document.querySelector('.output_container');
    outputContainer.innerHTML = resumeHTML;
    const newWindow = window.open();
    if (newWindow) {
        newWindow.document.write(resumeHTML);
        newWindow.document.close();
    }
}
