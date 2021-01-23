const up = document.querySelector("#up");
        up.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        });