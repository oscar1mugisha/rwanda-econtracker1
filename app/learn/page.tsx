import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, GraduationCap } from "lucide-react"

const glossaryTerms = [
  {
    term: "Inflation",
    definition:
      "The rate at which prices for goods and services rise over time. When inflation is high, your money buys less than it did before.",
    example: "If bread costs 500 RWF today and 550 RWF next year, that's 10% inflation for bread.",
  },
  {
    term: "GDP (Gross Domestic Product)",
    definition:
      "The total value of all goods and services produced in Rwanda in one year. It's like measuring the size of our entire economy.",
    example: "If Rwanda produces 10 trillion RWF worth of goods and services in 2025, that's our GDP.",
  },
  {
    term: "Interest Rate",
    definition:
      "The cost of borrowing money, expressed as a percentage. Higher rates make loans more expensive but savings more rewarding.",
    example: "If you borrow 100,000 RWF at 10% interest, you'll pay back 110,000 RWF after one year.",
  },
  {
    term: "Exchange Rate",
    definition:
      "How much of one currency you need to buy another currency. It shows the relative value between currencies.",
    example: "If 1 USD = 1,300 RWF, you need 1,300 Rwandan Francs to buy 1 US Dollar.",
  },
  {
    term: "Unemployment Rate",
    definition:
      "The percentage of people who want to work but can't find jobs. It only counts people actively looking for work.",
    example: "If 100 people want jobs but only 85 have them, the unemployment rate is 15%.",
  },
  {
    term: "Monetary Policy",
    definition:
      "Actions taken by the central bank to control money supply and interest rates to achieve economic goals like stable prices.",
    example: "When the BNR raises interest rates to fight inflation, that's monetary policy in action.",
  },
  {
    term: "Fiscal Policy",
    definition:
      "Government decisions about spending and taxation to influence the economy. More spending stimulates growth, higher taxes can cool it down.",
    example: "Building new roads (government spending) or changing income tax rates are fiscal policy tools.",
  },
  {
    term: "Balance of Payments",
    definition:
      "A record of all money flowing into and out of Rwanda from other countries through trade, investment, and other transactions.",
    example: "When Rwanda exports coffee and imports fuel, these transactions are recorded in the balance of payments.",
  },
]

const learningModules = [
  {
    title: "Economics Basics for Beginners",
    description: "Start here if you're new to economics. Learn fundamental concepts in simple terms.",
    lessons: ["What is Economics?", "Supply and Demand", "Markets and Prices", "Role of Government"],
    duration: "30 minutes",
    level: "Beginner",
  },
  {
    title: "Understanding Rwanda's Economy",
    description: "Learn about Rwanda's economic structure, key sectors, and development strategy.",
    lessons: ["Rwanda's Economic History", "Key Economic Sectors", "Vision 2050", "Regional Integration"],
    duration: "45 minutes",
    level: "Intermediate",
  },
  {
    title: "Reading Economic Indicators",
    description: "Master the art of interpreting economic data and understanding what numbers really mean.",
    lessons: ["GDP and Growth", "Inflation Explained", "Employment Data", "Trade Statistics"],
    duration: "40 minutes",
    level: "Intermediate",
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn Economics</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Build your understanding of economics from the ground up. Start with basics and work your way up to
            analyzing Rwanda's economic indicators like a pro.
          </p>
        </div>

        {/* Learning Modules */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={module.level === "Beginner" ? "default" : "secondary"}>{module.level}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <GraduationCap className="mr-1 h-4 w-4" />
                      {module.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center text-sm text-gray-600">
                        <Play className="mr-2 h-3 w-3" />
                        {lesson}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-500">
                    <BookOpen className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Economics Glossary */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Economics Glossary</h2>
          <Card>
            <CardHeader>
              <CardTitle>Essential Economic Terms</CardTitle>
              <CardDescription>
                Master these key terms to better understand economic discussions and analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {glossaryTerms.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold text-blue-600">{item.term}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-gray-700">{item.definition}</p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Example:</strong> {item.example}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Quick Explainers Preview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3-Minute Explainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["How Inflation Affects You", "Why Interest Rates Matter", "Reading GDP Numbers"].map((title, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-8 text-gray-500">
                    <Play className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Video Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
