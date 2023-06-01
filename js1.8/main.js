const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = arr1.map(n => (n+10)*3)
console.log(arr2)


const years = [1990,1992,1994,2001,2002,2005]
console.log(years.map(n=>(2023-n)))

const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];

console.log(persons.filter(n => n.age >= 18))

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
      newArray.push(
        fn(arr[i])
      );
    }
    return newArray;
  }
  const lenArray = mapForEach(strArray, function(item) {
    console.log(item)
    return item.length > 3 ? 0 : 1;
  });

  console.log(lenArray);