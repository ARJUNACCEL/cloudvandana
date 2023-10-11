const string = "hello , plz gib job :("
const result = reverse(string);

console.log('1).',result);


function reverse(string) {

  const words = string.split(' ');

  const reversedword = words.map(word => { return word.split('').reverse().join(''); });

  const result = reversedword.join(' ');

    return result;

}


const array=[32,18,423,24,1,2];

const result2=sort(array);

console.log('2).',result2);

function sort(array){
return array.sort((a,b)=>b-a);

}



