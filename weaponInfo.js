class Weapon {
  constructor (name,handed,damageType,damage,range,
              reqType,requirement,piercing=0,mastery=0) {
    this.name = name;
    this.handed = handed;
    this.damageType = damageType;
    this.damage = damage;
    this.range = range;
    this.reqType = reqType;
    this.requirement = requirement;
    this.piercing = piercing;
    this.mastery = mastery;
  }
}

// 1H WEAPONS
let sailor_of_storms = new Weapon("sailor of storms",
                                 "1h","edge",280,95,"dex",175,8);

let shining_sword = new Weapon("shining sword",
                              "1h","edge",260,90,"dex",190);

let the_peacemaker = new Weapon("the peacemaker",
                               "1h","magic",250,90,"mana",10,0,35);

let cortezs_sword = new Weapon("cortez's sword",
                              "1h","edge",230,110,"dex",170,7,7);

let corsair_pride = new Weapon("corsair pride",
                              "1h","edge",230,100,"dex",180);

let fine_bastard_sword = new Weapon("fine bastard sword",
                                   "1h","edge",220,100,"dex",160);

let pure_ore_magic_blade = new Weapon("pure ore magic blade",
                                     "1h","edge",220,90,
                                      "str",200,7,7);

let captains_sabre = new Weapon("captain's sabre",
                               "1h","edge",220,90,"dex",170);

let wrath_of_innos = new Weapon("wrath of innos",
                               "1h","edge",205,100,"str",190,0,5);

let stuffer = new Weapon("stuffer","1h","edge",205,90,"dex",160);

let fury = new Weapon("fury","1h","edge",200,90,"str",190);

let silver_slayer = new Weapon("silver slayer","1h",
                              "blunt",200,65,"dex",165,40);

let nobles_rapier = new Weapon("noble's rapier","1h",
                              "edge",195,90,"dex",150);

let blade_with_a_blue_stone = new Weapon(
  "blade with a blue stone","1h","edge",190,90,"str",180);

let magic_combat_blade = new Weapon("magic combat blade","1h",
                                   "edge",180,100,"str",165);

let the_blade_of_justice = new Weapon("the blade of justice","1h",
                                     "edge",180,95,"str",170);

let sword_of_archolos_defender = new Weapon(
  "sword of archolos defender","1h","edge",180,90,"str",170,0,7);

let balanced_blade = new Weapon("balanced blade","1h",
                               "edge",180,90,"dex",140);

let ramseys_rod_rapier = new Weapon("ramsey's rod rapier","1h",
                                   "edge",180,80,"dex",140,7,7);

let master_sword = new Weapon("master sword","1h","edge",175,100,
                             "dex",130,10,10);

let pride_of_arholos = new Weapon("pride of archolos","1h",
                                 "edge",170,85,"str",160);

let abu_dubas_scimitar = new Weapon("abu-duba's scimitar","1h",
                                   "edge",165,85,"dex",120,10);

let corsair_of_the_oceans = new Weapon("corsair of the oceans",
                                       "1h","edge",165,85,"dex",
                                      130,2);

let magic_blade_for_dragons = new Weapon("magic blade for dragons",
                                        "1h","edge",160,100,
                                        "str",140,0,10);

let rune_sword = new Weapon("rune sword","1h","edge",160,90,
                            "str",150);

let cleaver = new Weapon("cleaver","1h","blunt",160,60,"str",140,
                        20);

let the_fear_of_sailors = new Weapon("the fear of sailors","1h",
                                    "edge",155,95,"str",145,0,7);

let firm_sword = new Weapon("firm sword","1h","edge",155,90,
                           "dex",120);

let ramseys_ancestral_sword = new Weapon("ramseys ancestral sword",
                                        "1h","edge",155,80,
                                         "str",1400,0,7);

let el_bastardo = new Weapon("el bastardo","1h","edge",150,100,
                            "str",140);

let dueling_saber = new Weapon("dueling saber","1h","edge",150,
                              90,"dex",120);

let stroker = new Weapon("stroker","1h","edge",145,100,"dex",125);

let long_saber = new Weapon("long saber","1h","edge",145,90,
                            "dex",105,7,7);

let balanced_spiked_club = new Weapon("balanced spiked club","1h",
                                     "blunt",145,65,"dex",125,25);

let inquisitor = new Weapon("inquisitor","1h","blunt",145,60,
                           "str",135,20);

let manfreds_shiv = new Weapon("manfred's shiv","1h","edge",145,50,
                              "dex",105,10,10);

let alenas_sword = new Weapon("alena's sword","1h","edge",140,
                             110,"dex",95);

let slasher = new Weapon("slasher","1h","edge",135,100,"dex",110);

let poor_magic_blade = new Weapon("poor magic blade","1h","edge",
                                 135,100,"str",125);

let executioners_axe = new Weapon("executioner's axe","1h","edge",
                                 135,80,"str",130,15);

let usurers_blade = new Weapon("usurer's blade","1h","edge",130,
                              100,"str",130);

let firm_sword_str = new Weapon("firm sword (str)",
                                "1h","edge",130,90,"str",120);

let kushis_sword = new Weapon("kushi's sword","1h","edge",
                             130,85,"dex",95,15);

let ravens_beak = new Weapon("raven's beak","1h","blunt",130,
                            60,"str",120,5);

let ivys_dagger = new Weapon("ivy's dagger","1h","edge",130,
                            50,"dex",90,15,15);

let light_master_sword = new Weapon("light master sword","1h",
                                   "edge",125,100,"dex",100);

let long_magic_sword = new Weapon("long magic sword","1h",
                                 "edge",125,90,"str",90,0,10);

let war_mace = new Weapon("war mace","1h","blunt",125,60,
                          "str",110,10);

let morning_star = new Weapon("morning star","1h","blunt",
                             125,60,"str",110,10);

let blessed_magic_blade = new Weapon("blessed magic blade","1h",
                                    "edge",120,100,"str",100);

let magic_blade = new Weapon("magic blade","1h","edge",120,
                            100,"str",100);

let flash = new Weapon("flash","1h","edge",120,90,"dex",95,8);

let song_of_the_fallen = new Weapon("song of the fallen",
                               "1h","edge",120,80,"str",120,20);

let the_fear_of_logs = new Weapon("the fear of logs","1h","edge",
                                 115,85,"str",110,15);

let silver_sword = new Weapon("silver sword","1h","edge",110,
                             90,"str",100,7,7);

let bloody_claw = new Weapon("bloody claw","1h","edge",110,90,
                            "str",100,7,7);

let rusty_bloody_claw = new Weapon("rusty bloody claw","1h","edge",
                                   110,90,"str",100,7,7);

let elisium = new Weapon("elisium","1h","edge",
                                   110,85,"str",105,10);

let gigus = new Weapon("gigus","1h","blunt",
                                   110,75,"dex",100,30);

let rapier = new Weapon("rapier","1h","edge",
                                   110,70,"dex",85,0,8);

let ruby_blade = new Weapon("ruby blade","1h","edge",
                                   110,70,"str",105,0,7);

