import { combineReducers } from 'redux';
import add_form from './add_form';
import contact_list from './contact_list';
import sidebar_status from './sidebar_status';
import user_data from './user_data';
import prompt from './prompt';
const reducers = combineReducers({
  add_form,contact_list,sidebar_status,user_data,prompt
})

export default reducers;
