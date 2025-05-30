"use client"

import { useState } from "react"
import { Info, TrendingUp, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { DateRangePicker } from "@/components/date-range-picker"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Dashboard() {
  const [trainingOpen, setTrainingOpen] = useState(true)
  const [staffOpen, setStaffOpen] = useState(true)
  const [shareOpen, setShareOpen] = useState(true)

  const shareYourNumberSteps = [
    {
      title: "Update your website, social profiles, and Google Business Profile",
      description:
        'Update your contact page, "call now" buttons, any links in social bios, and Google Business Profile where applicable',
      completed: false,
    },
    {
      title: "Promote your new number everywhere",
      description:
        'Update email signatures, invoices, contracts, printed marketing materials, and voicemail for existing business phone number: "Call our new AI-powered business line XXX-XXX-XXXX for instant 24/7 support."',
      completed: false,
    },
    {
      title: "Share on social media",
      description:
        'Offer an exclusive benefit to your followers for calling the new number. For example, "Call our new AI employee at XXX-XXX-XXXX and ask for our secret discount code for 20% off your next order."',
      completed: false,
    },
    {
      title: "Email your existing customers",
      description:
        'Encourage and incentivise your customers to call your new number. "Call our new number for faster service and special offers!"',
      completed: false,
    },
    {
      title: "Forward your existing business phone number",
      description:
        "Contact the carrier of your existing business phone number with a request to forward your number to your Nucleus phone number.",
      completed: false,
    },
  ]

  return (
    <div className="flex-1 p-6 bg-background text-foreground overflow-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="w-6 h-6 border border-border rounded"></div>
        </div>

        {/* Date Range Selector */}
        <div className="flex items-center gap-4">
          <DateRangePicker placeholder="Last 30 days" />
          <span className="text-muted-foreground">vs.</span>
          <DateRangePicker placeholder="Mar 24, 2025 - Apr 23, 2025" />
          <Button variant="outline" size="sm">
            Custom comparison
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total calls</CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">0%</span>
              </div>
              <div className="text-sm text-muted-foreground">vs. 0 prev. 30 days</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Calls resolved by <span className="text-blue-400">Attendant</span>
                </CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                0<span className="text-lg text-muted-foreground">%</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">0%</span>
              </div>
              <div className="text-sm text-muted-foreground">vs. 0 prev. 30 days</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Overall performance score</CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                10<span className="text-lg text-muted-foreground">/100</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">0%</span>
              </div>
              <div className="text-sm text-muted-foreground">vs. 10 prev. 30 days</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active calls</CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>

        {/* Setup Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Setup Progress & Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{"Let's Get Started"}</h3>
                  <p className="text-muted-foreground mb-4">
                    Start with a few essentials so your AI assistant can begin handling calls with confidence.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold text-2xl">8%</span>
                    <Progress value={8} className="flex-1" />
                  </div>
                </div>

                {/* Training Data Section */}
                <Collapsible open={trainingOpen} onOpenChange={setTrainingOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold">Add Training Data</span>
                      <Badge variant="secondary" className="bg-orange-500 text-white">
                        3 REMAINING
                      </Badge>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${trainingOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">{/* Training steps content */}</CollapsibleContent>
                </Collapsible>

                {/* Staff Directory Section */}
                <Collapsible open={staffOpen} onOpenChange={setStaffOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold">Staff Directory</span>
                      <Badge variant="secondary" className="bg-orange-500 text-white">
                        3 REMAINING
                      </Badge>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${staffOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    {/* Staff directory steps content */}
                  </CollapsibleContent>
                </Collapsible>

                {/* Share Your Number Section */}
                <Collapsible open={shareOpen} onOpenChange={setShareOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold">Share Your Number</span>
                      <Badge variant="secondary" className="bg-orange-500 text-white">
                        5 REMAINING
                      </Badge>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${shareOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    {shareYourNumberSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                          <span className="text-white text-sm">!</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                          <div className="flex gap-4 mt-3">
                            <div className="flex items-center gap-2">
                              <Checkbox id={`step-${index}`} />
                              <label htmlFor={`step-${index}`} className="text-sm">
                                Mark complete
                              </label>
                            </div>
                            <Button variant="link" className="text-muted-foreground p-0 h-auto text-sm">
                              Skip
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>

          {/* Upgrade Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Get instant missed call alerts on your phone.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Unlock SMS alerts for missed calls so you can respond faster and stay connected wherever you are.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-6">More than just call logs - get the full picture.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Access your full call detail history: recordings, transcripts, and advanced filters to track, analyze,
                  and optimize every conversation.
                </p>

                <Button className="w-full bg-green-600 hover:bg-green-700">Upgrade now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
