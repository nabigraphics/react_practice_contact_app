import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Input, Label } from 'reactstrap';
import * as actions from '../../actions';

class Prompt extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.visible == false) return null;
        if(this.props.title == "group"){
            return (
                <div className="Prompt_form">
                    <div className="parent" style={{height:'170px',marginTop:'-85px'}}>
                        <Label for="exampleEmail">그룹 생성</Label>
                        <Input type="name" placeholder="그룹 이름 입력" />
                        <ButtonGroup className="prompt_bt">
                            <Button onClick={() => this.props.openPrompt("",false)} outline  color="primary">추가</Button>
                            <Button onClick={() => this.props.openPrompt("",false)} outline  color="danger">닫기</Button>
                        </ButtonGroup>
                    </div>
                </div>
            );
        }else if(this.props.title == "user_invite"){
            return(
                <div className="Prompt_form">
                    <div className="parent" style={{height:'240px',marginTop:'-120px'}}>
                        <Label >사용자 초대</Label>
                        <Input type="email" placeholder="이메일 입력" />
                        <Label >그룹 선택</Label>
                        <Input type="select">
                            <option>그룹1</option>
                            <option>그룹2</option>
                            <option>그룹3</option>
                            <option>그룹4</option>
                        </Input>
                        <ButtonGroup className="prompt_bt">
                            <Button onClick={() => this.props.openPrompt("",false)} outline  color="primary">추가</Button>
                            <Button onClick={() => this.props.openPrompt("",false)} outline  color="danger">닫기</Button>
                        </ButtonGroup>
                    </div>
                </div>
            )    
        }else if(this.props.title == "edit_group_title"){
            return(
                <div className="Prompt_form">
                    <div className="parent" style={{height:'170px',marginTop:'-85px'}}>
                        <Label >그룹 이름 변경</Label>
                        <Input type="name" placeholder={this.props.data} />
                        <ButtonGroup className="prompt_bt">
                            <Button onClick={() => this.props.openPrompt("",false)} outline  color="primary">변경</Button>
                            <Button onClick={() => this.props.openPrompt("",false)} outline  color="danger">닫기</Button>
                        </ButtonGroup>
                    </div>
                </div>
            )    
        }
    }
}
const mapStateToProps = (state) => {
  return {
    title:state.prompt.prompt_title,
    add_form_clsname:state.add_form.add_form_clsname,
    add_form_status:state.add_form.add_form_status,
    data:state.prompt.data
  }  
}
const matpDispatchToProps = (dispatch) =>{
  return{
   openPrompt: (prompt_title,prompt_visible) => {dispatch(actions.prompt_open(prompt_title,prompt_visible))}
  }
}
export default connect(mapStateToProps,matpDispatchToProps)(Prompt);