let alenas_sword_str = new Weapon("alena's sword (str)","1h","edge",
                                   105,100,"str",95);

let magic_ore_sword = new Weapon("magic ore sword","1h","edge",
                                   105,95,"str",90,0,10);

let dueling_sword = new Weapon("dueling sword","1h","edge",
                                   105,90,"dex",75,5,5);

let silver_plated_sword = new Weapon("silver plated sword",
                                     "1h","edge",
                                     105,90,"str",90,2,2);

let breaker = new Weapon("breaker","1h","blunt",
                         105,90,"str",80,5);

let boughs_destroyer = new Weapon("bough's destroyer","1h","edge",
                                     105,85,"str",110);

let kessels_sword = new Weapon("kessel's sword","1h","edge",100,
                              100,"dex",100);

let decorated_blade = new Weapon("decorated blade","1h","edge",100,
                              95,"dex",70,0,5);

let roderichs_sword = new Weapon("roderich's sword","1h","edge",100,
                              90,"str",100);

let southerners_sword = new Weapon("southerner's sword","1h",
                                   "edge",100,90,"str",100);

let smasher = new Weapon("smasher","1h","blunt",100,
                              55,"dex",80,20);

let knups_dagger = new Weapon("knup's dagger","1h","edge",100,
                              50,"dex",55,10,10);

let unfair_duel_sword = new Weapon("unfair duel sword","1h",
                                   "edge",95,90,"dex",70);

let hand_cutter = new Weapon("hand cutter","1h",
                                   "edge",95,60,"str",90);

let morgenstern = new Weapon("morgenstern","1h",
                                   "blunt",95,75,"str",90,25);

let bastard_sword = new Weapon("bastard sword","1h",
                                   "edge",90,100,"str",85);

let squasher = new Weapon("squasher","1h",
                                   "blunt",90,90,"str",75);

let great_axe = new Weapon("great axe",
                           "1h","edge",90,70,"str",85,10,10);

let double_bladed_axe = new Weapon("double-bladed axe",
                           "1h","edge",90,70,"str",80);

let decorated_sword = new Weapon("decorated sword","1h",
                                   "edge",85,95,"dex",60);

let paladins_sword = new Weapon("paladin's sword","1h",
                                   "edge",85,70,"str",70,0,5);

let fine_longsword = new Weapon("fine  longsword","1h",
                                   "edge",80,90,"str",70);

let luise = new Weapon("luise","1h",
                                   "edge",80,90,"str",80);

let southerners_sword_dex = new Weapon("southerner's sword (dex)",
                                       "1h","edge",80,80,"dex",55,
                                      6,6);

let stone_breaker = new Weapon("stone breaker","1h",
                                   "blunt",80,50,"str",75,5);

let exquisite_sword_of_the_guard = new Weapon(
  "exquisite sword of the guard","1h","edge",75,90,"str",60,0,5);

let duty = new Weapon("duty","1h",
                                   "edge",75,85,"str",70);

let the_shiv = new Weapon("the shiv","1h",
                                   "edge",75,80,"dex",50,5);

let chopper = new Weapon("chopper",
                        "1h","edge",75,75,"str",65,10);

let large_axe = new Weapon("large axe","1h",
                                   "edge",75,70,"str",70,2,2);

let pirates_cutlass = new Weapon("pirate's cutlass","1h",
                                   "edge",75,70,"str",60);

let spicker = new Weapon("spicker","1h",
                                   "blunt",75,60,"str",65,5);

let light_combat_hammer = new Weapon("light combat hammer","1h",
                                   "blunt",75,55,"dex",55,15);

let missing_cutlass = new Weapon("missing cutlass","1h",
                                   "edge",70,85,"dex",50,10);

let cutlass = new Weapon("cutlass","1h",
                                   "edge",70,70,"dex",60,0,5);

let war_cudgel = new Weapon("war cudgel","1h",
                                   "blunt",70,50,"str",60,5);

let longsword = new Weapon("longsword","1h",
                                   "edge",65,90,"str",60);

let lousy_long_sword = new Weapon("lousy long sword","1h",
                                   "edge",65,90,"str",65);

let engraved_blade = new Weapon("engraved blade","1h",
                                   "edge",65,90,"str",60);

let eksagnem = new Weapon("eksagnem","1h",
                                   "edge",65,80,"dex",40,5);

let poor_blade = new Weapon("poor blade","1h",
                                   "edge",65,80,"dex",45);

let splitter = new Weapon("splitter","1h",
                                   "edge",65,75,"str",65);

let southerners_machete = new Weapon("southerner's machete","1h",
                                   "edge",65,70,"str",55,10);

let golden_dagger = new Weapon("golden dagger","1h",
                                   "edge",65,50,"dex",45,15,15);

let cutter = new Weapon("cutter","1h",
                                   "edge",62,90,"str",60);

let fine_sword_of_the_guard = new Weapon(
  "fine sword of the guard","1h","edge",60,70,"str",50);

let engraved_sword = new Weapon("engraved sword","1h",
                                   "edge",60,90,"str",55);

let old_curved_sword = new Weapon("old curved sword","1h",
                                   "edge",60,80,"dex",40,2,2);

let sailors_axe = new Weapon("sailor's axe","1h",
                                   "edge",60,70,"str",60);

let general_sublis_baton = new Weapon("general subli's baton","1h",
                                   "blunt",60,65,"str",65,20);

let deck_axe = new Weapon("deck axe","1h",
                                   "edge",60,60,"str",60);

let war_hammer = new Weapon("war hammer","1h",
                                   "blunt",60,40,"str",55,10);

let amputator = new Weapon("amputator","1h",
                                   "edge",55,90,"str",50);

let pernach = new Weapon("pernach","1h",
                                   "blunt",55,90,"str",40,5,5);

let rough_pernach = new Weapon("rough pernach","1h",
                                   "blunt",55,90,"str",40,5,5);

let imminent_death = new Weapon("imminent death","1h",
                                   "edge",55,70,"str",50,0,10);

let copper_dagger = new Weapon("copper dagger","1h",
                                   "edge",55,50,"dex",35,5,5);

let light_orcish_axe = new Weapon("light orcish axe","1h",
                                   "edge",50,100,"str",70);

let arwids_sword = new Weapon("arwid's sword","1h",
                                   "edge",50,90,"str",50);

let skewer = new Weapon("skewer","1h",
                                   "edge",50,70,"dex",30,5);

let heavy_spiked_cudgel = new Weapon("heavy spiked cudgel","1h",
                                   "blunt",50,60,"str",50,15);

let fine_short_sword = new Weapon("fine short sword","1h",
                                   "edge",50,50,"str",25);

let mace = new Weapon("mace","1h",
                                   "blunt",45,90,"str",40,5);

let bandit_mace = new Weapon("bandit mace","1h",
                                   "blunt",45,90,"str",40,5);

let sword_of_the_guard = new Weapon("sword of the guard","1h",
                                   "edge",45,90,"str",40);

