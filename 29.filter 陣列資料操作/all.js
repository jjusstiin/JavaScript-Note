//map處理成新陣列
const arr = [1,5,10];
const newArr = arr.filter(function(item){
    return item>=5;
})
console.log(newArr);

const newData = arr.map(function(item){
    return item>=5;
})
console.log(newData);

const scoreData = [
    {
        name : "小明",
        score: 88
    },
    {
        name : "小英",
        score: 63
    },
    {
        name : "小花",
        score: 53
    }
]

const filterScore = scoreData.filter(function(item){
    return item.score>=60;
})
console.log(filterScore);