//物件自陣列內
let market = [
    {
        bossName: 'Tom',
        bananaNum: 6,
        appleNum: 5,
        isClose: false
    },
    {
        bossName: 'John',
        bananaNum: 6,
        appleNum: 8,
        isClose: false
    }
];
console.log(market);
console.log(market[0]);
console.log(market[0].bossName);//選取陣列位置，讀去物件屬性
console.log(market.length);
//json格式 屬性會用""包起來

let home = {
    motherStatus:{
    motherName: "Mary",
    age: 30,
    },
    fatherStatus:{
    fatherName: "Mark",
    age: 32,
    },
    dogs: 4
}
console.log(home);

let data = {
    "contentType": "application/json; charset=utf-8",
    "isImage": false,
    "data": {
      "XML_Head": {
        "Listname": "1",
        "Language": "C",
        "Orgname": "397000000A",
        "Updatetime": "2021/01/20 08:40:00",
        "Infos": {
          "Info": [
            {
              "Id": "C1_397000000A_000230",
              "Status": "2",
              "Name": "田寮月世界",
              "Zone": "",
              "Toldescribe": "田寮「月世界」特殊景觀在地理學上稱為「惡地」，是由於地殼的「回春作用」，經年累月的經由雨水與河水強烈侵蝕，將泥沙堆積在泥岩上，地層變動後，泥沙更與泥岩混合再經由風化、沉積作用，形成今日地貌，僅適於耐旱、耐鹽的淺根植物（如：箭竹）、濱海植物生長。從田寮到旗山台28線沿路除了月世界景觀，還有大小不等的二十多個泥火山，常呈現間歇性的噴發現象，噴發的規模則視地底天然氣與泥漿的累積壓力而定，噴發後的泥流堆積地區。",
              "Description": "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
              "Tel": "886-7-6367036",
              "Add": "高雄市823田寮區崇德里月球路36號",
              "Zipcode": "823",
              "Travellinginfo": "無障礙交通：高鐵台南站 → 沙旗美月世界快線公車 → 月世界 → 旗山高鐵左營站 → 旗美快線公車 → 旗山 → 轉搭沙旗美月世界快線公車 → 月世界",
              "Opentime": "遊客中心：09:00–17:00月世界：全天候開放",
              "Gov": "397000000A",
              "Px": "120.38898",
              "Py": "22.88600"
            },
            {
              "Id": "C1_397000000A_000234",
              "Status": "2",
              "Name": "西子灣風景區",
              "Zone": "",
              "Toldescribe": "西子灣以夕陽美景及天然礁石聞名，區內包括了西子灣海水浴場、海濱公園、打狗英國領事館....等景點；可觀海景、遠眺高雄港；海水浴場極富熱帶氣息、南國風情，每當夜幕低垂，晚霞的照耀，漁船燈火閃爍其間，呈現海天一色美景。",
              "Description": "西子灣以夕陽美景及天然礁石聞名，區內包括了西子灣海水浴場、海濱公園、打狗英國領事館....等景點。",
              "Tel": "886-7-5250005",
              "Add": "高雄市804鼓山區蓮海路51號",
              "Zipcode": "804",
              "Travellinginfo": "搭高鐵至左營站下或搭臺鐵至高雄站下 → 轉搭高雄捷運至西子灣站下 → 轉搭高雄市公車(99路、橘1A路)至西子灣站下。",
              "Opentime": "西子灣海水浴場：10:00–16:00",
              "Gov": "397000000A",
              "Px": "120.26391",
              "Py": "22.62442"
            }
          ]
        }
      }
    },
    "id": "b69ffff9-23a5-44a6-a398-089b11a5f84c",
    "success": true
  }

console.log(data.isImage);
console.log(data.data.XML_Head.Listname);
console.log(data.data.XML_Head.Infos.Info[0].Name);
console.log(data.data.XML_Head.Infos.Info[1].Name);
console.log(data["data"]["XML_Head"]["Infos"]["Info"][1]["Name"]);//讀取物件也可以用這種寫法