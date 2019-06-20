/* 
Activité : gestion des contacts
*/

{
    init: function(nom, prenom)
    {
        this.nom = nom;
        this.prenom = prenom;
    },
     
    decrire: function()
    {
        let contacts = "Nom: " this.nom + " Prénom: " + this.prenom;
        return contacts;               
    }
     
};
 
let carole = Object.create(contact);
    carole.init("Lévysse", "Carole");
 
let melodie = Object.create(contact);
    melodie.init("Nelsonne", "Mélodie");
 
//creation d'un tableau avec les contacts déjà enregistrés
 
Contacts = [];
Contacts.push(carole);
Contacts.push(melodie);
 
//Plusieurs options possibles
 
let option = ["1 : Liste des contacts", "2 : Ajouter un contact", "0 : Quitter"];
 
console.log("Bienvenue dans le gestionnaire des contacts!");
 
let choix = Number(prompt("Choisissez une option :"));
while (choix !== 0)
 {
switch(choix)
{
    case 1:
        for(let i=0; i<Contacts.length; i++)
        {
        console.log(Contacts[i].decrire()); //afficher les contacts
        }
        break;
         
    case 2:
        let nouveauContact = " ";
         
        let nouveauNom = (prompt ("Entrez le nom du nouveau contact"));
        let nouveauPrenom = (prompt ("Entrez le prénom du nouveau contact"));
        nouveauContact = Object.create(contact);
        let ajout: function(nom, prenom)
        {
            contact.init(nom, prenom);
            Contacts.push(nouveauContact);
        }
        nouveauContact.ajout(nouveauNom, nouveauPrenom);
            console.log("Le contact a bien été ajouté !");
        break;
         
    Contacts.forEach(function (contact)
    {
     console.log(Contacts[i].decrire());
    }
);
    case 0: console.log("Au revoir.");
            break;
         
     default:
        choix = Number(prompt("Choisissez une option 1, 2 ou 0"));
        break;
}
};