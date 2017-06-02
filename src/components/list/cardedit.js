import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Badge } from 'reactstrap';
class CardEdit extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const contact_data = this.props.data;
        const contact_group = this.props.contact_group;
        return (
            <ul className="cardedit">
                <li className="cardedit_li last icon-button" onClick={() => alert("수정버튼을 클릭했어!")}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></li>
                <li className="cardedit_li first icon-button" onClick={() => alert("삭제버튼을 클릭했구나!")}><i className="fa fa-times-circle" aria-hidden="true"></i></li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    contact_group:state.contact_list.contact.group
  }
}

export default connect(mapStateToProps)(CardEdit);