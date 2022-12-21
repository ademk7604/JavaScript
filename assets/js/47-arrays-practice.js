
document.querySelector("#btnFind").addEventListener("click", ()=>{
    const arr =[12, 53, 5, 67, 55, 569, 76, 8];

    const maxNumber = getMaxNumber(arr);
    document.querySelector("#result").innerHTML = maxNumber;

});

const getMaxNumber = (arr) => {
    //dizi olup olmadigi ni kontrol etmemiz lazim hata vermesin diye
    if(!arr || typeof(arr)!=="object" || arr.length<=0 ) return false;
    
    let maxNum =arr[0]; //sen benim en buyugumsun :)


    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxNum){ //buyuk degilse girmez maxnum degismeyecek
            maxNum=arr[i];
        }


    }

    return maxNum;
}