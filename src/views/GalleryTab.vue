<template>
  <v-container>
    <v-row>
      <!-- 갤러리 데이터 url (사진 그대로 가져오기) -->
      <v-col cols="12" class="g_img" >
        <span>Gallery (Data URL)</span>
        <div class="my-3 g_img galleryImageArea">
          <img id="getPrintImage" class="galleryImgae"/>
        </div>
        <v-btn flat dense round @click="gallery()">
          <v-icon>mdi-note</v-icon>
        </v-btn>
      </v-col>
      <v-col row>
        <span>디바이스 갤러리(앨범) 접근 가능<br />
              이미지 선택 후 노출</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cordovaCameraFile from '../services/cordova-cameraFile';

  export default {
    name: 'GalleryTab',
    methods: {
      gallery() {
        cordovaCameraFile.toGallery();
      },
    },
    
    data: () => ({
    }),
  }
</script>
<style>
.g_img {
  border: 2px solid black;
  overflow: hidden;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.galleryImageArea {
  display: block;
  overflow: hidden;
  height: 400px;
  width: auto;
}
.galleryImgae {
  height: 400px;
  object-fit:cover;
}
</style>