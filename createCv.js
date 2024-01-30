const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const email = document.getElementById("email");
const pnumber = document.getElementById("pnumber");
const summary = document.getElementById("summary");
const school = document.getElementById("school");
const schoolDate = document.getElementById("schoolDate");
const work1 = document.getElementById("work1");
const work1Date = document.getElementById("work1-date");
const work2 = document.getElementById("work2");
const work2Date = document.getElementById("work2-date");
const skills = document.getElementById("skills");
const form = document.getElementById("form");

form.addEventListener("submit", createCV);

function createCV(e) {
  e.preventDefault();
  console.log(firstName.value);
  console.log(lastName.value);

  let cvData = {
    title: firstName.value + "'s CV",
    content: `
      <h4>Fullname:</h4> <span>${firstName.value}   ${lastName.value}</span>
      <h5>Address:</h5> 
      <span>${address.value}</span>
      <h5>Email:</h5>
      <span>${email.value}</span>
      <h5>Phone Number:</h5> 
      <span>${pnumber.value}</span>
      <h5>Professional Summary:</h5> 
      <span>${summary.value}</span>
      <h5>School attended with date:</h5> 
      <span>${school.value} <small>${schoolDate.value}</small></span>
      <h5>Work experience(s) with date:</h5> 
      <span>${work1.value} <small>${work1Date.value}</small></span>
      <span>${work2.value} <small>${work2Date.value}</small></span>
      <h5>Skills:</h5> 
      <span>${skills.value}</span>
    `,
    status: "publish",
  };

  fetch("https://jibbypaul.000webhostapp.com/wp-json/wp/v2/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ppYmJ5cGF1bC4wMDB3ZWJob3N0YXBwLmNvbSIsImlhdCI6MTcwNjYxMzE0NCwibmJmIjoxNzA2NjEzMTQ0LCJleHAiOjE3MDcyMTc5NDQsImRhdGEiOnsidXNlciI6eyJpZCI6MSwiZGV2aWNlIjoiIiwicGFzcyI6Ijc0NTYzZjllY2EyNmI4ZWY3ZTIyZDMxNzQ5YjY0Njg0In19fQ._edlHqLpuBd1arFqgOxqMUgyORmhACf28ywF9Kk0TPc",
    },
    body: JSON.stringify(cvData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  // const token = response.token();
  // localStorage.setItem("token", token);

  // const newToken = localStorage.getItem("token", token);
}


