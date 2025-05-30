"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [callRecording, setCallRecording] = useState(false)
  const [callTranscription, setCallTranscription] = useState(false)

  return (
    <div className="flex-1 p-6 bg-background text-foreground overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <div className="w-6 h-6 border border-border rounded"></div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="profile">User Profile</TabsTrigger>
            <TabsTrigger value="general">General Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Call Recording and Transcription</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Note: When call recording or transcription is enabled, all participants will be notified. Transferred
                  calls are not transcribed or recorded.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Enable Call Recording */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Enable call recording</Label>
                    <p className="text-sm text-muted-foreground">
                      Save audio recording for each call with the AI employee.
                    </p>
                  </div>
                  <Switch checked={callRecording} onCheckedChange={setCallRecording} />
                </div>

                {/* Enable Call Transcription */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Enable call transcription</Label>
                    <p className="text-sm text-muted-foreground">
                      Save the text transcription for each call with the AI employee.
                    </p>
                  </div>
                  <Switch checked={callTranscription} onCheckedChange={setCallTranscription} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User profile settings will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
