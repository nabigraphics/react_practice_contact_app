import * as types from '../actions/ActionTypes';

const initialState = {
  status:false,
  hbg_menu:"hbg_menu",
  hbg_menu_icon:"fa fa-bars",
  overflow_lock:""
}

export default function (state = initialState, action){
  switch(action.type){
    case types.CHANGE_SIDEBAR_STATUS:
      return {
        ...state,
        status:action.status,
        hbg_menu:action.hbg_menu,
        hbg_menu_icon:action.hbg_menu_icon,
        overflow_lock:action.overflow_lock
      }
    default :
      return state;
  }
}
