import XRegExp from 'xregexp'

export interface IFilter {
  excludedWords: (string | RegExp)[]
  transform: ((s: string) => string)[],
  maxLength: number
}

export const defaultFilter: IFilter = {
  excludedWords: ['is', 'am', 'are', 'a', 'an', 'the', 'and', 'or', 'but', 'in', 'as'],
  transform: [
    (s) => s.replace('&', ' and '),
    (s) => {
      return XRegExp.match(s.toLocaleLowerCase(), XRegExp('[\\p{L}\\p{N}]+', 'g')).join('-')
    }
  ],
  maxLength: 30
}

export default class Slugify {
  static defaultFilter = defaultFilter

  constructor (public filter: IFilter = Slugify.defaultFilter) {}

  slugify (s: string) {
    for (const w of this.filter.excludedWords.sort().reverse()) {
      let re: RegExp
      if (w instanceof RegExp) {
        re = w
      } else {
        re = XRegExp(`(^|\\p{P})${w}($|\\p{P})`, 'gi')
      }

      s = s.replace(re, ' ')
    }

    s.trim()

    for (const t of this.filter.transform) {
      s = t(s)
    }

    return XRegExp.replace(s.substr(0, this.filter.maxLength), XRegExp('[^\\p{L}\\p{N}]+$'), '')
  }
}
