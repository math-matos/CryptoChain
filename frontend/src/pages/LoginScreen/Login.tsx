import { FormEvent, useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Header } from "../../components";
import Flex from "../../components/Flex";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      alert("Login realizado com sucesso!");
      navigate("/account");
    } else {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="bg-login">
      <Stack
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center"
        }}>
        <Header showLoginButtons={true} />
        <Typography fontSize={"30px"} fontWeight={600} mt={"137px"}>
          Olá, Bem-vindo(a)!👋🏻
        </Typography>

        <form onSubmit={handleLogin}>
          <Stack>
            <Typography textAlign={"start"} mt={"38px"}>
              Endereço de Email
            </Typography>
            <TextField
              label="Seu Email"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ backgroundColor: "white", width: 353, borderRadius: 10 }}
            />
          </Stack>

          <Stack>
            <Typography textAlign={"start"} mt={"22px"}>
              Senha
            </Typography>
            <TextField
              label="Senha"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ backgroundColor: "white", width: 353, borderRadius: 10 }}
            />
          </Stack>
          {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

          <Flex alignItems={"center"}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Lembrar login"
              />
            </FormGroup>
            <Typography>Esqueceu a senha?</Typography>
          </Flex>

          <Button
            variant="contained"
            type="submit"
            style={{
              height: 56,
              width: 353,
              fontWeight: 600,
              marginBottom: 22,
              marginTop: 43
            }}>
            Entrar
          </Button>
        </form>
        <Divider>Ou com</Divider>
        <Flex justifyContent={"center"} style={{ marginTop: 22, gap: 20 }}>
          <Button
            variant="contained"
            size="large"
            style={{ width: 170, height: 56 }}>
            <FaFacebook />
            <Typography ml={1} fontWeight={600}>
              Facebook
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ width: 170, height: 56 }}>
            <FaGoogle />
            <Typography ml={1} fontWeight={600}>
              Google
            </Typography>
          </Button>
        </Flex>
        <Typography mt={"55px"}>
          Precisa de uma conta?{" "}
          <a href="/signin">
            <strong style={{ color: "white" }}>Cadastre-se</strong>
          </a>
        </Typography>
      </Stack>
    </div>
  );
}
