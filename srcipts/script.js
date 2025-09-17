       
document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementById("err").innerText="Message sent successfully";
});
        document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  this.style.borderColor = isValid ? "green" : "red";
});