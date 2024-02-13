let arr = ["Jazz","Blues"];

arr.push("Rock-n-Roll");

arr[Math.floor((arr.length -1) / 2)] = "Classics";

alert(arr.shift() );

arr.unshift("Rap", " Reggue");