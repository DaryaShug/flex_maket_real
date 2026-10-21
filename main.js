function addremoveClass() {
    var w = screen.width;
    if (w < 300) {
        document.getElementById("first-card_id").classList.remove("first-card");
    }
    else if (w >= 300) {
        document.getElementById("first-card_id").classList.add("first-card");
    }
}

// Выполняем заново при изменении размера окна
window.addEventListener('resize', function() {
    console.log("Размер окна изменен");
    addremoveClass();
});