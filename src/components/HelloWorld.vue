<template>
  <div id="hello" >
    {{ count }}<hr/>
    {{ arr }}<hr/>
    {{ str }}<hr/>
    {{ obj }}<hr/>
    {{ countPlusLocalState }}<hr/>
    {{ doneTodosCount }}<hr/>
    <!-- {{ soneTodos }}<hr/> -->
    {{ sone }}<hr/>
    {{ getId }}
    <!-- {{ counts }} -->
    <!-- <button @click="add">aaaaaaaa</button> -->
    <button @click="$store.commit({
      type: 'INCREMENT',
      age: 30
    })">按钮</button>
    <hr/>
    <router-link to="/demo"><el-button type="success" round>成功按钮</el-button></router-link>
    <!-- <button @click="$store.commit('increment', {age: 20})">按钮</button> -->
    <template>
      <el-carousel :initial-index="index" indicator-position="outside" :autoplay="false" :interval="4000" type="card" height="200px">
        <el-carousel-item class="box" v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </template>
      <el-button type="success" @click="aaa">aaaaaaaaaaa</el-button>

  </div>
</template>

<script>
// import * as PIXI from 'pixi.js'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      index: 3
    }
  },
  methods: {
    aaa () {
      this.index++
      console.log(this.index)
    }
  },
  // computed: mapState(
  //   // ['count', 'arr', 'str', 'obj']
  //   {
  //   // count: state => state.count, == count: 'count',
  //   count: 'count',
  //   arr: state => state.arr,
  //   str: 'str',
  //   obj: 'obj',
  //   countPlusLocalState (state) {
  //     return state.count + state.str
  //   }
  // }
  // ),
  // mounted: {
  //   hendle () {
  //     this.add
  //   }
  // },
  computed: {
    doneTodosCount () {
      return this.$store.state.todos.filter(todo => todo.id)
    },
    countPlusLocalState (state) {
      return state.count + state.str
    },
    // getters: {
    //   soneTodos: (getters) => {
    //     return getters.soneTodos
    //   }
    // },
    getId () {
      return this.$store.getters.getId(2)
    },
    // soneTodos (getters) {
    //   return this.$store.getters.soneTodos
    // },
    // ...mapMutations({
    //   add: `INCREMENT`
    // }),
    ...mapGetters(
      // ['soneTodos']
      {sone: 'soneTodos'}
    ),
    ...mapState(['count', 'arr', 'str', 'obj'])
    // ...mapState({
    //   count: 'count',
    //   str: 'str',
    //   arr: 'arr',
    //   obj: 'obj'
    // })
  },
  created () {
    // console.log(this.$store.getters.soneTodos)
  }
}

// export default {
//   name: 'HelloWorld',
//   data () {
//     return {
//     }
//   },
//   mounted () {
//     let Application = PIXI.Application
//     let resources = PIXI.loader.resources
//     let Container = PIXI.Container
//     let Sprite = PIXI.Sprite
//     let loader = PIXI.loader
//     let TextureCache = PIXI.TextureCache
//     let Rectangle = PIXI.Rectangle
//     // app.stage.addChild(cat)
//     let app = new Application({
//       width: 800,
//       height: 600,
//       antialias: true,
//       transparent: false,
//       forceCanvas: true,
//       resolution: 1
//     })
//     app.renderer.backgroundColor = 0x0000FF
//     app.renderer.autoResize = true
//     app.renderer.resize(400, 400)
//     app.view.style.border = '1px solid red'
//     app.renderer.view.style.position = 'absolute'
//     app.renderer.view.style.display = 'block'
//     app.renderer.autoResize = true
//     app.renderer.resize(window.innerWidth, window.innerHeight)
//     document.getElementById('hello').appendChild(app.view)
//     var stage = new Container()
//     app.stage.interactive = true
//     var graphics = new PIXI.Graphics()
//     app.stage.addChild(graphics)

