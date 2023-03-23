// PROMISE-1
var mypromiseSuccess = new Promise <number> ((resolve) => {
    console.log("Demo to show promise in Typescript!");
    resolve(100);
});
mypromiseSuccess
    .then((value) => {
        console.log("Value form the promse function is " + (value + 200))
    })
    .catch((err: string) => console.log("inside error block " + err));

// PROMISE-2
var mypromiseError = new Promise((reject) => {
    console.log("Demo to show promise in Typescript!!");
    reject("this is an reject response form the promise!!!");
});
mypromiseError
    .then((val) => {
        console.log("Value form the promse function is " + val)
    })
    .catch((err) => console.log("inside error block " + err));

//Promises mixt?
var mixtPromises = new Promise<string>((resolve, reject) => {
    console.log('maxing mist promises');
    resolve('all is good');
    reject('all is bad');
});
mixtPromises
    .then((val) => console.log('I promise that ' + val))
    .catch((val) => console.log('I promise that ' + val));

//promis dog can do agility exercices
var promiseToCheckDogAge = new Promise<number>((resolve, reject) => {
    let myDogAge = 12;
    if(myDogAge > 10){
        reject('He needs moderate exercices.');
    }
    resolve(myDogAge);
})
promiseToCheckDogAge
    .then((age) => console.log(`He's ` + age +  `. He's agile.`))
    .catch((error) => console.log(error));

