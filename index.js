import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "frame-src 'self' https://intercom-sheets.com",
  );
  res.setHeader("X-Requested-With", "XMLHttpRequest");
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname)));

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const initialCanvas = {
  canvas: {
    content: {
      components: [
        {
          type: "text",
          id: "feedback",
          text: "Sheets Test",
          align: "center",
          style: "header",
        },
        {
          type: "button",
          label: "Submit",
          style: "primary",
          id: "submit_button",
          action: {
            type: "sheet",
            url: "https://025ff616a636.ngrok.app/sheet",
          },
        },
      ],
    },
  },
};

const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (response) => {
    console.log("helloooo")
  response.sendFile(path.join(__dirname, "index.html"));
});

app.post("/initialize", (request, response) => {
  response.send(initialCanvas);
});

app.get('/sheet', (req, res) => {
    console.log("get sheet")
    res.sendFile(path.join(__dirname, 'public', 'sheet.html'));
});

app.post('/sheet', (req, res) => {
    // to do - add in user decryption bits
    res.sendFile(path.join(__dirname, 'public', 'sheet.html'));
});

app.post('/submit-sheet', (req, res) => {
    console.log(req.body)
    console.log("submit should fire")
    res.send("Sheet submitted!");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
