const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get("/download", async (req, res) => {
  const { url } = req.query;
  try {
    const options = {
      method: "GET",
      url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
      params: { url },
      headers: {
        "X-RapidAPI-Key": "3d8cb434b7msh374b8f2c6d5005bp1caef6jsne0c923879ee3",
        "X-RapidAPI-Host":
          "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    console.log(response.data); // Log the response data to check its structure
    const { media: videoUrl, thumbnail: downloadUrl } = response.data;
    if (videoUrl && downloadUrl) {
      res.send({ videoUrl, downloadUrl });
    } else {
      res.status(500).send("Server Error: Invalid response format");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error: Failed to fetch video");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
