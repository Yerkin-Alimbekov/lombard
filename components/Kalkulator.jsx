import { useState } from "react";
import { Typography, Button, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Toaster, toast } from "react-hot-toast";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(3.15);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalinterest, setTotalinterest] = useState(0);
  const [principal, setPrincipal] = useState(0);

  const handlePrincipalchange = (event) => {
    setPrincipal(event.target.value);
  };
  const handleInterestchange = (event) => {
    setInterest(event.target.value);
  };
  const handleTimechange = (event) => {
    setTime(event.target.value);
  };

  const calculateLoan = () => {
    if (principal > 0 && interest > 0 && time > 0) {
      let p = parseFloat(principal);
      let r = parseFloat(interest);
      let n = parseFloat(time);

      let actualRate = parseFloat(r)/100;

      let calcemi =
        p *
        actualRate *
        (Math.pow(1 + actualRate, n) / (Math.pow(1 + actualRate, n)));

      setEmi(Math.round(calcemi));
      setAmount(Math.round(calcemi * n));
      setTotalinterest(Math.round(calcemi * n + p));
    } else {
      toast.error("Заполните входные параметры (сумма, %, срок)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        toastId: "id",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Toaster />
      <Box sx={{ m: -3 }} />
      <Container className="bg-none">
        <Card>
          <div style={{ overflowY: "auto", padding: "12px" }}>
            <Typography variant="h5" align="center">

            </Typography>
            <Box sx={{ m: 4 }} />
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Box sx={{ m: 2 }} />
                <TextField
                  label="Введите сумму кредита, в тенге"
                  type="number"
                  variant="outlined"
                  name="loan_amount"
                  onChange={handlePrincipalchange}
                  value={principal}
                  sx={{ minWidth: "92%" }}
                />
                <Box sx={{ m: 2 }} />
                <TextField
                  label="Введите cтавку вознаграждения, в %"
                  variant="outlined"
                  type="number"
                  name="interest_rate"
                  //onChange={handleInterestchange}
                  value={interest}
                  sx={{ minWidth: "92%" }}
                />
                <Box sx={{ m: 2 }} />
                <TextField
                  label="Введите срок кредитования, в мес."
                  variant="outlined"
                  type="number"
                  name="loan_period_in_month"
                  onChange={handleTimechange}
                  value={time}
                  sx={{ minWidth: "92%" }}
                />
                <Box
                  m={0}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl
                    size="large"
                    align="center"
                    style={{ marginTop: "10px" }}
                  >
                    <Button
                      color="success"
                      variant="contained"
                      size="large"
                      onClick={calculateLoan}
                    >
                      Расчитайте
                    </Button>
                  </FormControl>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                alignItems="center"
                justifyContent="center"
              >
                <Box sx={{ m: 0 }} />
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">Сумма ежемесячного платежа</Typography>
                          <Box sx={{ m: 0 }} />
                          <Typography variant="h6" className="font-bold">
                             {emi} тенге
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

{/*}
                <Box sx={{ m: 2 }} />
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">
                            Остаток основного долга
                          </Typography>
                          <Box sx={{ m: 1 }} />
                          <Typography variant="h6" className="font-bold">
                             {totalinterest-amount} тенге
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ m: 2 }} />
                */}

                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">
                            Сумма переплаты в конце срока
                          </Typography>
                          <Box sx={{ m: 1 }} />
                          <Typography variant="h6" className="font-bold">
                             {amount} тенге
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box sx={{ m: 2 }} />
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">Общая сумма к возврату (ОД + %)</Typography>
                          <Box sx={{ m: 1 }} />
                          <Typography variant="h6" className="font-bold">
                             {totalinterest} тенге
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

              </Grid>
            </Grid>
            <Box sx={{ m: 0 }} />
          </div>
        </Card>
      </Container>
    </>
  );
}
