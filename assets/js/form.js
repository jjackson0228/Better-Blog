const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const userName = document.getElementById("username").value;
  const passWord = document.getElementById("password").value;

  const formData = {
    username: userName,
    password: passWord,
  };

  localStorage.setItem("signInData", JSON.stringify(formData));

  //redirect to new page
  window.location.href = "blog.html";
});
