const progress = document.querySelector('.progress');
// progress bar

const btn_prev = document.querySelector('#prev');
const btn_nxt = document.querySelector('#next');

const circle = document.querySelectorAll('.circle');

let curr_val = 1;



btn_nxt.addEventListener('click',()=>{
    curr_val++;
    if(curr_val > circle.length){
        curr_val = circle.length;
    }

    update();
});



btn_prev.addEventListener('click',()=>{
    curr_val--;
    if(curr_val < 1 ){
        curr_val = 1;

    }

    update();
});

function update() {
    circle.forEach((c, idx) => {
        if(idx < curr_val) {
            c.classList.add('active')
        } else {
            c.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'

    if(curr_val === 1) {
        btn_prev.disabled = true
    } else if(curr_val === circle.length) {
        btn_nxt.disabled = true
    } else {
        btn_prev.disabled = false
        btn_nxt.disabled = false
    }
}
