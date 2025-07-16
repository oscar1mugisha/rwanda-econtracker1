import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Twitter, Target, Users, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">OM</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Oscar Mugisha</h1>
          <p className="text-xl text-gray-600 mb-6">Aspiring Economist & Creator of Rwanda EconTracker</p>
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col space-y-4 mt-6 max-w-md">
  {/* Phone */}
  <div className="flex items-center space-x-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.6a1 1 0 011 1v3.6a1 1 0 01-1 1H6.41a12.042 12.042 0 005.292 5.292v-1.188a1 1 0 011-1h3.6a1 1 0 011 1v3.6a2 2 0 01-2 2h-1.578c-8.04 0-10.912-10.912-10.912-10.912z"
      />
    </svg>
    <span className="text-gray-800 font-medium">+250 798 499 709</span>
  </div>

  {/* Email */}
  <a
    href="mailto:oscarmugisha2@gmail.com"
    className="flex items-center space-x-3 text-blue-600 hover:underline"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0zm4 8v-8a4 4 0 00-4-4H8a4 4 0 00-4 4v8"
      />
    </svg>
    <span>oscarmugisha2@gmail.com</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/oscar-mugisha1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-blue-700 hover:underline"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75S5.53 4.25 6.5 4.25 8.25 5.03 8.25 6 7.47 7.75 6.5 7.75zm13.5 11.25h-3v-5.5c0-1.33-1.67-1.23-1.67 0v5.5h-3v-10h3v1.37c1.39-2.58 6-2.78 6 2.47v6.16z" />
    </svg>
    <span>LinkedIn Profile</span>
  </a>

  {/* X (formerly Twitter) */}
  <a
    href="https://x.com/mugisha_rw?t=IDtLIhSLQIWhpQpQUZJGnw&s=08"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-blue-500 hover:underline"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.958 4.958 0 002.163-2.723 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482 13.948 13.948 0 01-10.141-5.146 4.822 4.822 0 001.523 6.574 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.925 4.925 0 004.604 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.056 0 14.004-7.496 14.004-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 002.46-2.548l-.001-.001z" />
    </svg>
    <div>
      <span>X (formerly Twitter)</span>
      <p className="text-xs text-gray-600">@mugisha_rw</p>
    </div>
  </a>
</div>

          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed">
              Rwanda EconTracker exists to make economic understanding accessible to every Rwandan. Too often, economic
              data and analysis are presented in complex, technical language that excludes the very people who are most
              affected by economic policies. Our mission is to bridge this gap by providing clear, accurate, and timely
              economic information that empowers students, young professionals, and policymakers to make informed
              decisions.
            </p>
          </CardContent>
        </Card>

        {/* About Oscar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Oscar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Oscar Mugisha, an aspiring economist with a passion for making complex economic concepts accessible
                to everyone. Currently pursuing my studies in economics, I've always been fascinated by how economic
                policies and indicators affect real people's lives.
              </p>
              <p>
                Growing up in Rwanda, I witnessed firsthand how economic changes impact communities, families, and
                individuals. Yet I noticed that most economic information was either too technical for the average
                person or simply not available in formats that people could easily understand and use.
              </p>
              <p>
                This realization inspired me to create Rwanda EconTracker – a platform where anyone can come to
                understand what's happening in our economy, why it matters, and how it affects their daily lives.
                Whether you're a student trying to understand inflation, a young professional planning your career, or a
                policymaker seeking clear data, this platform is designed for you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What We Offer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">For Everyone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Economic insights written in plain language for students, professionals, and curious citizens.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Real-Time Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Up-to-date economic indicators with clear explanations of what they mean for Rwanda.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Learn & Grow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Educational resources to build your economic literacy from the ground up.</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have questions, suggestions, or want to collaborate? I'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell me more..." rows={4} />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Rwanda EconTracker is an independent project created to serve the Rwandan community. All data is sourced
            from official government institutions including NISR, BNR, and MINECOFIN.
          </p>
        </div>
      </div>
    </div>
  )
}
