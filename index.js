const $ = (el) => document.getElementById(el)

const container = $('container')
const form = $('form')
const modes = $('modes')
const colorInput = $('color-input')

let colorHex = 'F55A5A'
let mode = 'monochrome'

fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${mode}`)
	.then((res) => res.json())
	.then((data) => {
		data.colors.map((color) => {
			container.innerHTML += `
        <div class="box-container">
          <div style="background-color:${color.hex.value}" class="color-container"></div>        
          <p>${color.hex.value}</p>
        </div>
      `
		})
	})

form.addEventListener('submit', function (e) {
	e.preventDefault()
	console.log(modes.value)
	console.log(colorInput.value)
})
