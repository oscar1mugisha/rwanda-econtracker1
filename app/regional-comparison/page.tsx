"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Area,
  AreaChart,
} from "recharts"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

// Sample data for regional comparison
const gdpGrowthData = [
  { year: "2020", Rwanda: 3.4, Kenya: -0.3, Uganda: 3.0 },
  { year: "2021", Rwanda: 10.9, Kenya: 7.5, Uganda: 3.4 },
  { year: "2022", Rwanda: 8.2, Kenya: 4.8, Uganda: 4.6 },
  { year: "2023", Rwanda: 7.2, Kenya: 5.0, Uganda: 5.3 },
  { year: "2024", Rwanda: 8.2, Kenya: 4.9, Uganda: 6.0 },
]

const inflationData = [
  { year: "2020", Rwanda: 7.7, Kenya: 5.2, Uganda: 2.8 },
  { year: "2021", Rwanda: 0.4, Kenya: 6.1, Uganda: 2.2 },
  { year: "2022", Rwanda: 13.9, Kenya: 7.7, Uganda: 7.2 },
  { year: "2023", Rwanda: 9.5, Kenya: 6.8, Uganda: 5.4 },
  { year: "2024", Rwanda: 7.1, Kenya: 5.1, Uganda: 3.2 },
]

const unemploymentData = [
  { year: "2020", Rwanda: 20.5, Kenya: 10.4, Uganda: 9.4 },
  { year: "2021", Rwanda: 18.7, Kenya: 11.2, Uganda: 9.8 },
  { year: "2022", Rwanda: 17.9, Kenya: 12.1, Uganda: 10.2 },
  { year: "2023", Rwanda: 17.2, Kenya: 12.7, Uganda: 10.9 },
  { year: "2024", Rwanda: 16.8, Kenya: 13.2, Uganda: 11.5 },
]

const exchangeRateData = [
  { year: "2020", Rwanda: 950, Kenya: 106, Uganda: 3700 },
  { year: "2021", Rwanda: 1005, Kenya: 109, Uganda: 3540 },
  { year: "2022", Rwanda: 1050, Kenya: 120, Uganda: 3550 },
  { year: "2023", Rwanda: 1210, Kenya: 148, Uganda: 3720 },
  { year: "2024", Rwanda: 1285, Kenya: 129, Uganda: 3800 },
]

const currentIndicators = {
  Rwanda: {
    gdpGrowth: 8.2,
    inflation: 7.1,
    unemployment: 16.8,
    exchangeRate: 1285,
    interestRate: 6.5,
    population: 13.6,
    gdpPerCapita: 820,
  },
  Kenya: {
    gdpGrowth: 4.9,
    inflation: 5.1,
    unemployment: 13.2,
    exchangeRate: 129,
    interestRate: 13.0,
    population: 54.0,
    gdpPerCapita: 2080,
  },
  Uganda: {
    gdpGrowth: 6.0,
    inflation: 3.2,
    unemployment: 11.5,
    exchangeRate: 3800,
    interestRate: 10.0,
    population: 47.2,
    gdpPerCapita: 880,
  },
}

const sectorData = [
  { sector: "Agriculture", Rwanda: 24, Kenya: 22, Uganda: 24 },
  { sector: "Industry", Rwanda: 18, Kenya: 17, Uganda: 26 },
  { sector: "Services", Rwanda: 58, Kenya: 61, Uganda: 50 },
]

const tradeData = [
  { category: "Exports", Rwanda: 1.2, Kenya: 6.1, Uganda: 4.2 },
  { category: "Imports", Rwanda: 3.8, Kenya: 17.1, Uganda: 7.8 },
]

const COLORS = {
  Rwanda: "#2563eb", // Blue
  Kenya: "#16a34a", // Green
  Uganda: "#dc2626", // Red
}

const countryFlags = {
  Rwanda: "🇷🇼",
  Kenya: "🇰🇪",
  Uganda: "🇺🇬",
}

