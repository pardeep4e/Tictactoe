/*****************************
 * This is a Tic tac toc game *
 *****************************/
window.onload = function(){
  /**
   * Declare all variables
   */
   var s = Snap("#svg");
   var mat = Array(9),mat2 = Array(9),compare = new Array(),i = 1;
   s.attr({viewBox: "0 0 590 590"});
   create();

   /**
    * [create description]
    * @return {[type]} [create svg rects]
    */
   function create(){
     var cc = 0;
     for(var x=0;x<3;x++){
       for(var i=0;i<3;i++){
         cc++;
         mat[cc] = s.rect(0,20,150,150)
         .attr({fill:"rgb(7, 58, 105)",filter : s.filter(Snap.filter.shadow(0, 0, 1, 'black'))})
         .animate({transform:'t'+115*2*x+','+100*2*i+'r0'},2000,mina.elastic);
         var text = s.text(0,0,cc);
         mat[cc].append(text);
       }
     }
   }

   document.getElementById('svg').addEventListener('click',function(e){
     var rect = e.target.getBoundingClientRect();
     var index = e.target.textContent;
       mat[index].click(function(){
         setValue(index);
         if(mat2[index] == 0){
           this.attr({fill:"rgb(78, 193, 130)"});
           var text = s.text(pointX(index),pointY(index),"0").attr({fill:"rgb(180, 101, 51)",'font-size':100,filter : s.filter(Snap.filter.shadow(0, 0, 1, 'black'))});
           var ss = comparar();
           alert(ss);
           io();
        }

      });
   });

   function setValue(index){
     if(mat2[index] == null){
        mat2[index] = 0;
    }
    else{
      alert("pocicion ocupada");
    }
   }

   function pointX(index){
     var value = 40;
     index > 3 ? value = 275 : null;
     index > 6 ? value = 500 : null;
     return value;
   }

   function pointY(index){
     var value = 130;
     index == 2 || index == 5 || index == 8 ? value = 335 : null;
     index == 3 || index == 6 || index == 9 ? value = 535 : null;
     return value;
   }

   function io(){
     var x= 0;
     for(var i=1;i<mat2.length;i++){
         if(mat2[i] == null){
            mat2[i] = "x";
            peintIO(i);
            break;
        }
      }
    }

   function peintIO(i){
    mat[i].attr({fill:"rgb(127, 213, 13)"});
    var text = s.text(pointX(i),pointY(i),"X")
    .attr({fill:"rgb(180, 101, 51)",'font-size':100,filter : s.filter(Snap.filter.shadow(0, 0, 1, 'black'))});
  }


   function index(){
     for(var i = 0;i<mat2.length;i++){
       if(mat2[i] == null){
         is = i;
         break;
       }
     }
     return is;
   }

   function comparar(){
     var winer;
     //win conditions
     //0,1,2
     //3,4,5
     //6,7,8
     //0,3,6
     //1,4,7
     //2,5,8
     //0,4,8
     //2,4,6
     /*
     if(mat2[1] == mat2[2] && mat2[2] == mat2[3]){ winer = "sw";}
     if(mat2[4] == mat2[5] && mat2[4] == mat2[6]){winer = "swx";}
     if(mat2[7] == mat2[8] && mat2[7] == mat2[9]){ winer = "wwwd";}
    */
     if(mat2[1] === mat2[2] && mat2[2] === mat2[3]){
       winer = "ss";
     }
     if(mat2[4] === mat2[5] && mat2[4] === mat2[6]){
       winer = "xx";
     }
     /*
     mat2[4] == mat2[5] && mat2[4] == mat2[6] ? winer = "x" : null;
     mat2[7] == mat2[8] && mat2[7] == mat2[9] ? winer = "r" : null;

     mat2[1] == mat2[4] && mat2[1] == mat2[7] ? winer = "h": null;
     mat2[2] == mat2[5] && mat2[2] == mat2[8] ? winer = "t" : null;
     mat2[3] == mat2[6] && mat2[3] == mat2[9] ? winer = "l" : null;
     */
     //alert(mat2);

     return winer;
   }
}
