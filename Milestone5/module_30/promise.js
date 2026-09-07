const promise = new Promise((resolve, reject)=>{
    let success = true

    if(success){
        resolve("promise resolved")
    }else{
        reject("promise rejected")
    }
})

// promise.then( (res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e);
// })



// fatch data 

const fatchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(e => {
        console.log(e);
        
    })
}

fatchData()