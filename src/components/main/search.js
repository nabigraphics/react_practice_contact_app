import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input,InputGroup,Row,Col } from 'reactstrap';


class Search extends React.Component{

  render(){
    return(
        <InputGroup >
        {/**
          <Input type="select" name="select" onChange={this.props.lang}>
            <option defaultValue>모두</option>
            <option>가족</option>
            <option>친구</option>
            <option>회사</option>
          </Input >
          **/}
          <Input name="search" placeholder="검색" onKeyPress={this.props.title}/>
        </InputGroup>
    )
  }
}

export default Search;
