const config = require('config')

const populate = (array, depth) => {
  if (depth === 0) {
    return 1
  } else {
    for (let i = 0; i < 4; i++) {
      array.push(populate([], depth - 1))
    }
  }
  return array
}

let json = {
  index: populate([], config.get('depth'))
}

console.log(JSON.stringify(json))
