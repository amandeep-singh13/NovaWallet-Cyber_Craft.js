const forms = document.querySelector(".forms"),
         hide = document.querySelectorAll(".eye-icon"),
         links = document.querySelectorAll(".link");

hide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",() =>{
        let pw = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pw.forEach(password =>{
            if(password.type == "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide")
        })
    })

})
links.forEach(link =>{
    link.addEventListener("click",e =>{
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})