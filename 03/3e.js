function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function (a, b) { return b.length - a.length; });
    return longestWord[0];
}

let result = findLongestWord("Rekurencja, rekursja – odwoływanie się funkcji lub definicji do samej siebie. W logice wnioskowanie rekurencyjne opiera się na założeniu istnienia pewnego stanu początkowego oraz zdania stanowiącego podstawę wnioskowania");
console.log(result);