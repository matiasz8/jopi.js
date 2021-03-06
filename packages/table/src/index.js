import React from 'react'
import { Box } from '@oneloop/box'

export const Table = props => (
  <Box
    as="table"
    {...props}
    __css={{ fontFamily: 'body', borderCollapse: 'collapse' }}
  />
)

const TableHeaderItem = props => (
  <Box
    as="th"
    {...props}
    __css={{ fontSize: 2, textTransform: 'uppercase', py: '12px' }}
  />
)

const TableBody = props => <Box as="tbody" {...props} />

const TableHeader = ({ children, ...props }) => (
  <Box as="thead">
    <Box as="tr" {...props}>
      {children}
    </Box>
  </Box>
)
const TableRow = props => <Box as="tr" {...props} />

const TableRowItem = props => (
  <Box
    as="td"
    {...props}
    __css={{ borderTop: '1px solid #EBEBEB', py: '14px' }}
  />
)

Table.Header = TableHeader
Table.HeaderItem = TableHeaderItem
Table.Rows = TableBody
Table.Row = TableRow
Table.RowItem = TableRowItem
