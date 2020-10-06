const path = require("path");
const fs = require("fs");

const directoryPath = __dirname;

const files = fs.readdirSync(directoryPath, (files) => files);

const move = (element) => {
  let oldPath = directoryPath + `/${element}`;
  let NewPath = directoryPath + `/`;
  console.log(oldPath, NewPath);
  if (
    element.split(".").pop() === "pdf" ||
    element.split(".").pop() === "docx"
  ) {
    fs.renameSync(oldPath, NewPath + `/PDFS/${element}`);
  }

  if (
    element.split(".").pop() === "jpeg" ||
    element.split(".").pop() === "png" ||
    element.split(".").pop() === "jpg"
  ) {
    fs.renameSync(oldPath, NewPath + `/Imgs/${element}`);
  }

  if (
    element.split(".").pop() === "mp3" ||
    element.split(".").pop() === "mp4"
  ) {
    fs.renameSync(oldPath, NewPath + `/Music/${element}`);
  }
};

const validDirectorys = () => {
  if (!fs.existsSync(directoryPath + "/PDFS")) {
    fs.mkdirSync(directoryPath + "/PDFS");
  }

  if (!fs.existsSync(directoryPath + "/Imgs")) {
    fs.mkdirSync(directoryPath + "/Imgs");
  }

  if (!fs.existsSync(directoryPath + "/Music")) {
    fs.mkdirSync(directoryPath + "/Music");
  }
};

if (files.length == 0) {
  return new Error("Empty directory");
}

validDirectorys();

files.forEach((element) => {
  move(element);
  console.log("Files moved successfully!");
});
