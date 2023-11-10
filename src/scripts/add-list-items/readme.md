# Add List Items (/add-list-items/)

#### Complexity: Medium
-----

There are two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

3 -> 5 -> 3

4 -> 7 -> 3

----

7 -> 2 -> 7


**Input:** l1 = \[3,5,3\], l2 = \[4,7,3\]
**Output:** \[7,2,7\]
**Explanation:** 352 + 473 = 727.

**Example 2:**

**Input:** l1 = \[9,9,9,9,9,9\], l2 = \[9,9,9,9\]
**Output:** \[8,9,9,9,0,0,1\]

**Example 3:**

**Input:** l1 = \[0\], l2 = \[0\]
**Output:** \[0\]

**Constraints:**

*   `0 <= Node item value <= 9`
*   The number of nodes in each linked list is in the range `[1, 100]`.
*   The list represents a number that does not have leading zeros.