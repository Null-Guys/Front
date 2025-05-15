import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

export default function PaginatedTable({ infoList }) {
  const [page, setPage] = useState(0);
  console.log('infoList', infoList);

  if (!infoList || infoList.length === 0)
    return <div style={{ fontFamily: 'Pretendard', margin: ' 0 0 16px 8px' }}>로딩 중...</div>;

  // console.log('전달된 info', info);

  const currentInfo = infoList[page];
  const currentData = currentInfo.data || [];
  const headers = Object.keys(currentData[0] || {});

  const handleChangePage = (event, newPage) => setPage(newPage);

  return (
    <>
      {infoList ? (
        <Paper sx={{ width: '100%', overflow: 'auto' }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>데이터</TableCell>
                  {headers.map((key) => (
                    <TableCell key={key} align="right">
                      {key}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>데이터{page * 30 + idx + 1}</TableCell>
                    {headers.map((key) => (
                      <TableCell key={key} align="right">
                        {row[key] != null ? row[key].toFixed?.(6) ?? row[key] : '...'}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={infoList.length}
                    page={page}
                    rowsPerPage={1}
                    rowsPerPageOptions={[]}
                    onPageChange={handleChangePage}
                    ActionsComponent={(subProps) => (
                      <CustomPagination {...subProps} totalPages={infoList.length} />
                    )}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <div style={{ fontFamily: 'Pretendard', margin: ' 0 0 16px 8px' }}>로딩 중...</div>
      )}
    </>
  );
}
// TODO: 밑에 페이지 버튼 안눌림
function CustomPagination({ count, page, onPageChange, totalPages }) {
  const theme = useTheme();

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={(e) => onPageChange(e, 0)} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={(e) => onPageChange(e, page - 1)} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page + 1)}
        disabled={page >= totalPages - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, totalPages - 1)}
        disabled={page >= totalPages - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
