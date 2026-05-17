import { UserProvider } from "./context/UserContext";
import { Navbar } from "./components/Navbar";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { UserProfile } from "./components/UserProfile";
import { ProtectedView } from "./components/ProtectedView";
import { RoleContent } from "./components/RoleContent";
import './App.css'

function App() {
  

  return (
   <UserProvider>        {/* 👈 envuelve todo para compartir el contexto */}
      <Navbar />
      <main>
        <RoleContent/>
        <UserProfile />
        <LoginButton />
        <LogoutButton />
        <ProtectedView>
          <p>This is protected content</p>
        </ProtectedView>
      </main>
    </UserProvider>
  )
}

export default App
