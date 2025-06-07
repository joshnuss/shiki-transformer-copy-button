## Shiki Copy Button

A [Shiki Transformer](https://shiki.style/guide/transformers) that adds a Copy button.

## Used by

<a href="https://github.com/joshnuss/shiki-transformer-copy-button/network/dependents">
  <img src="https://dependents.info/joshnuss/shiki-transformer-copy-button/image.svg" />
</a>

## Install

Install the package:

```sh
pnpm install -D shiki-transformer-copy-button
```

Add the transformer:

```javascript
import { codeToHtml } from 'shiki/bundle/full'
import { addCopyButton } from 'shiki-transformer-copy-button'

// optional
const options = {
  // delay time from "copied" state back to normal state
  toggle: 2000
}

export async function highlight(code, lang) {
  return await codeToHtml(code, {
    lang,
    transformers: [addCopyButton(options)]
  })
}
```

## Style

Add some basic styling:

```css
pre:has(code) {
  position: relative;
}

pre button.copy {
  position: absolute;
  right: 16px;
  top: 16px;
  height: 28px;
  width: 28px;
  padding: 0;
  display: flex;

  & span {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  & .ready {
    background-image: url(/icons/copy.svg);
  }

  & .success {
    display: none;
    background-image: url(/icons/copy-success.svg);
  }

  &.copied {
    & .success {
      display: block;
    }

    & .ready {
      display: none;
    }
  }
}
```

## Publish package

Bump version, then build and publish:

```
pnpm build && pnpm publish
```

## License

MIT
