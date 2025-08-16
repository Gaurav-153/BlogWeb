'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('✅ Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('❌ Something went wrong. Try again!')
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg w-full mx-auto space-y-5 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
        rows="5"
        required
      ></textarea>

      <motion.button
        type="submit"
        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition transform hover:-translate-y-0.5"
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>

      {status && (
        <p
          className={`text-sm text-center mt-2 ${status.includes('✅') ? 'text-green-500' : 'text-red-500'
            }`}
        >
          {status}
        </p>
      )}
    </motion.form>
  )
}
