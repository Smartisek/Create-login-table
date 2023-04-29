let inputName;
let inputPass;
let addButton;
let table;
let background;
let saveButton;

function preload(){
  background = loadImage("background.png");
}


function setup() {
  createCanvas(1500, 700);
  image(background,-50,-100);
  // background.resize(1500,700);

  table = new p5.Table();
  table.addColumn("username");
  table.addColumn("password");

  let rectangle = color(216, 191, 216);
  rectangle.setAlpha(80);
  fill(rectangle);
  noStroke();
  rect(600,250, 250,220,20);

  fill("white");
  stroke(255,218,185);
  textSize(18);
  text("Login", 695, 280);
  inputName = createInput("");
  inputName.position(639,300);

  text("Password", 680, 350);
  inputPass = createInput("");
  inputPass.position(639,370);

  addButton = createButton("Add");
  addButton.addClass("button");                         
  addButton.position(645,420);
  addButton.mouseClicked(add);

  saveButton = createButton("Save");
  saveButton.position(745,420);
  saveButton.mouseClicked(saveData);

 
}

function add(){
  username = inputName.value();
  password = inputPass.value();

  let newRow = table.addRow();
  newRow.setString("username", username);
  newRow.setString("password", password);
}

function saveData(st){
  st = saveTable(table, "logins.csv");
}

