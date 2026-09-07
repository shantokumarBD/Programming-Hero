// set time out

// const time = setTimeout(()=>{
//     console.log('hi');
// },3000)

// clearTimeout(time)

// console.log('ok');

// set interval
// set interval
// set interval

let count = 0;

const interID = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) {
    clearInterval(interID);
  }
}, 1000);

// local time with set interval
// local time with set interval
// local time with set interval

// setInterval(()=>{
//     let date = new Date()
//     let time = date.toLocaleTimeString()
//     console.log(time);
// },1000)
