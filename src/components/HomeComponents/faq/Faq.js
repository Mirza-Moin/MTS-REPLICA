import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";

import "./faq.scss";

function Faq() {
  return (
    <main className="faq-container">
      <main className="faq">
        <div className="faq-header">
          <h1>FAQ</h1>
          <p>
            Frequently asked questions can be found below however if you didn’t
            find the answer you were hunting for, Reach out to our team directly
            at <a href="#">Email</a> and we’ll get back to you as soon as
            possible!
          </p>
        </div>
      </main>
      <div className="accordion">
        <AnimationOnScroll animateIn="animate__pulse">
          <Accordion sx={{ backgroundColor: "transparent" }}>
            <AccordionSummary
              sx={{
                marginBottom: "1em",
                backgroundColor: "#ff7f00",
                color: "black",
                borderRadius: "10px",
                height: "70px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <QuizTwoToneIcon />
              <Typography sx={{ marginLeft: ".5em" }}>
                WHAT IS THE OFFICIAL LAUNCH?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  marginBottom: "1em",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent" }}>
            <AccordionSummary
              sx={{
                marginBottom: "1em",
                backgroundColor: "#ff7f00",
                color: "black",
                borderRadius: "10px",
                height: "70px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <QuizTwoToneIcon />
              <Typography sx={{ marginLeft: ".5em" }}>
                WHAT IS THE MINT RICE?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  marginBottom: "1em",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent" }}>
            <AccordionSummary
              sx={{
                marginBottom: "1em",
                backgroundColor: "#ff7f00",
                color: "black",
                borderRadius: "10px",
                height: "70px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <QuizTwoToneIcon />
              <Typography sx={{ marginLeft: ".5em" }}>
                HOW DO I GET WHITELISTED?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  marginBottom: "1em",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent" }}>
            <AccordionSummary
              sx={{
                marginBottom: "1em",
                backgroundColor: "#ff7f00",
                color: "black",
                borderRadius: "10px",
                height: "70px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <QuizTwoToneIcon />
              <Typography sx={{ marginLeft: ".5em" }}>
                WHAT IS THE METAVERSE?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  marginBottom: "1em",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </AnimationOnScroll>
        </div>
    </main>
  );
}

export default Faq;
