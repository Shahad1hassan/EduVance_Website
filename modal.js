document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("scoreModal");
  const openCard = document.getElementById("qiyasTestCard");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !openCard || !closeBtn) return;

  function openModal() {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    openCard.focus();
  }

  // Open on click
  openCard.addEventListener("click", openModal);

  // Open on Enter/Space for accessibility
  openCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal();
    }
  });

  // Close button
  closeBtn.addEventListener("click", closeModal);

  // Close when clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
