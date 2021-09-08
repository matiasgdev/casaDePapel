let asyncForLoop = require('@arteysoft/asyncforloop')
let _ = require('underscore')

asyncForLoop(1000, (x, next, abort) => {
    _.delay(()=>{
        console.log(x)
        if (x===20) {
            abort(new Error('20 ? estas seguro ?'))
            return
        }
        next()
    }, 200)
}, (err) => {
    console.log(err)
})