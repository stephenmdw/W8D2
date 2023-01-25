Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

function callback(ele) {
    return ele * 2 
}
// console.log([1, 2, 3].myEach(callback))

Array.prototype.myMap = function(callback) {
    arr = []
    this.myEach(element => arr.push(callback(element)))
    return arr
}

// console.log([1, 2, 3].myMap(callback))

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this
    if (initialValue === undefined){
        initialValue = arr[0]
        arr = arr.slice(1)
        // callback(initialValue, arr[0])
//        acc = callback(initialValue, this[0])
    }
    let acc = initialValue
    arr.myEach(el => acc = callback(acc, el))
    return acc
}

// without initialValue
let ex1 = [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }); // => 6
  
  // with initialValue
let ex2 =  [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }, 25); // => 31
// console.log(ex1)
// console.log(ex2)