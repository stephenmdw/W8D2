Array.prototype.bubbleSort = function(){
    let sorted = false

    while (sorted === false) {
        sorted = true
        for (let i = 1; i < this.length; i++){
            if (this[i] < this[i-1]) {
                [this[i], this[i-1]] = [this[i-1], this[i]]
                sorted = false
            }
        }
    }
    return this
        
}

// console.log([4,5,1,2,3].bubbleSort())

String.prototype.substrings = function() {
     let set = new Set()
     for (let i = 0; i < this.length; i++){
         for (let j = i+1; j < this.length+1; j++){
    //         if (!set.has(this.slice(i, j))){
                set.add(this.slice(i, j))
    //         }
         }
     }
     return Array.from(set)
}

let sub = "Hello World"
// console.log(sub.substrings())