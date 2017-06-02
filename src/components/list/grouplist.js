import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, ButtonGroup, UncontrolledAlert, ListGroup, ListGroupItem, Badge, Container, Row, Col } from 'reactstrap';

import CardList from './cardlist';

class GroupList extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:false
        }
        this.groupListClick = this.groupListClick.bind(this);
    }
    groupListClick(){
        if(this.state.active == false){
            this.setState({
                active:true
            })
        }else{
            this.setState({
                active:false
            })
        }
    }

    render() {
        const contact_data = this.props.data;
        if(this.props.type == "sidebar"){
            return(
                <ListGroup className="group-header">
                    <ListGroupItem className="justify-content-between sidebar_group_list"><div><i onClick={() => this.props.openPrompt("edit_group_title",true,this.props.title)} className="fa fa-pencil-square-o icon-button" aria-hidden="true"></i> {this.props.title}</div><Badge color="primary" pill>{contact_data.length}</Badge></ListGroupItem>
                </ListGroup>
            )
        }else{
            return (
                <ListGroup className="group-header">
                    <ListGroupItem color="info" active={this.state.active} onClick={this.groupListClick} className="justify-content-between main_group_status"><div>{this.props.title}</div><Badge color="primary" pill>{contact_data.length}</Badge></ListGroupItem>
                    {this.state.active ? <Card_detail contact={contact_data} /> : null }
                </ListGroup>
            );
        }
    }
}
function Card_detail({contact}){
    return (
        <div>
            <ul className="data_list">
                {contact.map((contact_data,i) => {
                return(
                    <CardList key={i} data={contact_data}/>
                );
                })}
            </ul>
        </div>
    )
}

const matpDispatchToProps = (dispatch) =>{
  return{
    openPrompt: (prompt_title,prompt_visible,data = null) => {dispatch(actions.prompt_open(prompt_title,prompt_visible,data))}
  }
}
export default connect(null,matpDispatchToProps)(GroupList);
