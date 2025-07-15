import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    description: "Measures how fast Rwanda's economy is growing compared to the previous year",
    lastUpdated: "Q1 2025",
  },
  {
    id: "inflation",
    title: "Inflation Rate (CPI)",
    value: "7.1%",
    change: "+1.2%",
    icon: Percent,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Shows how much prices for everyday goods and services have increased",
    lastUpdated: "June 2025",
  },
  {
    id: "interest-rate",
    title: "Interest Rate (MPR)",
    value: "6.5%",
    change: "0.0%",
    icon: Percent,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "The central bank's key rate that influences borrowing costs across the economy",
    lastUpdated: "June 2025",
  },
  {
    id: "exchange-rate",
    title: "Exchange Rate (RWF/USD)",
    value: "1,285",
    change: "-15 RWF",
    icon: DollarSign,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "How many Rwandan Francs you need to buy one US Dollar",
    lastUpdated: "July 15, 2025",
  },
  {
    id: "unemployment",
    title: "Unemployment Rate",
    value: "16.8%",
    change: "-0.3%",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Percentage of people actively looking for work but unable to find jobs",
    lastUpdated: "Q1 2025",
  },
]

export default function IndicatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Economic Indicators</h1>
          <p className="text-xl text-gray-600">
            Track Rwanda's key economic metrics and understand what they mean for the country's development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {indicators.map((indicator) => {
            const IconComponent = indicator.icon
            return (
              <Link key={indicator.id} href={`/indicators/${indicator.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-full ${indicator.bgColor} mb-4`}>
                        <IconComponent className={`h-6 w-6 ${indicator.color}`} />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-xl">{indicator.title}</CardTitle>
                    <CardDescription className="text-base">{indicator.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{indicator.value}</div>
                        <div
                          className={`text-sm font-medium ${indicator.change.startsWith("+") ? "text-green-600" : indicator.change.startsWith("-") ? "text-red-600" : "text-gray-600"}`}
                        >
                          {indicator.change} from last period
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Last updated: {indicator.lastUpdated}</div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
