import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen() {
      if(this.state.sidebarOpen == false){
        this.setState({sidebarOpen: true});
      }else{
        this.setState({sidebarOpen: false});
      }
  }
    render() {
        const style = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex:12
  },
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    overflow:'hidden',
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow:'hidden',
    bottom: 0,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    width:'0px',
    height:'0px',
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow:'hidden',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    overflow:'hidden',
    top: 0,
    bottom: 0,
  },
};
const test = (
    <div style={{
        backgroundColor:'#fff',
        width:'250px',
        height:'100%'
    }}>나는 컨텐츠지롱~</div>
)
        return (
            <Sidebar 
                sidebar={test}
                styles={style}
                open={this.state.sidebarOpen}
                pullRight={true}
                onSetOpen={this.onSetSidebarOpen}>
                <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        height:'100%'
    }}>asfasfasfasfasfasfasfasfasfasfs</div>
            </Sidebar>
        );
    }
}


export default SidebarMenu;