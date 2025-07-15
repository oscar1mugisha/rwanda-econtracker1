import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"

const insights = [
  {
    title: "Why Inflation Rose to 7.1% in June 2025 – What it Means for You",
    date: "June 15, 2025",
    category: "Inflation Analysis",
    summary:
      "Understanding the recent spike in consumer prices and its impact on everyday Rwandans. We break down the key drivers including food prices, fuel costs, and supply chain disruptions, plus what to expect in the coming months.",
    slug: "inflation-june-2025",
    readTime: "5 min read",
  },
  {
    title: "What the Central Bank Rate Change Tells Us About Rwanda's Economy",
    date: "May 28, 2025",
    category: "Monetary Policy",
    summary:
      "The National Bank of Rwanda's latest monetary policy decision signals important shifts in economic strategy. Here's what students and professionals need to know about interest rates and their impact on borrowing, saving, and investment.",
    slug: "central-bank-rate-analysis",
    readTime: "4 min read",
  },
  {
    title: "Rwanda's GDP Growth: Sustaining 8% in a Challenging Global Environment",
    date: "May 10, 2025",
    category: "Economic Growth",
    summary:
      "Despite global economic headwinds, Rwanda maintains impressive growth rates. We explore the sectors driving this performance and whether it's sustainable in the long term.",
    slug: "gdp-growth-sustainability",
    readTime: "6 min read",
  },
  {
    title: "Youth Unemployment: The Challenge and Emerging Solutions",
    date: "April 22, 2025",
    category: "Labor Market",
    summary:
      "With youth unemployment remaining high, we examine government initiatives, private sector partnerships, and skills development programs that are beginning to make a difference.",
    slug: "youth-unemployment-solutions",
    readTime: "7 min read",
  },
  {
    title: "Exchange Rate Stability: How Rwanda Manages Currency Fluctuations",
    date: "April 8, 2025",
    category: "Currency & Trade",
    summary:
      "An in-depth look at Rwanda's exchange rate policy, its impact on trade, and how the central bank maintains relative stability in volatile global markets.",
    slug: "exchange-rate-stability",
    readTime: "5 min read",
  },
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Oscar's Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            In-depth analysis and commentary on Rwanda's economic trends, written in plain language for students,
            professionals, and anyone interested in understanding our economy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <Link key={index} href={`/insights/${insight.slug}`}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{insight.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {insight.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{insight.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{insight.readTime}</div>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                About Oscar's Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These insights are written by Oscar Mugisha, an aspiring economist passionate about making Rwanda's
                economic data accessible to everyone. Each article breaks down complex economic concepts into
                understandable explanations for students, young professionals, and policymakers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
