// Create navigator.geolocation.getCurrentPosition promise 
//and write the code to use promise
function getCurrentLocation(time){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                try {
                    resolve(position);
                } catch (error) {
                    reject(error);
                }
            })
        }, time);
    })
}
getCurrentLocation(2000)
.then((position) => {
    console.log('Users Position found : ', position);
})
.catch((error)=>{
    console.warn('Error getting users location', error);
});
