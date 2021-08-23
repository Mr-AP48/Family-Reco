Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach("#webcam");

function snapClick() {
    Webcam.snap(
        function (data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '">';
        }
    );
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IfU6TvUEQ/model.json', modelLoded);

function modelLoded() {
    console.log("model loded");
}

function checkImg() {
    img = document.getElementById("selfie_img");
    classifier.classify(img , gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("name_of_person").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}