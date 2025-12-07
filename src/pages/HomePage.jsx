// src/pages/HomePage.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ASANAS } from "../data/asanas";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Chip,
} from "@mui/material";

function evidenceLabel(level) {
  switch (level) {
    case "good":
      return "Good evidence";
    case "preliminary":
      return "Preliminary evidence";
    default:
      return "Insufficient evidence";
  }
}

const HomePage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredAsanas = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return ASANAS;

    return ASANAS.filter((asana) => {
      const haystack = [
        asana.english,
        asana.sanskrit,
        asana.type,
        ...(asana.tags || []),
        ...(asana.conditionsLinked || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Connecting yoga asanas to science literature
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 3, maxWidth: 800, mx: "auto" }}
      >
        Explore key yoga asanas, see how they are used in research-based yoga
        programs, and understand where evidence is strong, preliminary, or
        lacking.
      </Typography>

      {/* Search bar */}
      <Box sx={{ maxWidth: 500, mx: "auto", mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by asana, type, or condition (e.g., back pain, anxiety)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

      {/* Grid of asanas */}
      <Grid container spacing={3}>
        {filteredAsanas.map((asana) => (
          <Grid item key={asana.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea onClick={() => navigate(`/asana/${asana.id}`)}>
                <Box
                  component="img"
                  src={asana.image}
                  alt={`${asana.english} (${asana.sanskrit})`}
                  sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "contain",
                    p: 2,
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary">
                    {asana.sanskrit}
                  </Typography>
                  <Typography variant="h6">{asana.english}</Typography>
                  <Box sx={{ mt: 1, mb: 1 }}>
                    <Chip size="small" label={evidenceLabel(asana.evidenceLevel)} />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {asana.shortSummary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {filteredAsanas.length === 0 && (
          <Grid item xs={12}>
            <Typography align="center">
              No asanas matched your search. Try a different term.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;
