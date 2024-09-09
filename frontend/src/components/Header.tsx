import Button from "@mui/material/Button";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">
          <h2 style={{ color: "white" }}>CryptoChain</h2>
        </a>
      </div>
      <nav className="nav-links">
        <a href="#features">Compre / Venda</a>
        <a href="#pricing">Mercado</a>
        <a href="#pricing">Trade</a>
        <a href="#pricing">Suporte</a>
        <Button
          variant="outlined"
          href="/chat"
          style={{
            color: "white",
            height: "3rem",
            borderColor: "white",
            borderRadius: "1rem"
          }}>
          Cadastre-se
        </Button>
        <Button
          variant="contained"
          href="/login"
          style={{
            color: "white",
            height: "3rem",
            borderRadius: "1rem",
            padding: "0 2rem 0 2rem"
          }}>
          Entrar
        </Button>
      </nav>
    </header>
  );
}
