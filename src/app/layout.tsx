import './globals.css'

export const metadata = {
  title: 'Virtual Friends',
  description: 'Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='grid min-h-screen grid-cols-[10px,1fr] grid-rows-[100px,1fr,100px]'>
        <div className='row-span-2 sm:row-start-2 sm:row-span-1 bg-yellow-50'/>

        
        <header className='sm:col-span-2 bg-red-50'>Header</header>


        <main className='w-full'>{children}</main>


        <footer className='bg-red-50 sm:col-start-1 sm:col-span-2 col-start-2'>Footer</footer>
      
      </body>
    </html>
  )
}
