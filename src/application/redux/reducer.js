/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {combineReducers} from 'redux';

import appContainerReducer from '../controllers/app/AppContainer/reducer.js';
import appSpinnerReducer from '../controllers/app/AppSpinner/reducer.js';
import appMessageReducer from '../controllers/app/AppMessage/reducer.js';
import deskReducer from '../controllers/workspace/Desk/reducer.js';
import deskPageReducer from '../controllers/workspace/DeskPage/reducer.js';
import toolbarLeftReducer from '../controllers/workspace/ToolbarLeft/reducer.js';
import toolbarTopReducer from '../controllers/workspace/ToolbarTop/reducer.js';
import pageListControlsReducer from '../controllers/workspace/PageListControls/reducer.js';
import pageViewControlsReducer from '../controllers/workspace/PageViewControls/reducer.js';
import pageOptionsModalReducer from '../controllers/workspace/PageOptionsModal/reducer.js';

const reducer = combineReducers({
    appContainer: appContainerReducer,
    appSpinner: appSpinnerReducer,
    appMessage: appMessageReducer,
    desk: deskReducer,
    deskPage: deskPageReducer,
    toolbarLeft: toolbarLeftReducer,
    toolbarTop: toolbarTopReducer,
    pageListControls: pageListControlsReducer,
    pageViewControls: pageViewControlsReducer,
    pageOptionsModal: pageOptionsModalReducer
});

export default reducer;
