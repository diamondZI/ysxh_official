// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetIcons from 'unocss/preset-icons'


export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    // shortcuts to multiple utilities
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    // single utility alias
    'red': 'text-red-100',
    "flex-center": "flex items-center justify-center",
    "flex-between": "flex items-center justify-between",
    "flex-around": "flex items-center justify-around",
    "flex-evenly": "flex items-center justify-evenly",
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    })
  ],

})
