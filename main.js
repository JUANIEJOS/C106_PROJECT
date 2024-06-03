cat_no=0;
cow_no=0;
dog_no=0;
function identify_sound(){
    navigator.mediaDevices.getUserMedia();
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gcF9J50yF/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
  console.log(results); 
  document.getElementById("sound_result").innerHTML="I can hear - "+ results[0].label;
  
if (results[0].label=="meowing"){
    document.getElementById("image").src="cat.webp";
    cat_no=cat_no+1;
    document.getElementById("cat_no").innerHTML=cat_no;
}
else if (results[0].label=="mooing"){
    document.getElementById("image").src="cow.jpg"
    cow_no=cow_no+1;
    document.getElementById("cow_no").innerHTML=cow_no;
}

else if(results[0].label=="barking"){
    document.getElementById("image").src="dog.jpg"
    dog_no=dog_no+1;
    document.getElementById("dog_no").innerHTML=dog_no;
}
else{
    document.getElementById("image").innerHTML="Sorry, I can't identify the sound T-T"
    document.getElementById("image").src="background.webp"
}
}
}






    

