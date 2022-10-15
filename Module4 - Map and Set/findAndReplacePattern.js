/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 * 
 * 
 * 
 Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
Example 2:

Input: words = ["a","b","c"], pattern = "a"
Output: ["a","b","c"]
 

Constraints:

1 <= pattern.length <= 20
1 <= words.length <= 50
words[i].length == pattern.length
pattern and words[i] are lowercase English letters.
 * 
 */

 var findAndReplacePattern = function(words, pattern) {

    let patternMap = new Map();
    let answer = [];
    pattern.split("").forEach((pattern, i) => {
        if(patternMap.has(pattern)){
            patternMap.set(pattern, [...patternMap.get(pattern), i]);
        }else{
            patternMap.set(pattern, [i]);
        }
    });

    words.forEach((word)=>{
    let wordsMap = new Map();
        word.split("").forEach((item, i) => {
            if(wordsMap.has(item)){
                wordsMap.set(item, [...wordsMap.get(item), i]);
            }else{
                wordsMap.set(item, [i]);
            }
        });

        let result = [...wordsMap.values()]
        if(JSON.stringify(result) === JSON.stringify([...patternMap.values()])){
            answer.push(word);
        }
    })
    return answer;
};

// console.log(findAndReplacePattern(["qqcojjumwp","mqidrqudxu","xwrvnueult","lubbymxyro","fcvxuskhcl"], "rdzkpkbmda"));
console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));