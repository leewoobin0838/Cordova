<template>
  <v-container>
    <v-row>
      <!-- 카메라 -->
      <v-col cols="12" class="c_img">
        <span>Camera</span>
        <div class="my-3 c_img cameraImageArea">
          <img id="setPrintImage" class="cameraImage"/>
        </div>
        <v-btn flat dense round @click="camera()">
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </v-col>
      <v-col row>
        <span>디바이스 카메라 접근 가능<br />
              카메라 촬영 가능<br />
              카메라 촬영 후 자동 저장<br />
              자동 저장 후 이미지 노출</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cordovaCameraFile from '../services/cordova-cameraFile';

  export default {
    name: 'CameraTab',
    methods: {
      camera() {
        cordovaCameraFile.toCamera();
      },
    },
    
    data: () => ({
    }),
  }
</script>
<style>
.c_img {
  border: 2px solid black;
  overflow: hidden;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.cameraImageArea {
  display: block;
  overflow: hidden;
  height: 400px;
  width: auto;
}
.cameraImage {
  height: 400px;
  object-fit:cover;
}
</style>