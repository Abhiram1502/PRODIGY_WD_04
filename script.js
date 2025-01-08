let links=document.getElementById('links');
let skills=document.getElementById('skills');
let exp=document.getElementById('exp');
let edu=document.getElementById('edu');
let Experience=document.getElementById('Experience');
let Skill=document.getElementById('Skill');
let Education=document.getElementById('Education');
window.onscroll=function(){
    progressBar();
    scrollTopFunction();
};
function scrollTopFunction(){
    if(document.body.scrollTop || document.documentElement.scrollTop>30){
        document.getElementById("top-btn").style.display="flex";
    }else{
        document.getElementById("top-btn").style.display="none";
    }
}
function toTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
function showMenu(){
    links.style.display='flex';
    links.style.right="0px";
}
function hideMenu(){
    links.style.display='none';
    links.style.right="-180px";
}
function showExp(){
    skills.style.display='none';
    exp.style.display='block';
    edu.style.display='none';
    Experience.style.aft
    Education.style.borderBottom='none';
    Experience.style.borderBottom='3px solid #ffb803';
    Skill.style.borderBottom='none';
    Experience.style.setProperty('--after-display', 'none');
    Skill.style.setProperty('--after-display','block');
    Education.style.setProperty('--after-display','block');
}
function showEdu(){ 
    skills.style.display='none';
    exp.style.display='none';
    edu.style.display='block';
    Experience.style.borderBottom='none';
    Education.style.borderBottom='3px solid #ffb803';
    Skill.style.borderBottom='none';
    Experience.style.setProperty('--after-display', 'block');
    Skill.style.setProperty('--after-display','block');
    Education.style.setProperty('--after-display','none');
}
function showSkills(){
    skills.style.display='block';
    exp.style.display='none';
    edu.style.display='none';
    Skill.style.borderBottom='3px solid #ffb803';
    Experience.style.borderBottom='none';
    Education.style.borderBottom='none';
    Experience.style.setProperty('--after-display', 'block');
    Skill.style.setProperty('--after-display','none');
    Education.style.setProperty('--after-display','block');
}

function progressBar(){
    var scroll=document.body.scrollTop || document.documentElement.scrollTop;
    var height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled=(scroll/height)*100;
    document.getElementById('progress-bar').style.width=scrolled+"%";
}
var submit=document.getElementById('submit');
var fname=document.getElementById('fname');
var subject=document.getElementById('subject');
submit.addEventListener("click",function(){
    subject.value=fname.value+' sent a message from Portifolio';
    alert('Your Information has been sent!...');
});