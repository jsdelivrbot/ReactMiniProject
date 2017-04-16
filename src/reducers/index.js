/**
 * Created by Joy on 2017. 4. 13..
 */
import { combineReducers } from 'redux';

import TabsReducer from './tabs.reducer';

const rootReducer = combineReducers({
  tabs: TabsReducer,
});

export default rootReducer;