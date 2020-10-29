<template>
  <v-col>
    <v-row class="card" v-if="infos">
      <a target="_blank" href="https://www.gouvernement.fr/info-coronavirus">
        <v-icon size="30px" class="mdi mdi-alert-box"></v-icon>
      </a>

      <p>
        <strong>Covid-19</strong>
        : Abtpmp s'engage à respecter toutes les règles sanitaires imposées par le gouvernement francais.
        <a target="_blank" href="https://www.gouvernement.fr/info-coronavirus">Informations covid-19</a>
      </p>
      <a class="close" @click="infos = false">
        <v-icon size="30px" class="mdi mdi-close-circle-outline"></v-icon>
      </a>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "InfosCard",
  data: () => ({
    infos: true,
  })
}
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto !important;
  width: 100%;
  background-color: #00acc1;
  padding: 1rem 2rem !important;
  box-shadow: 0 5px 10px #403f3f;
}

p {
  margin: auto 0 !important;
  color: #ffffff;
}

a {
  color: white;
  transition: color .5s, transform 1s;
}
.card a:nth-child(1){
  text-decoration:none;
}
a:hover {
  color: #fd6e36;
}

.close {
  position: absolute;
  top: 0.5rem;
  right: 1rem;

}

.mdi {
  padding-right: 1rem !important;
  color: white !important;
  transition: color .5s, transform 1s;
}

.mdi:hover {
  color: #fd6e36 !important;;
  cursor: pointer;
}
</style>
