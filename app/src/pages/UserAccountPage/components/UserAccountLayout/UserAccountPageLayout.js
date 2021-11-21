import {
  Card,
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

const UserAccountPageLayout = ({ isLoading, info, classes, ordersList }) => {
  return (
    <div>
      <h1>PERSONAL ACCOUNT</h1>
      <div>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Personal data
            </Typography>
            <Typography variant="h5" component="h2">
              {`${info.firstName} ${info.lastName}`}
            </Typography>
            <Typography color="textSecondary">
              {`Email: ${info.email}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Telephone: ${info.phone}`}
              <br />
              {`Gender: ${info.gender}`}
            </Typography>
          </CardContent>
        </Card>
      </div>
      {ordersList?.map((order) => (
        <div key={order._id}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Pokemon name</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.itemsList?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">
                      <img src={item.image} />
                    </TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <h3>TOTAL PRICE: {order.totalPrice}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAccountPageLayout;
