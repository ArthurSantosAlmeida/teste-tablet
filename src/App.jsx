import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import UsurioIA from "./pages/UsuarioIA/UsurioIA";
import IADocumentos from "./pages/IADocumentos/IADocumentos";
import PerfilUsurio from "./pages/PerfilUsurio/PerfilUsurio"
import PlanosSemLogin from "./pages/PlanosSemLogin/PlanosSemLogin"
import PlanosComLogin from "./pages/PlanosComLogin/PlanosComLogin"
import MeusProcessos from "./pages/MeusProcessos/MeusProcessos"

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Gerencia o scroll ao navegar entre telas
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Define dinamicamente o título padrão da aplicação JURIKI
  useEffect(() => {
    if (pathname === "/") {
      document.title = "JURIKI - Inteligência Artificial Jurídica";
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UsurioIA />} />
      <Route path="/ia" element={<UsurioIA />} />
      <Route path="/documentos"  element={<IADocumentos />} />
      <Route path="/perfil"  element={<PerfilUsurio />} />
      <Route path="/planossemlogin"  element={<PlanosSemLogin />} />
      <Route path="/planoscomlogin"  element={<PlanosComLogin />} />
      <Route path="/processos"  element={<MeusProcessos />} />
    </Routes>
  );
}

export default App;