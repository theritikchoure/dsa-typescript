# Amortized Time Complexity

Amortized time complexity is a way to describe the average time taken per operation in a data structure or algorithm when considering a sequence of operations over time. It accounts for both fast and slow operations and provides a more accurate average than simply looking at the worst-case scenario.

In the context of hash tables, the amortized time complexity is often used to describe the average performance of operations like insertions, deletions, and searches. Hash tables are designed to have an average-case time complexity of O(1) for these operations, meaning that on average, they take constant time.

However, in practice, there can be cases where a hash table operation takes longer than O(1), such as when a collision occurs (i.e., when two keys map to the same hash value and need to be resolved). To account for these occasional slower operations, we use the concept of amortized analysis.

Amortized analysis considers a sequence of operations and calculates the average time per operation over that sequence. For hash tables, even though an individual operation might take longer in some cases (e.g., resolving collisions), the amortized analysis looks at the overall behavior of the data structure.

In the case of hash tables with open addressing and resizing, the amortized time complexity for insertion, deletion, and search operations remains O(1) because the occasional slower operations (due to collisions) are balanced out by faster operations when the table is resized. This makes hash tables with open addressing and resizing suitable for average-case constant-time operations, even though individual operations may vary.

So, when we say that the hash table has an amortized time complexity of O(1) for insertions, deletions, and searches, we are accounting for the occasional slower operations due to collisions and resizing while considering a sequence of operations.


_Amortized time complexity is a method used to analyze the average time per operation over a sequence of operations in a data structure or algorithm. It provides a way to understand the overall efficiency, even when some operations are occasionally more time-consuming than others._

## Dynamic Array Example

Let's illustrate the concept of amortized time complexity with a dynamic array (resizable array) that can grow in size. Consider the following sequence of operations and their analysis:

1. **Append 1 to the array:**
   - Initial array size: 1
   - Time: O(1)

2. **Append 2 to the array:**
   - Array size: 2 (resizing not needed)
   - Time: O(1)

3. **Append 3 to the array:**
   - Array size: 3 (resizing not needed)
   - Time: O(1)

4. **Append 4 to the array:**
   - Array size: 4 (resizing not needed)
   - Time: O(1)

5. **Append 5 to the array:**
   - Array size: 5 (resizing not needed)
   - Time: O(1)

6. **Append 6 to the array:**
   - Array size: 6 (resizing not needed)
   - Time: O(1)

7. **Append 7 to the array:**
   - Array size: 7 (resizing not needed)
   - Time: O(1)

8. **Append 8 to the array:**
   - Array size: 8 (resizing not needed)
   - Time: O(1)

9. **Append 9 to the array:**
   - Array size: 9 (resizing not needed)
   - Time: O(1)

10. **Append 10 to the array:**
    - Array size: 10 (resizing not needed)
    - Time: O(1)

11. **Append 11 to the array:**
    - Array size: 10 (reached capacity)
    - Resize the array (copying 10 elements) takes O(n) time.
    - Then, append 11 takes O(1) time.

Now, let's analyze the total time spent and calculate the amortized time per operation:

- The first 10 appends took 10 * O(1) = O(10) time.
- The resizing operation took O(n) time, where n is the number of elements copied (10 in this case).
- The 11th append took O(1) time.

Total time spent = O(10) + O(n) + O(1)

Amortized Time Per Operation = (O(10) + O(n) + O(1)) / 11

As n (number of elements copied during resizing) is 10, we have:

Amortized Time Per Operation = (O(10) + O(10) + O(1)) / 11

Simplifying further:

Amortized Time Per Operation = (O(20) + O(1)) / 11

Amortized Time Per Operation = O(21 / 11)

Amortized Time Per Operation ≈ O(1.909)

So, the amortized time per operation is approximately O(1.909), which is very close to O(1). This demonstrates how amortized analysis helps us understand the average efficiency of data structures over sequences of operations, even when some operations are occasionally more time-consuming.

## Resources 

1. https://tarunjain07.medium.com/amortized-complexity-analysis-note-4172a0d16852
2. https://www.youtube.com/watch?v=MTl8djZFWE0
