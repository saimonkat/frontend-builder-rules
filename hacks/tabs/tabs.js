const productTabsMenu = document.querySelectorAll('.product-tabs__header-list-item');
const productTabs = '.product-tab';

function changeTab(menu, tabs) {
    menu.forEach(link => {
        link.addEventListener('click', function (e) {
            if (link.classList.contains('active')) {
                return
            } else {
                document.querySelectorAll(tabs + '.active')[0].style.animation = "fadeoutEffect .3s";
                const target = link.getAttribute('href').replace(/#(?=\S)/g, '');
                const target_link = Array.from(document.querySelectorAll('a')).find(
                    el => el.href.includes(target)
                );

                window.setTimeout(function () {
                    for (let i = 0; i < document.querySelectorAll(tabs).length; i++) {
                        document.querySelectorAll(tabs)[i].classList.remove('active');
                    }

                    for (let i = 0; i < menu.length; i++) {
                        menu[i].classList.remove('active');
                    }
                    target_link.classList.add('active');
                    document.getElementById(target).classList.add('active');
                    document.getElementById(target).style.animation = "fadeEffect .6s";

                }, 300);
            }
        })
    });
}

if (productTabsMenu) {
    changeTab(productTabsMenu, productTabs);
}