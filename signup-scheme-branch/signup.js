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
}
const account = new Account();

function generatedAccountDetail() {
  account.setGender(document.getElementsByTagName('option').item(document.getElementById('gender').options.selectedIndex).text);

  console.log(`Akun dengan rincian:
  ${account.getUsername()}, ${account.getRealname()},
  ${account.getEmail()}, ${account.getInstitution()},
  ${account.getBirth()}, ${account.getGender()},
  ${account.getPassword()}`);

  document.getElementById('show-username').innerHTML = account.getUsername();
  document.getElementById('show-name').innerHTML = account.getRealname();
  document.getElementById('show-email').innerHTML = account.getEmail();
  document.getElementById('show-institution').innerHTML = account.getInstitution();
  document.getElementById('show-birth').innerHTML = account.getBirth();
}

document.getElementById('username').addEventListener('input', (event) => {
  account.setUsername(event.target.value);
})

document.getElementById('name').addEventListener('input', (event) => {
  account.setRealname(event.target.value);
})

document.getElementById('email').addEventListener('input', (event) => {
  account.setEmail(event.target.value);
})

document.getElementById('institution').addEventListener('input', (event) => {
  account.setInstitution(event.target.value);
})

document.getElementById('birth').addEventListener('input', (event) => {
  account.setBirth(event.target.value);
})

document.getElementById('password').addEventListener('input', (event) => {
  account.setPassword(event.target.value);
  console.log(account.getPassword());
})

nextBtnFirst.addEventListener("click", (event) => {
  if (account.username && account.password) {
    event.preventDefault();
    document.body.style.overflow = 'scroll';
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  } else if (!(account.username || account.password)) {
    alert('Masukkan Nama Pengguna serta Password!');
  } else if (!account.password) {
    alert('Masukkan Password!');
  } else {
    alert('Masukkan Nama Pengguna');
  }
});
nextBtnSec.addEventListener("click", (event) => {
  if (account.getEmail() && account.getInstitution()) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1; 
  }else if(!(account.getEmail() || account.getInstitution())){
    alert('Masukkan email serta Universitas/institutsi!');
  }else if(!account.getInstitution()){
    alert('Masukkan Sekolah/Institutsi!');
  }else{
    alert('Masukkan email!');
  }
});
nextBtnThird.addEventListener("click", (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  generatedAccountDetail();
});
submitBtn.addEventListener("click", () => {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {

    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
});
prevBtnSec.addEventListener("click", (event) => {
  ()=> {
    document.getElementsByTagName('header').item(0).scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
document.querySelector('.toggle-password').addEventListener('click', function () {
  // Toggle class fa-eye dan fa-eye-slash pada elemen yang diklik
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');

  // Mendapatkan elemen input yang sesuai dengan atribut toggle pada elemen yang diklik
  const input = document.querySelector('#password');

  // Memeriksa apakah input tidak null sebelum menggunakan atributnya
  if (input) {
    // Mengubah tipe input dari password ke text atau sebaliknya
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  }

});

window.onload = ()=> {
  document.body.style.overflow = 'scroll';
  //document.documentElement.scrollTop = 0;
}