import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RE</span>
              </div>
              <span className="font-bold text-xl">Rwanda EconTracker</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Making Rwanda's economic data accessible to students, professionals, and policymakers through clear
              explanations and real-time tracking.
            </p>
            <div className="text-sm text-gray-400">Created by Oscar Mugisha • Aspiring Economist</div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/indicators" className="hover:text-white transition-colors">
                  Economic Indicators
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Oscar's Insights
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-white transition-colors">
                  Learn Economics
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://www.statistics.gov.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  NISR
                </a>
              </li>
              <li>
                <a
                  href="https://www.bnr.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  BNR
                </a>
              </li>
              <li>
                <a
                  href="https://www.minecofin.gov.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  MINECOFIN
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Rwanda EconTracker. Built to make economics accessible in Rwanda.</p>
        </div>
      </div>
    </footer>
  )
}
