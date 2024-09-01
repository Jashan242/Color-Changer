const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        if(event.target.id==='grey')
            body.style.backgroundColor=event.target.id
        else if(event.target.id==='yellow')
            body.style.backgroundColor=event.target.id
        else if(event.target.id==='blue')
            body.style.backgroundColor=event.target.id
        else if(event.target.id==='green')
            body.style.backgroundColor=event.target.id
        else 
            body.style.backgroundColor='white'
    });
});