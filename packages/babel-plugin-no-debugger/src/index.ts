import * as traverse  from '@babel/traverse';
import * as t from '@babel/types'

export default function() {
  return {
    visitor: {
      Statement(path: traverse.NodePath<t.Statement>) {
        if(path.node.type === 'DebuggerStatement' && process.env.NODE_ENV === 'production'){
          path.remove()
        }
      },
    },
  };
}
