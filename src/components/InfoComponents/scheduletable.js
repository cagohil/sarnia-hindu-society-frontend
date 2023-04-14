import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Sandhya or Havan:', ' 10:30 am (See Note 1) '),
  createData('Puja of the month:', '10:50 am'),
  createData('Adult Bhajans:', '11:30 am'),
  createData('Children’s Bhajan & Chanting:', '11:55 am'),
  createData('Meditation:', '12:05 pm'),
  createData('Children’s Speech:', '12:10 pm'),
  createData('Bhog Stuti and Aarti: ', ' 12:15 pm'),
  createData('Announcements:','12:30 pm'),
  createData('Adult Religious Speech (if any):', '12:45 pm'),
  createData('Preeti Bhoj (Lunch):', '01:00 pm'),
  createData('Motivational Speech (if any):', ' 02:00 pm'),
];

export default function scheduletable() {
  return (
    <TableContainer component={Paper}  style={{maxWidth:"500px"}}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

