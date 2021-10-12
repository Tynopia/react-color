(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[35],{445:function(n,t,e){"use strict";e.r(t),t.default="React Color Editable Input HSLA\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-hsla)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-hsla.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-hsla) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-hsla/file/README.md)\n\nEditableInputHSLA Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n[![react-color-editable-input-rgba](https://user-images.githubusercontent.com/1680273/126024611-516a5174-4cf2-4986-af36-ddc4d3d620bb.png)](https://uiwjs.github.io/react-color/#editable-input-hsla)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-editable-input-hsla\n```\n\n## Usage\n\n```js\nimport { useState } from 'react';\nimport { hsvaToHex } from '@uiw/color-convert';\nimport EditableInputHSLA from '@uiw/react-color-editable-input-hsla';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });\n  return (\n    <div style={{ padding: '0 10px 0 20px' }}>\n      <EditableInputHSLA\n        hsva={hsva}\n        onChange={(color) => {\n          setHsva({ ...hsva, ...color.hsva });\n        }}\n      />\n    </div>\n  );\n}\n```\n\n## Props\n\n```ts\nimport { EditableInputRGBAProps } from '@uiw/react-color-editable-input-rgba';\n\ninterface EditableInputHSLAProps extends Omit<EditableInputRGBAProps, 'rProps' | 'gProps' | 'bProps'> {\n  hProps?: EditableInputRGBAProps['gProps'];\n  sProps?: EditableInputRGBAProps['gProps'];\n  lProps?: EditableInputRGBAProps['gProps'];\n  aProps?: EditableInputRGBAProps['aProps'];\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=35.b4f8d0ff.chunk.js.map