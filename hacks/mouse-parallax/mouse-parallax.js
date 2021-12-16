import { TweenLite } from 'gsap';

/**
 * .parallax - класс элемента
 * shiftSize - размер сдвига
 */
function parallax() {
    const mouse = { x: 0, y: 0, moved: false };
    const shiftSize = 30;
    let rect = document.documentElement.getBoundingClientRect();

    document.addEventListener('mousemove', e => {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    TweenLite.ticker.addEventListener('tick', function () {
        if (mouse.moved) {
            parallaxIt(".parallax", -shiftSize);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenLite.to(target, 0.5, {
            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }

    window.addEventListener('resize', () => {
        rect = document.documentElement.getBoundingClientRect();
    })
} 

window.matchMedia('(min-width: 1200px)').matches && parallax();