Array.prototype.uniq = function() {
    let arr = []
    for (let i = 0; i < this.length; i++){
        if (!arr.includes(this[i])) {
            arr.push(this[i])
        }
    }
    return arr
}

// console.log([1,2,2,3,3,3].uniq()) //=> [1,2,3]

Array.prototype.twosum = function() {
    let hash = {}
    let arr = []
    for (let i = 0; i < this.length; i++){
        hash[this[i]] = i

        if (hash[-this[i]]) {
            arr.push([hash[-this[i]], i])
        }
    }
    return arr
}

// console.log([10, 12, 15, -15, -12].twosum())

Array.prototype.transpose = function() {
    let resArr = []

    for (let i=0; i<this[i].length; i++) {
        let subArr = []
        for (let j=0; j<this.length; j++) {
            subArr.push(this[j][i])
        }
        resArr.push(subArr)
    }
    return resArr
}

// console.log([[1,2], [3,4], [5,6]].transpose())

