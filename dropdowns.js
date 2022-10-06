// SWORDS
function swordSelections(selected = "all", checked = "all",sorting=false){
  var weapon;
  var prelist = [];
  var damage_type_filtering;
  
  if (swords) {
    swords.remove();
    swords = undefined;
  }
  
  swords = createSelect().position(cbAll.position().x,
                                   cbAll.position().y+22);
  swords.size(280);
  
  
  
  
  
  // all weapons and all weapon types
  if (selected == "all" && checked == "all") {
    for (weapon of weaponList) {
      prelist.push(weapon);
    }
  }
  // all weapons and str weapons
  if (selected == "all" && checked == "str") {
    for (weapon of weaponList) {
      if(weapon.reqType != "str") continue;
      else prelist.push(weapon);
    }
  }
  // all weapons and dex weapons
  if (selected == "all" && checked == "dex") {
    for (weapon of weaponList) {
      if(weapon.reqType != "dex") continue;
      else prelist.push(weapon);
    }
  }
  // 1h and all weapons
  else if (selected == "1h" && checked == "all") {
    for (weapon of wList1h) {
      prelist.push(weapon);
    }
  }
  // 1h and str weapons
  if (selected == "1h" && checked == "str") {
    for (weapon of wList1h) {
      if(weapon.reqType != "str") continue;
      else prelist.push(weapon);
    }
  }
  // 1h and dex weapons
  if (selected == "1h" && checked == "dex") {
    for (weapon of wList1h) {
      if(weapon.reqType != "dex") continue;
      else prelist.push(weapon);
    }
  }
  // 2h and all weapons
  else if(selected == "2h" && checked == "all") {
    for (weapon of wList2h) {
      prelist.push(weapon);
    }
  }
  // 2h and str weapons
  if (selected == "2h" && checked == "str") {
    for (weapon of wList2h) {
      if(weapon.reqType != "str") continue;
      else prelist.push(weapon);
    }
  }
  // 2h and dex weapons
  if (selected == "2h" && checked == "dex") {
    for (weapon of wList2h) {
      if(weapon.reqType != "dex") continue;
      else prelist.push(weapon);
    }
  }
  
  // bows
  if (selected == "bow") {
    for (weapon of wListRanged) {
      if(weapon.handed == "bow") prelist.push(weapon);
    }
  }
  
  // crossbows
  if (selected == "Xbow") {
    for (weapon of wListRanged) {
      if(weapon.handed == "xBow") prelist.push(weapon);
    }
  }
  
  
  // check the damage type filtering
  if(selected != "bow" && selected != "Xbow") {
    if (cbAll2.checked()) damage_type_filtering = "all";
    else if (cbEdge.checked()) damage_type_filtering = "edge";
    else damage_type_filtering = "blunt";

    // damage type filtering
    if (damage_type_filtering == "all") {}
    else prelist = prelist.filter(weapon => weapon.damageType == damage_type_filtering);
  }
  
  if(sorting) {
    prelist.sort(sorting)
  }
  sorting = false;
  
  // dump the prelist to the swords options
  for (weapon of prelist) {
      swords.option(weapon.name);
  }
  prelist = [];
  
  
  swords.changed(swordsChanged);
  //swords.mousePressed(swordsClicked)
  
  weapon = getWeaponInfo(swords.selected());
  pSwords = createP(weapon.handed+" "+ weapon.requirement+
                    weapon.reqType+" "+ weapon.damage+
                    " "+weapon.damageType+" "+
                    weapon.piercing+" piercing "+ 
                   weapon.mastery+" mastery");
  
  pSwords.position(swords.position().x,swords.position().y+5);
  
  howToGet_dropdown(weapon);
  
  
}

function swordsChanged() {
  pSwords.remove();
  var weapon = getWeaponInfo(swords.selected());
  pSwords = createP(weapon.handed+" "+ weapon.requirement+
                    weapon.reqType+" "+ weapon.damage+
                    " "+weapon.damageType+" "+
                    weapon.piercing+" piercing "+ 
                   weapon.mastery+" mastery");
  
  pSwords.position(swords.position().x,swords.position().y+5);
  
  howToGet_dropdown(weapon);
  
  if(swordsSearchInp) { // to remove the search bar after any of
    // the weapons clicked
    swordsSearchInp.value("");
    swordsSearchInp.remove();
    swordsSearchInp = undefined;
  }
  monstersChanged();
}

