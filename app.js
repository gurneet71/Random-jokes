const body = document.querySelector('body');
const joke = document.getElementById('content');
const punchLine = document.getElementById('punch');
const btn = document.getElementById('btn');

var xhr =new XMLHttpRequest();
function onload(){
    punchLine.className = 'hide';
    xhr.open('GET','https://official-joke-api.appspot.com/random_joke',true);
    xhr.onload = function(){
        if(this.status == 200){
            var value = JSON.parse(this.responseText);
            console.log(value);
            joke.innerHTML = value.setup;
            punchLine.innerHTML = value.punchline;
        }
    }
    xhr.send();

}


body.addEventListener('click',function(e){
    var target = e.target;
    if(e.target.id!='btn'){
        onload();
    }
})
document.getElementById('btn').addEventListener('click',function(e){
    var target = e.target.previousElementSibling;
    if(target.className == 'hide'){
        target.className ='show';

    }
    console.log(target);
});

onload();