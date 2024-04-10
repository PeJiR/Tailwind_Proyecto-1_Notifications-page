const darkModeInput = document.querySelector('#darkmode');

darkModeInput.addEventListener('click',()=>{
 document.documentElement.classList.toggle('dark');
})

const markAll = document.querySelector("#mark-all");
const numberElement = document.querySelector("#number");
const posts = document.querySelectorAll(".post");

posts.forEach((post) => {
  post.addEventListener("click", () => {
    post.querySelector(".not-read").classList.remove("not-read");
    update();
  });
});

markAll.addEventListener("click", () => {
  const notReadElements = document.querySelectorAll(".not-read");

  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove("not-read");
  });
  update();
});

const update = () => {
  const notReadElementsCurrent = document.querySelectorAll(".not-read");

  numberElement.innerText = [" "] + notReadElementsCurrent.length + [" left "];
};
