const letters = ['a', 'b', 'c'];

//For
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(`for ${element}`);
}


//Array
letters.forEach(item => console.log(`forEach ${item}`));