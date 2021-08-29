function  startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error, results)
{
   if (error){
       console.log(error);
   }
   else{
       console.log(results);
       document.getElementById("I").innerHTML='I CAN HEAR- '+results[0].label;
       document.getElementById("A").innerHTML='Acuuracy- '+(results[0].confidence*100).toFixed(2)+ "%";
       img1=document.getElementById('alien1')
       img2=document.getElementById('alien2')
       img3=document.getElementById('alien3')
      
       if (reults[0].label=="Lion")
       {
           img1.src='L.jpg';
           img2.src='P.jpg';
           img3.src='download.jpg';
           
       }
     else if (reults[0].label=="Panda")
       {
           img1.src='L.jpg';
           img2.src='P.jpg';
           img3.src='download.jpg';
           
       }  else if (reults[0].label=="Penguin")
       {
           img1.src='L.jpg';
           img2.src='P.jpg';
           img3.src='download.jpg';
          
      
           
       }
   }
}
