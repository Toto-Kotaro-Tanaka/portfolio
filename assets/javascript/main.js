"use strict";

// Credit: Stack Overflow @ https://stackoverflow.com/questions/7264974/show-text-letter-by-letter
// Showing Main Heading Name
const showHeadingName = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () {
            showHeadingName(target, message, index, interval);
        }, interval);
    }
};

showHeadingName("#heading-name", "hi, i'm toto.", 0, 200);

// Showing Main Heading Description
const showHeadingDesc = function (target, message, index, interval) {
    setTimeout(function () {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () {
                showHeadingName(target, message, index, interval);
            }, interval);
        }
    }, 3800);
};

showHeadingDesc("#heading-desc", "a full stack developer...", 0, 200);
// ---------- /End of Credit ----------

// Footer Year Auto Update
$("#copyright").text(new Date().getFullYear());

// Credit: Stack Overflow @ https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
// UFO

$(document).ready(function () {
    animateDiv();
});

function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    let h = $(window).height() - 50;
    let w = $(window).width() - 50;

    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function animateDiv() {
    let newq = makeNewPosition();
    let oldq = $(".ufo").offset();
    let speed = calcSpeed([oldq.top, oldq.left], newq);

    $(".ufo").animate({ top: newq[0], left: newq[1] }, speed, function () {
        animateDiv();
    });
}

function calcSpeed(prev, next) {
    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);

    let greatest = x > y ? x : y;

    let speedModifier = 0.08;

    let speed = Math.ceil(greatest / speedModifier);

    return speed;
}
