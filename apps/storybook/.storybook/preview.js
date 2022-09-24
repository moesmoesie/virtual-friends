import '../src/fonts.css'
import 'ui-components/dist/style.css'
import 'ui-modules/dist/style.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}