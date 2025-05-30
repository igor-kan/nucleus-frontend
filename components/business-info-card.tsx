"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface BusinessInfoCard {
  id: string
  subject: string
  body: string
}

export function BusinessInfoCards() {
  const [cards, setCards] = useState<BusinessInfoCard[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)

  const addCard = () => {
    const newCard: BusinessInfoCard = {
      id: Date.now().toString(),
      subject: "",
      body: "",
    }
    setCards([...cards, newCard])
  }

  const removeCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
    updateCharacterCount(cards.filter((card) => card.id !== id))
  }

  const updateCard = (id: string, field: "subject" | "body", value: string) => {
    const updatedCards = cards.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    setCards(updatedCards)
    updateCharacterCount(updatedCards)
  }

  const updateCharacterCount = (cardList: BusinessInfoCard[]) => {
    const total = cardList.reduce((sum, card) => sum + card.subject.length + card.body.length, 0)
    setTotalCharacters(total)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-lg font-medium">Business Information</Label>
        <div className="text-sm text-gray-400">
          Total characters used: <span className="text-white">{totalCharacters}/1000</span>
        </div>
      </div>

      {cards.map((card) => (
        <Card key={card.id} className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Subject</Label>
              <Input
                placeholder="Enter a question or topic"
                value={card.subject}
                onChange={(e) => updateCard(card.id, "subject", e.target.value)}
                className="bg-gray-900 border-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Body</Label>
              <Textarea
                placeholder="Enter the answer to the question, or details for the provided topic"
                value={card.body}
                onChange={(e) => updateCard(card.id, "body", e.target.value)}
                className="bg-gray-900 border-gray-600 min-h-[100px]"
              />
            </div>

            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeCard(card.id)}
              className="text-red-400 hover:text-red-300"
            >
              Remove card
            </Button>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" className="w-full bg-gray-800 border-gray-700 border-dashed" onClick={addCard}>
        <Plus className="w-4 h-4 mr-2" />
        Add information card
      </Button>
    </div>
  )
}
