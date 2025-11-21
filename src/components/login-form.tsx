"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username && password) {
      router.push("/dashboard")
    } else {
      alert("Silakan masukkan nama pengguna dan kata sandi")
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen text-black",
        className
      )}
      {...props}
    >
      <Card className="w-[350px] border border-neutral-300">
        <CardContent className="pt-10">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold font-serif p-6">Instagram</h1>

            <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nomor telepon, nama pengguna, atau email"
                className="border-neutral-300 text-black placeholder:text-neutral-500"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border-neutral-300 text-black placeholder:text-neutral-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-neutral-300 bg-white px-2 py-1 text-sm font-semibold text-black hover:bg-neutral-100"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Sembunyikan" : "Lihat"}
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Button>

              <div className="flex items-center gap-2 my-2">
                <div className="flex-1 h-px bg-neutral-300"></div>
                <span className="text-neutral-400 text-sm">atau</span>
                <div className="flex-1 h-px bg-neutral-300"></div>
              </div>

              <Button
                variant="ghost"
                className="w-full text-blue-500 hover:text-blue-600"
              >
                Masuk dengan facebook
              </Button>

              <a
                href="#"
                className="text-center text-sm text-black font-semibold hover:underline"
              >
                Lupa kata sandi?
              </a>
            </form>
          </div>

          <div className="mt-6 text-center text-sm border-t border-neutral-300 pt-4 text-black">
           Tidak punya akun?{" "}
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Daftar
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
