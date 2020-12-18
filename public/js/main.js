let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");


// Fonction qui ajoute un element dans ma to do list quand on clique
btn.onclick = function(){
    
    let txt = input.value;
    if(txt ==''){
        alert('Vous devez écrire un élément dans votre To do List sinon ça sert à rien ');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';
    }
    
};

