//Textboxlara girilen ad ve meslek değerlerine göre mesaj yazdırın.
let message = document.querySelector("#mesaj");
function gonder() {
    let isim = document.querySelector("#ad").value;
    let meslek = document.querySelector("#meslek").value;
    
    message.classList.remove("d-none");
    message.classList.add("d-block");
    if (!isim || !meslek) {
        message.innerText = "Lütfen formu eksiksiz doldurunuz"
    }
    else
        message.innerText = `Sayın ${meslek} ${isim} hoşgeldiniz`

}

function sil() {
    message.innerText = "";
    message.classList.add("d-none");
}