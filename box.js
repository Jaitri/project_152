AFRAME.registerComponent("move-box",{
    schema:{
        moveY:{ type:"number", default:1},
        rotY:{type:"number", default:45},
        clickCounter:{type:"number", default:1}
    },
    tick: function(){
        window.addEventListener("click", e=> {
            this.data.clickCounter = this.data.clickCounter + 1;
        });
            if (this.data.clickCounter === 1){
              const rotation = { x: 0, y: 20, z:0};
              this.el.setAttribute("rotation", rotation);

             } else if(this.data.clickCounter === 2)
            {
                const rotation = {x:0, y:100, z:0};
            }
        }
});
