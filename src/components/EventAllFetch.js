import React, { Component } from 'react';

class EventAllFetch extends Component {
  constructor() {
    super()
    this.state = {
        events: [
        {
            id: 1,
            title: "これは書き換えの文章です",
            body: "狐とたぬきの化かし合い"
        }
      ]
    }
  }
  componentWillMount(){
    this.fetchEvents()
  }

  fetchEvents(){
    fetch("http://localhost:3001/events") // データを取得しに行く
    .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
    .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ events: json }) // Stateを更新する
      console.log(this.setState({ events: json }))
    })
  }

  render() {
    return (
      <div className="EventAllFetch">
        <div className="Events">
        {
          this.state.events.map( event => {
              return <div className="event" key={ event.id }>{ event.title }{ event.body }</div>
          })
        }
        </div>
      </div>
    );
  }
}

export default EventAllFetch;