let swords;
let swordsSorter;
let monsters;
let monstersSorter;

let weaponList;
let wList1h;
let wList2h;
let wListRanged;
let monsterList;
let monsterBosses,monsterBounty,monsterWeak,monsterMedium,monsterStrong;

let radioWeapons;
let radioMonsters;
let cbAll,cbStr,cbDex;
let cbAll2,cbEdge,cbBlunt;

let strInp;
let dexInp;
let mastery1hInp;
let mastery2hInp;
let masteryBowInp;
let masteryXbowInp;
let swordsSearchInp;

let calcButton;


let stri = 10;
let dex = 10;
let mastery1h = 10;
let mastery2h = 10;
let masteryBow = 10;
let masteryXbow = 10;


let pSwords;
let pMonsters;
let pNormal;
let pCrit;
let pAvarage;
let pTotal;
let pSuggestion;
let pWayToGet;
let pHowToGet;

let boxNormal;
let boxCrit;
let boxAvarage;
let boxTotal;


function setup() {
  createCanvas(800 ,400)
  //noCanvas();
  
  textAlign(CENTER);
  background(45, 197, 244);
  //background(100)
  
  
  weaponCheckBoxes();
  filteringCheckBoxes();
  monsterCheckBoxes();
  
  swordSelections();
  weaponSorting();
  
  monsterSelections();
  monsterSorting();
  
  
  strInput();
  dexInput();
  mastery1hInput();
  mastery2hInput();
  masteryBowInput();
  masteryXbowInput();
  
  calcButton = createButton("Calculate");
  calcButton.position(mastery2hInp.size().width-25,
                      mastery2hInp.position().y+50);
  calcButton.mousePressed(calculate);
  
  
  pNormal = createP("normal hit");
  pNormal.position(10,calcButton.position().y+20);
  pCrit = createP("critical hit");
  pCrit.position(10,pNormal.position().y+1);
  pAvarage = createP("avarage damage per hit");
  pAvarage.position(10,pCrit.position().y+1);
  pTotal = createP("total hits required to kill");
  pTotal.position(10,pAvarage.position().y+1);
  
}

function getWeaponInfo(name) {
  for (var weapon of weaponList) {
    if (weapon.name == name) {
      return weapon
    }
  }
}

function getMonsterInfo(name) {
  for (var monster of monsterList) {
    if (monster.name == name) {
      return monster
    }
  }
}

function eliminateWeapons(stri,dex){
  var list = [];
  for (var weapon of weaponList) {
    if(weapon.reqType == "str"){
      if (weapon.requirement<=stri) {
        list.push(weapon)
      }
    }
    if(weapon.reqType == "dex"){
      if (weapon.requirement<=dex) {
        list.push(weapon)
      }
    }
  }
  return list;
}

function findBestSword(weapons,monster) {
  var maxi=0;
  var candidates=[];
  var adphs = [];
  for (var weapon of weapons){
    var normal = calcNormal(weapon,monster);
    var crit = calcCrit(weapon,monster);
    var adph = avarageDamagePerHit(normal,crit,weapon);
    
    if (adph>=maxi) {
      candidates.push(weapon);
      maxi = adph;
      adphs.push(adph);
    }
  }
  candidates.reverse();
  adphs.reverse();
  
  // find equal best adphs 5,5,5
  var best_equals=[];
  best_equals.push(candidates[0]);
  for(var i=1; i<adphs.length; i++) {
    if(adphs[i]<adphs[i-1]) break;
    else best_equals.push(candidates[i]);
    
  }
  
  // here
  // console.log(best_equals)
  // sort by range
  best_equals.sort((a,b)=>{return b.range-a.range});
  // find best range 80,80,80
  var best_ranges =[];
  best_ranges.push(best_equals[0]);
  for (i=1; i<best_equals.length; i++) {
    if(best_equals[i].range<best_equals[i-1].range) break;
    else best_ranges.push(best_equals[i]);
  }
  
  // sort by requirement
  best_ranges.sort((a,b)=>{return a.requirement-b.requirement});
  
  return best_ranges[0];
}


function calculate() {
  // set input boxes values (avoids 1-asdas)
  setInpValues();
  
  // get the sword info
  var weapon = getWeaponInfo(swords.selected())
  
  // get the monster info
  var monster = getMonsterInfo(monsters.selected())
  

  // do calculations
  var normal_hit = calcNormal(weapon,monster);
  var crit_hit = calcCrit(weapon,monster);
  var avarage = avarageDamagePerHit(normal_hit,crit_hit,weapon);
  var requiredHits = avarageHitRequired(monster,avarage);
  
  // print calculations
  normalHitBox(normal_hit);
  critHitBox(crit_hit);
  avarageHitBox(avarage);
  totalHitBox(requiredHits);
  
  // select the best weapon for the selected mob
  // find available weapons, <=str, <=dex
  var available_weapons = eliminateWeapons(stri,dex);
  
  // decide the best weapon by ADPH,range and min. requirements
  var bestest = findBestSword(available_weapons,monster);
  
  // print out the best weapon
  suggest(bestest);
  
  // print out obtaining method of the best weapon
  howToGet(bestest);
  
  
  

  
  // TODO: add a searchbox, if possible with a dropdown feature
  //       one should be able to search for any weapon and any
  //       monster from there, after that the searched monster
  //       or weapon will be selected in the dropdowns
  // TODO: add NPC info to the monster dropdown, maybe with
  //       a seperated chechbox for itsef, monster and npc type
  // TODO: add how to obtain the suggested weapon info
}

function keyPressed() {
  if (keyCode == ENTER) calculate();
}



function draw() {
  // console.log()
}
