import { Inter, Cairo } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'كلية البنات الطبية | Girls Medical College',
  description: 'كلية البنات الطبية - تميز في التعليم الطبي والبحث العلمي',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
