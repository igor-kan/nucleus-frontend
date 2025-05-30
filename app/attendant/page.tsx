"use client"

import { useState } from "react"
import { Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BusinessInfoCards } from "@/components/business-info-card"

const voiceProfiles = [
  { value: "aria", label: "Aria - Young & Friendly" },
  { value: "brock", label: "Brock - Experienced & Friendly" },
  { value: "henry", label: "Henry - British - Attentive & Polite" },
  { value: "ronan", label: "Ronan - Direct & Efficient" },
  { value: "elana", label: "Elana - British - Proper & Professional", premium: true },
  { value: "kyle", label: "Kyle - Lively & Eager", premium: true },
]

const daysOfWeek = [
  { key: "mon", label: "Mon" },
  { key: "tue", label: "Tue" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "Thu" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "Sat" },
  { key: "sun", label: "Sun" },
]

export default function AttendantPage() {
  const [activeTab, setActiveTab] = useState("training")
  const [businessName, setBusinessName] = useState("Test")
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello, thank you for calling {company_name}. How can I help you?",
  )
  const [goodbyeMessage, setGoodbyeMessage] = useState("Thank you for calling {company_name}. Have a great day!")
  const [selectedVoice, setSelectedVoice] = useState("henry")
  const [staffMembers, setStaffMembers] = useState([
    { id: 1, name: "Igor Zakhidov", email: "igor.kan.zakhidoff@gmail.com", initials: "IZ", phone: "" },
    { id: 2, name: "Unnamed", email: "", initials: "U", phone: "", hasError: true },
  ])
  const [editingStaff, setEditingStaff] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    roles: "",
    availability: "available",
    emailNotifications: true,
    smsNotifications: false,
  })

  const startEditing = (staff: any) => {
    setEditingStaff(staff.id)
    setEditForm({
      name: staff.name,
      email: staff.email,
      phone: staff.phone || "",
      roles: "",
      availability: "available",
      emailNotifications: true,
      smsNotifications: false,
    })
  }

  return (
    <div className="flex-1 p-6 bg-background text-foreground overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Attendant</h1>
          <div className="flex gap-2">
            <Button variant="outline">Discard</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Save
              {activeTab === "staff-directory" && (
                <Badge variant="destructive" className="ml-2">
                  1
                </Badge>
              )}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="staff-directory">
              Staff Directory
              {activeTab === "staff-directory" && (
                <Badge variant="destructive" className="ml-2">
                  1
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Training Tab */}
          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Business Name */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Business name <span className="text-red-500">*</span>
                  </Label>
                  <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="bg-muted" />
                  <p className="text-sm text-muted-foreground">
                    This is the name your customers will hear when they call.
                  </p>
                </div>

                {/* Greetings Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Label className="text-lg font-medium">Greetings</Label>
                    <div className="w-4 h-4 border border-muted-foreground rounded-full flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">?</span>
                    </div>
                  </div>

                  {/* Welcome Message */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Welcome message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      value={welcomeMessage}
                      onChange={(e) => setWelcomeMessage(e.target.value)}
                      className="bg-muted min-h-[80px]"
                    />
                  </div>

                  {/* Goodbye Message */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Goodbye message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      value={goodbyeMessage}
                      onChange={(e) => setGoodbyeMessage(e.target.value)}
                      className="bg-muted min-h-[80px]"
                    />
                  </div>
                </div>

                {/* Business Information Cards */}
                <BusinessInfoCards />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Staff Directory Tab */}
          <TabsContent value="staff-directory" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Staff Directory */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Staff Directory</h3>
                      <Button size="sm" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Staff
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {staffMembers.map((member) => (
                        <div
                          key={member.id}
                          className={`flex items-center gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 ${member.hasError ? "border border-red-500" : ""}`}
                          onClick={() => startEditing(member)}
                        >
                          <div
                            className={`w-10 h-10 ${member.hasError ? "bg-gray-600" : "bg-green-600"} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white font-semibold">{member.initials}</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{member.name}</div>
                            <div className="text-sm text-muted-foreground">{member.email || "No email"}</div>
                          </div>
                          {member.hasError && (
                            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">!</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Edit Information Panel */}
                  {editingStaff && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Edit Information</h3>
                        <Button variant="ghost" size="icon" onClick={() => setEditingStaff(null)}>
                          <span className="text-2xl">⋯</span>
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            placeholder="Enter staff member full name"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className={`bg-muted ${!editForm.name ? "border-red-500" : ""}`}
                          />
                          {!editForm.name && <p className="text-sm text-red-500">Invalid full name</p>}
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            placeholder="Enter staff member email address"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="bg-muted"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Phone number <span className="text-red-500">*</span>
                        </Label>
                        <div className="flex">
                          <div className="bg-muted border border-r-0 rounded-l-md px-3 py-2 text-sm">+1</div>
                          <Input
                            placeholder="(123) 456-7890"
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            className="bg-muted rounded-l-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Team member roles</Label>
                        <Input
                          placeholder="Add role (press enter to add)"
                          value={editForm.roles}
                          onChange={(e) => setEditForm({ ...editForm, roles: e.target.value })}
                          className="bg-muted"
                        />
                        <p className="text-sm text-muted-foreground">
                          Allows your Attendant to handle calls based on job title or duties.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Availability status</Label>
                          <Select
                            value={editForm.availability}
                            onValueChange={(value) => setEditForm({ ...editForm, availability: value })}
                          >
                            <SelectTrigger className="bg-muted">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="available">Available - Send calls through</SelectItem>
                              <SelectItem value="busy">Busy</SelectItem>
                              <SelectItem value="away">Away</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-sm text-muted-foreground">When your Attendant connects callers to you.</p>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-sm font-medium">Notification method</Label>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={editForm.emailNotifications}
                                onCheckedChange={(checked) => setEditForm({ ...editForm, emailNotifications: checked })}
                              />
                              <Label className="text-sm">Email</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={editForm.smsNotifications}
                                onCheckedChange={(checked) => setEditForm({ ...editForm, smsNotifications: checked })}
                              />
                              <Label className="text-sm">SMS</Label>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            How your Attendant delivers messages from your callers to you.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Voice Profile */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Voice profile <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-3">
                    <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                      <SelectTrigger className="flex-1 bg-muted">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {voiceProfiles.map((profile) => (
                          <SelectItem key={profile.value} value={profile.value}>
                            <div className="flex items-center gap-2">
                              {profile.label}
                              {profile.premium && (
                                <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                                  Premium
                                </Badge>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      Play voice preview
                    </Button>
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
