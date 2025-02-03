const navbarBreakpoint = 992;

function toggleNavbar(id, show) {
    if (window.innerWidth >= navbarBreakpoint) {
        const aElement = document.querySelector(`#${id} a.dropdown-toggle`);
        const dropdownMenu = document.querySelector(`#${id} ul.dropdown-menu`);
        
        if (show) {
            aElement.classList.add("show");
            aElement.ariaExpanded = true;
            dropdownMenu.classList.add("show");
        } else {
            aElement.classList.remove("show");
            aElement.ariaExpanded = false;
            dropdownMenu.classList.remove("show");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIds = ["devops", "promotion", "about"];
    
    menuIds.forEach((id) => {
        const menu = document.getElementById(id);
        menu.addEventListener("mouseover", () => toggleNavbar(id, true));
        menu.addEventListener("mouseout", () => toggleNavbar(id, false));
    });
});
