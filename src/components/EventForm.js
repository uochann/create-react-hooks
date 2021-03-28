import React, { useState, useContext } from 'react'
import { Button, TextField, Box, ButtonGroup } from '@material-ui/core';

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

import AppContext from '../contexts/AppContext'
import { timeCurrentIso8602 } from '../utils'

const EventForm = () => {
  const { state,dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8602()
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを削除してもいいですか？')
      if (result) {
        dispatch({type: DELETE_ALL_EVENTS})

        dispatch({
          type: ADD_OPERATION_LOG,
          description: "すべてのログを削除しますか？",
          operatedAt: timeCurrentIso8602()
        })
      }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('すべてのログを削除してもいいですか？')

    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }
  const unCreatable = title === '' || body === ''
    return (
        <>
        <Box fontSize="h4.fontSize" textAlign="center" m={4}>
        イベント作成フォーム
        </Box>
        <form className="classes.root" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="タイトル" variant="outlined" id="formEventTitle"
                  value={title} onChange={e => setTitle(e.target.value)} /><br/>
          <TextField id="outlined-basic" label="ボディ" variant="outlined" id="formEventBody"
                  value={body} onChange={e => setBody(e.target.value)} /><br/>
            <Box m={2}>
              <ButtonGroup disableElevation variant="contained" color="primary" >
                <Button color="primary" variant="contained"  onClick={addEvent} disabled={unCreatable}>イベントを作成する</Button>
                <Button color="secondary" variant="contained" onClick={deleteAllEvents} disabled={state.events.length === 0}>すべてのイベントを作成する</Button>
                <Button color="secondary" variant="contained" onClick={deleteAllOperationLogs} disabled={state.operationLogs.lengs === 0}>すべてのログを削除する</Button>
              </ButtonGroup>
            </Box>
        </form>
        </>
    )
}

export default EventForm
