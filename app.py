from flask import Flask, render_template, request, redirect, url_for, session, flash
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'votre_cle_secrete'  # Changez ceci pour un vrai secret

# Simuler une base de données en mémoire
users_db = {}

@app.route('/')
def home():
    if 'user' in session:
        return f'Bienvenue {session["user"]}! <a href="/logout">Déconnexion</a>'
    return render_template('index.php')

@app.route('/inscription', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password != confirm_password:
            flash('Les mots de passe ne correspondent pas.')
            return redirect(url_for('register'))

        if email in users_db:
            flash('Cet email est déjà enregistré.')
            return redirect(url_for('register'))

        hashed_password = generate_password_hash(password, method='sha256')
        users_db[email] = hashed_password
        flash('Inscription réussie! Veuillez vous connecter.')
        return redirect(url_for('login'))

    return render_template('inscription.html')

@app.route('/connexion', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        if email not in users_db or not check_password_hash(users_db[email], password):
            flash('Email ou mot de passe incorrect.')
            return redirect(url_for('login'))

        session['user'] = email
        return redirect(url_for('home'))

    return render_template('connexion.html')

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
