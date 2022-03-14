let data = [
    {
        name:'Tom',
        sex:'male'
    },
    {
        neme:'Marry',
        sex:'female'
    },
    {
        neme:'Jane',
        sex:'female'
    },
    {
        neme:'Jenny',
        sex:'female'
    },
    {
        neme:'Joan',
        sex:'female'
    }
];
let maleTotal = 0;
let femaleTotal = 0;
let people = {
    male: 0,
    female:0
}
data.forEach(function(item,index){
    console.log(item.sex);
    if(item.sex=='female'){
        people.female+=1;
    }else{
        people.male+=1;
    }
})
console.log(people);