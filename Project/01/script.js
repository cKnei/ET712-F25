/**
 * Knei | Project 1
 */

/**
 * ========================================
 * CONSTANT VARIABLE DECLARATION
 * ========================================
 */
const SECTION = {
    clothing:   document.querySelector("#clothing"),
    colours:    document.querySelector("#colours"),
    numbers:    document.querySelector("#numbers"),
    shapes:     document.querySelector("#shapes"),
}

/**
 * ========================================
 * FUNCTION DECLARATION
 * ========================================
 */
function toggleSection(section) {
    for ( let s in SECTION ) {
        SECTION[s].classList.add("hidden");
    }

    SECTION[section].classList.remove("hidden");
}
/**
 * ========================================
 * PAGE INITIALIZATION
 * ========================================
 */
for ( let navigation_option of document.querySelectorAll(".navigation_option") ) {
    navigation_option.addEventListener("click", function(event) {
        event.preventDefault();
        toggleSection(navigation_option.textContent.toLowerCase());
    });
}

