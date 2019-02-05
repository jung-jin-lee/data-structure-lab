function Stack() {
  var _stack = []
  return {
    push: function (data) {
      _stack.push(data)
    },
    pop: function () {
      return this.isEmpty() ? 'stack is empty' : _stack.pop()
    },
    isEmpty: function () {
      return _stack.length === 0
    }
  }
}

var stack = new Stack()
var stack2 = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack2.push(4)
stack2.push(5)
stack2.push(6)

console.log(
  'stack pop:', stack.pop()
)

console.log(
  'stack pop:', stack.pop()
)

console.log(
  'stack pop:', stack.pop()
)

console.log(
  'stack pop:', stack.pop()
)

console.log(
  'stack2 pop:', stack2.pop()
)

console.log(
  'stack2 pop:', stack2.pop()
)

console.log(
  'stack2 pop:', stack2.pop()
)

console.log(
  'stack2 pop:', stack2.pop()
)