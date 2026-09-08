# [v4-by-example](https://v4-by-example.org)

Solidity snippets for all things Uniswap v4

## Parcours français

1. [Présentation](docs/fr/01-presentation.md)
2. [Installation](docs/fr/02-installation.md)
3. [Architecture](docs/fr/03-architecture.md)
4. [Initialiser un pool](docs/fr/04-initialiser-pool.md)
5. [Ajouter de la liquidité](docs/fr/05-liquidite.md)
6. [Effectuer un swap](docs/fr/06-swap.md)
7. [Frais, hooks et tests](docs/fr/07-hooks-tests.md)

*largely inspired by [solidity-by-example](https://solidity-by-example.org)*

---

### License

[MIT License](LICENSE)

---

# Contributing Guide

The project is welcoming all contributions. Please try to limit PRs to:

1. Minimally opinonated examples that showcase v4 features
2. Syncing existing snippets with the latest v4 changes

## Setup

Requires [node 18](https://nodejs.org/en/download)

```bash
git clone git@github.com:uniswapfoundation/v4-by-example.git

npm i
npm start
```

## Creating a new page

```bash
cp -r src/template src/pages/<path>/<name>
```

Edit the following files
* `src/pages/<path>/<name>/index.md`
* `src/pages/<path>/<name>/Template.sol`

> Please write foundry tests in `forge-test/` for your `.sol` files!

Register the page on [nav.ts](src/nav.ts)
```typescript
{
  path: "<name>",
  title: "TITLE"
}
```

Generate react, register routes, and rebuild search index
```bash
npm run generate
```

Update the [changelog](src/pages/index.tsx#L11)
