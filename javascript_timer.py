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

    // Mettre à jour l'affichage du compte à rebours sur la page
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);

    // Vérifier si le compte à rebours est terminé
    if (difference < 0) {
        clearInterval(countdown); // Arrêter le compte à rebours
        document.getElementById('countdown').innerHTML = '<p>Le compte à rebours est terminé!</p>';
    }
}, 1000); // Répéter toutes les secondes (1000 ms)

// Fonction pour formater le temps en ajoutant un zéro devant les nombres < 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
