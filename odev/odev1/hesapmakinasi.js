let sayi1;
let sayi2;
let islem;
const ekranEl=document.querySelector("#ekran");
function set1(){
    ekranEl.innerText+="1";
}
function set2(){
    ekranEl.innerText+="2";
}
function topla(){
    sayi1=Number(ekranEl.innerText);
    ekranEl.innerText="";
    islem="+";
}
function cikar(){
    sayi1=Number(ekranEl.innerText);
    ekranEl.innerText="";
    islem="-";
}
function sil(){
    sayi1="";
    sayi2="";
    ekranEl.innerText="";
}
function hesapla(){
    sayi2=Number(ekranEl.innerText);
    if(islem=="+"){
        ekranEl.innerText=sayi1+sayi2;
    }
    if(islem=="-"){
        ekranEl.innerText=sayi1-sayi2;
    }
}