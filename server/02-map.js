// const letters = ['a', 'b', 'c' ];

// const newArray = letters.map(item => item + '++');
// // const newArray = [];
// // for (let i = 0; i < letters.length; i++) {
// //     const element = letters[i];
// //     newArray.push(element + '++');
// // };

// console.log(`Original ${letters}`);
// console.log(`Nuevo ${newArray}`);

const number = [2, 4, 5, 6];

function solution(array, num) {
	return newArray = array.map(item => (item * num));
}; 

document.body.innerHTML += `<div><p> solucion: ${solution([2, 4, 5, 6], 2)}</p></div>`;


const solutionX = (array) => {
  return array.map(item => item.name.lastName)
};



console.log (solutionX([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
]));