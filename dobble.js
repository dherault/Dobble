const assert = require('assert')

const allGlyphs = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}:;|"?>.<,`~'.split('')

function dobble(n, m) {
  const glyphs = allGlyphs.slice(0, m)
  const combinaisons = []
  const cursors = [0]
  let combinaison = []

  while (cursors[0] !== glyphs.length - 1) {
    combinaison.push(glyphs[cursors[cursors.length -  1]])

    if (combinaison.length === n) {
      combinaisons.push(combinaison.slice())
      combinaison.pop()
      cursors[cursors.length - 1]++
    }
    else {
      cursors.push(cursors[cursors.length - 1] + 1)
    }

    while (cursors[cursors.length - 1] === glyphs.length) {
      combinaison.pop()
      cursors.pop()
      cursors[cursors.length - 1]++
    }
  }

  const matrix = {}

  combinaisons.forEach((combinaison, i) => {
    const row = matrix[combinaison] = {}

    combinaisons.forEach((otherCombinaison, j) => {
      row[otherCombinaison] = i === j ? n : countLinks(combinaison, otherCombinaison)
    })
  })

  let maxCombinaisonStrings = []

  combinaisons.forEach(combinaison => {
    const validCombinaisonStrings = [combinaison.toString()]

    Object.entries(matrix[combinaison])
    .filter(([key, value]) => value === 1)
    .map(([key]) => key)
    .forEach(othercombinaisonString => {
      const row = matrix[othercombinaisonString]

      if (validCombinaisonStrings.every(validCombinaisonString => row[validCombinaisonString] === 1)) {
        validCombinaisonStrings.push(othercombinaisonString)
      }
    })

    if (validCombinaisonStrings.length > maxCombinaisonStrings.length) {
      maxCombinaisonStrings = validCombinaisonStrings
    }
  })

  return maxCombinaisonStrings.map(combinaisonString => combinaisonString.split(','))
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
  const result = dobble(6, 24)

  console.log('result', result)
  console.log('glyphs used:', countGlyphs(result))

  assert(isDobble(result))
}

module.exports = dobble
