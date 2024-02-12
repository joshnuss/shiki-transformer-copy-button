import { h } from 'hastscript'

export function addCopyButton(code, options = {}) {
  const toggleMs = options.toggle || 3000

  return {
    name: 'shiki-transformer-copy-button',
    pre(node) {
      const button = h('button', {
        class: 'copy',
        "data-code": code,
        onclick: `
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), ${toggleMs})
        `
      }, [
        h('span', { class: 'ready' }),
        h('span', { class: 'success' })
      ])

      node.children.push(button)
    }
  }
}