let sucpicious_meat_cleaver = new Weapon(
  "sucpicious meat cleaver","1h","edge",45,70,"str",45);

let wolfs_fang = new Weapon("wolf's fang","1h",
                                   "edge",45,50,"str",22,0,5);

let soldiers_sword = new Weapon("soldier's sword","1h",
                                   "edge",40,90,"str",30,0,5);

let thorn = new Weapon("thorn","1h",
                                   "blunt",40,90,"str",35,10);

let beater = new Weapon("beater","1h",
                                   "blunt",40,65,"dex",30,10);

let short_sword = new Weapon("short sword","1h",
                                   "edge",40,50,"str",30);

let large_knife = new Weapon("large knife","1h",
                                   "edge",40,35,"dex",25,7);

let sword = new Weapon("sword","1h",
                                   "edge",35,70,"dex",25,0,5);

let rough_hatchet = new Weapon("rough hatchet","1h",
                                   "edge",35,70,"str",35);

let heavy_dagger = new Weapon("heavy dagger","1h",
                                   "edge",35,50,"str",25,5,5);

let spiked_cudgel = new Weapon("spiked cudgel","1h",
                                   "blunt",30,70,"str",30,5);

let meat_knife = new Weapon("meat knife","1h",
                                   "edge",30,50,"dex",18,5);

let militia_short_sword = new Weapon("militia short sword","1h",
                                   "edge",30,50,"str",20);

let wolf_knife = new Weapon("wolf knife","1h",
                                   "edge",30,30,"str",10,0,3);

let flaming_blade_of_death = new Weapon(
  "flaming blade of death","1h","edge",27,80,"str",30,0,5);

let small_scythe = new Weapon("small scythe","1h",
                                   "edge",25,60,"dex",15,5);

let spiked_club = new Weapon("spiked club","1h",
                                   "blunt",25,60,"str",20);

let knife = new Weapon("knife","1h",
                                   "edge",25,50,"dex",15,10);

let rough_short_sword = new Weapon("rough short sword","1h",
                                   "edge",25,50,"str",20);

let wolf_knife_dex = new Weapon("wolf knife (dex)","1h",
                                   "edge",25,50,"dex",15);

let rusty_dagger = new Weapon("rusty dagger","1h",
                                   "edge",25,50,"str",10);

let rough_sword = new Weapon("rough sword","1h",
                                   "edge",23,70,"str",20);

let rough_broadsword = new Weapon("rough broadsword","1h",
                                   "edge",21,90,"str",15);

let timos_sword = new Weapon("timo's sword","1h",
                                   "edge",20,90,"str",10,7);

let mace_of_condominium = new Weapon("mace of condominium","1h",
                                   "blunt",20,80,"str",25,10);

let weapon_ = new Weapon("weapon","1h",
                                   "edge",20,50,"str",20,5);

let axe = new Weapon("axe","1h",
                                   "edge",20,50,"str",15);

let jils_pan = new Weapon("jil's pan","1h",
                                   "blunt",17,50,"str",10);

let rusty_sword = new Weapon("rusty sword","1h",
                                   "edge",15,70,"str",10);

let knife_dex = new Weapon("knife (dex)","1h",
                                   "edge",15,55,"dex",10,5);

let smiths_hammer = new Weapon("smith's hammer","1h",
                                   "blunt",15,50,"str",10,5,5);

let dagger = new Weapon("dagger","1h",
                                   "edge",15,50,"dex",10,3,3);

let club = new Weapon("club","1h",
                                   "blunt",12,70,"str",10);

let wooden_sword = new Weapon("wooden sword","1h",
                                   "blunt",10,80,"str",10);

let walking_stick = new Weapon("walking stick","1h",
                                   "blunt",8,70,"dex",5);

let sickle = new Weapon("sickle","1h",
                                   "edge",7,50,"str",5);

let skeleton_arm = new Weapon("skeleton arm","1h",
                                   "edge",5,70,"str",5);

let culus_heavy_branch = new Weapon("culu's heavy branch","1h",
                                   "blunt",5,70,"str",10);

let heavy_branch = new Weapon("heavy branch","1h",
                                   "blunt",5,70,"str",10);
let poker = new Weapon("poker","1h",
                                   "edge",5,50,"str",5,5);


// 2H WEAPONS

let ancient_spear = new Weapon("ancient spear","2h",
                              "edge",260,140,"dex",190,0,15);

let troll_tamer = new Weapon("troll tamer","2h",
                              "edge",250,140,"dex",185,0,15);

let wolfzack_blade = new Weapon("wolfzack blade","2h",
                              "edge",240,150,"str",230);

let the_crusher = new Weapon("the crusher","2h",
                              "blunt",240,120,"str",210,25);

let balanced_glaive = new Weapon("balanced glaive","2h",
                              "edge",230,145,"dex",180,0,15);

let spear_of_archolos_defender = new Weapon("spear of archolos defender","2h",
                              "edge",220,140,"dex",170,0,10);

let berserkers_axe = new Weapon("berserker's axe","2h",
                              "edge",215,90,"str",185);

let glaive = new Weapon("glaive","2h",
                              "edge",210,145,"dex",170,0,15);

let southerners_spear = new Weapon("southerner's spear","2h",
                              "edge",210,135,"dex",165,0,15);

let thunderbolt = new Weapon("thunderbolt","2h",
                              "blunt",200,130,"str",170,25);

let silver_rock = new Weapon("silver rock","2h",
                              "blunt",200,125,"dex",165,40);

let southerners_old_spear = new Weapon("southerner's old spear",
                                       "2h",
                                  "edge",195,135,"dex",155,0,10);

let shadowbeast_hunter = new Weapon("shadowbeast hunter","2h",
                              "edge",190,140,"dex",145,0,10);

let oppressor = new Weapon("oppressor","2h",
                              "edge",190,125,"str",180);

let axe_of_archolos_defender = new Weapon(
  "axe of archolos defender","2h",
                              "edge",190,120,"str",170,5,5);

let dragon_slicer = new Weapon("dragon slicer","2h",
                              "edge",190,120,"str",175);

let paladins_hand = new Weapon("paladin's hand","2h",
                              "edge",185,130,"str",165,0,5);

let the_justice_of_innos = new Weapon(
  "the justice of innos","2h",
                              "blunt",180,115,"str",150,20);

let nordmarian_spear = new Weapon("nordmarian spear","2h",
                              "edge",175,145,"dex",125,0,10);

let ancient_blade_of_ancient_beasts = new Weapon(
  "ancient blade of ancient beasts","2h",
                              "edge",175,140,"str",165);

let ramseys_family_spear = new Weapon("ramsey's family spear","2h",
                              "edge",175,120,"dex",140,0,10);

let storm_servant = new Weapon("storm servant","2h",
                              "blunt",170,130,"str",140,0,-10);

let the_wolfs_paw = new Weapon("the wolf's paw","2h",
                              "edge",170,120,"str",150);

let holy_executioner = new Weapon("holy executioner","2h",
                              "edge",165,130,"str",120);

