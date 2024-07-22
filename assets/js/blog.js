const submitBlog = document.getElementById("submit-post");

submitBlog.addEventListener("click", function (event) {
  event.preventDefault();
  const blogTitle = document.getElementById("blog-title").value;
  const blogContent = document.getElementById("blog-content").value;

  const blogData = {
    title: blogTitle,
    content: blogContent,
  };
  localStorage.setItem("blogData", JSON.stringify(blogData));

  console.log("Blog post form submitted"); //checking for button click

  window.location.href = "post.html";
});

console.error("Element with ID 'submit-post' not found.");
