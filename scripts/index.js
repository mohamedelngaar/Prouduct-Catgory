let cartIcon = document.querySelector("#cartIcon");
let signoutIcon = document.querySelector("#signoutIcon")

if(!sessionStorage.getItem("username")){
    signoutIcon.style.display = "none";
    cartIcon.style.display = 'none'
}

function signout(){
    signoutIcon.style.display = "none";
    cartIcon.style.display = 'none'
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("userCart")
}

function shopByCategory(category){
    sessionStorage.setItem("prodFilter",category);
    window.location.href = "./products.html";
}