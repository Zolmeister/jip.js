var I = require('./ii')

I('def', 'prInt', [], console.log)
I('def', '*', ['a', 'b'], function (a, b) { return a * b })
I('def', '+', ['a', 'b'], function (a, b) { return a + b })
I('def', 'square', ['x'], ['*', 'x', 'x'])
I('def', 'powFour', ['x'], ['square', ['square', 'x']])

I('prInt', 'x')
I('prInt', '(* 2 2) = ', I('*', 2, 2))
I('prInt', '(square 5) = ', I('square', 5))
I('prInt', '(+ 2 (* 5 (square 3))) = ', I('+', 2, I('*', 5, I('square', 3))))
I('prInt', '(powFour 2) = ', I('powFour', 2))
