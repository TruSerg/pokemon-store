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
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { withStyles } from "@mui/styles";

import moment from "moment";

import styles from "./styles";

const UserAccountPageLayout = ({
  isLoading,
  info,
  ordersList,
  itemsList,
  classes,
}) => {
  return (
    <Box className={classes.userWrapper}>
      <Container>
        <h1 className={classes.accountTitle}>PERSONAL ACCOUNT</h1>
        <Box className={classes.accountInfo}>
          <CardContent>
            <h2 className={classes.accountSubtitle}>PERSONAL DATA</h2>
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
        </Box>
        {ordersList?.map((order) => (
          <Box key={order._id}>
            <Box className={classes.accordion}>
              <Accordion color="success">
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
                              <TableCell align="left">
                                {item.quantity}
                              </TableCell>
                              <TableCell align="left">{item.price}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
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

export default withStyles(styles)(UserAccountPageLayout);
