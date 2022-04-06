import { transform } from '@babel/core'

function doTransform(opts) {
  const result = transform(opts.code, {
    filename: opts.filename || 'foo.js',
    plugins: [[require.resolve('../src/index.ts'), opts.opts || {}]],
  }).code;
  return result
}

test('babel-plugin-mf', () => {
  expect(doTransform({ code: `import React from 'react';`, opts: {
    namespace: 'app',
    apps: ['react','react-dom']
  } })).toEqual(
    `import React from "app/react";`,
  )

  expect(doTransform({ code: `import { Button } from 'antd'`, opts: {
    namespace: 'mf',
    apps: ['antd']
  } })).toEqual(
    `import { Button } from "mf/antd";`,
  )
})