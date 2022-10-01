import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const contextValue = {};

function GlobalProvider({ children }) {
	return (
		<GlobalContext.Provider value={ contextValue }>
			{ children }
		</GlobalContext.Provider>
	);
}

export default GlobalProvider;