
window.onload = function() {
  // Your JavaScript code here
  console.log("js file is loaded");
  const panel = [
          {
            description: "Task-Manager",
            link:"https://task-manager-webui.herokuapp.com/",
            short: ""
          },
          {
            description: "React-with-Json",
            link:"https://reactwithjson.herokuapp.com/",
            short: ""
          },
      ];

      // Get the template element
      const panel_template = document.querySelector('#panel-template');
      // Get the list element
      const panel_list = document.querySelector('#panel-list');

      // Loop through the project and create a new element for each one
       for (let i = 0; i < panel.length; i++) {
         // Clone the template
         const clone = panel_template.content.cloneNode(true);

         // Populate the cloned template with data from the array
         const description = clone.querySelector('.panel-description');
         const link = clone.querySelector('.panel-link');
         const short = clone.querySelector('.panel-short');


         link.textContent = panel[i].description;
         link.href = panel[i].link;
         short.textContent = panel[i].short;

         // Add the cloned element to the list
         panel_list.appendChild(clone);

      }


 const project = [
         {
           title: "Task-Manager, Weather-Application",
           description: "Developed Task-Manager, Weather-Application in NodeJs Using Mongodb.",
           skills: "Using: Java Script, Express api, PostMan, MapBox api, Mongo database.",
           addition: "More details will be updated soon.",
           link: "https://national-weather-application.herokuapp.com/",
           github: "https://github.com/shraddha1512/node3-webserver-website"
         },
         {
           title: "Thesis Work: Deep Learning project",
           description: "Melanoma Skin Cancer Classification using Deep Convolutional Neural Network.",
           skills: "Using: Python, CNN, Transfer Learning, DeepLearning, Image Cancer dataset",
           addition: "More details will be updated soon.",
           link: "https://drive.google.com/file/d/1GAKWA7ScpsWaIfd65SMi48Dvnfx8EgFg/view",
           github: "https://github.com/shraddha1512/Melanoma-Skin-Cancer-Classification-CNN"
         }
       ];

 // Get the template element
const template = document.querySelector('#project-template');
 // Get the list element
const list = document.querySelector('#project-list');

// Loop through the project and create a new element for each one
  for (let i = 0; i < project.length; i++) {
    // Clone the template
    const clone = template.content.cloneNode(true);

    // Populate the cloned template with data from the array
    const title = clone.querySelector('.project-title');
    const description = clone.querySelector('.project-description');
    const skills = clone.querySelector('.project-skills');
    const addition = clone.querySelector('.project-addition');
    const link = clone.querySelector('.project-link');
    const github = clone.querySelector('.project-github');

    title.textContent = project[i].title;
    description.textContent = project[i].description;
    skills.textContent = project[i].skills;
    addition.textContent = project[i].addition;
    link.textContent = "View Project";
    link.href = project[i].link;
    github.textContent = "Github Link";
    github.href = project[i].github;

    // Add the cloned element to the list
    list.appendChild(clone);

}

  var person_description = "Associate Consultant at Capgemini";
  document.getElementById("person-description").innerHTML = person_description;

  var person_location = "Banglore, India";
  document.getElementById("person-location").innerHTML = person_location;

  var person_about = "Computer Science Engineering, Masters from NIT jalandhar. I have interest in datastructure, algorithms and Machine Learning.";
  document.getElementById("person-about").innerHTML = person_about;

  var highlight = "";
  document.getElementById("highlight").innerHTML = highlight;

  function insertHTMLPage() {
    var iframe = document.createElement("iframe");
    iframe.src = "images/profile.html";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    var row1 = document.querySelector('.main');
    row1.innerHTML = "";
    row1.appendChild(iframe);
  }
  document.getElementById("about-link").addEventListener("click", insertHTMLPage);

};
