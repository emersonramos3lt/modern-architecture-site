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

// LIKE BUTTON

const likeButton = document.querySelectorAll(".likeButton");

likeButton.forEach((likeButton, index) => {
    const numberLike = likeButton.querySelector(".numberLike");

    function checkLike() {
        const isLiked = localStorage.getItem(`isLiked_${index}`);

        if (isLiked === "true") {
            likeButton.classList.add("liked");
            numberLike.textContent = "1";
        }
        else {
            likeButton.classList.remove("liked");
            numberLike.textContent = "";
        }
    }

    checkLike();

    likeButton.addEventListener("click", function() {
        likeButton.classList.toggle("liked");

        if (likeButton.classList.contains("liked")) {
            numberLike.textContent = "1";
            localStorage.setItem(`isLiked_${index}`, "true");
        }
        else {
            numberLike.textContent = "";
            localStorage.setItem(`isLiked_${index}`, "false");
        }
    });
});

// SUBMIT BUTTON TEXT 

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("mouseover", event => {
    event.target.textContent = `Send form`;
    submitButton.style.backgroundColor = "#04E762";
    submitButton.style.color = "#fff";
});

submitButton.addEventListener("mouseout", event => {
    event.target.textContent = `Send`;
    submitButton.style.backgroundColor = "#222";
});