
<!DOCTYPE html>
<html lang="fr">
    <head>
		<link rel="stylesheet" href="style.css">
        <meta charset="utf-8">
		<meta name="viewport" content="width=500">
		<link rel="stylesheet" type="text/css" href="css/style.css">
        <title>One page</title>
	</head>
	<body>
			<nav>
				<ul id="liste1">
					<li class="liste-en-tete"><a href="#deroulement">DEROULEMENT</a></li>
					<li class="liste-en-tete"><a href="#animations">ANIMATIONS</a></li>
					<li class="liste-en-tete"><a href="#5raisons">5 RAISONS</a></li>
					<li class="liste-en-tete"><a href="#contactez">CONTACTEZ-NOUS</a></li>
			</ul>
			</nav>

		<h1>La 5ème semaine du jeu vidéo</h1>
		
		<img src= "img/illustration01.jpg" alt= "Garçon sur une chaise avec une manette simulant de jouer">
		
		<p>Venez vous amuser avec nous! Au programme : des jeux rétro, des jeux indés et de la compétition</p>

		<h2 id="deroulement">Déroulement</h2>
	
		<p id="evenement">L'événement aura lieux du 15 Juin au 19 Juin 2052 dans la salle commune du Bunker 03 de Périlly sur Passion. Vous trouverez si dessous les horaires et les tarifs. Une participation supplémentaire peut être demandée pour les participations aux gros tournois</p>

		<table>
			<thead>
				<tr>
					<th>Jour</th>
					<th>Horaires</th>
					<th>Prix</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Mercredi 15 Juin</td>
					<td>15h-22h</td>
					<td>5€</td>
				</tr>
				<tr>
					<td>Jeudi 16 Juin</td>
					<td>17h-22h</td>
					<td>3€</td>
				</tr>
				<tr>
					<td>Vendredi 17 Juin</td>
					<td>17h-00h</td>
					<td>5€</td>
				</tr>
				<tr>
					<td>Samedi 18 Juin</td>
					<td>10h-22h</td>
					<td>8€</td>
				</tr>
				<tr>
					<td>Dimanche 19 Juin</td>
					<td>10h-17h</td>
					<td>5€</td>
				</tr>
			</tbody>
		</table>	
		<h2 id= "animations">Les animations</h2>
	
		<div id="boiteg"><div class="boite"><ul>
			<li><h3>Retro Gaming</h3></li>
				<li>retrouvez des jeux vidéos d'antan en accès libre et illimité :</li>
		</ul>		
					<ul>
						<li class="saut"><div class="barre-rouge">la mythique nes de Nintendo, une des premières consoles grand publique à succès.</div></li>
						<li class="saut"><div class="barre-rouge">des bornes d'arcades des années 1980 à 1999</div></li>
						<li><div class="barre-rouge">la playstation 9, l'innovante airconsole à base de vide !</div></li>
					</ul></div>
		<div class="boite"><ul>			
			<li><h3>Des démonstrations de superplayers</h3></li>
				<li>Combattez nos superplayers, ou venez écouter leurs conseils lors de Masterclasses.</li>
		</ul>		
					<ul>
						<li class="saut"><div class="barre-rouge">Marcus, le plus vieux des superplayers : il pourra vous faire des démonstrations
						sur les meilleurs jeux des années 90</div></li>
						<li class="saut"><div class="barre-rouge">Kevin le roi de la stratégie sur Clash Of Soda Free, vous expliquera
						comment devenir immortel et gagner des y-bucks à l'infini, et sans payer !</div></li>
						<li class="saut"><div class="barre-rouge">Titouan Gaming Officiel vous vainquera tous à Call of Clan les yeux bandés
						et à Fifa 2051 en jouant avec les pieds.</div></li>
					</ul>
			<p id="retrouvez">Retrouvez les animations programmées à l'entrée de la salle.</p></div>
		
		<div class="boite"><ul>	
			<li><h3>Des tournois de jeux vidéo</h3></li>
				<li class="saut">Tous les jours des tournois gratuits et payants seront organisés</li>
				<li class="saut">Tous les jours, gratuits : des tournois de Tetris, Pokémon et Candy Crush<br>
				Inscription à 17h30</li>
				<li>Tous les jours un tournois de Smash Bros Melee, Droit d'entrée 5€ avec 150€ de Lots répartis entre les
				trois premiers joueurs</li>
				<li>Inscription à 17h45</li>
		</ul></div><div id="pb"><hr class="clear"></div></div>
			  
		<h2 id= "5raisons">5 bonnes raisons de venir</h2>
	
		<div id="list-raison"><ol>
			<li>Du fun et de l'amusement</li>
			<li>Une activité familiale</li>
			<li>Des Consoles Rares ou d'exeption</li>
			<li>Des invités de marque</li>
			<li>10% des gains reversés à une association de sauvegarde des activités vidéoludiques</li>
		</ol></div>	

		<h2 id= "contactez">Nous contacter</h2>
		
		<div id="form"><form action="données.php" method="post">
			<div>
				<label for= "case">nom :</label><br>
				<input type= "text" id="case" name="user-name" placeholder="nom">
			</div>
			<div>
				<label for= "champ">prénom :</label><br>
				<input type= "text" id="champ" name="nick-name" placeholder="prénom">
			</div>
			<div>
				<label for= "mail">email :</label><br>
				<input type="email" id="mail" name= "user-mail" placeholder="xxx@xxx.xx">
			</div>
			<div>
				<label for= "msg">message :</label><br>
				<textarea id="msg" name="user-msg" placeholder="Entrez votre message ici"></textarea><br><br>
			</div>
			<div> 
				<input type="submit" value="Envoyer" id="button">
			</div>
				</form></div>

		<footer>
			<p>Site réalisé par Letour Mickaël</p>
			<p><a id="lien-profile" href="https://fr.khanacademy.org/profile/kaid_803009790586842715479885/"></a>Profil Khan Academie</p>
		</footer>

	</body>
</html>	
