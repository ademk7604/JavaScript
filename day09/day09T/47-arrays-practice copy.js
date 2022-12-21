
document.querySelector("#btnFind").addEventListener("click", ()=>{
    const arr =[12 ,53 ,55, 8, 66, 48, 685, 69];

    const maxNumber =getMaxNumber(arr);
    document.querySelector("#result").innerHTML = maxNumber;

});

const getMaxNumber = (arr) => {
    if(!arr || typeof(arr)!=="object" || arr.length<=0) return false;

    let maxNum = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }
    return maxNum;
}