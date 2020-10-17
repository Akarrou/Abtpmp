<template>
  <v-col>
    <v-row class="header">
      <div>
        <img src="../assets/jardin.webp" alt="">
      </div>
      <div class="slogan">
        <h1>Votre Espace Nature</h1>
      </div>
    </v-row>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci consequatur consequuntur
                  dignissimos enim facilis ipsa maiores perferendis soluta veniam? Eum neque odit velit voluptates.
                  Molestiae necessitatibus numquam reprehenderit soluta?
                </p>
              </div>

            </div>
          </v-col>
          <v-col v-scrollanimation class="dec2">
            <div>
              <h2>Aménagement</h2>
            </div>
            <div>
              <div class="activity-text">
                <span class="ligne-v"></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci consequatur consequuntur
                  dignissimos enim facilis ipsa maiores perferendis soluta veniam? Eum neque odit velit voluptates.
                  Molestiae necessitatibus numquam reprehenderit soluta?
                </p>
              </div>
            </div>
          </v-col>
          <v-col v-scrollanimation class="dec3">
            <div>
              <h2>Jardin</h2>
            </div>
            <div>
              <div class="activity-text">
                <span class="ligne-v"></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci consequatur consequuntur
                  dignissimos enim facilis ipsa maiores perferendis soluta veniam? Eum neque odit velit voluptates.
                  Molestiae necessitatibus numquam reprehenderit soluta?
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
    <v-row v-scrollanimation
           class="mt-16 mb-16 headband d-flex flex-wrap flex-column justify-center align-center ma-auto">
      <h2 class="article-title align-content-center ma-auto text--darken-1">Un texte à très accrocheur</h2>
      <v-btn class="btn-header ma-3 " S Rounded outlined x-large dark
             v-scroll-to="{ el: '#Contact', offset: -200 , easing: 'linear'}">CONTACTEZ-MOI
      </v-btn>
    </v-row>
  </v-col>

</template>

<script>
export default {
  name: "Home"
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
  background-image: url("../assets/paysage1.png");
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
  }
}

@media screen and (max-width: 400px) {
  .slogan {
    top: 200px;
    font-size: 1.5rem;
  }
}
</style>
