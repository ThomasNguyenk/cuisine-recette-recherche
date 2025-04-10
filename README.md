# Cuisine Recette Recherche

## Description
Application web de recherche de recettes de cuisine utilisant l'API Spoonacular. Permet de trouver des recettes selon divers critères comme les ingrédients, régimes alimentaires ou restrictions.

## Fonctionnalités principales
- Recherche de recettes par ingrédients
- Filtres pour régimes (végétarien, vegan, etc.)
- Filtres pour restrictions (sans gluten, etc.)
- Détails complets des recettes
- Gestion des favoris

## Technologies
- Frontend : React.js
- API : Spoonacular
- Gestion d'état : Context API
- Styling : Sass
- Build : Vite

## Installation

### Prérequis
- Node.js v16+
- npm ou yarn
- Clé API Spoonacular

### Commandes d'installation
1. Cloner le dépôt :
git clone https://github.com/ThomasNguyenk/cuisine-recette-recherche.git
cd cuisine-recette-recherche

2. Installer les dépendances :
npm install
ou
yarn install

3. Configurer l'API :
Créez un fichier .env contenant :
VITE_SPOONACULAR_API_KEY=votre_clé_api

4. Lancer l'application :
npm run dev
ou
yarn dev

L'application sera disponible sur http://localhost:5173

## Structure des fichiers
cuisine-recette-recherche/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── vite.config.js

## Scripts disponibles
- dev : Mode développement
- build : Build production
- preview : Prévisualisation build
- lint : Vérification code
- format : Formatage code

## Comment contribuer
1. Forker le projet
2. Créer une branche (git checkout -b ma-fonctionnalite)
3. Commiter les changements
4. Pusher vers la branche
5. Ouvrir une Pull Request

## Licence
Projet sous licence MIT - voir le fichier LICENSE

## Auteur
Thomas Nguyen - GitHub: ThomasNguyenk

## Remerciements
- Spoonacular pour leur API
- La communauté React
