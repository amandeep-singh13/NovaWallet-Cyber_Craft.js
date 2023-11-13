let accordion = document.querySelectorAll('.accordion-container .accordion');
accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(sub => {
            if (sub !== acco) {
                sub.classList.remove('active');
            }
        });
        acco.classList.toggle('active');
    }
});
