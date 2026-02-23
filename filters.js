document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".filter-btn");
  const form = document.getElementById("CollectionFiltersForm");

  // toggle dropdown
  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const parent = btn.closest(".filter");

      document.querySelectorAll(".filter").forEach(f => {
        if (f !== parent) f.classList.remove("open");
      });

      parent.classList.toggle("open");
    });
  });

  // auto submit
  form.querySelectorAll("input[type='checkbox']").forEach(input => {
    input.addEventListener("change", () => {
      form.submit();
    });
  });

});
