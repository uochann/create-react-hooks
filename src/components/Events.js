import React, { useContext } from 'react'
import EventAllFetch from './EventAllFetch'

import { 
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Box
} from '@material-ui/core';

import Event from './Event'
import AppContext from '../contexts/AppContext'


const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'text', label: 'タイトル', minWidth: 170 },
  { id: 'text', label: 'ボディ', minWidth: 170 }
]


const Events = () => {
  const { state } = useContext(AppContext)
    return (
        <>
        <Box fontSize="h4.fontSize" textAlign="center" m={4}>イベント一覧</Box>
        <EventAllFetch/>
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
              {state.events.map((event, index) => (<Event key={index} event={event}/>))}
              </TableBody>
          </Table>
        </TableContainer>
      </>
    )
}

export default Events