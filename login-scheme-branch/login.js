document.querySelector('.toggle-password').addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  
    const input = document.querySelector('#password');
  
    if (input) {
      // Mengubah tipe input dari password ke text atau sebaliknya
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    }
});