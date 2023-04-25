import ClientOnly from './components/ClientOnly'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title='hello, Airbnb' isOpen actionLabel='submit'/>
          <Navbar />

        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
