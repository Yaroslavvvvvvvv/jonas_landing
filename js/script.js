document.getElementById('scrollButton').addEventListener('click', function () {
    let target = document.getElementById('targetParagraph');
    target.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('scrollSecondButton').addEventListener('click', function () {
    let target = document.getElementById('targetSpan');
    target.scrollIntoView({behavior: 'smooth'})
})
document.getElementById('scrollThirdButton').addEventListener('click', function () {
    let target = document.getElementById('targetDiv');
    target.scrollIntoView({behavior: 'smooth'})
})
document.querySelector('a[href^="#"]').addEventListener('click', function (event) {
    event.preventDefault();

    let targetId = this.getAttribute('href').substring(1);
    let target = document.getElementById(targetId);

    if (target) {
        target.scrollIntoView({behavior: 'smooth'});
    }
});

const first_image = document.getElementById('first_image');
const first_bottom = document.getElementById('first_bottom');

const second_image = document.getElementById('second_image');
const second_bottom = document.getElementById('second_bottom');

const third_image = document.getElementById('third_image');
const third_bottom = document.getElementById('third_bottom');

const fourth_image = document.getElementById('fourth_image');
const fourth_bottom = document.getElementById('fourth_bottom');

const fifth_image = document.getElementById('fifth_image');
const fifth_bottom = document.getElementById('fifth_bottom');

const sixth_image = document.getElementById('sixth_image');
const sixth_bottom = document.getElementById('sixth_bottom');

first_image.addEventListener('mouseover', function() {
    first_bottom.style.backgroundColor = '#debe33';
});
first_image.addEventListener('mouseout', function() {
    first_bottom.style.backgroundColor = '#F7F7F7';
});

second_image.addEventListener('mouseover', function() {
    second_bottom.style.backgroundColor = '#debe33';
});
second_image.addEventListener('mouseout', function() {
    second_bottom.style.backgroundColor = '#F7F7F7';
});

third_image.addEventListener('mouseover', function() {
    third_bottom.style.backgroundColor = '#debe33';
});
third_image.addEventListener('mouseout', function() {
    third_bottom.style.backgroundColor = '#F7F7F7';
});

fourth_image.addEventListener('mouseover', function() {
    fourth_bottom.style.backgroundColor = '#debe33';
});
fourth_image.addEventListener('mouseout', function() {
    fourth_bottom.style.backgroundColor = '#F7F7F7';
});
fifth_image.addEventListener('mouseover', function() {
    fifth_bottom.style.backgroundColor = '#debe33';
});
fifth_image.addEventListener('mouseout', function() {
    fifth_bottom.style.backgroundColor = '#F7F7F7';
});

sixth_image.addEventListener('mouseover', function() {
    sixth_bottom.style.backgroundColor = '#debe33';
});
sixth_image.addEventListener('mouseout', function() {
    sixth_bottom.style.backgroundColor = '#F7F7F7';
});


$('#exampleModal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget)
    let recipient = button.data('whatever')
    let modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})






