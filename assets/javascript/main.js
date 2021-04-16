/*jshint esversion: 6 */

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

showHeadingDesc("#heading-desc", "a full stack developer...(tbc)", 0, 200);
// ---------- /End of Credit ----------

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
// ---------- /End of Credit ----------

// Credit: CSS-Tricks @ https://css-tricks.com/bubble-point-tooltips-with-css3-jquery/
// IIFE to ensure safe use of $
(function ($) {
    // Create plugin
    $.fn.tooltips = function (el) {
        var $tooltip,
            $body = $("body"),
            $el;

        // Ensure chaining works
        return this.each(function (i, el) {
            $el = $(el).attr("data-tooltip", i);

            // Make DIV and append to page
            var $tooltip = $(
                '<div class="tooltip" data-tooltip="' +
                    i +
                    '">' +
                    $el.attr("title") +
                    '<div class="arrow"></div></div>'
            ).appendTo("body");

            // Position right away, so first appearance is smooth
            var linkPosition = $el.position();

            $tooltip.css({
                top: linkPosition.top - $tooltip.outerHeight() - 13,
                left: linkPosition.left - $tooltip.width() / 2,
            });

            $el
                // Get rid of yellow box popup
                .removeAttr("title")

                // Mouseenter
                .hover(
                    function () {
                        $el = $(this);

                        $tooltip = $(
                            "div[data-tooltip=" + $el.data("tooltip") + "]"
                        );

                        // Reposition tooltip, in case of page movement e.g. screen resize
                        var linkPosition = $el.position();

                        $tooltip.css({
                            top: linkPosition.top - $tooltip.outerHeight() - 13,
                            left: linkPosition.left - $tooltip.width() / 2,
                        });

                        // Adding class handles animation through CSS
                        $tooltip.addClass("active");

                        // Mouseleave
                    },
                    function () {
                        $el = $(this);

                        // Temporary class for same-direction fadeout
                        $tooltip = $(
                            "div[data-tooltip=" + $el.data("tooltip") + "]"
                        ).addClass("out");

                        // Remove all classes
                        setTimeout(function () {
                            $tooltip.removeClass("active").removeClass("out");
                        }, 300);
                    }
                );
        });
    };
})(jQuery);

$("a[title]").tooltips();
// ---------- /End of Credit ----------
