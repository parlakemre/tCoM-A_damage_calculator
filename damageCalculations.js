function calcNormal(weapon,monster) { // only normal hit
  if (weapon.damageType == "edge") {
    damage = (stri + weapon.damage - (max(0,monster.edge - 
                                              weapon.piercing))-1)/10;
    
  }
  else if(weapon.damageType == "blunt") {
    damage = (stri + weapon.damage - (max(0,monster.blunt - 
                                              weapon.piercing))-1)/10;
  }
  
  else if(weapon.damageType=="magic") {
    damage = (weapon.damage - (max(0,monster.magic - 
                                              weapon.piercing))-1)/10;
  }
  
  else if(weapon.damageType == "point") return 0;
  
  return floor(max(5,damage));
}

function calcCrit(weapon,monster) { // only crit hit
  if (weapon.damageType == "edge") {
    damage = (stri + weapon.damage - (max(0,monster.edge - 
                                              weapon.piercing)));
    
  }
  else if(weapon.damageType == "blunt") {
    damage = (stri + weapon.damage - (max(0,monster.blunt - 
                                              weapon.piercing)));
  }
  
  else if(weapon.damageType == "magic") {
    damage = (weapon.damage - (max(0,monster.magic - 
                                              weapon.piercing)));
  
  }
  
  else if (weapon.damageType == "point") {
    damage = (dex + weapon.damage - (max(0,monster.point - 
                                              weapon.piercing)));
  }
  
  return floor(max(5,damage));
}


function avarageDamagePerHit(normal,crit,weapon) {
  if (weapon.handed=="1h") mastery = mastery1h+weapon.mastery;
  else if(weapon.handed=="2h") mastery = mastery2h+weapon.mastery;
  else if(weapon.handed=="bow") mastery = masteryBow + weapon.mastery;
  else if(weapon.handed=="xBow") mastery = masteryXbow + weapon.mastery;
  
  
  mastery = mastery/100
  if(mastery >=1) damage = crit;
  else damage = (normal*(1-mastery)) + crit * mastery;
  
  damage = max(normal,damage);
  
  return floor(damage)
}

function avarageHitRequired(monster,ADPH) {
  return ceil(monster.life / ADPH)
}
