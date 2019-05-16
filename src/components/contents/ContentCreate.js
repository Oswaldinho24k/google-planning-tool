import React from 'react'
import ContentDetail from './ContentDetail';

class ContentCreate extends React.Component{
    render(){
        return(
            <ContentDetail {...this.props}/>
        )
    }
}   

export default ContentCreate