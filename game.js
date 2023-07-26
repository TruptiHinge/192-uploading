AFRAME.registerComponent("game",{
    schema: {
        gameState: {type : "string",  default:"play"},
   },
   init:function(){
    var duration = 300
    var timerEl = document.querySelector("#timer")
    this.startTimer(duration,timerEl)
   },
   startTimer: function(){
    var min 
    var sec
    setInterval(() => {
        if(duration >= 0){
            this.data.gameState = "play"
            min = parseInt(duration/60)
            sec = parseInt(duration%60)
            if(min < 10){
                min = "0" + min
            }
            if(sec < 10){
                sec = "0" + sec
            }
            timerEl.setAttribute("text",{
                value:min + ":" + sec,
            })
            duration =-1
        }
        else{
            this.data.gameState = "over"
            var cameraR = document.querySelector("#camera-rig")
            cameraR.setAttribute("velocity",{
                x:0,
                y:0,
                z:0
            })
            var over = document.querySelector("#over")
            over.setAttribute("visible",true)
            var carSpeed = document.querySelector("#speed")
            carSpeed.setAttribute("text",{
                value:"0"
            })
        }
    }, 100);
   }
})