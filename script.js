let playerX = true;
let crossImage = `<img src=/img/kreuz.png>`;
let circleImage = `<img src="/img/kreis.png"> `;

function insertCross(iField){

    let cross = document.getElementById(iField);

    cross.innerHTML = crossImage;

    cross.onclick="";
    /* console.log(iField.splice(-1)); */

}

function insertCircle(iField) {

    let circle  = document.getElementById(iField);
    
    circle.innerHTML = circleImage;

    circle.onclick = "";

}

function insert(iField){

    if (playerX) {
        insertCross(iField);
        playerX = false;
    } else {
        insertCircle(iField);
        playerX = true;
    }
    
}