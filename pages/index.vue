<script setup >
const route = useRoute()
</script>

<template>
  <v-app>
    <!-- Header / App Bar -->
    <v-app-bar app dense>
      <v-toolbar-title>Ancestra</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="#about">À propos</v-btn>
      <v-btn text href="#services">Nos prestations</v-btn>
      <v-btn text href="#contact">Contact</v-btn>
    </v-app-bar>

    <!-- Image principale -->
    <v-img
        height="33vh"
        src="`https://i0.wp.com/nigoun.fr/wp-content/uploads/2022/04/placeholder.png?ssl=1`"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-container class="fill-height align-end">
        <v-row>
          <v-col>
            <h1 class="display-3 text-center white--text">Bienvenue chez Ancestra</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!-- Grille de photos -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="4" v-for="n in 6" :key="n">
          <v-img :src="`https://i0.wp.com/nigoun.fr/wp-content/uploads/2022/04/placeholder.png?ssl=1`"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Formulaire de contact -->
    <v-container id="contact">
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Contactez-nous</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Nom complet"></v-text-field>
                <v-text-field label="Email"></v-text-field>
                <v-textarea label="Message"></v-textarea>
                <v-btn color="primary">Envoyer</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Section About -->
    <v-container id="about">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>À propos de nous</v-card-title>
            <v-card-text>
              <p>Nom de l'entreprise: Ancestra Events</p>
              <p>Téléphone: 123-456-7890</p>
              <p>Email: contact@ancestra.com</p>
              <p>Description de l'entreprise: Lorem ipsum dolor sit amet...</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer -->
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        &copy;2024 Ancestra Events
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // Votre logique de composant ici si nécessaire
};
</script>

<style>
/* Ajoutez votre CSS personnalisé ici */
</style>

