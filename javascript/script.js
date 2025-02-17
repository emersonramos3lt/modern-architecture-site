// MOBILE MENU
const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
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

/*
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
*/
