let tomStatus = {
    name: "Tom",
    age: "30",
    status: ""
}

tomStatus.degree = 36.5;

if(tomStatus.degree<=37.5){
    console.log("您可以進入");
    tomStatus.status = "您可以進入";
}else{
    console.log("您不可以進入")
    tomStatus.status = "您不可以進入";
}

console.log(tomStatus);

let peopleStatus = [
    {
        name: "Tom",
        age: "30",
        status: ""
    }
]

peopleStatus[0].degree = 39.5;
console.log(peopleStatus[0].degree);

if(peopleStatus[0].degree>=37.5){
    peopleStatus[0].status = "you're not able to enter.";
    console.log("you're not able to enter");
}else{
    peopleStatus[0].status = "welcome.";
    console.log("welcome");
}