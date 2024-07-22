import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://dasmoyzfoomoxhjljupg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhc21veXpmb29tb3hoamxqdXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NzE0ODUsImV4cCI6MjAzMDI0NzQ4NX0.8w4Hs6KjgpuQ6m8hM53kDhVGdFiCLYqLoZZIJtwD1dc"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
  try {
    // Fetch data to prevent Supabase project from pausing
    const { data, error } = await supabase.from("test").select()
    if (error) throw new Error(error.message)
    return Response.json(data)
  } catch (error) {
    const message = (error as Error).message ?? "An error occurred."
    return Response.json({ error: message }, { status: 400 })
  }
}
