function weaponCheckBoxes() {
  radioWeapons = createRadio("radioWeapons").position(10,8);
  radioWeapons.option("all","all");
  radioWeapons.option("1h","1h");
  radioWeapons.option("2h","2h");
  radioWeapons.option("bow","bow");
  radioWeapons.option("Xbow","Xbow");
  radioWeapons.selected("all");
  
  radioWeapons.changed(radioWeaponsChanged);
  
}

function radioWeaponsChanged() {
  if (swords) {
    swords = undefined;
    pSwords.remove();
  }
  
  var checked = findChecked();
  swordSelections(radioWeapons.value(),checked);
  weaponSortingChanged()
}

function filteringCheckBoxes() {
  cbAll = createCheckbox("all",true).position(radioWeapons.position().x,
                                             radioWeapons.position().y+18);
  
  cbStr = createCheckbox("str",false).position(cbAll.position().x+38,
                                             cbAll.position().y);
  
  cbDex = createCheckbox("dex",false).position(cbStr.position().x+38,
                                             cbStr.position().y);
  
  createP(" || ").position(cbDex.position().x+50,
                          cbDex.position().y-15);
  
  cbAll2 = createCheckbox("all",true).position(cbDex.position().x+60,
                                              cbDex.position().y);
  
  cbEdge = createCheckbox("edge",false).position(cbAll2.position().x+38,
                                              cbAll2.position().y);
  
  cbBlunt = createCheckbox("blunt",false).position(cbEdge.position().x+50,
                                              cbEdge.position().y);
  
  
  cbStr.changed(cbStrChanged);
  cbDex.changed(cbDexChanged);
  cbAll.changed(cbAllChanged);
  
  cbEdge.changed(cbEdgeChanged);
  cbBlunt.changed(cbBluntChanged);
  cbAll2.changed(cbAll2Changed);
}

function cbStrChanged() {
  if (cbStr.checked()) {
    cbAll.checked(false);
    cbDex.checked(false);
  }
  else cbAll.checked(true);
  
  radioWeaponsChanged()
}

function cbDexChanged() {
  if (cbDex.checked()) {
    cbAll.checked(false);
    cbStr.checked(false);
  }
  else cbAll.checked(true);
  
  radioWeaponsChanged()
}

function cbAllChanged() {
  if (cbAll.checked()) {
    cbStr.checked(false);
    cbDex.checked(false);
  }
  else cbAll.checked(true);
  
  radioWeaponsChanged()
}

function cbEdgeChanged() {
  if (cbEdge.checked()) {
    cbAll2.checked(false);
    cbBlunt.checked(false);
  }
  else cbAll2.checked(true);
  
  radioWeaponsChanged()
}

function cbBluntChanged() {
  if (cbBlunt.checked()) {
    cbAll2.checked(false);
    cbEdge.checked(false);
  }
  else cbAll2.checked(true);
  
  radioWeaponsChanged()
}

function cbAll2Changed() {
  if (cbAll2.checked()) {
    cbEdge.checked(false);
    cbBlunt.checked(false);
  }
  else cbAll2.checked(true);
  
  radioWeaponsChanged()
}

function findChecked() {
  if (cbAll.checked()) return "all";
  else if (cbStr.checked()) return "str";
  else return "dex";

}

function monsterCheckBoxes() {
  radioMonsters = createRadio("radioMonsters").position(1.7*radioWeapons.size().width,
                                                       radioWeapons.position().y);
  radioMonsters.option("all","all");
  radioMonsters.option("bosses","bosses");
  radioMonsters.option("bounty","bounty");
  radioMonsters.option("weak","weak");
  radioMonsters.option("medium","medium");
  radioMonsters.option("strong","strong");
  radioMonsters.selected("all");
  
  radioMonsters.changed(radioMonstersChanged);
  
}

function radioMonstersChanged() {
  if (monsters) {
    monsters = undefined;
    pMonsters.remove();
  }
  
  //var checked = findChecked();
  monsterSelections(radioMonsters.value());
  monsterSortingChanged()
}


