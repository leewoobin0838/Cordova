<template>
  <v-container>
    <v-row>
      <!-- input 폼 데이터 타입 -->
      <v-col cols="6" class="img">
        <span>Input (Form Type)</span>
        <v-img
          :src="image"
          class="my-3 img"
          contain
          height="200"
        />
        <form method="post" enctype="multipart/form-data">
          <input ref="image" @change="inputForm()" type="file" id="chooseForm" accept="image/*">
        </form>
      </v-col>
      <!-- input 기본 타입 -->
      <v-col cols="6" class="img" style="display:none">
        <span>Input (Nomal Type)</span>
        <v-img
          :src="image1"
          class="my-3 img"
          contain
          height="200"
        />
        <input ref="image1" @change="inputNomal()" type="file" id="chooseFile" accept="image/*" capture="camera" />
      </v-col>
      <!-- 카메라 -->
      <v-col cols="6" class="img" >
        <span>Camera</span>
        <div class="my-3 img imageArea">
          <img id="setPrintImage" class="image"/>
        </div>
        <v-btn flat dense round @click="camera()">
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </v-col>
      <!-- 갤러리 데이터 url (사진 그대로 가져오기) -->
      <v-col cols="6" class="img" >
        <span>Gallery (Data URL)</span>
        <div class="my-3 img imageArea">
          <img id="getPrintImage" class="image"/>
        </div>
        <v-btn flat dense round @click="gallery()">
          <v-icon>mdi-note</v-icon>
        </v-btn>
      </v-col>
      <!-- 갤러리 데이터 uri (사진 파일만 가져오기) -->
      <v-col cols="6" class="img" >
        <span>Gallery (File URI)</span>
        <div class="my-3 img imageArea">
          <img id="getPrintImageURI" class="image"/>
        </div>
        <v-btn flat dense round @click="galleryURI()">
          <v-icon>mdi-note</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import cordovaCamera from '../services/cordova-camera';
import cordovaCameraFile from '../services/cordova-cameraFile';

  export default {
    name: 'EtcTab',
    methods: {
      inputForm() {
        var image = this.$refs['image'].files[0]
        const url = URL.createObjectURL(image)
        this.image = url
      },
      inputNomal() {
        var image1 = this.$refs['image1'].files[0]
        const url = URL.createObjectURL(image1)
        this.image1 = url
      },
      camera() {
        cordovaCameraFile.toCamera();
      },
      gallery() {
        cordovaCameraFile.toGallery();
      },
      galleryURI() {
        cordovaCameraFile.toGalleryURI();
      },
    },
    
    data: () => ({
      image : '',
      image1 : '',
    }),
  }
</script>
<style>
.img {
  border: 2px solid black;
  overflow: hidden;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
.imageArea {
  display: block;
  overflow: hidden;
  height: 200px;
  width: auto;
}
.image {
  height: 500px;
  object-fit:cover;
}
</style>