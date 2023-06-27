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



