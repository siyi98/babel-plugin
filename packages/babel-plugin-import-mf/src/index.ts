import * as traverse  from '@babel/traverse';
import * as t from '@babel/types'

const DEFAULT_MF_LIBS: string[] = [
  'react',
  'react-dom',
  'dayjs',
  'moment',
  'lodash',
  'lodash-es',
  'antd',
  '@ant-design/icons',
  '@ant-design/charts',
];

export default function() {
  return {
    visitor: {
      ImportDeclaration(path: traverse.NodePath<t.ImportDeclaration>, state: any) {
        const {
          specifiers,
          source,
          source: { value },
        } = path.node;

        const libs = state.opts?.apps ?? DEFAULT_MF_LIBS;
        const namespace = state.opts?.namespace ?? 'app';

        if (specifiers.length && libs.includes(value)) {
          source.value = `${namespace}/${value}`;
        }
      },
    },
  };
}