let wicked_spear = new Weapon("wicked spear","2h",
                              "edge",160,145,"dex",130,0,10);

let eagle_claw = new Weapon("eagle claw","2h",
                              "blunt",160,135,"dex",135,30);
  

let vardhal_light = new Weapon("vardhal light","2h",
                              "magic",160,130,"mana",230,120,15);

let heavy_magic_combat_blade = new Weapon("heavy magic combat blade","2h",
                              "edge",160,130,"str",140,0,10);

let thunder = new Weapon("thunder","2h",
                              "blunt",160,110,"str",125,20);

let stormbringer = new Weapon("stormbringer","2h",
                              "edge",155,130,"str",145);

let ramseys_family_axe = new Weapon("ramsey's family axe","2h",
                              "edge",155,120,"str",140,5);

let purple_menace = new Weapon("purple menace","2h",
                                  "edge",150,115,"str",155,15);

let kingslayer = new Weapon("kingslayer","2h",
                              "edge",150,105,"str",130,0,10);

let head_smasher = new Weapon("head smasher","2h",
                              "blunt",145,135,"dex",115,0,15);

let cutlass_2h = new Weapon("cutlass (2H)","2h",
                              "edge",145,120,"str",145);

let heavy_two_handed_sword = new Weapon("heavy two-handed sword","2h",
                              "edge",145,120,"str",135);

let military_spear = new Weapon("military spear","2h",
                              "edge",140,150,"dex",100,0,10);

let typhoon = new Weapon("typhoon","2h",
                              "magic",140,130,"mana",190,100,10);

let sword_of_the_order = new Weapon("sword of the order","2h",
                              "edge",140,130,"str",120);

let infantrymans_hammer = new Weapon("infantryman's hammer","2h",
                              "blunt",140,120,"dex",120,25);

let corsair = new Weapon("corsair","2h",
                              "edge",140,120,"str",125,0,5);

let heavy_magic_two_handed_sword = new Weapon("heavy magic two-handed sword","2h",
                                  "edge",140,110,"str",110);

let nordmarian_axe = new Weapon("nordmarian axe","2h",
                              "edge",135,100,"str",115,5);

let negotiator = new Weapon("negotiator","2h",
                              "edge",130,130,"dex",95,0,10);

let rusty_negotiator = new Weapon("rusty negotiator","2h",
                              "edge",130,130,"dex",95);

let nordmarian_hammer = new Weapon("nordmarian hammer","2h",
                              "blunt",130,110,"str",110,15);

let decorated_axe = new Weapon("decorated axe","2h",
                              "edge",130,100,"str",115);

let long_spiked_club = new Weapon("long spiked club","2h",
                              "blunt",125,140,"dex",105,20);

let the_butcher = new Weapon("the butcher","2h",
                              "edge",125,95,"str",110);

let warriors_cry = new Weapon("warrior's cry's hammer","2h",
                              "edge",125,90,"str",125);

let soldiers_spear = new Weapon("soldier's spear","2h",
                              "edge",120,150,"dex",90,0,10);

let the_penetrator = new Weapon("the penetrator","2h",
                                  "blunt",120,130,"dex",85,0,10);

let nordmarian_hammer_generate = new Weapon("nordmarian hammer (generated)","2h",
                              "blunt",120,110,"str",110);

let the_judgement = new Weapon("the judgement","2h",
                              "edge",115,130,"str",95);

let rune_of_power = new Weapon("rune of power","2h",
                              "edge",115,120,"str",115);

let magic_two_handed_sword = new Weapon("magic two-handed sword","2h",
                              "edge",115,100,"str",95,0,5);

let enhanced_pike = new Weapon("enhanced pike","2h",
                              "edge",110,135,"dex",80,10);

let two_handed_magic_ore_sword = new Weapon("two-handed magic ore sword","2h",
                              "edge",110,110,"str",90,0,10);

let paladins_two_handed_sword = new Weapon("paladin's two-handed sword","2h",
                              "edge",110,110,"str",110);

let soldiers_pike = new Weapon("soldier's pike","2h",
                              "edge",105,135,"dex",75,10);

let southerners_morgenstern = new Weapon("southerner's morgenstern","2h",
                              "blunt",105,130,"dex",80,10,10);

let slave_driver = new Weapon("slave driver","2h",
                              "blunt",105,120,"str",80,10);

let the_blade_of_justice_2h = new Weapon("the blade of justice (2h)","2h",
                                  "edge",105,110,"str",95,5,5);

let big_machette = new Weapon("big machette","2h",
                              "edge",105,105,"str",100);

let spiked_two_handed_sword = new Weapon("spiked two-handed sword","2h",
                              "edge",105,100,"str",105);

let orcish_war_sword = new Weapon("orcish war sword","2h",
                              "edge",115,120,"str",115);

let bens_hammer = new Weapon("ben's hammer","2h",
                              "blunt",100,130,"str",100);

let spiked_mace = new Weapon("spiked mace","2h",
                              "blunt",100,130,"dex",70);

let fire_mages_staff = new Weapon("fire mage's staff","2h",
                              "magic",100,125,"mana",165,80,10);

let ilses_hammer = new Weapon("ilse's hammer","2h",
                              "blunt",100,120,"str",100,7);

let harpys_claw = new Weapon("harpy's claw","2h",
                              "edge",100,120,"str",90);

let rusty_harpys_claw = new Weapon("rusty harpy's claw","2h",
                              "edge",100,120,"str",90);

let hammer_of_the_wolf_son = new Weapon("hammer of the wolf son","2h",
                              "blunt",100,120,"str",100);

let sword_of_the_wolf_son = new Weapon("sword of the wolf son","2h",
                                  "edge",100,115,"str",100);

let devirs_sword = new Weapon("devirs sword","2h",
                              "edge",100,115,"str",100);

let blade_of_the_damned = new Weapon("blade of the damned","2h",
                              "edge",100,110,"hp",666,10,10);

let solid_two_handed_sword = new Weapon("solid two-handed sword","2h",
                              "edge",100,110,"str",80);

let rusty_solid_two_handed_sword = new Weapon("rusty solid two-handed sword","2h",
                              "edge",100,110,"str",80);

let old_sword = new Weapon("old sword","2h",
                              "edge",95,130,"str",70);

let head_chopper = new Weapon("head chopper","2h",
                              "edge",90,130,"str",75,0,5);

let exquisite_two_handed_sword_of_the_guard = new Weapon(
  "exquisite two-handed sword of the guard","2h",
                              "edge",90,110,"str",80,0,5);

let fat_mans_grit = new Weapon("fat man's grit","2h",
                              "edge",85,140,"str",80,20);

let spear = new Weapon("spear","2h",
                              "edge",85,135,"dex",65,0,10);

let decayed_spear = new Weapon("decayed spear","2h",
                              "edge",85,135,"dex",65);

let water_mages_staff = new Weapon("water mage's staff","2h",
                              "magic",85,130,"mana",120,65,10);

