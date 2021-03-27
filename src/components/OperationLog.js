import React from 'react'

import { 
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell
  } from '@material-ui/core';

const OperationLog = ({ operationLog }) => {
    return (
        <TableRow>
            <TableCell>{operationLog.description}</TableCell>
            <TableCell>{operationLog.operatedAt}</TableCell>
        </TableRow>
    )
}

export default OperationLog