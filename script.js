       
document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementById("err").innerText="Message sent successfully";
});
        document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  this.style.borderColor = isValid ? "green" : "red";
});
const food={
Achu:[
{
names:"Mankon,Bafut,Mbengwi,Babaki",
description:"Achu is a traditional meal in cameroon mostly eaten in north west it brings  and also a symbol of respect",
image:"images/Achu.jpg"
}
]
}