let javelin = new Weapon("javelin","2h",
                                  "edge",85,130,"dex",55,0,10);

let guards_greatsword = new Weapon("guard's greatsword","2h",
                              "edge",85,120,"str",85);

let knights_blade = new Weapon("knight's blade","2h",
                              "edge",85,115,"str",80,0,7);

let the_swine = new Weapon("the swine","2h",
                              "blunt",85,110,"str",65,10);

let melonidas = new Weapon("melonidas","2h",
                              "edge",80,135,"dex",60,12);

let light_javelin = new Weapon("light javelin","2h",
                              "edge",80,130,"dex",60,0,10);

let rusty_light_javelin = new Weapon("rusty light javelin","2h",
                              "edge",80,130,"dex",60);

let tormentors_axe = new Weapon("tormentor's axe","2h",
                              "edge",80,130,"str",70);

let brutal_orc_axe = new Weapon("brutal orc axe","2h",
                              "edge",90,115,"str",100);

let fine_two_handed_sword_of_the_guard = new Weapon(
  "fine two-handed sword of the guard","2h",
                              "edge",80,110,"str",65,0,5);

let two_handed_sword_of_the_guard = new Weapon(
  "two-handed sword of the guard","2h",
                              "edge",80,110,"str",80);

let rusty_two_handed_sword_of_the_guard = new Weapon(
  "rusty two-handed sword of the guard","2h",
                              "edge",80,110,"str",80);

let orc_warlords_sword = new Weapon("orc warlord's sword","2h",
                              "edge",80,100,"str",100);


let soldiers_blade = new Weapon("soldier's blade","2h",
                              "edge",75,115,"str",75);

let heavy_spiked_club = new Weapon("heavy spiked club","2h",
                              "blunt",70,135,"dex",55,15);

let staff_of_storms = new Weapon("staff of storms","2h",
                              "magic",70,120,"mana",95,50,10);

let guards_greatsword_2ndgate = new Weapon("guard's greatsword (2nd gate)","2h",
                              "edge",70,120,"str",70);

let dragons_tongue = new Weapon("dragon's tongue","2h",
                              "edge",70,110,"str",65,0,5);

let lewkos_sword = new Weapon("lewko's sword","2h",
                              "edge",70,110,"str",70,0,3);

let deserters_blade = new Weapon("deserter's blade","2h",
                              "edge",70,110,"str",70,10);

let the_avenger = new Weapon("the avenger","2h",
                              "edge",70,110,"str",60);

let heavy_orc_axe = new Weapon("heavy orc axe","2h",
                              "edge",70,110,"str",90);

let boar_weapon = new Weapon("boar","2h",
                              "blunt",70,110,"str",60);

let halberd = new Weapon("halberd","2h",
                              "edge",65,165,"str",70);

let enhanced_fighting_staff = new Weapon("enhanced fighting staff","2h",
                              "blunt",65,130,"dex",45,0,10);

let water_circles_stick = new Weapon("water circle's stick","2h",
                              "blunt",65,125,"dex",40,0,15);

let orc_hammer = new Weapon("orc hammer","2h",
                              "blunt",65,100,"str",85,15);

let board_crasher = new Weapon("board crasher","2h",
                              "edge",65,80,"str",60,0,5);

let the_biter = new Weapon("the biter","2h",
                              "edge",60,110,"str",45,0,5);

let medium_orc_axe = new Weapon("medium orc axe","2h",
                              "edge",60,110,"str",80);

let staff_of_judgement = new Weapon("staff of judgement","2h",
                              "edge",60,110,"dex",40);

let combat_hammer = new Weapon("combat hammer","2h",
                              "blunt",60,100,"str",50,15);

let guards_stick = new Weapon("guard's stick","2h",
                              "blunt",55,125,"dex",35,0,5);

let two_handed_sword_of_the_guard_2 = new Weapon(
  "two-handed sword of the guard (2)","2h",
                              "edge",55,110,"str",55,0,5);

let judges_staff = new Weapon("judge's staff","2h",
                              "edge",55,110,"dex",45,10);

let light_two_handed_sword = new Weapon("light two-handed sword","2h",
                              "edge",55,110,"str",50);

let frogmans_mace = new Weapon("frogman's mace","2h",
                              "blunt",50,130,"str",90,15);

let axe_2h = new Weapon("axe (2h)","2h",
                              "edge",50,130,"str",50,10);

let two_handed_sword = new Weapon("two-handed sword","2h",
                              "edge",50,130,"str",50);

let the_bloody_reaper = new Weapon("the bloody reaper","2h",
                              "edge",50,120,"str",45,0,7);

let judgement_of_stars = new Weapon("judgement of stars","2h",
                              "magic",50,110,"mana",80,35,5);

let golden_szperlacz = new Weapon("golden szperlacz","2h",
                              "blunt",50,100,"str",45,5,5);

let light_orc_axe = new Weapon("light orc axe","2h",
                              "edge",50,100,"str",70);

let val_brychs_pickaxe = new Weapon("val-brych's pickaxe","2h",
                              "edge",50,65,"str",50,30);

let guards_old_stick = new Weapon("guard's old stick","2h",
                              "blunt",45,125,"dex",25,0,5);

let greatsword = new Weapon("greatsword","2h",
                              "edge",45,110,"str",35,0,3);

let arnies_doom = new Weapon("arnie's doom","2h",
                              "edge",45,110,"str",40,10);

let broken_sword_of_the_wolf_son = new Weapon(
  "broken sword of the wolf son","2h",
                              "edge",45,90,"str",45,10);

let light_battle_axe = new Weapon("two-handed sword","2h",
                              "edge",45,70,"str",40);

let rusty_sword_of_the_wolf_son = new Weapon(
  "rusty sword of the wolf son","2h",
                              "edge",45,115,"str",40);

let sword_of_the_rejects = new Weapon("sword of the rejects","2h",
                              "edge",40,110,"str",30);

let rusty_two_handed_sword = new Weapon(
  "rusty two-handed sword","2h",
                              "edge",40,100,"str",35);

let alchemists_staff = new Weapon("alchemist's staff","2h",
                              "magic",35,130,"mana",55,25,5);

let poor_two_handed_sword = new Weapon("poor two-handed sword","2h",
                              "edge",35,130,"str",30);

let wind_servant = new Weapon("wind servant","2h",
                              "blunt",35,90,"str",20);

let rough_war_axe = new Weapon("rough war axe","2h",
                              "edge",35,80,"str",30);

let breath_of_death = new Weapon("breath of death","2h",
                              "edge",32,110,"str",30);

let fighting_pike = new Weapon("fighting pike","2h",
                              "blunt",30,130,"dex",15);

let fighting_staff = new Weapon("fighting staff","2h",
                              "blunt",30,120,"dex",20,0,5);

let scythe = new Weapon("scythe","2h",
                              "edge",25,130,"dex",25,15);

let the_staff_of_adanos = new Weapon("the staff of adanos","2h",
                              "blunt",25,110,"str",30);

let rusty_axe = new Weapon("rusty axe","2h",
                              "edge",25,80,"str",10);

