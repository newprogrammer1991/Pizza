let bars = document.getElementsByClassName('progress__bar');
for (let i = 0; bars.length > i; i++) {
    const {progress} = bars[i].dataset;
    checkAndSet(bars[i], +progress);
}

function checkAndSet(bar, progress) {
    let fill = bar.querySelector('.progress__bar-fill');
    let value = bar.querySelector('.progress__value');
    fill.style.width = progress + '%';
    value.innerText = progress + '%';

    if (progress === 100) {
        value.style.right = '0';
        fill.classList.add('progress__bar-fill_circle');
    }
    else {
        value.style.left = progress + '%';
        value.style.transform = 'translate(-50%)';
    }
}
