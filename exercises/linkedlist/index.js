// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data){
    return this.head = new Node(data, this.head)
  }

  size(){
    let counter = 0;
    while(this.head){
      this.head = this.head.next
      counter++
    }
    return counter
  }

  getFirst(){
    return this.head
  }

  getLast(){
    while(this.head && this.head.next){
      this.head = this.head.next
    } 
    return this.head
  }
}

module.exports = { Node, LinkedList };
