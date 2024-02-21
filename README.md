Shiki Copy Button
-----------------

[Shiki Transformer](https://shiki.style/guide/transformers) that adds a Copy button to `<pre>` elements.


## Install

Install the package:

```sh
pnpm install -D shiki-transformer-copy-button
```

Add the transformer:

```javascript
import { codeToHtml } from 'shiki/bundle/full'
import { addCopyButton } from 'shiki-transformer-copy-button'

export async function highlight(code, lang) {
  return await codeToHtml(code, {
    lang,
    transformers: [
      addCopyButton(code)
    ]
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
## Troubleshooting TypeScript Error

If you're using TypeScript and encounter the error: Cannot find module 'shiki-transformer-copy-button' or its corresponding type declarations, you can follow these steps to resolve it:

Create a `shiki-transformer-copy-button.d.ts` declaration file in your `src` directory and inside it paste the following code:

```ts
declare module 'shiki-transformer-copy-button'
```
The error should now be resolved.


## License

MIT
