import Header from "../components/Header";

import "../css/HomePage.css";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid2,
  Stack,
  Typography
} from "@mui/material";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="container">
        {/* Navbar */}
        <Header />

        {/* Hero Section */}
        <section className="hero">
          <Grid2 container>
            <Grid2 size={12}>
              {/* <Box display="flex" alignItems={"center"} justifyContent={"center"} border={"1px solid grey"} borderRadius={10} >
                    <Avatar
                      alt="Gojo Satouro"
                      src="https://dimensaosete.com.br/static/7fc311549694666167a49cdb0fb1293c/2493a/gojo.webp"
                    />
                    <Avatar
                      alt="Gojo Satouro"
                      src="https://dimensaosete.com.br/static/7fc311549694666167a49cdb0fb1293c/2493a/gojo.webp"
                    />
                    <Avatar
                      alt="Gojo Satouro"
                      src="https://dimensaosete.com.br/static/7fc311549694666167a49cdb0fb1293c/2493a/gojo.webp"
                    />
                    <Box backgroundColor='cyan' borderRadius={3} p={1}>
                      <Typography variant="subtitle1">+500</Typography>
                    </Box>
                  </Box> */}
              <Chip
                label="Super feature coming soon"
                style={{
                  backgroundColor: "#FFED9E",
                  color: "#DB6E00",
                  fontWeight: 600,
                  marginBottom: 20
                }}
              />
            </Grid2>
          </Grid2>
          <Typography variant="h1" fontWeight={600} style={{ color: "white" }}>
            Criptomoedas de <br /> forma clara e simples
          </Typography>
          <Typography mt={2}>
            Compre, venda e desenvolva suas criptomoedas com a <br />{" "}
            CryptoChain, a plataforma dedicada a todos os traders em todos os
            níveis.
          </Typography>
          <Stack alignItems={"center"}>
            <img
              src="https://cdn.discordapp.com/attachments/988524143400067084/1279254762914840647/Novo_Projeto.png?ex=66d3c656&is=66d274d6&hm=08fe2aeefc0d1464a5a5dc38fc24aa1194bc157e84a26e2dd090690d9841a0ad&"
              alt=""
              style={{ boxShadow: "7px 0 20px gray", width: "45%" }}
            />
            <Button
              variant="contained"
              href="/chat"
              style={{
                color: "white",
                height: "3rem",
                borderRadius: "1rem",
                padding: "0 2rem 0 2rem",
                width: "10%",
                margin: "1rem"
              }}>
              Comece aqui
            </Button>
          </Stack>
        </section>

        {/* About the project Section */}
        <section id="features" className="features">
          <h2>About the project</h2>
          <div className="feature-list">
            <div className="pricing-option">
              <h3>AI-Powered Content Generation</h3>
              <Typography align="left" mt={1} mb={1}>
                Generate articles, blog posts, and creative content with ease
                using our AI-driven tools.
              </Typography>
              <img
                src="https://www.testingcatalog.com/content/images/size/w2000/2024/02/photo_2024-02-10_20-48-19.jpg"
                style={{ width: "350px", marginTop: 2, borderRadius: "2rem" }}
              />
            </div>

            <div className="pricing-option">
              <h3>Personalized Assistance</h3>
              <Typography align="left" mt={1} mb={1}>
                Get personalized AI suggestions and assistance tailored to your
                needs.
              </Typography>
              <img
                src="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/12/animes_mais_aguardados_do_ano__2o6g5y62m.jpg"
                style={{
                  width: "350px",
                  minHeight: "12rem",
                  marginTop: 2,
                  borderRadius: "2rem"
                }}
              />
              <a href="/signup">
                <Typography fontWeight={600} style={{ color: "#B982FF" }}>
                  Comece aqui <FaArrowRightLong />
                </Typography>
              </a>
            </div>

            <div className="pricing-option">
              <h3>Workflow Integration</h3>
              <Typography align="left" mt={1} mb={1}>
                Integrate with your existing tools and workflows to maximize
                efficiency.
              </Typography>
              <img
                src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc_IAP39hj-kZ8BSec3IQ3zMRFLQvuxISsTH0WbVmISwOd7_gNPUA19gEwg5EkWJFdPrVyeOrDxhCFi08qjHYzABVNdsJHmlQjpw.jpg?r=920"
                style={{
                  width: "350px",
                  minHeight: "12rem",
                  marginTop: 2,
                  borderRadius: "2rem"
                }}
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <Typography
            variant="h2"
            mb={"40px"}
            fontWeight={600}
            style={{ color: "white" }}>
            Compre e venda com as taxas <br /> mais baixas do mercado
          </Typography>
          <Typography style={{ color: "#898CA9" }}>
            Compre e venda mais de 150 criptomoedas com mais de 20 moedas <br />{" "}
            fiduciárias usando transferências bancárias ou seu cartão de
            crédito/débito.
          </Typography>
          <a href="/signup">
            <Typography mt={5} fontWeight={600} style={{ color: "#B982FF" }}>
              Saiba Mais <FaArrowRightLong />
            </Typography>
          </a>
          <div className="pricing-list">
            <div className="pricing-option">
              <h3>Free Plan</h3>
              <Typography
                align="left"
                fontWeight={800}
                style={{ fontSize: 50, color: "white" }}>
                $0
              </Typography>
              <Typography align="left" mt={1} mb={1}>
                Basic features to get you started with AI-generated content.
              </Typography>
              <Typography align="left">✅ 1000 requests</Typography>
              <Typography align="left">✅ Suport by Author</Typography>
              <Typography align="left" mb={2}>
                ✅ Imaginary feature
              </Typography>
              <Button variant="outlined" href="/chat" fullWidth>
                GET STARTED
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}>
            <p>
              &copy; {new Date().getFullYear()} Craft Desk. All rights reserved.
            </p>
            <p>Have questions? Get in touch with our team!</p>
            <a href="mailto:contatomathmatos@gmail.com">
              contatomathmatos@gmail.com
            </a>
          </Box>
        </footer>
      </div>
    </>
  );
}
