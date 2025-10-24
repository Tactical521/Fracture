<script>
document.addEventListener("DOMContentLoaded", function() {
  const content = document.getElementById("page-content");

  // Fade in on page load
  content.classList.add("fade-enter-active");

  // Fade out on link click
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    // Skip external links
    if (!link.href.startsWith(window.location.origin)) return;

    link.addEventListener("click", function(e) {
      e.preventDefault();
      const href = link.href;

      // Start fade-out
      content.classList.remove("fade-enter-active");
      content.classList.add("fade-exit-active");

      // Wait for animation, then navigate
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Duration matches CSS transition
    });
  });
});
</script>
