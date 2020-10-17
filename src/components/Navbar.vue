<template>
  <div class="container-nav">
    <v-row class="logo">
      <img v-scrollanimation src="../assets/Logo.svg" alt="">
    </v-row>
    <nav>
      <v-row>
        <ul>
          <li><v-btn  class="btn-nav" v-scroll-to="{ el: '#Home', offset: -200 , easing: 'linear'}">ACCEUIL</v-btn></li>
          <li><v-btn class="btn-nav" v-scroll-to="{ el: '#services', offset: -200 , easing: 'linear'}">SERVICES</v-btn></li>
          <li><v-btn class="btn-nav" v-scroll-to="{ el: '#AboutUS', offset: 0 , easing: 'linear'}">A PROPOS</v-btn></li>
          <li><v-btn class="btn-nav" v-scroll-to="{ el: '#Contact', offset: -200 , easing: 'linear'}">CONTACT</v-btn></li>
        </ul>
      </v-row>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Navbar",

}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: auto !important;
}

li {
  margin: 0 1em !important;
  list-style-type: none;
  color: white !important;

}
.v-btn.v-size--default {
  font-size: 1rem;
}
.container-nav{
  position: fixed;
  z-index: 9999;
}
nav {
  background-color: #53AA77;
  width: 100vw;
  height: 60px !important;

}
.logo{
  background-color: white;
}
.logo img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 1em auto !important;
  padding: 1em !important;
  object-fit: cover;
  width: 320px;
}

.btn-nav{
  height: 60px !important;
  padding: 1rem !important;;
  border-radius: 0 !important;
  background-color: #53AA77 !important;
  color: white !important;
  box-shadow: none !important;
}
</style>
