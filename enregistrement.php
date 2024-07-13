<?php
// Démarrer la session pour les messages d'erreur
session_start();

// Configuration de la base de données
$host = 'localhost';
$dbname = 'utilisateurs_db';
$username = 'votre_nom_d_utilisateur';
$password = 'votre_mot_de_passe';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupérer les données du formulaire
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$mot_de_passe = password_hash($_POST['password'], PASSWORD_BCRYPT);

// Préparer la requête SQL
$sql = "INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe) VALUES (:nom, :prenom, :email, :mot_de_passe)";
$stmt = $pdo->prepare($sql);

// Lier les paramètres
$stmt->bindParam(':nom', $nom);
$stmt->bindParam(':prenom', $prenom);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':mot_de_passe', $mot_de_passe);

try {
    $stmt->execute();
    echo "Enregistrement réussi !";
} catch (PDOException $e) {
    if ($e->errorInfo[1] == 1062) {
        echo "Erreur : Cet email est déjà enregistré.";
    } else {
        echo "Erreur : " . $e->getMessage();
    }
}
?>
