const open=document.querySelector('.open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');


open.onclick = ()=>{
    modal_container.classList.add("show"); //show info box
}
close.onclick = ()=>{
    modal_container.classList.remove("show"); //show info box
}

const toast_click=document.querySelector('.toast-click');
const toast_container = document.querySelector('.container');
const cross_icon = document.querySelector('.cross_icon');


toast_click.onclick = ()=>{
    console.log("ewgreh")
    toast_container.classList.add("show"); //show info box
}

cross_icon.onclick = ()=>{
    toast_container.classList.remove("show"); //show info box
}