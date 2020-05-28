
export default function initFilter() {
    const selectSingle = document.querySelector('.filter__select');
    const selectSingleTitle = selectSingle.querySelector('.filter__title');
    const selectSingleLabels = selectSingle.querySelectorAll('.filter__label');

// Toggle menu
    selectSingleTitle.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

// Close when click to option
    for (let i = 0; i < selectSingleLabels.length; i++) {
        selectSingleLabels[i].addEventListener('click', (evt) => {
            selectSingleTitle.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }
}