function navbar_handler() {
    let trigger = document.getElementById("more_pages");
    let menu_lines = document.getElementById("menu_lines");
    let menu_cross = document.getElementById("menu_cross");
    let navigation_handler =
        document.getElementsByClassName("navigation_handler")[0];
    trigger.addEventListener("click", (e) => {
        menu_lines.classList.toggle("menu_hide");
        menu_lines.classList.toggle("menu_display");
        menu_cross.classList.toggle("menu_display");
        menu_cross.classList.toggle("menu_hide");
        navigation_handler.classList.toggle("display_nav");
    });
}
navbar_handler();
