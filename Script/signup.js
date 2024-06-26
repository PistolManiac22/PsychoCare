const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
// const fs = new FileSystemWritableFileStream();
// fs

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('username-validation-detail').style.display = 'none';
  document.getElementById('email-validation-detail').style.display = 'none';
})

class Account {
  username;
  realname;
  email;
  institution;
  birth;
  gender;
  password;

  getUsername() {
    return this.username;
  }
  setUsername(username) {
    this.username = username;
  }

  getRealname() {
    return this.realname;
  }
  setRealname(realname) {
    this.realname = realname;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }

  getInstitution() {
    return this.institution;
  }
  setInstitution(institution) {
    this.institution = institution;
  }

  getBirth() {
    return this.birth;
  }
  setBirth(birth) {
    this.birth = birth;
  }

  getGender() {
    return this.gender;
  }
  setGender(gender) {
    this.gender = gender;
  }

  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }

  getVerification() {
    const value = [
      this.username,
      this.realname,
      this.email,
      this.institution,
      this.gender,
      this.birth,
      this.password,
    ];
    let verifValue = true;
    value.forEach((value) => {
      if (!value) {
        verifValue = false;
        return 0;
      }
    });
    return verifValue;
  }
}
const account = new Account();

function generatedAccountDetail() {
  console.log(`Akun dengan rincian:
  ${account.getUsername()}, ${account.getRealname()},
  ${account.getEmail()}, ${account.getInstitution()},
  ${account.getBirth()}, ${account.getGender()}`)

  document.getElementById("show-username").innerHTML = account.getUsername();
  document.getElementById("show-name").innerHTML = account.getRealname();
  document.getElementById("show-email").innerHTML = account.getEmail();
  document.getElementById("show-institution").innerHTML =
    account.getInstitution();
  document.getElementById("show-birth").innerHTML = account.getBirth();
}

document.getElementById("username").addEventListener("input", (event) => {
  if(validasiUsername(event.target.value)){
    account.setUsername(event.target.value);
  }
});

document.getElementById("name").addEventListener("input", (event) => {
  account.setRealname(event.target.value);
});

document.getElementById("email").addEventListener("input", (event) => {
  if(validasiEmail(event.target.value)){
    account.setEmail(event.target.value);
  }
});

document.getElementById("institution").addEventListener("input", (event) => {
  account.setInstitution(event.target.value);
});

document.getElementById("birth").addEventListener("input", (event) => {
  account.setBirth(event.target.value);
});

document.getElementById("password").addEventListener("input", (event) => {
  account.setPassword(event.target.value);
});

document.getElementById("gender").addEventListener("change", (event) => {
  account.setGender(event.target.value);
});

function validasiUsername(username) {
  const hurufBesar = /[A-Z]/.test(username);
  const hurufKecil = /[a-z]/.test(username);
  const angka = /\d/.test(username);
  const panjangValid = username.length <= 12;
  const printValidation = document.getElementById('username-validation-detail');
  printValidation.style.display = 'block';
  printValidation.style.color = "red";
  if (hurufBesar && hurufKecil && angka && panjangValid) {
    printValidation.innerText = "username yang dimasukkan valid";
    printValidation.style.color = "blue";
    return true;
  } else if (hurufBesar && hurufKecil && angka) {
    printValidation.innerText = "panjang username melebihi 12 karakter.";
    return false;
  } else if (hurufBesar && hurufKecil && panjangValid) {
    printValidation.innerText = "username tidak mengandung angka.";
    return false;
  } else if (hurufBesar && angka && panjangValid) {
    printValidation.innerText = "username tidak mengandung huruf kecil.";
    return false;
  } else if (hurufKecil && angka && panjangValid) {
    printValidation.innerText = "username tidak mengandung huruf besar.";
    return false;
  } else if (hurufBesar && panjangValid) {
    printValidation.innerText = "username tidak mengandung huruf kecil dan angka.";
    return false;
  } else if (hurufKecil && panjangValid) {
    printValidation.innerText = "username tidak mengandung huruf besar dan angka.";
    return false;
  } else if (angka && panjangValid) {
    printValidation.innerText = "username tidak mengandung huruf besar dan huruf kecil.";
    return false;
  } else {
    printValidation.innerText = "isikan nama pengguna mu";
    return false;
  }
}

function validasiEmail(email) {
  const printValidation = document.getElementById('email-validation-detail');
  printValidation.style.display = 'block';
  printValidation.style.color = "red";
  if ((email.lastIndexOf('@')+2 < email.lastIndexOf('.') && email.includes('@')) && (email.lastIndexOf('.') < email.length - 2)) {
    printValidation.innerText = "email yang dimasukkan valid";
    printValidation.style.color = "blue";
    return true;
  }else if(!email.includes('@') && !email.includes('.')) {
    printValidation.innerText = "email yang dimasukkan tidak valid";
  }else if (email.includes('@') ) {
    printValidation.innerText = "email tidak mengandung \".\"";
  }else{
    printValidation.innerText = "email tidak mengandung \"@\"";
  }
  return false;
}

nextBtnFirst.addEventListener("click", (event) => {
  if (account.username && account.password) {
    event.preventDefault();
    document.body.style.overflow = "scroll";
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  } else if (!(account.username || account.password)) {
    alert("Masukkan Nama Pengguna serta Password!");
  } else if (!account.password) {
    alert("Masukkan Password!");
  } else {
    alert("Masukkan Nama Pengguna");
  }
});
nextBtnSec.addEventListener("click", (event) => {
  if (account.getRealname() && account.getBirth() && account.getGender()) {
    if (account.getGender() == "dont-process") {
      alert("Masukkan jenis kelamin");
    } else {
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    }
  } else if (
    !(account.getRealname() || account.getBirth() || account.getGender())
  ) {
    alert("Masukkan Nama asli, tanggal lahir, serta jenis kelamin!");
  } else {
    if (!account.getRealname()) {
      alert("Masukkan Nama asli!");
    }
    if (!account.getBirth()) {
      alert("Masukkan tanggal lahir!");
    }
    if (!account.getGender()) {
      alert("Masukkan jenis kelamin");
    }
  }
});
nextBtnThird.addEventListener("click", (event) => {
  if (account.getEmail() && account.getInstitution()) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    generatedAccountDetail();
  } else if (!(account.getEmail() || account.getInstitution())) {
    alert("Masukkan email serta Universitas/institutsi!");
  } else if (!account.getInstitution()) {
    alert("Masukkan Sekolah/Institutsi!");
  } else {
    alert("Masukkan email!");
  }
});
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(function () {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    if (account.getVerification()) {
      alert("Selamat.. anda telah terdaftar!");
      location.assign("../HTML/index.html");
    } else {
      alert("Mohon maaf.. Coba periksa kembali form pendaftaran anda");
    }
  }, 800);
});
prevBtnSec.addEventListener("click", (event) => {
  document.body.style.overflow = "hidden";
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// Mendapatkan elemen dengan kelas toggle-password
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

// window.onload = () => {
//   document.body.style.overflow = 'scroll';
// }