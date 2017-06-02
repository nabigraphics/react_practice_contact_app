import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { Alert } from 'reactstrap';

import GroupList from './grouplist';

class List extends React.Component{
  render(){
    const dummy = true;
    if(dummy == null){
      return(
        <div>
          <Alert color="warning">
            <strong>내용이 없어요!</strong> Better check yourself, you're not looking too good.
          </Alert>
        </div>
      )
    }else{
      return(
        <div className={this.props.overflow_lock}>
          {this.props.contact_list.map((contact_data,i) => {
              return(
                <GroupList key={i} title={this.props.contact_group[i].title} data={contact_data}/>
              );
          })}
        </div>
    )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    overflow_lock:state.sidebar_status.overflow_lock,
    contact:state.contact_list.contact,
    contact_group:state.contact_list.contact.group,
    contact_list:state.contact_list.contact.list,
    contact_length:state.contact_list.contact.list.length
  }
}

export default connect(mapStateToProps)(List);
