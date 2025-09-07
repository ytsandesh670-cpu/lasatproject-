// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Blog Filter
const navLinks = document.querySelectorAll("nav a");
const blogPosts = document.querySelectorAll(".blog-post");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const category = link.getAttribute("data-category");
    blogPosts.forEach(post => {
      if (category === "all" || post.getAttribute("data-category") === category) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});

// Scroll Reveal
const revealOnScroll = () => {
  blogPosts.forEach(post => {
    const rect = post.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      post.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Modal Read More
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modalTitle");
const modalFullText = document.getElementById("modalFullText");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const post = e.target.closest(".blog-post");
    modalTitle.textContent = post.getAttribute("data-title");
    modalFullText.textContent = post.getAttribute("data-full");
    modal.style.display = "block";
  });
});

closeModal.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; };
