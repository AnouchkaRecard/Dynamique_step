// Fonction pour mettre à jour le compte à rebours
function updateCountdownTel1() {
    const now = new Date();
    const targetDate = new Date('October 6, 2024 00:00:00');
    const timeDifference = targetDate - now;

    // Calcul des jours, heures, minutes et secondes restantes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Mise à jour du DOM
    document.querySelector('#countdown-d027f715 #days').textContent = days.toString().padStart(2, '0');
    document.querySelector('#countdown-d027f715 #hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('#countdown-d027f715 #minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('#countdown-d027f715 #seconds').textContent = seconds.toString().padStart(2, '0');
}

// Mise à jour du compte à rebours toutes les secondes
setInterval(updateCountdownTel1, 1000);

// Initialiser le compte à rebours
updateCountdownTel1();
