       
document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementById("err").innerText="Message sent successfully";
});
        document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  this.style.borderColor = isValid ? "green" : "red";
});
{
"list"=[
{
Meal:"Achu",
Tribe:"Mankon,Bafut,Babaki,Mbengwi",
desciption:"A rich meal made with pounded cocoyams and banana and yellow soup and mostly eaten in the northwest",
"image":"images/Achu.jpg",
},
{
Meal:"Fufu",
Tribe:"Kom,Bali, Nso, Wom",
desciption:"It is a meal made with fufu-corn, Khati Khati and njama njama  ",
"image":"images/fufu.jpg",
},
{
Meal:"Eru",
Tribe:"Bakossi, Balondo,Belong ",
desciption:"It is a meal made with  Water leaves,eru leaves and Water fufu produced from cassava",
"image":"images/Eru.jpg"
},
{
Meal:"Ndole",
Tribe:"Bakweri,  Wimbom , Ewondo",
desciption:"It is a meal made with better leaves and groundnuts together with cassave or plantains",
"image":"images/Ndole.jpg",
},
{
Meal:"Ekwang",
Tribe:"Bafwa,Balondo,Bakossi" ,
desciption:"It is a meal made with gratered coco yams wraped in coco leaves ",
"image":"images/Ekwang.jpg",
},
{
Meals:"Koki",
Tribe:"Mbo Bafang Banen Bassa" ,
desciption:"It is a meal made with Koki beans and cassava/plantains",
"image":"images/koki.jpg",
},
{
Meals:"Kok",
Tribe:"Pango,Abo, Bakoko" ,
desciption:"It is a meal made with kok leaves and cassava",
"image":"images/kok.jpg",
},
{
Meals:"Beans",
Tribe:"Batibo" ,
desciption:"It is a meal made with beans and red oil with plantians",
"image":"images/beans.jpg",
},
{
Meals:"Bongo",
Tribe:"Mouakobo,Monoka,Nkongsamba" ,
desciption:"It is a meal made with some spieces and plantians",
"image":"images/bongochobi.jpg",
},
{
Meals:"Kokicorn",
Tribe:"Nkonsamba,Melong,Bangem,Bafang" ,
desciption:"It is a meal made with fresh grind corn",
"image":"images/koki corn.jpg",
},
{
Meals:"Turning coco",
Tribe:"Mamfe Meta Belo" ,
desciption:"It is a meal made Coco yams and better leaves",
"image":"images/coco.jpg",
},
{
Meals:"Sanga",
Tribe:"Beti, Bakewri Fang" ,
desciption:"It is a meal made with fresh corn and cassava leaves",
"image":"images/sanga.jpg",
}
]
}