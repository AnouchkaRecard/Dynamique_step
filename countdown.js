// Définir la date cible (6 octobre 2024 à minuit)
const targetDate = new Date('October 6, 2024 00:00:00').getTime();

// Mettre à jour le compte à rebours toutes les secondes
const countdown = setInterval(() => {
    // Obtenir la date et l'heure actuelles
    const now = new Date().getTime();

    // Calculer la différence entre la date cible et maintenant
    const difference = targetDate - now;

    // Calculer les jours, heures, minutes et secondes restants
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mettre à jour les éléments HTML avec les valeurs calculées
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL').textContent = formatNumber(days);
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .BEuta').textContent = days === 1 ? 'jour' : 'jours';
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL').textContent = formatNumber(hours);
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .BEuta').textContent = 'heures';
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL').textContent = formatNumber(minutes);
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .BEuta').textContent = 'minutes';
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL').textContent = formatNumber(seconds);
    document.querySelector('#countdown .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .kACnQx + .sc-ipZHIp.jCZFeL + .BEuta').textContent = 'secondes';

    // Vérifier si le compte à rebours est terminé
    if (difference < 0) {
        clearInterval(countdown); // Arrêter le compte à rebours
        console.log('Le compte à rebours est terminé!');
    }
}, 1000); // Répéter toutes les secondes (1000 ms)

// Fonction utilitaire pour formater les chiffres à deux chiffres
function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
