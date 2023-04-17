// let a = [1,2,3,4,5,6,7,8,10,11,12]
// // temp = a[0];
// // for (var i = 1; i <a.length; i++) {
// //     if(a[i]>temp)
// //     {
// //         temp = a[i];
// //     }
// // }

// // console.log(temp);

// temp = 0;
// for (var i = 0; i <a.length; i++)
// {
//     temp = temp + a[i];
// }

// let res = temp/2;
// console.log(res);

// function even(a){
// for (var i = 0; i <a.length; i++){
//     if(a[i]%2 == 0){
//         a[i]=a[i]+1;
// }
// }
// }
// console.log(a);


// even(a);
// var words = ["eat", "sleep", "code", "repeat", "neog", "community"]; 
// var temp = [];
// for (var i = 0; i <words.length; i++)
// {
//     if(words[i].length >=5)
//     temp.push(words[i]);
// }
// console.log(temp);


// for (var i = 0; i < words.length; i++)
// {
    
//     words[i]= words[i].toUpperCase();
// }

// console.log(words);


//  a=   [ 
//       { name: "John", age: 21 }, 
//       { name: "Mary", age: 22 }, 
//       { name: "Peter", age: 23 }, 
//     ]

//     // c=function get(a){
//         ap=[];
//         b = a.map(function(e){ 
//             ap.push(e.name);
//     });
// // }
//

// team = {
//     teamid:01
// };
// ap=[];
// b = a.map(function(e){ 
//     ap.push(Object.assign(e,team));
// });
// console.log(ap);


var array = [ 
    { 
      name: "Jay", 
      age: 60 
    }, 
    { 
      name: "Gloria", 
      age: 36 
    }, 
    { 
      name: "Manny", 
      age: 16 
    }, 
    { 
      name: "Joe", 
      age: 9 
    } 
  ]; 
 
var temp=0;
let  b = array.reduce((total,num) =>{ 
         return total + num.age;
    },0);

    console.log(b);