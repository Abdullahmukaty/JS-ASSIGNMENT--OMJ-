let text = document.getElementById('text')
console.log("text-->", text)
let btn = document.getElementsByClassName('action-btn')
console.log("btns-->", btn)
let fontChange = document.getElementById('Font-Family')
console.log("Font==>", fontChange)


fontChange.addEventListener('change', function () {
    console.log("Font==>", this.value)
    if (this.value === 'Monospace') {
        text.style.fontFamily = 'monospace'
    }
    if (this.value === 'Serif') {
        text.style.fontFamily = 'serif'
    }
    if (this.value === 'San-Serif') {
        text.style.fontFamily = 'sans-serif'
    }
})

let fontStyle = document.getElementById('Font-Size')
fontStyle.addEventListener('change', function () {
    console.log("Font-Size==>", this.value)
    if (this.value === 'Normal') {
        text.style.fontSize = '16px'
    }
    if (this.value === 'Heading') {
        text.style.fontSize = '40px'
    }
    if (this.value === 'Sub-Heading') {
        text.style.fontSize = '25px'
    }
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        console.log(this.innerText)

        switch (this.innerText) {
            case 'Bold':
                if (text.style.fontWeight == 'bold') {
                    text.style.fontWeight = 'normal'
                    this.style.textDecorationLine = 'none'
                } else {
                    text.style.fontWeight = 'bold'
                    this.style.textDecorationLine = 'underline'

                }
                break;
            case 'Italic':
                if (text.style.fontStyle == 'italic') {
                    text.style.fontStyle = 'normal'
                    this.style.textDecorationLine = 'none'
                } else {
                    text.style.fontStyle = 'italic'
                    this.style.textDecorationLine = 'underline'
                }
                break;
            case 'Underline':
                if (text.style.textDecorationLine == 'underline') {
                    text.style.textDecorationLine = 'none'
                    this.style.textDecorationLine = 'none'
                } else {
                    text.style.textDecorationLine = 'underline'
                    this.style.textDecorationLine = 'underline'

                }
                break;
            case 'Right':
                    text.style.textAlign = 'Right'
                break;
            case 'Left':
                    text.style.textAlign = 'left'
                break;
            case 'Center':
                    text.style.textAlign = 'Center'
                break;
            case 'Justify':
                    text.style.textAlign = 'Justify'
                break;

            default:
                break;
        }
    })
}

