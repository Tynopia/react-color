(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[45],{486:function(n,e,o){"use strict";o.r(e),e.default="React Color Slider\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)\n\nSlider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n[![react-color-slider](https://user-images.githubusercontent.com/1680273/125950115-1ef0c47b-e856-481a-b57e-d8168d41872b.png)](https://uiwjs.github.io/react-color/#slider)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-slider\n```\n\n## Usage\n\n```js\nimport Slider from '@uiw/react-color-slider';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });\n  return (\n    <Slider\n      color={hsva}\n      onChange={(color) => {\n        setHsva({ ...hsva, ...color.hsv });\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport { ColorResult, HsvaColor } from '@uiw/color-convert';\n\ninterface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  color?: string | HsvaColor;\n  lightness?: number[];\n  onChange?: (color: ColorResult) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=45.95cf9f7d.chunk.js.map