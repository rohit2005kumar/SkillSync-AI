import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
      <ToastContainer/>
    </AuthProvider>
  )
}

export default App
