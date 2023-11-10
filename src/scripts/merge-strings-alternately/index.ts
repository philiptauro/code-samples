function mergeStringsAlternately(word1: string, word2: string): string {
    const word1Length = word1.length;
    const word2Length = word2.length;
    const areLoopsSameLength = word1Length === word2Length;
    const loopLength =  areLoopsSameLength ? word1Length : Math.min(word1.length, word2.length);
    let appendText: string = '';
    let outputString = '';
    if (!areLoopsSameLength) {
        appendText = (loopLength === word1Length ? word2 : word1).slice(loopLength);
    }
    for(let i = 0; i < loopLength; i++) {
        outputString += word1[i] + word2[i];
    }
    outputString += appendText;
    return outputString
};

const word1 = "lmn";
const word2 = "abc";

// const word1 = "lm";
// const word2 = "abcd";

// const word1 = "wxyz";
// const word2 = "de";

console.log(mergeStringsAlternately(word1, word2));
