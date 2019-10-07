const plugin = {}

// Source: https://stackoverflow.com/questions/13762864/image-dark-light-detection-client-sided-script/13763063 (25.06.2019)
function imageBrightness(imageSrc) {
  return new Promise((resolve, reject) => {
    try {
      const img = document.createElement('img')
      img.crossOrigin = 'Anonymous'
      img.src = imageSrc
      img.style.display = 'none'

      document.body.appendChild(img)

      img.onload = function () {
        const canvas = document.createElement('canvas')
        canvas.width = this.width
        canvas.height = this.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        let colorSum = 0
        let r
        let g
        let b
        let avg

        for (let x = 0, len = data.length; x < len; x += 4) {
          r = data[x]
          g = data[x + 1]
          b = data[x + 2]

          avg = Math.floor((r + g + b) / 3)
          colorSum += avg
        }

        const brightness = Math.floor(colorSum / (this.width * this.height))

        img.remove()
        canvas.remove()

        resolve(brightness)
      }
    } catch (err) {
      reject(err)
    }
  })
}

plugin.install = (Vue, options) => {
  Vue.$imageBrightness = imageBrightness
  Vue.prototype.$imageBrightness = imageBrightness
}

export default plugin
