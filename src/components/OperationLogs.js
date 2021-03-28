import React, { useContext } from 'react'

import OperationLog from './OperationLog'
import AppContext from '../contexts/AppContext'
import { 
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Box
  } from '@material-ui/core';


const columns = [
{ id: 'id', label: '内容', minWidth: 170 },
{ id: 'code', label: '日時', minWidth: 100 },
]

const OperationLogs = () => {
    const {state} = useContext(AppContext)
    return(
        <>
        <Box fontSize="h4.fontSize" textAlign="center" m={4}>
        操作ログ一覧
        </Box>
        <TableContainer className="table table-hover">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                    state.operationLogs.map((operationLog, index) => {
                        return <OperationLog key={index} operationLog={operationLog}/>
                    })
                }
              </TableBody>
          </Table>
        </TableContainer>
        </>
    )
}

export default OperationLogs