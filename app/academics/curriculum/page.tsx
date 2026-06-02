import { permanentRedirect } from 'next/navigation'

export const metadata = {
  title: 'Curriculum | NPS Kaloor',
  description:
    'Official CBSE Curriculum 2026–27 followed by National Public School Kaloor.',
}

export default function CurriculumPage() {
  permanentRedirect(
    'https://cbseacademic.nic.in/curriculum_2025.html'
  )
}