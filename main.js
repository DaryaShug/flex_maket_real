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

// --------------------------------------------------
// btn-----------------------------------------------
let count = 0;

const rootStyle = getComputedStyle(document.querySelector(':root'));
const colorValue_dark = rootStyle.getPropertyValue('--card-bg-col_dark');
const colorValue_light = rootStyle.getPropertyValue('--card-bg-col_light');

function toggleColor() {
    count++;
    if (count%2)
        document.documentElement.style.setProperty('--card-bg-col', colorValue_dark);
    else
        document.documentElement.style.setProperty('--card-bg-col', colorValue_light);

    console.log('colorchanged' + count);
}

document.getElementById('btn').addEventListener('click',toggleColor);