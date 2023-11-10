class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const getListNumber = (l: ListNode | null): string => {
    if (!l) {
        return '';
    }
    const retVal = getListNumber(l.next);
    return l.val + retVal;
}

const generateListNodeFromNumber = (addedNum: string): ListNode => {
    if (parseInt(addedNum) < 10) {
        return new ListNode(parseInt(addedNum));
    }
    const numAsString = addedNum.split('');
    return new ListNode(parseInt(numAsString[0]), generateListNodeFromNumber(numAsString.slice(1).join('')));
}

export const addListItems = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const addedNum = parseInt(getListNumber(l1)) + parseInt(getListNumber(l2));
    return generateListNodeFromNumber(addedNum.toString());
}

const l1ListNode3 = new ListNode(1);
const l1ListNode2 = new ListNode(5, l1ListNode3);
const l1ListNode1 = new ListNode(3, l1ListNode2);

const l2ListNode3 = new ListNode(3);
const l2ListNode2 = new ListNode(7, l2ListNode3);
const l2ListNode1 = new ListNode(4, l2ListNode2);

// const l1ListNode6 = new ListNode(9);
// const l1ListNode5 = new ListNode(9, l1ListNode6);
// const l1ListNode4 = new ListNode(9, l1ListNode5);
// const l1ListNode3 = new ListNode(9, l1ListNode4);
// const l1ListNode2 = new ListNode(9, l1ListNode3);
// const l1ListNode1 = new ListNode(9, l1ListNode2);

// const l2ListNode4 = new ListNode(9);
// const l2ListNode3 = new ListNode(9, l2ListNode4);
// const l2ListNode2 = new ListNode(9, l2ListNode3);
// const l2ListNode1 = new ListNode(9, l2ListNode2);

// const l1 = [9,9,9,9,9,9];
// const l2 = [9,9,9,9];

// const l1ListNode1 = new ListNode(0);
// const l2ListNode1 = new ListNode(0);

console.log(JSON.stringify(addListItems(l1ListNode1, l2ListNode1), null, 2));
