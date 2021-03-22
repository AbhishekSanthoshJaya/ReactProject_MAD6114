import React from 'react'

import BaseView from './layout/base'
import UserProvider from './providers/UserProvider'
function App() {

	return (

		<UserProvider>
			<BaseView/>	
		</UserProvider>
			
			
	
	)

}

export default App
