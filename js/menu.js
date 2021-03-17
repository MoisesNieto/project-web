
const service = document.querySelector('#service');
const tecnologic = document.querySelector('#tecnologia');
const project = document.querySelector('#project');
const contact = document.querySelector('#contact');
const menu_items = document.querySelector('.menu_items');


addEventListener ('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu');
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
           
            menu_items.classList.toggle('show');
        })
    }
    service.addEventListener('click', ()=>{
        menu_items.classList.remove('show');
    });
   

})
