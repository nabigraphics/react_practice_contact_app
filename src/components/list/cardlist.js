import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CardEdit from './cardedit.js';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Badge, Collapse } from 'reactstrap';
class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            cls_name:"profile_card",
            active:false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.active == false){
            this.setState({
                cls_name:"profile_card",
                active:true
            })
        }else{
            this.setState({
                 cls_name:"profile_card",
                active:false
            })
        }
    }
    render() {
        const contact_data = this.props.data;
        const contact_group = this.props.contact_group;
        return (
            <Card className={this.state.cls_name}>
                {contact_data.access ? <CardEdit/> : null}
                <CardBlock className="cd_block" onClick={this.handleClick}>
                    <img className="cd_profile_image" src={contact_data.profile_iamge} />
                    <CardTitle className="cd_profile_name">{contact_data.name}</CardTitle>
                    <CardSubtitle className="cd_profile_category">{contact_data.category}</CardSubtitle>
                    <CardText className="cd_profile_phone"><i className="fa fa-phone" aria-hidden="true"></i> {contact_data.phone ? contact_data.phone : "휴대폰 번호가 없습니다."}</CardText>
                    <CardText className="cd_profile_email"><i className="fa fa-envelope" aria-hidden="true"></i> {contact_data.email ? contact_data.email : "이메일이 없습니다."}</CardText>
                    <Collapse isOpen={this.state.active}>
                        <hr/>
                        <Card className="opend">
                            <CardBlock >
                                <CardText className="cd_profile_business_call">회사 번호 : {contact_data.business_call} </CardText>
                                <CardText className="cd_profile_business">회사 : {contact_data.business}</CardText>
                                <CardText className="cd_profile_address">주소 : {contact_data.address}</CardText>
                            </CardBlock>
                        </Card>
                    </Collapse>
                </CardBlock>
            </Card>
        );
    }
}
function Card_detail({buscall,bus,adr}){
    return (
        <div>
        <hr/>
        <CardText className="cd_profile_business_call">회사 번호 : {buscall} </CardText>
        <CardText className="cd_profile_business">회사 : {bus}</CardText>
        <CardText className="cd_profile_address">주소 : {adr}</CardText>
        </div>
    )
}


const mapStateToProps = (state) => {
  return {
    contact_group:state.contact_list.contact.group
  }
}

export default connect(mapStateToProps)(CardList);