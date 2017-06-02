import React, { Component } from 'react';
import SidebarMenu from './sidebar';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Prompt from '../add_menu/prompt';

class Menubar extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e){
        if(this.props.sidebar_hd_status == true){
            this.props.changeStatus(false,"hbg_menu","fa fa-bars","");
        }else{
            this.props.changeStatus(true,"hbg_menu-active","fa fa-times-circle","overflow_lock");
        }
    }
    render() {
        return (
            <div>
                {/**<SidebarMenu/>**/}
                <Prompt title="그룹" visible={this.props.prompt_visible} />
                <SidebarMenu hidden={this.props.sidebar_hd_status} />
                <button onClick={this.handleClick} className={this.props.hbg_menu}><i className={this.props.hbg_menu_icon} aria-hidden="true"></i></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    prompt_visible:state.prompt.prompt_visible,
    sidebar_hd_status:state.sidebar_status.status,
    hbg_menu:state.sidebar_status.hbg_menu,
    hbg_menu_icon:state.sidebar_status.hbg_menu_icon,
    overflow_lock:state.sidebar_status.overflow_lock
  }  
}
const matpDispatchToProps = (dispatch) =>{
  return{
    changeStatus: (status,hbg_menu,hbg_menu_icon,overflow_lock) =>{ dispatch(actions.change_sidebar_status(status,hbg_menu,hbg_menu_icon,overflow_lock))}
  }
}
export default connect(mapStateToProps,matpDispatchToProps)(Menubar);