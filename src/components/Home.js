import React, { Component } from 'react'
import {Calendar, Badge} from 'antd'
import moment from 'moment'

const array = [
  {
    title:'lol',
    date:new Date()
  },
  {
    title:'lol',
    date:new Date("May 17, 2019 03:24:00")
  },
  {
    title:'lol',
    date:new Date()
  },
  {
    title:'lol',
    date:new Date("May 17, 2018 03:24:00")
  },
  {
    title:'lol',
    date:new Date()
  },
  {
    title:'lol',
    date:new Date("december 17, 2019 03:24:00")
  }
] 


export class Home extends Component {



  state={

  }
  componentWillMount(){

  }

  getListData=(value)=> {
      let listData;
      
      listData = array.filter(e=>{
        console.log(value)        
        return moment(e.date).date()==value.date() && moment(e.date).month()==value.month() && moment(e.date).year()==value.year()
      })
      listData = listData.map(e=>{
        return {type:'success', content:e.title}
      })
      // switch (value.date()) {
      //   case 8:
      //     listData = [
      //       { type: 'warning', content: 'This is warning event.' },
      //       { type: 'success', content: 'This is usual event.' },
      //     ]; break;
      //   case 10:
      //     listData = [
      //       { type: 'warning', content: 'This is warning event.' },
      //       { type: 'success', content: 'This is usual event.' },
      //       { type: 'error', content: 'This is error event.' },
      //     ]; break;
      //     case 12:
      //     listData = [
      //       { type: 'warning', content: 'This is warning event.' },
      //       { type: 'success', content: 'This is usual event.' },
      //       { type: 'error', content: 'This is error event.' },
      //     ]; break;
      //   case 15:
      //     listData = [
      //       { type: 'warning', content: 'This is warning event' },
      //       { type: 'success', content: 'This is very long usual event。。....' },
      //       { type: 'error', content: 'This is error event 1.' },
      //       { type: 'error', content: 'This is error event 2.' },
      //       { type: 'error', content: 'This is error event 3.' },
      //       { type: 'error', content: 'This is error event 4.' },
      //     ]; break;
      //   default:
      // }
      console.log(listData)
      return listData || [];
    }
    
    dateCellRender=(value)=> {        
      const listData = this.getListData(value);
      return (
        <ul className="events">
          {
            listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))
          }
        </ul>
      );
    }
    
    getMonthData=(value)=> {  
                  
      return array.filter(e=> moment(e.date).date()==value.date() && moment(e.date).month()==value.month() && moment(e.date).year()==value.year()).length
      
    }
    
    monthCellRender=(value)=> {        
      const num = this.getMonthData(value);
      return num ? (
        <div className="notes-month">
          <section>{num}</section>
          <span>Backlog number</span>
        </div>
      ) : null;
    }
  render() {
    return (
      <div>
          <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        
      </div>
    )
  }
}

export default Home
