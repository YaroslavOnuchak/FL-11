//task0.
function getNumbers(x){
    let mixArr = x.split('');
    let justNumber = [];
    let j=0;
    for ( let i = 0; i <mixArr.length; i++){
        if (!isNaN(mixArr[i])){
       justNumber[j]=parseInt(mixArr[i]);
        j++;
        }
    }
    return justNumber;
    }
//task1.
function findTypes(...args){
    let mixObj = {};
    let keys;
    for(let value of args){
        keys = typeof value;
        if(mixObj.hasOwnProperty(keys)){
           mixObj[keys] += 1
        }else{
            mixObj[keys] = 1
        }
    }
    return mixObj;
}
//task2.
function executeforEach(array, fun){
    for(let i = 0; i < array.length; i++){
        fun(array[i]);
    }
}
//task3.
function mapArrey(array, fun){
    let returnArrey = [];
    executeforEach(array, function(item){
        returnArrey.push(fun(item));
    });
    return returnArrey;
}
//task4
function filterArray(array, fun) {
let filtArray = [];
executeforEach(array, function (item) {
    if (fun(item)){
        filtArray.push(item);
    }
});
return filtArray;
}
//task5.
function showFormattedDate(t) {
    let date = t.toDateString();
    let slic = 3;
    date = date.slice(slic);
    return `Date: ${date}`;
}
//task6.
function canConvertToDate(t) {
    let date = new Date(t);
    return !isNaN(date);
}
//task7.
function daysBetween(aData, bData) {
    let aDateMs = new Date(aData);
    let bDateMs = new Date(bData);
    let dayMs = 86400000;
    let dayBet = Math.abs(Math.floor((aDateMs - bDateMs)/dayMs));
    return dayBet;
}
//task8.
let dataInfo = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
function getAmountOfAdultPeople(data) {
    let adultDay = 6570;
    let adultArr = filterArray(data, function (item) {
   if (daysBetween(new Date(item[' birthday ']), new Date()) > adultDay) {
      return daysBetween(new Date(item[' birthday ']), new Date());
       }
    });
    return adultArr.length;
}
//task9.
function keys(obj) {
    let arrObj = [];
    for (let i in obj) {
        if (i) {
            arrObj.push(i);
        }
    }
    return arrObj;
}

//Task10.
function values(obj) {
    let arrVal = [];
    for (let i in obj) {
        if (i) {
            arrVal.push(obj[i]);
        }
    }
    return arrVal;
}