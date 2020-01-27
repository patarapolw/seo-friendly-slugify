# seo-friendly-slugify

As I cannot find [an NPM package for SEO-friendly slugify](https://www.npmjs.com/search?q=seo+friendly+url) where the url should not contain a certain word, so I created this package.

This package, by default, strips certain words, replace punctuations, and shorten the string. Also works with Unicode characters, as can be seen [here](/tests/output.txt).

By default, this package does not [unidecode](https://www.npmjs.com/package/unidecode-plus). You will have to extend it.

This package produces an empty string sometimes, and does not ensure uniqueness of ID. You might concatenate with [`nanoid`](https://github.com/ai/nanoid) or `Date`

For more of why, see <https://neilpatel.com/blog/seo-urls/>

## Usage

```javascript
import Slugify from 'seo-friendly-slugify'
const s = new Slugify()
console.log(s.slugify(UGLY_STRING))
```

## Usage in browser without installing Node.js

Due to [unpkg](https://unpkg.com/), this works

```txt
unpkg.com/seo-friendly-slugify@:version/umd/index.min.js
```

I wrote a topic about this, [here](https://dev.to/patarapolw/npm-repo-with-pure-browser-version-and-also-with-tests-and-linting-28jo).

## Usage with Node.js with/without TypeScript

Simply, `yarn add seo-friendly-slugify`
