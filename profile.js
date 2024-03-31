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
const navbarMenu = document.querySelector('.menu');
// ketika hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarMenu.classList.toggle('active');
};

//klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});