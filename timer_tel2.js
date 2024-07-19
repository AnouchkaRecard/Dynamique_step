// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('October 6, 2024 00:00:00');
    const timeDifference = targetDate - now;

    // Vérifie si le compte à rebours est terminé
    if (timeDifference <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Calcul des jours, heures, minutes et secondes restantes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Mise à jour du DOM pour le dernier timer
    document.getElementById('countdown-dfd790a1').innerHTML = `
        <section class="sc-bmyXtO ctLYKs">
            <section class="sc-ipZHIp" id="days">${days.toString().padStart(2, '0')}</section>
            <section class="sc-iGrrsa">jours</section>
        </section>
        <section class="sc-iqzUVk">: </section>
        <section class="sc-bmyXtO ctLYKs">
            <section class="sc-ipZHIp" id="hours">${hours.toString().padStart(2, '0')}</section>
            <section class="sc-iGrrsa">heures</section>
        </section>
        <section class="sc-iqzUVk">: </section>
        <section class="sc-bmyXtO ctLYKs">
            <section class="sc-ipZHIp" id="minutes">${minutes.toString().padStart(2, '0')}</section>
            <section class="sc-iGrrsa">minutes</section>
        </section>
        <section class="sc-iqzUVk">: </section>
        <section class="sc-bmyXtO ctLYKs">
            <section class="sc-ipZHIp" id="seconds">${seconds.toString().padStart(2, '0')}</section>
            <section class="sc-iGrrsa">secondes</section>
        </section>
    `;
}

// Mise à jour du compte à rebours toutes les secondes
setInterval(updateCountdown, 1000);

// Initialiser le compte à rebours
updateCountdown();
