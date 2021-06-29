//promise that resolves after set time
function resolvePromise(resolveAfter){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, resolveAfter * 1000);
    })
}
resolvePromise(8).then((res)=> {
    console.log(res);
    console.log('Iam called asynchronously');
});

// promise resolve using async/await
async function resolvePromiseAsync(){
    const result = await resolvePromise(8);
    console.log('result',result);
}
resolvePromiseAsync();

//create setTimeout promise and consume the promise
function setTimeoutPromise(givenTime){
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve();
        }, givenTime);
    });
}
setTimeoutPromise(2000).then(() => {
    console.log('Called after given time 2 sec');
});
