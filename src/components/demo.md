let size = 600/This.across;
          let x = This.n%This.across * size + size/2;
          let y = ~~(This.n/This.across) * size + size/2
          for (var i = 0; i < This.data.length - 1; i++) {
            let x1 = This.data[i][0];
            let x2 = This.data[i+1][0];
            let y1 = This.data[i][1];
            let y2 = This.data[i+1][1];
            let wire1 = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
            let wire2 = Math.sqrt(Math.pow((x2-x),2)+Math.pow((y2-y),2))
            let wire3 = Math.sqrt(Math.pow((x1-x),2)+Math.pow((y1-y),2))
            console.log(Math.abs(wire1-(wire2+wire3)))
            if (Math.abs(wire1-(wire2+wire3)) < 0.6){
              This.a = 2;
            }