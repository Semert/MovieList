import React from "react";
import {
  TextField,
  Box,
  Chip,
  Typography,
  SelectChangeEvent,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchType,
  setSearchYear,
  searchMovies,
} from "../../redux/actions/movieActions";
import {
  selectSearchType,
  selectSearchYear,
} from "../../redux/selectors/movieSelectors";
import styles from "./MovieList.module.scss";

const FilterPanel: React.FC = () => {
  const dispatch = useDispatch();
  const currentType = useSelector(selectSearchType);
  const currentYear = useSelector(selectSearchYear);

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    dispatch(
      setSearchType(event.target.value as "movie" | "series" | "episode" | "")
    );
    dispatch(searchMovies());
  };

  const handleTypeClick = (newType: "movie" | "series" | "episode" | "") => {
    const valueToSet = currentType === newType ? "" : newType;
    handleTypeChange({
      target: { value: valueToSet },
    } as SelectChangeEvent<string>);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = event.target.value;
    if (yearValue === "" || /^\d{0,4}$/.test(yearValue)) {
      dispatch(setSearchYear(yearValue));
      if (yearValue.length === 4 || yearValue === "") {
        dispatch(searchMovies());
      }
    }
  };

  const clearType = () => {
    dispatch(setSearchType(""));
    dispatch(searchMovies());
  };

  const clearYear = () => {
    dispatch(setSearchYear(""));
    dispatch(searchMovies());
  };

  const clearAllFilters = () => {
    dispatch(setSearchType(""));
    dispatch(setSearchYear(""));
    dispatch(searchMovies());
  };

  return (
    <Box
      className={styles.filterPanelContainer}
      sx={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: 3,
        transition: "all 0.3s ease",
        border: "1px solid rgba(124, 58, 237, 0.1)",
        boxShadow: "0 4px 20px rgba(124, 58, 237, 0.08)",
        padding: "24px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <FilterAltIcon
            sx={{
              fontSize: 28,
              color: "#7C3AED",
              filter: "drop-shadow(0 2px 4px rgba(124, 58, 237, 0.2))",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              background: "linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Filter Movies
          </Typography>
        </Box>
        {(currentType || currentYear) && (
          <Tooltip title="Clear all filters">
            <IconButton
              onClick={clearAllFilters}
              size="small"
              sx={{
                color: "#7C3AED",
                "&:hover": {
                  backgroundColor: "rgba(124, 58, 237, 0.08)",
                },
              }}
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 1.5,
              color: "#4B5563",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <VideoLibraryIcon sx={{ fontSize: 20, color: "#7C3AED" }} />
            Content Type
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              icon={<MovieIcon />}
              label="Movies"
              onClick={() => handleTypeClick("movie")}
              sx={{
                backgroundColor:
                  currentType === "movie" ? "#7C3AED" : "transparent",
                color: currentType === "movie" ? "#fff" : "#4B5563",
                border: `1px solid ${currentType === "movie" ? "#7C3AED" : "rgba(124, 58, 237, 0.2)"}`,
                "&:hover": {
                  backgroundColor:
                    currentType === "movie"
                      ? "#6D28D9"
                      : "rgba(124, 58, 237, 0.08)",
                },
              }}
            />
            <Chip
              icon={<TvIcon />}
              label="TV Series"
              onClick={() => handleTypeClick("series")}
              sx={{
                backgroundColor:
                  currentType === "series" ? "#7C3AED" : "transparent",
                color: currentType === "series" ? "#fff" : "#4B5563",
                border: `1px solid ${currentType === "series" ? "#7C3AED" : "rgba(124, 58, 237, 0.2)"}`,
                "&:hover": {
                  backgroundColor:
                    currentType === "series"
                      ? "#6D28D9"
                      : "rgba(124, 58, 237, 0.08)",
                },
              }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 1.5,
              color: "#4B5563",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CalendarTodayIcon sx={{ fontSize: 20, color: "#7C3AED" }} />
            Release Year
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter year (e.g., 2024)"
            value={currentYear}
            onChange={handleYearChange}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: currentYear && (
                <IconButton
                  size="small"
                  onClick={clearYear}
                  sx={{ color: "#7C3AED" }}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                borderColor: "rgba(124, 58, 237, 0.2)",
                "&:hover": {
                  borderColor: "#7C3AED",
                },
                "&.Mui-focused": {
                  borderColor: "#7C3AED",
                  boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.1)",
                },
              },
            }}
          />
        </Box>
      </Box>

      {(currentType || currentYear) && (
        <Box mt={3} pt={2} borderTop="1px solid rgba(124, 58, 237, 0.1)">
          <Typography
            variant="subtitle2"
            sx={{
              color: "#4B5563",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Active Filters
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {currentType && (
              <Chip
                label={`Type: ${currentType === "movie" ? "Movies" : currentType === "series" ? "TV Series" : "Episodes"}`}
                onDelete={clearType}
                size="small"
                sx={{
                  backgroundColor: "rgba(124, 58, 237, 0.08)",
                  color: "#7C3AED",
                  "& .MuiChip-deleteIcon": {
                    color: "#7C3AED",
                    "&:hover": {
                      color: "#6D28D9",
                    },
                  },
                }}
              />
            )}
            {currentYear && (
              <Chip
                label={`Year: ${currentYear}`}
                onDelete={clearYear}
                size="small"
                sx={{
                  backgroundColor: "rgba(124, 58, 237, 0.08)",
                  color: "#7C3AED",
                  "& .MuiChip-deleteIcon": {
                    color: "#7C3AED",
                    "&:hover": {
                      color: "#6D28D9",
                    },
                  },
                }}
              />
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default FilterPanel;
