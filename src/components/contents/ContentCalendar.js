import React, { Component } from 'react'
import { Calendar, Badge } from 'antd';
import {getContents} from '../../services/firebase'
import moment from 'moment'
import {Link} from 'react-router-dom'

export class ContentCalendar extends Component {

    state={
        contents:[
           
        ]
    }

    componentWillMount(){
        getContents()
      .then(snapshot => {        
        const c = []
        snapshot.forEach(doc => {
            const post = doc.data()
            console.log(doc.data())
            const date = moment(post.publishDate)
            post['publishDate'] = date
            c.push(post)
            console.log(post)
        })
        this.setState({ contents: c })  
        
      }).catch(e => {
        console.log(e)
      })
    }

    getListData = (value)=> {
        let listData;
        const {contents} = this.state        
        listData = contents.filter(element=>value.date()===element.publishDate.date() && value.month()===element.publishDate.month() && value.year()===element.publishDate.year())
        listData = listData.map(el=>{
            return {type:'success', content:{...el}}
        })        
        return listData || [];
      }
      
     dateCellRender=(value)=> {
        const listData = this.getListData(value);
        return (
          <ul className="events">
            {listData.map((item, key) => (              
                <Link key={key} to={`/content/${item.content.id}`}>
                    <Badge status={item.type} text={item.content.text} />
                    
                </Link>
            ))}
          </ul>
        );
      }
    getMonthData = (value)=> {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
    monthCellRender=(value) =>{
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

export default ContentCalendar
