var Currentimage;
let Getnew = ()=>{
    fetch("https://api.catboys.com/img",{    //I'm fetching the API through get method
     method:"GET"
    })
    .then((res)=>res.json())                             // The response is coverted into JSON
    .then((data)=>{
        let Display = document.querySelector(".image")   //The obtained response has a Url which is placed into my img bar
        Display.setAttribute("src",data.url)
        Currentimage= data.url;
    }
     
    )
    .catch((error)=>{console.log(error)})                //Consoling th error for error-handling


 //    .then((data)=>console.log(data.message))  //this is for checking that i'm getting the correct response
    
}
let liked =()=>{
    // var newlink =document.createElement("a");
    // newlink.setAttribute("href",`"${Currentimage}"`);
    // newlink.setAttribute("class","dropdown-item");
    // let menu=document.querySelector(".dropdown-menu");
    // menu.append(newlink)

    let menu=document.querySelector(".dropdown-menu");
    var imglink = document.createElement("div");
    imglink.innerHTML=Currentimage;
    menu.append(imglink);
}
