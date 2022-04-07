import { transform } from '@babel/core'

function doTransform(opts) {
  const result = transform(opts.code, {
    filename: opts.filename || 'test.js',
    plugins: [[require.resolve('../src/index.ts'), opts.opts || {}]],
  }).code;
  console.log('result',result)
  return result
}

const testFunc = () => {
  console.log('babel-plugin-no-debugger')
  debugger
}

function testFunc1()  {
  console.log('babel-plugin-no-debugger')
  debugger
}

test('babel-plugin-no-debugger', () => {
  expect(doTransform({ code: testFunc }))
  expect(doTransform({ code: testFunc1 }))
})