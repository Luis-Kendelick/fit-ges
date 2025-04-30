import { useEffect, useState } from 'react'
import { SidebarProvider } from './components/ui/sidebar'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'
import PaymentsPage from './pages/PaymentsPage'
import StudentsPage from './pages/StudentsPage'

function App() {
  const [defaultOpen, setDefaultOpen] = useState(true); // Default to true or a sensible default


  useEffect(() => {
    // Read the cookie on the client side after the component mounts
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('sidebar_state='))?.split('=')[1];
    if (cookieValue !== undefined) {
      setDefaultOpen(cookieValue === "true");
    }
  }, []);

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Layout> {/* Envolve as rotas com o componente Layout */}
        <Routes>
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          {/* Rota padrão, redireciona para a página de alunos ou exibe-a */}
          <Route path="/" element={<StudentsPage />} />
        </Routes>
      </Layout>
    </SidebarProvider>
  )
}

export default App
