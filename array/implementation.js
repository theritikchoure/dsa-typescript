var MyArray = /** @class */ (function () {
    function MyArray(length) {
        if (length === void 0) { length = 0; }
        this.length = length;
        this.data = {};
    }
    // Push element to the end of the array
    MyArray.prototype.push = function (value) {
        this.data[this.length] = value; // Assign the value to the next available index
        this.length++; // Increment the length
    };
    // Insert element at a specific index
    MyArray.prototype.insert = function (index, value) {
        if (index > this.length || index < 0) {
            console.log('Index out of bounds');
            return;
        }
        // Shift elements to the right to make space for the new element
        for (var i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = value; // Insert the value at the specified index
        this.length++; // Increment the length
    };
    // Remove and return the last element from the array
    MyArray.prototype.pop = function () {
        if (this.length === 0) {
            console.log('Array is empty');
            return undefined;
        }
        var lastItem = this.data[this.length - 1]; // Get the last item
        delete this.data[this.length - 1]; // Remove the last item from the data
        this.length--; // Decrement the length
        return lastItem; // Return the removed item
    };
    // Delete element at a specific index
    MyArray.prototype.remove = function (index) {
        if (index >= this.length || index < 0) {
            console.log('Index out of bounds');
            return;
        }
        // Shift elements to the left to fill the gap
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]; // Remove the last item
        this.length--; // Decrement the length
    };
    // Slice the array from start to end (exclusive)
    MyArray.prototype.slice = function (start, end) {
        if (start >= end || start < 0 || end > this.length) {
            console.log('Invalid slice indices');
            return;
        }
        var diff = end - start;
        // Shift elements to the left to overwrite the sliced portion
        for (var i = start; i < this.length - diff; i++) {
            this.data[i] = this.data[i + diff];
        }
        // Delete the extra elements at the end
        for (var i = this.length - 1; i >= this.length - diff - 1; i--) {
            delete this.data[i];
        }
        this.length = this.length - diff - 1; // Update the length
    };
    return MyArray;
}());
var arr = new MyArray();
console.log(arr);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
console.log(arr);
arr.push(10);
console.log(arr);
console.log(arr.pop());
console.log(arr.length);
arr.insert(4, 99);
console.log(arr);
arr.remove(2);
console.log(arr);
arr.push(100);
arr.push(200);
arr.push(300);
console.log(arr);
arr.slice(2, 4);
console.log(arr);
