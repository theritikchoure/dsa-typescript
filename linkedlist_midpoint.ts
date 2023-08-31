class newNode {
    value: any;
    next: any;

    constructor( value: any ) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: newNode;
    tail: newNode;
    length: number;

    constructor( value: any ) {
        this.head = new newNode( value );
        this.tail = this.head;
        this.length = 1;
    }

    get( position: number ): void {
        let current: newNode = this.traverseToIndex( position );
        console.log( current.value );
    }

    append( value: any ): void {
        let node = new newNode( value );
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    print( message: string | null = null ): void {
        if ( message ) {
            console.log( `\n${message}` );
        }

        let current: newNode = this.head;

        while ( current !== null ) {
            console.log( current.value );
            current = current.next;
        }
    }

    traverseToIndex( index: number ) {
        let counter:number = 0;
        let current = this.head;

        while ( counter < index - 1 ) {
            current = current.next;
            counter++;
        }

        return current;
    }

    // Brute force 
    findMidNode(): void {
        let current:newNode = this.head;
        let totalNode:number = 0;

        // 1st - calculate total nodes
        while ( current !== null ) {
            current = current.next;
            totalNode++;
        }

        // 2nd - find mid node number
        let mid:number = Math.floor( totalNode / 2 ) + 1;
        let counter:number = 1;
        let midNode:newNode = this.head;

        // 3rd - traverse to mid node
        while ( counter < mid ) {
            midNode = midNode.next;
            counter++;
        }

        console.log( midNode );
    }

    // Optimize solution - tortoise method (two pointer method)
    // slow pointer run one step, fast pointer run two steps
    // so when fast pointer reach the last node, slow pointer reach the mid node
    findMidNode2(): void {
        let current: newNode = this.head;
        let slow: newNode = current; // slow pointer
        let fast: newNode = current; // fast pointer

        while ( fast !== null && fast.next !== null ) {
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log( slow );
    }
}

let ll:LinkedList = new LinkedList( 10 );

ll.append( 12 );
ll.append( 15 );

ll.append( 8 );
ll.append( 6 );
ll.append( 4 );

ll.findMidNode();
ll.findMidNode2();
