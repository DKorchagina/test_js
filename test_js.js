"use strict";

// Yor code here ...
//Ваш код реализации функции dscount
function dscount(str, s1, s2){
    let result = str.toLowerCase().match(new RegExp(s1+s2), 'i');
    let count = 0;
    while (result!=null){
        count += 1;
        str = str.toLowerCase().slice(result.index+1)
        result = str.match(new RegExp(s1+s2), 'i');
    }
   return count;
}

function checkSyntax(str){
    let input_set = ['<', '[', '{', '('];
    let output_set = ['>', ']', '}', ')'];
    let stack = []
    for (let item of str){
        if (input_set.includes(item)){
            stack.push(item)
        } else if (output_set.indexOf(item) != -1){
            if (input_set.indexOf(stack.pop()) != output_set.indexOf(item)){
                return 1;
            }
        }
    }
    if (stack.length === 0){
        return 0;
    } else {
        return 1;}
}

//массив обходится поэлементно. Для каждого элемента ищется в списке число, не хватающее до суммы с 
//заданным параметром. Если такое есть, то индексы записываются в массив с результатом, цикл завершается
function findSumOfMass(mass, a){
    let result = [];
    for (let [i, item] of mass.entries()){
        let cur = mass.indexOf(a-item);
        if (cur != -1){
            result.push(i);
            result.push(cur);
            break;
        }
    }
    return result;
}

function parseUrl(str){
    const url = new URL(str);
    return url;
}

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests of 1 task passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}

try {
    testCheckSyntax(checkSyntax, ["---(++++)----"], 0);
    testCheckSyntax(checkSyntax, [""], 0);
    testCheckSyntax(checkSyntax, ["before ( middle []) after "], 0);
    testCheckSyntax(checkSyntax, [") ("], 1);
    testCheckSyntax(checkSyntax, ["} {"], 1);
    testCheckSyntax(checkSyntax, ["<(  >)"], 1);
    testCheckSyntax(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
    testCheckSyntax(checkSyntax, ["   (      [)"], 1);
    console.info("Congratulations! All tests of 2 task passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function testCheckSyntax(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `The result should be: ${count}`);
    if (!r) throw "Test failed!";
}

try{
    testFindSum(findSumOfMass, [[3, 5, 11, 20], 8], [0, 1]);
    testFindSum(findSumOfMass, [[3, 5, 11, 20], 1], []);
    testFindSum(findSumOfMass, [[3, 5, 5, 20], 8], [0, 1]);
    console.info("Congratulations! All tests of 3 task passed.");
} catch(e) {
    console.error(e);
}
function testFindSum(call, args, count, n) {
    let r;
    if (count!=[]){
        r = (call.apply(n, args).toString() === count.toString());
    }
    else{
        console.log('no');
        r = (call.apply(n, args) === count);
    }
    console.assert(r, `The result should be: ${count}`);
    if (!r) throw "Test failed!";
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )
