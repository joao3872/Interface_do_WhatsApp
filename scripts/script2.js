let modalAbertura = document.querySelector('.modalDeAbertura')

let revelarEOcultar = document.querySelector('.revelarEOcultar')

let containerRevelarEOcultar = document.querySelector('.containerRevelarEOcultar')

let ellipsis = document.querySelector('#ellipsis')

let containerMenu = document.querySelector('.containerMenu')

let fundo = document.querySelector('.fundo')

let containerCallLink = document.querySelector('#containerCallLink')

let modalLinkCall = document.querySelector('.modalLinkCall')

let iconVoltar = document.querySelector('.voltar')

let calls = document.querySelector('#calls')

let whatsapp = document.querySelector('.whatsapp')

let meta = document.querySelector('.meta')

let iconArquivadas = document.querySelector('.iconArquivadas')

let iconPen = document.querySelector('.iconPen')

let imgGroup = document.querySelector('#group')

let iconForwarded = document.querySelector('.iconForwarded')

let iconCopy = document.querySelector('.iconCopy')

let iconShare = document.querySelector('.iconShare')

let whatsappIcon = document.querySelector('.whatsappIcon')

let btnDigitar2 = document.querySelector('.btnDigitar2')

let activeBtnDigitar2 = document.querySelector('.active2Btn')



// Fecha a modal de abertura, após 350 milissegundos.

function fecharModalDeAbertura() {
    setTimeout(() => {
        modalAbertura.style.display = 'none'
    }, 350)
}

fecharModalDeAbertura()


// Serve para inserir a mesma imagem, em todas as tags img, que possui o id avatar.

function inserirAvatar() {
    let imgAvatar = document.querySelectorAll('#avatar')
    
    for (let cont = 0; cont < imgAvatar.length; cont++) {
        imgAvatar[cont].setAttribute('src', 'images/avatar.png')
    }
}


function inserirAvatar2() {
    let imgAvatar2 = document.querySelectorAll('#avatar')
    
    for (let c = 0; c < imgAvatar2.length; c++) {
        imgAvatar2[c].setAttribute('src', 'images/avatar2.png')
    }
}



// Mostra o statu silenciado e oculta ele, se clicar de novo e faz a animação do ângulo, através de uma class css.

revelarEOcultar.addEventListener('click', () => {
    if (containerRevelarEOcultar.style.display == 'none') {
        containerRevelarEOcultar.style.display = 'block'
        angulo.classList.add('girarAngulo')
        
        rodape.style.marginBottom = '90px'
    } else {
        containerRevelarEOcultar.style.display = 'none'
        angulo.classList.remove('girarAngulo')
        
        rodape.style.marginBottom = '0'
    }
})



// As três funções abaixo, servem para organizar as opções / links do menu, quando cada função é chamada, de acordo com posições específicas da barra de rolagem.

function menuConversas() {
    containerMenu.innerHTML = `<a href="#" class="opcaoMenu">Novo grupo</a>
    <a href="#" class="opcaoMenu">Nova transmissão</a>
    <a href="#" class="opcaoMenu">Aparelhos conectados</a>
    <a href="#" class="opcaoMenu">Mensagens favoritas</a>
    <a href="#" class="opcaoMenu">Encontrar empresas</a>
    <a href="#" class="opcaoMenu">Pagamentos</a>
    <a href="#" class="opcaoMenu">Configurações</a>`
}

function menuStatus() {
    containerMenu.innerHTML = `<a href="#" class="opcaoMenu">Privacidade do status</a> <a href="#" class="opcaoMenu">Configurações</a>`
}

function menuChamadas() {
    containerMenu.innerHTML = `<a href="#" class="opcaoMenu">Limpar registro de chamadas</a> <a href="#" class="opcaoMenu">Configurações</a>`
}


// Quando clicar no icon de ellipsis, o menu de opções, abrirá.

ellipsis.addEventListener('click', () => {
    fundo.style.display = 'block'
    
    containerMenu.style.display = 'block'
})

