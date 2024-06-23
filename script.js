apiUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const searchBtn=document.getElementById("generateBtn")
const searchBox=document.querySelector(".search input")
const qrImage=document.getElementById("qrImg")
const errorMess=document.getElementById("errorMess")

async function getQr(data) {
    const response=await fetch(apiUrl+data)
    if(response.status==404) {
        errorMess.style.display="block";
        qrImage.style.display="none"
    }
    else {
        errorMess.style.display="none"
        qrImage.style.display="block"        
        qrImage.src=response.url
    }
}

generateBtn.addEventListener("click",()=> {
    getQr(searchBox.value)
})