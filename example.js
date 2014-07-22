var j = require('./jip')

j('def', 'prjnt', [], console.log)
j('def', '*', ['a', 'b'], function (a, b) { return a * b })
j('def', '+', ['a', 'b'], function (a, b) { return a + b })
j('def', 'square', ['x'], ['*', 'x', 'x'])
j('def', 'powFour', ['x'], ['square', ['square', 'x']])

j('prjnt', 'x')
j('prjnt', '(* 2 2) = ', j('*', 2, 2))
j('prjnt', '(square 5) = ', j('square', 5))
j('prjnt', '(+ 2 (* 5 (square 3))) = ', j('+', 2, j('*', 5, j('square', 3))))
j('prjnt', '(powFour 2) = ', j('powFour', 2))
