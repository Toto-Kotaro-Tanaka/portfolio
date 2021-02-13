"use strict";

// Credit: Stack Overflow @ https://stackoverflow.com/questions/7264974/show-text-letter-by-letter
// Showing Main Heading Name
const showHeadingName = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).append(message[index++]);
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
            document.querySelector(target).append(message[index++]);
            setTimeout(function () {
                showHeadingName(target, message, index, interval);
            }, interval);
        }
    }, 3800);
};

showHeadingDesc("#heading-desc", "a full stack developer...", 0, 200);

// const showMainText = function (target, message, index, interval) {
//     setTimeout(function () {
//         if (index < message.length) {
//             document.querySelector(target).append(message[index++]);
//             setTimeout(function () {
//                 showHeadingName(target, message, index, interval);
//             }, interval);
//         }
//     }, 9500);
// };

// showMainText(
//     "#main-text",
//     "here is the link to my projects. please take a look at them",
//     0,
//     50
// );
// ---------- /End of Credit ----------

// Footer Year Auto Update
document.querySelector("#copyright").textContent = new Date().getFullYear();
