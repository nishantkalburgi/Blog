var charCount=document.querySelector("span.cp")
const textarea=document.querySelector("textarea");
textarea.addEventListener("input",()=>{
if(textarea.value.length>500){
    textarea.value=textarea.value.slice(0,500);
    charCount.textContent=500-textarea.value.length;
}else{
    charCount.textContent=500-textarea.value.length;
}
})


document.querySelectorAll(".blog-display").forEach(element => {
    element.addEventListener("click",()=>{
    document.querySelector("form").classList.add("remove");
    document.querySelector("div.bi").classList.remove("remove")
})
})
