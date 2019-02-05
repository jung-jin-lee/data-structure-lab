function Queue() {
  var _queue = []
  return {
    enqueue: function (data) {
      _queue.push(data)
    },
    dequeue: function () {
      return this.isEmpty() ? 'queue is empty' : _queue.shift()
    },
    isEmpty: function () {
      return _queue.length === 0
    }
  }
}

var queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(
  'dequeue:', queue.dequeue()
)

console.log(
  'dequeue:', queue.dequeue()
)

console.log(
  'dequeue:', queue.dequeue()
)

console.log(
  'dequeue:', queue.dequeue()
)