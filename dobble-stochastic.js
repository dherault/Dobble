const assert = require('assert')

const allGlyphs = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}:;|"?>.<,`~'.split('')

function dobble(n, m, threshold = 6, logIntensity = 0) {
  const glyphs = allGlyphs.slice(0, m)
  const combinaisons = []

  let i = 0

  while (combinaisons.length < threshold) {
    i++
    let combinaison = []
    const remainingGlyphs = glyphs.slice()

    for (let i = 0; i < n; i++) {
      combinaison.push(remainingGlyphs.splice(Math.floor(Math.random() * remainingGlyphs.length), 1)[0])
    }

    if (combinaisons.every(validCombinaison => countLinks(validCombinaison, combinaison) === 1)) {
      combinaisons.push(combinaison)
    }

    if (logIntensity && i % logIntensity === 0) {
      console.log('combinaisons.length', combinaisons)
    }
  }

  return combinaisons
}

function isDobble(combinaisons) {
  for (let i = 0; i < combinaisons.length; i++) {
    for (let j = i + 1; j < combinaisons.length; j++) {
      if (countLinks(combinaisons[i], combinaisons[j]) !== 1) return false
    }
  }

  return true
}

function countLinks(a, b) {
  let count = 0

  a.forEach(glyph => {
    b.forEach(otherGlyph => {
      if (glyph === otherGlyph) count++
    })
  })

  return count
}

function countGlyphs(combinaisons) {
  const glyphs = new Set()

  combinaisons.forEach(combinaison => {
    combinaison.forEach(glyph => {
      glyphs.add(glyph)
    })
  })

  return glyphs.size
}

if (require.main === module) {
  const result = dobble(4, 16, 6, 1000)

  console.log('result', result)
  console.log('glyphs used:', countGlyphs(result))

  assert(isDobble(result))
}

module.exports = dobble
