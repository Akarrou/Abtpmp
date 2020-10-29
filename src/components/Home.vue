<template>
  <v-col>
    <v-row class="header">
      <div>
        <img src="../assets/jardin.webp" alt="">
      </div>
      <div class="slogan">
        <h1>Entretiens de Votre Espace Nature</h1>
      </div>
    </v-row>
    <InfosCard></InfosCard>
    <v-row class="container">
      <v-row class="content">
        <v-row class="activity">
          <v-col v-scrollanimation class="dec1">
            <div>
              <h2>Terrassement & réseaux</h2>
            </div>
            <div>
              <div class="activity-text">
                <span class="ligne-v"></span>
                <p>
                  Nous créons les pentes nécessaire à l‘écoulement des eaux de pluie. Les tranchées dites de réseaux,
                  pour les gaines de câbles, les tuyaux, etc... Les fondations de petit muret, et de clôtures. Si vous
                  le souhaitez, nous créons aussi les bassins d’agréments. En forme libre ou en prêt à poser.
                </p>
              </div>
            </div>
          </v-col>
          <v-col v-scrollanimation class="dec2">
            <div>
              <h2>Aménagement extérieur</h2>
            </div>
            <div>
              <div class="activity-text">
                <span class="ligne-v"></span>
                <p>
                  Pour la création d’une allée, d’une entrée, d’une cour, d’un muret. La mise en place de clôture.
                </p>
              </div>
            </div>
          </v-col>
          <v-col v-scrollanimation class="dec3">
            <div>
              <h2>Entretiens de jardin</h2>
            </div>
            <div>
              <div class="activity-text">
                <span class="ligne-v"></span>
                <p>
                  Pour que votre jardin, devienne un espace supplémentaire de vie et de détente. Qu’il reste accueillant
                  tout au long de l’année, sans effort.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
    <v-row alt="Jardin emménager avec des arbustes verts" v-scrollanimation
           class="headband">
      <h2 class="article-title align-content-center ma-auto text--darken-1">Aménagez votre extérieur avec un professionnel</h2>
      <v-btn class="btn-header ma-3 " S Rounded outlined x-large dark
             v-scroll-to="{ el: '#Contact', offset: -200 , easing: 'linear'}">CONTACTEZ-NOUS
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import InfosCard from "@/components/InfosCard";
export default {
  name: "Home",
  components: {
    InfosCard
  },
}
</script>

<style scoped>
.btn-header {
  background-color: transparent;
  transition: background-color 0.3s ease-out;
  max-width: 250px;
  padding: 1em !important;
  margin: auto !important;
  border-radius: 50px;
}

.btn-header:hover {
  background-color: #f6e381 !important;
  color: #000000 !important;
  border: none !important;
}

.header {
  padding-top: 190px !important;
}

.header img {
  object-fit: cover;
  width: 100vw;
  height: 35vh;
  margin-bottom: 2em !important;;
}

.slogan {
  position: absolute;
  top: 250px;
  margin: 3em !important;;
  font-size: 32px;
  color: #fd6e36;
  text-shadow: 1px 1px 3px #000000;
}

h2 {
  margin: 0.5em !important;
}

.activity {
  display: flex;
  justify-content: space-between;
  margin: 1em !important;
  min-width: 320px;
}

.activity-text {
  display: flex;
  justify-content: center;
  padding: 1em !important;
  min-width: 320px;
}

.ligne-v {
  display: inline-block;
  width: 64px;
  height: 80px;
  margin: auto 10px !important;
  border-left: 5px solid #F5E677;
}

.headband {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1em !important;
  margin: 2em 0 !important;
  color: white;
  height: 250px;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  background-image: url("../assets/paysage1.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 1170px) {
  .headband {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 800px) {
  .headband {
    font-size: 1.3em;
  }

  .slogan {
    top: 150px;
    text-align: center;
    font-size: 1.5em;
  }
}

@media screen and (max-width: 450px) {
  .slogan {
    top: 5px;
    text-align: center;
    font-size: 1em;
  }
}

@media screen and (max-width: 1250px) {
  .slogan {
    top: 150px;

  }
}

@media (orientation: landscape) {
  @media screen and (max-width: 800px) {
    .header {
      padding-top: 60px !important;
    }

    .slogan {
      top: 20px;
      text-align: center;
      font-size: 1.3em;
    }
  }
}
</style>
