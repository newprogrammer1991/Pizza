class Control {
    constructor(options) {
        this.elem = options.elem;
        this.count = 1;
        this.elem.addEventListener('click', (event) => {
            if (event.target.closest('.btn-control-minus')) {
                this.decrement();
            }
            else if (event.target.closest('.btn-control-plus')) {
                this.increment();
            }
            else if (event.target.closest('.btn-action')) {
                this.toggle();
            }
        })
    }


    increment() {
        this.count = this.count + 1;
        this.setCount();
    }

    decrement() {
        if (this.count === 1)return;
        this.count = this.count - 1;
        this.setCount();
    }

    setCount() {
        let count = this.elem.querySelector('.count');
        count.innerHTML = this.count;
    }

    toggle() {
        this.elem.classList.toggle('delete');
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