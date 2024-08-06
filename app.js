const burger = document.querySelector('.bi-list');

var typed = new Typed(".auto-type", {
    strings : ["Good Learner", "Problem Solver", "Front-End Developer"],
    typeSpeed : 80,
    backspeed : 150,
    loop : true
})


// For Animated number scroll
const counters = document.querySelectorAll('.counter');
const container = document.getElementById('numbers');

let activated = false;

window.addEventListener("scroll", () => {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 500 && activated === false
    ){
        counters.forEach(counter => {
            counter.innerText = 0;

            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);

                if(count < target){
                    count = count + 3;

                    counter.innerText = count;

                    setTimeout(updateCount, 1);
                }else {
                    counter.innerText = target;
                }
            }
            updateCount();

            activated = true;
        });
    } else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});