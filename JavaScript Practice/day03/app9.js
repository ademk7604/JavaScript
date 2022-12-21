


let rb_erkek =document.querySelector("#erkek");
let rb_kadin =document.querySelector("#kadin");
let mesaj = document.querySelector("#msg");

function durum(){
    let yas = document.querySelector("#yas").value;
    if(yas){
        if(yas>=20 && rb_erkek,checked){
            mesaj.innerHTML = `<strong>Askere Gidenilirsiniz</strong>`;
            mesaj.classList.add("yesil");
        }
        else{
            mesaj.innerHTML = `<strong>Gidemezsiniz</strong>`;
            mesaj.classList.add("kirmizi");
        }
    }else{
        mesaj.innerHTML = `<strong>Yas Degeri Giriniz</strong>`;
        mesaj.classList.add("turuncu");

    }
}