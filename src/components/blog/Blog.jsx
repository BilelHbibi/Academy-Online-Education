import React from 'react'
import BlogCard from './BlogCard'
import Back from '../common/back/Back'

const Blog = () => {
  return (
    <>
    <Back title="blog Posts"/>
    <section className="blog padding">
      <div className="container grid3">
        <BlogCard />
      </div>
    </section>
    </>
  )
}

export default Blog