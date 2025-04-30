import React, { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Paper,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TuneIcon from "@mui/icons-material/Tune";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, searchMovies } from "../../redux/actions/movieActions";
import { selectSearchQuery } from "../../redux/selectors/movieSelectors";
import useDebounce from "../../hooks/useDebounce";
import styles from "./MovieList.module.scss";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const currentQuery = useSelector(selectSearchQuery);
  const [query, setQuery] = useState(currentQuery);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery !== currentQuery) {
      dispatch(setSearchQuery(debouncedQuery));
      dispatch(searchMovies());
    }
  }, [debouncedQuery, currentQuery, dispatch]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    dispatch(setSearchQuery(""));
    dispatch(searchMovies());
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        mb: 4,
      }}
    >
      <Paper
        elevation={isFocused ? 4 : 2}
        className={styles.searchBarContainer}
        sx={{
          borderRadius: 3,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          border: "1px solid",
          borderColor: isFocused
            ? "rgba(124, 58, 237, 0.3)"
            : "rgba(124, 58, 237, 0.1)",
          boxShadow: isFocused
            ? "0 8px 24px rgba(124, 58, 237, 0.15)"
            : "0 4px 12px rgba(124, 58, 237, 0.08)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 24px rgba(124, 58, 237, 0.12)",
            borderColor: "rgba(124, 58, 237, 0.2)",
          },
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for movies, TV shows, episodes..."
          value={query}
          onChange={handleQueryChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              padding: "4px 8px",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: "16px 14px",
              fontSize: "1.1rem",
              "&::placeholder": {
                color: "#6B7280",
                opacity: 0.8,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    fontSize: "24px",
                    color: isFocused ? "#7C3AED" : "#6B7280",
                    transition: "color 0.3s ease",
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Box sx={{ display: "flex", gap: 1 }}>
                  {query && (
                    <Tooltip title="Clear search">
                      <IconButton
                        onClick={handleClear}
                        size="small"
                        sx={{
                          color: "#6B7280",
                          "&:hover": {
                            color: "#7C3AED",
                            backgroundColor: "rgba(124, 58, 237, 0.08)",
                          },
                        }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Box
                    sx={{
                      width: "1px",
                      height: 24,
                      backgroundColor: "rgba(124, 58, 237, 0.2)",
                      margin: "0 4px",
                    }}
                  />
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar;
