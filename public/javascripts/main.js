(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success")) {
    alert("Thank you for signing up for our newsletter!");
  }
})();
