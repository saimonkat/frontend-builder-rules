const inlineScroll = document.querySelectorAll(".inline-scroll");

inlineScroll && inlineScroll.forEach(scrollEl => {
    scrollEl.addEventListener("wheel", (e) => {
        if (scrollEl.scrollWidth > scrollEl.offsetWidth) {
            e.preventDefault();
            scrollEl.scrollLeft += e.deltaX + e.deltaY;
        }
    });
});