//ornek 1
//console.log("Javascript Practice ilk dersi basladi.")
//console.warn("uyari amacli kullanilir")
//console.error("hatalari gosterme amacli kullanilir")
//ornek-2
//alert("Bu bir uyari mesajideir");
//confirm("Silmek istediginizden eminmisiniz") // buna tama dediginmizden ilerde api ye baglayip deletemappingi yapar

//ornek-3
/*    let uzunKenar = prompt("uzun kenari giriniz");20
let kisaKenar = prompt("kisa kenari giriniz");
let alan = Number(uzunKenar)*Number(kisaKenar);
console.log(`Dikdortgenin alani = ${alan}' dir.`) // biirde uyari seklinde yapalim alert ile yani
alert(`Dikdortgenin alani = ${alan}'dir.`)
*/
//ornek 4
let pi = 3.14;
console.log(typeof(pi));
let deger = true;
console.log(typeof(deger))
let deger2 = "deneme";
console.log(typeof(deger2))

let ad1 = "Ali";
let ad2 = "Oya"
let ad3 = "can"
let ad4 = null
let ad5 = ""
let ad6 = undefined
console.log(ad1 && ad2 &&  ad3); // false arar bulmazsa sonuncu elemani yazdirir.// can yazdi
console.log(ad1 &&  ad2 && ad4 &&  ad3) // ilk false olan null i yazdirdi
console.log(ad4 || ad5 || ad2 || ad6) // ilk true yazdirir oya
console.log(ad4|| ad5 || false || ad6); //ndefined hepsi false en sonrakini yazdiridi

//ornek-6
let x = 40 ;
let y = "30";

console.log(y==="40")//true
console.log(y===30n)//false
console.log(y!==30n)//true// data type de bakiyor eist degildir diyor zaten
console.log(x>(y+10))//false 3010
console.log(x<(y+10))//true 3010

//ornek-7
const sayi = 254;

const birler = sayi%10;
const onlar = Math.floor(sayi/10)%10; //floor zemin demek sayiyi 10 bolduk 25.4 oldu asagi yuvarladi sonra % aldigimizda 5 verdi
//ceiling de yukari yuvarlar
const yuzler = Math.floor(sayi/100); // 2.54 oldu ve asagi yuvarladi
const toplam = birler+onlar+yuzler;
console.log(`${sayi} sayisinin rakamlari toplami ${toplam}`)

//ornek-8
let a = 5;
let b=--a; //b=4 a=4
let c =b++; //c=4 b=5
console.log(a,b,c);

const sayi1 = 5;
    const sayi2=-7;
    const isim = "John";
    const sifir=0; //false
    const hic=null;
    const bos="";
    const tanimsiz=undefined;
    const sayiDegil=NaN; //false
    console.log(Boolean(isim))
    console.log(Boolean(sayi1));
    console.log(Boolean(bos),Boolean(hic),Boolean(sifir),Boolean(tanimsiz),Boolean(sayiDegil));

    //ornek-10
    let isim1 = prompt("lutfen isiminizi giriniz");
if(!isim1){
    alert("isminizi girmediniz")
}
else{
    alert(`Hosgeldiniz sayin ${isim1}`) //iceriginde bir segiskeni kullanacaksan bickdik kullanmak ziroum[-=ndayiz]
}
//ornek-11
let giris = true;
    let cikis = false;
    console.log(!giris || cikis || giris);
    console.log(!giris||cikis);
    console.log((giris&&cikis) || !cikis && !giris); // burda sirayla geliyoruz.



