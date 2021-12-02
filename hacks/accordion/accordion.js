export default function accordion(e, links, panels) {
    e.preventDefault();
    const panel = e.target.nextElementSibling;

    for (let i = 0; i < links.length; i++) {
        !links[i].contains(e.target) && links[i].classList.remove('active');
    }

    for (let i = 0; i < panels.length; i++) {
        !panels[i].contains(panel) && panels[i].removeAttribute('style');
    }

    e.target.classList.toggle('active');

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}