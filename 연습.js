function getStringAry (str, strLength) {
  const regex = /^[a-zA-Z]*$/
  const string = []
  for(let i = 0; i<strLength;i++){
      if(regex.test(str[i]) && regex.test(str[i+1])){
          string.push(str[i]+str[i+1]);
      }
  }
  const last = string[string.length-1]
  if(last === undefined){
      string.splice(-1,1)
  } else if(last.length !== 2){
      string.splice(-1,1)
  }
  return string;
}

function solution(str1, str2) {
  var answer = 0;
  
  let string1 = [];
  let string2 = [];
  let ratio = 0;
  
  const intersection = []
  
  string1 = getStringAry(str1, str1.length);
  string2 = getStringAry(str2, str2.length);
  
  for(let i = 0; i < string1.length; i++){
      string1[i] = string1[i].toLowerCase();
  }
  for(let i = 0; i < string2.length; i++){
      string2[i] = string2[i].toLowerCase();
      
  }
  
  for(word of string1){
      if(string2.find(w => w === word)){
          string1 = string1.filter(w => w !== word);
          intersection.push(word);
      }
  }
  
  const union = string1.concat(string2)
  
  console.log(union, intersection)
  
  if(union.length === 0){
      return answer = 65536
  }
  
  ratio = intersection.length / union.length;
  answer = Math.floor(65536*ratio);
  
  return answer;
}

console.log(solution())