const selects = document.querySelectorAll('.custom-select select');

const setSelectedOptions = options => {
    [...options].forEach(option => {
        if (!option.selected) {
            option.removeAttribute('selected');
        } else {
            option.setAttribute('selected', true);
        }
    });
}

const changeEvent = (e) => {
    const selectOptions = e.target.options;
    setSelectedOptions(selectOptions);
}

const createDiv = (...classes) => {
    const node = document.createElement("div");
    node.classList.add(...classes);
    return node;
}

const closeAllSelect = (select) => {
    const selectItems = document.getElementsByClassName('select-items');
    const selected = document.getElementsByClassName('select-selected');
    const arr = [];

    for (let i = 0; i < selected.length; i++) {
        if (select === selected[i]) {
            arr.push(i);
        } else {
            selected[i].classList.remove('active');
        }
    }
    for (let i = 0; i < selectItems.length; i++) {
        if (arr.indexOf(i)) {
            selectItems[i].classList.add('select-hide');
        }
    }
}

selects.forEach(select => {
    const options = select.options;
    const selectSelected = createDiv('select-selected');
    selectSelected.innerText = options[select.selectedIndex].text;
    select.parentElement.appendChild(selectSelected);

    const createOptions = () => {
        const selectContainer = createDiv('select-items', 'select-hide');
        Array.from(options).forEach((option, index) => {
            const isSelected = option.selected;
            const item = createDiv('select-item');
            item.setAttribute('data-item', index.toString());
            item.innerText = option.text;
            if (isSelected) {
                item.className += ' selected';
            }
            selectContainer.appendChild(item);

            item.addEventListener('click', function (e) {
                const currentSelect = this.parentNode.parentNode.getElementsByTagName('select')[0];
                const currentSelected = this.parentElement.previousElementSibling;
                const currentItems = this.parentElement.getElementsByClassName('select-item');
                for (let i = 0; i < currentItems.length; i++) {
                    currentItems[i].classList.remove('selected');
                }
                if (options[index].innerText === this.innerHTML) {
                    currentSelect.selectedIndex = index;
                    currentSelect.dispatchEvent(new Event('change'));
                    currentSelected.innerHTML = this.innerHTML;
                }
                this.classList.add('selected');
            });
        });
        return selectContainer;
    }

    select.parentElement.appendChild(createOptions());

    select.addEventListener('change', changeEvent);

    selectSelected.addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('active');
    });
});

document.addEventListener('click', closeAllSelect);