var box_offset = 220;
function normalHitBox(val) {
  pos = pNormal.position();
  boxNormal = createInput().size(30);
  boxNormal.position(pos.x+box_offset,pos.y);
  boxNormal.value(val);
  
  if (val==69) createP("Nice!").position(
    boxNormal.position().x+40,pos.y-16);
}

function critHitBox(val){
  pos = pCrit.position();
  boxCrit = createInput().size(30);
  boxCrit.position(pos.x+box_offset,pos.y);
  boxCrit.value(val);
  
  if (val==69) createP("Nice!").position(
    boxCrit.position().x+40,pos.y-16);
  
}

function avarageHitBox(val){
  pos = pAvarage.position();
  boxAvarage = createInput().size(30);
  boxAvarage.position(pos.x+box_offset,pos.y);
  boxAvarage.value(val);
  
  if (val==69) createP("Nice!").position(
    boxAvarage.position().x+40,pos.y-16);
    
    
}

function totalHitBox(val){
  pos = pTotal.position();
  boxTotal = createInput().size(30);
  boxTotal.position(pos.x+box_offset,pos.y);
  boxTotal.value(val);
  
  if (val==69) createP("Nice!").position(
    boxTotal.position().x+40,pos.y-16);
}


// suggestion message part
function suggest(bestest) {
  if(pSuggestion) {
    pSuggestion.remove();
    pSuggestion = undefined;
  }
  if(!pSuggestion) {
      pSuggestion = createP(
        "best available weapon to kill the selected mob: "+
        bestest.name+ " ("+ bestest.handed+" "+
        bestest.requirement+bestest.reqType+" "+
        bestest.damage +
        bestest.damageType+" "+bestest.piercing+" piercing "+
        bestest.mastery+" mastery)");
      pSuggestion.position(pTotal.position().x,
                            pTotal.position().y+20);
  }
  
  
}
