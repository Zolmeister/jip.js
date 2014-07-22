var functions = {
  def: function (name, args, fn) {
    if (typeof fn === 'function') {
      functions[name] = fn
      return functions[name]
    }

    functions[name] = function () {
      var argMap = {}
      Array.prototype.slice.call(arguments).forEach(function (arg, i) {
        argMap[args[i]] = arg
      })

      return iiApply(argMap, fn)
    }

    return functions[name]
  }
}

function iiApply(argMap, fn) {
  return ii.apply(null, [fn[0]].concat(fn.slice(1).map(function (arg) {
    if (Array.isArray(arg)) {
      return iiApply(argMap, arg)
    }
    return argMap[arg]
  })))
}

function ii() {
  var args = Array.prototype.slice.call(arguments)
  return functions[args[0]].apply(null, args.slice(1))
}

module.exports = ii
