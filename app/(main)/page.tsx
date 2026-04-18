import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/dashboard/glass-card"

const Page = () => {
  const user_name = "Alexis"
  
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <header className="flex flex-row justify-between items-center text-2xl font-medium">
        <p>
          ¡Hola,{" "}
          <span className="text-blue-400 mix-blend-lighten font-bold">{user_name}</span>!
        </p>
        <Button className="rounded-full px-6">Configuración</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard>
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Resumen Semanal</h2>
          <p className="text-foreground/70">Tus actividades de esta semana han sido productivas. Has completado el 85% de tus objetivos.</p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Próximos Pasos</h2>
          <p className="text-foreground/70">Revisa tus notas del último chat para continuar con el desarrollo de tu proyecto.</p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Estadísticas</h2>
          <div className="flex items-end gap-2 mt-4">
            <div className="w-full bg-white/10 h-24 rounded-t-lg relative">
              <div className="absolute bottom-0 w-full bg-blue-500 h-[60%] rounded-t-lg" />
            </div>
            <div className="w-full bg-white/10 h-24 rounded-t-lg relative">
              <div className="absolute bottom-0 w-full bg-blue-400 h-[80%] rounded-t-lg" />
            </div>
            <div className="w-full bg-white/10 h-24 rounded-t-lg relative">
              <div className="absolute bottom-0 w-full bg-blue-300 h-[40%] rounded-t-lg" />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

export default Page
