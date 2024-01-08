const dataJSONinitial = [
    {
        "name": "Безлимитный 300",
        "price": "300",
        "speed": "10",
        "info": "Объем включенного трафика неограничен",
        "id": "0",
        "category":"old"
        
    },
    {
        "name": "Безлимитный 450",
        "price": "450",
        "speed": "50",
        "info": "Объем включенного трафика неограничен",
        "id": "1",
        "category":"old"
        
    },
    {
        "name": "Безлимитный 550",
        "price": "550",
        "speed": "100",
        "info": "Объем включенного трафика неограничен",
        "id": "2",
        "category":"new"
        
    },
    {
        "name": "Безлимитный 1000",
        "price": "1000",
        "speed": "200",
        "info": "Объем включенного трафика неограничен",
        "id": "3",
        "category":"old"
        
    },
   
];
const dataJSON = JSON.stringify(dataJSONinitial);
export const data = JSON.parse(dataJSON);
//console.log(data);

//export const data;