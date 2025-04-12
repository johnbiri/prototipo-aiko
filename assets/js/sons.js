// Adiciona som ao clique no botão toggle, garantindo que o botão exista
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.navbar-toggler');
    if (button) {
        const clickSound = new Audio('assets/aud/click.mp3');
        let clickCount = 0; // Contador de cliques

        button.addEventListener('click', () => {
            clickCount++; // Incrementa o contador
            if (clickCount <= 20) {
                clickSound.currentTime = 0; // Reseta o áudio para o início
                clickSound.play();         // Toca o áudio
            } else if (clickCount === 21) {
                // Troca para o novo som e toca apenas uma vez
                const alertSound = new Audio('assets/aud/alert.mp3');
                alertSound.play();
            }
        });
    }
});

// Adiciona som de links
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link00');
    
    buttons.forEach(button => {
        if (button) {
            const clickSound = new Audio('assets/aud/click.mp3');
            
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Impede o redirecionamento imediato
                clickSound.currentTime = 0; // Reseta o áudio para o início
                clickSound.play(); // Toca o áudio

                // Aguarda o tempo do áudio antes de redirecionar
                setTimeout(() => {
                    if (button.target === "_blank") {
                        window.open(button.href, '_blank'); // Abre em nova aba
                    } else {
                        window.location.href = button.href; // Abre na mesma aba
                    }
                }, clickSound.duration * 1000); // Tempo em milissegundos
            });
        }
    });
});

// Adiciona som de botão sem redirecionamento
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link01'); // Seleciona todos os botões .link01
    
    buttons.forEach(button => {
        if (button) {
            const clickSound = new Audio('assets/aud/click.mp3');
            
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Impede qualquer ação padrão do botão
                
                clickSound.currentTime = 0; // Reseta o áudio para o início
                clickSound.play(); // Toca o áudio
            });
        }
    });
});
