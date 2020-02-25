
declare module 'react-snapshot' {
  export function render(...args): void
}

declare module 'debounce' {
  export default function (...args): () => {}
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any
}
