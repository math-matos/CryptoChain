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

export default function Login() {
  return (
    <Stack
      style={{
        background: 'url("../../assets/green-bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center"
      }}>
      <Header />
      <Typography fontSize={"30px"} fontWeight={600} mt={'137px'} >
        Olá, Bem-vindo(a)!👋🏻
      </Typography>

      <Stack>
        <Typography textAlign={"start"} mt={'38px'}>Endereço de Email</Typography>
        <TextField
          label="Seu Email"
          variant="filled"
          style={{ backgroundColor: "white", width: 353, borderRadius: 10 }}
        />
      </Stack>

      <Stack>
        <Typography textAlign={"start"} mt={'22px'}>Senha</Typography>
        <TextField
          label="Senha"
          variant="filled"
          style={{ backgroundColor: "white", width: 353, borderRadius: 10 }}
        />
      </Stack>

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
        style={{ height: 56, width: 353, fontWeight: 600 }}>
        Entrar
      </Button>
      <Divider>Ou com</Divider>
      <Flex justifyContent={"center"}>
        <Button variant="contained">
          <FaFacebook />
          Facebook
        </Button>
        <Button variant="contained">
          <FaGoogle />
          Google
        </Button>
      </Flex>
      <Typography>
        Precisa de uma conta?{" "}
        <a href="/signin">
          <strong>Cadastre-se</strong>
        </a>
      </Typography>
    </Stack>
  );
}
