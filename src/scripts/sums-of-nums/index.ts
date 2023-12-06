function sumOfNums(numberArray: number[], total: number): number[] {
    for(let i = 0; i < numberArray.length - 1; i++) {
        const keysWithoutCurrentObj: (string | number)[] = [...numberArray];
        keysWithoutCurrentObj.splice(i, 1, "X");
        const position = keysWithoutCurrentObj.indexOf(total - numberArray[i]);
        if(position > -1) {
          return [i, position];
        }
    };
    return [];
  };


console.log(sumOfNums([30, 20, 40], 60));
console.log(sumOfNums([10, 5], 15));
console.log(sumOfNums([20, 20], 40));
console.log(sumOfNums([10, 20], 40));
