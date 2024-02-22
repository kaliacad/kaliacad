import React from "react";
import { dataBlog } from "../../data/Data";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  limitedLines: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 4, // Limite le texte à 3 lignes
  },
});

function ArticleBlog({ search = "" }) {
  const classes = useStyles();

  const data = dataBlog.filter((e) =>
    search.toUpperCase() === ""
      ? e
      : e.title && e && e.title.toUpperCase().includes(search.toUpperCase())
  );
  return (
    <div>
      {data.map((e) => (
        <Card sx={{ maxWidth: "100%", mb: 2 }} key={e.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                R
              </Avatar>
            }
            title={e.identite}
            titleTypographyProps={{
              fontWeight: "bold",
            }}
            subheader={e.date}
          />
          <CardContent>
            <Grid container>
              <Grid item xs={8} md={8} sm={8} lg={8} xl={8}>
                <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                  {e.title}
                </Typography>
                <Typography className={classes.limitedLines}>
                  {e.description}
                </Typography>
              </Grid>
              <Grid item xs={4} md={4} sm={4} lg={4} xl={4} mt={-3}>
                <img
                  src={e.imagearticle}
                  alt={e.title}
                  style={{
                    width: 200,
                    height: 180,
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ArticleBlog;