// Quando clicar fora do menu, o mesmo será fechado.

fundo.addEventListener('click', () => {
    fundo.style.display = 'none'
    
    containerMenu.style.display = 'none'
})

// Quando o scroll é movido, o menu fica oculto.

document.addEventListener('scroll', () => {
    fundo.style.display = 'none'
    containerMenu.style.display = 'none'
})



// Escutadores de eventos, um para abrir a modal de link de chamadas em sala. E o outro é para fechar a mesma.

containerCallLink.addEventListener('click', () => {
    modalLinkCall.style.display = 'block'
})

iconVoltar.addEventListener('click', () => {
    setTimeout(() => {
        modalLinkCall.style.display = 'none'
    }, 100)
})



// Função para inserir mais nove chamadas, assim a página carrega mais rápido.

function inserirChamadas() {
    calls.innerHTML = `<section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Ana</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaRecebida.png" class="arrow" alt="Chamada Recebida." />
                            
                                    Ontem 20:19
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/video-solid.svg" class="video" alt="Chamada de Vídeo." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Ana</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaRecebida2.png" class="arrow" alt="Chamada Recebida." />
                            
                                    Ontem 11:00
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/phone-solid.svg" class="audio" alt="Chamada de Áudio." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Igor</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaPerdida.png" class="arrow" alt="Chamada Perdida." />
                            
                                    Ontem 10:05
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/phone-solid.svg" class="audio" alt="Chamada de Áudio." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Julia</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaRecebida2.png" class="arrow" alt="Chamada Recebida." />
                            
                                    (2) Ontem 09:56
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/video-solid.svg" class="video" alt="Chamada de Vídeo." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>+55 11 97301-4400</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaPerdida.png" class="arrow" alt="Chamada Perdida." />
                            
                                    20 de janeiro 14:28
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/phone-solid.svg" class="audio" alt="Chamada de Áudio." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Matheus</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaRecebida.png" class="arrow" alt="Chamada Recebida." />
                            
                                    25/12/2022 15:50
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/video-solid.svg" class="video" alt="Chamada de Vídeo." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Lucas</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaRecebida2.png" class="arrow" alt="Chamada Recebida." />
                            
                                    18/12/2022 16:15
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/phone-solid.svg" class="audio" alt="Chamada de Áudio." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>+55 11 98180-7533</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaRecebida.png" class="arrow" alt="Chamada Recebida." />
                            
                                    06/12/2022 17:59
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/phone-solid.svg" class="audio" alt="Chamada de Áudio." />
                        </span>
                    </section>
                    
                    
                    <section class="conteudoItem">
                        <div>
                            <img src="" class="foto" alt="img" id="avatar" />
                        
                            <div class="items">
                                <h3>Lucas</h3>
                        
                                <span>
                                    <img src="images/icons/chamadaPerdida.png" class="arrow" alt="Chamada Perdida." />
                            
                                    19/11/2022 8:48
                                </span>
                            </div>
                        </div>
                        
                        <span class="chamadas">
                            <img src="images/icons/video-solid.svg" class="video" alt="Chamada de Vídeo." />
                        </span>
                    </section>`
}

inserirChamadas()



