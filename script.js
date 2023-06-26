const kidsInput = document.getElementById("kidsInput");
const kidsForm = document.getElementById("kidsForm");

kidsInput.addEventListener("input", function () {
  const kidsCount = parseInt(kidsInput.value);

  if (kidsCount >= 1) {
    kidsForm.classList.remove("hidden");
  } else {
    kidsForm.classList.add("hidden");
  }
});
