// do not move to index.entry.js, or will cause React not found error

import React from 'react';
import moment from 'moment';
moment.locale('zh-cn');

const root = Function('return this')() || (42, eval)('this');

root.React = React;
