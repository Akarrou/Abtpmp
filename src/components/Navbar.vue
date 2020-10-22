<template>
  <div>
    <div class="container-nav">
      <v-row class="logo">
        <img src="../assets/Logo.svg" alt="">
      </v-row>
      <nav>
        <v-row>
          <v-btn id="burger" icon @click="drawer = true">
            <v-icon size="36px">{{ icon }}</v-icon>
          </v-btn>
          <v-row class="logo-nav">
            <img src="../assets/LogoBlanc.svg" alt="">
          </v-row>
          <ul class="nav-h">
            <li>
              <v-btn class="btn-nav" v-scroll-to="{ el: '#Home', offset: -200 , easing: 'linear'}">ACCEUIL</v-btn>
            </li>
            <li>
              <v-btn class="btn-nav" v-scroll-to="{ el: '#services', offset: -200 , easing: 'linear'}">NOS SERVICES</v-btn>
            </li>
            <li>
              <v-btn class="btn-nav" v-scroll-to="{ el: '#AboutUS', offset: -100 , easing: 'linear'}">A PROPOS</v-btn>
            </li>
            <li>
              <v-btn class="btn-nav" v-scroll-to="{ el: '#Contact', offset: -200 , easing: 'linear'}">CONTACT</v-btn>
            </li>
          </ul>
        </v-row>
        <v-row class="icon-bar">
          <v-btn icon href="https://www.facebook.com/ABTPmp/?notif_id=1603224221248463&notif_t=page_user_activity">
            <v-icon size="36px">{{ iconFa }}</v-icon>
          </v-btn>
          <v-btn icon href="https://www.instagram.com/abtpmp/?hl=fr">
            <v-icon size="36px">{{ iconIn }}</v-icon>
          </v-btn>
        </v-row>
      </nav>

    </div>
    <v-navigation-drawer scroll="no" id="drawer" v-model="drawer" absolute temporary>
      <v-card id="drawer-card" class="" tile>
        <v-list flat>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-btn class="btn-nav" @click="drawer = false"
                       v-scroll-to="{ el: '#Home', offset: -200 , easing: 'linear'}">ACCEUIL
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn class="btn-nav" @click="drawer = false"
                       v-scroll-to="{ el: '#services', offset: -200 , easing: 'linear'}">NOS SERVICES
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn class="btn-nav" @click="drawer = false"
                       v-scroll-to="{ el: '#AboutUS', offset: -100 , easing: 'linear'}">A PROPOS
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn class="btn-nav" @click="drawer = false"
                       v-scroll-to="{ el: '#Contact', offset: -200 , easing: 'linear'}">CONTACT
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  data: () => ({
    icon: 'mdi-menu',
    drawer: false,
    iconFa: 'mdi-facebook',
    iconIn: 'mdi-instagram',
  })
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto !important;
}

li {
  margin: 0 1em !important;
  list-style-type: none;
  color: white !important;
  font-family: "ARJULIAN", sans-serif;

}

.v-btn.v-size--default {
  font-size: 1rem;
}

.container-nav {
  position: fixed;
  z-index: 9999;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #53AA77;
  width: 100vw;
  height: 60px !important;
  box-shadow: 0 5px 10px #403f3f;
}

.logo-nav, .logo-nav img{
  height: 55px;
  padding: 3px !important;
  display: none;
}
#burger {
  display: none;
  height: 36px;
  width: 36px;
  color: white !important;
  margin: auto 1rem !important;
}

.logo {
  background-color: white;
}

.logo img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: auto !important;
  padding: 1em !important;
  object-fit: cover;
  width: 320px;
}

.btn-nav {
  height: 60px !important;
  padding: 1rem !important;;
  border-radius: 0 !important;
  background-color: #53AA77 !important;
  color: white !important;
  box-shadow: none !important;
}

#drawer {
  position: fixed;
  padding-top: 1rem !important;
  margin-top: 195px !important;
  background: #53AA77;
}

.v-list {
  margin: auto;
  text-align: center;
  background-color: #53AA77 !important;
  color: white !important;
  width: 100%;

}

.icon-bar {
  display: none;
}


.v-btn > .v-btn__content .v-icon {
  color: white;
}

@media screen and (max-width: 800px) {
  .nav-h {
    display: none;
  }

  #burger {
    display: initial;
  }

  .icon-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: auto 1rem !important;
  }

  .v-btn {
    margin: .5rem !important;
  }
}


  @media (orientation: landscape) {
    @media screen and (max-width: 800px) {
    .logo {
      display: none !important;
    }
    .logo-nav, .logo-nav img{
      display: initial;
    }
      #drawer {
        margin-top: 60px !important;

      }
  }

}
</style>
