// j'ouvre le document ou j'appelle l'id de lastname. quand je mets
// la souris hors bloc de saisie je sollicite une action
document.getElementById('lastname').addEventListener('focusout', function(){
  // la fonction est : je crée un message dans une boite de dialogue
alert('Merci de votre participation')
}
)
