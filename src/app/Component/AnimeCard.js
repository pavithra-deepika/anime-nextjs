
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  media: {
    height: '5-', 
    width:'100',
  }
};
export default function AnimeCard({movie}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
  <Box sx={style} 
    onClick={handleClose}>
      {/* <img src = {movie.images.jpg.image_url} ></img>  */}
      <CardMedia 
        // style={style.media} 
        sx={{height: 400}}
        component="img"
        image={movie.images.jpg.image_url}
        alt="name"
        />
      <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Episodes: {movie.episodes} <br /> Rating: {movie.rating} <br /> duration: {movie.duration} <br /> Season: {movie.season} <br /> Year: {movie.year} <br /> Rank: {movie.rank} <br /> genres: {movie.genres.map(genre => genre.name + ", ",)}
        </Typography>
  </Box>
</Modal>
    <Card sx={{ maxWidth: 345 ,maxHeight: 600, height:800,  ml:2,  display:'flex',justifyContent:"space-around", flexWrap: "wrap"}} onClick={handleOpen}>
      <CardActionArea >   
        <CardContent sx={{mb: 5, ml:2, wordWrap: 'break-word'}}>  
        {/* <img src = {movie.images.jpg.image_url} style={style.media}  ></img> */}
        <CardMedia 
        // style={style.media} 
        sx={{height: 400}}
        component="img"
        image={movie.images.jpg.image_url}
        alt="name"
        />
          <Typography gutterBottom variant="h5" component="div"  sx={{ wordWrap: 'break-word' }}>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"  sx={{ wordWrap: 'break-word' }}>
          Episodes: {movie.episodes} <br /> genres: {movie.genres.map(genre => genre.name + ", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}