const glob = require('fast-glob')
const matter = require('gray-matter')
const fs = require('fs')

const titles = new Set()

(async () => {
  for await (const f of glob.stream('**/*.md', {
    cwd: '..'
  })) {
    const { data } = matter(fs.readFileSync(`../${f}`, 'utf8'))
    if (data.title) {
      titles.add(data.title)
    }
  }

  fs.writeFileSync('tests/data.txt', Array.from(titles).sort().join('\n'))
})()
