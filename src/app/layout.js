import Header from './component/Header'
import Navbar from './component/Navbar'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'Imdb Clone',
  description: 'By Deva Singh Rajput',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header />
        <Navbar />
        <main>{children}</main>

        </Providers>
        
      </body>
    </html>
  )
}
