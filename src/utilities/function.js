export const endpoint = "http://localhost:3001/";
const axios = require("axios");

export const acceptFile = (event, setFileInput, showOutput) => {
  event.preventDefault();
  const file = event.target.files[0];
  if (file && file.type.substring(0, 4) == "text") {
    setFileInput(file);
    console.log(file);
    showOutput(false);
  } else {
    setFileInput(null);
    alert("Your input is not in .txt format");
  }
};

export const sendFile = async (file, setLoading) => {
  let formData = new FormData();
  formData.append("textFile", file);
  const config = { headers: { "Content-Type": "text/plain" } };
  try {
    setLoading(true);
    const response = await axios.post(endpoint, formData, config);
    if (response.ok) {
      setLoading(false);
    }
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

