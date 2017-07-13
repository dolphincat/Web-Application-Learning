var obj ={
  name: "Chuck",
  age:45,
  isCool: false,
  friends:["bob","tina"],
  add: function(x,y){
    return x,y;
  }
}

var dogSpace={};
dogSpace.speak = function(){
  return "WOOF";
}

var comments={};
comments.data = []
  "Good Job",
  "It's okay",
  "Lame..."
];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  });
}

print(comments.data);

comments.print=function print(){
  this.data.forEach(function(el){
    console.log(el);
  });
}
