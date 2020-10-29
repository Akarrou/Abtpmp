<template>
  <v-row class="container">
    <v-row class="content">
      <v-row v-scrollanimation>
        <v-col>
          <h2 class="titre-page">A Propos</h2>
          <span class="ligne-h"></span>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="card">
        <v-col class="card-img">
          <img src="../assets/paysage1.png" alt="Jardin aménagé avec des arbustes"/>
        </v-col>
        <v-col class="text-card">
          <h3 class="title-card">ABTP mp, une société à votre service.</h3>
          <p>Dès sa création en 2006, notre société à été orienté vers le secteur du TP, dans la région Toulousaine.
            Nous avons fait nos preuves dans les grand chantiers, tel que l'élargissement de l’aéroport pour l'arrivée de
            l'A380, notre participation à la réfection de la place du Busca (centre ville Toulousain), ou plus
            récemment, le grand chantier du nouveau Parc des Expositions (MEETT). </p>
          <p>Aujourd'hui, après plusieurs années passées dans l'agitation des villes, nous aspirons à un peu plus de
            nature, et
            revenir à nos racines. </p>
          <p>Notre métier ? L’aménagement extérieur: pour un mieux vivre.
            Fort de nos expériences, nous vous proposons nos services en matières d’aménagement et d'entretiens d'espace
            vert. Pour que votre espace nature soit celui que vous attendez.</p>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
.container {
  min-height: 100vh !important;
}

.card-img img {
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem !important;
  margin-top: 3rem !important;
  background-color: #ffffff;
  box-shadow: 0 .2em 1.2em;
  border-radius: 5px;
}

.title-card {
  color: #F07426;
}

.text-card {
  padding: 5rem !important;
}

p {
  margin-top: 1rem !important;
}

@media screen and (max-width: 1300px) {
  .card {
    flex-direction: column;
  }

  .card-img img {
    border-radius: 5px 5px 0 0;
  }
}

@media screen and (max-width: 700px) {
  .card {
    box-shadow: none;
    width: 100%;
  }

  .text-card {
    padding: 2rem !important;
  }
}
</style>
