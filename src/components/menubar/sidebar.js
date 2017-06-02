import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup, Col, Row, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import GroupList from '../list/grouplist';

class Sidebar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.hidden == false) return null;
        return (
            <div  className="sidebar">
                <div onClick={() => this.props.changeStatus(false,"hbg_menu","fa fa-bars","")} className="sidebar_bg"></div>
                <div className="sidebar_content">
                        <ul className="user_info_ul">
                            <li name="user_name">{this.props.user_name} <i className="fa fa-cog" aria-hidden="true"></i></li>
                            <li name="user_email">{this.props.user_email}</li>
                        </ul>
                        <div className="sidebar_add_bt">
                            <ButtonGroup>
                                <Button onClick={() => this.props.openPrompt("group",true)} className="sab_left" outline size="sm" color="primary">그룹 생성</Button>
                                <Button onClick={() => this.props.openPrompt("user_invite",true)} className="sab_right" outline size="sm"  color="warning">사용자 초대</Button>
                            </ButtonGroup>
                        </div>
                        <hr/>
                        {this.props.contact_list.map((contact_data,i) => {
                            return(
                                <GroupList type="sidebar" key={i} title={this.props.contact_group[i].title} data={contact_data}/>
                            );
                        })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    sidebar_hd_status:state.sidebar_status.status,
    hbg_menu:state.sidebar_status.hbg_menu,
    hbg_menu_icon:state.sidebar_status.hbg_menu_icon,
    overflow_lock:state.sidebar_status.overflow_lock,
    user_name:state.user_data.name,
    user_email:state.user_data.email,
    contact_group:state.contact_list.contact.group,
    contact_list:state.contact_list.contact.list
  }  
}
const matpDispatchToProps = (dispatch) =>{
  return{
    changeStatus: (status,hbg_menu,hbg_menu_icon,overflow_lock) =>{ dispatch(actions.change_sidebar_status(status,hbg_menu,hbg_menu_icon,overflow_lock))},
    openPrompt: (prompt_title,prompt_visible,data = null) => {dispatch(actions.prompt_open(prompt_title,prompt_visible,data))}
  }
}
export default connect(mapStateToProps,matpDispatchToProps)(Sidebar);