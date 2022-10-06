function sortByName(a,b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  
  if (nameA<nameB) return -1;
  else if (nameA>nameB) return 1;
  else return 0;
}

function sortByDamage(a,b) {
  const damageA = a.damage;
  const damageB = b.damage;
  
  if (damageA>damageB) return -1;
  else if (damageA<damageB) return 1;
  else return 0;
}

function sortByRequirement(a,b) {
  const reqA = a.requirement;
  const reqb = b.requirement;
  
  if (reqA<reqb) return -1;
  else if (reqA>reqb) return 1;
  else return 0;
}

function sortByRange(a,b) {
  const rangeA = a.range;
  const rangeB = b.range;
  
  if (rangeA>rangeB) return -1;
  else if (rangeA<rangeB) return 1;
  else return 0;
}

function sortByPenetration(a,b) {
  const penetrationA = a.piercing;
  const penetrationB = b.piercing;
  
  if (penetrationA>penetrationB) return -1;
  else if (penetrationA<penetrationB) return 1;
  else return 0;
}

function sortByBonus(a,b) {
  const bonusA = a.mastery;
  const bonusB = b.mastery;
  
  if (bonusA>bonusB) return -1;
  else if (bonusA<bonusB) return 1;
  else return 0;
}

function sortByHP (a,b) {
  const HPA = a.life;
  const HPB = b.life;
  
  if (HPA>HPB) return -1;
  else if (HPA<HPB) return 1;
  else return 0;
}

function sortByBlunt (a,b) {
  const bluntA = a.blunt;
  const bluntB = b.blunt;
  
  if (bluntA>bluntB) return -1;
  else if (bluntA<bluntB) return 1;
  else return 0;
}

function sortByEdge (a,b) {
  const edgeA = a.edge;
  const edgeB = b.edge;
  
  if (edgeA>edgeB) return -1;
  else if (edgeA<edgeB) return 1;
  else return 0;
}

function sortByPoint (a,b) {
  const pointA = a.point;
  const bonusB = b.point;
  
  if (pointA>bonusB) return -1;
  else if (pointA<bonusB) return 1;
  else return 0;
}

function sortByFire (a,b) {
  const fireA = a.fire;
  const fireB = b.fire;
  
  if (fireA>fireB) return -1;
  else if (fireA<fireB) return 1;
  else return 0;
}

function sortByWind (a,b) {
  const windA = a.wind;
  const windB = b.wind;
  
  if (windA>windB) return -1;
  else if (windA<windB) return 1;
  else return 0;
}

function sortByMagic (a,b) {
  const magicA = a.magic;
  const magicB = b.magic;
  
  if (magicA>magicB) return -1;
  else if (magicA<magicB) return 1;
  else return 0;
}











