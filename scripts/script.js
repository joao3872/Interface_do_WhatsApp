let header = document.querySelector('header')

let containerTitulo = document.querySelector('.container_titulo')

let topicos = document.querySelectorAll('.topico')

let cam = document.querySelector('.cam')

let qtdMensagens = document.querySelector('.qtdMensagens')

let scroll = document.querySelector('.scroll')

let btnIcon = document.querySelector('#btnIcon')

let activeBtn = document.querySelector('.activeBtn')

let btnDigitar = document.querySelector('.btnDigitar')

let activeBtnDigitar = document.querySelector('.activeBtn2')

let rodape = document.querySelector('.rodape')

let angulo = document.querySelector('.angulo')



/* Todas as funções e escutadores de eventos abaixo, são ações baseadas no movimento da barra de rolagem.

    Algumas funções, são chamadas dentro de funções e escutador de evento, com a finalidade de executar ações específicas para cada parte do layout. */

function linksClick() {
    for (let i = 0; i < topicos.length; i++) {
        if (topicos[i] == topicos[0]) {
            topicos[i].addEventListener('click', () => {
                topicos[i].classList.add('active')
            
                topicos[1].classList.remove('active')
            
                topicos[2].classList.remove('active')
                
                qtdMensagens.classList.add('active2')
                
                fixedNotFixed()
            })
        } else if (topicos[i] == topicos[1]) {
            topicos[i].addEventListener('click', () => {
                topicos[i].classList.add('active')
            
                topicos[0].classList.remove('active')
            
                topicos[2].classList.remove('active')
                window.location.reload(false)
                fixedNotFixed()
                
                btnDigitar.style.bottom = '95px'
                activeBtnDigitar.style.bottom = '95px'
                exibirBtn()
                
                qtdMensagens.classList.remove('active2')
            })
        } else {
            topicos[i].addEventListener('click', () => {
                topicos[i].classList.add('active')
                topicos[0].classList.remove('active')
                topicos[1].classList.remove('active')
                
                fixedNotFixed()
                
                qtdMensagens.classList.remove('active2')
            })
        }
        
        
        topicos[i].addEventListener('click', () => {
            topicos[i].style.background = 'var(--white-transparent-more)'
            
            setTimeout(() => {
                topicos[i].style.background = 'none'
            }, 200)
        })
    }
    
    
    cam.addEventListener('click', () => {
        cam.style.background = 'var(--white-transparent-more)'
        
        setTimeout(() => {
            cam.style.background = 'none'
        }, 200)
    })
}

linksClick()


function fixedNotFixed() {
    scroll.style.position = 'fixed'

    setTimeout(() => {
        scroll.style.position = ''
    }, 50)
}



function iconChat() {
    btnIcon.setAttribute('src', 'images/icons/add_chat.png')
    btnIcon.style.height = '16px'
        
    activeBtn.style.padding = '22px 18px'
}


function iconCam() {
    btnIcon.setAttribute('src', 'images/icons/camera.png')
    btnIcon.style.height = '20px'
    activeBtn.style.padding = '18px'
}


function iconCall() {
    btnIcon.setAttribute('src', 'images/icons/callPlus.png')
    btnIcon.style.height = '30px'
    
    activeBtn.style.padding = '16px 14px'
}


function ocultarBtn() {
    btnDigitar.style.bottom = '60px'
    activeBtnDigitar.style.bottom = '60px'
        
    setTimeout(() => {
        btnDigitar.style.display = 'none'
        activeBtnDigitar.style.display = 'none'
    }, 200)
}


function exibirBtn() {
    btnDigitar.style.display = 'block'
    activeBtnDigitar.style.display = 'block'
}



var prevScrollpos = window.pageYOffset

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    
    if (prevScrollpos > currentScrollPos) {
        header.style.top = '0'
    } else {
        header.style.top = '-60px'
    }
    
    prevScrollpos = currentScrollPos
}



scroll.addEventListener('scroll', () => {
    scrolled()
})

function scrolled() {
    let scrollX = scroll.scrollLeft

    let width = scroll.scrollWidth - scroll.clientWidth

    const scrolled = ((scrollX / width) * 100).toFixed()

    if (scrolled <= 33) {
        topicos[0].classList.add('active')
        topicos[1].classList.remove('active')
        topicos[2].classList.remove('active')

        qtdMensagens.classList.add('active2')

        iconChat()

        btnDigitar.style.display = 'none'
        activeBtnDigitar.style.display = 'none'

        menuConversas()

        containerRevelarEOcultar.style.display = 'none'
        angulo.classList.remove('girarAngulo')
        
        rodape.style.marginBottom = '0'
    } else if (scrolled <= 66) {
        topicos[1].classList.add('active')
        topicos[0].classList.remove('active')
        topicos[2].classList.remove('active')

        qtdMensagens.classList.remove('active2')

        exibirBtn()
       
        btnDigitar.style.bottom = '95px'
        activeBtnDigitar.style.bottom = '95px'
        
        iconCam()
        
        menuStatus()
    } else {
        topicos[2].classList.add('active')
        topicos[0].classList.remove('active')
        topicos[1].classList.remove('active')

        qtdMensagens.classList.remove('active2')

        iconCall()
        
        ocultarBtn()
        
        menuChamadas()
        
        containerRevelarEOcultar.style.display = 'none'
        angulo.classList.remove('girarAngulo')
        
        rodape.style.marginBottom = '0'
    }
}
