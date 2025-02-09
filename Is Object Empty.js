var isEmpty = function(obj) {
    // return Object.keys(obj).length === 0;
    if (Object.keys(obj).length===0){
        return true;
    }else{
        return false;
    }
  
};

var obj1 = {}
console.log(isEmpty(obj1));
var obj2 = {'name': 'maham', 'role': 'software engineer'};
console.log(isEmpty(obj2));