function swordsClicked() {
  if(!swordsSearchInp){
    swordsSearchInp = createInput().position(10,10);
    swordsSearchInp.size(250).attribute(
      "placeholder","search your weapon here");
  }
  
  var inp = swordsSearchInp.value();
  
  
  
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function weaponSorting() {
  if (!swordsSorter) {
    swordsSorter = createSelect().position(swords.size().width+10,
                                        swords.position().y);
    swordsSorter.size(65);
  }
  
  
  swordsSorter.option("sort by");
  swordsSorter.option("name");
  swordsSorter.option("damage");
  swordsSorter.option("requirement");
  swordsSorter.option("range");
  swordsSorter.option("penetration");
  swordsSorter.option("bonus");
  
  swordsSorter.changed(weaponSortingChanged);
}

function weaponSortingChanged() {
  if (swords) {
    swords = undefined;
    pSwords.remove();
    pSwords = undefined;
  }
  
  var checked = findChecked();
  
  
  if (swordsSorter.selected() == "sort by" || swordsSorter.selected() =="name") {
    swordSelections(radioWeapons.value(),checked,sortByName);
  }
  else if (swordsSorter.selected() == "damage") {
    swordSelections(radioWeapons.value(),checked,sortByDamage);
  }
  else if (swordsSorter.selected() == "requirement") {
    swordSelections(radioWeapons.value(),checked,sortByRequirement);
  }
  else if (swordsSorter.selected() == "range") {
    swordSelections(radioWeapons.value(),checked,sortByRange);
  }
  else if (swordsSorter.selected() == "penetration") {
    swordSelections(radioWeapons.value(),checked,sortByPenetration);
  }
  else if (swordsSorter.selected() == "bonus") {
    swordSelections(radioWeapons.value(),checked,sortByBonus);
  }
  
  swordsChanged()
  
}


// MONSTERS
function monsterSelections(selected="all", sorting = false) {
  
  var monster;
  var preList = [];
  
  if (monsters) {
    monsters.remove();
    monsters = undefined;
  }
  
  monsters = createSelect().position(swords.size().width+100,
                                     swords.position().y);
  monsters.size(280);
  
  
  if (selected == "all") preList = monsterList;
  else if (selected == "bosses") preList = monsterBosses;
  else if (selected == "bounty") preList = monsterBounty;
  else if (selected == "weak") preList = monsterWeak;
  else if (selected == "medium") preList = monsterMedium;
  else preList = monsterStrong;
  
  
  if(sorting) {
    preList.sort(sorting)
  }
  sorting = false;

  
  // dump the prelist into the options
  for (monster of preList) {
    monsters.option(monster.name);
  }
  monsters.changed(monstersChanged);
  
  
  monster = getMonsterInfo(monsters.selected());
  var weapon = getWeaponInfo(swords.selected());
  var defType = monster.blunt;
  if(weapon.damageType == "edge") defType = monster.edge;
  else if(weapon.damageType == "point") defType = monster.point;
    
  pMonsters = createP(monster.life+" HP with "+
                     defType+ " "+weapon.damageType+" def.");
  
  pMonsters.position(monsters.position().x,
                     monsters.position().y+5);
}

function monstersChanged() {
  pMonsters.remove();
  monster = getMonsterInfo(monsters.selected());
  var weapon = getWeaponInfo(swords.selected());
  var defType = monster.blunt;
  if(weapon.damageType == "edge") defType = monster.edge;
  else if(weapon.damageType == "point") defType = monster.point;
    
  pMonsters = createP(monster.life+" HP with "+
                     defType+ " "+weapon.damageType+" def.");
  
  pMonsters.position(monsters.position().x,
                     monsters.position().y+5);
}


function monsterSorting() {
  if (!monstersSorter) {
    monstersSorter = createSelect().position(monsters.position().x+
                                             monsters.size().width,
                                        monsters.position().y);
    monstersSorter.size(65);
  }
  
  
  monstersSorter.option("sort by");
  monstersSorter.option("name");
  monstersSorter.option("HP");
  monstersSorter.option("blunt");
  monstersSorter.option("edge");
  monstersSorter.option("point");
  monstersSorter.option("fire");
  monstersSorter.option("wind");
  monstersSorter.option("magic");
  
  monstersSorter.changed(monsterSortingChanged);
}

function monsterSortingChanged() {
  if (monsters) {
    monsters = undefined;
    pMonsters.remove();
    pMonsters = undefined;
  }
  
  //var checked = findChecked();
  
  
  if (monstersSorter.selected() == "sort by" || monstersSorter.selected() =="name") {
    monsterSelections(radioMonsters.value(),sortByName);
  }
  else if (monstersSorter.selected() == "HP") {
    monsterSelections(radioMonsters.value(),sortByHP);
  }
  else if (monstersSorter.selected() == "blunt") {
    monsterSelections(radioMonsters.value(),sortByBlunt);
  }
  else if (monstersSorter.selected() == "edge") {
    monsterSelections(radioMonsters.value(),sortByEdge);
  }
  else if (monstersSorter.selected() == "point") {
    monsterSelections(radioMonsters.value(),sortByPoint);
  }
  else if (monstersSorter.selected() == "fire") {
    monsterSelections(radioMonsters.value(),sortByFire);
  }
  else if (monstersSorter.selected() == "wind") {
    monsterSelections(radioMonsters.value(),sortByWind);
  }
  else if (monstersSorter.selected() == "magic") {
    monsterSelections(radioMonsters.value(),sortByMagic);
  }
  
}