//     graphics.beginFill(0xFF3300, 0.3)
//     graphics.lineStyle(10, 0xffd900)
//     graphics.moveTo(50, 50)
//     graphics.lineTo(250, 50)
//     graphics.lineTo(100, 100)
//     graphics.lineTo(50, 50)
//     graphics.endFill()
//     // 画方形
//     graphics.lineStyle(5, 0x000000)
//     graphics.beginFill(0xFF700B, 1)
//     graphics.drawRect(50, 200, 120, 120)
//     graphics.lineStyle(5, 0xFF00FF)
//     graphics.beginFill(0xFF00BB, 0.65)
//     graphics.drawRoundedRect(350, 280, 300, 100, 30)
//     graphics.endFill()
//     // 画圆型
//     graphics.lineStyle(5, 0x666666)
//     graphics.beginFill(0xFFFF0B, 0.3)
//     graphics.drawCircle(520, 120, 80)
//     graphics.endFill()

//     // console.log(stage)
//     app.render(stage)
//     // app.stage
//     var style = {
//       fontFamily: 'Arial',
//       fontSize: '36px',
//       fontStyle: 'italic',
//       fontWeight: 'bold',
//       fill: '#F7EDCA',
//       stroke: '#4a1850',
//       strokeThickness: 5,
//       dropShadow: true,
//       dropShadowColor: '#000000',
//       dropShadowAngle: Math.PI / 6,
//       dropShadowDistance: 6,
//       wordWrap: true,
//       wordWrapWidth: 440
//     }
//     var text = new PIXI.Text('hello pixi.js ', style)
//     text.x = 200
//     text.y = 100
//     app.stage.addChild(text)
//     loader
//       .add(['/static/images/logo.png',
//         '/static/images/timg.jpg',
//         '/static/images/10.png'])
//       .on('progress', loadProgressHandler)
//       .load(setup)
//     function loadProgressHandler (loader, resource) {
//       console.log('loading')
//       console.log(resource.url)
//       console.log(loader.progress)
//     }
//     let rocket
//     let cat
// function setup () {
//   cat = new Sprite(resources['/static/images/logo.png'].texture)
//   app.stage.addChild(cat)
//   // cat.y = 200
//   // cat.x = 200
//   cat.position.set(200, 200)
//   cat.width = 230
//   cat.height = 150
//   // cat.scale.x = 0.5
//   // cat.scale.y = 1
//   cat.scale.set(0.5, 0.8)
//   // cat.anchor.x = 0.5
//   // cat.anchor.y = 0.5
//   cat.anchor.set(0.5, 1)
//   // cat.pivot.set(0.5, 1)
//   var a = 0
//   setInterval(() => {
//     a++
//     cat.rotation = a / 100
//   }, 10)
//       // let texture = TextureCache['/static/images/10.png']
//       // console.log(cat)
//       // console.log(app.stage)
//       // sprite.visible = false
//       // app.stage.removeChild(Sprite)
//       let texture = TextureCache['/static/images/10.png']
//       let rectangle = new Rectangle(139, 94, 40, 40)
//       texture.frame = rectangle
//       rocket = new Sprite(texture)
//       rocket.x = 0
//       rocket.y = 50
//       // rocket.rotation = 3.13
//       app.stage.addChild(rocket)
//       app.ticker.add(delta => gameLoop(delta))
//       var por = true
//       function gameLoop (delta) {
//         rocket.vx = 1
//         rocket.vy = 1

//         if (por) {
//           rocket.x += rocket.vx + delta
//           if (rocket.x >= 300) {
//             por = false
//             rocket.anchor.set(0.5, 1)
//             // rocket.pivot.set(0.5, 0.5)
//             rocket.rotation = 3.13
//           }
//         } else {
//           rocket.x -= (rocket.vx + delta)
//           if (rocket.x <= 40) {
//             por = true
//             rocket.anchor.set(0.5, 0)
//             rocket.rotation = 0
//           }
//         }
//         // if (rocket.x > 1400 && rocket.y > 1000) {
//         //   rocket.x = -40
//         //   rocket.y = -40
//         // }
//       }
//       // let img = new Rectangle(20, 55, 40, 40)
//       // texture.frame = img
//       // let catv = new Sprite(texture)
//       // app.stage.addChild(catv)
//     }
//   }
// }
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  /* height: 500px; */
  background-color: blue;
}
</style>
