import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8" style={{
      background: 'linear-gradient(135deg, #7C90DB 0%, #F2FAFF 25%, #0175D9 50%, #002761 100%)'
    }}>
      {/* Logo */}
      <div className="flex items-center justify-center gap-0">
        <Image src="/Imagenes/Group.png" alt="Group" width={48} height={48} className="h-12 w-auto" />
        <Image src="/Imagenes/VANTAX.png" alt="VANTAX" width={200} height={48} className="h-12 w-auto" />
        <Image src="/Imagenes/MX.png" alt="MX" width={48} height={48} className="h-12 w-auto" />
      </div>
      <CardDemo />
    </div>
  )
}

export function CardDemo() {
  return (
    
    <Card className="w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30">
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="x@ejemplo.com"
                required
                className="flex h-9 w-full rounded-none border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Contraseña
                </label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="*****"
                required
                className="flex h-9 w-full rounded-none border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
          Entrar
        </Button>
        <Button variant="outline" className="w-full">
          Entrar con Google
        </Button>
      </CardFooter>
    </Card>
  )
}


export default Page
