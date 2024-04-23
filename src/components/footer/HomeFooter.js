import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { GitHub, Email, Telegram, YouTube } from "@mui/icons-material";
import imageKali from "../../images/Kali_academy_-_Logo-gris-removebg-preview.png";
import { dataAboutUs, dataCommunity, dataGetInVolved } from "../../data/Data";

function FooterFin({ bgcolo }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un défilement fluide, utilisez "smooth"
    });
  };
  return (
    <div>
      <Grid
        container
        display={{
          xs: "none",
          md: "flex",
          sm: "none",
          lg: "flex",
          xl: "flex",
        }}
      >
        <div
          style={{
            background: "#fff",
          }}
        >
          <div
            style={{
              background: "#fff",
            }}
          >
            <div
              style={{
                margin: 100,
                marginTop: -10,
                marginBottom: 0,
              }}
            >
              <Grid container pb={"5%"} justifyContent={"center"}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Typography variant="h2">Get Involved</Typography>
                  {dataGetInVolved.map((e, index) => (
                    <span key={e.id} color="#000">
                      <Typography
                        color={"#000"}
                        variant="body1"
                        sx={{
                          // fontFamily: "Montserrat",
                          color: "gray",
                          // fontSize: 16,
                          mt: 1,
                          ":hover": {
                            color: "#000",
                            fontSize: 18,
                            cursor: "pointer",
                            // textDecoration: "underLine",
                          },
                        }}
                      >
                        {e.title}
                      </Typography>
                    </span>
                  ))}
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} ml={3}>
                  <Typography variant="h2">About Us</Typography>
                  {dataAboutUs.map((e, index) => (
                    <span key={e.id} color="#000">
                      <Typography
                        color={"#000"}
                        variant="body1"
                        sx={{
                          color: "gray",
                          mt: 1,
                          ":hover": {
                            color: "#000",
                            fontSize: 18,
                            cursor: "pointer",
                          },
                        }}
                      >
                        {e.title}
                      </Typography>
                    </span>
                  ))}
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} ml={4}>
                  <Typography variant="h2">Community</Typography>
                  {dataCommunity.map((e, index) => (
                    <span key={e.id} color="#000">
                      <Typography
                        color={"#000"}
                        variant="body1"
                        sx={{
                          color: "gray",
                          mt: 1,
                          ":hover": {
                            color: "#000",
                            fontSize: 18,
                            cursor: "pointer",
                            // textDecoration: "underLine",
                          },
                        }}
                      >
                        {e.title}
                      </Typography>
                    </span>
                  ))}

                  <Stack flexDirection={"row"} pt={2}>
                    <span
                      style={{
                        color: "#000",
                        marginRight: 20,
                      }}
                    >
                      <a href="https://github.com/kaliacad">
                        <GitHub
                          fontSize="small"
                          sx={{
                            ":hover": {
                              color: "#000",
                              cursor: "pointer",
                            },
                          }}
                        />
                      </a>
                    </span>
                    <span
                      style={{
                        color: "#000",
                        // fontSize: 12,
                        marginRight: 20,
                      }}
                    >
                      <a href="mailto:bam6192@gmail.com">
                        <Email
                          fontSize="small"
                          sx={{
                            ":hover": {
                              color: "#000",
                              cursor: "pointer",
                            },
                          }}
                        />
                      </a>
                    </span>
                    <span
                      style={{
                        color: "#000",
                        // fontSize: 12,
                        marginRight: 20,
                      }}
                    >
                      <a href="https://t.me/+U3aniTiCTysyNmQ0">
                        {" "}
                        <Telegram
                          fontSize="small"
                          sx={{
                            ":hover": {
                              color: "#000",
                              cursor: "pointer",
                            },
                          }}
                        />
                      </a>
                    </span>
                    <span
                      style={{
                        color: "#000",
                        // fontSize: 12,
                      }}
                    ></span>
                  </Stack>
                  <img
                    src={imageKali}
                    alt="Kali academy"
                    style={{
                      width: "100%",
                      height: "auto",
                      display:
                        "block" /* Supprime l'espace réservé sous l'image */,
                      margin: "0 auto",
                      objectFit: "cover",
                      cursor: "pointer",
                      background: "none",
                      marginLeft: -20,
                    }}
                    onClick={scrollToTop}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <Stack
            sx={{
              background: "#000",
            }}
            flexDirection={"row"}
            p={1}
            justifyContent={"center"}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                // fontFamily: "Montserrat",
              }}
            >
              Kali Academy 2024
            </Typography>
          </Stack>
        </div>
      </Grid>
      {
        //affichage mobile
      }

      <Grid
        container
        display={{
          xs: "flex",
          md: "none",
          sm: "felx",
          lg: "none",
          xl: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
          }}
        >
          <div
            style={{
              background: "#fff",
            }}
          >
            <div
              style={{
                margin: 20,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              <Grid container pb={"5%"}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: 25,
                      color: "#000",
                      fontWeight: 700,
                    }}
                  >
                    Get Involved
                  </Typography>
                  {dataGetInVolved.map((e, index) => (
                    <span key={e.id} color="#000">
                      <Typography
                        color={"#000"}
                        sx={{
                          fontFamily: "Montserrat",
                          color: "gray",
                          fontSize: 16,
                          mt: 1,
                          ":hover": {
                            color: "#000",
                            fontSize: 18,
                            cursor: "pointer",
                            // textDecoration: "underLine",
                          },
                        }}
                      >
                        {e.title}
                      </Typography>
                    </span>
                  ))}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: 25,
                      color: "#000",
                      fontWeight: 700,
                    }}
                  >
                    About Us
                  </Typography>
                  {dataAboutUs.map((e, index) => (
                    <span key={e.id} color="#000">
                      <Typography
                        color={"#000"}
                        sx={{
                          fontFamily: "Montserrat",
                          color: "gray",
                          fontSize: 16,
                          mt: 1,
                          ":hover": {
                            color: "#000",
                            fontSize: 18,
                            cursor: "pointer",
                            // textDecoration: "underLine",
                          },
                        }}
                      >
                        {e.title}
                      </Typography>
                    </span>
                  ))}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: 25,
                      color: "#000",
                      fontWeight: 700,
                    }}
                  >
                    Community
                  </Typography>
                  {dataCommunity.map((e, index) => (
                    <span key={e.id} color="#000">
                      <Typography
                        color={"#000"}
                        sx={{
                          fontFamily: "Montserrat",
                          color: "gray",
                          fontSize: 16,
                          mt: 1,
                          ":hover": {
                            color: "#000",
                            fontSize: 18,
                            cursor: "pointer",
                            // textDecoration: "underLine",
                          },
                        }}
                      >
                        {e.title}
                      </Typography>
                    </span>
                  ))}

                  <Stack flexDirection={"row"} pt={2}>
                    <span
                      style={{
                        color: "#000",
                        marginRight: 20,
                      }}
                    >
                      <GitHub
                        fontSize="small"
                        sx={{
                          ":hover": {
                            color: "#000",
                            cursor: "pointer",
                          },
                        }}
                      />
                    </span>
                    <span
                      style={{
                        color: "#000",
                        // fontSize: 12,
                        marginRight: 20,
                      }}
                    >
                      <Email
                        fontSize="small"
                        sx={{
                          ":hover": {
                            color: "#000",
                            cursor: "pointer",
                          },
                        }}
                      />
                    </span>
                    <span
                      style={{
                        color: "#000",
                        // fontSize: 12,
                        marginRight: 20,
                      }}
                    >
                      <Telegram
                        fontSize="small"
                        sx={{
                          ":hover": {
                            color: "#000",
                            cursor: "pointer",
                          },
                        }}
                      />
                    </span>
                    <span
                      style={{
                        color: "#000",
                        // fontSize: 12,
                      }}
                    >
                      <YouTube fontSize="small" />
                    </span>
                  </Stack>
                  <img
                    src={imageKali}
                    alt="Kali academy"
                    style={{
                      width: "100%",
                      height: "auto",
                      display:
                        "block" /* Supprime l'espace réservé sous l'image */,
                      margin: "0 auto",
                      objectFit: "contain",
                      cursor: "pointer",
                      background: "none",
                      marginLeft: -20,
                    }}
                    onClick={scrollToTop}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <Stack
            sx={{
              background: "#000",
            }}
            flexDirection={"row"}
            p={2}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Montserrat",
                fontSize: 13,
              }}
            >
              Kali Academy 2024
            </Typography>
          </Stack>
        </div>
      </Grid>
    </div>
  );
}

export default FooterFin;
