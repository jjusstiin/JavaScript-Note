let home = {
    motherName : "Crystal",
    fatherName : "George",
    sisters : { 
        "bigSister" : "Mu",
        "secSister" : "Mumu"
    },
    cats : 3,
    isWakeUp: true,
    "001" : "hello" //JSON
};
//讀取特定屬性值
console.log(home);
console.log(home.motherName);
let georgeCats = home.cats;
console.log(georgeCats);
//另外一種讀取方式
let a = "motherName";
console.log(home['sisters']['secSister']);
console.log(home[a]);
console.log(home['001']);
//用home.001 會出問題要用 home['001']

//新增or修改物s件屬性
home.house = "big";
home.rooms = 7;
home.cats = 5;
home.cats+=1;
home.cats = home.cats-2;
console.log(home);
console.log(home.cats);

//刪除物件資料 delete
delete home.house;
console.log(home.house);

let ary =[];
let obj = {
    name : "justin"
};
ary.push(obj);
ary.push({
    name : "justin"
});
console.log(ary);


