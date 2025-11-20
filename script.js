
document.getElementById("name").addEventListener("input", function () {
    document.getElementById("card-name").textContent =
        document.getElementById("name").value;
});

document.getElementById("title").addEventListener("input", function () {
    document.getElementById("card-title").textContent =
        document.getElementById("title").value;
});

document.getElementById("org").addEventListener("input", function () {
    document.getElementById("card-org").textContent =
        document.getElementById("org").value;
});

function setRole(role, color) {
    document.getElementById("roleTag").textContent = role;
    document.getElementById("roleTag").style.background = color;
    document.getElementById("bottomColor").style.background = color;
}

function printCard() {
    window.print();
}
