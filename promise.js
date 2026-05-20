const myPromise=new Promise((resolve,reject)=>{
    let age=19;
    if (age>=18){
        resolve("eligible for vote")
    }else(
        reject("not eligible for vote")
    )
} 
checkvote();
        myPromise
        .then((response) => console.log(response))                //.then will take a callback
        .catch((error) => console.log(error.message));

        const checkvote= async() => {
            const response = myPromise;
            console.log(response);
        }