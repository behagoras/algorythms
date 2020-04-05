/* eslint-disable no-console */
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

const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11],
];

const findNodesWithZeroAndOneParents = (parentPairs) => {
  const repetitions = [];
  const repetitionsParents = [];

  parentPairs.forEach((tuple) => {
    const parent = tuple[0];
    const child = tuple[1];

    repetitions[child] = repetitions[child]
      ? repetitions[child] + 1
      : repetitions[child] = 1;

    repetitionsParents[parent] = repetitionsParents[parent]
      ? repetitionsParents[parent] + 1
      : repetitionsParents[parent] = 1;
  });

  console.log('repetitions', repetitions);

  console.log(Array.isArray(repetitions));
  const zero = [];
  const individuals = [];

  for (let i = 1; i <= 11; i += 1) {
    if (!repetitions[i]) {
      zero.push(i);
    } else if (repetitions[i] === 1) {
      individuals.push(i);
    }
  }


  console.log('parentPairs', parentPairs);
  console.log('Zero', zero);
  console.log('individuals', individuals);

  // [1, 2, 4],       // Individuals with zero parents
  // [5, 7, 8, 9, 11] // Individuals with exactly one parent
};


findNodesWithZeroAndOneParents(parentChildPairs);
