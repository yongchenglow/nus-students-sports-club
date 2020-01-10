import { combineReducers } from 'redux';

import restaurants from './restaurants';
import collections from './collections';
import friends from './friends';
import user from './user';

export default combineReducers({
  restaurants: restaurants,
  collections: collections,
  friends: friends,
  user: user,
});
