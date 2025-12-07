// src/pages/AsanaDetailPage.jsx
import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { ASANAS } from "../data/asanas";
import {
  Box,
  Typography,
  Chip,
  Divider,
  Stack,
  Link,
  Button,
} from "@mui/material";

const AsanaDetailPage = () => {
  const { id } = useParams();
  const asana = ASANAS.find((a) => a.id === id);

  if (!asana) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Asana not found
        </Typography>
        <Button component={RouterLink} to="/" variant="outlined">
          Back to home
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: "auto" }}>
      <Button
        component={RouterLink}
        to="/"
        variant="text"
        sx={{ mb: 2 }}
      >
        ← Back to all asanas
      </Button>

      {/* Header with image */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{ mb: 3 }}
      >
        <Box
          component="img"
          src={asana.image}
          alt={`${asana.english} (${asana.sanskrit})`}
          sx={{
            width: { xs: "100%", md: 260 },
            height: { xs: 220, md: 260 },
            objectFit: "contain",
            p: 2,
          }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            {asana.english}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {asana.sanskrit}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
            <Chip label={asana.type} />
            <Chip label={`Evidence: ${asana.evidenceLevel}`} />
            {asana.tags?.map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" />
            ))}
          </Stack>
          <Typography variant="body1">{asana.shortSummary}</Typography>
        </Box>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h5" gutterBottom>
        Traditional description & benefits
      </Typography>
      <ul>
        {asana.traditionalBenefits?.map((b) => (
          <li key={b}>
            <Typography variant="body1">{b}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant="h5" sx={{ mt: 3 }} gutterBottom>
        What current research suggests
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {asana.researchSummary}
      </Typography>

      {asana.conditionsLinked && asana.conditionsLinked.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
            Commonly included in yoga programs for:
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
            {asana.conditionsLinked.map((cond) => (
              <Chip
                key={cond}
                label={cond.replace(/-/g, " ")}
                variant="outlined"
              />
            ))}
          </Stack>
        </>
      )}

      <Typography variant="h5" sx={{ mt: 3 }} gutterBottom>
        Safety & contraindications
      </Typography>
      <ul>
        {asana.safetyNotes?.map((n) => (
          <li key={n}>
            <Typography variant="body1">{n}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant="h5" sx={{ mt: 3 }} gutterBottom>
        References (program-level, not pose-specific unless noted)
      </Typography>
      <ul>
        {asana.references?.map((ref) => (
          <li key={ref.label}>
            <Link href={ref.url} target="_blank" rel="noopener">
              {ref.label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default AsanaDetailPage;
