<template>
    
<div id="box">

  <div calss="suspend">
    <div>A键：开始</div>
    <div>空格：暂停</div>
    <div>方向键：改变移动的方向</div>
    <div>速度：
      <input type="number" id="speed" v-model="speed">
    </div>
    <div>初始长度：
      <input type="number" v-model="length">
    </div>
    <div>每一行和每一列的个数
      <br>
      <input type="number" v-model="across">
    </div>
    <!-- <button id="btn">
      开始
    </button> -->
  
  </div>


  <div id="hello">
  </div>

</div>
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      length: 3,
      snake: [],
      num:41,
      direction: 1,
      food: 43,
      n: 0,
      bool: false,
      speed: 100,
      list:{},
      coum: true,
      across:40,

    }
  },
  watch: {
  },
  modules: {
    // draw (graphics, seat, color) {
    //   graphics.beginFill(color, 1)
    //   graphics.drawRect(seat % 30 * 20 + 1, ~~(seat / 30) * 20 + 1, 18, 18)
    //   graphics.endFill()
    // }
  },
  mounted () {
    // this.num = ~~(this.across*1.5+1);
    // this.food = ~~(this.across*1.5+3);
     for (var i = 1; i < this.length; i++) {
      this.snake.push(this.num--);
    }
    var This = this;
    function draw (graphics, seat, color) {
      graphics.beginFill(color, 1)
      graphics.drawRect(seat % This.across * (600/This.across) + 1, ~~(seat / This.across) * (600/This.across) + 1, (600/This.across) - 2, (600/This.across) - 2)
      // graphics.endFill();
    }
    this.list.Application = PIXI.Application
    this.list.Container = PIXI.Container
    this.list.app = new this.list.Application({
      width: 800,
      height: 600,
      antialias: true,
      transparent: false,
      forceCanvas: true,
      resolution: 1
    })
    this.list.app.renderer.backgroundColor = 808080
    this.list.app.renderer.resize(600, 600)
    this.list.app.view.style.border = '1px solid red'
    this.list.app.renderer.view.style.position = 'absolute'
    this.list.app.renderer.view.style.display = 'block'
    this.list.app.renderer.view.style.left = 0
    this.list.app.renderer.view.style.top = 0
    this.list.app.renderer.view.style.bottom = 0
    this.list.app.renderer.view.style.right = 0
    this.list.app.renderer.view.style.margin = 'auto'

    this.list.app.renderer.autoResize = true
    document.getElementById('hello').appendChild(this.list.app.view)
    this.list.stage = new this.list.Container()
    this.list.app.stage.interactive = true
    this.list.graphics = new PIXI.Graphics()
    table();
    function table () {
      for(var i = 1; i < This.across; i++) {
        This.list.graphics.lineStyle(0.5,0xFFFFFF,0.3);
        This.list.graphics.moveTo(600/This.across*i,0);
        This.list.graphics.lineTo(600/This.across*i,600);
        This.list.graphics.moveTo(0,600/This.across*i);
        This.list.graphics.lineTo(600,600/This.across*i);
        aaa()
      }
    }
    function aaa() {
      This.list.graphics.lineStyle(0.5,0x000000,1);
      This.list.graphics.moveTo(150,1);
      This.list.graphics.lineTo(450,1);
      This.list.graphics.moveTo(450,0);
      This.list.graphics.lineTo(600,300);
      This.list.graphics.moveTo(600,300);
      This.list.graphics.lineTo(300,600);
      This.list.graphics.moveTo(300,600);
      This.list.graphics.lineTo(0,300);
      This.list.graphics.moveTo(0,300);
      This.list.graphics.lineTo(150,0);

    }
    this.list.app.stage.addChild(this.list.graphics)
    document.onkeydown = (event) => {
      this.direction = this.snake[1] - this.snake[0] == (this.n = [-1, -(This.across), 1, +(This.across)][(event).keyCode - 37] || this.direction) ? this.direction : this.n;
      // this.direction = this.n[-1, -30, 1, 30][event.keyCode - 37] || this.direction
      if ((event).keyCode === 32) { 
        this.bool = !this.bool;
      } else if ((event).keyCode === 65) {
        if (this.coum) {
          this.bool = true;
          begin();
        }
      }

      
    }
    function begin () {
      This.snake= []
      This.direction= 1
      This.food= 43
      This.n= 0
      This.list.graphics.beginFill(808080, 1 )
      This.list.graphics.drawRect(0, 0, 600, 600)
      // This.list.graphics.endFill()
      table();
      This.snake = [];
      This.num = 41;
       for (var i = 1; i < This.length; i++) {
          This.snake.push(This.num--);
        }
      let tiemr = 0;
      let length = This.snake.length;
      This.coum = false;

      let temp = setInterval(() => {
        tiemr += This.speed;
        if (This.bool) {
          This.snake.unshift(This.n = This.snake[0] + This.direction);
          if (This.snake.indexOf(This.n, 1) > 0 || This.n < 0 || This.n > This.across * This.across - 1|| This.direction == 1 && This.n % This.across == 0 || This.direction == -1 && This.n % This.across == This.across - 1) {
            console.log('撞死啦')
            This.coum = true;
            if (confirm(`游戏结束，用时：${tiemr/1000}秒，长度：${length}`)) {
              clearInterval(temp)
              return;
            } else {
              clearInterval(temp)
              return;
            }
          }
          draw(This.list.graphics, This.n, 0xFF700B)
          if (This.n == This.food) {//如果吃到食物
          length++;
            while (This.snake.indexOf(This.food = ~~(Math.random() * This.across * This.across)) >= 0);//如果食物不在蛇的身体上
            draw(This.list.graphics, This.food, 0xFF700B)
          } else {
            draw(This.list.graphics, This.snake.pop(), 808080);
          }
        }
      },This.speed)
    }
    
    // app.render(stage)
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
/* canvas {
  width: 800px;
  height: 50px;
} */
/* button {
  margin-top: 10px;
  background-color: #666;
} */
#div {
  /* margin: 0 auto; */
}
/* #hello {
  height: 100%;
  width: 100%;
} */
#box > .suspend {
  /* position: absolute;
  width: 1000px;
  height: 800px;
  top: 0;
  left: 0;
  text-align: left; */
  background-color: red;
  /* z-index: 999; */
  /* float: left; */
}
</style>
