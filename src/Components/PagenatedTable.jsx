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

export default function PaginatedTable({ infoList, timeLabels }) {
  const [page, setPage] = useState(0);
  // console.log('infoList', infoList);

  if (!infoList || infoList.length === 0)
    return <div style={{ fontFamily: 'Pretendard', margin: ' 0 0 16px 8px' }}>로딩 중...</div>;

  const currentInfo = infoList[page];
  const currentData = currentInfo.data || [];
  const headers = Object.keys(currentData[0] || {});
  const changedHeaders = [];

  headers.forEach(function (key) {
    switch (key) {
      case 'DWAT (l/mn)_denoised':
        changedHeaders.push('dfd');
        break;
      case 'DoutAIR (l/mn)_denoised':
        changedHeaders.push('dsf');
        break;
      case 'DoutH2 (l/mn)_denoised':
        changedHeaders.push('df');
        break;
      case 'HrAIRFC (%)_denoised':
        changedHeaders.push('fd');
        break;
      case 'I (A)_denoised':
        changedHeaders.push('fsdf');
        break;
      case 'J (A/cmｲ)_denoised':
        changedHeaders.push('qqz');
        break;
      case 'PoutAIR (mbara)_denoised':
        changedHeaders.push('fzzd');
        break;
      case 'TinH2 (ｰC)_denoised':
        changedHeaders.push('ffgd');
        break;
      case 'Utot_fluctuation':
        changedHeaders.push('fdt');
        break;
      case 'Utot_trend':
        changedHeaders.push('fgbd');
        break;
    }
  });

  // 시점 설명 문구
  const startMin = page * 30;
  const endMin = startMin + 30;

  const faultTime = timeLabels[page] ?? '시점 정보 없음';
  const description = `${startMin}~${endMin}분의 데이터, ${faultTime} 시점에서의 고장 상태를 나타냅니다.`;

  const handleChangePage = (event, newPage) => setPage(newPage);

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'auto', tableLayout: 'fixed' }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader sx={{ tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow>
                <TableCell
                  className="cell"
                  align="center"
                  sx={{ width: 'fit-content', whiteSpace: 'nowrap' }}
                >
                  데이터
                </TableCell>
                {changedHeaders.map((key) => (
                  <TableCell className="cell" key={key} align="center">
                    {key}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="cell" align="center">
                    데이터{page * 30 + idx + 1}
                  </TableCell>
                  {headers.map((key) => (
                    <TableCell className="cell" key={key} align="center">
                      {row[key] != null ? row[key].toFixed?.(6) ?? row[key] : '...'}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>

            {/* 페이지네이션 */}
            <TableFooter>
              <TableRow sx={{ '&:last-child td': { borderBottom: 'none' } }}>
                <TableCell colSpan={changedHeaders.length + 1} align="right" sx={{ padding: '0' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#555' }}>{description}</span>
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
                  </Box>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>

      <style>
        {`
      .cell {
        width: 132px;
        padding: 16px 0;
        box-sizing: border-box;
      }
    `}
      </style>
    </>
  );
}

function CustomPagination({ page, onPageChange, totalPages }) {
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
