import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { GoldSupport, PlatiumSupport } from "../data/Data";
import Header from "../components/header/Header";
import Layout from "../theme/layout";

const GoldSupports = GoldSupport.map((supporter, index) => (
  <Card
    key={index}
    sx={{
      maxWidth: 250,
      // ml: 5,
    }}
    elevation={0}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height={100}
        image={supporter.logo}
        alt=""
        style={{
          objectFit: "contain",
        }}
      />
    </CardActionArea>
  </Card>
));

const PlatiumSupports = PlatiumSupport.map((supporter, index) => (
  <Card
    key={index}
    sx={{
      maxWidth: 250,
      ml: 5,
    }}
    elevation={0}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height={100}
        image={supporter.logo}
        alt=""
        style={{
          objectFit: "contain",
        }}
      />
    </CardActionArea>
  </Card>
));

function supporters() {
  return (
    <Layout>
      <Header />
      <Grid container>
        <Grid item xs={false} sm={false} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} mt={5}>
          <Typography variant="h2">Nos Supporteurs</Typography>
      <Grid
        container
        sx={{
          overflow: "hidden",
        }}
      >
        <Grid item xs={false} sm={false} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} mt={5}>
          <Typography variant="h2">Nos Supporteurs</Typography>
          <Typography mt={2} mb={3}>
            Code.org is sincerely grateful for our vibrant community of
            corporate, institutional, and individual donors. We acknowledge the
            following supporters who have made generous commitments of $1,000
            and above to support our 2023 fiscal year (January 1, 2023 -
            December 31, 2023). For further details or to explore partnership
            opportunities with Code.org, please contact our Office of
            Development at giving@code.org. Code.org® believes that every
            student in every school should have the opportunity to learn
            computer science. Thanks to the support listed below, we are able to
            increase access to computer science education globally. Code.org is
            a 501(c)(3) nonprofit organization and our Federal Tax ID is
            46-0858543.
          </Typography>
          <Typography variant="h3">Plantium Supporteurs ($10,000+)</Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {PlatiumSupports}
          </div>
          <Typography mt={5} variant="h3">
            Gold Supporteurs ($3,000+)
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {GoldSupports}
          </div>
          <div>
            <Stack
              sx={{
                bgcolor: "#00B2C0",
                p: 2,
                flexDirection: "row",
                // justifyContent: "space-between",
                mt: 3,
                // width: "145%",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Institutional Supporters
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Individual Supporters
              </Typography>
            </Stack>
            <Stack
              sx={{
                bgcolor: "#5B6770",
                p: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                $500+
              </Typography>
            </Stack>
            <div
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <ul>
                    <li>Contributaire 1</li>
                    <li>Contributaire 2</li>
                  </ul>
                </Stack>
                <Stack
                  sx={{
                    marginLeft: 27,
                  }}
                >
                  <ul>
                    <li>Contributaire 1</li>
                    <li>Contributaire 2</li>
                  </ul>
                </Stack>
              </Stack>
            </div>
            <Stack
              sx={{
                bgcolor: "#5B6770",
                p: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                $100+
              </Typography>
            </Stack>
            <div
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <ul>
                    <li>Contributaire 1</li>
                    <li>Contributaire 2</li>
                  </ul>
                </Stack>
                <Stack
                  sx={{
                    marginLeft: 27,
                  }}
                >
                  <ul>
                    <li>Contributaire 1</li>
                    <li>Contributaire 2</li>
                  </ul>
                </Stack>
              </Stack>
            </div>
            <Stack
              sx={{
                bgcolor: "#5B6770",
                p: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                $30+
              </Typography>
            </Stack>
            <div
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <ul>
                    <li>Contributaire 1</li>
                    <li>Contributaire 2</li>
                  </ul>
                </Stack>
                <Stack
                  sx={{
                    marginLeft: 27,
                  }}
                >
                  <ul>
                    <li>Contributaire 1</li>
                    <li>Contributaire 2</li>
                  </ul>
                </Stack>
              </Stack>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={false} md={2} lg={2} xl={2}></Grid>
      </Grid>
    </Layout>
  );
}

export default supporters;
export const Head = () => <title>Kali Academy | Supporteurs</title>;
