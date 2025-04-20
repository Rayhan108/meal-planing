"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import styles from "@/app/styles.module.css"
const SignUpPage=()=> {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <div className={`max-w-md mx-auto px-4 py-8 ${styles.fontInter}`}>
      <h1 className={`text-2xl font-bold text-center mb-8 `}>Create Your Account</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-gray-500">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-gray-500">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-500">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-gray-500">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
            required
          />
        </div>

        <div className={`text-sm text-gray-700 space-y-2 ${styles.fontInter}`}>
          <p>Be sure to use the email address associated with your fair
          <br/>Any questions? Contact your sales representative</p>
        </div>

        <div className={`text-sm ${styles.fontInter}`}>
          <p>
            By signing up, you&apos;re agreeing to our{" "}
            <Link href="/terms" className="text-[#F37975] hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#F37975] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <button
          type="submit"
          className={`w-full bg-[#FBD5D4] text-gray-700 font-medium py-3 rounded-lg hover:bg-[#F37975] transition-colors ${styles.fontInter}`}
        >
          Create Account
        </button>
      </form>

      <div className={`text-center mt-6 ${styles.fontInter}`}>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-[#F37975] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage