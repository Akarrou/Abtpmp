<template>
  <v-col class="icon-bar">
    <v-btn icon href="https://www.facebook.com/ABTPmp/?notif_id=1603224221248463&notif_t=page_user_activity">
      <v-icon size="36px">{{ iconFa }}</v-icon>
    </v-btn>
    <v-btn icon href="https://www.instagram.com/abtpmp/?hl=fr">
      <v-icon size="36px">{{ iconIn }} </v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "Sociaux",
  data: () => ({
    iconFa: 'mdi-facebook',
    iconIn: 'mdi-instagram',
  })
}
</script>

<style scoped>

.icon-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #31aa79;
  border-radius: 5px 0 0 5px;
  padding: 1rem .5rem !important;
  box-shadow: 0 5px 10px #403f3f;
}

.v-btn {
  margin: .5rem !important;
}

.v-btn > .v-btn__content .v-icon {
  color: white;
}

@media screen and (max-width: 750px) {
  .icon-bar {
    display: none;
  }
}
</style>
