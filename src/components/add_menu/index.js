import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import * as actions from '../../actions';
import AddForm from './add_form';

class AddMenu extends Component {
    constructor(props){
        super(props);
        this.add_handleClick = this.add_handleClick.bind(this);
    }
    add_handleClick(){
        if(this.props.add_form_status == false){
            this.props.handleChange("add_hiddenform-active",true);
        }else{
            this.props.handleChange("add_hiddenform",false);
        }
    }
    render() {
        return (
            <div>
                <AddForm visible={this.props.add_form_status} div_class={this.props.add_form_clsname} />
                {/**<Button color="primary" onClick={this.add_handleClick} className="add_menu"><i className="fa fa-plus" aria-hidden="true"></i></Button>**/}
            </div>
        );
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
export default connect(mapStateToProps,matpDispatchToProps)(AddMenu);