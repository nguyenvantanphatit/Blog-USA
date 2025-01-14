"use client"
import React, { useEffect, useState } from 'react'
import { getBlogDetails } from '@/lib/api'
import parse from 'html-react-parser';
interface BlogDetail {
  id: number
  title: string
  content: string
  slug: string
  createdAt: string
  Author: {
    id: number
    name: string
    email: string
  }
}

export default function BlogDetailspage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [blog, setBlog] = useState<BlogDetail | null>(null)

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const data = await getBlogDetails(slug)
        setBlog(data)
      } catch (error) {
        console.error('Error fetching blog details:', error)
      }
    }
    if (slug) {
      fetchBlogDetails()
    }
  }, [slug])

  if (!blog) return <p>Loading...</p>
  return (
    <section className="py-24 blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          {blog.title}
        </h2>
        <div className="text-center mb-4">
          <span className="text-indigo-600 font-medium">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <p className="text-gray-500">By {blog.Author.name}</p>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  )
}
