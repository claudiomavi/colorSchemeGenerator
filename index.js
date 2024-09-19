const $ = (el) => document.getElementById(el)

const container = $('container')
const form = $('form')
const modes = $('modes')
const colorInput = $('color-input')

let colorHex = 'F55A5A'
let mode = 'monochrome'

function getColorScheme(colorHex, mode) {
	fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${mode}`)
		.then((res) => res.json())
		.then((data) => {
			container.innerHTML = ''

			data.colors.map((color) => {
				container.innerHTML += `
          <div class="box-container">
            <div style="background-color:${color.hex.value}" class="color-container"></div>        
            <p>${color.hex.value}</p>
          </div>
        `
			})
		})
}

getColorScheme(colorHex, mode)

form.addEventListener('submit', function (e) {
	e.preventDefault()

	colorHex = colorInput.value.replace('#', '')
	mode = modes.value

	getColorScheme(colorHex, mode)
})
