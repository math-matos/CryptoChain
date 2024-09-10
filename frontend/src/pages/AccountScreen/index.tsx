import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Header } from "../../components";

import { SiPolkadot } from "react-icons/si";
import { FaArrowRightLong, FaBitcoinSign, FaEthereum } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { PiHandWithdraw } from "react-icons/pi";

export default function AccountScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [saldo, setSaldo] = useState(5000.0);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const depositar = () => {
    setSaldo(saldo + 200);
  };

  const sacar = () => {
    setSaldo(saldo - 100);
  };

  const transferir = () => {
    setSaldo(saldo - 100);
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.card}>
          <Stack>
            <div style={styles.cardHeader}>
              <Typography
                variant="h5"
                fontWeight={600}
                style={{ color: "white" }}>
                Saldo Estimado
              </Typography>
              <Typography onClick={toggleVisibility} style={styles.eyeIcon}>
                {isVisible ? "👁️" : "👁️‍🗨️"}
              </Typography>
            </div>
            <div style={styles.cardBalance}>
              <Typography style={{ color: "white" }}>
                {isVisible ? `R$ ${saldo.toFixed(2)}` : "****"}
              </Typography>
            </div>
          </Stack>
          <div style={styles.cardActions}>
            <Button onClick={depositar} style={styles.button}>
              Depositar
            </Button>
            <Button onClick={sacar} style={styles.button}>
              Sacar
            </Button>
            <Button onClick={transferir} style={styles.button}>
              Transferir
            </Button>
          </div>
        </div>
      </div>

      <div className="pricing-list">
        <div className="pricing-option">
          <Typography
            variant="h3"
            fontWeight={600}
            ml={1}
            style={{ color: "white" }}>
            MEUS ATIVOS
          </Typography>
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

      <div className="pricing-list">
        <div className="pricing-option">
          <Typography
            variant="h3"
            fontWeight={600}
            ml={1}
            style={{ color: "white" }}>
            Transações Recentes
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #2B2C3B"
            }}>
            <CiBank />
            <Typography fontWeight={600} style={{ color: "white" }}>
              Bitcoin
            </Typography>
            <Typography fontWeight={600} style={{ color: "#B982FF" }}>
              BTC
            </Typography>
            + R$2,390.70
            <Typography fontWeight={600} style={{ color: "#0DBB7C" }}>
              03/11/2024 - 09:32
            </Typography>
            <a href="/">Completada ✅</a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #2B2C3B"
            }}>
            <PiHandWithdraw />
            <Typography fontWeight={600} style={{ color: "white" }}>
              Ethereum
            </Typography>
            <Typography fontWeight={600} style={{ color: "#B982FF" }}>
              ETH
            </Typography>
            - R$1,784.81
            <Typography fontWeight={600} style={{ color: "#0DBB7C" }}>
              03/11/2024 - 09:12
            </Typography>
            <a href="/">Completada ✅</a>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "580px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#1A1B23",
    display: "flex",
    marginTop: "34px"
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem"
  },
  eyeIcon: {
    cursor: "pointer"
  },
  cardBalance: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    marginLeft: "2rem",
    color: "#0F172A"
  },
  button: {
    height: "27px",
    borderRadius: "5px",
    backgroundColor: "#FEF08A",
    color: "#0F172A",
    fontWeight: "600"
  }
};
