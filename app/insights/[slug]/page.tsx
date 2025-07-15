import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const articleData = {
  "inflation-june-2025": {
    title: "Why Inflation Rose to 7.1% in June 2025 – What it Means for You",
    date: "June 15, 2025",
    category: "Inflation Analysis",
    readTime: "5 min read",
    author: "Oscar Mugisha",
    content: `
      <p>Rwanda's inflation rate jumped to 7.1% in June 2025, up from 5.9% in May. This represents the highest inflation rate we've seen in over two years, and it's understandably causing concern among families and businesses across the country.</p>
      
      <h2>What's Driving the Increase?</h2>
      <p>Three main factors are pushing prices higher:</p>
      
      <h3>1. Food Prices Leading the Charge</h3>
      <p>Food inflation reached 9.2% in June, driven primarily by:</p>
      <ul>
        <li><strong>Seasonal factors:</strong> The dry season affected some crop yields, particularly vegetables and fruits</li>
        <li><strong>Regional supply disruptions:</strong> Transport costs from neighboring countries increased due to fuel price rises</li>
        <li><strong>Global commodity prices:</strong> International prices for wheat and cooking oil remain elevated</li>
      </ul>
      
      <h3>2. Energy and Transport Costs</h3>
      <p>Fuel prices increased by 12% compared to last year, affecting:</p>
      <ul>
        <li>Public transport fares</li>
        <li>Delivery costs for goods</li>
        <li>Electricity generation costs</li>
      </ul>
      
      <h3>3. Housing and Utilities</h3>
      <p>Rent and utility costs in urban areas, particularly Kigali, continue to rise as demand outpaces supply.</p>
      
      <h2>What This Means for Ordinary Rwandans</h2>
      
      <h3>For Families</h3>
      <p>A 7.1% inflation rate means that what cost 100,000 RWF last year now costs about 107,100 RWF. For families on fixed incomes, this represents a real challenge, especially for essential items like food and transport.</p>
      
      <h3>For Students</h3>
      <p>Higher costs for accommodation, food, and transport directly impact student budgets. Many students are finding they need to adjust their spending or seek additional income sources.</p>
      
      <h3>For Small Businesses</h3>
      <p>Business owners face a double challenge: higher costs for inputs and supplies, while customers have less purchasing power. This squeeze on profit margins requires careful management.</p>
      
      <h2>Government and Central Bank Response</h2>
      <p>The National Bank of Rwanda is closely monitoring the situation. While they haven't raised interest rates yet, they've indicated they're prepared to act if inflation continues to rise. The government is also:</p>
      <ul>
        <li>Working to improve food supply chains</li>
        <li>Investing in renewable energy to reduce fuel dependence</li>
        <li>Supporting local food production initiatives</li>
      </ul>
      
      <h2>What to Expect Going Forward</h2>
      <p>Most economists expect inflation to remain elevated through the rest of 2025, but there are reasons for cautious optimism:</p>
      <ul>
        <li>The upcoming harvest season should ease food price pressures</li>
        <li>Global commodity prices are showing signs of stabilization</li>
        <li>Government interventions in the food supply chain are beginning to show results</li>
      </ul>
      
      <h2>Practical Tips for Managing Higher Costs</h2>
      <ul>
        <li><strong>Budget carefully:</strong> Track your spending and prioritize essential items</li>
        <li><strong>Buy local:</strong> Support local farmers and reduce transport-related costs</li>
        <li><strong>Consider bulk purchases:</strong> For non-perishable items, buying in bulk can provide savings</li>
        <li><strong>Explore alternatives:</strong> Look for substitute products that offer better value</li>
      </ul>
      
      <p>While 7.1% inflation is concerning, it's important to remember that Rwanda's economy remains fundamentally strong. The key is staying informed and making smart financial decisions while policymakers work to bring inflation back to more comfortable levels.</p>
    `,
  },
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug as keyof typeof articleData]

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/insights">
            <Button>Back to Insights</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/insights">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>
          </header>

          <Card>
            <CardContent className="prose prose-lg max-w-none p-8">
              <div dangerouslySetInnerHTML={{ __html: article.content }} className="space-y-6" />
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>Found this helpful?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Share your thoughts or questions about this analysis. Your feedback helps me create better content for
                  the Rwandan community.
                </p>
                <Link href="/about">
                  <Button>Get in Touch</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </article>
      </div>
    </div>
  )
}
