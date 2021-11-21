const inlineScroll = document.querySelectorAll(".inline-scroll");

inlineScroll && inlineScroll.forEach(scrollEl => {
    container.addEventListener("wheel", (e) => {
        if (scrollEl.scrollWidth > scrollEl.offsetWidth) {
            e.preventDefault();
            content.scrollLeft += e.deltaX + e.deltaY;
        }
    });
});