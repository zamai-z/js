/*DECLARAÇÃO CONSTANTES*/
const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')
const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')
const obj_cb_linha = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')
const obj_txt_novo = document.querySelector('#txt_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')
const obj_sel_header = document.querySelector('#sel_header')
const obj_header = document.querySelector('header')
const obj_bt_op = document.querySelector('#cb_opp')
const obj_op = document.querySelector('#ops')
const obj_cb_bg = document.querySelector('#cb_bg')
const obj_bg = document.querySelector('.bg')
const obj_bt_audio = document.querySelector('.Audiowide')
const obj_bt_mono = document.querySelector('.Monoton')
const obj_ptest = document.querySelector('#font')



/*CRIAÇÃO EVENTO OBJETOS*/
obj_sel_fundo.addEventListener('change', FunMudaCorFundo)
for(obj_rb_fonte of array_rb_fonte){
    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)
}
obj_cb_linha.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)
obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)
obj_sel_header.addEventListener('change', FunMudaHeader)
obj_bt_op.addEventListener('click', FunOp)
obj_cb_bg.addEventListener('click', FunMudaBg)
obj_bt_audio.addEventListener('click', FunAudio)
obj_bt_mono.addEventListener('click', FunMono)



/*FUNÇÕES*/
function FunMudaCorFundo(){
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)
}

function FunMudaCorFonte(){
    for(obj_rb_fonte of array_rb_fonte){
        if(obj_rb_fonte.checked){
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else{
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}

function FunLinhaMeio(){
    if (obj_cb_linha.checked){
        obj_div_area_teste.classList.add(obj_cb_linha.value)
    }
    else{
        obj_div_area_teste.classList.remove(obj_cb_linha.value)
    }
}

function FunBorda(){
    if (obj_cb_borda.checked){
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    }
    else{
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}

function FunTrocaTexto(){
    if(obj_txt_novo.value !=''){
        obj_div_area_teste.innerText = (obj_txt_novo.value)
    }
    else{
        alert('Digite algo no campo!')
    }
}
function FunMudaHeader(){
    obj_header.setAttribute('class', obj_sel_header.value)
}
function FunOp(){
    if(obj_bt_op.checked){
        obj_op.classList.add(obj_bt_op.value)
    }
    else{
        obj_op.classList.remove(obj_bt_op.value)
    }
}
function FunMudaBg(){
    if(obj_cb_bg.checked){
        obj_bg.classList.add(obj_cb_bg.value)
    }
    else{
        obj_bg.classList.remove(obj_cb_bg.value)
    }
}
function FunAudio(){
    obj_ptest.setAttribute('class',obj_bt_audio.value)
    obj_ptest.innerText = 'Fonte: ' + obj_bt_audio.value
}
function FunMono(){
    obj_ptest.setAttribute('class',obj_bt_mono.value)
    obj_ptest.innerText = 'Fonte: ' + obj_bt_mono.value
}