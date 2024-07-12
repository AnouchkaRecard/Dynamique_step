<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <h2>Connexion</h2>
    <form name="formulaire_connexion" action="{{ url_for('login') }}" method="post">
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" required><br>
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" required><br>
        <input type="submit" value="Se connecter">
    </form>
    <p>Pas encore inscrit? <a href="{{ url_for('register') }}">Inscription</a></p>
    {% with messages = get_flashed_messages() %}
        {% if messages %}
            <ul>
            {% for message in messages %}
                <li>{{ message }}</li>
            {% endfor %}
            </ul>
        {% endif %}
    {% endwith %}
</body>
</html>
