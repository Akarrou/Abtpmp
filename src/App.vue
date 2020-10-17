<template>
  <div id="app">
    <Navbar></Navbar>
    <Home id="Home"></Home>
    <Services id="services"></Services>
    <AboutUs id="AboutUS"></AboutUs>
    <Contact id="Contact"></Contact>
    <Footer></Footer>
    <Sociaux></Sociaux>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Sociaux from "@/components/Sociaux";

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    Services,
    AboutUs,
    Contact,
    Footer,
    Sociaux
  },


}
</script>

<style>
@font-face {
  font-family: "ARJULIAN";
  src: url('./assets/ARJULIAN.ttf');
}

@font-face {
  font-family: "Amiri";
  src: url('./assets/Amiri-Regular.ttf');
}

*, html, body {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

body {
  background: #f6f4f4;
}

h1, h2, h3 {
  font-family: "ARJULIAN", sans-serif;
}

p, li {
  font-family: "Amiri", sans-serif;
  font-size: 1.2em;
  color: black;
  line-height:1.5rem;
}

.container {
  width: 100vw;
  min-height: 40vh;
  margin: auto !important;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 70vw !important;
  transform-style: preserve-3d;
  margin: auto !important;
  padding: 2rem 0;
}

ul {
  margin-top: 0.5rem !important;
  margin-left: 2rem !important;
}

.titre-slogan {
  color: #F07426;
  margin: 1em !important;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 340px;
}

.text-slogan {
  display: flex;
  margin: 1em !important;
  padding: 1em !important;
  transform: translateY(25%);
  min-width: 680px;
}


.titre-page {
  color: #31aa79;
  margin: 1em 1em 0 0.4em !important;
  font-size: 48px;
  font-weight: bold;
}

.ligne-h {
  display: inline-block;
  width: 200px;
  margin: 1em !important;
  border-top: 5px solid #F5E677;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media screen and (max-width: 700px) {
  .text-slogan {
    min-width: 280px;
  }

  .titre-page {
    font-size: 38px;
  }

  .titre-slogan {
    min-width: 280px;
  }
}

/*Scroll animation*/
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

.dec1 {
  transition-delay: 0.5s;
}

.dec2 {
  transition-delay: 0.8s;
}

.dec3 {
  transition-delay: 1s;
}
</style>
