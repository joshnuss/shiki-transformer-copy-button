import { h } from 'hastscript'
import type { ShikiTransformer } from '@shikijs/types'

export interface Options {
  toggle?: number
}

export function addCopyButton(options: Options = {}): ShikiTransformer {
  const toggleMs = options.toggle || 3000

  return {
    name: 'shiki-transformer-copy-button',
    pre(node) {
      const button = h(
        'button',
        {
          class: 'copy',
          onclick: `
          navigator.clipboard.writeText(this.parentElement.innerText);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), ${toggleMs})
        `
        },
        [h('span', { class: 'ready' }), h('span', { class: 'success' })]
      )

      node.children.push(button)
    }
  }
}
