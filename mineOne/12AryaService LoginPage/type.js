const open = document.getElementById("openeye");
    const close = document.getElementById("closeeye");
    const passwordInput = document.getElementById("password");

    open.addEventListener("click", function () {
        open.style.display = "none";
        close.style.display = "inline";
        passwordInput.setAttribute("type", "password");
    });

    close.addEventListener("click", function () {
        close.style.display = "none";
        open.style.display = "inline";
        passwordInput.setAttribute("type", "text");
    });