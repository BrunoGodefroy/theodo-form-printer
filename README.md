# Theodo forms printer

This projects aims at make it easier for anyone at Theodo to print their project form. No more excuses to have a board out of date.

## Installation

```bash
yarn
```

## Development

Launch the dev server:

```bash
yarn dev
```

The dev server is listening on `localhost:8000`


## Deployment

Merge `master` in `gh-pages`

then run:

```bash
git checkout gh-pages
yarn build
git push
```

The new version of the website is available at [https://brunogodefroy.github.io/theodo-form-printer/](https://brunogodefroy.github.io/theodo-form-printer/)
