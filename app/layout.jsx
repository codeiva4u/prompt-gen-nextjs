import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/provider';

export const metadata= {
  title: 'PromptDB',
  description: 'share & store AI prompts'

}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>

        </Provider>
       
      </body>
    </html>
  )
}

export default RootLayout