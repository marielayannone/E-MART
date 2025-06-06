import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://oomomzwrmdzhqdwbkpqv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbW9tendybWR6aHFkd2JrcHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTY0ODgsImV4cCI6MjA2MjczMjQ4OH0.uJS3bcsHOHRFvTAJLSwYa_1j35FdaQneB62opd4RFqc'
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Inicio de sesión exitoso.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-orange-600 text-center">Iniciar sesión</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" required className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" required className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">Entrar</button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  )
}