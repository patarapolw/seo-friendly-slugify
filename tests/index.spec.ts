import fs from 'fs'

import Slugify from '@/.'

const output: string[] = []

describe('Slugify#slugify', () => {
  const s = new Slugify()

  fs.readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n').map((t) => {
    it(t, () => {
      const r = s.slugify(t)
      console.log(r)
      output.push(r)
    })
  })
})

after(() => {
  fs.writeFileSync(`${__dirname}/output.txt`, output.join('\n'))
})
