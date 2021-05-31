import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  function compareAmount(a, b) {
    //console.log(a.amount);
    return a.amount - b.amount;
  }

  var btnState = 1;

  const displayBids = (bid) =>{  
  
    if(bid){
      bid = bid.sort(compareAmount);
      let result = bid.map(a => a.amount);
      if(btnState == 1)
        return(
              result[(bid.length-1)]
            );
      if(btnState == 0)
        return(
          result[0]
        );
    }
    else 
      return 0;
}

const hasPremium = (premium)=>{
  if(premium === true)
    return "Yes";
  else
    return "No";
}
 
  function onChange(bids) {
    if(btnState == 1)
      {
        displayBids(bids, btnState);
      }
  }

const CustomersList = ({data}) => {
  
    const classes = useStyles();
    return(
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell >Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right">Premium</StyledTableCell>
                        <StyledTableCell align="right">
                            Bids <button onClick={onChange(data.bids)}>Max/Min</button>
                        </StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <StyledTableRow key={data.id}>
                        <StyledTableCell component="th" scope="row">
                            {data.firstname} {data.lastname}
                           <Avatar  src= {data.avatarUrl} />
                        </StyledTableCell>
                        <StyledTableCell align="right">{data.email}</StyledTableCell>
                        <StyledTableCell align="right">{data.phone}</StyledTableCell>
                        <StyledTableCell align="right">{hasPremium(data.hasPremium)}</StyledTableCell>
                        <StyledTableCell align="right"> {displayBids(data.bids)}</StyledTableCell>     
                        </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
           </TableContainer>
        </div>
    );
}

export default CustomersList;