<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
<<<<<<< HEAD
  Button,
  useTheme,
  CircularProgress,
  Stack,
  Snackbar,
  Alert,
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

// Use environment variable or fallback to localhost
const API_BASE_URL = 'http://localhost:9091/api/categories/';
=======
  IconButton,
  Tooltip,
  Button,
  useTheme,
} from '@mui/material';
import { Settings as SettingsIcon, Download as DownloadIcon } from '@mui/icons-material';
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa

const Category = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // Auth helper functions
  const getAuthToken = () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return token;
  };

  // Fetch categories
  const fetchCategories = useCallback(async () => {
    const token = getAuthToken();
    if (!token) {
      setError('You are not authenticated. Please log in.');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const url = `${API_BASE_URL}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      console.log("text category:", url)
      if (response.status === 401) {
        setError('Session expired. Please log in again.');
        return;
      }
      if (response.status === 403) {
        setError("Access denied. You don't have permission to view categories.");
        return;
      }
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}: ${text}`);
      }
      const data = await response.json();
      const categories = data.data?.categories || data.categories || [];
      const baseURL = API_BASE_URL.replace('/api', ''); // http://localhost:5000
      const formattedCategories = categories.map((cat) => ({
        id: cat._id,
        name: cat.name || '',
        image: cat.image ? `${baseURL}/${cat.image}` : '',
      }));
      setCategories(formattedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError(error.message);
      showNotification(`Failed to fetch categories: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  // Fetch categories on mount and when searchTerm changes
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Show notification
  const showNotification = (message, severity = 'success') => {
    setNotification({ open: true, message, severity });
  };

  // Handle notification close
  const handleNotificationClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export to CSV
  const handleExport = () => {
    const headers = ['SI', 'Category Id', 'Category Name'];
    const csvData = filteredCategories.map((category, index) => [
      index + 1,
      category.id,
      category.name,
    ]);
    let csvContent = headers.join(',') + '\n';
    csvData.forEach((row) => {
      csvContent += row.map((field) => `"${field}"`).join(',') + '\n';
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `venue_categories_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('CSV file downloaded successfully!', 'success');
  };

  // Show loading state
  if (loading) {
    return (
      <Box
        p={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Stack alignItems="center" spacing={2}>
          <CircularProgress />
          <Typography>Loading categories...</Typography>
        </Stack>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      {/* Error/Success Messages */}
      <Snackbar
        open={!!error}
        autoHideDuration={null}
        onClose={() => setError(null)}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleNotificationClose}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          maxWidth: 'lg',
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[1],
          p: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h5" component="h1">
            Venue Category List
=======
  const categories = [
    { id: 11, image: 'https://via.placeholder.com/100x50', name: 'Luxury Minibus' },
    { id: 10, image: 'https://via.placeholder.com/100x50', name: 'Crossover' },
    { id: 9, image: 'https://via.placeholder.com/100x50', name: 'Limousine' },
    { id: 8, image: 'https://via.placeholder.com/100x50', name: 'Family Van' },
    { id: 7, image: 'https://via.placeholder.com/100x50', name: 'Electric Car' },
    { id: 6, image: 'https://via.placeholder.com/100x50', name: 'Executive Sedan' },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    // Logic for exporting data
    alert('Export functionality to be implemented');
  };

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 'lg', margin: 'auto', backgroundColor: 'white', borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[1], p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h1">
            Category List
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
<<<<<<< HEAD
              placeholder="Search venue categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              disabled={loading}
=======
              placeholder="Search categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
            />
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={handleExport}
<<<<<<< HEAD
              disabled={loading || filteredCategories.length === 0}
            >
              Export
            </Button>
=======
            >
              Export
            </Button>
           
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
          </Box>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SI</TableCell>
              <TableCell>Category Id</TableCell>
              <TableCell>Category Image</TableCell>
              <TableCell>Category Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
<<<<<<< HEAD
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <TableRow key={category.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{category.id}</TableCell>
                  <TableCell>
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        style={{ width: 100, height: 50, objectFit: 'contain' }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 100,
                          height: 50,
                          borderRadius: 1,
                          backgroundColor: '#f5f5f5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #e0e0e0',
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          No Image
                        </Typography>
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: 'center', py: 4, color: '#999' }}>
                  <Stack spacing={2} alignItems="center">
                    <Typography variant="h6" color="textSecondary">
                      {searchTerm
                        ? 'No categories found matching your search.'
                        : 'No categories available.'}
                    </Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            )}
=======
            {filteredCategories.map((category, index) => (
              <TableRow key={category.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{category.id}</TableCell>
                <TableCell>
                  <img src={category.image} alt={category.name} style={{ width: 100, height: 50, objectFit: 'contain' }} />
                </TableCell>
                <TableCell>{category.name}</TableCell>
              </TableRow>
            ))}
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default Category;