import React, { useEffect } from "react";
import { Typography, Alert, Container, Box, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../redux/actions/movieActions";
import {
  selectMovies,
  selectLoading,
  selectError,
  selectTotalResults,
  selectSearchQuery,
  selectSearchType,
  selectSearchYear,
} from "../../redux/selectors/movieSelectors";
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import styles from "./MovieList.module.scss";

import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const MovieList: React.FC = () => {
  const dispatch = useDispatch();

  // Selectors grouped by functionality
  const searchState = {
    query: useSelector(selectSearchQuery),
    type: useSelector(selectSearchType),
    year: useSelector(selectSearchYear),
  };

  const resultsState = {
    movies: useSelector(selectMovies),
    total: useSelector(selectTotalResults),
    isLoading: useSelector(selectLoading),
    error: useSelector(selectError),
  };

  useEffect(() => {
    dispatch(searchMovies());
  }, [dispatch]);

  // Helper functions
  const getTypeIcon = (type: string) => {
    const iconProps = { fontSize: 16 };
    switch (type) {
      case "movie":
        return <MovieIcon sx={iconProps} />;
      case "series":
        return <TvIcon sx={iconProps} />;
      default:
        return <LiveTvIcon sx={iconProps} />;
    }
  };

  const getChipStyles = {
    height: "24px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    "& .MuiChip-label": { px: 1, fontSize: "0.75rem" },
    "& .MuiChip-icon": { color: "#6366F1", fontSize: "16px" },
  };

  // Render functions
  const renderSearchHeader = () => (
    <>
      <Box my={0} className={styles.headerSection}>
        <Box
          className={styles.searchBarWrapper}
          sx={{
            transform: "translateY(0)",
            opacity: 1,
            transition: "all 0.5s ease-in-out",
            mb: 0,
          }}
        >
          <SearchBar />
        </Box>
      </Box>

      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          minWidth: "200px",
        }}
      >
        <SearchIcon sx={{ fontSize: 20, color: "#6B7280" }} />
        <Typography
          sx={{ fontSize: "0.9rem", color: "#374151", fontWeight: 500 }}
        >
          {resultsState.movies.length > 0
            ? `${resultsState.total} Results`
            : "No results"}
        </Typography>
      </Box>
    </>
  );

  const renderFilters = () => (
    <Box mb={3} sx={{ opacity: 1, transform: "translateY(0)" }}>
      <FilterPanel />
    </Box>
  );

  const renderFilterChips = () => (
    <Box
      sx={{
        p: 2,
        mb: 3,
        backgroundColor: "#F9FAFB",
        borderRadius: "8px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 1, flexGrow: 1, flexWrap: "wrap" }}>
        {searchState.type && (
          <Chip
            size="small"
            label={
              searchState.type.charAt(0).toUpperCase() +
              searchState.type.slice(1)
            }
            icon={getTypeIcon(searchState.type)}
            sx={getChipStyles}
          />
        )}
        {searchState.year && (
          <Chip
            size="small"
            label={searchState.year}
            icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
            sx={getChipStyles}
          />
        )}
      </Box>
    </Box>
  );

  const renderMovieGrid = () => (
    <Box mt={3}>
      <Box sx={{ display: "flex", flexWrap: "wrap", margin: -1.5 }}>
        {resultsState.movies.map((movie) => (
          <Box
            key={movie.imdbID}
            sx={{
              width: { xs: "100%", sm: "50%", md: "25%" },
              padding: 1.5,
              opacity: 1,
            }}
            className={styles.movieItemContainer}
          >
            <MovieItem movie={movie} />
          </Box>
        ))}
      </Box>
    </Box>
  );

  const renderEmptyState = () => (
    <Box my={6} py={4} textAlign="center" borderRadius={2} bgcolor="#f9f9f9">
      <img
        src="/no-results.png"
        alt="No results"
        style={{ width: 120, height: 120, opacity: 0.6, marginBottom: 16 }}
      />
      <Typography variant="h6" color="textSecondary">
        No movies found
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Try adjusting your search or filters
      </Typography>
    </Box>
  );

  // Main render
  return (
    <Container maxWidth="lg" className={styles.movieListContainer}>
      {renderSearchHeader()}
      {renderFilters()}

      {resultsState.isLoading ? (
        <Box
          sx={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </Box>
      ) : resultsState.error ? (
        <Alert severity="error" sx={{ borderRadius: "8px", py: 1.5, px: 2 }}>
          {resultsState.error}
        </Alert>
      ) : (
        <>
          {renderFilterChips()}
          {resultsState.movies.length > 0
            ? renderMovieGrid()
            : renderEmptyState()}
          <Box my={4} display="flex" justifyContent="center">
            <Pagination />
          </Box>
        </>
      )}
    </Container>
  );
};

export default MovieList;
