X=0;
Y=0;
rec="";
cir="";
radius=0;
var SpeechRecognition=window.webkitSpeechRecognition;
var lji=new SpeechRecognition();  
function start(){
    document.getElementById("status").innerHTML="say the command  right here mister for example u can only say circle,rectangle/ or u wont know how to do this project"; 
lji.start();
         }
lji.onresult=function(event){
    console.log(event);
    var dare=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech is Recognized as: "+dare;
    if(dare=="Circle"|| dare=="circle"){
        X=Math.floor(Math.random()*900);
        Y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML= "drawing circle";
        cir="whatever_word";

    }
    if(dare=="Rectangle"|| dare=="rectangle"){
        X=Math.floor(Math.random()*900);
        Y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="drawing rectangle";
        rec="whatever_word";

    }
}
function setup(){


canvas=createCanvas(1000,700);

}
function draw(){
    if(cir=="whatever_word"){
        radius=Math.floor(Math.random()*100);
circle(X,Y,radius);

document.getElementById("status").innerHTML="circle is drawn";
cir="";
    }
    if(rec=="whatever_word"){
        width=Math.floor(Math.random()*200);
        height=Math.floor(Math.random()*300);
rect(X,Y,width,height);

document.getElementById("status").innerHTML="rectangle is drawn";
rec="";
    }
}












