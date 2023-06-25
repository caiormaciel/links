function toggleMode() {
   const html = document.documentElement
   html.classList.toggle("light-mode")

    //pegar a tag img
    const image = document.querySelector(".profile img")


    //substituição da imagem
    if(html.classList.contains("light-mode")){
       //se tiver light-mode, adicionar a imagem light
       image.setAttribute("src", "assets/assets/avatar-light.png")
       image.setAttribute("alt", "foto de óculos escuro")
    }
    else {
        //se tiver sem light-mode, adicionar a imagem dark
       image.setAttribute("src", "assets/assets/avatar.png")
        image.setAttribute("alt", "foto de óculos")
    }


    


}