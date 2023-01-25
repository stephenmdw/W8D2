function range(start,end){
    if (start === end) { return []; }

    let arr = range(start, end-1);
    arr.push(end-1);
    return arr;
}

// console.log(range(1, 10))

function recSum(arr){
    if (arr.length === 0){ return 0 }
    
    return arr[0] + recSum(arr.slice(1, arr.length))
}

// console.log(recSum([1,2,3,4,5,6]))

function exponent1 (base, exp) {
    if (exp === 0){
        return 1;
    }

    return base * exponent1(base, exp - 1)
}

// console.log(exponent1(2,8)) 
function exponent2 (base, exp) {
    if (exp === 0) {
        return 1;
    }
    else if (exp === 1) {
        return base
    }
    else if (exp % 2 == 0) {
        return exponent2(base, exp/2) ** 2
    }
    else {
        return base * (exponent2(base, (exp - 1) / 2 ** 2))
    }
}
//console.log(exponent2(2,8)) 

function recFib(n) {
    if (n === 1){
        return [0]
    } else if (n === 2) {
        return [0, 1]
    }
    let arr = recFib(n-1)
    n--
    arr.push(arr[n-1] + arr[n-2])
    return arr
}

// console.log(recFib(7))

function deepDup(arr) {
    if (!Array.isArray(arr)){
        return arr
    }
    let newArr= []
    for (var i = 0; i < arr.length; i++){
        newArr.push(deepDup(arr[i]))
    }
    return newArr
}

// console.log(deepDup([1, 2, [[3, 4], 5, [6, 7]]]))

function bsearch(arr, target) {
    let mid = Math.floor(arr.length / 2)
    if (arr[mid] === target) {
        return mid
    }
    if (target < arr[mid]) {
        return bsearch(arr.slice(0, mid), target)
    } else {
        return mid + bsearch(arr.slice(mid+1), target) + 1
    } 
    return -1
}
// let arr = [1,2,3,4,5,6,7]
// console.log(bsearch(arr, 4))

function mergesort(arr) {
    if (arr.length < 2 ) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
//    console.log(left);
//    console.log(right);
    
    return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
    let arr = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left, right);
}

// console.log(mergesort([4, 12, 3, 67, 3, 5, 1]))

function subsets(arr) {
    if (arr.length === 0 ){
        return [[]]
    }

    base = subsets(arr.slice(0, arr.length -1))
    return base.concat(base.map(
        ele => ele.concat(arr[arr.length-1])))
}

// console.log(subsets([1,2,3]))