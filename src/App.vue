<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <span class="mr-2">카메라 테스트1</span>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation
      :value="value"
      color="primary"
      grow
    >
      <v-btn value="camera" @click="cameraURL()">
        <span>카메라</span>
        <v-icon>mdi-camera</v-icon>
      </v-btn>

      <v-btn value="gallery" @click="galleryURL()">
        <span>앨범</span>
        <v-icon>mdi-note</v-icon>
      </v-btn>

      <v-btn value="etc" @click="etcURL()">
        <span>기타</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import cordovaCameraFile from './services/cordova-cameraFile';

export default {
  name: 'App',

  components: {
    
  },


  data: () => ({
    value: "camera"
  }),
  methods: {
      camera() {
        cordovaCameraFile.toCamera();
      },
      gallery() {
        cordovaCameraFile.toGallery();
      },
      cameraURL() {
        this.$router.push("/").catch(()=>{});
      },
      galleryURL() {
        this.$router.push("/gallery").catch(()=>{});
      },
      etcURL() {
        this.$router.push("/etc").catch(()=>{});
      }
  }
};
</script>
<style>
.cameraButtonDiv {
  position : relative;
}
.cameraButton {
  position : absolute;
  bottom : 0;
  right : 0;
}
</style>