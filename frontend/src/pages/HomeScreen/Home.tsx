import Header from "../../components/Header";

import trade from "../../assets/trade.png";
import wallet from "../../assets/wallet.png";

import "./HomePage.css";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";

import { FaArrowRightLong, FaBitcoinSign, FaEthereum } from "react-icons/fa6";
import { SiCardano, SiPolkadot } from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className="container">
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
            </Grid2>
          </Grid2>
          <Typography
            variant="h1"
            fontWeight={600}
            style={{ color: "white", paddingTop: 50 }}>
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
                margin: "1rem",
                fontWeight: 600
              }}>
              Comece aqui
            </Button>
          </Stack>
        </section>

        {/* About the project Section */}
        <section id="features" className="features">
          <div className="feature-list">
            <div className="pricing-option" style={{ maxWidth: "400px" }}>
              <img src={trade} />
              <h3>Plataforma de Trade</h3>
              <Typography align="center" mt={1} mb={1}>
                Invista em criptomoedas a qualquer hora, em qualquer lugar, com
                nossa plataforma on-line segura, protegida e fácil de usar
              </Typography>
              <a href="/signup">
                <Typography fontWeight={600} m={3} style={{ color: "#B982FF" }}>
                  Comece aqui <FaArrowRightLong />
                </Typography>
              </a>
            </div>

            <div className="pricing-option" style={{ maxWidth: "400px" }}>
              <img src={wallet} />
              <h3>Carteira CryptoChain</h3>
              <Typography align="center" mt={1} mb={1}>
                Store your growing investments in our non-custodial wallet that
                gives you access to a full suite of DeFi services in one place
              </Typography>
              <a href="/signup">
                <Typography fontWeight={600} m={3} style={{ color: "#B982FF" }}>
                  Comece aqui <FaArrowRightLong />
                </Typography>
              </a>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #2B2C3B"
                }}>
                <FaBitcoinSign />
                <Typography fontWeight={600} style={{ color: "white" }}>
                  Bitcoin
                </Typography>
                <Typography fontWeight={600} style={{ color: "#B982FF" }}>
                  BTC
                </Typography>
                $56.750,65
                <Typography fontWeight={600} style={{ color: "#0DBB7C" }}>
                  +1.68%
                </Typography>
                <a href="/">
                  Compre Agora <FaArrowRightLong />
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #2B2C3B"
                }}>
                <FaEthereum />
                <Typography fontWeight={600} style={{ color: "white" }}>
                  Ethereum
                </Typography>
                <Typography fontWeight={600} style={{ color: "#B982FF" }}>
                  ETH
                </Typography>
                $2.390,01
                <Typography fontWeight={600} style={{ color: "#0DBB7C" }}>
                  +4.36%
                </Typography>
                <a href="/">
                  Compre Agora <FaArrowRightLong />
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #2B2C3B"
                }}>
                <SiCardano />
                <Typography fontWeight={600} style={{ color: "white" }}>
                  Cardano
                </Typography>
                <Typography fontWeight={600} style={{ color: "#B982FF" }}>
                  ADA
                </Typography>
                $1.88
                <Typography fontWeight={600} style={{ color: "#0DBB7C" }}>
                  +3.43%
                </Typography>
                <a href="/">
                  Compre Agora <FaArrowRightLong />
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #2B2C3B"
                }}>
                <FaBitcoinSign />
                <Typography fontWeight={600} style={{ color: "white" }}>
                  Wax
                </Typography>
                <Typography fontWeight={600} style={{ color: "#B982FF" }}>
                  WAXP
                </Typography>
                $1.02
                <Typography fontWeight={600} style={{ color: "#bb0d0d" }}>
                  -2.62%
                </Typography>
                <a href="/">
                  Compre Agora <FaArrowRightLong />
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px"
                }}>
                <SiPolkadot />
                <Typography fontWeight={600} style={{ color: "white" }}>
                  Polkadot
                </Typography>
                <Typography fontWeight={600} style={{ color: "#B982FF" }}>
                  DOT
                </Typography>
                $42.23
                <Typography fontWeight={600} style={{ color: "#0DBB7C" }}>
                  +7.56%
                </Typography>
                <a href="/">
                  Compre Agora <FaArrowRightLong />
                </a>
              </div>
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
              &copy; {new Date().getFullYear()} CryptoChain. All rights
              reserved.
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
