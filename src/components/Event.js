import React, { useContext } from 'react'


import AppContext from '../contexts/AppContext'

import { DELETE_EVENT,
        ADD_OPERATION_LOG } from '../actions'
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
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
      </tr>
      )  
    }
export default Event
