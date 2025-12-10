const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faqAnswer = button.parentElement.nextElementSibling;
    faqAnswer.classList.toggle('active');
    
    // Trocar a imagem do botão
    const img = button.querySelector('img');
    
    if (faqAnswer.classList.contains('active')) {
      img.src = 'assets/images/icon-minus.svg';
    } else {
      img.src = 'assets/images/icon-plus.svg';
    }
  });
});

