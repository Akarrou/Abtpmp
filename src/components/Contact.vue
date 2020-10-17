<template>
  <v-row class="container">
    <v-row class="content">
      <v-row v-scrollanimation>
        <v-col>
          <h1 class="titre-page">Contactez-nous</h1>
          <span class="ligne-h"></span>
        </v-col>
      </v-row>
      <v-row v-scrollanimation class="page-slogan">
        <v-col cols="4">
          <h2 class="titre-slogan">Mon titre</h2>
        </v-col>
        <v-col>
          <p class="text-slogan">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aspernatur dicta
            eaque et fugiat
            fugit
            nam, officia officiis ratione reiciendis repudiandae sunt tempore vel voluptates. Beatae optio quod sit!</p>
        </v-col>
      </v-row>
      <v-row class="section" v-scrollanimation>
        <v-col class="img">
          <img src="../assets/arbre.svg" alt=""/>
        </v-col>
        <v-col class="info">
          <v-row class="info-contact">
            <img src="../assets/phone.png" alt=""/>
            <p>06 00 00 00 00</p>
          </v-row>
          <v-row class="info-contact">
            <img src="../assets/e-mail.png" alt=""/>
            <a href="mailto:nullepart@mozilla.org">monmail@gmail.com</a>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>
<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
}

.info-contact {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: auto !important;
}

.info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0 !important;
  min-width: 400px;
  width: 100%;
  overflow: hidden;
}

.info-contact p, a {
  min-width: 300px;
  font-size: 1.5rem;
  margin: auto 0 !important;
}

.info-contact img {
  height: 100%;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #F07426;
}

.img {
  min-width: 300px;
}

.img img {
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .info-contact p, a {
    min-width: 0;
  }
}

@media screen and (max-width: 400px) {
  .info{
    min-width: 300px;
  }
  .info-contact {
    flex-direction: column;
    align-items: center;
  }
  .info-contact p, a {
    text-align: center;
  }
}
</style>
