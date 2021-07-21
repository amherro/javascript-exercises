const reverseString = function(word) {
    let splitWord = word.split('');
    let reverseArr = splitWord.reverse();
    let revString = reverseArr.join('');
    return revString;
};
reverseString('hello')
module.exports = reverseString;

