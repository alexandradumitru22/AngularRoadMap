import { of } from "rxjs";
//observabilul
const myObservable = of(1, 2, 3);
//observerul
const myObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
//subscribe la observabil
myObservable.subscribe(myObserver);
