## Améliorations et Raccourcis

- J'ai utilisé Angular Material pour le design et je n'ai pas typé les objets complexes pour gagner du temps.
- La gestion des services est au niveau `root`, ce qui peut poser des problèmes si on souhaite notamment utilisé le `rate.service ailleurs dans une application plus complexe car l'interval est kill à la destruction du composant.
- Concernant l'historique des dernières demandes, j'avais une incertitude concernant l'intitulé 'dernières demandes de conversion calculées', s'il s'agit des 5 derniers changement fait par l'utilisateur via les input, ou bien si à partir du moment où le taux change, il s'agit d'une nouvelle demande, l'implémentation actuelle enregistre l'historique en même temps que le changement de taux.
- J'ai également forcé l'affichage sur 2 digits après la virgule (sauf dans l'input)
- Lorsque l'on utilise le switch sans valeur, il est automatiquement remplacé par un 0 dans l'input ce qui trigger le pipe et l'historique, il faut donc repenser cette partie.
- Concernant le tableau, j'ai rencontré des soucis de type avec le `dataSource` du `mat-table` en utilsant le pipe `async`, j'ai donc fait au mieux pour le test, mais cela demande un approffondissement.
- Configuration uniquement pour EUR/USD, il faut la généraliser à terme.
