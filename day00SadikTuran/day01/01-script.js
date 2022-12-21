var maasAli = 7000;
var maasCan = 5000;
var zam = 0.35;

console.log(maasAli + maasAli * zam )
console.log(maasCan + maasCan * zam)
 
let sinavNotu = 40;
let basarilimi = (sinavNotu>50)
console.log(basarilimi);

let ogrenci1Ad = "Ada";
let ogrenci1Soyad = "Bilgi";
let ogrenci1dogumTarihi = "2010";
let ogrenci1Mat1 = 70;
let ogrenci1Mat2 = 70;
let ogrenci1Mat3 = 80;
let og1_ortalama = (ogrenci1Mat1+ogrenci1Mat2+ogrenci1Mat3) /3;
console.log(parseInt(og1_ortalama));
console.log(og1_ortalama>=50);
console.log("*****")
let ogrenci2Ad = "Ada";
let ogrenci2Soyad = "Bilgi";
let ogrenci2dogumTarihi = "2012";
let ogrenci2Mat1 = 40;
let ogrenci2Mat2 = 40;
let ogrenci2Mat3 = 50;
let og2_ortalama = (ogrenci2Mat1+ogrenci2Mat2+ogrenci2Mat3) /3;
console.log(parseInt(og2_ortalama));
console.log(og2_ortalama>=50);

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil- parseInt(ogrenci1dogumTarihi);
let ogr2_yas = suankiYil- parseInt(ogrenci2dogumTarihi);
console.log(ogr1_yas)
console.log(ogr2_yas)
