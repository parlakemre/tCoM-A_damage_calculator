// set input values to avoid 1-sdfsd
function setInpValues() {
  if(stri<=10) {
    strInp.value("");
    strInp.attribute("placeholder",
                                "str here (default to 10)");
  }
  
  if(dex<=10) {
    dexInp.value("");
    dexInp.attribute("placeholder",
                                "dex here (default to 10)");
  }
  if(mastery1h<=10) {
    mastery1hInp.value("");
    mastery1hInp.attribute("placeholder",
                                "1h % here (default to 10)");
  }
  
  if(mastery2h<=10) {
    mastery2hInp.value("");
    mastery2hInp.attribute("placeholder",
                                "2h % here (default to 10)");
  }
  
  if(masteryBow<=10) {
    masteryBowInp.value("");
    masteryBowInp.attribute("placeholder",
                           "bow % here (default to 10)")
  }
  
  if(masteryXbow<=10) {
    masteryXbowInp.value("");
    masteryXbowInp.attribute("placeholder",
                           "crossbow % here (default to 10)")
  }

}


// STR INPUT
function strInput(text="your str value here") {
  strInp = createInput();
  strInp.position(10,pSwords.position().y+60);
  strInp.size(250);
  strInp.attribute("placeholder",text);
  strInp.input(strEvent);
}

function checkStr(inp) {
  out = inp
  if(isNaN(inp) || inp<0) {
    out = 10;
    strInp.value("");
    strInp.attribute("placeholder","str>=0, integer");
  }
  else if(inp<10) {out=10;}
  return out;
}

function strEvent() {
  stri = strInp.value();
  stri = int(stri);
  stri = checkStr(stri);
}

// DEX INPUT
function dexInput(text="dex value here (optional)") {
  dexInp = createInput();
  dexInp.position(strInp.position().x+strInp.size().width+5,
                  strInp.position().y);
  dexInp.size(250);
  dexInp.attribute("placeholder",text);
  dexInp.input(dexEvent);
}

function checkDex(inp) {
  out = inp
  if(isNaN(inp) || inp<0) {
    out = 10;
    dexInp.value("");
    dexInp.attribute("placeholder","dex>=0, integer");
  }
  else if (inp<10) out=10;
  return out;
}

function dexEvent() {
  dex = dexInp.value();
  dex = int(dex);
  dex = checkDex(dex);
}


// MASTERY CHECK
function checkMastery(inp,masteryBox) {
  out = inp
  if(isNaN(inp) || inp<0) {
    out = 10;
    masteryBox.value("");
    masteryBox.attribute("placeholder","mastery>=0, integer");
  }
  else if (inp<10) out=10;
  return out;
}

// MASTERY INPUT 1H
function mastery1hInput() {
  mastery1hInp = createInput().size(250);
  mastery1hInp.position(10,strInp.position().y+20);
  mastery1hInp.attribute("placeholder","1H mastery without weapon bonuses");
  mastery1hInp.input(mastery1hEvent);
}

function mastery1hEvent() {
  mastery1h = mastery1hInp.value();
  mastery1h = int(mastery1h);
  mastery1h = checkMastery(mastery1h,mastery1hInp);
}


// MASTERY INPUT 2H
function mastery2hInput() {
  mastery2hInp = createInput().size(250);
  mastery2hInp.position(10,mastery1hInp.position().y+20);
  mastery2hInp.attribute("placeholder","2H mastery without weapon bonuses");
  mastery2hInp.input(mastery2hEvent);
}

function mastery2hEvent() {
  mastery2h = mastery2hInp.value();
  mastery2h = int(mastery2h);
  mastery2h = checkMastery(mastery2h,mastery2hInp);
}

// MASTERY INPUT BOW
function masteryBowInput() {
  masteryBowInp = createInput().size(250);
  masteryBowInp.position(mastery1hInp.position().x+mastery1hInp.size().width+5,
                         mastery1hInp.position().y);
  masteryBowInp.attribute("placeholder","bow mastery without weapon bonuses");
  masteryBowInp.input(masteryBowEvent);
}

function masteryBowEvent() {
  masteryBow = masteryBowInp.value();
  masteryBow = int(masteryBow);
  masteryBow = checkMastery(masteryBow,masteryBowInp);
}

// MASTERY INPUT CROSSBOW
function masteryXbowInput() {
  masteryXbowInp = createInput().size(250);
  masteryXbowInp.position(masteryBowInp.position().x,
                         masteryBowInp.position().y+20);
  masteryXbowInp.attribute("placeholder","crossbow mastery without weapon bonuses");
  masteryXbowInp.input(masteryXbowEvent);
}

function masteryXbowEvent() {
  masteryXbow = masteryXbowInp.value();
  masteryXbow = int(masteryXbow);
  masteryXbow = checkMastery(masteryXbow,masteryXbowInp);
}
