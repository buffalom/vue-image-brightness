# vue-image-brightness

This Vue plugin is based on a [stackoverflow answer](https://stackoverflow.com/questions/13762864/image-dark-light-detection-client-sided-script/13763063#answer-13763063) and provides you with a function that takes an image source link and returns the average brightness of each pixel in the image.

## Installation
```
npm install --save vue-image-brightness
yarn add vue-image-brightness
```

```javascript
import Vue from 'vue'
import VueImageBrightness from 'vue-image-brightness'

Vue.use(VueImageBrightness)
```

## Usage
The function $imageBrightness(imageSrc) return a promise which resolves to the brightness of the requested image on a scale from 0 to 255.

```javascript
Vue.$imageBrightness('http://localhost:8080/img/logo.82b9c7a5.png')
  .then(console.log)
  .catch(console.error)
```

The function $imageBrightness() is also attached to the Vue prototype:

```javascript
...
mounted() {
  this.$imageBrightness('http://localhost:8080/img/logo.82b9c7a5.png')
    .then(console.log)
    .catch(console.error)
},
...
```
