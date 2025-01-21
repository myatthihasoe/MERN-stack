console.log(__dirname)
console.log(__filename)
global.setTimeout(function() {
    console.log('Timeout executed')
} , 4000)

global.setInterval(() => {
    console.log('Interval executed')
}, 2000);
console.log('Hello World')

