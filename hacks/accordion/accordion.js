const someLinks = document.querySelectorAll('.some-link');
const somePanels = document.querySelectorAll('.some-panel');

// If link has class 'active', panel is open
for (let i = 0; i < someLinks.length; i++) {
    if ( someLinks[i].classList.contains('active') ) {
        const panel = someLinks[i].nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function accordion(e, links, panels) {
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

someLinks && someLinks.forEach(link => {
   link.addEventListener('click', e => {
       accordion(e, someLinks, somePanels);
   });
});