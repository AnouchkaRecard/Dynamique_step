<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <?php
    session_start();
    if (isset($_SESSION['error_message'])) {
        echo "<p style='color:red;'>" . $_SESSION['error_message'] . "</p>";
        unset($_SESSION['error_message']);
    }
    ?>

    <form action="connexion.php" method="post">
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" required><br><br>

        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" required><br><br>

        <input type="submit" value="Se connecter">
    </form>
</body>
</html>
