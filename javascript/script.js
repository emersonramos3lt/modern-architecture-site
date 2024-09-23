const myMenu = document.getElementById("myMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .myMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    myMenu.style.display = "flex";
    myMenu.style.right = "-20%";
    document.body.style.overflow = "hidden";
    openMenu.style.opacity = 1;
}

function close() {
    myMenu.style.right = "-110%"
    document.body.style.overflow = "auto";
    openMenu.style.opacity = 1;
}