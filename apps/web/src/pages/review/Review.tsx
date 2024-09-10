import { useParams } from '@tanstack/react-router'

export default function Review() {
  const { id } = useParams({
    strict: true,
    from: '/review/$id'
  })

  console.log('params:', id)

  return (
    <div>Review</div>
  )
}
