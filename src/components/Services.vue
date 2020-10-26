<template>
  <v-row class="container">
    <v-row class="content">
      <v-row v-scrollanimation>
        <v-col>
          <h2 class="titre-page">Nos Services</h2>
          <span class="ligne-h"></span>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="slogan-page">
        <v-col cols="4">
          <h3 class="titre-slogan">Des services adaptés à vos besoins</h3>
        </v-col>
        <v-col >
          <p v-scrollanimation class="text-slogan">Situé à Aucamville dans le Tarn et Garonne , nous réalisons tous vos
            travaux de terrassement, d’aménagement et d’entretien extérieur dans la région nord Toulousaine. De Montauban en passant par Montech, Verdun sur Garonne,
            Grisolles, Grenade, Seilh, jusqu’aux portes de Toulouse.</p>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="service">
        <v-col class="img-services">
          <img src="../assets/réseaux.webp" alt="Pelle mécanique qui réalise une tranchée, pour la pose de réseau"/>
        </v-col>
        <v-col class="text-services">
          <h3 class="titre-services">Terrassement & réseaux</h3>
          <div>
            <p>
              Pour tout vos travaux de gros œuvres, nous vous proposons:
            </p>
            <ul>
              <li>La mise à nivau des terrains</li>
              <li>Déplacement de terre, <strong>évacuation de gravats</strong></li>
              <li>Ouverture de tranché, pour la pose de réseaux (eau, électricité, téléphone, etc), pour des
                fondations de muret/clôture par exemple
              </li>
              <li>Ouverture de zone pour bassin d’agrément</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="service">
        <v-col class="text-services">
          <h3 class="titre-services">Aménagement extérieur</h3>
          <div>
            <p>
              Pour les travaux de finition, nous vous proposons:
            </p>
            <ul>
              <li>L'aménagement d'allée, de parking</li>
              <li><strong>La livraison de graviers</strong>, cailloux et autres matériaux</li>
              <li>La création de zone enherbée. La pose, le semis de gazon</li>
              <li>La plantation d'arbre, arbuste, et de haie.</li>
            </ul>
          </div>
        </v-col>
        <v-col class="img-services">
          <img src="../assets/terrassement.webp" alt="Mini pelle qui réalise le terrassement d'un jardin"/>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="service">
        <v-col class="img-services">
          <img src="../assets/entretiens.webp" alt="Jardin avec une pelouse tondue et arbustes bien entretenu"/>
        </v-col>
        <v-col class="text-services">
          <h3 class="titre-services">Entretiens de jardin</h3>
          <div>
            <p>
              Pour l'entretien de votre espace vert, nous intervenons pour:
            </p>
            <ul>
              <li>La tonte, le désherbage, la taille de haie, le débroussaillage</li>
              <li>Abattage d'arbre et arbuste</li>
              <li>Décompactage des sols (motoculture pour potager)</li>
              <li>Ramassage de feuilles, <strong>évacuation des déchets vert</strong></li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>
.service {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto !important;
}
.slogan-page{
  align-items: center;
  margin: auto !important;
}
.img-services {
  display: flex;
  justify-content: center;
  padding: 2em !important;
  height: 100%;
}

.img-services img {
  max-width: 600px;
  width: 100%;
  min-width: 300px;
  object-fit: fill;
  border-radius: 5px;
}

.text-services {
  display: flex;
  flex-direction: column;

  padding: 2em !important;
  min-width: 300px;
  height: 100%;
  min-height: 300px;
}

.titre-services {
  margin-bottom: 0.5em !important;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #F07426;
}

@media screen and (max-width: 1300px) {
  .service {
    flex-direction: column;
  }

  .img-services {
    order: 1;
  }

  .text-services {
    justify-content: center;
    margin: auto !important;
    order: 2;
  }
}

@media screen and (max-width: 500px) {
  .img-services img {
    min-width: 300px;

  }

  .text-services {
    min-width: 300px;
  }
}

@media screen and (max-width: 670px) {
  @media (orientation: landscape) {
    .text-slogan {
      min-width: 500px;
    }
  }
}
</style>
