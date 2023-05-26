const botaoMenu = document.querySelector('.cabecalho__menu--icone')
const menu = document.querySelector('.cabecalho__menu')
const fechar = document.querySelector('.cabecalho__fechar--icone')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
    fechar.classList.toggle('botao__fechar-ativo')
})
fechar.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
    fechar.classList.toggle('botao__fechar-ativo')
})