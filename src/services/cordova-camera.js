let camera;
let pictureSource;
let destinationType;
let mediaType;
let encodingType;

document.addEventListener("deviceready", onDeviceReady, false);
// 디바이스가 준비되면 실행하도록
function onDeviceReady() {
    camera = navigator.camera;
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    mediaType = navigator.camera.MediaType;
    encodingType = navigator.camera.EncodingType;
}
// 카메라 성공 정보 (이미지데이터)
function onPhotoDataSuccess(imageData) {
    let printImage = document.getElementById('setPrintImage');
    printImage.src = 'data:image/jpeg;base64,' + imageData;
}
// 갤러리URI 성공 정보 (이미지데이터)
function onPhotoURISuccess(imageURI) {
    let printImage = document.getElementById('getPrintImageURI');
    printImage.src = imageURI;
}
// 갤러리URL 성공 정보 (이미지데이터)
function onPhotoURLSuccess(imageURL) {
    let printImage = document.getElementById('getPrintImage');
    printImage.src = 'data:image/jpeg;base64,' + imageURL;
}
// 실패 정보 (메세지)
function onFail(message) {
    alert('error : ' + message);
}
// 카메라
function toCamera() {
    // 사진 가져오기(성공, 실패, 옵션)
    camera.getPicture(onPhotoDataSuccess, onFail, {
        destinationType: destinationType.DATA_URL,
        encodingType: encodingType.JPEG,
        mediaType: mediaType.PICTURE,
        saveToPhotoAlbum: true,
        correctOrientation: true,
    });
}
// 갤러리 DATA_URL
function toGallery() {
    // 사진 가져오기(성공, 실패, 옵션)
    camera.getPicture(onPhotoURLSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        sourceType: pictureSource.PHOTOLIBRARY,
        mediaType: mediaType.PICTURE,
        saveToPhotoAlbum: false,
        // sourceType : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
    });
}
// 갤러리 FILE_URI
function toGalleryURI() {
    // 사진 가져오기(성공, 실패, 옵션)
    camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.PHOTOLIBRARY,
        mediaType: mediaType.PICTURE,
        saveToPhotoAlbum: false,
        // sourceType : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
    });
}
// 뷰에서 사용하기 위한 함수 방출
export default {
    toCamera,
    toGallery,
    toGalleryURI
  }