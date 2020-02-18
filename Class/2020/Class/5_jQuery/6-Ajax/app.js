$(document).ready(()=>{
    // $("#results").load("test.html",(responseTxt,statusTxt, xhr)=>{
    //     if(statusTxt=="success"){
    //         // alert("It went fine!")
    //         // $("#results").html(responseTxt).css("color","tomato")
    //     }else if(status=="error"){
    //         alert("error"+xhr.statusText)
    //     }
    // $.get("test.html",(data)=>{

    // })
    $.getJSON("users.json",(data)=>{
        $.each(data,(i,user)=>{
            $("ul#users").append(`<li>${user.firstName}</li>`)
        })
    })
    // .css("color","tomato")
})

