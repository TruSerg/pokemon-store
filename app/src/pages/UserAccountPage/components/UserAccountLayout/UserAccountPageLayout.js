import PropTypes from "prop-types";

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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import moment from "moment";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./styles.module.scss";

const UserAccountPageLayout = ({ isLoading, info, ordersList, itemsList }) => {
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
          <div className={styles.accordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <p>Total price: {order.totalPrice} coins</p>
                  <p>
                    Order date:{" "}
                    {moment(order.createdAt).format("MMM Do YYYY, h:mm a")}
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
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
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};

UserAccountPageLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  info: PropTypes.objectOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ),
  ordersList: PropTypes.arrayOf(
    PropTypes.shape({
      totalPrice: PropTypes.number.isRequired,
      customerId: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      itemsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.name,
          image: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
        })
      ),
    })
  ),
};

export default UserAccountPageLayout;
