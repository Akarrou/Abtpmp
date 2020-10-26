<template>
  <v-row class="container">
    <v-row class="content">
      <v-row v-scrollanimation>
        <v-col>
          <h2 class="titre-page">Contactez-nous</h2>
          <span class="ligne-h"></span>
        </v-col>
      </v-row>
      <v-row v-scrollanimation>
        <v-col>
          <p class="text-slogan">Nous sommes à votre écoute pour définir ensemble, votre projet d’aménagement
            de jardin et d’espace extérieur. DEVIS GRATUIT</p>
        </v-col>
      </v-row>
      <v-row class="section" v-scrollanimation>
        <v-col class="img">
          <l-map style="height: 350px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng" :icon="icon">
            </l-marker>
            <l-circle
                :lat-lng="circle.center"
                :radius="circle.radius"
                :color="circle.color"
            />
          </l-map>
        </v-col>
        <v-col class="info">
          <v-row class="info-contact">
            <img src="../assets/phone.png" alt=""/>
            <p>06.73.33.54.46</p>
          </v-row>
          <v-row class="info-contact">
            <img src="../assets/e-mail.png" alt=""/>
            <a href="mailto:sebastienbelloc@abtpmp.fr">sebastienbelloc@abtpmp.fr</a>
          </v-row>
          <v-row class="info-contact">
            <p>Mardi – Mercredi – Jeudi – Vendredi - Samedi</p>
          </v-row>
          <v-row class="info-contact">
            <ul>
              <li>De 8h30 à 12h00</li>
              <li>De 14h00 à 18h30</li>
            </ul>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>
<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {LCircle, LMap, LMarker, LTileLayer} from 'vue2-leaflet';

export default {
  name: "Contact",
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LMarker,
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 9,
    center: [43.808729, 1.186782],
    markerLatLng: [43.808729, 1.186782],
    circle: {
      center: [43.808729, 1.286782],
      radius: 22000,
      color: 'red'
    },
    icon: L.icon({
      iconUrl: require('../assets/Lmap.webp'),
      iconSize: [22, 32],
      iconAnchor: [16, 37]
    }),

  }),
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  }
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
  align-items: center;
  justify-content: center;
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
  margin: 1.5rem auto !important;
  padding: 0 1rem !important;
}

ul {
  margin-bottom: 1.5rem !important;
}

ul, li {
  text-align: left;
  font-size: 1.5rem;
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

@media screen and (max-width: 1090px) {
  .info-contact p, a {
    min-width: 0;
  }

  .img {
    order: 2;
  }
}

@media (orientation: landscape) {
  @media screen and (max-width: 800px) {
    .img {
      order: 2;
    }
  }
}

@media screen and (max-width: 400px) {
  .info {
    min-width: 300px;
  }

  .info-contact {
    flex-direction: column;
    align-items: center;
  }

  .info-contact p, a {
    text-align: center;
  }

  .img {
    order: 2;
  }
}
</style>
