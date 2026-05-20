import { permanentRedirect } from 'next/navigation'

export const metadata = {
  title: 'Circulars & Notices | NPS Kaloor',
  description:
    'Official CBSE circulars, notices, and announcements followed by National Public School Kaloor.',
}

export default function CircularsPage() {
  permanentRedirect(
    'https://cbseacademic.nic.in/circulars.html'
  )
}