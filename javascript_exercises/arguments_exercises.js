function sum(arg1,arg2) {
 let sum = 0;
 for (let i =0; i < arguments.length; i++) {
   sum += arguments[i];
 }
 return sum;
}

// console.log(sum(1, 2, 3, 4));

function sum(...args) {
  let sum = 0;
  for ( let i = 0; i < args.length; i++ ) {
    sum += args[i];
  }
  return sum;
}

// console.log(sum(1, 2, 3, 4));

Function.prototype.myBind = function(ctx) {
    let bindArgs = Array.from(arguments).slice(1);
    let func = this;
    
    return function() {
      let callArgs = Array.from(arguments);
      let allArgs = bindArgs.concat(callArgs);
      return func.call(ctx, ...allArgs);
    };

};

Function.prototype.myBind = function(ctx, ...bindArgs) {
    let that = this;
    // let arr = [];
    // for ( let i = 0; i < args.length; i++) {
    //   arr.push(args[i]);
    // }
    return function() {
      let callArgs = Array.from(arguments);
      let allArgs = bindArgs.concat(callArgs);
      return that.call(ctx, ...allArgs);
    };
    
};

function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length < numArgs) {
       return _curriedSum;
     } else {
       return sum(...numbers);
     }
   };
   return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let that = this;
  let _curried = (num) => {
    numbers.push(num);
    if (numbers.length < numArgs) {
       return _curried;
     } else {
       return that.apply(null,numbers);
     }
   };
   return _curried;
};

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let that = this;
  let _curried = (num) => {
    numbers.push(num);
    if (numbers.length < numArgs) {
       return _curried;
     } else {
       let firstNum = numbers[0];
       return that(...numbers);
     }
   };
   return _curried;
};




function product() {
  let total = 1;
  for ( let i = 0; i < arguments.length; i++ ) {
    total*= arguments[i];
  }
  return total;
}





