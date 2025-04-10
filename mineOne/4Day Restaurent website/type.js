function dropdown() {
    const dropList = document.querySelector('.drop');
    const downArrow = document.querySelector('.visible');
    const upArrow = document.querySelector('.invisible');

    dropList.classList.toggle('show');

    // Swap buttons
    downArrow.classList.toggle('invisible');
    downArrow.classList.toggle('visible');

    upArrow.classList.toggle('invisible');
    upArrow.classList.toggle('visible');
}
