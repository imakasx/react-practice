import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, Postcard } from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const isLoggedIn = useSelector((state) => state.auth.status)

  useEffect(() => {
    let active = true

    appwriteService.getPosts().then((result) => {
      if (!active) return

      if (result) {
        setPosts(result.documents)
      } else {
        setLoadError(true)
      }
    }).catch(() => {
      if (active) setLoadError(true)
    }).finally(() => {
      if (active) setLoading(false)
    })

    return () => {
      active = false
    }
  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <section className='mb-8 rounded-xl bg-white p-8 text-center shadow-sm sm:p-12'>
          <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Welcome to Mega Blog</h1>
          <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
            Discover stories and share your ideas with the community.
          </p>
          <div className='mt-6 flex justify-center gap-3'>
            {isLoggedIn ? (
              <Link to='/add-post' className='rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700'>
                Write a post
              </Link>
            ) : (
              <>
                <Link to='/signup' className='rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700'>
                  Get started
                </Link>
                <Link to='/login' className='rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-50'>
                  Sign in
                </Link>
              </>
            )}
          </div>
        </section>

        <section aria-live='polite'>
          <h2 className='mb-4 text-2xl font-bold'>Latest posts</h2>
          {loading && <p className='py-6 text-center text-gray-600'>Loading posts...</p>}
          {!loading && loadError && (
            <p className='rounded-lg bg-white p-6 text-center text-red-700'>
              Posts could not be loaded. Check your Appwrite settings in the project&apos;s .env file and restart the app.
            </p>
          )}
          {!loading && !loadError && posts.length === 0 && (
            <p className='rounded-lg bg-white p-6 text-center text-gray-600'>
              No published posts yet. Check back soon!
            </p>
          )}
          {!loading && !loadError && posts.length > 0 && (
            <div className='flex flex-wrap'>
              {posts.map((post) => (
                <div key={post.$id} className='w-full p-2 sm:w-1/2 lg:w-1/4'>
                  <Postcard {...post} />
                </div>
              ))}
            </div>
          )}
        </section>
      </Container>
    </div>
  )
}

export default Home
