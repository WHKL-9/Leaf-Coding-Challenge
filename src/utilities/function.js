const endpoint = "http://localhost:3001/";

export const acceptFile = (event, setFileInput, showOutput) => {
  event.preventDefault();
  const file = event.target.files[0];
  if (file && file.type.substring(0, 4) == "text") {
    setFileInput(file);
    console.log(file)
    showOutput(false);
  } else {
    setFileInput(null);
    alert("Your input is not in .txt format");
  }
};

export const sendFile = async (file, setLoading) => {
  const fileInput = JSON.stringify(file)
  // const fileInput_2 = JSON.parse(file)
  // console.log(fileInput)
  // console.log(fileInput_2)
  try {
    setLoading(true)
    const response = await fetch (endpoint, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: JSON.stringify(file)
    })
    if(response.ok){
      console.log(file)
      setLoading(false)
    }
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

// export const showProcessedOutput 
