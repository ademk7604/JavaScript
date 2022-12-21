//Kullanıcıdan alınan yaş ve ürün fiyat bilgilerine göre 65 yaştan büyük olanalara
//%50 indirim, diğerlerine %10 indirim uygulayarak bunu mesajla gösterelim

function hesapla (){
    let yas = document.querySelector("#yas").value;
    let fiyat = document.querySelector("#fiyat").value;
    //let indirimliFiyat;
    // Ternaty yontemi
    let indirimliFiyat = yas >=65 ? fiyat*0.5 : fiyat*0.9;

/* //if else yontemi
if(yas>=65)
indirimliFiyat=fiyat*0.5;
else
indirimliFiyat=fiyat*0.9; */

/* //Short Circuit Yontemi
yas>=65 && (indirimliFiyat=fiyat*0.5); // bu yolla bu soru cok mantikli degil
yas<65 && (indirimliFiyat=fiyat*0.9); */

    document.querySelector("#mesaj").innerText = `urunun indirimli Fiyati : ${indirimliFiyat}`;

}