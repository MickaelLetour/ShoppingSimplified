//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express. 
import express from 'express';
import db from './db/db';

// Nous créons un objet de type Express.
const app = express();

// Nous définissons ici les paramètres du serveur.
/* const hostname = 'localhost'; */
const PORT = 3000;
/* 
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router();

myRouter.route('/')
// all permet de prendre en charge toutes les méthodes. 
.all(function(req,res){
    res.json({message : "Bienvenue sur notre Frugal API", methode : req.methode});
})
myRouter.route('/piscines')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
.get(function(req,res){
    res.json({
        message : "Liste tout les piscines de Lille métropole", methode : req.method
    });
})
.post(function(req,res){
    res.json({
        message : "Ajoute une nouvellle piscine à la liste", methode : req.method
    });
})
.put(function(req,res){
    res.json({
        message : "Mise a jour des informations d'une piscine de la liste", methode : req.method
    });
})
.delete(function(req,res){
    res.json({
        message : "Suppression d'une piscine de la liste", methode : req.method
    });
}) 

myRouter.route('/piscines')
.get(function(req,res){
    res.json({
        message : "Lise les piscines de Lille métropole avec paramètres :", 
        ville : req.query.ville,
        nbResult : req.query.maxResult,
        methode : req.method
    });
})
.put(function(req,res){
    res.json({
        message : "Modifier les piscines de Lille métropole avec paramètres :", 
        ville : req.query.ville,
        nbResult : req.query.maxResult,
        methode : req.method
    });
})
.delete(function(req,res){
    res.json({
        message : "Supprimer les piscines de Lille métropole avec paramètres :", 
        ville : req.query.ville,
        nbResult : req.query.maxResult,
        methode : req.method
    });
})
.post(function(req,res){
    res.json({
        message : "Ajoute une nouvellle piscine à la liste", 
        nom : req.body.nom,
        ville : req.body.ville,
        taille : req.body.taille,
        methode : req.method
    });
})

myRouter.route('/piscines/piscine_id')
.get(function(req,res){
    res.json({
        message : "Vous souhaitez accéder aux informations de la piscine numéro : ", methode : req.params.piscine_id
    });
})
.put(function(req,res){
    res.json({
        message : "Vous souhaitez modifier les informations de la piscine numéro :", methode : req.params.piscine_id
    });
})
.delete(function(req,res){
    res.json({
        message : "Vous souhaitez supprimer la piscine numéro : ", methode : req.params.piscine_id
    });
})
 */
app.get('/api/v1/todos', (req,res)=>{
    res.status(200).send({
        success : 'true',
        message: 'todos retrivied succesfully',
        todos: db
    })
});




/* // Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter); */

//Démarrer le serveur
app.listen(PORT, () => {
    console.log("server running on port ${PORT}")
});


