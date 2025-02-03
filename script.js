var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function printResume() {
    var downloadPdf = document.getElementById("downloadpdf");
    downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
        window.print();
    });
}
function generateResumeLink() {
    return __awaiter(this, void 0, void 0, function () {
        var username, shareableURL, shareableLinkContainer, shareableLinkElement;
        return __generator(this, function (_a) {
            username = document.querySelector('input[name="name"]').value.toLowerCase().replace(/\s+/g, "");
            shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
            shareableLinkContainer = document.getElementById('shareableLinkContainer');
            shareableLinkElement = document.getElementById('shareableLink');
            // Display the shareable link and update its content
            shareableLinkContainer.style.display = 'block';
            shareableLinkElement.href = shareableURL;
            shareableLinkElement.textContent = shareableURL;
            // Optionally, you can store the link in localStorage or a backend database
            localStorage.setItem("resumeLink", shareableURL);
            return [2 /*return*/];
        });
    });
}
function generateResume() {
    var name = document.querySelector('input[name="name"]').value;
    var title = document.querySelector('input[name="title"]').value;
    var workExperience = document.querySelector('textarea[name="work_experience"]').value;
    var academicDetails = document.querySelector('textarea[name="academic_details"]').value;
    var objective = document.querySelector('input[name="objective"]').value;
    var skills = document.querySelector('textarea[name="skills"]').value;
    var projects = document.querySelector('textarea[name="projects"]').value;
    var achievements = document.querySelector('textarea[name="achievements"]').value;
    var contact = document.querySelector('textarea[name="contact"]').value;
    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
    localStorage.setItem("workExperience", workExperience);
    localStorage.setItem("academicDetails", academicDetails);
    localStorage.setItem("objective", objective);
    localStorage.setItem("skills", skills);
    localStorage.setItem("projects", projects);
    localStorage.setItem("achievements", achievements);
    localStorage.setItem("contact", contact);
    var resumeHTML = " \n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Resume Creator</title>\n            <link rel=\"stylesheet\" href=\"style.css\">\n            <script src=\"script.js\" defer></script>\n        </head>\n        <body>\n            <div class=\"container\">\n                <h1>Interactive Resume Builder</h1>\n                <section class=\"resume-builder\">\n                    <form class=\"inputField\">\n                        <input type=\"text\" name=\"name\" placeholder=\"".concat(name, "\" readonly>\n                        <input type=\"text\" name=\"title\" placeholder=\"").concat(title, "\" readonly>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Objective</h2>\n                            <input type=\"text\" name=\"objective\" placeholder=\"").concat(objective, "\" readonly>\n                        </div>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Work Experience</h2>\n                            <textarea name=\"work_experience\" placeholder=\"").concat(workExperience, "\" readonly></textarea>\n                        </div>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Academic Details</h2>\n                            <textarea name=\"academic_details\" placeholder=\"").concat(academicDetails, "\" readonly></textarea>\n                        </div>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Skills</h2>\n                            <textarea name=\"skills\" placeholder=\"").concat(skills, "\" readonly></textarea>\n                        </div>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Projects</h2>\n                            <textarea name=\"projects\" placeholder=\"").concat(projects, "\" readonly></textarea>\n                        </div>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Achievements</h2>\n                            <textarea name=\"achievements\" placeholder=\"").concat(achievements, "\" readonly></textarea>\n                        </div>\n                        <div class=\"section\">\n                            <h2 class=\"left-align\">Contact</h2>\n                            <textarea name=\"contact\" placeholder=\"").concat(contact, "\" readonly></textarea>\n                        </div>\n                        <br/>\n                        <a href=\"create_resume.html\" class=\"edit-button\">Edit</a>\n                        <button id=\"downloadpdf\" type=\"button\" class=\"download-button\" onclick=\"printResume()\">Download as pdf</button>\n                        <div id=\"shareableLinkContainer\" style=\"display:none;\">\n                        <p>Share your resume:</p>\n                        <a id=\"shareableLink\" href=\"#\" target=\"_blank\">Your Resume Link</a>\n                       </div>\n                        <br/>\n                        <br/>\n                       <button id=\"downloadpdf\" type=\"button\" class=\"download-button\" onclick=\"generateResumeLink()\">Generate a Resume Link</button>\n\n                    </form>\n                </section>\n            </div>\n        </body>\n        </html>\n    ;");
    var outputContainer = document.querySelector('.output_container');
    outputContainer.innerHTML = resumeHTML;
    var newWindow = window.open();
    if (newWindow) {
        newWindow.document.write(resumeHTML);
        newWindow.document.close();
    }
}
