let upload = document.getElementById("audioUpload")
let player = document.getElementById("player")
let checkBtn = document.getElementById("checkBtn")
let result = document.getElementById("result")

let originalText = "Сегодня хорошая погода"



upload.addEventListener("change", function(){
let file = this.files[0]
let url = URL.createObjectURL(file)
player.src = url
})

function slow(){
player.playbackRate = 0.5
}

function normal(){
player.playbackRate = 1
}

function fast(){
player.playbackRate = 1.5
}

function back(){
player.currentTime -= 5
}

function repeat(){
player.currentTime -= 3
}

checkBtn.addEventListener("click", function(){

let userText = document.getElementById("userText").value

let originalWords = originalText.split(" ")
let userWords = userText.split(" ")

let errors = 0

for(let i = 0; i < originalWords.length; i++){
if(originalWords[i] !== userWords[i]){
errors++
}
}

result.textContent = "Ошибок: " + errors

})

