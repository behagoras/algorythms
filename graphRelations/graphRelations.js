
/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.
For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
1   2    4
 \ /   / | \
  3   5  8  9
   \ / \     \
    6   7    11
Sample input/output (pseudodata):
parentChildPairs = [
    (1, 3), (2, 3), (3, 6), (5, 6),
    (5, 7), (4, 5), (4, 8), (4, 9), (9, 11)
]
Write a function that takes this data as input and returns two collections: one
containing all individuals with zero known parents, and one containing all
individuals with exactly one known parent.

const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11],
];

Output may be in any order:

n: number of pairs in the input
*/
// data as input and returns two collections
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
};