let old_scythe = new Weapon("old scythe","2h",
                              "edge",20,130,"dex",15);

let novice_staff = new Weapon("novice staff","2h",
                              "magic",25,130,"mana",25,5,5);

let wooden_sword_2h = new Weapon("wooden sword (2h)","2h",
                              "blunt",20,110,"str",10);

let a_sharpened_stick = new Weapon("a sharpened stick","2h",
                              "edge",20,110,"dex",10);

let nettle_stick = new Weapon("nettle stick","2h",
                              "edge",20,110,"dex",20,15);

let woodcutters_axe = new Weapon("woodcutter's axe","2h",
                              "edge",20,70,"str",20);

let pick_axe = new Weapon("pick-axe","2h",
                              "edge",20,60,"str",10);

let skeleton_leg = new Weapon("skeleton leg","2h",
                              "edge",16,110,"str",10);


// RANGED WEAPONS


let magic_ore_crossbow = new Weapon("magic ore crossbow","xBow",
                              "point",280,Infinity,"str",200,100,5);

let sliver_crossbow = new Weapon("silver crossbow","xBow",
                              "point",260,Infinity,"str",190,80);

let crossbow_of_archolos_defender = new Weapon("crossbow of archolos defender","xBow",
                              "point",230,Infinity,"str",170,70);

let ballista = new Weapon("ballista","xBow",
                              "point",230,Infinity,"str",180,55);

let heavy_royal_crossbow = new Weapon("heavy royal crossbow","xBow",
                              "point",220,Infinity,"str",170,55);

let blue_eagle = new Weapon("blue eagle","bow",
                              "point",215,Infinity,"dex",190,0,6);

let wall_destroyer = new Weapon("wall destroyer","xBow",
                              "point",210,Infinity,"str",165,40);

let londramian_bow = new Weapon("londramian bow","bow",
                              "point",205,Infinity,"dex",200);

let oak_bow = new Weapon("oak bow","bow",
                              "point",195,Infinity,"dex",180,0,6);

let golden_crossbow = new Weapon("golden crossbow","xBow",
                              "point",190,Infinity,"str",150,50);

let great_crossbow = new Weapon("great crossbow","xBow",
                              "point",190,Infinity,"str",150,45);

let nordmarian_bow = new Weapon("nordmarian bow","bow",
                              "point",185,Infinity,"dex",185);

let ramsey_family_crossbow = new Weapon("ramsey family crossbow","xBow",
                              "point",180,Infinity,"str",140,65,10);

let hawk = new Weapon("hawk","bow",
                              "point",175,Infinity,"dex",160,0,6);

let log_weapon = new Weapon("log","xBow",
                              "point",175,Infinity,"str",135,35,5);

let bow_of_archolos_defender = new Weapon("bow of archolos defender","bow",
                              "point",175,Infinity,"dex",165,0,5);

let shadowbeast_slayer = new Weapon("shadowbeast slayer","bow",
                              "point",170,Infinity,"dex",170);

let reinforced_crossbow = new Weapon("reinforced crossbow","xBow",
                              "point",165,Infinity,"str",135,45);

let hawkeye = new Weapon("hawkeye","bow",
                              "point",165,Infinity,"dex",155,0,6);

let trakers_reinforced_bow = new Weapon("trakers reinforced bow","bow",
                              "point",160,Infinity,"dex",160,0,10);

let poorly_reinforced_crossbow = new Weapon("poorly reinforced crossbow","xBow",
                              "point",155,Infinity,"str",125,35);

let ramsey_family_bow = new Weapon("ramsey family bow","bow",
                              "point",155,Infinity,"dex",140);

let minecrawler_hunter_crossbow = new Weapon("minecrawler hunter crossbow","xBow",
                              "point",150,Infinity,"str",120,55,5);

let bone_bow = new Weapon("bone bow","bow",
                              "point",150,Infinity,"dex",135,0,6);

let trakers_heavy_bow = new Weapon("trakers heavy bow","bow",
                              "point",150,Infinity,"dex",150,0,2);

let desert_bow = new Weapon("desert bow","bow",
                              "point",145,Infinity,"dex",125,0,6);

let gilded_crossbow = new Weapon("gilded crossbow","xBow",
                              "point",140,Infinity,"str",110,25);

let decorated_crossbow = new Weapon("decorated crossbow","xBow",
                              "point",140,Infinity,"str",105,25);

let light_oak_bow = new Weapon("oak bow","bow",
                              "point",140,Infinity,"dex",140);

let carelessly_decorated_crossbow = new Weapon("carelessly decorated crossbow","xBow",
                              "point",135,Infinity,"str",100,25);

let silent_death = new Weapon("silent death","bow",
                              "point",130,Infinity,"dex",130,0,5);

let crackling_bone_bow = new Weapon("crackling bone bow","bow",
                              "point",130,Infinity,"dex",130);

let wargs_bane = new Weapon("wargs bane","xBow",
                              "point",125,Infinity,"str",90,30,7);

let kessels_crossbow = new Weapon("kessel's crossbow","xBow",
                              "point",125,Infinity,"str",100);

let hunting_crossbow_self = new Weapon("hunting crossbow (self made)","xBow",
                              "point",125,Infinity,"str",90,30);

let long_bow = new Weapon("long bow","bow",
                              "point",120,Infinity,"dex",120);

let araxos_crossbow = new Weapon("araxos crossbow","xBow",
                              "point",110,Infinity,"str",80,35);

let reinforced_beechwood_bow = new Weapon("reinforced beechwood bow","bow",
                              "point",110,Infinity,"dex",100,0,4);

let reflex_bow = new Weapon("reflex bow","bow",
                              "point",110,Infinity,"dex",110);

let jons_crossbow = new Weapon("jon's crossbow","xBow",
                              "point",105,Infinity,"str",80,45);

let crossbowmans_friend = new Weapon("crossbowman's friend","xBow",
                              "point",105,Infinity,"str",70,25);

let hunting_bow = new Weapon("hunting bow","bow",
                              "point",100,Infinity,"dex",90,0,4);

let wing_trimmer = new Weapon("wing trimmer","bow",
                              "point",100,Infinity,"dex",100);

let strangers_crossbow = new Weapon("stranger's crossbow","xBow",
                              "point",95,Infinity,"str",60,40);

let the_woodworms_delicacy = new Weapon("the woodworm's delicacy","xBow",
                              "point",95,Infinity,"str",65,15);

let oak_crossbow = new Weapon("oak crossbow","xBow",
                              "point",90,Infinity,"str",65,20,5);

let volkers_mercenary_crossbow = new Weapon("volker's mercenary crossbow","xBow",
                              "point",90,Infinity,"str",80,15);

let mahogany_bow = new Weapon("mahogany bow","bow",
                              "point",90,Infinity,"dex",80,0,4);

let headhunters_bow = new Weapon("headhunter's bow","bow",
                              "point",90,Infinity,"dex",90);

