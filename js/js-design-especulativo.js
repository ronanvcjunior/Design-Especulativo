
function larguraTela() {
    var larguraTelevisao = document.getElementById('tv').offsetWidth

    var alturaTelevisao = (larguraTelevisao * 0.695).toString()
    document.getElementById('tv').style.height = alturaTelevisao + 'px'
    document.getElementById('rotateLeft').style.height = alturaTelevisao + 'px'
    document.getElementById('rotateRight').style.height = alturaTelevisao + 'px'

    // Superior
    var m = 0
    for(var cont = 1; cont <= 6; cont++){
        var id = 'superior' + cont.toString()
        var  rotationX = (m).toString()


        var larguraSuperior = (larguraTelevisao * 0.833).toString()
        document.getElementById(id).style.width = larguraSuperior + 'px'

        var alturaSuperior = (larguraTelevisao * 0.0833).toString()
        document.getElementById(id).style.height = alturaSuperior + 'px'

        var zSuperior = (alturaSuperior * 0.5).toString()

        if (cont === 3) {
            document.getElementById(id).style.transform = 'rotateY(' + rotationX + 'deg) translateX(50%) translateZ(' + zSuperior + 'px)'
        } else if (cont === 5) {
            var larguraSuperior = (larguraTelevisao * 0.0833).toString()
            document.getElementById(id).style.width = larguraSuperior + 'px'

            var z = (larguraTelevisao * 0.0833 + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ(-'+ z +'px) translateZ(' + zSuperior + 'px)'
        } else if (cont === 6) {
            var larguraSuperior = (larguraTelevisao * 0.0833).toString()
            document.getElementById(id).style.width = larguraSuperior + 'px'

            var z = ((- larguraTelevisao * 0.0833) + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ('+ z +'px) translateZ(' + zSuperior + 'px)'
        } else {
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zSuperior + 'px)'
        }

        m = m + 90
    }

    // Monitor
    var m = 0
    for(var cont = 1; cont <= 6; cont++){
        var id = 'monitor' + cont.toString()
        var  rotationX = (m).toString()

        document.getElementById(id).style.top = (larguraTelevisao * 0.0832).toString() + 'px'

        var larguraMonitor = (larguraTelevisao * 0.694).toString()
        document.getElementById(id).style.width = larguraMonitor + 'px'

        var alturaMonitor = (larguraTelevisao * 0.392).toString()
        document.getElementById(id).style.height = alturaMonitor + 'px'

        var zMonitor = (alturaMonitor * 0.5).toString()

        if (cont === 3) {
            zMonitor = (alturaMonitor * 0.025).toString()
            document.getElementById(id).style.transform = 'rotateY(' + rotationX + 'deg) translateX(50%) translateZ(' + zMonitor + 'px)'

        } else if (cont === 2) {
            alturaMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.height = alturaMonitor + 'px'

            zMonitor = (alturaMonitor / 2).toString()
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zMonitor + 'px)'
        } else if (cont === 4) {
            alturaMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.height = alturaMonitor + 'px'

            zMonitor = (larguraTelevisao * 0.392 - alturaMonitor / 2).toString()
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zMonitor + 'px)'
        }else if (cont === 5) {
            var larguraMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.width = larguraMonitor + 'px'

            var z = (larguraTelevisao * 0.392 * 0.5 + larguraTelevisao *  0.694 / 2 + larguraMonitor * 0.5).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ(-'+ z +'px) translateZ(' + zMonitor + 'px)'
        }  else if (cont === 6) {
            var larguraMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.width = larguraMonitor + 'px'

            var z = ((- larguraTelevisao * 0.392) * 0.5 + larguraTelevisao *  0.694 / 2 - larguraMonitor * 0.5).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ('+ z +'px) translateZ(' + zMonitor + 'px)'
        } else if (cont === 1) {
            zMonitor = (alturaMonitor * 0.025).toString()
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zMonitor + 'px)'
        }

        m = m + 90
    }
        
    // Inferior
    var m = 0
    for(var cont = 1; cont <= 6; cont++){
        var id = 'inferior' + cont.toString()
        var  rotationX = (m).toString()


        var larguraInferior = (larguraTelevisao * 0.833).toString()
        document.getElementById(id).style.width = larguraInferior + 'px'

        var alturaInferior = (larguraTelevisao * 0.222).toString()
        document.getElementById(id).style.height = alturaInferior + 'px'

        var zInferior = (alturaInferior * 0.5).toString()

        if (cont === 3) {
            document.getElementById(id).style.transform = 'rotateY(' + rotationX + 'deg) translateX(50%) translateZ(' + zInferior + 'px)'
        } else if (cont === 5) {
            var larguraInferior = (larguraTelevisao * 0.222).toString()
            document.getElementById(id).style.width = larguraInferior + 'px'

            var z = (larguraTelevisao * 0.222 + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ(-'+ z +'px) translateZ(' + zInferior + 'px)'
        } else if (cont === 6) {
            var larguraInferior = (larguraTelevisao * 0.222).toString()
            document.getElementById(id).style.width = larguraInferior + 'px'

            var z = ((- larguraTelevisao * 0.222) + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ('+ z +'px) translateZ(' + zInferior + 'px)'
        } else if (cont === 4) {
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zInferior + 'px)'

            var sombraInferior = alturaInferior * 0.2
            document.getElementById(id).style.boxShadow = '0px 0px 50px ' + sombraInferior +'px rgba(0, 0, 0, 0.5)'
        } else {
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zInferior + 'px)'
        }

        m = m + 90
    }
    
    // Background
    for(let i = 1; i <= 13; i++) {
        if (i < 5) {
            var trianguloPosicao =  i % 4
        }else if (i == 7 || i > 12) {
            trianguloPosicao = 3
        } else {
            trianguloPosicao = 1
        }

        let widthBG = document.getElementById('background').offsetWidth
        let heightBG = document.getElementById('background').offsetHeight
        let idTriangulo = `triangulo${i}`
        let triangulo = document.getElementById(idTriangulo)
        
        if (trianguloPosicao === 1) {
            triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
            triangulo.style.borderRightWidth = `${widthBG * 0.5}px`
            triangulo.style.borderLeftWidth = `${widthBG * 0.5}px`

            if (idTriangulo === 'triangulo1') {
                triangulo.style.bottom = `0px`
                triangulo.style.left = `0px`
            }

            if (idTriangulo === 'triangulo5') {
                triangulo.style.borderBottomWidth = `${heightBG}px`
                triangulo.style.bottom = `0px`
                triangulo.style.left = `${widthBG * 0.5}px`

                triangulo.style.animation = 'moveR 20s alternate infinite'
            }

            if (idTriangulo === 'triangulo6') {
                triangulo.style.borderBottomWidth = `${heightBG}px`
                triangulo.style.bottom = `0px`
                triangulo.style.left = `0px`

                triangulo.style.animation = 'moveT 20s alternate infinite'
            }

            if (idTriangulo === 'triangulo8') {
                triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
                triangulo.style.borderRightWidth = `${widthBG * 0.25}px`
                triangulo.style.borderLeftWidth = `${widthBG * 0.25}px`
                triangulo.style.bottom = `${heightBG * 0.25}px`
                triangulo.style.left = `${widthBG * 0.125}px`

                triangulo.style.animation = 'moveB 20s alternate infinite'
            }

            if (idTriangulo === 'triangulo9') {
                triangulo.style.borderBottomWidth = `${heightBG}px`
                triangulo.style.bottom = `0px`
                triangulo.style.left = `${- widthBG * 0.5}px`

                triangulo.style.animation = 'moveT 10s alternate infinite'
            }

            if (idTriangulo === 'triangulo10') {
                triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
                triangulo.style.borderRightWidth = `${widthBG * 0.25}px`
                triangulo.style.borderLeftWidth = `${widthBG * 0.25}px`
                triangulo.style.bottom = `${heightBG * 0.75}px`
                triangulo.style.left = `${widthBG * 0.5}px`

                triangulo.style.animation = 'moveL 20s alternate infinite'
            }

            if (idTriangulo === 'triangulo11') {
                triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
                triangulo.style.borderRightWidth = `${widthBG * 0.25}px`
                triangulo.style.borderLeftWidth = `${widthBG * 0.25}px`
                triangulo.style.bottom = `${heightBG * 0.25}px`
                triangulo.style.left = `${widthBG * 0.375}px`

                triangulo.style.animation = 'moveR 10s alternate infinite'
            }

            if (idTriangulo === 'triangulo12') {
                triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
                triangulo.style.borderRightWidth = `${widthBG * 0.25}px`
                triangulo.style.borderLeftWidth = `${widthBG * 0.25}px`
                triangulo.style.bottom = `${heightBG * 0.75}px`
                triangulo.style.left = `${widthBG * 0}px`

                triangulo.style.animation = 'moveR 20s alternate infinite'
            }

        } else if (trianguloPosicao === 2) {
            triangulo.style.borderLeftWidth = `${widthBG * 0.5}px`
            triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
            triangulo.style.borderTopWidth = `${heightBG * 0.5}px`

            if (idTriangulo === 'triangulo2') {
                triangulo.style.left = `0px`
                triangulo.style.top = `0px`
            }

        } else if (trianguloPosicao === 3) {
            triangulo.style.borderTopWidth = `${heightBG * 0.5}px`
            triangulo.style.borderRightWidth = `${widthBG * 0.5}px`
            triangulo.style.borderLeftWidth = `${widthBG * 0.5}px`

            if (idTriangulo === 'triangulo3') {
                triangulo.style.top = `0px`
                triangulo.style.left = `0px`
            }

            if (idTriangulo === 'triangulo7') {
                triangulo.style.borderTopWidth = `${heightBG}px`
                triangulo.style.borderRightWidth = `${widthBG * 0.5}px`
                triangulo.style.borderLeftWidth = `${widthBG * 0.5}px`
                triangulo.style.top = `px`
                triangulo.style.left = `${widthBG * 0.25}px`

                triangulo.style.animation = 'moveL 10s alternate infinite'
            }

            if (idTriangulo === 'triangulo13') {
                triangulo.style.borderTopWidth = `${heightBG}px`
                triangulo.style.borderRightWidth = `${widthBG * 0.5}px`
                triangulo.style.borderLeftWidth = `${widthBG * 0.5}px`
                triangulo.style.top = `px`
                triangulo.style.left = `${- widthBG * 0.25}px`

                triangulo.style.animation = 'moveB 20s alternate infinite'
            }

        } else if (trianguloPosicao === 0) {
            triangulo.style.borderRightWidth = `${widthBG * 0.5}px`
            triangulo.style.borderBottomWidth = `${heightBG * 0.5}px`
            triangulo.style.borderTopWidth = `${heightBG * 0.5}px`

            if (idTriangulo === 'triangulo4') {
                triangulo.style.right = `0px`
                triangulo.style.top = `0px`
            }
        }
    }
}

larguraTela()

for (var i = 1; i <= 3; i = i + 2) {
    let canvas = document.getElementById(`monitor${i}`)

let ctx = canvas.getContext('2d')
let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight



let str = 'デジモンアグモングレイモンメタルグレイモンウォーグレイモン'
let matrix = str.split('')
let font = 12
let col = width / font
let arr = []

for(let i = 0; i < col; i++) {
    arr[i] = 1
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = '#0f0'
    ctx.font = `${font}px system-ui`

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() *matrix.length)]
        ctx.fillText(txt, i * font, arr[i] * font)

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0
        }
        arr[i]++
    }
}

setInterval(draw, 30)
}

var eixo = 0

function rotacionar(direcao) {
    var tv = document.getElementById('tv')

    if (direcao === 'esquerda') {
        eixo -= 30
        tv.style.transform = `perspective(1000px) rotatey(${eixo}deg)`
    } else if (direcao === 'direita') {
        eixo += 30
        tv.style.transform = `perspective(1000px) rotatey(${eixo}deg)`
    }
}