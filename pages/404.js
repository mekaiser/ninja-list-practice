import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      // router.go(-1) // go one link backward
      // router.go(+1) // go one link forward
      router.push('/')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [router])
  return (
    <div className='not-found'>
      <h1>Oooops....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the
        <Link href='/'>
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