let decayed_long_bow = new Weapon("decayed long bow","bow",
                              "point",90,Infinity,"dex",90);

let southerners_crossbow = new Weapon("southerner's crossbow","xBow",
                              "point",85,Infinity,"str",75,60,7);

let light_oak_crossbow = new Weapon("light oak crossbow","xBow",
                              "point",85,Infinity,"str",60,10);

let worn_oak_crossbow = new Weapon("light oak crossbow","xBow",
                              "point",85,Infinity,"str",60);

let reinforced_birchwood_bow = new Weapon("reinforced birchwood bow","bow",
                              "point",80,Infinity,"dex",70,0,4);

let trackers_bow = new Weapon("tracker's bow","bow",
                              "point",80,Infinity,"dex",80);

let trackers_decayed_bow = new Weapon("tracker's decayed bow","bow",
                              "point",80,Infinity,"dex",80);

let solid_crossbow = new Weapon("solid crossbow","xBow",
                              "point",75,Infinity,"str",55,20);

let hunting_crossbow = new Weapon("hunting crossbow","xBow",
                              "point",75,Infinity,"str",50,20);

let demonstration_crossbow_good = new Weapon("demonstration crossbow (good)","xBow",
                              "point",75,Infinity,"str",50);

let demonstration_crossbow_bad = new Weapon("demonstration crossbow (bad)","xBow",
                              "point",15,Infinity,"str",10);

let guards_crossbow = new Weapon("guard's crossbow","xBow",
                              "point",70,Infinity,"str",50,10,3);

let crossbow_of_the_wolf_sons = new Weapon("crossbow of the wolf sons","xBow",
                              "point",70,Infinity,"str",70,15);

let light_ash_bow = new Weapon("light ash bow","bow",
                              "point",70,Infinity,"dex",65,0,4);

let light_hunting_bow = new Weapon("hunting bow","bow",
                              "point",70,Infinity,"dex",70);

let old_bow = new Weapon("old bow","bow",
                              "point",70,Infinity,"dex",75);

let old_bow_2 = new Weapon("old bow 2","bow",
                              "point",45,Infinity,"dex",55);

let light_hunting_crossbow = new Weapon("light hunting crossbow","xBow",
                              "point",65,Infinity,"str",45,15);

let red_bow = new Weapon("red bow","bow",
                              "point",65,Infinity,"dex",60,0,2);

let light_mahogany_bow = new Weapon("light mahogany bow","bow",
                              "point",65,Infinity,"dex",65);

let ashen_crossbow = new Weapon("ashen crossbow","xBow",
                              "point",60,Infinity,"str",35,15);

let emma = new Weapon("emma","xBow",
                              "point",55,Infinity,"str",40,35,5);

let composite_bow = new Weapon("composite bow","bow",
                              "point",55,Infinity,"dex",50,0,2);

let flexible_bow = new Weapon("flexible bow","bow",
                              "point",55,Infinity,"dex",55);

let orc_crossbow = new Weapon("orc crossbow","xBow",
                              "point",50,Infinity,"str",100,20,-10);

let old_ashen_crossbow = new Weapon("old_ashen crossbow","xBow",
                              "point",50,Infinity,"str",35,10);

let beechwood_bow = new Weapon("beechwood bow","bow",
                              "point",45,Infinity,"dex",40,0,2);

let light_crossbow = new Weapon("light crossbow","xBow",
                              "point",45,Infinity,"str",25,5);

let elm_bow = new Weapon("elm bow","bow",
                              "point",45,Infinity,"dex",45);

let old_crossbow = new Weapon("old crossbow","xBow",
                              "point",45,Infinity,"str",55);

let slingshot = new Weapon("slingshot","xBow",
                              "point",45,Infinity,"str",55);

let birch_bow = new Weapon("birch bow","bow",
                              "point",35,Infinity,"dex",30,0,2);

let decayed_light_crossbow = new Weapon("decayed light crossbow","xBow",
                              "point",35,Infinity,"str",20,5);

let hunting_bow_weak = new Weapon("hunting bow (weak)","bow",
                              "point",35,Infinity,"dex",35);

let light_beechwood_bow = new Weapon("light beechwood bow","bow",
                              "point",30,Infinity,"dex",30);

let runners_bow = new Weapon("runner's bow","bow",
                              "point",25,Infinity,"dex",25,0,3);

let training_crossbow = new Weapon("training crossbow","xBow",
                              "point",20,Infinity,"str",10,5);

let decayed_training_crossbow = new Weapon("decayed training crossbow","xBow",
                              "point",20,Infinity,"str",10,5);

let light_birch_bow = new Weapon("light birch bow","bow",
                              "point",20,Infinity,"dex",20);

let willow_bow = new Weapon("willow bow","bow",
                              "point",15,Infinity,"dex",15);

let short_bow = new Weapon("short bow","bow",
                              "point",10,Infinity,"dex",10);


