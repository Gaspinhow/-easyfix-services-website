# Configuration Calendly - EasyFix Services

## 🗓️ Configuration de Calendly

### 1. Créer un compte Calendly
1. Allez sur [calendly.com](https://calendly.com)
2. Créez un compte gratuit
3. Choisissez "EasyFix Services" comme nom d'entreprise

### 2. Configurer votre calendrier
1. Connectez votre Google Calendar ou Outlook
2. Définissez vos heures de travail :
   - Lundi - Vendredi : 8h - 17h
   - Samedi : 8h - 12h (urgences uniquement)

### 3. Créer un type d'événement
1. Cliquez sur "Create" → "Event Type"
2. Nom : "Consultation Plomberie"
3. Durée : 30 minutes
4. Description : "Consultation pour diagnostic et devis de travaux de plomberie"

### 4. Personnaliser l'événement
- **Questions personnalisées** :
  - Type de service (Installation/Entretien/Dépannage/Rénovation)
  - Adresse d'intervention
  - Description du problème
  - Numéro de téléphone

### 5. Récupérer l'URL Calendly
1. Dans votre événement, copiez l'URL
2. Elle ressemble à : `https://calendly.com/easyfix-services/consultation`

### 6. Mettre à jour le site web
1. Ouvrez `index.html`
2. Trouvez la ligne : `<div class="calendly-inline-widget" data-url="https://calendly.com/easyfix-services/consultation"`
3. Remplacez l'URL par votre vraie URL Calendly

## ⚙️ Paramètres recommandés

### Disponibilités
- **Créneaux matin** : 8h - 12h
- **Créneaux après-midi** : 13h - 17h
- **Créneaux soirée** : 18h - 20h (sur demande)

### Buffer de temps
- **Avant** : 15 minutes (préparation)
- **Après** : 15 minutes (nettoyage)

### Rappels automatiques
- **24h avant** : Email + SMS
- **2h avant** : SMS

## 📱 Intégration mobile

Le widget Calendly s'adapte automatiquement aux mobiles. Aucune configuration supplémentaire nécessaire.

## 🔧 Personnalisation avancée

### Couleurs Calendly
1. Allez dans Settings → Branding
2. Couleur principale : #0066FF
3. Couleur secondaire : #0052CC

### Messages automatiques
1. **Confirmation** : "Merci pour votre réservation. Nous vous contacterons pour confirmer les détails."
2. **Rappel** : "Rappel : Votre intervention est prévue demain à [heure]."

## 📊 Suivi des rendez-vous

### Notifications
- Email de confirmation automatique
- Intégration avec votre calendrier
- Notifications push sur mobile

### Analytics
- Nombre de vues de votre calendrier
- Taux de conversion
- Créneaux les plus populaires

## 🚀 Conseils d'utilisation

1. **Répondez rapidement** aux demandes de rendez-vous
2. **Confirmez** chaque rendez-vous par téléphone
3. **Préparez** votre matériel à l'avance
4. **Respectez** les horaires convenus
5. **Suivez** vos clients après intervention

## 📞 Support

- **Calendly Support** : [help.calendly.com](https://help.calendly.com)
- **Documentation** : [developer.calendly.com](https://developer.calendly.com)

---

**EasyFix Services** - Calendly configuré pour optimiser vos rendez-vous ! 