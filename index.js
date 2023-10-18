const container = document.querySelector(".tags");
const input = document.getElementById("name");
const addtag = ()=>{
    
    if(input.value===""){
        return null;
    };
    const tag = document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerHTML = `Hey My Name is ${input.value}`;
    container.append(tag);
};