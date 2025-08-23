import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Percent, Users, ArrowRight } from "lucide-react"

const indicators = [
  {
    id: "gdp-growth",
    title: "GDP Growth Rate",
    value: "8.2%",
    change: "+0.5%",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Economic growth compared to previous year",
  },
  {
    id: "inflation",
    title: "Inflation Rate (CPI)",
    value: "7.1%",
    change: "+1.2%",
    icon: Percent,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Price changes for goods and services",
  },
  {
    id: "interest-rate",
    title: "Interest Rate (MPR)",
    value: "6.5%",
    change: "0.0%",
    icon: Percent,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Central bank monetary policy rate",
  },
  {
    id: "exchange-rate",
    title: "Exchange Rate",
    value: "1,285 RWF/USD",
    change: "-15 RWF",
    icon: DollarSign,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Rwandan Franc to US Dollar rate",
  },
  {
    id: "unemployment",
    title: "Unemployment Rate",
    value: "16.8%",
    change: "-0.3%",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Percentage of workforce without jobs",
  },
]

const featuredInsights = [
  {
    title: "Why Inflation Rose to 7.1% in June 2025 – What it Means for You",
    date: "June 15, 2025",
    summary:
      "Understanding the recent spike in consumer prices and its impact on everyday Rwandans. We break down the key drivers and what to expect in the coming months.",
    slug: "inflation-june-2025",
  },
  {
    title: "What the Central Bank Rate Change Tells Us About Rwanda's Economy",
    date: "May 28, 2025",
    summary:
      "The National Bank of Rwanda's latest monetary policy decision signals important shifts in economic strategy. Here's what students and professionals need to know.",
    slug: "central-bank-rate-analysis",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Rwanda EconTracker</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground dark:text-background mb-8 max-w-3xl mx-auto"
>
            Your gateway to understanding Rwanda's economy in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground hover:bg-blue-700 transition"
>
              Explore Indicators
            </Button>
            <Button size="lg" className="border border-primary text-primary-foreground dark:border-secondary dark:text-secondary-foreground hover:bg-secondary hover:text-background transition"
>
              Learn Economics
            </Button>
          </div>
        </div>
      </section>

      {/* Key Indicators Snapshot */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Economic Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indicators.map((indicator) => {
              const IconComponent = indicator.icon
              return (
                <Link key={indicator.id} href={`/indicators/${indicator.id}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-full ${indicator.bgColor}`}>
                          <IconComponent className={`h-6 w-6 ${indicator.color}`} />
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <CardTitle className="text-lg">{indicator.title}</CardTitle>
                      <CardDescription>{indicator.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{indicator.value}</div>
                          <div
                            className={`text-sm ${indicator.change.startsWith("+") ? "text-green-600" : indicator.change.startsWith("-") ? "text-red-600" : "text-gray-600"}`}
                          >
                            {indicator.change} from last period
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Oscar's Insights</h2>
            <Link href="/insights">
              <Button variant="outline">View All Insights</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredInsights.map((insight, index) => (
              <Link key={index} href={`/insights/${insight.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="text-sm text-blue-600 font-medium mb-2">{insight.date}</div>
                    <CardTitle className="text-xl leading-tight">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{insight.summary}</p>
                    <div className="mt-4 flex items-center text-blue-600 font-medium">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Learn Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">New to Economics?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with our beginner-friendly explanations and build your understanding step by step.
          </p>
          <Link href="/learn">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Learning
            </Button>
          </Link>
        </div>
      </section>

      {/* Future Features Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/regional-comparison">
              <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-green-600">Regional Comparison ✨</CardTitle>
                  <CardDescription>Compare Rwanda's indicators with Kenya and Uganda</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="mt-2">Explore Now</Button>
                </CardContent>
              </Card>
            </Link>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Economic Calendar</CardTitle>
                <CardDescription>Track upcoming data releases from NISR and BNR</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
                <CardDescription>Get personalized economic analysis and summaries</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
