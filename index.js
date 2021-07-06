const allGlyphs = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'.split('')
// const glyphs = '0123456'.split('')

// function dobble(n) {
//   const tuples = {}
//   const result = []
//   const lastCombinaison = glyphs.slice(-n)
//   let combinaison = glyphs.slice(0, n)
//   let cursor = n
//   // let combinaison = '01234+'.split('')

//   validateCombinaison()

//   let x = 0

//   while (!hasEnded()) {
//     ({ combinaison, cursor } = incrementCombinaison())
//     cursor++
//     console.log('combinaison', combinaison, cursor)
//     x++

//     if(x === 6) break
//   }

//   function validateCombinaison() {
//     tupleizeCombinaison()
//     result.push([...combinaison])
//   }

//   function tupleizeCombinaison() {
//     combinaison.forEach((glyph, i) => {
//       combinaison.forEach((otherGlyph, j) => {
//         if (i === j) return

//         addTuple(glyph, otherGlyph)
//       })
//     })
//   }

//   function addTuple(a, b) {
//     if (tuples[a]) tuples[a].push(b)
//     else tuples[a] = [b]

//     if (tuples[b]) tuples[b].push(a)
//     else tuples[b] = [a]
//   }

//   function incrementCombinaison(combi = combinaison, cur = cursor) {
//     console.log('incrementCombinaison', combi, cur)
//     const glyph = combi[combi.length - 1]
//     const indexInGlyphs = glyphs.indexOf(glyph)
//     // const nextforbidenGlyphs = [...forbidenGlyphs, glyph]

//     // console.log('indexInGlyphs', indexInGlyphs, glyphs.length- 1, nextforbidenGlyphs)
//     if (indexInGlyphs === glyphs.length - 1) {
//       combi.pop()
//       cur = glyphs.indexOf(combi[combi.length - 1]) + 1
//       return incrementCombinaison(combi, cur)
//     }
//     else {
//       combi.pop()
//       console.log('combi', combi, cur)
//       for (let i = combi.length; i < n; i++) {
//         console.log('i', i)
//         insertNewGlyph(combi, cur)
//         console.log('combi mid', combi)
//       }
//       console.log('combi end', combi)
//     }

//     return {
//       combinaison: combi,
//       cursor: cur,
//     }
//   }

//   function insertNewGlyph(combi, cur) {
//     for (let i = cur; i < glyphs.length; i++) {
//       const glyph = glyphs[cur]

//       if (!combi.includes(glyph)) {
//         combi.push(glyph)

//         break;
//       }
//     }
//   }

//   function hasEnded() {
//     return combinaison.every(glyph => lastCombinaison.includes(glyph))
//   }

//   return result
// }

const root = '__root__'

function dobble(x, n) {
  // Execution
  const glyphs = allGlyphs.slice(0, x)
  const tree = { value: root, children: [] }
  const tuples = {}
  const combinaisons = []
  const validCombinaisons = []
  // const results = []

  makeTree(tree)

  tree.children.forEach(childTree => {
    combinaisons.push(...traverseTree(childTree))
  })

  combinaisons.forEach(combinaison => {
    let isValid = true
    const combinaisonArray = combinaison.split('')

    dance: for (let i = 0; i < combinaisonArray.length; i++) {
      for (let j = i + 1; j < combinaisonArray.length; j++) {
        if (tuples[combinaisonArray[i]] && tuples[combinaisonArray[i]].includes(combinaisonArray[j])) {
          isValid = false

          break dance;
        }
      }
    }

    if (isValid) {
      validCombinaisons.push(combinaison)

      for (let i = 0; i < combinaisonArray.length; i++) {
        for (let j = i + 1; j < combinaisonArray.length; j++) {
          addTuple(combinaisonArray[i], combinaisonArray[j])
        }
      }
    }
  })

  // for (let i = 0; i < validCombinaisons.length; i++) {
  //   const combinaisonArray = validCombinaisons[i].split('')
  //   let isValid = true

  //   for (let j = i + 1; j < validCombinaisons.length; j++) {
  //     if (validCombinaisons[j].split('').every(glyph => !combinaisonArray.includes(glyph))) {
  //       isValid = false

  //       console.log(validCombinaisons[i], validCombinaisons[j])
  //       break
  //     }
  //   }

  //   if (isValid) {
  //     results.push(validCombinaisons[i])
  //   }
  // }

  // Logic

  function makeTree(tree, depth = 0, existingGlyphs = []) {
    if (depth === n) return

    glyphs.forEach(glyph => {
      if (existingGlyphs.includes(glyph)) return

      tree.children.push({ value: glyph, children: [] })
    })

    tree.children.forEach(childTree => {
      makeTree(childTree, depth + 1, [...existingGlyphs, childTree.value])
    })
  }

  function traverseTree(tree, combinaison = '', combinaisons = []) {
    const nextCombinaison = combinaison + tree.value

    if (tree.children.length === 0) {
      combinaisons.push(nextCombinaison)
    }
    else {
      tree.children.forEach(childTree => {
        traverseTree(childTree, nextCombinaison, combinaisons)
      })
    }

    return combinaisons
  }

  function addTuple(a, b) {
    if (tuples[a]) tuples[a].push(b)
    else tuples[a] = [b]

    if (tuples[b]) tuples[b].push(a)
    else tuples[b] = [a]
  }

  return validCombinaisons
}

const results = dobble(16, 4)

results.forEach(combinaison => console.log(combinaison))
console.log('results.length', results.length)
