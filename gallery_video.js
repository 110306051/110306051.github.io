// var video = document.querySelector("video");
//   console.log(video);

var section = document.querySelector("section.postSection");
var add = document.querySelector("div.add label");

var inputElement = document.getElementById("file");
inputElement.addEventListener("change", selectTextFile, false);

function selectTextFile(files) {
  let file = files[0];
  let reader = new FileReader();
  /* now you can work with the file list */
  var scriptDiv = document.createElement("div");
  var scriptLogo = document.createElement("img");
  var scriptH1 = document.createElement("h1");
  var scriptImgDiv = document.createElement("div");
  var scriptImg = document.createElement("img");

  reader.onload = function () {
    scriptImg.src = this.result;
  };

  reader.readAsDataURL(file);

  scriptDiv.classList.add("post");
  scriptLogo.classList.add("logo");
  scriptImgDiv.classList.add("postImg");

  scriptImgDiv.appendChild(scriptImg);
  scriptDiv.appendChild(scriptLogo);
  scriptDiv.appendChild(scriptImgDiv);

  // create an object
  // let myFile = {
  //     fileSrc:
  // };

  // let myList = localStorage.getItem("list");
  // if(myList == null){
  //     localStorage.setItem("list", JSON.stringify([]));
  // }else{
  //     let myListArray = JSON.parse(myList);
  //     myListArray.push(myFile);
  //     console.log(myListArray[0]);
  //     localStorage.setItem("list",JSON.stringify(myListArray));
  // }

  section.appendChild(scriptDiv);
}

let myList = localStorage.getItem("list");

if (myList !== null) {
  let myListArray = JSON.parse(myList);
  myListArray.forEach((element) => {
    var scriptDiv = document.createElement("div");
    var scriptLogo = document.createElement("img");
    var scriptH1 = document.createElement("h1");
    var scriptImgDiv = document.createElement("div");
    var scriptImg = document.createElement("img");

    scriptImg.src = element.fileSrc;

    scriptDiv.classList.add("post");
    scriptLogo.classList.add("logo");
    scriptImgDiv.classList.add("postImg");

    scriptImgDiv.appendChild(scriptImg);
    scriptDiv.appendChild(scriptLogo);
    scriptDiv.appendChild(scriptImgDiv);
  });
}
