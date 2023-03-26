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
    resolve('all is good.');
    reject('all is bad.');
});
mixtPromises
    .then((val) => console.log('I promise that ' + val))
    .catch((val) => console.log('I promise that ' + val));

//promise dog can do agility exercices
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


//promise all
const goPromise = (
    value: number, delay: number, fail: boolean
): Promise<number> =>{
    return new Promise <number> ((resolve, reject) => {
        setTimeout(
            ()=> fail? reject(value) : resolve(value), delay
        );
    });
};

const totalPromise = Promise.all<number>(
    [
        goPromise(0, 0, false),
        goPromise(1, 1000, false),
        goPromise(2, 2000, false),
    ]);

console.time('settled-in');
totalPromise.then((value) => {
    console.log('Resolved:', value);
} ).catch( ( Error )  => {
    console.log('Rejected:', Error);
} ).finally(()=> {
console.timeEnd('settled-in');
});

//Promise.allSettled
interface PromiseFulfilledResult<T> {
    status: "fulfilled";
    value: T; // promise resolved value
}
interface PromiseRejectedResult {
    status: "rejected";
    reason: any; // promise rejected value
}
type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

//async await
const begin = (callback: { (text: any): void; (arg0: string): void; }) => {
    setTimeout(() => {
      callback('Hi');
      setTimeout(() => {
        callback('We Welcome you');
        setTimeout(() => {
          callback('Doing Async Await Using TypeScript');
        }, 100);
      }, 100);
    }, 100);
  };
  begin(text => console.log(text));

  const wait = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

  const beginAsync = async (callback: { (text: any): void; (arg0: string): void; }) => {
    await wait(1000);
    callback('Hi');
    await wait(1000);
    callback('We Welcome you');
    await wait(1000);
    callback('Doing Async Await Using TypeScript');
  };
  beginAsync(text => console.log(text));
