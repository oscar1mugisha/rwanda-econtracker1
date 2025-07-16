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
            <a href="mailto:oscarmugisha250@gmail.com" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" size="sm" className="w-full justify-start mb-2">
    <Mail className="mr-2 h-4 w-4" />
    Email Me
  </Button>
</a>

<a href="https://www.linkedin.com/in/oscarmugisha/" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" size="sm" className="w-full justify-start mb-2">
    <Linkedin className="mr-2 h-4 w-4" />
    LinkedIn
  </Button>
</a>

{/* Optional: Remove this Twitter block if you don’t use Twitter */}
<a href="https://twitter.com/oscarmugisha" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" size="sm" className="w-full justify-start">
    <Twitter className="mr-2 h-4 w-4" />
    Twitter
  </Button>
</a>

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
