export const displayFilePreview = (fileInput) => {
  let reader = new FileReader();
  let textFile = /text.*/;
  let preview = document.getElementById("preview");

  if (fileInput.type.match(textFile)) {
    reader.onload = function (event) {
      preview.innerHTML = event.target.result;
    };
  } else {
    preview.innerHTML =
      "<span class='error'>It doesn't seem to be a text file!</span>";
  }

  return reader.readAsText(fileInput);
};
