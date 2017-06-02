import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            add_form_style:{
                backgroundColor:'#f2f2f2'
            }
        }
        this.add_handleClick = this.add_handleClick.bind(this);
    }
    add_handleClick(){
        if(this.props.add_form_status == false){
            this.props.handleChange("add_hiddenform-active",true);
        }else{
            this.props.handleChange("add_hiddenform",false);
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("변경!" + nextProps.visible);
    }
    render(){
        const visible = this.props.visible;
        if(!visible ) return null;
        return(
            <div className={this.props.div_class} style={this.state.add_form_style}>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">카테고리</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>설정 안함</option>
                            <option>가족</option>
                            <option>친구</option>
                            <option>회사</option>
                            <option>커스텀</option>
                        </Input>
                    </FormGroup>
                    <Row>
                        <Col xs="3" sm="4">
                        <FormGroup>
                        <Label for="inputposition">직위</Label>
                        <Input type="name" name="inputposition" id="inputposition" />
                    </FormGroup>
                    </Col>
                        <Col xs="3" sm="4">
                            <FormGroup>
                        <Label for="inputname">이름</Label>
                        <Input type="name" name="inputname" id="inputname" />
                    </FormGroup>
                        </Col>
                        <Col sm="4">
                        <FormGroup>
                        <Label for="inputpersonaltel">휴대폰</Label>
                        <Input type="tel" name="inputpersonaltel" id="inputpersonaltel" />
                    </FormGroup>

                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="inputemail">Email</Label>
                        <Input type="email" name="inputemail" id="inputemail" placeholder="이메일 입력" />
                    </FormGroup>
                    <Row>
                        <Col xs="6">
                            <FormGroup>
                                <Label for="inputbusinessname">회사</Label>
                                <Input type="name" name="inputbusinessname" id="inputbusinessname" placeholder="회사 입력" />
                            </FormGroup>
                            </Col>
                            <Col xs="6">
                            <FormGroup>
                                <Label for="inputbusinesstel">회사 연락처</Label>
                                <Input type="tel" name="inputbusinesstel" id="inputbusinesstel" placeholder="회사 연락처 입력" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="inputaddress">주소</Label>
                        <Input type="address" name="inputaddress" id="inputaddress" placeholder="회사 주소 입력" />
                    </FormGroup>
                    <Row>
                        <Col xs="6">
                            <Button color="primary" size="lg" block>추가</Button>
                        </Col>
                        <Col xs="6">
                            <Button color="danger" size="lg" block onClick={this.add_handleClick}>취소</Button>
                        </Col>
                    </Row>
                </Form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    add_form_clsname:state.add_form.add_form_clsname,
    add_form_status:state.add_form.add_form_status
  }  
}
const matpDispatchToProps = (dispatch) =>{
  return{
    handleChange: (classdata,status) =>{ dispatch(actions.change_add_form(classdata,status))}
  }
}
export default connect(mapStateToProps,matpDispatchToProps)(AddForm);