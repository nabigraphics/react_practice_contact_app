import * as types from './ActionTypes';

export function change_add_form(add_form_clsname,add_form_status){
  return{
    type:types.CHANGE_ADD_FORM,
    add_form_clsname,
    add_form_status
  }
}

export function change_sidebar_status(status,hbg_menu,hbg_menu_icon,overflow_lock){
  return{
    type:types.CHANGE_SIDEBAR_STATUS,
    status,
    hbg_menu,
    hbg_menu_icon,
    overflow_lock
  }
}
export function prompt_open(prompt_title,prompt_visible,data){
  return{
    type:types.OPEN_GROUP_ADD_FROM,
    prompt_title,
    prompt_visible,
    data
  }
}

export function update_email(email){
  return{
    type:types.UPDATE_EMAIL,
    email
  }
}