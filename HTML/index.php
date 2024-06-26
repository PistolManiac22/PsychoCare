<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!--Font Awesome-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!--Font Poppins-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
    />
    <!-- AOS -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="../Style/style.css" />

    <title>PsychoCare</title>
  </head>
  <body>
    <!--Navbar Start-->
    <nav class="navbar">
      <div class="mainLogo">
        <h1>MEDICAL</h1>
      </div>

      <ul class="menu">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#socialmedia">Social Media</a>
      </ul>

      <div class="menu-icons">
        <details class="dropdown" class="menu">
          <summary>
            <a id="profile"><i class="fa-solid fa-user"></i></a>
          </summary>
          <ul>
            <li><a href="./profile.html" id="a1"><i class="fa-solid fa-user"></i> | Profil Anda</a></li>
            <li><a href="./index-start.html" id="a2"><i class="fa-solid fa-right-from-bracket"></i> | Log Out</a></li>
          </ul>
        <a href="#" id="hamburger-menu"><i class="ph ph-list"></i></a>
      </div>
    </nav>
    <!--Navbar End-->
    <button class="chatbot-toggler" id="tombol">
      <span class="material-symbols-rounded">mode_comment</span>
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span class="close-btn material-symbols-outlined">close</span>
      </header>
      <ul class="chatbox">
        <li class="chat incoming">
          <span class="material-symbols-outlined">smart_toy</span>
          <p>Halo 👋<br />Bisa ceritain masalahmu?</p>
        </li>
      </ul>
      <div class="chat-input">
        <textarea
          placeholder="Enter a message..."
          spellcheck="false"
          required
        ></textarea>
        <span id="send-btn" class="material-symbols-rounded">send</span>
      </div>
    </div>
    <!--Section Judul Start-->
    <section class="judul">
      <main class="content">
        <h1>PsychoCare</h1>
        <p>Bersuara Lewat Kata</p>
      </main>
    </section>
    <!--Section Judul End-->

    <!--Section Hero Start-->
    <section class="hero" id="home">
      <div class="content">
        <h1>
          Create a Fear-Free <br />
          Environment
        </h1>
        <p>
          Ketika kamu bersuara, kamu bukan hanya mengungkapkan dirimu, tetapi
          juga menunjukkan bahwa kamu layak dihormati.
        </p>
        <?php
          echo "<p>
          Setiap kata yang kamu ucapkan adalah langkah menuju perubahan. Kamu
          bukanlah korban, melainkan pionir keberanian. Jadilah inspirasi bagi
          yang lain, dan bersama-sama kita hentikan perundungan!
        </p>";
        ?>
        
        <button onclick="window.location.href='quiz.html'">
          MULAI BERSUARA
        </button>
      </div>
    </section>
    <!--Section Hero End-->

    <!-- Section Quotes Start-->
    <section class="quotes">
      <div class="content">
        <p>
          Tiap anak berhak mendapat pengasuhan yang layak, dilindungi dari
          kekerasan, penganiayaan, dan pengabaian
        </p>
        <h2>(Pasal 19 Konvensi Hak Anak)</h2>
      </div>
    </section>
    <!-- Section Quotes End-->

    <!--Section About Us Start-->
    <section class="about" id="about">
      <div class="content">
        <div class="tittle" data-aos="fade-up">
          <h1>About Us</h1>
        </div>
        <div class="content1" data-aos="fade-up">
          <p>
            Hi perkenalkan website ini merupakan tempat dimana kamu bisa
            menceritakan semua kejadian yang kamu alami, ga perlu takut untuk
            menyampaikan rasa ketakutan yang sedang kamu rahasiakan. Yuk cerita
            disini!
          </p>
          <p id="bagian2" data-aos="fade-up">
            <strong> What We Do? </strong>
          </p>
          <div class="boxes" data-aos="fade-up">
            <div class="box">
              Menghubungkan korban dengan pihak yang sudah ditentukan untuk
              konsultasi
            </div>
            <div class="box">
              Membantu para korban perundungan untuk bercerita kepada pihak yang
              sudah ditentukan
            </div>
            <div class="box">
              Membantu para korban perundungan untuk bercerita kepada pihak yang
              sudah ditentukan
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Section About Us End-->

    <!--Section Social Media Start-->
    <section class="socmed" id="socialmedia">
      <div class="box-socmed">
        <div class="icons">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-whatsapp"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </section>
    <!--Section Social Media End-->

    <!--Footer Start-->
    <footer>
      <div class="container">
        <p>&copy; 2024 PsychoCare. All Rights Reserved.</p>
      </div>
    </footer>
    <!--Footer End-->

    <script src="../Script/Script.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
  </body>
</html>
