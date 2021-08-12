const pass = document.querySelector(".password");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    showBtn.style.color = "#3498db";
    showBtn.textContent = "HIDE";
  } else {
    pass.type = "password";
    showBtn.style.color = "#222";
    showBtn.textContent = "SHOW";
  }
});
