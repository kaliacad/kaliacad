import React from "react";
import { ContactMail, Home, Person2, SmsFailed } from "@mui/icons-material";
import { Button, Card, CardContent, Divider } from "@mui/material";
import { navigate } from "gatsby";

function BlogMenuLefst() {
  // const nav = useNavigate();
  return (
    <div
      style={{
        marginTop: 10,
        padding: 5,
      }}
    >
      <Card
        sx={
          {
            // justifyContent:"center",
            // alignItems:"center",
            // display:"flex",
            // flexDirection:"column"
          }
        }
      >
        <CardContent>
          <Button
            onClick={() => navigate("/")}
            sx={{
              width: "100%",
              textAlign: "end",
              justifyContent: "flex-start",
              color: "#000",
              ":hover": {
                background: "#f0f0f0",
                color: "blue",
              },
            }}
            variant="text"
            startIcon={<Home sx={{ color: "blue" }} />}
          >
            Acceuil
          </Button>

          <Button
            sx={{
              width: "100%",
              textAlign: "end",
              justifyContent: "flex-start",
              color: "#000",
              ":hover": {
                background: "#f0f0f0",
                color: "blue",
              },
            }}
            variant="text"
            startIcon={<Person2 sx={{ color: "red" }} />}
          >
            Faire un don
          </Button>
          <Button
            onClick={() => navigate("/contacter")}
            sx={{
              width: "100%",
              textAlign: "end",
              justifyContent: "flex-start",
              fontSize: 14,
              color: "#000",
              ":hover": {
                background: "#f0f0f0",
                color: "blue",
              },
            }}
            variant="text"
            startIcon={<ContactMail style={{ color: "green" }} />}
          >
            Contacter
          </Button>
          <Divider
            sx={{
              mt: 1,
              mb: 1,
            }}
          />
          <Button
            sx={{
              // width:"100%",
              fontSize: 12,
              textAlign: "end",
              justifyContent: "flex-start",
              color: "#000",
              ":hover": {
                background: "#f0f0f0",
                // color:"#fff"
              },
            }}
            variant="text"
            startIcon={<SmsFailed />}
          >
            A props de nous
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default BlogMenuLefst;
