let contain = document.querySelectorAll(".contain");
let title = document.getElementById("title");
let content = document.getElementById("content");



let Add = () => {
    if (title.value === "") {
        alert("Add some content");
    } 
    else{
        let addNewUl=document.querySelector(".addNewUl");
    
        let addContent=document.createElement("ul");
        addContent.classList.add("addul");
           
//for title new list is made and textcontent=>same as that of inner.html

           let titleValue=document.createElement("li");
           titleValue.classList.add("titleValueAdd")
           titleValue.textContent=title.value;

//for content 

           let contentValue=document.createElement("li");
           contentValue.classList.add("contentValueAdd");
           contentValue.textContent=content.value;

//for deleting the content
           let deleteButton = document.createElement("button")
           deleteButton.id = "delete"
           deleteButton.textContent = "delete"
           deleteButton.addEventListener("click",()=>{
            addContent.remove();
           });
        
        addContent.style.backgroundColor="white";
        addContent.appendChild(titleValue);
        addContent.appendChild(contentValue);
        addContent.appendChild(deleteButton);
        addNewUl.appendChild(addContent);
        
        title.value=""
        content.value="";
        
        

    }
};
let addButton=document.getElementById("submit");
addButton.addEventListener("click",Add);


