const dobble = require('./dobble')
const dobbleStochastic = require('./dobble-stochastic')

const results = []

for (let n = 3; n < 7; n++) {
  for (let m = 3; m < 17; m++) {
    console.log('____', 'Invoking', n, m)

    let time = Date.now()

    const x = dobble(n, m).length

    const d = Date.now() - time

    console.log('____', x, 'combinaisons in', d, 'ms')

    // time = Date.now()

    // dobbleStochastic(n, m, x, n * m)

    // const ds = Date.now() - time

    // results.push({ n, m, x, d, ds })
    results.push({ n, m, x, d })
  }
}

console.log('____', 'results', results)
