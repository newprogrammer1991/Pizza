class Control {
    constructor(options) {
        this.elem = options.elem;
        this.count = 1;
        this.elem.addEventListener('click', (event) => {
            if (event.target.closest('.btn_minus')) {
                this.decrement();
            }
            else if (event.target.closest('.btn_plus')) {
                this.increment();
            }
            if (event.target.closest('.btn-action')) {
                this.toggle();
            }
        })
    }


    increment() {
        this.count = this.count + 1;
        this.setCount();
    }

    decrement() {
        if (this.check())return;
        this.count = this.count - 1;
        this.setCount();
    }

    setCount() {
        this.check();
        let count = this.elem.querySelector('.count');
        count.innerHTML = this.count;
    }

    toggle() {
        const mainElem = this.elem;
        const btn = mainElem.querySelector('.btn-action');
        mainElem.classList.toggle('delete');
        btn.innerHTML = mainElem.classList.contains('delete') ? 'Вернуть' : 'Удалить';
        if (mainElem.classList.contains('delete')) {
            btn.innerHTML = 'Вернуть';
            this.elem.querySelector('.btn_minus').disabled = true;
            this.elem.querySelector('.btn_plus').disabled = true;
        }
        else {
            btn.innerHTML = 'Удалить';
            this.elem.querySelector('.btn_minus').disabled = false;
            this.elem.querySelector('.btn_plus').disabled = false;
        }
    }

    check() {
        const btnMinus = this.elem.querySelector('.btn_minus');
        if (this.count === 1) {
            btnMinus.disabled = true;
            return true;
        }
        else {
            btnMinus.disabled = false;
        }
    }
}


let control1 = new Control({
    elem: document.getElementById('pizza1')
});

let control2 = new Control({
    elem: document.getElementById('pizza2')
});
let control3 = new Control({
    elem: document.getElementById('pizza3')
});
control1.setCount();
control2.setCount();
control3.setCount();