class Node {
  /**
   * Designing the Least Recently Used (LRU) cache involves using a combination of a doubly linked list and a hash map (or dictionary).
   * The doubly linked list helps in maintaining the order of elements based on their usage, allowing constant time removal of the least recently used
   * element and constant time addition to the front. The hash map provides constant time access to any element.
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }

    let node = new Node(key, value);
    this._add(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
      let leastRecentlyUsed = this.head;
      this._remove(leastRecentlyUsed);
      this.map.delete(leastRecentlyUsed.key);
    }
  }

  _add(node) {
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      node.next = null;
    }
    this.tail = node;
    if (!this.head) this.head = node;
  }

  _remove(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;

    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;
  }
}

// Example usage:
const cache = new LRUCache(2);
cache.put("apple", 1);
cache.put("pear", 2);
console.log(cache.get("apple")); // returns 1
/**
 * evict 逐出 (from a house. For CS specifically, it means to remove an item from a cache)
 * 
 * expel (someone) from a property, especially with the support of the law.
 * "a single mother and her children have been evicted from their home"
 */
cache.put("banana", 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put("grape", 4); // evicts key 1
console.log(cache.get("apple")); // returns -1 (not found)
console.log(cache.get("banana")); // returns 3
console.log(cache.get("grape")); // returns 4
