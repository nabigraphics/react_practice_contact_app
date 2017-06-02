import React from 'react';
import Main from '../components/main/';
import Menubar from '../components/menubar/';
import AddMenu from '../components/add_menu/';
import List from '../components/list/';

const Index = () => {
  return(
    <div>
      <Menubar />
      <AddMenu />
      <Main/>
      <div className="shadow"></div>
      <List />
      <div className="footer"></div>
    </div>
  );
}

export default Index;
