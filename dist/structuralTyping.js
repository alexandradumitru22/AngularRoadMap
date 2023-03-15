"use strict";
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
let varNever = throwError('err');
let varAny;
varAny = 1;
varAny = 'any';
varAny = null;
varAny = true;
varAny = [];
varAny = {};
let varNull = null;
varNull = varNever;
varNull = varAny;
let varUndefined;
varUndefined = varAny;
varUndefined = varNever;
function voidFunction() { console.log('void void'); }
;
let varVoid = voidFunction();
console.log(varVoid);
varVoid = varAny;
varVoid = varUndefined;
varVoid = varNever;
let varObject;
varObject = [];
varObject = {};
varObject = varAny;
let varUnknown;
varUnknown = 1;
varUnknown = 'Unknown';
varUnknown = null;
varUnknown = false;
varUnknown = [];
varUnknown = {};
varUnknown = varObject;
varUnknown = varVoid;
varUnknown = varUndefined;
varUnknown = varNull;
varUnknown = varNever;
//# sourceMappingURL=structuralTyping.js.map