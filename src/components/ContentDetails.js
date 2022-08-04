import * as React from 'react';
import { Box, Button, Link } from "@mui/material";
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import coinpaprika from '../apis/coinpaprika';


const ContentDetails = () => {
  const [movies, setMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await coinpaprika.get(`coins/${params.id}`);
        setMovies(fetchedMovies.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <Box class="content">
      <Link href="/">&larr; Kembali</Link>
      <Box sx={{display: 'flex', flexDirection: 'column',gap: '12px'}}>
        <Typography variant="h3">{movies.name}</Typography>
        <Typography variant="h4">{movies.symbol}</Typography>
        <Typography variant="h5">Rank: {movies.rank} | Type: {movies.type}</Typography>
        <Typography variant="p">{movies.description}</Typography>
        <Typography variant="h6">Development Status: {movies.development_status}</Typography>
        <Typography variant="h6">Hash Algorithm: {movies.hash_algorithm}</Typography>
      </Box>
    </Box>
  );
};

export default ContentDetails;