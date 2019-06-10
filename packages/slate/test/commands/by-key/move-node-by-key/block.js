/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.moveNodeByKey('a', 'b', 2)
}

export const input = (
  <value>
    <document key="b">
      <paragraph key="a">
        <cursor />one
      </paragraph>
      <paragraph>two</paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>two</paragraph>
      <paragraph>
        <cursor />one
      </paragraph>
    </document>
  </value>
)
