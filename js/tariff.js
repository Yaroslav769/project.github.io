function resetEnlarged(tariffs) {
    tariffs.forEach((item) => item.classList.remove("enlarged"));
}

function enlargeCenter(tariffs) {
    if (window.innerWidth >= 768) {
        resetEnlarged(tariffs);
        const middleItem = tariffs[Math.floor(tariffs.length / 2)];
        middleItem.classList.add("enlarged");
    }
}

function handleHover(tariffs, item, isEntering) {
    if (window.innerWidth >= 768) {
        resetEnlarged(tariffs);
        if (isEntering) item.classList.add("enlarged");
    }
}

function handleResize(tariffs) {
    if (window.innerWidth >= 768) {
        enlargeCenter(tariffs);
    } else {
        resetEnlarged(tariffs);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tariffs = document.querySelectorAll(".tariff");

    tariffs.forEach((item) => {
        item.addEventListener("mouseenter", () => handleHover(tariffs, item, true));
        item.addEventListener("mouseleave", () => handleHover(tariffs, item, false));
    });

    document.querySelector(".tariff__block").addEventListener("mouseleave", () => {
        if (window.innerWidth >= 768) enlargeCenter(tariffs);
    });

    handleResize(tariffs);
    window.addEventListener("resize", () => handleResize(tariffs));
});
