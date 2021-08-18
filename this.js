var x = 50;
var m = {
    x: 60,
  fn1: function() {

    console.log(this.x);
    },
  fn2: () => {

    console.log(this.x);
  }


}

m.fn1();
m.fn2();
var ofn1 = m.fn1;
var ofn2 = m.fn2;
ofn1();
ofn2();
