document
  .querySelector(".toggle-password")
  .addEventListener("click", function () {
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");

    const input = document.querySelector("#password");

    if (input) {
      // Mengubah tipe input dari password ke text atau sebaliknya
      if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
      } else {
        input.setAttribute("type", "password");
      }
    }
  });

let username_email, password;

document.getElementById("username-email").addEventListener("input", (event) => {
  username_email = event.target.value;
});

document.getElementById("password").addEventListener("input", (event) => {
  password = event.target.value;
});

document.getElementById("submit").addEventListener("click", (event) => {
  if (username_email && password) {
    event.preventDefault();
    alert("Selamat anda berhasil login!");
    location.assign("../HTML/index.html");
  } else {
    alert("Username/mail atau Password salah");
  }
});
