
const rightAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answers, index) => {

        if (answers === rightAnswers[index]) {
            score += 25;
        }

    });

    result.classList.remove('d-none'); //


    scrollTo(0, 0)
    console.log(document.querySelector('form'));

    // marking system and animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;

        if (output === score) // if reaches to value stops
        {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 10);



});






