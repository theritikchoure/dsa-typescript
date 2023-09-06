# ZTMDSA

## Big O

Big O is a mathematical notation commonly used to describe the impact on time or space as input size `n` increases. We are mostly interested in discussing the worst case of an algorithm, but it is also beneficial to compare algorithms in their average and best case scenarios. Seven Big O notations commonly used in algorithm complexity analysis are discussed in the following sections.

```ASCII
[Figure 1] Schematic diagram of Big O for common run times from fastest to slowest.

              O(1)                       O(Log n)                         O(n)
 ▲                              ▲                              ▲
 │                              │                              │
 │                              │                              │                      .
 │                              │                              │                    .
 │                              │                              │                  .
 │                              │                              │                .
 │                              │                              │              .
t│                             t│                      ...    t│            .
 │                              │              .........       │          .
 │                              │         ......               │        .
 │                              │     .....                    │      .
 │                              │   ...                        │    .
 │.........................     │ ..                           │  .
 │                              │.                             │.
 └────────────────────────►     └────────────────────────►     └────────────────────────►
              n                              n                              n

           O(n*Log n)                    O(Log 2^n)                       O(2^n)
 ▲                     .        ▲            .                 ▲        .
 │                    ..        │            .                 │        .
 │                    .         │            .                 │        .
 │                    .         │            .                 │        .
 │                    .         │            .                 │        .
 │                   .          │            .                 │       .
 │                  ..          │           .                  │       .
t│                 ..          t│          .                  t│      .
 │               ..             │         .                    │     .
 │              ..              │        .                     │    .
 │           ....               │       .                      │    .
 │       . . .                  │     ..                       │   .
 │   .....                      │  ...                         │  .
 │...                           │...                           │..
 └────────────────────────►     └────────────────────────►     └────────────────────────►
              n                              n                              n

              O(n!)
 ▲    .
 │    .
 │    .
 │    .
 │    .
 │    .
 │    .
t│    .
 │    .
 │   .
 │  .
 │ .
 │.
 └────────────────────────►
              n
```

To understand the big O notation, let us focus on time complexity and specifically examine the O(n) diagram. This diagram depicts a decline in algorithm performance as the input size increases. In contrast, the O(1) diagram represents an algorithm that consistently performs in constant time, with input size having no impact on its efficiency. Consequently, the latter algorithm generally outperforms the former.

However, it is essential to note that this is not always the case. A O(1) algorithm with a single time-consuming operation might be slower than a O(n) algorithm with multiple operations if the single operation in the first algorithm requires more time to complete than the collective operations in the second algorithm.

The Big O notation of an algorithm can be simplified using the following two rules:

1. Remove the constants. `O(n) + 2*O(n*Log n) + 3*O(K) + 5` is simplified to `O(n) + O(n*Log n) + O(K)`.
2. Remove non-dominant or slower terms. `O(n) + O(n*Log n) + O(K)` is simplified to `O(n*Log n)` because `O(n*Log n)` is the dominant term.

## Questions

The below table includes all the questions, which I have solved.

| S.No | Questions | 
| ------ | ------ |
| 1 | [Determine if the string is palindrome](./check_palindrome.ts) | 
| 2 | [Count character/letter that is most commonly used in string](./max_chars.ts) | 
| 3 |  [The classic fizzbuzz problem](./fizz_buzz.ts) | 
| 4 | [Chunk the array](./array_chunking.ts) | 
| 5 | [Check provided two strings are anagram of each others](./anagrams.ts) | 
| 6 | [Find linked list midpoint](./linkedlist_midpoint.ts) | 
| 7 | [Two sum problem](./two_sum.ts) | 