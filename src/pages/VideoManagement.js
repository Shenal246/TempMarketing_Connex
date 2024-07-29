import React, { useState } from 'react';
import {
  Tabs, Tab, Box, Typography, TextField, Button, Select, MenuItem,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel
} from '@mui/material';
import '../styles/VideoManagement.css';

const VideoManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

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
                {videos.map((video, index) => (
                  <TableRow key={index}>
                    <TableCell>{video.title}</TableCell>
                    <TableCell>{video.videoLink}</TableCell>
                    <TableCell>{video.status}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => { setCurrentVideo(video); setOpen(true); }}>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
