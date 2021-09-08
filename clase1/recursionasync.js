let _ = require('underscore')

let fn = (x) => {
    console.log(x)
    _.defer(fn, x+1)
}

fn(1000)

