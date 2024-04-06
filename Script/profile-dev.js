var warnaTextInput = document.getElementsByClassName("input");
var inputUsername = document.getElementById("inputUsername");
var inputName = document.getElementById("inputName");
var inputSekolah = document.getElementById("inputSekolah");
var inputTgl = document.getElementById("inputTgl");
var inputEmail = document.getElementById("inputEmail");
var showUsername = document.getElementById("showUsername");
var showName = document.getElementById("showName");
var ubahFoto = document.getElementById("ubahFoto");
var tombolKembali = document.getElementById("tombolKembali");
showUsername.innerText = inputUsername.value;
showName.innerText = inputName.value;

class Account{
  username;
  name;
  sekolah;
  tgl;
  email;
}
const account = new Account();

function toggleEdit() {
  if (inputUsername.readOnly) {
    inputUsername.readOnly = false;
    inputName.readOnly = false;
    inputSekolah.readOnly = false;
    inputTgl.readOnly = false;
    inputEmail.readOnly = false;
    showUsername.style.display = "none";
    showName.style.display = "none";
    ubahFoto.style.display = "block";
    tombolKembali.style.display = "none";
    document.getElementById("editButton").innerText = "SIMPAN";
    for (var i = 0; i < warnaTextInput.length; i++) {
      warnaTextInput[i].style.color = "Black";
    }
  } else {
    alert("Data berhasil disimpan");
    showUsername.innerText = inputUsername.value;
    showName.innerText = inputName.value;
    inputUsername.readOnly = true;
    inputName.readOnly = true;
    inputSekolah.readOnly = true;
    inputTgl.readOnly = true;
    inputEmail.readOnly = true;
    ubahFoto.style.display = "none";
    showUsername.style.display = "block";
    showName.style.display = "block";
    tombolKembali.style.display = "block";
    document.getElementById("editButton").innerText = "EDIT";
    for (var i = 0; i < warnaTextInput.length; i++) {
      warnaTextInput[i].style.color = "Grey";
    }
  }
}
// toggle class active
const navbarMenu = document.querySelector(".menu");
// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variabel untuk menyimpan pesan pengguna
const API_KEY = ""; // Untuk API Key nya
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Buat elemen <li> obrolan dengan pesan yang diteruskan dan Nama kelasnya
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // mengembalikan elemen <li> obrolan
};

const generateResponse = (chatElement) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = chatElement.querySelector("p");

  // Tentukan properti dan pesan untuk permintaan API
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };

  // Kirim permintaan POST ke API, dapatkan respons dan atur respons sebagai teks paragraf
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content.trim();
    })
    .catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent =
        "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Dapatkan pesan yang dimasukkan pengguna dan hapus spasi ekstra
  if (!userMessage) return;

  // Hapus area teks masukan dan atur tingginya ke default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Tambahkan pesan pengguna ke kotak obrolan
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Tampilkan pesan "Berpikir..." sambil menunggu respons
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Sesuaikan tinggi area teks input berdasarkan kontennya
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // Jika tombol Enter ditekan tanpa tombol Shift dan jendela
  // lebarnya lebih besar dari 800 piksel, tangani obrolan
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);


inputEmail.addEventListener('input', event => {
  document.getElementById('editButton').style.display = 'none';
  account.email = event.target.value;
  if (validasiEmail(account.email) && validasiUsername(account.username)) {
    document.getElementById("editButton").style.marginTop = '-2vw';
    document.getElementById('editButton').style.display = 'block';
  }
})

function validasiEmail(email) {
  const printValidation = document.getElementById('email-validation-detail');
  if (email.includes('@') && email.includes('.')) {
    printValidation.innerText = "email yang dimasukkan valid";
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

inputUsername.addEventListener('input', event =>{
  account.username = event.target.value;
  document.getElementById('editButton').style.display = 'none';
  if (validasiUsername(account.username) && validasiEmail(account.email)) {
    document.getElementById("editButton").style.marginTop = '-2vw';
    document.getElementById('editButton').style.display = 'block';
  }
})

function validasiUsername(username) {
  const hurufBesar = /[A-Z]/.test(username);
  const hurufKecil = /[a-z]/.test(username);
  const angka = /\d/.test(username);
  const panjangValid = username.length <= 8;
  const printValidation = document.getElementById('username-validation-detail');
  if (hurufBesar && hurufKecil && angka && panjangValid) {
    printValidation.innerText = "username yang dimasukkan valid";
    return true;
  } else if (hurufBesar && hurufKecil && angka) {
    printValidation.innerText = "panjang username melebihi 8 karakter.";
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