export default function RegionalComparisonPage() {
  const [selectedMetric, setSelectedMetric] = useState("gdpGrowth")
  const [selectedCountries, setSelectedCountries] = useState(["Rwanda", "Kenya", "Uganda"])

  const getMetricData = (metric: string) => {
    switch (metric) {
      case "gdpGrowth":
        return gdpGrowthData
      case "inflation":
        return inflationData
      case "unemployment":
        return unemploymentData
      case "exchangeRate":
        return exchangeRateData
      default:
        return gdpGrowthData
    }
  }

  const getMetricLabel = (metric: string) => {
    switch (metric) {
      case "gdpGrowth":
        return "GDP Growth Rate (%)"
      case "inflation":
        return "Inflation Rate (%)"
      case "unemployment":
        return "Unemployment Rate (%)"
      case "exchangeRate":
        return "Exchange Rate (Local Currency per USD)"
      default:
        return "GDP Growth Rate (%)"
    }
  }

  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) return <TrendingUp className="h-4 w-4 text-green-600" />
    if (current < previous) return <TrendingDown className="h-4 w-4 text-red-600" />
    return <Minus className="h-4 w-4 text-gray-600" />
  }

  const getPerformanceColor = (country: string, metric: string) => {
    const values = [
      currentIndicators.Rwanda[metric as keyof typeof currentIndicators.Rwanda],
      currentIndicators.Kenya[metric as keyof typeof currentIndicators.Kenya],
      currentIndicators.Uganda[metric as keyof typeof currentIndicators.Uganda],
    ]

    const countryValue =
      currentIndicators[country as keyof typeof currentIndicators][metric as keyof typeof currentIndicators.Rwanda]

    if (metric === "gdpGrowth") {
      return countryValue === Math.max(...values) ? "text-green-600" : "text-gray-600"
    } else if (metric === "inflation" || metric === "unemployment") {
      return countryValue === Math.min(...values) ? "text-green-600" : "text-gray-600"
    }
    return "text-gray-600"
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Regional Economic Comparison</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Compare Rwanda's economic performance with Kenya and Uganda across key indicators and understand regional
            trends.
          </p>
        </div>

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(currentIndicators).map(([country, data]) => (
            <Card key={country} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{countryFlags[country as keyof typeof countryFlags]}</span>
                    <CardTitle className="text-lg">{country}</CardTitle>
                  </div>
                  <Badge variant="outline">East Africa</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">GDP Growth</div>
                    <div className={`font-semibold ${getPerformanceColor(country, "gdpGrowth")}`}>
                      {data.gdpGrowth}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Inflation</div>
                    <div className={`font-semibold ${getPerformanceColor(country, "inflation")}`}>
                      {data.inflation}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Unemployment</div>
                    <div className={`font-semibold ${getPerformanceColor(country, "unemployment")}`}>
                      {data.unemployment}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">GDP per Capita</div>
                    <div className="font-semibold">${data.gdpPerCapita}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trends">Economic Trends</TabsTrigger>
            <TabsTrigger value="sectors">Sector Analysis</TabsTrigger>
            <TabsTrigger value="trade">Trade & Investment</TabsTrigger>
            <TabsTrigger value="insights">Key Insights</TabsTrigger>
          </TabsList>

          {/* Economic Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Economic Indicators Comparison</CardTitle>
                    <CardDescription>Track and compare key economic metrics over time</CardDescription>
                  </div>
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gdpGrowth">GDP Growth Rate</SelectItem>
                      <SelectItem value="inflation">Inflation Rate</SelectItem>
                      <SelectItem value="unemployment">Unemployment Rate</SelectItem>
                      <SelectItem value="exchangeRate">Exchange Rate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={getMetricData(selectedMetric)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name) => [`${value}${selectedMetric === "exchangeRate" ? "" : "%"}`, name]}
                        labelFormatter={(label) => `Year: ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Rwanda"
                        stroke={COLORS.Rwanda}
                        strokeWidth={3}
                        dot={{ fill: COLORS.Rwanda, strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Kenya"
                        stroke={COLORS.Kenya}
                        strokeWidth={3}
                        dot={{ fill: COLORS.Kenya, strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Uganda"
                        stroke={COLORS.Uganda}
                        strokeWidth={3}
                        dot={{ fill: COLORS.Uganda, strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    <strong>Current {getMetricLabel(selectedMetric)}:</strong>
                  </p>
                  <div className="flex gap-6 mt-2">
                    {Object.entries(currentIndicators).map(([country, data]) => (
                      <span key={country} style={{ color: COLORS[country as keyof typeof COLORS] }}>
                        {countryFlags[country as keyof typeof countryFlags]} {country}:{" "}
                        {data[selectedMetric as keyof typeof data]}
                        {selectedMetric === "exchangeRate" ? "" : "%"}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>GDP Growth Comparison</CardTitle>
                  <CardDescription>Annual economic growth rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={gdpGrowthData.slice(-3)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value}%`, "GDP Growth"]} />
                        <Bar dataKey="Rwanda" fill={COLORS.Rwanda} />
                        <Bar dataKey="Kenya" fill={COLORS.Kenya} />
                        <Bar dataKey="Uganda" fill={COLORS.Uganda} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inflation Trends</CardTitle>
                  <CardDescription>Consumer price inflation rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={inflationData.slice(-3)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value}%`, "Inflation"]} />
                        <Area
                          type="monotone"
                          dataKey="Rwanda"
                          stackId="1"
                          stroke={COLORS.Rwanda}
                          fill={COLORS.Rwanda}
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="Kenya"
                          stackId="2"
                          stroke={COLORS.Kenya}
                          fill={COLORS.Kenya}
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="Uganda"
                          stackId="3"
                          stroke={COLORS.Uganda}
                          fill={COLORS.Uganda}
                          fillOpacity={0.6}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sector Analysis Tab */}
          <TabsContent value="sectors" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Structure by Sector</CardTitle>
                  <CardDescription>GDP contribution by major sectors (% of total GDP)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={sectorData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="sector" type="category" width={80} />
                        <Tooltip formatter={(value) => [`${value}%`, "GDP Share"]} />
                        <Legend />
                        <Bar dataKey="Rwanda" fill={COLORS.Rwanda} />
                        <Bar dataKey="Kenya" fill={COLORS.Kenya} />
                        <Bar dataKey="Uganda" fill={COLORS.Uganda} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rwanda's Economic Structure</CardTitle>
                  <CardDescription>Breakdown of Rwanda's GDP by sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Services", value: 58, fill: "#2563eb" },
                            { name: "Agriculture", value: 24, fill: "#16a34a" },
                            { name: "Industry", value: 18, fill: "#dc2626" },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        ></Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sector Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">🏭 Industry</h4>
                    <p className="text-sm text-blue-800">
                      Uganda leads in industrial GDP share (26%), driven by manufacturing and mining. Rwanda focuses on
                      high-value manufacturing and construction.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">🌾 Agriculture</h4>
                    <p className="text-sm text-green-800">
                      All three countries maintain significant agricultural sectors (~24%), but are transitioning toward
                      services and industry for higher productivity.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">💼 Services</h4>
                    <p className="text-sm text-purple-800">
                      Kenya leads in services (61%), followed by Rwanda (58%). This includes finance,
                      telecommunications, and tourism sectors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trade & Investment Tab */}
          <TabsContent value="trade" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trade Balance</CardTitle>
                  <CardDescription>Exports vs Imports (Billions USD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={tradeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}B`, "Trade Value"]} />
                        <Legend />
                        <Bar dataKey="Rwanda" fill={COLORS.Rwanda} />
                        <Bar dataKey="Kenya" fill={COLORS.Kenya} />
                        <Bar dataKey="Uganda" fill={COLORS.Uganda} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Trade Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(currentIndicators).map(([country, data]) => (
                      <div key={country} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{countryFlags[country as keyof typeof countryFlags]}</span>
                          <span className="font-medium">{country}</span>
                        </div>
                        <div className="text-right text-sm">
                          <div>Pop: {data.population}M</div>
                          <div>GDP/capita: ${data.gdpPerCapita}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Regional Integration & Trade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🤝 East African Community (EAC)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Common market with free movement of goods, services, and people</li>
                      <li>• Customs union reducing trade barriers</li>
                      <li>• Working toward monetary union</li>
                      <li>• Infrastructure development projects (roads, railways, energy)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">📈 Trade Opportunities</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Rwanda: Services, coffee, tea, minerals</li>
                      <li>• Kenya: Manufacturing, agriculture, financial services</li>
                      <li>• Uganda: Agriculture, oil, manufacturing</li>
                      <li>• Cross-border investment increasing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Key Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Rwanda's Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5">Growth</Badge>
                      <span className="text-sm">Highest GDP growth rate in the region at 8.2%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5">Governance</Badge>
                      <span className="text-sm">Strong institutions and business-friendly policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5">Innovation</Badge>
                      <span className="text-sm">Leading in digital transformation and fintech</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5">Services</Badge>
                      <span className="text-sm">Growing services sector (58% of GDP)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-orange-600" />
                    Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5">
                        Employment
                      </Badge>
                      <span className="text-sm">Highest unemployment rate (16.8%) needs addressing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5">
                        Trade
                      </Badge>
                      <span className="text-sm">Large trade deficit requires export diversification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5">
                        Scale
                      </Badge>
                      <span className="text-sm">Smaller economy limits market opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5">
                        Inflation
                      </Badge>
                      <span className="text-sm">Higher inflation than regional peers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Regional Economic Outlook</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🇷🇼</div>
                    <h4 className="font-semibold text-blue-900 mb-2">Rwanda</h4>
                    <p className="text-sm text-blue-800">
                      <strong>Strategy:</strong> High-value services, manufacturing, and digital economy. Focus on
                      becoming a regional hub for business and innovation.
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🇰🇪</div>
                    <h4 className="font-semibold text-green-900 mb-2">Kenya</h4>
                    <p className="text-sm text-green-800">
                      <strong>Strategy:</strong> Regional financial center, manufacturing for export, and leveraging
                      large domestic market for growth.
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🇺🇬</div>
                    <h4 className="font-semibold text-red-900 mb-2">Uganda</h4>
                    <p className="text-sm text-red-800">
                      <strong>Strategy:</strong> Oil development, agricultural processing, and industrial growth to
                      leverage natural resources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Takeaways for Rwanda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-2">🎯 Competitive Advantages</h4>
                    <p className="text-sm text-yellow-700">
                      Rwanda's strong governance, business environment, and growth trajectory position it well for
                      continued development. The focus on high-value sectors is paying off.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">🚀 Growth Opportunities</h4>
                    <p className="text-sm text-blue-700">
                      Regional integration through EAC provides opportunities for market expansion. Rwanda can leverage
                      its strategic location and business-friendly environment.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Key Challenges</h4>
                    <p className="text-sm text-red-700">
                      Job creation remains the biggest challenge. Sustainable growth requires addressing unemployment
                      while maintaining macroeconomic stability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
