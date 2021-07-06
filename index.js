const allGlyphs = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'.split('')

function dobble(x, n) {
  // Execution
  const glyphs = allGlyphs.slice(0, x)
  const tree = { value: '', children: [] }
  const tuples = {}
  const combinaisons = []
  const validCombinaisons = []

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
