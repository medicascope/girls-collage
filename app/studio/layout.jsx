export const metadata = {
  title: 'Sanity Studio - Girls Medical College',
  description: 'Content management for Girls Medical College website',
}

export default function StudioLayout({
  children,
}) {
  return (
    <html lang="ar">
      <body style={{margin: 0}}>{children}</body>
    </html>
  )
} 