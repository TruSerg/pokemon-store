import {
  CardContent,
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@material-ui/core";

import styles from "./styles.module.scss";

const UserAccountPageLayout = ({ info, ordersList }) => {
  return (
    <div>
      <h1 className={styles.accountTitle}>PERSONAL ACCOUNT</h1>
      <div>
        <div>
          <CardContent>
            <h2>PERSONAL DATA</h2>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {`${info.firstName} ${info.lastName}`}
            </Typography>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {`Email: ${info.email}`}
            </Typography>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {`Phone: ${info.phone}`}
            </Typography>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {`Gender: ${info.gender}`}
            </Typography>
          </CardContent>
        </div>
      </div>
      {ordersList?.map((order) => (
        <div key={order._id}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell align="left">IMAGE</TableCell>
                  <TableCell align="left">QUANTITY</TableCell>
                  <TableCell align="left">PRICE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.itemsList?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="left">
                      <img src={item.image} />
                    </TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <h3 className={styles.accountTitle}>
              TOTAL PRICE: {order.totalPrice}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAccountPageLayout;
