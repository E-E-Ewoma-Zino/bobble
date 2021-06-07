// booble code :)


const box = document.getElementById("box");
// make a bobble function
function createBobble(data) {
    // we would create boubles in the box
    const newBobble = document.createElement("DIV");

    newBobble.style = `bottom: ${data.bottom}%;
    right: ${data.right}%;
    width: ${data.size}px;
    height: ${data.size}px;
    background-image: radial-gradient(${data.color2} 5%, rgba(${data.rgb[0]},${data.rgb[1]},${data.rgb[2]},.6) 60%);`;

    newBobble.classList.add("bobble");
    newBobble.style.animationDuration = `${data.speed}s`;

    newBobble.addEventListener("click", function(){
        this.style.display = "none";
    });

    box.append(newBobble);
}

// now to create bobbles at random

function rndBobble() {
    // we need an algorithm for the randomness of the bubble :(
    // hmmmmmmmm..............................
    let rn1 = Math.round(Math.random() * 10) + 1;
    let rn2 = Math.round(Math.random() * 10) + 1;
    let speed = Math.round(Math.random() * 9) + 4;
    let rgb1 = Math.round(Math.random() * 255) + 1;
    let rgb2 = Math.round(Math.random() * 255) + 1;
    let rgb3 = Math.round(Math.random() * 255) + 1;

    createBobble({
        bottom: -40,
        right: 10 * rn1,
        size: 10 * rn2,
        color2: "#fff",
        speed: speed,
        rgb: [rgb1, rgb2, rgb3]
    });
}

setInterval(() => {
    rndBobble();
}, 5000);
// ok :)

// now to get rnd colors
// now to make the colors better
// ok bye!
// maybe i will improve on it later :)