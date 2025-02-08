//code
window.onload = function () {
    (document.querySelector('input[name="name"]') as HTMLInputElement).value = localStorage.getItem("name") || "";
    (document.querySelector('input[name="title"]') as HTMLInputElement).value = localStorage.getItem("title") || "";
    (document.querySelector('textarea[name="work_experience"]') as HTMLTextAreaElement).value = localStorage.getItem("workExperience") || "";
    (document.querySelector('textarea[name="academic_details"]') as HTMLTextAreaElement).value = localStorage.getItem("academicDetails") || "";
    (document.querySelector('input[name="objective"]') as HTMLInputElement).value = localStorage.getItem("objective") || "";
    (document.querySelector('textarea[name="skills"]') as HTMLTextAreaElement).value = localStorage.getItem("skills") || "";
    (document.querySelector('textarea[name="projects"]') as HTMLTextAreaElement).value = localStorage.getItem("projects") || "";
    (document.querySelector('textarea[name="achievements"]') as HTMLTextAreaElement).value = localStorage.getItem("achievements") || "";
    (document.querySelector('textarea[name="contact"]') as HTMLTextAreaElement).value = localStorage.getItem("contact") || "";
};


function printResume(){
    const downloadPdf=document.getElementById("downloadpdf") as HTMLAnchorElement
    downloadPdf?.addEventListener("click",()=>{
         window.print();
    })
}

async function generateResumeLink(): Promise<void> {
    const username: string = (
        document.querySelector('input[name="name"]') as HTMLInputElement
    ).value.toLowerCase().replace(/\s+/g, "");

    // Generate the shareable URL
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    
    // Get the container and link element
    const shareableLinkContainer = document.getElementById('shareableLinkContainer') as HTMLElement;
    const shareableLinkElement = document.getElementById('shareableLink') as HTMLAnchorElement;
    
    // Display the shareable link and update its content
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

    // Optionally, you can store the link in localStorage or a backend database
    localStorage.setItem("resumeLink", shareableURL);

}




function generateResume(): void {
    const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const title = (document.querySelector('input[name="title"]') as HTMLInputElement).value;
    const workExperience = (document.querySelector('textarea[name="work_experience"]') as HTMLTextAreaElement).value;
    const academicDetails = (document.querySelector('textarea[name="academic_details"]') as HTMLTextAreaElement).value;
    const objective = (document.querySelector('input[name="objective"]') as HTMLInputElement).value;
    const skills = (document.querySelector('textarea[name="skills"]') as HTMLTextAreaElement).value;
    const projects = (document.querySelector('textarea[name="projects"]') as HTMLTextAreaElement).value;
    const achievements = (document.querySelector('textarea[name="achievements"]') as HTMLTextAreaElement).value;
    const contact = (document.querySelector('textarea[name="contact"]') as HTMLTextAreaElement).value;

    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
    localStorage.setItem("workExperience", workExperience);
    localStorage.setItem("academicDetails", academicDetails);
    localStorage.setItem("objective", objective);
    localStorage.setItem("skills", skills);
    localStorage.setItem("projects", projects);
    localStorage.setItem("achievements", achievements);
    localStorage.setItem("contact", contact);

    const resumeHTML: string =` 
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
                        <br/>
                        <a href="create_resume.html" class="edit-button">Edit</a>
                        <button id="downloadpdf" type="button" class="download-button" onclick="printResume()">Download as pdf</button>
                        <div id="shareableLinkContainer" style="display:none;">
                        <p>Share your resume:</p>
                        <a id="shareableLink" href="#" target="_blank">Your Resume Link</a>
                       </div>
                        <br/>
                        <br/>
                       <button id="downloadpdf" type="button" class="download-button" onclick="generateResumeLink()">Generate a Resume Link</button>

                    </form>
                </section>
            </div>
        </body>
        </html>
    ;`

    const outputContainer = document.querySelector('.output_container') as HTMLElement;
    outputContainer.innerHTML = resumeHTML;

    const newWindow = window.open();
    if (newWindow) {
        newWindow.document.write(resumeHTML);
        newWindow.document.close();
    }
}