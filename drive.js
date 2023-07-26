AFRAME.registerComponent('drive',{
    init: function(){
        var gameStatevalue = this.el.getAttribute("game")
        if( gameStatevalue == "play"){
            this.driveCar()
        }},
        isVelocityActive:function(){
            return Math.random()<0.25
        },
         driveCar: function(){
            var wheelRotation = 0
            var multiply = 10
        window.addEventListener("keydown", function(e){
            var wheel = document.querySelector("#control-wheel")
            if(e.code == "ArrowRight" && wheelRotation > -40){
                wheelRotation = -5 
                wheel.setAttribute("rotation",{
                    x:0,
                    y:0,
                    z:wheelRotation
                })
            }
            if(e.code == "ArrowLeft" && wheelRotation < 40){
                wheelRotation = 5 
                wheel.setAttribute("rotation",{
                    x:0,
                    y:0,
                    z:wheelRotation
                })
            }
            var cameraR = document.querySelector("#camera-rig")
            var cameraRotation = cameraR.getAttribute("rotation")
            var cameraPosition = cameraR.getAttribute("position")
            var cameraMoveC = cameraR.getAttribute("movement-controls")
            cameraR.setAttribute("movement-controls",{
                "speed":cameraMoveC.speed + 0.005
            })
            var cameradir = new THREE.Vector3()
            cameraR.object3D.getWorldDirection(
                cameradir)
                if(e.code == "ArrowRight"){
                    cameraRotation.y = -5
                    cameraR.setAttribute("rotation",{
                        x:0,
                        y:cameraRotation.y,
                        Z:0
                    })
                    cameraR.setAttribute("movement-controls",{
                        "speed":cameraMoveC.speed + 0.10
                    })
                }
                if(e.code == "ArrowLeft"){
                    cameraRotation.y = +5
                    cameraR.setAttribute("rotation",{
                        x:0,
                        y:cameraRotation.y,
                        Z:0
                    })
                    cameraR.setAttribute("movement-controls",{
                        "speed":cameraMoveC.speed + 0.005
                    })
                }
            
            if(e.code == "ArrowUp"){
                multiply = 0.5
                if(multiply <= 100 && cameraposition.z > -500){
                    cameraR.setAttribute("movement-controls",{
                        "speed":cameraMoveC.speed + 0.005
                    })
                    var accelerateCar = document.querySelector("#control-acce")
                    accelerateCar.setAttribute("material","color","green")
                    var carSpeed = document.querySelector("#speed")
                    carSpeed.setAttribute("text",{value:multiply})
                }
            }     
            if(e.code == "Space"){
                cameraR.setAttribute("movement-controls",{
                    "speed":0
                })
                var stopcar = document.querySelector("#control-break")
                stopcar.setAttribute("material","color","red")
            }   
        })
        window.addEventListener('keyup',function(e){
            var cameraR = document.querySelector("#camera-rig") 
            var cameradir = new THREE.Vector3()
            cameraR.object3D.getWorldDirection(
                cameradir)
                var cameraMoveC = cameraR.getAttribute("movement-controls")
                if(e.code == "Space"){
                    var startcar = this.document.querySelector("#control-break")
                    startcar.setAttribute("material","color","green")

                 }
                 if(e.code == "ArrowUp"){
                    if(multiply > 10){
                        multiply = -0.5
                        cameraR.setAttribute("movement-controls",{
                            "speed":cameraMoveC.speed + 0.005
                        })
                    }
                    var accelerateCar = doucment.querySelector("#control-acce")
                    accelerateCar.setAttribute("material","color","blue")
                 }
            })
    }   
})

