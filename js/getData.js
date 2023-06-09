const obsArr = [];
const day1Arr = [];
const day2Arr = [];
const day3Arr= [];
const day4Arr= [];
const day5Arr = [];
let inputArr = [];
const numRows = 31;
const numCols = 6;

let inputObject = {
    year: "null",
    month: "null",
    place: "null",
    input : []

}
document.querySelector(".result-button").addEventListener("click", () => {
    getData();
    console.log(inputObject);
})

const createArr = (columnNumber) => {
    for(let i = 0; i < numRows; ++i){
        const elementValue = Number(document.getElementById(`array-${i}-${columnNumber}`).value)
        switch(columnNumber){
            case 0: {
                obsArr.push(elementValue);
                break;
            }

            case 1: {
                day1Arr.push(elementValue);
                break;
            }

            case 2: {
                day2Arr.push(elementValue);
                break;
            }

            case 3: {
                day3Arr.push(elementValue);
                break;
            }

            case 4: {
                day4Arr.push(elementValue);
                break;
            }

            case 5: {
                day5Arr.push(elementValue);
                break;
            }
        }
        
    }

}

const getData = () => {
    createArr(0);
    createArr(1);
    createArr(2);
    createArr(3);
    createArr(4);
    createArr(5);
    inputObject.year = document.getElementById("year").value
    inputObject.month = document.getElementById("month").value
    inputObject.place = document.getElementById("place").value
    inputObject.input = [obsArr,day1Arr,day2Arr,day3Arr,day4Arr,day5Arr]
    console.log(inputArr);
    localStorage.setItem('maxTempArr', JSON.stringify(inputObject));
    gotoTempPage();
}

const gotoTempPage = () => {
    window.location.href = "resultTemp.html"
}