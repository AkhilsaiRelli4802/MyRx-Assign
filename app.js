// We are given two arrays that represent the arrival and departure times of trains,
//  the task is to find the minimum number of platforms required so that no train waits. 
// Examples: 
// Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}, dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00} 
// Output: 3 
// Explanation: There are at-most three trains at a time (time between 9:40 to 12:00) 
// Input: arr[] = {9:00, 9:40}, dep[] = {9:10, 12:00} 
// Output: 1 
// Explanation: Only one platform is needed. 

function findplatforms(arr,dep){
    arr.sort((a,b)=>a-b)
    dep.sort((a,b)=>a-b)
    let needeedplatforms=1
    let result =1 
    let i =1
    let j=0
    while (i<arr.length && j<dep.length){
        if (arr[i]<=dep[j]){
            needeedplatforms++
            i++
        }
        else{
            needeedplatforms--
            j++
        }
        result=Math.max(result,needeedplatforms)
    }
    return result
}

// let arr=[900, 940, 950, 1100, 1500, 1800]
// let dep = [910, 1200, 1120, 1130, 1900, 2000]

let arr =[900, 940]
let dep = [910, 1200]
let a=findplatforms(arr,dep)
console.log(a);




