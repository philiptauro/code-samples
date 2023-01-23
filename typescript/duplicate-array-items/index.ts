let intInputItems = [10,10, 15, 14, 20, 20];
let stringInputItems = ['hello', 'world', 'hey', 'Jude', 'hello', 'kitty'];
let booleanInputItems = [true,true, true, true, false, true];

export const processArrayAndFindDuplicates = <Type>(inputItems: Type[]) => {
    let duplicates: Type[] = [];
    let itemCounter: Record<any, number> = {};
    inputItems.map((arrayItem: Type) => {
        if (!itemCounter[arrayItem]) {
            itemCounter[arrayItem as string] = 1;
            return;
        }
        itemCounter[arrayItem as string] = itemCounter[arrayItem] + 1;
        if(itemCounter[arrayItem] === 2) {
            duplicates.push(arrayItem);
        }
    })
    return {duplicates, itemCounter};
}


console.log(processArrayAndFindDuplicates(intInputItems));
