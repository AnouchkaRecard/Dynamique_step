<?php
session_start();

// Configuration de la base de données
$host = 'localhost';
$dbname = 'utilisateurs_db'; // Nom de la base de données que vous avez créée
$username = 'votre_nom_d_utilisateur'; // Remplacez par votre nom d'utilisateur MySQL
$password = 'votre_mot_de_passe'; // Remplacez par votre mot de passe MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupérer les données du formulaire
$email = $_POST['email'];
$mot_de_passe = $_POST['password'];

// Préparer la requête SQL pour récupérer l'utilisateur par email
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = :email");
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($mot_de_passe, $user['mot_de_passe'])) {
    // L'utilisateur est authentifié avec succès
    header("Location: dashboard.php"); // Redirection vers une page sécurisée
    exit();
} else {
    // Stocker le message d'erreur dans la session et rediriger vers le formulaire
    $_SESSION['error_message'] = "L'email ou le mot de passe est incorrect. Veuillez remplir correctement les champs.";
    header("Location: index.php");
    exit();
}
?>
