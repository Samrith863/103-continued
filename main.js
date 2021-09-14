Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("cam");
Webcam.attach(camera);

function take_pic(){
    Webcam.snap(function (data_uri){
    document.getElementById("pic").innerHTML='<img id="object_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Mp-wbyz7z/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}