<template>
  <v-row class="container">
    <v-row class="content">
      <v-row v-scrollanimation>
        <v-col >
          <h1 class="titre-page">Nos Services</h1>
          <span class="ligne-h"></span>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="page-slogan">
        <v-col cols="4">
          <h2 class="titre-slogan">Ma descrition de nos services</h2>
        </v-col>
        <v-col>
          <p v-scrollanimation class="text-slogan">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aspernatur dicta
            eaque et fugiat
            fugit
            nam, officia officiis ratione reiciendis repudiandae sunt tempore vel voluptates. Beatae optio quod sit!</p>
        </v-col>
      </v-row>
      <v-row v-scrollanimation  class="page-slogan">
        <v-col class="img-services">
          <img src="../assets/service1.webp" alt=""/>
        </v-col>
        <v-col class="text-services">
          <h2 class="titre-services">Terrassement & réseaux</h2>
          <div>
            <p>
              Pour tout vos travaux de gros œuvres, nous vous proposons:
            </p>
            <ul>
              <li>La mise à nivaux des terrains</li>
              <li>Déplacement de terre, évacuation de gravats</li>
              <li>Ouverture de tranché, pour la pose de réseaux (eau, électricité, téléphone, etc), pour des
                fondations de muret/clôture par exemple
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="page-slogan">
        <v-col class="text-services">
          <h2 class="titre-services">Aménagement extérieur</h2>
          <div>
            <p>
              Pour les travaux de finition, nous vous proposons:
            </p>
            <ul>
              <li>L'aménagement d'allée, de parking</li>
              <li>La livraison de graviers, cailloux et autres matériaux</li>
              <li>La création de zone en herbé. La pose, le semis de gazon</li>
              <li>La plantation d'arbre, arbuste, et de haie.</li>
            </ul>
          </div>
        </v-col>
        <v-col class="img-services">
          <img src="../assets/service2.webp" alt=""/>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="page-slogan">
        <v-col class="img-services">
          <img src="../assets/service3.webp" alt=""/>
        </v-col>
        <v-col class="text-services">
          <h2 class="titre-services">Entretiens de jardin</h2>
          <div>
            <p>
              Pour l'entretiens de votre espace vert, nous intervenons pour:
            </p>
            <ul>
              <li>La tonte, le désherbage, la taille de haie, le débroussaillage</li>
              <li>Abatage d'arbre et arbuste</li>
              <li>Décompactage des sols (motoculture pour potager)</li>
              <li>Ramassage de feuilles, évacuation des déchets vert</li>
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

.img-services {
  margin: 2em !important;
  display: flex;
  height:  100%;
}

.img-services img {
  max-width: 600px;
  width: 100%;
  min-width: 400px;
  object-fit: fill;
  border-radius: 5px;
}

.text-services {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2em !important;
  min-width: 280px;
  height: 100%;
  min-height: 300px;
  transform: translateY(25%);

}

.titre-services {
  margin-bottom: 0.5em !important;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #F07426;
}
@media screen and (max-width: 500px) {
  .img-services img {
    min-width: 300px;
  }
}
</style>
