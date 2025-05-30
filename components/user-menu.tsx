"use client"

import { useState } from "react"
import { User, CreditCard, HelpCircle, LogOut, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function UserMenu() {
  const [accountModalOpen, setAccountModalOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 rounded-full bg-blue-600 text-white">
            I
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 p-4 bg-gray-900 border-gray-700" align="end">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">I</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">igor.kan.zakhidoff@gmail.com</div>
              <Badge variant="secondary" className="text-xs">
                Starter
              </Badge>
            </div>
          </div>

          <DropdownMenuSeparator className="bg-gray-700" />

          <DropdownMenuItem
            className="flex items-center gap-2 py-3 text-white hover:bg-gray-800"
            onClick={() => setAccountModalOpen(true)}
          >
            <User className="w-4 h-4" />
            Account
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-3 text-white hover:bg-gray-800" asChild>
            <Link href="/billing">
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-3 text-white hover:bg-gray-800" asChild>
            <Link href="/faq">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-gray-700" />

          <DropdownMenuItem className="flex items-center gap-2 py-3 text-white hover:bg-gray-800" asChild>
            <Link href="/logout">
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Link>
          </DropdownMenuItem>

          <div className="mt-4">
            <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
              <Link href="/upgrade">Upgrade to Premium</Link>
            </Button>
          </div>

          <div className="mt-4 text-center text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> • <Link href="/terms-of-service" className="hover:underline">Terms of Use</Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={accountModalOpen} onOpenChange={setAccountModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Account</DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setAccountModalOpen(false)} className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Email</Label>
              <div className="flex gap-2">
                <Input value="igor.kan.zakhidoff@gmail" readOnly className="bg-gray-800 border-gray-700 flex-1" />
                <Button variant="outline" className="bg-gray-800 border-gray-700">
                  Update email
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Reset your password</h3>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send password reset link</Button>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <Button variant="destructive" className="text-red-400 hover:text-red-300">
                Close account
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
