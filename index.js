const container = document.getElementById('container')

const colorHex = '0047AB'
const mode = 'complement'

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
