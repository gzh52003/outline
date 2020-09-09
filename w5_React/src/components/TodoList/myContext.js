import React from 'react';

// 1.创建Context
const defaultData = {username:'laoxie'}
const myContext = React.createContext(defaultData);

export default myContext