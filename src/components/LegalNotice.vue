<template>
  <div class="dialog-content">
    <a @click="dialog = true">Mentions Légales</a>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card class="dialog" elevation="14">
        <v-card-title>
          <h2 class="titre-page">Mentions Légales</h2>
        </v-card-title>
        <v-card-text>
          <ul>
            <li>Dirigeant: Monsieur Sebastien Belloc</li>
            <li>Adresse:</li>
            <li>N° de SIRET:</li>
            <li>Activité : Conseil et communication – Développement de site internet (7021Z)</li>
            <li>Téléphone: 06.73.33.54.46</li>
            <li>Adresse mail: sebastienbelloc@abtpmp.fr</li>
          </ul>
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-spacer></v-spacer>
          <v-btn class="btn" flat @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "LegalNotice",
  data: () => ({
    dialog: false,
  })
}
</script>

<style scoped>
.v-dialog__container {
  display: unset;
}

.dialog-content {
  display: flex;
  justify-content: center;
  align-content: center;
}

.dialog {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem !important;
}

.titre-page {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem !important;
}

.card-actions {
  display: flex;
  justify-content: right;
  width: 100%;
  margin: 1rem !important;
}

.btn {
  background: #F07426 !important;
  padding: 1rem !important;
  color: white !important;
}

li {
  list-style: none;
}

a {
  color: white;
  margin: auto 1rem !important;
  transition: color .5s, transform 1s;
}

a:hover {
  color: #F07426 !important;
  cursor: pointer;
}
</style>
