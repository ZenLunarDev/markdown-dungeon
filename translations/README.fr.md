[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source Helpers](https://www.codetriage.com/ZenLunarDev/markdown-dungeon/badges/users.svg)](https://www.codetriage.com/ZenLunarDev/markdown-dungeon)
[![CodeQL](https://github.com/ZenLunarDev/markdown-dungeon/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/ZenLunarDev/markdown-dungeon/actions/workflows/codeql-analysis.yml)
[![codespell](https://github.com/ZenLunarDev/markdown-dungeon/actions/workflows/codespell.yml/badge.svg)](https://github.com/ZenLunarDev/markdown-dungeon/actions/workflows/codespell.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/320e6533-33ab-402c-bfb9-ebac1881b260/deploy-status)](https://app.netlify.com/sites/markdown-dungeon/deploys)
[![Discord](https://img.shields.io/discord/863049619734790185?color=7389D8&logo=discord&logoColor=ffffff&label=&labelColor=6A7EC2)](https://discord.gg/ydWxdqbTyK)

<div align="center">
    <h1>⚔️ Donjon Markdown ⚔️</h1>
    <i>Un donjon est un lieu ou une prison où des personnes sont détenues. Habituellement, on les retrouvent sous terre</i>
</div>
<br>

Ceci est un exemple de dépôt d'illustration d'un donjon utilisant **Markdown** sur GitHub.
Dans le donjon, le lecteur choisit l'option à prendre et saute dans une page appropriée à la pièce en fonction de son choix.
Elle est collaborative car la pièce est écrite par de nombreux auteurs.

| [Commencer une nouvelle partie](../start-new-game.md) |
| --------------------------------------- |

## 📥 Installation

Vous devez installer [yarn](https://www.npmjs.com/package/yarn).

1. cloner le dépôt

```bash
git clone https://github.com/ZenLunarDev/markdown-dungeon.git
```

2. Allez dans le dossier

```bash
cd markdown-dungeon
```

3. Exécutez l'installation des dependances :

```bash
yarn
```

4. Créez un fichier `.env.development` dans le dossier racine du projet et copiez le format du fichier `.env.example`.
5. Pour lancer le serveur de développement, exécutez:

```bash
yarn start
```

> Assurez-vous que vous n'utilisez pas PowerShell

6. 🎉 Ouvrez votre navigateur et accédez à http://localhost:8000/ ou http://localhost:8000/___graphql

## 👷‍♂️ L'étage et le format de la pièce

Un **étage** est un dossier et chaque étage est une collection de **pièces** et chaque pièce est un fichier `Markdown` .
Les Markdowns de capacité lien sont utilisés pour monter/descendre et pour aller dans une autre pièce, comme dans l'exemple ci-dessous.

[Aller au donjon Github](https://github.com/)

```markdown
[Aller au donjon Github](https://github.com/)
```

## 👩‍💻 Guide de contribution

### 1. 📐 Apporter des modifications de taille adéquate

- Limitez les changements
- N'ajoutez pas d'option sans avoir ajouter une porte pour les lecteurs qui choisissent cette option,
  afin que le donjon ne soit pas plein de liens morts. Par contre, le dernier fichier de démarquage atteint par le lecteur sur n'importe quel chemin de la pièce ne devrait pas avoir d'option.

#### Voici quelques exemples de modifications appropriée :

- Ajoutez une ou deux phrases à une "page" (fichier) existante dans la pièce.
- Ajoutez une nouvelle option à un point de choix existant et liez cette option à une "pièce" ou à un "étage" existant.
- Ajoutez une nouvelle option à un point de choix existant, créez une nouvelle "page" pour cette option et ajoutez une phrase ou deux à la nouvelle "page".
- Ajoutez quelques options à une "page" actuellement sans issue et ajoutez une "page" ou un lien vers une "page" existante pour chaque option.

### 2. ⛩ Structure du donjon

La structure doit être `dungeon-name/floor-number/room-number`, veuillez consulter les définitions ci-dessous pour chaque variable :

- dungeon-name: est un dossier qui contient le numéro d'étage, les mots doivent être séparer par un tiret (-), et doivent être alphanumérique. Exemple: **normal-dungeon-1**.
- floor-number : est un dossier qui contient le numéro de la pièce, est numérique, ne pas ajouter de **0** avant le numéro.

```textile
1, 2, 3 // Conforme

01, 02, A3 // Non-Conforme
```

- room-number: est un fichier Markdown, le nom du fichier doit être en numérique, mais s'il y a des sous-pièces de la pièce, vous pouvez séparer le numéro de la pièce par un tiret (-), la sous-pièce peut être alphanumérique.

```textile
1, 2, 3-AF, 3-01 // Conforme

01A, 02*A3, A3+F // Non-Conforme
```

> Le nom de dossier ou de fichier n'accepte que tous les caractères ASCII et le tiret (-).

> Si vous avez créé un nouveau donjon, veuillez ajouter [Commencer une nouvelle partie](../start-new-game.md), ajoutez-le sur [images](../static/images) dossier, et dans [dungeon-info.json](../src/data/dungeon-info.json), afin que le lecteur puisse accéder à votre donjon et l'ouvrir sur le site

> Si vous voulez avoir une idée de quelle option mène à quoi lors de la contribution, recherchez le fichier `decision_tree.png`  sous n'importe quel dossier de donjon, qui contient une vue graphique de ce donjon.

### 3. 🔗 Utiliser des liens relatifs

Les liens de ce fichier doivent être [liens relatifs](https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/) pour continuer à travailler si le dépo est forké.

### 4. 📏 Longueurs de ligne

Gardez toutes les lignes de 120 caractères ou moins. Sinon, les fichiers bruts seront difficiles à lire dans le navigateur ou sur la ligne de commande, et les modifications seront plus difficiles à examiner.

### 5. 🪓 Lignes vides entre les options

Insérez des lignes vides entre les différentes options afin que les options soient visuellement séparées.

## 📝 Licence

[MIT](../LICENSE)
