// Code your solution here

function findMatching(driversList, driversString){
    return driversList.filter(findCaseInsensitive);
    function findCaseInsensitive(a){
        a = a.toUpperCase();
        let b = driversString.toUpperCase();
        if (a === b){
            return true;
        }
        else{
            return false;
        }
    }
}

//let didMatch = findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], 'Bobby');


function fuzzyMatch(driversList, driversString){
    return driversList.filter(findLetters);
    function findLetters(a){
        a = a.toUpperCase();
        let b = driversString.toUpperCase();
        for (let i=0; i<=a.length;i++){
            if (a[i] != b[i]) {
                return false;
            }
            else return true;
        }
    }
}

//let didMatch = fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], 'Sa');

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversList, driversString){

    return driversList.filter(findCaseInsensitive);
    function findCaseInsensitive(a){
        let aName = a.name.toUpperCase();
        let b = driversString.toUpperCase();
        if (aName === b){
            return true;
        }
        else{
            return false;
        }
    }
}

let didMatch = matchName(drivers, 'Bobby');