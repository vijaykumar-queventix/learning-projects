// async/awit
// task : api student
// 1 : after 2sec display roll no.
// 2 : after 2sec display name and age


//producing promise
const pobj1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        resolve(roll_no);
        reject("Error :");
    }, 2000);
});

// producing promise
const getBioData = (indexData) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexData) => {
            let bioData = {
                name: "demo",
                age: 15
            }
            resolve(`My rollno is ${indexData}, My name is ${bioData.name} and I am ${bioData.age} years old.`)
        }, 2000, indexData);
    });
}



async function getData (){
    var rollnodata = await pobj1;
    var getNameData = await getBioData(rollnodata[2]);
    console.log(rollnodata);
    console.log(getNameData )
}

getData();

