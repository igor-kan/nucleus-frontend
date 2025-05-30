import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ReportingPage() {
  return (
    <div className="flex-1 p-6 bg-background text-foreground overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Reporting</h1>
            <Badge variant="secondary" className="bg-green-600 text-white">
              Premium
            </Badge>
          </div>
          <div className="w-6 h-6 border border-border rounded"></div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Premium Feature</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Advanced reporting and analytics are available with a Premium subscription. Upgrade to access detailed
              call reports, sentiment analysis, and performance metrics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
