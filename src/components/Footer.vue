<template>
  <footer>
    <v-row class="footer-foncer">
      <p>COPYRIGHT 2020 - ABTPMP</p>
    </v-row>
  </footer>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
export default {
  name: "Footer",
  data: () => ({
    iconFa: 'mdi-facebook',
    iconIn: 'mdi-instagram',
  })
}
</script>

<style scoped>
footer {
  margin-top: 3rem !important;
}

.footer-foncer {
  display: flex;
  justify-content: center;
  background: #53AA77;
  width: 100vw;

  padding: 1em !important;
}
p{
  color: white !important;
}
</style>
