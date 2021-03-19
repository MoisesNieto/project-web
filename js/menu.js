
const menu_items = document.querySelector('.menu_items');
document.addEventListener('DOMContentLoaded', () =>{

    const btn_menu = document.querySelector('.btn_menu');
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            menu_items.classList.toggle('show');
        })
    } 
})
document.addEventListener('click', (e)=>{
        if(e.target.id === '#menu_ser' || e.target.id === '#menu_tec' 
                || e.target.id === '#menu_pro' || e.target.id === '#menu_cant' ){
            menu_items.classList.remove('show');
        }
})

    



