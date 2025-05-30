
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://oomomzwrmdzhqdwbkpqv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbW9tendybWR6aHFkd2JrcHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTY0ODgsImV4cCI6MjA2MjczMjQ4OH0.uJS3bcsHOHRFvTAJLSwYa_1j35FdaQneB62opd4RFqc'
)

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dni, setDni] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    const { data: existing } = await supabase
      .from('usuarios')
      .select('*')
      .eq('dni', dni)

    if (existing.length > 0) {
      setMessage('Este DNI ya está registrado.')
      return
    }

    const { error: signUpError } = await supabase.auth.signUp({ email, password })

    if (signUpError) {
      setMessage('Error al registrar usuario.')
      return
    }

    const { error: insertError } = await supabase
      .from('usuarios')
      .insert({ email, dni })

    if (insertError) {
      setMessage('Error al guardar el DNI.')
    } else {
      setMessage('Registro exitoso. Revisa tu correo.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-orange-600 text-center">Registro</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="email" placeholder="Email" required
            className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" required
            className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="DNI" required
            className="w-full border p-2 rounded" value={dni} onChange={(e) => setDni(e.target.value)} />
          <button type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            Crear cuenta
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  )
}