// Verifica quando a página está no Dark Mode e quando está no Light Mode. E altera as imagens de formato SVG e PNG, de acordo com a verificação.

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function changeTheme(event) {
    if (event.matches) {
        whatsapp.setAttribute('src', 'images/icons/whatsapp2.svg')
        meta.setAttribute('src', 'images/icons/meta2.svg')
        
        iconArquivadas.setAttribute('src', 'images/icons/arquivadas2.png')
        iconPen.setAttribute('src', 'images/icons/penLight.svg')
        
        imgGroup.setAttribute('src', 'images/group2.png')
        inserirAvatar2()
        
        iconForwarded.setAttribute('src', 'images/icons/iconEnviar2.png')
        
        iconCopy.setAttribute('src', 'images/icons/copy2.png')
        
        iconShare.setAttribute('src', 'images/icons/share2.png')
        
        whatsappIcon.setAttribute('src', 'images/icons/whatsapp2.svg')

        activeBtnDigitar2.setAttribute('src', 'images/icons/penLight.svg')
    } else {
        whatsapp.setAttribute('src', 'images/icons/whatsapp.svg')
        meta.setAttribute('src', 'images/icons/meta.svg')
        
        iconArquivadas.setAttribute('src', 'images/icons/arquivadas.png')
        iconPen.setAttribute('src', 'images/icons/pen-solid.svg')
        
        imgGroup.setAttribute('src', 'images/group.png')
        inserirAvatar()
        
        iconForwarded.setAttribute('src', 'images/icons/iconEnviar.png')
        
        iconCopy.setAttribute('src', 'images/icons/copy.png')
        
        iconShare.setAttribute('src', 'images/icons/share.png')
        
        whatsappIcon.setAttribute('src', 'images/icons/whatsapp.svg')

        activeBtnDigitar2.setAttribute('src', 'images/icons/pen-solid.svg')
    }
}

// Escuta a mudança de Tema, na função changeTheme(event) com base no perfersColorScheme.

prefersColorScheme.addListener(changeTheme)

// Após as mudanças serem escutadas, as mudanças são aplicadas.

changeTheme(prefersColorScheme)



function exibirBtn2() {
    btnDigitar2.style.display = 'block'
    activeBtnDigitar2.style.display = 'block'
}

function ocultarBtn2() {
    btnDigitar2.style.bottom = '60px'
    activeBtnDigitar2.style.bottom = '60px'
        
    setTimeout(() => {
        btnDigitar2.style.display = 'none'
        activeBtnDigitar2.style.display = 'none'
    }, 200)
}

// Aplica mudanças de posicionamento na scrollX, caso, a tela do dispositivo esteja na orientação paisagem.

const screenLandscape = window.matchMedia('(orientation: landscape)')

function positionScroll(event) {
    if (event.matches) {
        topicos[1].addEventListener('click', () => {
            btnDigitar2.style.bottom = '95px'
            activeBtnDigitar2.style.bottom = '95px'
            exibirBtn2()
            
            scroll.scrollLeft = 832
        })
        
        topicos[2].addEventListener('click', () => {
            scroll.scrollLeft = 1665
        })
        
        
        scroll.addEventListener('scroll', () => {
            let scrollX = scroll.scrollLeft
            
            if (scrollX < 820) {
                topicos[0].classList.add('active')
                topicos[1].classList.remove('active')
                topicos[2].classList.remove('active')
                
                qtdMensagens.classList.add('active2')
                
                iconChat()
        
                btnDigitar2.style.display = 'none'
                activeBtnDigitar2.style.display = 'none'
        
                menuConversas()
            } else if (scrollX < 1650) {
                topicos[1].classList.add('active')
                topicos[0].classList.remove('active')
                topicos[2].classList.remove('active')
                
                qtdMensagens.classList.remove('active2')
        
                exibirBtn2()
       
                btnDigitar2.style.bottom = '95px'
                activeBtnDigitar2.style.bottom = '95px'
        
                iconCam()
        
                menuStatus()
            } else {
                topicos[2].classList.add('active')
                topicos[0].classList.remove('active')
                topicos[1].classList.remove('active')
                
                qtdMensagens.classList.remove('active2')
        
                iconCall()
        
                ocultarBtn2()
        
                menuChamadas()
        
                containerRevelarEOcultar.style.display = 'none'
                angulo.classList.remove('girarAngulo')
        
                rodape.style.marginBottom = '0'
            }
            
            
            if (scrollX < 120) {
                containerRevelarEOcultar.style.display = 'none'
                angulo.classList.remove('girarAngulo')
                        
                rodape.style.marginBottom = '0'
            } else if (scrollX > 820 && scrollX < 832) {
                scrollTop()
            } else if (scrollX > 1650) {
                scrollTop()
            }
        })
        
    } /*else {
        scrolls()
    }*/
}

screenLandscape.addListener(positionScroll)

positionScroll(screenLandscape)