weaponList = [sailor_of_storms,shining_sword,the_peacemaker,
              cortezs_sword,corsair_pride,fine_bastard_sword,
              pure_ore_magic_blade,captains_sabre,wrath_of_innos,
              stuffer,fury,silver_slayer,nobles_rapier,
              blade_with_a_blue_stone,magic_combat_blade,
              the_blade_of_justice,sword_of_archolos_defender,
              balanced_blade,ramseys_rod_rapier,master_sword,
              pride_of_arholos,abu_dubas_scimitar,
              corsair_of_the_oceans,magic_blade_for_dragons,
              rune_sword,cleaver,the_fear_of_sailors,
              firm_sword,ramseys_ancestral_sword,el_bastardo,
              dueling_saber,stroker,long_saber,balanced_spiked_club,
              inquisitor,manfreds_shiv,alenas_sword,slasher,
              poor_magic_blade,executioners_axe,usurers_blade,
              firm_sword_str,kushis_sword,ravens_beak,
              ivys_dagger,light_master_sword,long_magic_sword,
              war_mace,morning_star,blessed_magic_blade,
              magic_blade,flash,song_of_the_fallen,
              the_fear_of_logs,silver_sword,bloody_claw,
              rusty_bloody_claw,elisium,gigus,rapier,ruby_blade,
              alenas_sword_str,magic_ore_sword,dueling_sword,
              silver_plated_sword,breaker,boughs_destroyer,
              kessels_sword,decorated_blade,roderichs_sword,
              southerners_sword,smasher,knups_dagger,
              unfair_duel_sword,hand_cutter,morgenstern,
              bastard_sword,squasher,great_axe,double_bladed_axe,
              decorated_sword,paladins_sword,fine_longsword,
              luise,southerners_sword_dex,stone_breaker,
              exquisite_sword_of_the_guard,duty,the_shiv,
              chopper,large_axe,pirates_cutlass,spicker,
              light_combat_hammer,missing_cutlass,cutlass,
              war_cudgel,longsword,lousy_long_sword,engraved_blade,
              eksagnem,poor_blade,splitter,southerners_machete,
              golden_dagger,cutter,fine_sword_of_the_guard,
              engraved_sword,old_curved_sword,sailors_axe,
              general_sublis_baton,deck_axe,war_hammer,
              amputator,pernach,rough_pernach,imminent_death,
              copper_dagger,light_orcish_axe,arwids_sword,
              skewer,heavy_spiked_cudgel,fine_short_sword,
              mace,bandit_mace,sword_of_the_guard,
              sucpicious_meat_cleaver,wolfs_fang,soldiers_sword,
              thorn,beater,short_sword,large_knife,sword,
              rough_hatchet,heavy_dagger,spiked_cudgel,meat_knife,
              militia_short_sword,wolf_knife,flaming_blade_of_death,
              small_scythe,spiked_club,knife,rough_short_sword,
              wolf_knife_dex,rusty_dagger,rough_sword,rough_broadsword,
              timos_sword,mace_of_condominium,weapon_,axe,jils_pan,
              rusty_sword,knife_dex,smiths_hammer,dagger,club,
              wooden_sword,walking_stick,sickle,skeleton_arm,
              culus_heavy_branch,heavy_branch,poker,
              ancient_spear,troll_tamer,wolfzack_blade,the_crusher,
              balanced_glaive,spear_of_archolos_defender,berserkers_axe,glaive,
              southerners_spear,thunderbolt,silver_rock,
              southerners_old_spear,shadowbeast_hunter,
              oppressor,axe_of_archolos_defender,dragon_slicer,
              paladins_hand,the_justice_of_innos,nordmarian_spear,
              ancient_blade_of_ancient_beasts,ramseys_family_spear, 
              storm_servant,the_wolfs_paw,holy_executioner,
              wicked_spear,eagle_claw,vardhal_light,heavy_magic_combat_blade,
              thunder,stormbringer,ramseys_family_axe,
              purple_menace,kingslayer,head_smasher,
              cutlass_2h,heavy_two_handed_sword,military_spear,
              typhoon,sword_of_the_order,infantrymans_hammer,
              corsair,heavy_magic_two_handed_sword,nordmarian_axe,
              negotiator,rusty_negotiator,nordmarian_hammer,
              decorated_axe,long_spiked_club,the_butcher,warriors_cry,
              soldiers_spear,the_penetrator,nordmarian_hammer_generate,
              the_judgement,rune_of_power,magic_two_handed_sword,
              enhanced_pike,two_handed_magic_ore_sword,paladins_two_handed_sword,
              soldiers_pike,southerners_morgenstern,slave_driver,
              the_blade_of_justice_2h,big_machette,spiked_two_handed_sword,
              orcish_war_sword,bens_hammer,spiked_mace,fire_mages_staff,
              ilses_hammer,harpys_claw,rusty_harpys_claw,
              hammer_of_the_wolf_son,sword_of_the_wolf_son,devirs_sword,
              blade_of_the_damned,solid_two_handed_sword,
              rusty_solid_two_handed_sword,old_sword,head_chopper,
              exquisite_two_handed_sword_of_the_guard,fat_mans_grit,
              spear,decayed_spear,water_mages_staff,javelin,
              guards_greatsword,knights_blade,the_swine,
              melonidas,light_javelin,rusty_light_javelin,
              tormentors_axe,brutal_orc_axe,fine_two_handed_sword_of_the_guard,
              two_handed_sword_of_the_guard,rusty_two_handed_sword_of_the_guard,
              orc_warlords_sword,soldiers_blade,
              heavy_spiked_club,staff_of_storms,guards_greatsword_2ndgate,
              dragons_tongue,lewkos_sword,deserters_blade,
              the_avenger,heavy_orc_axe,boar_weapon,halberd,
              enhanced_fighting_staff,water_circles_stick,orc_hammer,
              board_crasher,the_biter,medium_orc_axe,staff_of_judgement,
              combat_hammer,guards_stick,two_handed_sword_of_the_guard_2,
              judges_staff,light_two_handed_sword,frogmans_mace,
              axe_2h,two_handed_sword,the_bloody_reaper,judgement_of_stars,
              golden_szperlacz,light_orc_axe,val_brychs_pickaxe,
              guards_old_stick,greatsword,
              arnies_doom,broken_sword_of_the_wolf_son,light_battle_axe,
              rusty_sword_of_the_wolf_son,sword_of_the_rejects,
              rusty_two_handed_sword,alchemists_staff,poor_two_handed_sword,
              wind_servant,rough_war_axe,breath_of_death,fighting_pike,
              fighting_staff,scythe,the_staff_of_adanos,rusty_axe,
              old_scythe,novice_staff,wooden_sword_2h,a_sharpened_stick,
              nettle_stick,woodcutters_axe,pick_axe,skeleton_leg,
              magic_ore_crossbow,sliver_crossbow,crossbow_of_archolos_defender,
              ballista,heavy_royal_crossbow,blue_eagle,wall_destroyer,
              londramian_bow,oak_bow,golden_crossbow,
              great_crossbow,nordmarian_bow,ramsey_family_crossbow,
              hawk,log_weapon,bow_of_archolos_defender,shadowbeast_slayer,
              reinforced_crossbow,hawkeye,trakers_reinforced_bow,
              poorly_reinforced_crossbow,ramsey_family_bow,
              minecrawler_hunter_crossbow,bone_bow,trakers_heavy_bow,
              desert_bow,gilded_crossbow,decorated_crossbow,
              light_oak_bow,carelessly_decorated_crossbow,
              silent_death,crackling_bone_bow,wargs_bane,
              kessels_crossbow,hunting_crossbow,long_bow,araxos_crossbow,
              reinforced_beechwood_bow,reflex_bow,jons_crossbow,
              crossbowmans_friend,hunting_bow,wing_trimmer,
              strangers_crossbow,the_woodworms_delicacy,oak_crossbow,
              volkers_mercenary_crossbow,mahogany_bow,headhunters_bow,
              decayed_long_bow,southerners_crossbow,light_oak_crossbow,
              worn_oak_crossbow,reinforced_birchwood_bow,trackers_bow,
              trackers_decayed_bow,solid_crossbow,hunting_crossbow,
              demonstration_crossbow_good,demonstration_crossbow_bad,
              guards_crossbow,crossbow_of_the_wolf_sons,light_ash_bow,
              light_hunting_bow,old_bow,old_bow_2,light_hunting_crossbow,
              red_bow,light_mahogany_bow,ashen_crossbow,emma,composite_bow,
              flexible_bow,orc_crossbow,old_ashen_crossbow,beechwood_bow,
              light_crossbow,elm_bow,old_crossbow,slingshot,birch_bow,
              decayed_light_crossbow,hunting_bow_weak,light_beechwood_bow,
              runners_bow,training_crossbow,decayed_training_crossbow,
              light_birch_bow,willow_bow,short_bow
                 ];


wList1h = weaponList.slice(0,166).sort(sortByName); // 166 total 1H weapons
wList2h = weaponList.slice(166,321).sort(sortByName); //155 total 2h weapons
wListRanged = weaponList.slice(321).sort(sortByName); 
weaponList.sort(sortByName);
