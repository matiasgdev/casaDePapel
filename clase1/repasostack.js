let _ = require('underscore')

let fn4 = () => {
    console.log('llegue a FN4 !!!')
    fn2()
    // throw new Error('Se produjo un error en FN4')
}
let fn3 = () => {
    console.log('voy a llamar a fn4')
    fn4()
    console.log('ya llame a  a fn4')
}
let fn2 = () => {
    console.log('voy a llamar a fn3')
    fn3()
    console.log('ya llame a  a fn3')
}
let fn1 = () => {
    console.log('voy a llamar a fn2')
    fn2()
    console.log('ya llame a  a fn2')
}

fn1()