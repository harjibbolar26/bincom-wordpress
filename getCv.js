const getPost = document.getElementById("getCv");
const latestCvData = document.getElementById("cv-content");

getPost.addEventListener("click", getCV);

function getCV() {
  fetch("https://jibbypaul.000webhostapp.com/wp-json/wp/v2/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      latestCvData.innerHTML = `
        
        <h1>Title : ${data[0].title.rendered}</h1>
        <div class="displayed-cv">
            ${data[0].content.rendered}
        </div>
        `;
    });
}
