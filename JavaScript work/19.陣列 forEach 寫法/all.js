//市場調查資料
let data = [
    {
      name: "艾草",
      stir: true
    },
    {
      name: "Vivian",
      stir: false
    },
    {
      name: "筑子",
      stir: false
    },
    {
      name: "魚魚",
      stir: false
    },
    {
      name: "鵬聖",
      stir: true
    }
  ];
  const list = document.querySelector('ul')
  let listName = '';
  //統計人數
  let total = {
    stirPeople : [],
    noStirPeople : [],
    stir: 0,
    noStir: 0
  };
  
data.forEach(function(item,index){
    if(item.stir == true){
        total.stir +=1;
        total.stirPeople.push(item.name);
        listName += `<li>會攪拌咖哩飯的人有${item.name}</li>`
    }else{
        total.noStir+=1
        total.noStirPeople.push(item.name);
        listName += `<li>不會攪拌咖哩飯的人有${item.name}</li>`
    }
});
list.innerHTML=listName;
  console.log(`會攪拌咖哩飯人共有${total.stir}人，${total.stirPeople}`);
  console.log(`不會攪拌咖哩飯人共有${total.noStir}人，${total.noStirPeople}`);