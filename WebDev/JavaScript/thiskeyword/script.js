  // IMPLICIT BINDING
  // const obj = {
  //   name: 'harsh',
  //   age: 19,
  //   sayName: function(){
  //       console.log(this);
  //   },
  //   favColor:{
  //       color: 'blue',
  //       sayColor:function(){
  //           console.log(this);
  //       }
  //   }
  // };

  //EXPLICIT BINDING

  function fun (name, age){
    console.log(name);
    console.log(age);
    console.log(this);
  }
  const a = {
    m:'hello',
    n: 10
  }
  // fun.call(a,'harsh', 25);
  const f= fun.bind(a);
  f('Monu' , 24);