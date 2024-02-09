import { Container, Link, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <>
      <Container
        sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}
      >
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="#"
          underline="hover"
        >
          {"Features"}
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="#"
          underline="hover"
        >
          {"About"}
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="#"
          underline="hover"
        >
          {"Testimonials"}
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="#"
          underline="hover"
        >
          {"Contact"}
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="#"
          underline="hover"
        >
          {"Download"}
        </Link>
      </Container>
      <Box sx={{ display: "flex", ml: 10, mr: 10 }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 2,
          }}
          variant="h6"
          component="h6"
        >
          Follow us
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FacebookIcon></FacebookIcon>
          <TwitterIcon></TwitterIcon>
          <InstagramIcon></InstagramIcon>
          <YouTubeIcon></YouTubeIcon>
        </Box>
        <Box sx={{ ml: 40, textAlign: "center" }}>
          <p>1717 Herriso St, San Francisco, CA 94103, USA</p>
          <p>
            <CopyrightIcon sx={{ fontSize: "small" }} /> 2022 Your Company. All
            rights reserved.
          </p>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
