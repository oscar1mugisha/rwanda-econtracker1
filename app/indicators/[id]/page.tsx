import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, AlertCircle, Info } from "lucide-react"
import Link from "next/link"

const indicatorData = {
  "gdp-growth": {
    title: "GDP Growth Rate",
    currentValue: "8.2%",
    change: "+0.5%",
    definition:
      "GDP Growth Rate measures how fast Rwanda's economy is expanding. It compares the total value of goods and services produced this year versus last year.",
    whatItMeans:
      "An 8.2% growth rate means Rwanda's economy is performing very well. This suggests more jobs are being created, businesses are expanding, and living standards are improving. It's one of the highest growth rates in Africa, showing Rwanda's strong economic momentum.",
    lastUpdated: "Q1 2025",
    source: "National Institute of Statistics of Rwanda (NISR)",
    trend: "Positive - steady growth above 7% for the past 3 years",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  inflation: {
    title: "Inflation Rate (CPI)",
    currentValue: "7.1%",
    change: "+1.2%",
    definition:
      "Inflation measures how much more expensive things become over time. It tracks the average price increase for a basket of goods and services that typical families buy.",
    whatItMeans:
      "A 7.1% inflation rate means prices are rising faster than ideal. This makes life more expensive for families, especially for food and transport. The government and central bank are working to bring this down to around 5% through various policies.",
    lastUpdated: "June 2025",
    source: "National Institute of Statistics of Rwanda (NISR)",
    trend: "Concerning - above the 5% target, mainly driven by food and fuel prices",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  "interest-rate": {
    title: "Interest Rate (MPR)",
    currentValue: "6.5%",
    change: "0.0%",
    definition:
      "The Monetary Policy Rate is the interest rate set by Rwanda's central bank. It influences how much banks charge for loans and pay for savings.",
    whatItMeans:
      "At 6.5%, the central bank is maintaining a balanced approach. This rate affects how expensive it is to borrow money for homes, businesses, or education. A stable rate suggests the bank is comfortable with current economic conditions.",
    lastUpdated: "June 2025",
    source: "National Bank of Rwanda (BNR)",
    trend: "Stable - unchanged for the past 6 months, balancing growth and inflation concerns",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  "exchange-rate": {
    title: "Exchange Rate (RWF/USD)",
    currentValue: "1,285 RWF",
    change: "-15 RWF",
    definition:
      "The exchange rate shows how many Rwandan Francs you need to buy one US Dollar. It reflects the relative strength of Rwanda's currency.",
    whatItMeans:
      "At 1,285 RWF per USD, the Franc has strengthened slightly (fewer Francs needed per Dollar). This makes imports cheaper but exports more expensive. A stable exchange rate helps businesses plan and keeps import prices predictable.",
    lastUpdated: "July 15, 2025",
    source: "National Bank of Rwanda (BNR)",
    trend: "Relatively stable - minor fluctuations within normal range",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  unemployment: {
    title: "Unemployment Rate",
    currentValue: "16.8%",
    change: "-0.3%",
    definition:
      "The unemployment rate shows what percentage of people who want to work cannot find jobs. It only counts people actively looking for work.",
    whatItMeans:
      "At 16.8%, unemployment remains high, especially among young people. However, the slight decrease is encouraging. The government is focusing on skills training, entrepreneurship programs, and attracting investment to create more jobs.",
    lastUpdated: "Q1 2025",
    source: "National Institute of Statistics of Rwanda (NISR)",
    trend: "Slowly improving - down from 17.1% last quarter, but still above desired levels",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
}

export default function IndicatorDetailPage({ params }: { params: { id: string } }) {
  const indicator = indicatorData[params.id as keyof typeof indicatorData]

  if (!indicator) {
    return <div>Indicator not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/indicators">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Indicators
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{indicator.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl font-bold text-gray-900">{indicator.currentValue}</div>
            <div
              className={`text-lg font-medium ${indicator.change.startsWith("+") ? "text-green-600" : indicator.change.startsWith("-") ? "text-red-600" : "text-gray-600"}`}
            >
              {indicator.change} from last period
            </div>
          </div>
          <p className="text-gray-600">
            Last updated: {indicator.lastUpdated} • Source: {indicator.source}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  What is {indicator.title}?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{indicator.definition}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  What This Means for Rwanda's Economy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{indicator.whatItMeans}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5-Year Trend Chart</CardTitle>
                <CardDescription>Historical data and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive chart coming soon</p>
                    <p className="text-sm">Will show 5-year historical trend</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{indicator.trend}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/indicators/gdp-growth" className="block text-blue-600 hover:underline">
                    GDP Growth Rate
                  </Link>
                  <Link href="/indicators/inflation" className="block text-blue-600 hover:underline">
                    Inflation Rate
                  </Link>
                  <Link href="/indicators/interest-rate" className="block text-blue-600 hover:underline">
                    Interest Rate
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Frequency:</strong> Monthly/Quarterly
                  </div>
                  <div>
                    <strong>Next Update:</strong> End of month
                  </div>
                  <div>
                    <strong>Historical Range:</strong> Available from 2010
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
