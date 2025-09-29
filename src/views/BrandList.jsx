import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  useTheme,
  Menu,
  MenuItem
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Brandlist = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [brands] = useState([
    { id: 12, image: '/images/porsche.png', name: 'Porsche' },
    { id: 11, image: '/images/land_rover.png', name: 'Land Rover' },
    { id: 10, image: '/images/tesla.png', name: 'Tesla' },
    { id: 9, image: '/images/hyundai.png', name: 'Hyundai' },
    { id: 8, image: '/images/nissan.png', name: 'Nissan' },
    { id: 7, image: '/images/chevrolet.png', name: 'Chevrolet' },
  ]);
  const [filteredBrands, setFilteredBrands] = useState(brands);

  // For Export Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleExport = (format) => {
    let csvContent = "Sr,Brand Id,Brand Name\n";
    filteredBrands.forEach((brand, index) => {
      csvContent += `${index + 1},${brand.id},${brand.name}\n`;
    });

    const blob = new Blob([csvContent], {
      type: format === 'excel'
        ? 'application/vnd.ms-excel'
        : 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `brand_list.${format}`;
    link.click();
    window.URL.revokeObjectURL(url);
    handleClose();
  };

  const handleSearch = () => {
    const filtered = brands.filter(brand =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 'lg', margin: 'auto', backgroundColor: 'white', borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[1], p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h1">
            Brand List
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Search by brand name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
            />
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
            >
              Search
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClick}
            >
              Export
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleExport('excel')}>Excel</MenuItem>
              <MenuItem onClick={() => handleExport('csv')}>CSV</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr</TableCell>
              <TableCell>Brand Id</TableCell>
              <TableCell>Brand Image</TableCell>
              <TableCell>Brand Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBrands.map((brand, index) => (
              <TableRow key={brand.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{brand.id}</TableCell>
                <TableCell>
                  <img src={brand.image} alt={brand.name} style={{ width: 100, height: 50, objectFit: 'contain' }} />
                </TableCell>
                <TableCell>{brand.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
export default Brandlist;
