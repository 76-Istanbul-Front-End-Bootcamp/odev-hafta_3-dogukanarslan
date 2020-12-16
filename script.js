class Animal {

  constructor(name) {
    this.name = name;
  }

  action(event) {
    event.stopPropagation();
    document.getElementById(this.actionSoundName).play();
  }

  addImg() {
    document.getElementById("boxImg").src = this.url;
  }

  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    var boxImg = document.getElementById("boxImg");
    petTR.addEventListener("click", this.addImg)

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petTR.onclick = this.addImg.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
    this.url = "https://i.pinimg.com/600x315/ce/37/8a/ce378abc8dba1d55ccd37902337900ed.jpg";
  }
}

class Monkey extends Animal{
  constructor(name) {
    super(name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
    this.url = "https://i.pinimg.com/originals/bd/9d/59/bd9d598b56988f8c8cd48be6e116a60b.png";
  }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
