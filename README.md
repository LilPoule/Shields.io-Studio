<div align="center">

# 🛡️ Shields.io Studio

### Générateur interactif de badges GitHub personnalisés en temps réel

[![Version](https://img.shields.io/badge/version-v1.0.0-6366f1?style=for-the-badge&logo=semanticrelease&logoColor=ffffff)](https://shields.io/)
[![Crafted Mode](https://img.shields.io/badge/craft-Semi_Vibe--Coded_%E2%9C%A8-8b5cf6?style=for-the-badge&labelColor=1e1b4b)](https://github.com)
[![Stack](https://img.shields.io/badge/stack-JS_%7C_HTML_%7C_CSS-10b981?style=for-the-badge&logo=javascript&logoColor=ffffff)](https://developer.mozilla.org/)

<p align="center">
  Un studio web léger, rapide et sans dépendances pour concevoir, prévisualiser et exporter vos badges et bannières <strong>Shields.io</strong> en <strong>Markdown</strong>, <strong>HTML</strong> et <strong>SVG</strong> sans jamais recharger la page ni mémoriser la syntaxe d'encodage d'URL.
</p>

---

![Aperçu de Shields.io Studio](./screenshot.png)

</div>

---

Ce projet a été **semi vibe-codé** par **LiL PouLaY** 

---

## 🚀 Fonctionnalités principales

### 1. Configuration Basique & Styles
- **Label & Message en direct** : encodage automatique des caractères spéciaux Shields.io (`-` → `--`, `_` → `__`, espaces, `#`, `?`, `%`, `/`).
- **5 styles officiels** accessibles en un clic : `flat`, `plastic`, `flat-square`, `for-the-badge` et `social`.
- **Sélecteur de couleur & Nuancier rapide** : synchronisation bidirectionnelle entre le color picker visuel, le champ hexadécimal (`#RRGGBB`) et une palette de presets (*Emerald, Blue, Indigo, Amber, Red, Pink, Violet*).
- **Liens cliquables prêts à l'emploi** : configurez l'URL de redirection avec des puces rapides (*GitHub Repo, Releases, CI Actions, NPM Package*).

### 2. Options Avancées & Logos Simple Icons
- **Couleur personnalisée du label** (`labelColor`) activable à la demande pour créer des contrastes sur mesure.
- **Intégration Simple Icons** : ajout instantané de n'importe quel slug d'icône (`github`, `react`, `typescript`, `docker`, `nodedotjs`, `rust`, etc.) avec personnalisation de la teinte du logo (`logoColor`).

### 3. Dimensions & Comportement du Lien
- **Taille adaptative du logo** : support de l'option `logoSize=auto`.
- **Lien SVG natif** (`?link=...`) et contrôle de l'ouverture dans un nouvel onglet HTML (`target="_blank" rel="noopener noreferrer"`).

### 4. Studio d'Aperçu & Exports Instantanés
- **Canvas interactif** : bascule **Fond sombre / Fond clair** (damier de transparence) et **Zoom x1.5** pour inspecter chaque pixel.
- **Presets intégrés** : chargez des configurations types (*Build Passing*, *Release v2.4*, *TypeScript*) ou réinitialisez en un clic.
- **Exports en 1 clic** :
  - 📋 **Copy Markdown** : génère le code `[![alt](badgeUrl)](targetUrl)` avec notification toast.
  - 💻 **Copier le HTML** : génère la balise `<a href="..."><img ... /></a>` accessible et dimensionnée.
  - 🔗 **Copier l'URL directe** : l'URL brute `https://img.shields.io/badge/...`.
  - ⬇️ **Download SVG** : récupère et télécharge directement le fichier vectoriel `.svg` nommé proprement.

---

## 🎨 Galerie d'exemples de Banners & Badges Shields.io

Voici des exemples de bannières et de badges que vous pouvez recréer directement dans **Shields.io Studio** pour habiller vos propres `README.md` :

### 🏆 Bannières « For-The-Badge » (Idéal en en-tête de README)

| Rendu visuel | Code Markdown à copier |
| :--- | :--- |
| ![Vibe Coded](https://img.shields.io/badge/Vibe_Check-100%25_Approved-8b5cf6?style=for-the-badge&logo=sparkles&logoColor=ffffff&labelColor=1e1b4b) | `![Vibe Coded](https://img.shields.io/badge/Vibe_Check-100%25_Approved-8b5cf6?style=for-the-badge&logo=sparkles&logoColor=ffffff&labelColor=1e1b4b)` |
| ![Release](https://img.shields.io/badge/release-v2.4.0-3b82f6?style=for-the-badge&logo=semanticrelease&logoColor=ffffff&labelColor=1e293b) | `![Release](https://img.shields.io/badge/release-v2.4.0-3b82f6?style=for-the-badge&logo=semanticrelease&logoColor=ffffff&labelColor=1e293b)` |
| ![Made with Love](https://img.shields.io/badge/Fait_avec-Passion_%26_Caf%C3%A9-ec4899?style=for-the-badge&logo=buymeacoffee&logoColor=ffffff&labelColor=0f172a) | `![Made with Love](https://img.shields.io/badge/Fait_avec-Passion_%26_Caf%C3%A9-ec4899?style=for-the-badge&logo=buymeacoffee&logoColor=ffffff&labelColor=0f172a)` |
| ![Production Ready](https://img.shields.io/badge/status-Production_Ready-10b981?style=for-the-badge&logo=checkmarx&logoColor=ffffff&labelColor=064e3b) | `![Production Ready](https://img.shields.io/badge/status-Production_Ready-10b981?style=for-the-badge&logo=checkmarx&logoColor=ffffff&labelColor=064e3b)` |

### 💻 Badges de Stack Technique (`flat-square` & `flat`)

```markdown
![TypeScript](https://img.shields.io/badge/TypeScript-5.6_Strict-3178c6?style=flat-square&logo=typescript&logoColor=ffffff&labelColor=0f172a)
![React](https://img.shields.io/badge/React-19_Ready-06b6d4?style=flat-square&logo=react&logoColor=ffffff&labelColor=0f172a)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ed?style=flat-square&logo=docker&logoColor=ffffff&labelColor=0f172a)
![Node.js](https://img.shields.io/badge/Node.js-LTS_22.x-10b981?style=flat-square&logo=nodedotjs&logoColor=ffffff&labelColor=0f172a)
![Rust](https://img.shields.io/badge/Rust-Blazingly_Fast-f59e0b?style=flat-square&logo=rust&logoColor=ffffff&labelColor=1c1917)
```

**Rendu :**

![TypeScript](https://img.shields.io/badge/TypeScript-5.6_Strict-3178c6?style=flat-square&logo=typescript&logoColor=ffffff&labelColor=0f172a)
![React](https://img.shields.io/badge/React-19_Ready-06b6d4?style=flat-square&logo=react&logoColor=ffffff&labelColor=0f172a)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ed?style=flat-square&logo=docker&logoColor=ffffff&labelColor=0f172a)
![Node.js](https://img.shields.io/badge/Node.js-LTS_22.x-10b981?style=flat-square&logo=nodedotjs&logoColor=ffffff&labelColor=0f172a)
![Rust](https://img.shields.io/badge/Rust-Blazingly_Fast-f59e0b?style=flat-square&logo=rust&logoColor=ffffff&labelColor=1c1917)

### 🔍 Comparatif des 5 styles supportés

| Style | Aperçu | Paramètre |
| :--- | :---: | :--- |
| **Flat** *(par défaut)* | ![Flat](https://img.shields.io/badge/build-passing-10b981?logo=github&logoColor=ffffff) | `style=flat` |
| **Flat-Square** | ![Flat Square](https://img.shields.io/badge/build-passing-10b981?style=flat-square&logo=github&logoColor=ffffff) | `style=flat-square` |
| **Plastic** | ![Plastic](https://img.shields.io/badge/build-passing-10b981?style=plastic&logo=github&logoColor=ffffff) | `style=plastic` |
| **For-The-Badge** | ![For The Badge](https://img.shields.io/badge/build-passing-10b981?style=for-the-badge&logo=github&logoColor=ffffff) | `style=for-the-badge` |
| **Social** | ![Social](https://img.shields.io/badge/Follow-LiL_PouLaY-6366f1?style=social&logo=github) | `style=social` |

---

## 🛠️ Utilisation

Shields.io Studio est directement disponible en ligne. Accédez au studio interactif via le lien suivant :  
🌐 **[https://shieldsiostudio.netlify.app](https://shieldsiostudio.netlify.app)**

---



<div align="center">

**Shields.io Studio** • Conçu par **LiL PouLaY**  
*Semi Vibe-Coded avec soin • Formats supportés : SVG • Markdown • HTML*

![Footer Badge](https://img.shields.io/badge/Shields.io_Studio-v1.0-6366f1?style=flat-square&logo=github&logoColor=ffffff)

</div>
