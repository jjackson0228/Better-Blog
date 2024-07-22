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

const submitBlog = document.getElementById("submit-post");

if (submitBlog) {
  submitBlog.addEventListener("click", function (event) {
    event.preventDefault();
    const blogTitle = document.getElementById("blog-title").value;
    const blogContent = document.getElementById("blog-content").value;

    const blogData = {
      title: blogTitle,
      content: blogContent,
    };
    localStorage.setItem("blogData", JSON.stringify(blogData));

    window.location.href = "post.html";
  });
}
