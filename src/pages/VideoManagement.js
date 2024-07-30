import React, { useState } from 'react';
import {
  Tabs, Tab, Box, Typography, TextField, InputAdornment, Button, Select, MenuItem,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel,
  TablePagination
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/VideoManagement.css';

const initialVideos = [
  { title: 'React Tutorial', videoLink: 'https://example.com/react', status: 'enabled' },
  { title: 'Vue.js Guide', videoLink: 'https://example.com/vue', status: 'disabled' },
  { title: 'Angular Best Practices', videoLink: 'https://example.com/angular', status: 'enabled' },
  { title: 'JavaScript Basics', videoLink: 'https://example.com/js', status: 'enabled' },
  { title: 'CSS Flexbox', videoLink: 'https://example.com/css-flexbox', status: 'disabled' },
  // Add more sample videos as needed
];

const VideoManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [videos, setVideos] = useState(initialVideos);
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleAddVideo = () => {
    const title = document.getElementById('video-title').value;
    const videoLink = document.getElementById('video-link').value;
    const status = document.getElementById('video-status').value;

    if (title && videoLink && status) {
      setVideos([...videos, { title, videoLink, status }]);
    }
  };

  const handleUpdateVideo = () => {
    const updatedVideos = videos.map(video => {
      if (video === currentVideo) {
        return {
          title: document.getElementById('update-video-title').value,
          videoLink: document.getElementById('update-video-link').value,
          status: document.getElementById('update-video-status').value,
        };
      }
      return video;
    });

    setVideos(updatedVideos);
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setPage(0);
  };

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery) || 
    video.status.toLowerCase().includes(searchQuery)
  );

  return (
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Add Videos" />
        <Tab label="All Videos" />
      </Tabs>
      {tabIndex === 0 && (
        <Box p={3}>
          <Typography variant="h6">Add New Video</Typography>
          <TextField id="video-title" label="Title" fullWidth margin="normal" />
          <TextField id="video-link" label="Video Link" fullWidth margin="normal" />
          <FormControl fullWidth margin="normal">
            <InputLabel id="video-status-label">Status</InputLabel>
            <Select id="video-status" labelId="video-status-label">
              <MenuItem value="" disabled>Select Video Status</MenuItem>
              <MenuItem value="enabled">Enabled</MenuItem>
              <MenuItem value="disabled">Disabled</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleAddVideo}>Add Video</Button>
        </Box>
      )}
      {tabIndex === 1 && (
        <Box p={3}>
          <Typography variant="h6">All Videos</Typography>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by title or status"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Video Link</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-body">
                {filteredVideos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((video, index) => (
                  <TableRow key={index}>
                    <TableCell>{video.title}</TableCell>
                    <TableCell>{video.videoLink}</TableCell>
                    <TableCell>{video.status}</TableCell>
                    <TableCell>
                      <EditIcon
                        style={{ color: '#003366', cursor: 'pointer' }}
                        onClick={() => { setCurrentVideo(video); setOpen(true); }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={filteredVideos.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Video</DialogTitle>
        <DialogContent>
          <TextField id="update-video-title" label="Title" defaultValue={currentVideo?.title} fullWidth margin="normal" />
          <TextField id="update-video-link" label="Video Link" defaultValue={currentVideo?.videoLink} fullWidth margin="normal" />
          <FormControl fullWidth margin="normal">
            <InputLabel id="update-video-status-label">Status</InputLabel>
            <Select id="update-video-status" labelId="update-video-status-label" defaultValue={currentVideo?.status}>
              <MenuItem value="enabled">Enabled</MenuItem>
              <MenuItem value="disabled">Disabled</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateVideo} color="primary">Update</Button>
          <Button onClick={() => setOpen(false)} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VideoManagement;
