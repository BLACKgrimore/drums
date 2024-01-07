        var drums = document.querySelectorAll(".drum");

        for (var i = 0; i < drums.length; i++) {
            drums[i].addEventListener("click", function() {
                console.log("Clicked:", this.innerHTML);
                sound(this.innerHTML);
                Btnfade(this.innerHTML)
            });
        }

        document.body.addEventListener("keypress",(event)=>{
            console.log(event.key)
            sound(event.key)
            Btnfade(event.key)
    })

    function Btnfade(pressedkey){
        let btn = document.querySelector("."+pressedkey)
        btn.classList.add("pressBtn")
        setTimeout(()=>{
            btn.classList.remove("pressBtn")
        },200)

    }

        function sound(key) {
            switch (key) {
                case 'w':
                    var audio = new Audio("crash.mp3");
                    audio.play();
                    break;
                case 'a':
                    var audio = new Audio("kick-bass.mp3");
                    audio.play();
                    break;
                case 's':
                    var audio = new Audio("snare.mp3");
                    audio.play();
                    break;
                case 'd':
                    var audio = new Audio("tom-1.mp3");
                    audio.play();
                    break;
                case 'j':
                    var audio = new Audio("tom-2.mp3");
                    audio.play();
                    break;
                case 'k':
                    var audio = new Audio("tom-3.mp3");
                    audio.play();
                    break;
                case 'l':
                    var audio = new Audio("tom-4.mp3");
                    audio.play();
                    break;
                default:
                    break;
            }
        }

