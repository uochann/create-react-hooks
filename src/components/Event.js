import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import AppContext from '../contexts/AppContext'

import { 
  DELETE_EVENT,
  ADD_OPERATION_LOG 
} from '../actions'
import { TableRow, TableCell } from '@material-ui/core';

import { timeCurrentIso8602 } from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
    const id = event.id
      const handleClickDeleteButton = () => {
        const result = window.confirm(`(id=${id})イベントを本当に削除してもいいですか`)
        if (result) {
          dispatch({type: DELETE_EVENT, id})

          dispatch({
            type: ADD_OPERATION_LOG,
            description: `イベント(id=${id})削除しました`,
            operatedAt: timeCurrentIso8602()
          })
        }
      }
      return (
        <>
        <TableRow>
          <TableCell>{event.id}</TableCell>
          <TableCell>{event.title}</TableCell>
          <TableCell>{event.body}</TableCell>
          <TableCell><Button color="secondary" variant="contained" onClick={handleClickDeleteButton}>削除</Button></TableCell>
        </TableRow>
        </>
      )  
    }
export default Event
