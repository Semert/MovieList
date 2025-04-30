import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
  Box,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import {
  fetchMovieDetails,
  clearSelectedMovie,
} from "../../redux/actions/movieActions";
import {
  selectSelectedMovie,
  selectLoading,
  selectError,
} from "../../redux/selectors/movieSelectors";
import LoadingSpinner from "../common/LoadingSpinner";
import MovieInfo from "./MovieInfo";
import styles from "./MovieDetail.module.scss";
import NoImage from "./NoImage";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector(selectSelectedMovie);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [imageError, setImageError] = useState(false); // Add this state

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }

    // Cleanup function to clear selected movie when component unmounts
    return () => {
      dispatch(clearSelectedMovie());
    };
  }, [id, dispatch]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Container className={styles.container}>
        <Alert severity="error" className={styles.errorAlert}>
          {error}
        </Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={handleGoBack}
          className={styles.backButton}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  if (!movie) {
    return null;
  }

  // Handle missing or N/A poster
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : null;

  console.log(posterUrl, imageError);
  return (
    <Container className={styles.container}>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
        className={styles.backButton}
      >
        Go Back
      </Button>

      <Paper
        elevation={3}
        className={styles.movieDetailPaper}
        sx={{
          borderRadius: 3,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
            {posterUrl && !imageError ? (
              <img
                src={posterUrl}
                alt={movie.Title}
                className={styles.poster}
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <NoImage title={movie.Title} />
            )}
          </Box>

          <Box sx={{ width: { xs: "100%", md: "66.67%" } }}>
            <Typography variant="h4" component="h1" className={styles.title}>
              {movie.Title}
            </Typography>

            <Box className={styles.yearRuntime}>
              <Typography variant="h6">{movie.Year}</Typography>
              {movie.Runtime !== "N/A" && (
                <Typography variant="h6">• {movie.Runtime}</Typography>
              )}
              {movie.Rated !== "N/A" && (
                <Chip
                  label={movie.Rated}
                  className={styles.ratedChip}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    boxShadow: "0 4px 12px rgba(236, 72, 153, 0.15)",
                  }}
                />
              )}
            </Box>

            {movie.Genre !== "N/A" && (
              <Box className={styles.genreContainer}>
                {movie.Genre.split(", ").map((genre) => (
                  <Chip
                    key={genre}
                    label={genre}
                    className={styles.genreChip}
                    sx={{
                      borderRadius: 2,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  />
                ))}
              </Box>
            )}

            {movie.imdbRating !== "N/A" && (
              <Box className={styles.ratingContainer}>
                <StarIcon className={styles.starIcon} />
                <Typography variant="h6" className={styles.rating}>
                  {movie.imdbRating}/10
                </Typography>
                {movie.imdbVotes !== "N/A" && (
                  <Typography variant="body2" className={styles.votes}>
                    (
                    {parseInt(
                      movie.imdbVotes.replace(/,/g, "")
                    ).toLocaleString()}{" "}
                    votes)
                  </Typography>
                )}
              </Box>
            )}

            {movie.Plot !== "N/A" && (
              <Box className={styles.plotContainer}>
                <Typography variant="body1" className={styles.plot}>
                  {movie.Plot}
                </Typography>
              </Box>
            )}

            <Divider className={styles.divider} />

            <MovieInfo movie={movie} />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default MovieDetail;
