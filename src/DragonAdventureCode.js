//TO DO:

//finish the dialogue for level "the end"

//finish and fix the dark mode balencing (do this last or smth idk)

//Ḣ̶̡ḭ̵̮̓ṁ̸͕̔
/**********************************************************************************
WARNING! VERY HARD GAME THAT MIGHT CAUSE RAGE!!!
SOME ENEMIES ARE IMMUNE TO CERTAIN ATTACKS!

Everything in this game was designed by jibanyanc & obsta07!

Big thanks to Obsta07 for helping me test this game! It would have been much harder without him!
CREDITS: 
    Coder, design, and lore: Jibanyanc
    Beta tester and Bestiary entries: Obsta07
    
SPEEDRUN: kept in the code for historic reasons (I shortened it out)

Classic:
LEADERBOARD for first 10 levels {
    1: obsta07: 1:07
    2: kenji : 1:14
    3: jibanyanc : 1:16
leaderboard for first 30 levels {
    1: obsta07 : 6:55
    2: jibanyanc: 7:14
leaderboard for first 50 levels {
    1: obsta07 : 21:36
**********************************************************************************/

var gameCode = `

var StartLevel;
var level = 0;
var HP = 100;
var maxHP = 100;
var MP= 100;
var maxMP = 100;
var attack="fire";
var px=25;
var py=100;
var pw=60;
var ph=60;
var dirx=1;
var diry=0;
var frame = 0;
var testFrame = 0;
var totalFrame = 0;
var lastSummonFrame = 0;
var lastThrowFrame = 0;
var lastCataFrame = 0;
var lastPoisonThrowFrame = 0;
var playerPoundedFrame = -99999999999;
var playerPoundedEnemy;
var lastFreezeFrame;
var backr;
var backg;
var backb;
var firer = 60;     
var stun = 0;
var decay = 0;
var slow = 0;
var confuse = 0;
var poisonFrame = 0;
var superSlow = 0;
var grab = false;
var Phurt = false;
var gearplaceL = -80;
var gearplaceR = 480;
var gearplaceT = -150;
var gearplaceB = 600;
var crusherswap = false;
var fall;
var cloudSummon1 = false;
var cloudSummon2 = false;
var touchWall = false;
var superFreeze = false;
var air = 900;
var maxAir = 900;
var dif = 1;
var speedrunMode = false;
var mouseWasPressed = false;
var mouseJustPressed = false;
var windir = floor(random(1,5));
var windsped = 2;
var underText = "";
var underTextTime = 400;
var partx = 99999; 
var party = 99999; //woooooooooooo party!
var pitx = 200;
var pity = 200;
var pitx2 = 200;
var pity2 = 200;
var pitx3 = 200;
var pity3 = 200;
var pitx4 = 200;
var pity4 = 200;
var pitx5 = 200;
var pity5 = 200;
var pitFrame = -400;
var pitFrame2 = -400;
var pitFrame3 = -400;
var altarWait = true;
var altarWait2 = true;
var tempound = 0;
var ropound = 0;
var tud = false;
var tud2 = false;
var freezeDelay = 180;
var numinFlowers = 0;
var poisonFlowerSummon = false;
var text1 = false;
var text2 = false;
var text3 = false;
var text4 = false;
var text5 = false;
var text6 = false;
var text7 = false;
var text8 = false;
var text9 = false;
var text10 = false;
var text11 = false;
var text12 = false;
var text13 = false;
var text14 = false;
var text15 = false;
var dedText = false;
var castleDed= false;
var dying = false;
var ballistaWait = false;
var wave1 = false;
var wave2 = false;
var wave3 = false;
var wave4 = false;
var wave5 = false;
var wave6 = false;
var wave7 = false;
var wave8 = false;
var wave9 = false;
var wave10 = false;
var boss1 = false;
var boss2 = false;
var boss3 = false;
var boss4 = false;
var boss5 = false;
var boss6 = false;
var boss7 = false;
var boss8 = false;
var boss9 = false;
var boss10 = false;
var boss11 = false;
var boss12 = false;
var blobsalotText = false;
var lichText = false;
var skipB10 = false;
var tR = 0;
var talked = false;
var charging = 0;
var charge = false;
var charged = 0;
var chargeText = 0;
var spin = -1;
var pound = -1;
var targx = px;
var targy = py;
var catax = px;
var catay = py;
var dtargx = px;
var dtargy = py;
var prex = 0;
var prey = 0;
var cycle = "charge";
var weapon = "sword and shield";
var lichAttack = "illusion ring";
var soul = 0;
var cycle2 = "shoot";
var pcharge = 0;
var pcharging = 0;
var prep = false;
var teleporting = false;
var bigSize = 0;
var testFrame2 = 0;
var testFrame3 = 0;
var darkAttack = "fire";
var darkCharge = 0;
var transform = false;
var inBonus = false;
var beamy;
var hurt = 0;
var dswitch = 0;
var dfire = 100;
var dslash = 65;
var dpound = 80;
var phase2 = false;
var dtents = [];
var darkLightning = false;
var state;
var Pinvincible = false;
var darknessAlpha = 0;
var whiteAlpha = 0;
var statsy = 0;
var statsyInc = 0;
var Lhandx = 999999999;
var Lhandy = 999999999;
var Rhandx = 999999999;
var Rhandy = 999999999;
var texty = 0;
var corrupted = 0;
var darkMode = "OFF";
var checkMode = false;
var showHealth = false;
var theOkLol = false;
var handDamageCoolDown1;
var handDamageCoolDown2;
var pew1x = 0;
var pew2x = 400;
var pewSwap = false;
var secretVar = false;
var blessing = 0;
var godMode = false; 
var darkSummon = "world1";
var angle = frame*40;
var x = sin(angle)*10;
var y = cos(angle)*10;
var tintr = 300;
var rinc = false;
var tintg = 200;
var ginc = false;
var tintb = 100;
var binc = false;
var kingBlobAttack = "triple attack";
var kingBlobBurst = 0;
var spectral = false;
var crusherAttack = "lightning";
var randPlace = 0;
var randPlace2 = 0;
var scroll = "down";
var numLightning = 0;
var graby = 0;
var grabx = 0;
var queenAttack = "wind";
var way = "right";
var thrymAttack = "ice shot";
var mirageAttack = "sandstorm";
var krakenAttack = "tentacle";
var mirageHP = 0;
var spikeAx;
var spikeAy;
var spikeBx;
var spikeBy;
var spikeCx;
var spikeCy;
var chargeUp = 0;
var splitt = false;
var comeBack = false;
var warriorDown = false;
var defenderDown = false;
var spawned = false;
var oneLife = "OFF";
var category = "";
var seconds = floor(totalFrame/60);
var hours = floor(seconds / (60*60));
seconds -= hours * (60*60);
var minutes = floor(seconds / 60);
seconds -= minutes * 60;
var hoursStr = str(hours);
var minutesStr = str(minutes).padStart(2, "0");
var secondsStr = str(seconds).padStart(2, "0");
var numPharaohs = 0;
var mirageFrame = 0;
var mirageSummon = 5000000;
var mirageRevive = 123123131231231;
var blink = 0;
var tentx = 2000000;
var tenty = 5000000;
var tentsAlive = 1;
var tentDamaged = 0;
var tentDed = false;
var boatx = 0;
var boaty = 200;
var flooded = false;
var halfHealth = false;
var geyser = false;
var firstMirageDeath = false;
var bitten = false;
var fire = 0;
var xfire = 0;
var yfire = 0;
var arrLight = [];
var arrSlash = [];
var ontop = false;
var blackHoleHeld = false;
var altarAttack = "pulse";
var order = [];
var mechanize = 0;
var altarDead = false;
var showYggdrasil = false;
var yggAttack = "poison stream";
var yggSummon = false;
var noBody = false;
var deadPool = [];
var necromancers = 0;
var necroDied = false;
var blobsalotOut = false;
var blobolichOut = false;
var blobsalot = [];
var blobolich = [];
var blobsalotDmg = 0;
var blobolichDmg = 0;
var swipe = 0;
var swiped = 0;
var cloneTp = 0;
var soulLink = 0;
var dark =  0;
var metx = 0;
var mety = 0;
var metShadow = 0;
var metx2 = 0;
var mety2 = 0;
var metShadow2 = 0;
var metx3 = 0;
var mety3 = 0;
var metShadow3 = 0;
var rotation = 0;
var soulAttack = 100;

frameRate(60);

var dotx = [];
var doty = [];

for (var i = 0 ; i < 100 ; i++) {
    dotx.push( random(0, 400) );
    doty.push( random(0, 400) );
}

var pImg = getImage("avatars/spunky-sam");
var poisonBlob = createGraphics(pImg.width, pImg.height, JAVA2D);
poisonBlob.background(255, 255, 255, 0);
poisonBlob.image(pImg);

var hImg = getImage("avatars/leafers-tree");
var lavaHound = createGraphics(hImg.width, hImg.height, JAVA2D);
lavaHound.background(255, 255, 255, 0);
lavaHound.image(hImg);

var wImg = getImage("avatars/leafers-tree");
var wrathHound = createGraphics(wImg.width, wImg.height, JAVA2D);
wrathHound.background(255, 255, 255, 0);
wrathHound.image(wImg);

var bImg = getImage("avatars/piceratops-ultimate");
var bodySnatcher = createGraphics(bImg.width, bImg.height, JAVA2D);
bodySnatcher.background(255, 255, 255, 0);
bodySnatcher.image(bImg);

var deImg = getImage("avatars/robot_male_3");
var demon = createGraphics(deImg.width, deImg.height, JAVA2D);
demon.background(255, 255, 255, 0);
demon.image(deImg);

var dImg = getImage("avatars/spunky-sam");
var darkBlob = createGraphics(dImg.width, dImg.height, JAVA2D);
darkBlob.background(255, 255, 255, 0);
darkBlob.image(dImg);

var pImg = getImage("avatars/piceratops-ultimate");
var player = createGraphics(pImg.width, pImg.height, JAVA2D);
player.background(255, 255, 255, 0);
player.image(pImg);

var rImg = getImage("avatars/spunky-sam-green");
var rainbowBlob = createGraphics(rImg.width, rImg.height, JAVA2D);
rainbowBlob.background(255, 255, 255, 0);
rainbowBlob.image(rImg);

var gImg = getImage("avatars/spunky-sam");
var ghostBlob = createGraphics(gImg.width, gImg.height, JAVA2D);
ghostBlob.background(255, 255, 255, 0);
ghostBlob.image(gImg);

var dark = getImage("avatars/starky-ultimate");
var darkLord = createGraphics(dark.width, dark.height, JAVA2D);
darkLord.background(255, 255, 255, 0);
darkLord.image(dark);

var nImg = getImage("avatars/spunky-sam");
var necromancer = createGraphics(nImg.width, nImg.height, JAVA2D);
necromancer.background(255, 255, 255, 0);
necromancer.image(nImg);



var ghost = createGraphics(100,100, JAVA2D);

var monsters = {
    blob : {
        name: "blob",
        image:"avatars/spunky-sam-green",
        maxHp: 100,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1,
    },
    miniBlob : {
        name: "miniBlob",
        image: "avatars/spunky-sam-green",
        maxHp: 10,
        damage: 1,
        width: 20,
        height: 20,
        speed: 2,
    },
    kingBlob : {
        name: "kingBlob",
        image: "avatars/spunky-sam-green",
        maxHp: 1000,
        damage: 1,
        width: 300,
        height: 300,
        speed: 0,
    },
     fireBlob : {
        name: "fireBlob",
        image: "avatars/spunky-sam-red",
        maxHp: 150,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1,
    },
    elBlob : {
        name: "elBlob",
        image: "avatars/spunky-sam-orange",
        maxHp: 50,
        damage: 1,
        width: 20,
        height: 20,
        speed: 1.5,
    },
    robot : {
        name: "robot",
        image: "avatars/robot_male_1",
        maxHp: 300,
        damage: 1,
        width: 50,
        height: 50,
        speed: 0.8,
    },
    crusher2000 : {
        name: "crusher2000",
        image: "",
        maxHp: 2000,
        damage: 0,
        width: 300,
        height: 100,
        speed: 0,
    },
    skyBlob : {
        name: "skyBlob",
        image: "avatars/spunky-sam",
        maxHp: 300,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1.5,
    },
    miniSkyBlob : {
        name: "miniSkyBlob",
        image: "avatars/spunky-sam",
        maxHp: 100,
        damage: 1,
        width: 20,
        height: 20,
        speed: 2,
    },
    cloud : {
        name: "cloud",
        image: "",
        maxHp: 100,
        damage: 1,
        width: 80,
        height: 50,
        speed: 0.8,
    },
    elcloud : {
        name: "elcloud",
        image: "",
        maxHp: 150,
        damage: 1,
        width: 80,
        height: 50,
        speed: 1.2,
    },
    queenCloud : {
        name: "queenCloud",
        image: "",
        maxHp: 3000,
        damage: 0,
        width: 400,
        height: 100,
        speed: 0,
    },
    iceBlob : {
        name: "iceBlob",
        image: "avatars/spunky-sam",
        maxHp: 700,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1,
    },
    livIce : {
        name: "livIce",
        image: "",
        maxHp: 50,
        damage: 2,
        width: 80,
        height: 80,
        speed: 1.8,
    },
    fog : {
        name: "fog",
        image: "",
        maxHp: 450,
        damage: 1,
        width: 100,
        height: 60,
        speed: 2,
    },
    frostBeast : {
        name: "frostBeast",
        image: "",
        maxHp: 4000,
        damage: 1,
        width: 100,
        height: 100,
        speed: 1,
    },
    waterBlob : {
        name: "waterBlob",
        image: "avatars/spunky-sam",
        maxHp: 400,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1,
    },
    mudBlob : {
        name: "mudBlob",
        image: "avatars/spunky-sam-orange",
        maxHp: 600,
        damage: 2,
        width: 50,
        height: 50,
        speed: 0.8,
    },
    squid : {
        name: "squid",
        image: "avatars/orange-juice-squid",
        maxHp: 500,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1,
    },
    kraken : {
        name: "kraken",
        image: "avatars/orange-juice-squid",
        maxHp: 5000,
        damage: 1,
        width: 400,
        height: 400,
        speed: 0,
    },
    sandBlob : {
        name: "sandBlob",
        image: "avatars/spunky-sam-orange",
        maxHp: 1000,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    glassBlob : {
        name: "glassBlob",
        image: "avatars/spunky-sam",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1,
    },
    mummy : {
        name: "mummy",
        image: "avatars/starky-seed",
        maxHp: 750,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    miniMummy : {
        name: "miniMummy",
        image: "avatars/starky-seed",
        maxHp: 250,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    sarcophagus : {
        name: "sarcophagus",
        image: "",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 85,
        speed: 1,
    },
    sandKing : {
        name: "sandKing",
        image: "avatars/primosaur-ultimate",
        maxHp: 6000,
        damage: 2,
        width: 70,
        height: 70,
        speed: -5,
    },
    jungleBlob : {
        name: "jungleBlob",
        image: "avatars/spunky-sam-green",
        maxHp: 800,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    jungleYoungling : {
        name: "jungleYoungling",
        image: "avatars/spunky-sam-green",
        maxHp: 250,
        damage: 2,
        width: 20,
        height: 20,
        speed: 2,
    },
    roboMonkey : {
        name: "roboMonkey",
        image: "avatars/robot_male_1",
        maxHp: 800,
        damage: 1,
        width: 50,
        height: 50,
        speed: 2,
    },
    weed : {
        name: "weed",
        image: "",
        maxHp: 500,
        damage: 0,
        width: 50,
        height: 50,
        speed: 0.1,
    },
    altar : {
        name: "altar",
        image: "",
        maxHp: 7000,
        damage: 2,
        width: 200,
        height: 200,
        speed: 0,
    },
    poisonBlob : {
        name: "poisonBlob",
        image: "avatars/spunky-sam",
        maxHp: 1000,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    poisonMiniBlob : {
        name: "poisonMiniBlob",
        image: "avatars/spunky-sam",
        maxHp: 500,
        damage: 1,
        width: 20,
        height: 20,
        speed: 1.8,
    },
    miniPoisonMiniBlob : {
        name: "miniPoisonMiniBlob",
        image: "avatars/spunky-sam",
        maxHp: 300,
        damage: 1,
        width: 20,
        height: 20,
        speed: 1.8,
    },
    mosquito : {
        name: "mosquito",
        image: "",
        maxHp: 5,
        damage: 1,
        width: 10,
        height: 10,
        speed: 1.5,
    },
    bigMosquito : {
        name: "bigMosquito",
        image: "",
        maxHp: 500,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1.2,
    },
    poisonWeed : {
        name: "poisonWeed",
        image: "",
        maxHp: 800,
        damage: 0,
        width: 50,
        height: 50,
        speed: 0.1,
    },
    poisonFlower : {
        name: "poisonFlower",
        image: "",
        maxHp: 5000,
        damage: 1,
        width: 325,
        height: 325,
        speed: 0,
    },
    miniPoisonFlower : {
        name: "miniPoisonFlower",
        image: "",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 50,
        speed: 0,
    },
    lavaBlob : {
        name: "lavaBlob",
        image: "avatars/spunky-sam-red",
        maxHp: 1250,
        damage: 3,
        width: 50,
        height: 50,
        speed: 1,
    },
    lavaHound : {
        name: "lavaHound",
        image: "avatars/leafers-tree",
        maxHp: 1000,
        damage: 2,
        width: 50,
        height: 50,
        speed: 2,
    },
    bomb : {
        name: "bomb",
        image: "",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1.5,
    },
    golem : {
        name: "golem",
        image: "avatars/robot_male_3",
        maxHp: 1500,
        damage: 3,
        width: 50,
        height: 50,
        speed: 0.5,
    },
    castle : {
        name: "castle",
        image: "",
        maxHp: 9000,
        damage: 0,
        width: 500,
        height: 500,
        speed: 0,
    },
    brokenCastle : {
        name: "brokenCastle",
        image: "",
        maxHp: 90000000000000,
        damage: 0,
        width: 500,
        height: 500,
        speed: 0,
    },
    darkBlob : {
        name: "darkBlob",
        image: "avatars/spunky-sam",
        maxHp: 1250,
        damage: 3,
        width: 50,
        height: 50,
        speed: 1,
    },
    ghostBlob : {
        name: "ghostBlob",
        image: "avatars/spunky-sam",
        maxHp: 800,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    sirBlobsalot : {
        name: "sirBlobsalot",
        image: "avatars/spunky-sam-green",
        maxHp: 5000,
        damage: 5,
        width: 60,
        height: 60,
        speed: 1,
    },
    dedalot : {
        name: "dedalot",
        image: "avatars/spunky-sam-green",
        maxHp: 5000000000000,
        damage: 0,
        width: 60,
        height: 60,
        speed: 0,
    },
    darkMage : {
        name: "darkMage",
        image: "avatars/spunky-sam",
        maxHp: 800,
        damage: 1,
        width: 50,
        height: 50,
        speed: -1,
    },
    doppelganger : {
        name: "doppelganger",
        image: "avatars/piceratops-ultimate",
        maxHp: 500,
        damage: 1,
        width: 50,
        height: 50,
        speed: 2,
    },
    archBlobomancer : {
        name: "archBlobomancer",
        image: "avatars/spunky-sam",
        maxHp: 5000,
        damage: 1,
        width: 55,
        height: 55,
        speed: -2,
    },
    dedmancer : {
        name: "dedmancer",
        image: "avatars/spunky-sam",
        maxHp: 500000000000000000,
        damage: 0,
        width: 55,
        height: 55,
        speed: 0,
    },
    darkLord : {
        name: "darkLord",
        image: "avatars/starky-ultimate",
        maxHp: 10000,
        damage: 3,
        width: 65,
        height: 65,
        speed: 2,
    },
    TRUE_DARKLORD : {
        name: "TRUE_DARKLORD",
        image: "",
        maxHp: 999999999999999,
        damage: 0,
        width: 200,
        height: 150,
        speed: 0,
    },
    damageCloudPleaseIgnore : {
        name: "damageCloudPleaseIgnore",
        image: "",
        maxHp: 99999999999999999999999999999999999999999999999999,
        damage: 10,
        width: 500,
        height: 500,
        speed: 0,
    },
    inkBlob : {
        name: "inkBlob",
        image: "avatars/spunky-sam",
        maxHp: 600,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    rainbowBlob : {
        name: "rainbowBlob",
        image: "avatars/spunky-sam-green",
        maxHp: 1500,
        damage: 4,
        width: 50,
        height: 50,
        speed: 1.5,
    },
    ULTRAMech : {
        name: "ULTRAMech",
        image: "avatars/robot_male_3",
        maxHp: 2500,
        damage: 4,
        width: 50,
        height: 50,
        speed: 1,
    },
    darkKingBlob : {
        name: "darkKingBlob",
        image: "avatars/spunky-sam-green",
        maxHp: 5000,
        damage: 4,
        width: 300,
        height: 300,
        speed: 0,
    },
    crusher10000 : {
        name: "crusher10000",
        image: "",
        maxHp: 5000,
        damage: 0,
        width: 100,
        height: 300,
        speed: 0,
    },
    livingTornado : {
        name: "livingTornado",
        image: "",
        maxHp: 1000,
        damage: 0,
        width: 100,
        height: 100,
        speed: 1.5,
    },
    livingBlizzard : {
        name: "livingBlizzard",
        image: "",
        maxHp: 1250,
        damage: 2,
        width: 100,
        height: 100,
        speed: 0.8,
    },
    mist : {
        name: "mist",
        image: "",
        maxHp: 800,
        damage: 2,
        width: 100,
        height: 60,
        speed: 2,
    },
    queenThunderCloud : {
        name: "queenThunderCloud",
        image: "",
        maxHp: 5000,
        damage: 0,
        width: 400,
        height: 400,
        speed: 0,
    },
    thrym : {
        name: "thrym",
        image: "",
        maxHp: 5000,
        damage: 3,
        width: 100,
        height: 100,
        speed: 1,
    },
    frozenWarrior : {
        name: "frozenWarrior",
        image: "avatars/spunky-sam",
        maxHp: 2000,
        damage: 4,
        width: 60,
        height: 60,
        speed: 1.5,
    },
    frozenDefender : {
        name: "frozenDefender",
        image: "avatars/spunky-sam",
        maxHp: 2000,
        damage: 2,
        width: 60,
        height: 60,
        speed: 1,
    },
    sandSquid : {
        name: "sandSquid",
        image: "avatars/orange-juice-squid",
        maxHp: 1000,
        damage: 2,
        width: 50,
        height: 50,
        speed: 1,
    },
    scarab : {
        name: "scarab",
        image: "",
        maxHp: 25,
        damage: 1.5,
        width: 10,
        height: 10,
        speed: 2,
    },
    pharaoh : {
        name: "pharaoh",
        image: "avatars/starky-tree",
        maxHp: 1750,
        damage: 2,
        width: 75,
        height: 75,
        speed: -2.5,
    },
    royalSarcophagus : {
        name: "royalSarcophagus",
        image: "",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 85,
        speed: 1,
    },
    darkMirage : {
        name: "darkMirage",
        image: "avatars/primosaur-ultimate",
        maxHp: 5000,
        damage: 3,
        width: 70,
        height: 70,
        speed: -5,
    },
    mirage : {
        name: "mirage",
        image: "avatars/primosaur-ultimate",
        maxHp: 1,
        damage: 0,
        width: 70,
        height: 70,
        speed: -5,
    },
    sandWall : {
        name: "sandWall",
        image: "",
        maxHp: 500,
        damage: 0,
        width: 90,
        height: 90,
        speed: 0,
    },
    tentacle : {
        name: "tentacle",
        image: "",
        maxHp: 1000,
        damage: 5,
        width: 50,
        height: 50,
        speed: 0,
    },
    tent : {
        name: "tent",
        image: "",
        maxHp: 9898989898798798798798,
        damage: 3,
        width: 50,
        height: 50,
        speed: 0,
    },
    apocalypseKraken : {
        name: "apocalypseKraken",
        image: "avatars/orange-juice-squid",
        maxHp: 5000,
        damage: 2,
        width: 400,
        height: 400,
        speed: 0,
    },
    infestedMosquito : {
        name: "infestedMosquito",
        image: "",
        maxHp: 5,
        damage: 2,
        width: 10,
        height: 10,
        speed: 1.5,
    },
    nightshade : {
        name: "nightshade",
        image: "",
        maxHp: 1000,
        damage: 0,
        width: 50,
        height: 50,
        speed: 0.1,
    },
    spore : {
        name: "spore",
        image: "",
        maxHp: 5,
        damage: 0,
        width: 5,
        height: 5,
        speed: 0,
    },
    vampireMosquito : {
        name: "vampireMosquito",
        image: "",
        maxHp: 1000,
        damage: 3,
        width: 50,
        height: 50,
        speed: 1.5,
    },
    ironweedHydra1 : {
        name: "ironweedHydra1",
        image: "",
        maxHp: 1000,
        damage: 0,
        width: 50,
        height: 50,
        speed: 0.1,
    },
    ironweedHydra2 : {
        name: "ironweedHydra2",
        image: "",
        maxHp: 1000,
        damage: 0,
        width: 50,
        height: 50,
        speed: 0.1,
    },
    ironweedHydra3 : {
        name: "ironweedHydra3",
        image: "",
        maxHp: 1000,
        damage: 0,
        width: 50,
        height: 50,
        speed: 0.1,
    },
    ruinedAltar : {
        name: "ruinedAltar",
        image: "",
        maxHp: 5000,
        damage: 2,
        width: 200,
        height: 200,
        speed: 0,
    },
    rottenYggdrasil : {
        name: "rottenYggdrasil",
        image: "",
        maxHp: 5000,
        damage: 1,
        width: 325,
        height: 325,
        speed: 0,
    },
    rottenStalk : {
        name: "rottenStalk",
        image: "",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 50,
        speed: 0,
    },
    wrathHound : {
        name: "wrathHound",
        image: "avatars/leafers-tree",
        maxHp: 2500,
        damage: 3,
        width: 50,
        height: 50,
        speed: 2,
    },
    demon : {
        name: "demon",
        image: "avatars/robot_male_3",
        maxHp: 1500,
        damage: 99999999,
        width: 50,
        height: 50,
        speed: 0.5,
    },
    reactor : {
        name: "reactor",
        image: "",
        maxHp: 2500,
        damage: 1,
        width: 50,
        height: 50,
        speed: 1.5,
    },
    bodySnatcher : {
        name: "bodySnatcher",
        image: "avatars/piceratops-ultimate",
        maxHp: 1500,
        damage: 1,
        width: 60,
        height: 60,
        speed: 1.5,
    },
    necromancer : {
        name: "necromancer",
        image: "avatars/spunky-sam",
        maxHp: 1000,
        damage: 1,
        width: 50,
        height: 50,
        speed: -1,
    },
    adamantFortress : {
        name: "adamantFortress",
        image: "",
        maxHp: 100000,
        damage: 0,
        width: 500,
        height: 500,
        speed: 0,
    },
    sirBlobsalotII : {
        name: "sirBlobsalotII",
        image: "avatars/spunky-sam-green",
        maxHp: 5000,
        damage: 5,
        width: 60,
        height: 60,
        speed: 1,
    },
    dedalotII : {
        name: "dedalotII",
        image: "avatars/spunky-sam-green",
        maxHp: 5000000000000,
        damage: 0,
        width: 60,
        height: 60,
        speed: 0,
    },
    archBlobolich : {
        name: "archBlobolich",
        image: "avatars/spunky-sam",
        maxHp: 5000,
        damage: 1,
        width: 55,
        height: 55,
        speed: -2,
    },
    dedlich : {
        name: "dedlich",
        image: "avatars/spunky-sam",
        maxHp: 500000000000000000,
        damage: 0,
        width: 55,
        height: 55,
        speed: 0,
    },
    clone : {
        name: "clone",
        image: "avatars/spunky-sam",
        maxHp: 999999999999,
        damage: 0,
        width: 55,
        height: 55,
        speed: -2,
    },
    ringClone : {
        name: "ringClone",
        image: "avatars/spunky-sam",
        maxHp: 999999999999,
        damage: 1,
        width: 55,
        height: 55,
        speed: 0,
    },
    confuseClone : {
        name: "confuseClone",
        image: "avatars/piceratops-ultimate",
        maxHp: 99999999999,
        damage: 1,
        width: 60,
        height: 60,
        speed: 0,
    },
};

//enemies
var es = [];
//missiles
var ms = [];
//blocks
var blocks = [];
//cloud
var clouds = [];
//ice
var ice = [];
//blubbles
var bubbles = [];
//coral
var coral = [];
//vines
var vines = [];
//poison
var poison = [];
//lava
var lava = [];

var lines = [];

var texts = [];

var keyDown = -1;
var keyJustPressed = false;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var spacePressed = false;


keyPressed = function() {
    if (keyDown !== keyCode ) {
        keyDown = keyCode;
        keyJustPressed = true;
    }
    //hot key switches
    if(pcharge<=0 && pcharging <=0){
         if ( keyCode === 49){
            attack = "fire";
         }
         if ( keyCode === 50){
            attack = "lightning";
         }
         if ( keyCode === 51){
            attack = "groundPound";
         }
         if ( keyCode === 52){
            attack = "slash";
         }
         if ( keyCode === 53 && (level > 10 || level === "???"|| inBonus === true)){
            attack = "blob cannon";
         }
         if ( keyCode === 54 && (level > 20 || level === "???"|| inBonus === true)){
            attack = "stun slash";
         }
         if ( keyCode === 55 && (level > 30 || level === "???"|| inBonus === true)){
            attack = "heal";
         }
         if ( keyCode === 56 && (level > 40 || level === "???"|| inBonus === true)){
            attack = "freezePound";
         }
         if ( keyCode === 57 && (level > 50 || level === "???"|| inBonus === true)){
            attack = "tentacle";
         }
         if ( keyCode === 48 && (level > 60 || level === "???"|| inBonus === true)){
            attack = "sand pit";
         }
         if ( keyCode === 189 && (level > 70 || level === "???"|| inBonus === true)){
            attack = "slow dart";
         }
         if ( keyCode === 187 && (level > 80 || level === "???"|| inBonus === true)){
            attack = "poison";
         }
         if ( keyCode === 80 && (level > 90 || level === "???"|| inBonus === true)){
            attack = "eruption";
         }
         if ( keyCode === 219 && (level > 95 || level === "???"|| inBonus === true)){
            attack = "charge";
         }
         if ( keyCode === 221 && (level > 100 || level === "???"|| inBonus === true)){
            attack = "restore";
         }
         
         //check for mechanized
         if(mechanize > 0){
            if(attack === "fire"){
                attack = "groundPound";
            }
            if(attack === "lightning"){
                attack = "groundPound";
            }
            if(attack === "blob cannon"){
                attack = "slash";
            }
            if(attack === "heal"){
                attack = "stun slash";
            }
            if(attack === "sand pit"){
                attack = "tentacle";
            }
            if(attack === "slow dart"){
                attack = "tentacle";
            }
            if(attack === "poison"){
                attack = "eruption";
            }
            if(attack === "restore"){
                attack = "charge";
            }   
         }
    }
    if ( key.toString() === " " ){
        spacePressed = true;
    }
    if (frame > playerPoundedFrame + 30){
        
        if ( key.toString() === "w" || key.toString() === "W"|| keyCode === UP){
            if(confuse>0){
                downPressed = true;
            }else{
                upPressed = true;
            }
        }
        if ( key.toString() === "a" || key.toString() === "A"|| keyCode === LEFT){
            if(confuse>0){
                rightPressed = true;
            }else{
                leftPressed = true;
            }
        }
        if ( key.toString() === "s" || key.toString() === "S"|| keyCode === DOWN){
            if(confuse>0){
                upPressed = true;
            }else{
                downPressed = true;
            }
        }
        if ( key.toString() === "d" || key.toString() === "D"|| keyCode === RIGHT){
            if(confuse>0){
                leftPressed = true;
            }else{
                rightPressed = true;
            }
        }
        if(level === "???"){
            if(!talked){
                if(frame < 8700){
                    upPressed = false;
                    downPressed = false;
                    leftPressed = false;
                    rightPressed = false;
                }
            }
        }
    }
    if(keyCode === 72 && level >= -1000 && level < -300) {
        if (level >= -1000 && level <= -997) {
            level = 1;
            tud = true;
            StartLevel();
        }
        if (level >= -900 && level <= -810) {
            level = 11;
            tud = true;
            StartLevel();
        }
    }
};

var sword = function(x,y){
    fill(192,192,192);
    rect(x+7.5,y+33,3,13);
    fill(232, 217, 0);
    ellipse(x+10,y+50,7,7);
    rect(x,y+30,19,4);
    fill(192,192,192);
    rect(x+6,y+12,7,18);
    noStroke(); 
    triangle(x+6,y+14,x+10,y-10,x+14,y+14);
    stroke(0, 0, 0);
    line(x+6,y+14,x+10,y-10);
    line(x+10,y-10,x+13.5,y+14);
};
var greatsword = function(x,y){
    fill(144,107,82);
    rect(x+7.5,y+33,3,13);
    fill(255, 215, 0);
    ellipse(x+10,y+50,7,7);
    rect(x,y+30,19,4);
    fill(192,192,192);
    rect(x,y-5,19,35);
    noStroke(); 
    triangle(x,y-3,x+10,y-35,x+20,y-3);
    stroke(0, 0, 0);
    line(x,y-1,x+10,y-35);
    line(x+10,y-35,x+19.5,y-1);
};
var hammer = function(x,y){
    fill(144,107,82);
    rect(x+2.5,y-3,5,72);
    fill(255, 215, 0);
    fill(192,192,192);
    rect(x-39,y-48,90,45);
};
var axe = function(x,y){
    fill(144,107,82);
    rect(x+2.5,y-3,5,72);
    fill(255, 215, 0);
    fill(192,192,192);
    beginShape();
    vertex(x+5,y-3);
    vertex(x+30,y-25);
    vertex(x+30,y+20);
    vertex(x+5,y-3);
    vertex(x-20,y-25);
    vertex(x-20,y+20);
    vertex(x+5,y-3);
    endShape();
};
var spear = function(x,y){
    fill(144,107,82);
    rect(x+2.5,y-3,3,68);
    fill(255, 215, 0);
    fill(192,192,192);
    beginShape();
    triangle(x,y-3,x+5,y-35,x+10,y-3);
    endShape();
};
var shield = function(x,y){
    fill(209, 209, 209);
    rect(x,y,10,50);
    noStroke();
    triangle(x,y+49,x+5,y+64,x+11,y+49);
    stroke(0, 0, 0);
    line(x,y+49,x+5,y+64);
    line(x+5,y+64,x+10,y+49);
};
var staff = function(x,y){
    fill(140, 91, 0);
    rect(x,y+15,5,45);
    pushMatrix();
    translate(x+3,y);
    rotate(45);
    if(level === "B10"){
        fill(48, 3, 97);
    }else{
        fill(0, 163, 250);
    }
    rect(0,0,10,10);
    popMatrix();
};
var magic = function(x,y,outer,inner,start,end,sides) {
    fill(117, 0, 105);
    beginShape();
    var deg;
    for (var i = 0; i < sides; i++) {
        deg = start + (end-start) * i / sides;
        vertex(x+cos(deg)*outer,y-sin(deg)*outer);

        deg = start + (end-start) * (i+0.5) / sides;
        vertex(x+cos(deg)*outer,y-sin(deg)*outer);

        deg = start + (end-start) * (i+0.5) / sides;
        vertex(x+cos(deg)*inner,y-sin(deg)*inner);

        deg = start + (end-start) * (i+1) / sides;
        vertex(x+cos(deg)*inner,y-sin(deg)*inner);
    }
    endShape();
    fill(145, 0, 131);
    ellipse(x,y,inner,inner);
};

var addLightning = function(x,y,time){
    var l ={
        x:x,
        y:y,
        time:time,
    };
    arrLight.push(l);
};
var addSlash = function(x,y,time, isSpineGone){
    var s ={
        x:x,
        y:y,
        time:time,
        spineGone: isSpineGone,
    };
    arrSlash.push(s);
};

var overlap = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    if ( x1 + w1 < x2 ) {   // chek left side
        return false;
    }
    if ( y1 + h1 < y2) {    // check top side
        return false;
    }
    if ( y1 > y2 + h2 ) {   // check bottom side
        return false;
    }
    if ( x1 > x2 + w2 ) {   // check right side
        return false;
    }
    return true;
};

keyReleased = function() {
    keyDown = -1;
    if ( key.toString() === " " ){
        spacePressed = false;
        blackHoleHeld = false;
    }
    if ( key.toString() === "w" || key.toString() === "W"|| keyCode === UP){
        if(confuse>0){
            downPressed = false;
        }else{
            upPressed = false;
        }
    }
    if ( key.toString() === "a" || key.toString() === "A"|| keyCode === LEFT){
        if(confuse>0){
            rightPressed = false;
        }else{
            leftPressed = false;
        }
    }
    if ( key.toString() === "s" || key.toString() === "S"|| keyCode === DOWN){
        if(confuse>0){
            upPressed = false;
        }else{
            downPressed = false;
        }
    }
    if ( key.toString() === "d" || key.toString() === "D"|| keyCode === RIGHT){
        if(confuse>0){
            leftPressed = false;
        }else{
            rightPressed = false;
        }
    }
};



var addMonster = function(xx,yy,mons){
    var e = {
        x: xx,
        y: yy,
        mon: mons,
        glass: 0,
        weakness: 0,
        resistance: 0,
        royalWeakness: 0,
        royalWeakness2: 0,
        royalWeakness3: 0,
        stun: 0,
        freeze: 0,
        slow: 0,
        poison: 0,
        bomb: 0,
        lastPoundFrame: 0,
        tp: 0,
        soul: 0,
        state: "attack",
        burst: 0,
        xpit: 4000,
        ypit: 4000,
        rx: floor(random(0,3)),
        ry: floor(random(0,3)),
        fade : 255,
        defense : "right",
        sink : false,
        sinkTime : 0,
        scarabSink : random(100,500),
        tents : tentsAlive,
        sporeDrop : 0,
        headTime : frame+random(400,600),
        hasBody : false,
        revive : 500,
        necronum : necromancers,
        cloneFire : 0,
    };
    if (mons.image !== "") {
        e.image = getImage(mons.image);
    }
    if(mons.name === "tent"){
        tentsAlive++;  
    }
    if(mons.name === "necromancer"){
        necromancers++;  
    }
    if (e.mon.name === "bomb"){
        if(level === "B6"){
            if(krakenAttack === "ships"){
                e.bomb = 0;
            }else{
                e.bomb = 100;
            }
        }else{
            e.bomb = 500; 
        }
    }
    if(e.mon.name === "reactor"){
        e.bomb = 500;   
    }
        if(level === "B6" && krakenAttack === "ships" && e.mon.name === "bomb"){
            e.hp = mons.maxHp/1.5;
        }else{
            e.hp = mons.maxHp;
        }
        if(e.mon.name === "darkMirage" && firstMirageDeath){
            e.hp/=5;   
        }
    
    // Random weakness / resistance for sarcophogus
    do{
        e.weakness = floor(random(1,4));
    }while(e.resistance === e.weakness);
    e.resistance = floor(random(1,4));
    
    
    
    e.royalWeakness = floor(random(1,10));
    do{
        e.royalWeakness2 = floor(random(1,10));
    }while(e.royalWeakness2 === e.royalWeakness);
    do{
        e.royalWeakness3 = floor(random(1,10));
    }while(e.royalWeakness3 === e.royalWeakness2 || e.royalWeakness3 === e.royalWeakness);
    
    // Add to list
    es.push(e);
};

var addMissile = function(xx,yy, speed, size, damage, red, green, blue, dark, homingTime, targetx, targety){
  var vxx = px+pw/2 - xx;  
  var vyy = py+pw/2 - yy; 
  var txx;
  var tyy;
  var tlen;
  if(targetx !== undefined){
    txx = targetx - xx;  
    tyy = targety - yy;
    tlen = sqrt(txx*txx + tyy*tyy);
    
  }
  var len = sqrt(vxx*vxx + vyy*vyy);
  
  var m = {
      x: xx,
      y: yy,
      vx: vxx/len*speed,
      vy: vyy/len*speed,
      size: size,
      damage: damage,
      red: red,
      green: green,
      blue: blue,
      splat: false,
      dist: len/speed,
      tdist: tlen/speed,
      dark: dark,
      homingTime: homingTime,
      homingErrorX: 0,
      homingErrorY: 0,
      tcheck: txx,
      tx: txx/tlen*speed,
      ty: tyy/tlen*speed,
  };
    ms.push(m);
    return m;
};

var addHPMissile = function(xx,yy, speed, size, damage, red, green, blue ){
  //no enemies
  if (es.length < 2) {
    return;  
  }
  var closest = 0;
  var closestLen = 999;
  for (var i = 1; i<es.length; i++) {
    var vxx = es[i].x - xx;  
    var vyy = es[i].y - yy;
    var len = sqrt(vxx*vxx + vyy*vyy);
    if(len < closestLen) {
        closestLen = len;
        closest = i;
    }
  }
  var vxx = es[closest].x - xx;  
  var vyy = es[closest].y - yy;  
  var len = sqrt(vxx*vxx + vyy*vyy);
  ms.push({
      x: xx,
      y: yy,
      vx: vxx/len*speed,
      vy: vyy/len*speed,
      size: size,
      damage: damage,
      red: red,
      green: green,
      blue: blue
  });
};

var addCloud = function(x,y,w,h) {
    var c = {
        x: x,
        y: y,
        w: w,
        h: h
    };
    clouds.push(c);
};

var addIce = function(x,y,w,h) {
    var c = {
        x: x,
        y: y,
        w: w,
        h: h
    };
    ice.push(c);
};

var addPoison = function(x,y,w,h) {
    var p = {
        x: x,
        y: y,
        w: w,
        h: h,
        life: 0
    };
    poison.push(p);
    return p;
};

var addLava = function(x,y,w,h) {
    var l = {
        x: x,
        y: y,
        w: w,
        h: h,
        life: 0,
    };
    lava.push(l);
    return l;
};

var addVines = function(x,y,w,h) {
    var c = {
        x: x,
        y: y,
        w: w,
        h: h
    };
    vines.push(c);
};

var addBlock = function(x, y, w, h, dir, speed){
    var b = {
        x: x,
        y: y,
        w: w,
        h: h,
        maxX : x,
        maxY : y,
        maxW : w,
        maxH : h,
        speed: speed,
        now: 0,
        dir: dir
    };
    if (dir === 1) {
        b.h = 0;
    }
    if (dir === 3) {
        b.h = 0;
        b.y += b.maxH;
    }
    blocks.push(b);
};

var addCoral = function(x,y,w,h,r,g,b) {
    var c = {
        x: x,
        y: y,
        w: w,
        h: h,
        r: r,
        g: g,
        b: b,
    };
    coral.push(c);
};

var addDtents = function(x,y,w,h,t) {
    var d = {
        x: x,
        y: y,
        w: w,
        h: h,
        time: t,
    };
    dtents.push(d);
};

var tents = [];

var doTents = function() {
    for (var i = 0; i < tents.length; i++) {
        var t = tents[i];
        if (level === 50) {
            if(es[0].hp <= 1000){
                if (t.x>400){
                    t.dx = random(-15,-1);   
                }else if (t.x<0) {
                    t.dx = random(1,15);   
                }
            }else if(es[0].hp <= 2000 && es[0].hp > 1000){
                if (t.x>400){
                    t.dx = random(-10,-1);   
                }else if (t.x<0) {
                    t.dx = random(1,10);   
                }
            }else if(es[0].hp <= 3000 && es[0].hp > 2000){
                if (t.x>400){
                    t.dx = random(-8,-1);   
                }else if (t.x<0) {
                    t.dx = random(1,8);   
                }
            }else if(es[0].hp <= 4000 && es[0].hp > 3000){
                if (t.x>400){
                    t.dx = random(-6,-1);   
                }else if (t.x<0) {
                    t.dx = random(1,6);   
                }
            }else if(es[0].hp <= 5000 && es[0].hp > 4000){
                if (t.x>400){
                    t.dx = random(-4,-1);   
                }else if (t.x<0) {
                    t.dx = random(1,4);   
                }
            }
        }
        if (level === "B6") {
            if(!flooded){
                if (t.x>400){
                    t.dx = -5;
                    if(testFrame2 >= 460){
                        tents.splice(i,1);
                    }
                }else if (t.x<0) {
                    t.dx = 10;
                }
            }else{
                if (t.x>400){
                    tents.splice(i,1);
                }else if (t.x<0) {
                    t.dx = 5;
                }
            }
        }
        t.x+=t.dx;
        fill(255, 136, 0);
        rect(t.x,t.y,t.w,t.h);
        if(overlap(t.x,t.y,t.w,t.h,px,py,pw,ph)){
            if(level === "B6"){
                HP -= 3;
            }else{
                HP -=1;
            }
            Phurt = true;
            grab = true;
        }
    }
};

var innitTents = function() {
    tents = [];
    if(level === "B6"){
        if(!flooded){
            for (var i = 0; i < 5; i++){
                tents.push({
                x:400+150*i,
                y:50+i*78,
                w:40000,
                h:40,
                dx:1
                });
            }
        }else{
            for (var i = 0; i < 5; i++){
                if(i === randPlace){
                    i++;   
                }
                tents.push({
                x:400,
                y:50+i*78,
                w:40000,
                h:40,
                dx:-5
                });
            }
        }
    }else{
        for (var i = 0; i < 5; i++){
            tents.push({
            x:300,
            y:50+i*78,
            w:40000,
            h:40,
            dx:1
            });
        }
    }
};

var addText = function(startFrame, str, speed, x, y, w, r, g, b){
    var t = {
        startFrame:startFrame,
        str:str,
        speed:speed,
        x:x,
        y:y,
        w:w,
        r:r,
        g:g,
        b:b,
    };
    texts.push(t);
};

var HitLine = function(tryX, tryY, width, height, x1, y1, x2, y2) {
    return overlap(tryX, tryY, width, height, x1 < x2 ? x1 : x2, y1 < y2 ? y1 : y2, abs(x2-x1), abs(y2-y1) );
};

var HitLines = function(tryX, tryY, width, height) {
    for ( var i = 0 ; i < lines.length ; i++ ) {
        if (HitLine( tryX, tryY, width, height, lines[i][0],  lines[i][1],  lines[i][2],  lines[i][3] ) ) {
            return true;
        }
    }
    return false;
};

var runPlant = function( e ) {
    if(e.mon.name === "ironweedHydra3"){
        e.charge=0;   
    }
    if (!e.charge) {
        // 0 charge aims at player
        
        // Use trigonometry to set the direction
        var dx = px - e.x;
        var dy = py - e.y;
        
        e.mouthDir = atan2( dy, dx );
        
        e.charge = 1;
    } else if (e.charge > 0) {
        // Positive charge is running out
        e.charge += 5;
        if(e.mon.name === "rottenStalk" && numinFlowers <= 1){
            e.charge += 5;
        }
        if(e.mon.name === "ironweedHydra1"){
            if (e.charge > 250) {
                // start retracting
                e.charge = -e.charge;
            }
        }else if(e.mon.name === "ironweedHydra2"){
            if (e.charge > 100) {
                // start retracting
                e.charge = -e.charge;
            }
        }else if(e.mon.name === "rottenStalk"){
            if (e.charge > 250) {
                // start retracting
                e.charge = -e.charge;
            }
        }else{
            if (e.charge > 150) {
                // start retracting
                e.charge = -e.charge;
            }
        }
    } else if (e.charge < 0) {
        // Negative charge are slowly retracting
        e.charge += 2;
        if(e.mon.name === "rottenStalk" && numinFlowers <= 1){
            e.charge += 2;
        }
        if (e.charge > 0) {
            e.charge = 0;
        }
    }
    
    // Find the position of the head
    var x = e.x + cos(e.mouthDir) * abs(e.charge);
    var y = e.y + sin(e.mouthDir) * abs(e.charge);
    
    var size = 60;
    
    if (overlap(px, py, pw, ph, x-size/2, y-size/2, size, size) && e.charge < 0 && e.hp <= e.mon.maxHp/2 && blobsalotOut) {
        var tryx = px-cos(e.mouthDir)*5;
        var tryy = py-sin(e.mouthDir)*5;    
        if(!HitLines(tryx,tryy,pw,ph)) {
            px = tryx;
            py = tryy;
        }
        e.charge+=4;
        x = e.x + cos(e.mouthDir) * abs(e.charge);
        y = e.y + sin(e.mouthDir) * abs(e.charge);
    }
    
    if(e.mon.name === "sirBlobsalotII"){
        if(px>=e.x){
            x+=60;
        }
    }
    
    if (overlap(px, py, pw, ph, x-size/2, y-size/2, size, size)) {
        HP -= 5;
        if(e.mon.name === "poisonWeed"){
            poisonFrame = frame + 200;
        }
        if(e.mon.name === "nightshade"){
            poisonFrame = frame + 250;
            HP -= 3;
        }
        if (e.mon.name === "ironweedHydra2"){
            HP-=15;
        }
        if (e.mon.name === "sirBlobsalotII"){
            HP-=5;
        }
        Phurt = true;
    }
    
    // draw leash
    strokeWeight(8);
    if(e.mon.name === "rottenStalk"){
        line(x, y, e.x+e.mon.width/2, e.y+e.mon.height/2);
    }else{
        if(e.mon.name === "sirBlobsalotII"){
            if(px>=e.x){
                line(x, y, e.x+60, e.y);
            }else{
                line(x, y, e.x, e.y);
            }
        }else{
            line(x, y, e.x, e.y);
        }
    }
    strokeWeight(1);
    
    var mouthDir = e.mouthDir;
    
    var biteSpeed = 8;
    // The mouth will go between 0 and 90 degrees open, then back to 0.
    var mouthAngle = abs( (frame*biteSpeed % 180) - 90 );
    
    var angle1 = mouthDir + mouthAngle / 2;
    var angle2 = mouthDir + 360 -  mouthAngle / 2;
    // draw the circle part
    if(e.mon.name === "poisonWeed"){
        fill(49, 6, 102);
    }else if (e.mon.name === "weed"){
        fill(6, 102, 16);
    }else if (e.mon.name === "nightshade"){
        fill(0, 0, 0);
    }else if (e.mon.name === "ironweedHydra1"){
        fill(158, 158, 158);
    }else if (e.mon.name === "ironweedHydra2"){
        fill(158, 158, 158);
    }else if (e.mon.name === "ironweedHydra3"){
        fill(158, 158, 158);
    }else if (e.mon.name === "rottenStalk"){
        fill(183, 255, 181);
    }
    arc( x, y, size, size,  angle1, angle2 );
    // draw the lines
    line(x,y, x + size/2 * cos(angle1), y + size/2 * sin(angle1) );
    line(x,y, x + size/2 * cos(angle2), y + size/2 * sin(angle2) );
    
};

StartLevel = function() {
    if (attack === "restore" && level <= 100){
        attack="fire";  
    }else if (attack === "charge" && level <= 95){
        attack="fire";  
    }else if (attack === "eruption" && level <= 90){
        attack="fire";   
    }else if (attack === "poison" && level <= 80){
        attack="fire";   
    }else if (attack === "slow dart" && level <= 70){
        attack = "fire";
    }else if (attack === "sand pit" && level <= 60){
        attack="fire";   
    }else if (attack === "tentacle" && level <= 50){
        attack="fire";   
    }else if (attack === "freezePound" && level <= 40){
        attack="fire";
    }else if (attack === "heal" && level <= 30){
        attack="fire";
    }else if (attack === "stun slash" && level <= 20){
        attack="fire";
    }else if (attack === "blob cannon" && level <= 10){
        attack="fire";
    }
    if(level === 1){
        underText = "Press 1,2,3,and 4 to switch attack!";
        underTextTime = 1000;
    }else if(level === 11){
        underText = "New move! Press 5 to switch to it!";
        underTextTime = 1000;
    }else if(level === 21){
        underText = "New move! Press 6 to switch to it!";
        underTextTime = 1000;
    }else if(level === 31){
        underText = "New move! Press 7 to switch to it!";
        underTextTime = 1000;
    }else if(level === 41){
        underText = "New move! Press 8 to switch to it!";
        underTextTime = 1000;
    }else if(level === 51){
        underText = "New move! Press 9 to switch to it!";
        underTextTime = 1000;
    }else if(level === 61){
        underText = "New move! Press 0 to switch to it!";
        underTextTime = 1000;
    }else if(level === 71){
        underText = "New move! Press - to switch to it!";
        underTextTime = 1000;
    }else if(level === 81){
        underText = "New move! Press = to switch to it!";
        underTextTime = 1000;
    }else if(level === 91){
        underText = "New move! Press P to switch to it!";
        underTextTime = 1000;
    }else if(level === 96){
        underText = "New move! Press [ to switch to it!";
        underTextTime = 1000;
    }else if(level === 101){
        underText = "New move! Press ] to switch to it!";
        underTextTime = 1000;
    }else if(level === 102 && !talked && !phase2){
        underText = "Press k to skip the cutscene (Restore will not work during the cutscene)";
        underTextTime = 400;
    
    }else if(level === "???"&& !talked){
        underText = "Press k to skip the cutscene";
        underTextTime = 600;
    }else if(level === "B3" || level === "B4"){
        underText = "Sand pits cannot be used in the sky ¯\\\\_(ツ)_/¯";
        underTextTime = 400;
    }else if(level === "B10" && !ballistaWait){
        underText = "Press k to skip the cutscene (Restore will not work during the cutscene)";
        underTextTime = 400;
    
    }else if(level === 90 && !ballistaWait){
        underText = "Press k to skip the cutscene";
        underTextTime = 400;
    
    }else{
        underTextTime = 0;   
    }
    frame = 0;
    testFrame = 0;
    testFrame2 = 0;
    testFrame3 = 0;
    mirageFrame = 0;
    mirageSummon = 5000000;
    mirageRevive = 123123131231231;
    tempound = 0;
    ropound = 0;
    tR = 0;
    blackHoleHeld = false;
    if(level === "B1" ||level === "B2" ||level === "B3" ||level === "B4" ||level === "B5" ||level === "B6" ||level === "B7" ||level === "B8" ||level === "B9" ||level === "B10"){
        inBonus = true;   
    }else{
        inBonus = false;   
    }
    if((level === 102 || level === "???") && (talked||phase2)){
        if(level !== "???"){
            talked = true;
            transform = true; 
        }else{
            if(talked){
               talked = true;
            }
        }
    }else{
        talked = false;
        transform = false;
    }
    if(level === "???" && talked){
        darknessAlpha = 0;   
    }else if(level === "???" && !talked){
        darknessAlpha = 255;   
    }else{
        darknessAlpha = 255;
    }
    whiteAlpha = 0;
    if(level === "???"){
        if(talked){
            statsy = 350; 
        }else{
            statsy = 0;   
        }
    }else if(level === "angel" || level === "the end"){
        statsy = 1231;
    }else{
        statsy = 0;   
    }
    blessing = 0;
    weapon = "sword and shield";
    lichAttack = "illusion ring";
    halfHealth = false;
    necromancers = 0;
    pew1x = 0;
    pew2x = 400;
    pewSwap = false;
    handDamageCoolDown1 = 0;
    handDamageCoolDown2 = 0;
    pitFrame = -400;
    pitFrame2 = -400;
    pitFrame3 = -400;
    tents = [];
    dtents = [];
    air = maxAir;
    charging = 0;
    fire = 0;
    xfire = 0;
    yfire = 0;
    deadPool = [];
    arrLight = [];
    arrSlash = [];
    soulAttack = 100;
    decay = 0;
    charged = 0;
    cloneTp = 0;
    chargeText = 0;
    blobsalotOut = false;
    blobolichOut = false;
    blobsalot = [];
    blobolich = [];
    blobsalotDmg = 0;
    blobolichDmg = 0;
    targx = px;
    targy = py;
    catax = px;
    catay = py;
    swipe = 0;
    swiped = 0;
    dfire = 100;
    noBody = false;
    dpound = 80;
    ontop = false;
    soulLink = 0;
    dark = 0;
    metx = 0;
    mety = 0;
    metShadow = 0;
    metx2 = 0;
    mety2 = 0;
    metShadow2 = 0;
    metx3 = 0;
    mety3 = 0;
    metShadow3 = 0;
    rotation = 0;
    darkLightning = 0;
    mechanize = 0;
    kingBlobAttack = "triple attack"; 
    spectral = false; 
    kingBlobBurst = 0;
    crusherAttack = "lightning";
    randPlace = 0;
    randPlace2 = 0;
    queenAttack = "hailstorm";
    way = "right";
    thrymAttack = "ice shot";
    mirageAttack = "sandstorm";
    firstMirageDeath = false;
    krakenAttack = "tentacle";
    geyser = false;
    flooded = false;
    tentx = 200000;
    tenty = 450;
    boatx = -100;
    boaty = 200;
    tentsAlive = 1;
    tentDamaged = 0;
    tentDed = false;
    altarDead = false;
    showYggdrasil = false;
    altarAttack = "pulse";
    yggAttack = "petal barrage";
    yggSummon = false;
    order = [];
    scroll = "down";
    numPharaohs = 0;
    spawned = false;
    warriorDown = false;
    defenderDown = false;
    splitt = false;
    comeBack = false;
    chargeUp = 0;
    grabx = -400;
    graby = 0;
    numLightning = 0;
    dtargx = px;
    dtargy = py;
    prex = 0;
    prey = 0;
    pcharge = 0;
    pcharging = 0;
    prep = false;
    hurt = 0;
    tintr = 300;
    rinc = false;
    tintg = 200;
    ginc = false;
    tintb = 100;
    binc = false;
    darkSummon = "world1";
    charge = false;
    statsyInc = 0;
    if(talked){
        texty = 20;   
    }else{
        texty = 0;   
    }
    if(level === "???"){
        Lhandx = -142;
        Lhandy = -237;
        Rhandx = 542;
        Rhandy = -237;   
    }else{
        Lhandx = 99999999999;
        Lhandy = 99999999999;
        Rhandx = 99999999999;
        Rhandy = 99999999999;  
    }
    if(level === "???"){
        darkAttack = "blob cannon";
    }else{
        if(!phase2){
            darkAttack = "fire";
        }else{
            darkAttack = "lightning";
        }
    }
    darkCharge = 0;
    spin = -1;
    pound = -1;
    soul = 0;
    dswitch = 0;
    cycle = "charge";
    cycle2 = "shoot";
    superFreeze = false;
    fall = false;
    beamy = -2500;
    cloudSummon1 = false;
    cloudSummon2 = false;
    poisonFlowerSummon = false;
    altarWait = true;
    altarWait2 = true;
    teleporting = false;
    freezeDelay = 180;
    bigSize = 0;
    pw = 60;
    ph = 60;
    if(level !== 90 && level !== "B10"){
        skipB10 = false;   
    }
    if(skipB10){
        text1 = true;
        text2 = true;
        text3 = true;
        ballistaWait = true;
    }else{
        text1 = false;
        text2 = false;
        text3 = false;
        ballistaWait = false;
    }
    text4 = false;
    text5 = false;
    text6 = false;
    text7 = false;
    text8 = false;
    text9 = false;
    text10 = false;
    text11 = false;
    text12 = false;
    text13 = false;
    text14 = false;
    text15 = false;
    dedText = false;
    castleDed= false;
    dying = false;
    wave1 = false;
    wave2 = false;
    wave3 = false;
    wave4 = false;
    wave5 = false;
    wave6 = false;
    wave7 = false;
    wave8 = false;
    wave9 = false;
    wave10 = false;
    boss1 = false;
    boss2 = false;
    boss3 = false;
    boss4 = false;
    boss5 = false;
    boss6 = false;
    boss7 = false;
    boss8 = false;
    boss9 = false;
    boss10 = false;
    boss11 = false;
    boss12 = false;
    blobsalotText = false;
    lichText = false;
    if(phase2){
        theOkLol = true;   
    }else{
        theOkLol = false;   
    }
    for( var i = 0; i < es.length; i++) {
        var e = es[i];
        if(e.mon.name === "sirBlobsalot"){
            e.mon.speed = 1;
            e.mon.damage = 5;
        }
        if(e.mon.name === "sirBlobsalotII"){
            e.mon.speed = 1;
            e.mon.damage = 5;
        }
    }
    clouds = [];
    ice = [];
    bubbles = [];
    coral = [];
    vines = [];
    poison = [];
    lava = [];
    texts = [];
    if(level === "???" || level === "angel" || level === "the end"){
        lines= [
        [0,0,400,0],
        [400,400,0,400],
        [0,0,0,400],
        [400,400,400,0]];
    }else{
        lines= [
        [0,0,400,0],
        [400,400,0,400],
        [0,0,0,400],
        [400,400,400,0],
        [0,50,400,50]];
    }
    if (level < 11) {
        backr = 102;
        backg = 97;
        backb = 97;
        if (level > 0){
            lines = lines.concat([
                [100,50,100,200],
                [100,200,200,200],
                [200,200,200,50],
                [220,400,220,320],
                [220,320,300,320],
                [300,320,300,400],
            ]);
        }
    }else if (level < 20) {
    backr = 82;
    backg = 49;
    backb = 0;
    lines = lines.concat([
        [0,275,150,275],
        [150,275,150,400],
        [250,50,250,175],
        [250,175,400,175],
    ]);
    }else if (level === 20) {
        backr = 82;
        backg = 49;
        backb = 0;
    }else if (level < 31) {
        backr = 66;
        backg = 194;
        backb = 245;
    }
    else if (level < 41) {
        backr = 131;
        backg = 182;
        backb = 252;
    }
    else if (level < 51) {
        backr = 0;
        backg = 13;
        backb = 255;
    }
    else if (level < 60) {
        backr = 181;
        backg = 145;
        backb = 0;
    lines = lines.concat([
     [125,300,125,150],
     [125,300,275,300],
     [125,150,275,150],
     [275,150,275,300],
    ]);
    }
    else if (level === 60) {
        backr = 181;
        backg = 145;
        backb = 0;
    }
    else if (level < 71) {
        backr = 32;
        backg = 158;
        backb = 0;
    }
    else if (level < 81) {
        backr = 108;
        backg = 0;
        backb = 166;
    }
    else if (level < 90) {
        backr = 108;
        backg = 63;
        backb = 36;
    }
    else if (level === 90) {
        backr = 108;
        backg = 63;
        backb = 36;
        lines = lines.concat([
                [300,50,300,400]
            ]);
    }
    else if (level < 92) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
            [100,50,100,200],
            [100,200,200,200],
            [200,200,200,50],
            [220,400,220,320],
            [220,320,300,320],
            [300,320,300,400],
        ]);
    }
    else if (level < 93) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
            [0,300,300,300],
            [300,50,300,200],
            [300,400,300,300],
            [200,200,200,50],
            [200,200,300,200],
        ]);
    }
    else if (level < 94) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
         [125,300,125,150],
         [125,300,275,300],
         [125,150,275,150],
         [275,150,275,300],
        ]);
    }
    else if (level < 95) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
         [0,150,400,150],
         [0,300,400,300],
        ]);
    }
    else if (level < 96) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
         [100,50,100,150],
         [0,150,100,150],
         [100,300,100,400],
         [0,300,100,300],
         [300,50,300,150],
         [300,150,400,150],
         [300,300,300,400],
         [300,300,400,300],
        ]);
    }
    else if (level < 99) {
        backr = 102;
        backg = 97;
        backb = 97;
    }
    else if (level < 100) {
        backr = 102;
        backg = 97;
        backb = 97;
    }
    else if (level < 102) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
         [100,50,100,150],
         [0,150,100,150],
         [100,300,100,400],
         [0,300,100,300],
         [300,50,300,150],
         [300,150,400,150],
         [300,300,300,400],
         [300,300,400,300],
        ]);
    }
    else if (level === 102) {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
        ]);
    }
    else if (level === "???") {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
        ]);
    }
    else if (level === "angel") {
        backr = 255;
        backg = 255;
        backb = 255;
        lines = lines.concat([
        ]);
    }
    else if (level === "the end") {
        backr = 255;
        backg = 255;
        backb = 255;
        lines = lines.concat([
        ]);
    }
    else if (level === "B1") {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
            [100,50,100,200],
            [100,200,200,200],
            [200,200,200,50],
            [220,400,220,320],
            [220,320,300,320],
            [300,320,300,400],
        ]);
    }
    else if (level === "B2") {
        backr = 102;
        backg = 97;
        backb = 97;
        lines = lines.concat([
        ]);
    }
    else if (level === "B3" || level === "B4") {
        backr = 66;
        backg = 194;
        backb = 245;
    }
    else if (level === "B5") {
        backr = 181;
        backg = 145;
        backb = 0;
    }
    else if (level === "B6") {
        backr = 181;
        backg = 145;
        backb = 0;
    }
    else if (level === "B7") {
        backr = 108;
        backg = 0;
        backb = 166;
    }
    else if (level === "B8") {
        backr = 108;
        backg = 0;
        backb = 166;
    }
    else if (level === "B9") {
        backr = 108;
        backg = 63;
        backb = 36;
    }
    else if(level === "B10"){
        backr = 108;
        backg = 63;
        backb = 36;
        lines = lines.concat([
                [300,50,300,400]
            ]);   
    }
    frame = 0;
    lastSummonFrame = 0;
    lastThrowFrame = 0;
    lastCataFrame = 0;
    lastFreezeFrame = 0;
    lastPoisonThrowFrame = 0;
    playerPoundedFrame = -99999999999;
    px = 25;
    py = 100;
    es = [];
    ms = [];
    blocks = [];
    stun = -240;
    bitten = false;
    slow = 0;
    confuse = 0;
    superSlow = 0;
    poisonFrame = 0;
    grab = false;
    crusherswap = false;
    if(level === "???"){
        gearplaceL = -50;
        gearplaceR = 450;
    }else{
        gearplaceL = -80;
        gearplaceR = 480;
    }
    gearplaceT = -150;
    gearplaceB = 600;
     if(level === 1){
        px = 25;
        py = 100;
        HP = 100;
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 331, 341, monsters.blob);
    }
     if(level === 2){
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 331, 341, monsters.miniBlob);
    }
     if(level === 3){
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 274, 233, monsters.miniBlob);
        addMonster( 331, 133, monsters.miniBlob);
    }
    if(level === 4){
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 350, 233, monsters.blob);
        addMonster( 132, 333, monsters.blob);
    }
     if(level === 5){
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 311, 160, monsters.blob);
        addMonster( 253, 108, monsters.miniBlob);
        addMonster( 347, 273, monsters.miniBlob);
     }
    if(level === 6){
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 311, 76, monsters.blob);
        addMonster( 253, 202, monsters.blob);
        addMonster( 347, 273, monsters.blob);
        addMonster( 141, 240, monsters.blob);
     }
      if(level === 7){
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 311, 76, monsters.miniBlob);
        addMonster( 347, 273, monsters.miniBlob);
        addMonster( 174, 283, monsters.miniBlob);
     }
     if(level === 8){
        px = 327;
        py = 323;
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 311, 76, monsters.blob);
        addMonster( 206, 225, monsters.blob);
        addMonster( 174, 283, monsters.miniBlob);
        addMonster( 39, 122, monsters.miniBlob);
     }
     if(level === 9){
        px = 327;
        py = 323;
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 311, 76, monsters.blob);
        addMonster( 87, 225, monsters.blob);
        addMonster( 91, 283, monsters.blob);
        addMonster( 39, 122, monsters.blob);
        addMonster( 36, 225, monsters.blob);
     }
     if(level === 10){
        px = 25;
        py = 100;
        MP = 100;
        maxHP = 100;
        maxMP = 100;
        addMonster( 196, 59, monsters.kingBlob);
     }
     if(level === 11){
        px = 25;
        py = 100;
        maxHP = 150;
        maxMP = 150;
        addMonster( 320, 300, monsters.fireBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
      if(level === 12){
        px = 25;
        py = 100;
        maxHP = 150;
        maxMP = 150;
        addMonster( 320, 300, monsters.fireBlob);
        addMonster( 320, 230, monsters.blob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
     if(level === 13){
        px = 25;
        py = 100;
        maxHP = 150;
        maxMP = 150;
        addMonster( 320, 300, monsters.fireBlob);
        addMonster( 320, 230, monsters.elBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
     if(level === 14){
        px = 320;
        py = 300;
        maxHP = 150;
        maxMP = 150;
        addMonster( 25, 100, monsters.elBlob);
        addMonster( 25, 125, monsters.elBlob);
        addMonster( 25, 150, monsters.elBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
      if(level === 15){
        px = 320;
        py = 300;
        maxHP = 150;
        maxMP = 150;
        addMonster( 25, 50, monsters.miniBlob);
        addMonster( 25, 100, monsters.blob);
        addMonster( 25, 150, monsters.elBlob);
        addMonster( 25, 200, monsters.fireBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
     if(level === 16){
        px = 320;
        py = 300;
        maxHP = 150;
        maxMP = 150;
        addMonster( 25, 50, monsters.fireBlob);
        addMonster( 25, 125, monsters.fireBlob);
        addMonster( 25, 200, monsters.fireBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
     if(level === 17){
        px = 320;
        py = 300;
        maxHP = 150;
        maxMP = 150;
        addMonster( 25, 50, monsters.elBlob);
        addMonster( 25, 75, monsters.miniBlob);
        addMonster( 25, 100, monsters.elBlob);
        addMonster( 25, 125, monsters.miniBlob);
        addMonster( 25, 150, monsters.elBlob);
        addMonster( 25, 175, monsters.miniBlob);
        addMonster( 25, 200, monsters.elBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
     if(level === 18){
        px = 25;
        py = 100;
        maxHP = 150;
        maxMP = 150;
        addMonster( 320, 250, monsters.elBlob);
        addMonster( 320, 300, monsters.robot);
        addMonster( 320, 350, monsters.elBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
     if(level === 19){
        px = 25;
        py = 100;
        maxHP = 150;
        maxMP = 150;
        addMonster( 320, 200, monsters.fireBlob);
        addMonster( 320, 250, monsters.robot);
        addMonster( 320, 300, monsters.robot);
        addMonster( 320, 350, monsters.fireBlob);
        addBlock(150,50,100,175,1, 2);
        addBlock(150,225,100,175,3,2);
     }
      if(level === 20){
        px = 170;
        py = 300;
        maxHP = 150;
        maxMP = 150;
        addMonster( 60, 40, monsters.crusher2000);
     }
     if(level === 21){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 200, 200, monsters.skyBlob);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 22){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 200, 200, monsters.miniSkyBlob);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 23){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 200, 200, monsters.skyBlob);
        addMonster( 250, 200, monsters.miniSkyBlob);
        addMonster( 150, 200, monsters.miniSkyBlob);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 24){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 50, 60, monsters.skyBlob);
        addMonster( 320, 320, monsters.skyBlob);
        addMonster( 320, 60, monsters.skyBlob);
        addMonster( 175, 200, monsters.skyBlob);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 25){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 175, 200, monsters.cloud);
        addMonster( 125, 200, monsters.skyBlob);
        addMonster( 275, 200, monsters.skyBlob);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 26){
        px = 175;
        py = 200;
        maxHP = 200;
        maxMP = 200;
        addMonster( 155, 75, monsters.cloud);
        addMonster( 10, 200, monsters.miniSkyBlob);
        addMonster( 380, 200, monsters.miniSkyBlob);
        addMonster( 165, 350, monsters.skyBlob);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 27){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 50, 60, monsters.miniSkyBlob);
        addMonster( 320, 320, monsters.miniSkyBlob);
        addMonster( 320, 60, monsters.miniSkyBlob);
        addMonster( 175, 200, monsters.cloud);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 28){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 50, 60, monsters.skyBlob);
        addMonster( 320, 320, monsters.skyBlob);
        addMonster( 320, 60, monsters.cloud);
        addMonster( 175, 200, monsters.elcloud);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 29){
        px = 320;
        py = 60;
        maxHP = 200;
        maxMP = 200;
        addMonster( 300, 200, monsters.elcloud);
        addMonster( 25, 200, monsters.elcloud);
        addMonster( 155, 200, monsters.elcloud);
        addCloud(70,350,120,70);
        addCloud(70,100,120,70);
        addCloud(330,100,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 30){
        px = 40;
        py = 320;
        maxHP = 200;
        maxMP = 200;
        addMonster( 0, 50, monsters.queenCloud);
        addMonster( 175, 150, monsters.skyBlob);
        addCloud(70,350,120,70);
        addCloud(330,350,120,70);
        addCloud(205,225,240,140);
     }
     if(level === 31){
        px = 10;
        py = 150;
        maxHP = 250;
        maxMP = 250;
        addMonster( 240, 340, monsters.iceBlob);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 32){
        px = 10;
        py = 150;
        maxHP = 250;
        maxMP = 250;
        addMonster( 240, 340, monsters.iceBlob);
        addMonster( 340, 70, monsters.iceBlob);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 33){
        px = 220;
        py = 330;
        maxHP = 250;
        maxMP = 250;
        addMonster( 340, 70, monsters.iceBlob);
        addMonster( 10, 150, monsters.livIce);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 34){
        px = 220;
        py = 330;
        maxHP = 250;
        maxMP = 250;
        addMonster( 320, 60, monsters.livIce);
        addMonster( 10, 150, monsters.livIce);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 35){
        px = 320;
        py = 60;
        maxHP = 250;
        maxMP = 250;
        addMonster( 200, 340, monsters.fog);
        addMonster( 10, 150, monsters.iceBlob);
        addMonster( 10, 250, monsters.iceBlob);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 36){
        px = 10;
        py = 150;
        maxHP = 250;
        maxMP = 250;
        addMonster( 200, 340, monsters.fog);
        addMonster( 300, 70, monsters.fog);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 37){
        px = 220;
        py = 330;
        maxHP = 250;
        maxMP = 250;
        addMonster( 10, 150, monsters.fog);
        addMonster( 321, 55, monsters.livIce);
        addMonster( 81, 55, monsters.fog);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 38){
        px = 220;
        py = 330;
        maxHP = 250;
        maxMP = 250;
        addMonster( 10, 150, monsters.iceBlob);
        addMonster( 10, 230, monsters.iceBlob);
        addMonster( 321, 55, monsters.iceBlob);
        addMonster( 81, 55, monsters.iceBlob);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 39){
        px = 220;
        py = 330;
        maxHP = 250;
        maxMP = 250;
        addMonster( 10, 150, monsters.livIce);
        addMonster( 10, 230, monsters.livIce);
        addMonster( 321, 55, monsters.livIce);
        addMonster( 81, 55, monsters.livIce);
        addIce(0,319,200,80);
        addIce(314,150,85,249);
        addIce(0,50,85,85);
        addIce(154,150,160,85);
     }
     if(level === 40){
        px = 10;
        py = 180;
        maxHP = 250;
        maxMP = 250;
        addMonster( 300, 150, monsters.frostBeast);
        addMonster( 10, 60, monsters.iceBlob);
        addMonster( 340, 340, monsters.iceBlob);
        addIce(0,319,399,80);
        addIce(0,50,399,85);
     }
     if(level === 41){
        px = 10;
        py = 180;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 300, monsters.waterBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 42){
        px = 10;
        py = 180;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 300, monsters.waterBlob);
        addMonster( 310, 350, monsters.waterBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 43){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 240, monsters.squid);
        addMonster( 310, 300, monsters.waterBlob);
        addMonster( 310, 350, monsters.waterBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 44){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 240, monsters.squid);
        addMonster( 310, 300, monsters.squid);
        addMonster( 310, 350, monsters.waterBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 45){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 240, monsters.squid);
        addMonster( 310, 350, monsters.squid);
        addMonster( 230, 80, monsters.squid);
        addMonster( 10, 180, monsters.squid);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 46){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 300, monsters.mudBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 47){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 240, monsters.waterBlob);
        addMonster( 310, 300, monsters.waterBlob);
        addMonster( 310, 350, monsters.waterBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 48){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 240, monsters.waterBlob);
        addMonster( 310, 350, monsters.mudBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 49){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addMonster( 310, 240, monsters.squid);
        addMonster( 230, 80, monsters.squid);
        addMonster( 310, 350, monsters.mudBlob);
        addCoral(100,250,200,150,255,0,0);
        addCoral(0,10,200,150,0, 255, 106);
        addCoral(300,50,100,110,0, 208, 255);
     }
     if(level === 50){
        px = 10;
        py = 320;
        maxHP = 300;
        maxMP = 300;
        addCoral(150,10,400,400,0, 208, 255);
        addMonster( 150, 50, monsters.kraken);
        innitTents();
     }
     if(level === 51){
        px = 10;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 180, 60, monsters.sandBlob);
     }
     if(level === 52){
        px = 10;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 30, 60, monsters.sandBlob);
        addMonster( 320, 60, monsters.sandBlob);
     }
     if(level === 53){
        px = 300;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 30, 60, monsters.sandBlob);
        addMonster( 320, 60, monsters.sandBlob);
        addMonster( 30, 320, monsters.sandBlob);
     }
     if(level === 54){
        px = 170;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 180, 60, monsters.mummy);
     }
     if(level === 55){
        px = 300;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 180, 60, monsters.mummy);
        addMonster( 30, 60, monsters.sandBlob);
        addMonster( 320, 60, monsters.sandBlob);
        addMonster( 30, 320, monsters.sandBlob);
     }
     if(level === 56){
        px = 180;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 3;
        addMonster( 180, 60, monsters.sarcophagus);
     }
     if(level === 57){
        px = 180;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 3;
        addMonster( 30, 60, monsters.sarcophagus);
        addMonster( 330, 60, monsters.sarcophagus);
     }
     if(level === 58){
        px = 180;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 4;
        addMonster( 30, 60, monsters.mummy);
        addMonster( 330, 60, monsters.mummy);
        addMonster( 180, 60, monsters.sandBlob);
     }
     if(level === 59){
        px = 320;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 30, 60, monsters.mummy);
        addMonster( 330, 60, monsters.mummy);
        addMonster( 30, 320, monsters.mummy);
        addMonster( 180, 60, monsters.sandBlob);
        addMonster( 30, 200, monsters.sandBlob);
     }
     if(level === 60){
        px = 10;
        py = 320;
        maxHP = 350;
        maxMP = 350;
        windsped = 2;
        addMonster( 200, 100, monsters.sandKing);
     }
     if(level === 61){
        px = 10;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 200, 100, monsters.jungleBlob);
     }
     if(level === 62){
        px = 10;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 100, 100, monsters.jungleBlob);
        addMonster( 300, 100, monsters.roboMonkey);
     }
     if(level === 63){
        px = 10;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 100, 100, monsters.jungleBlob);
        addMonster( 300, 100, monsters.jungleBlob);
        addMonster( 200, 100, monsters.jungleYoungling);
     }
     if(level === 64){
        px = 10;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 300, 100, monsters.weed);
     }
     if(level === 65){
        px = 200;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 300, 100, monsters.weed);
        addMonster( 100, 100, monsters.jungleBlob);
        addMonster( 200, 100, monsters.jungleYoungling);
     }
     if(level === 66){
        px = 200;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 300, 100, monsters.roboMonkey);
        addMonster( 100, 100, monsters.roboMonkey);
        addMonster( 350, 300, monsters.roboMonkey);
        addMonster( 20, 300, monsters.roboMonkey);
     }
     if(level === 67){
        px = 200;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 300, 100, monsters.jungleYoungling);
        addMonster( 100, 100, monsters.jungleYoungling);
        addMonster( 350, 300, monsters.jungleYoungling);
        addMonster( 20, 300, monsters.jungleYoungling);
     }
     if(level === 68){
        px = 200;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 300, 100, monsters.weed);
        addMonster( 100, 100, monsters.weed);
        addMonster( 200, 100, monsters.weed);
     }
     if(level === 69){
        px = 200;
        py = 320;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 150, 100, monsters.weed);
        addMonster( 250, 100, monsters.weed);
        addMonster( 350, 300, monsters.roboMonkey);
        addMonster( 20, 300, monsters.roboMonkey);
     }
     if(level === 70){
        px = 10;
        py = 250;
        maxHP = 400;
        maxMP = 400;
        addVines(0, 200, 400, 20);
        addVines(200, 0, 20, 200);
        addVines(300, 200, 20, 200);
        addVines(100, 200, 20, 200);
        addMonster( 220, 120, monsters.altar);
        addMonster( 300, 60, monsters.weed);
        addMonster( 300, 350, monsters.weed);
     }
     if(level === 71){
        px = 10;
        py = 250;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 220, 120, monsters.poisonBlob);
     }
     if(level === 72){
        px = 10;
        py = 250;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 220, 120, monsters.poisonMiniBlob);
     }
     if(level === 73){
        px = 10;
        py = 250;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 220, 140, monsters.poisonBlob);
        addMonster( 150, 80, monsters.poisonMiniBlob);
        addMonster( 290, 80, monsters.poisonMiniBlob);
     }
     if(level === 74){
        px = 180;
        py = 330;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 220, 140, monsters.mosquito);
        addMonster( 150, 80, monsters.mosquito);
        addMonster( 290, 80, monsters.mosquito);
        addMonster( 235, 140, monsters.mosquito);
        addMonster( 165, 80, monsters.mosquito);
        addMonster( 305, 80, monsters.mosquito);
        addMonster( 220, 155, monsters.mosquito);
        addMonster( 150, 95, monsters.mosquito);
        addMonster( 290, 95, monsters.mosquito);
        addMonster( 120, 140, monsters.mosquito);
        addMonster( 50, 80, monsters.mosquito);
        addMonster( 190, 80, monsters.mosquito);
        addMonster( 135, 140, monsters.mosquito);
        addMonster( 65, 80, monsters.mosquito);
        addMonster( 205, 80, monsters.mosquito);
        addMonster( 135, 155, monsters.mosquito);
        addMonster( 65, 95, monsters.mosquito);
        addMonster( 205, 95, monsters.mosquito);
        addMonster( 220, 240, monsters.mosquito);
        addMonster( 150, 180, monsters.mosquito);
        addMonster( 290, 180, monsters.mosquito);
        addMonster( 235, 240, monsters.mosquito);
        addMonster( 165, 180, monsters.mosquito);
        addMonster( 305, 180, monsters.mosquito);
     }
     if(level === 75){
        px = 180;
        py = 330;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 200, 140, monsters.bigMosquito);
        addMonster( 100, 80, monsters.poisonBlob);
        addMonster( 250, 80, monsters.poisonBlob);
     }
     if(level === 76){
        px = 280;
        py = 330;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 220, 140, monsters.mosquito);
        addMonster( 150, 80, monsters.mosquito);
        addMonster( 290, 80, monsters.mosquito);
        addMonster( 235, 140, monsters.mosquito);
        addMonster( 165, 80, monsters.mosquito);
        addMonster( 305, 80, monsters.mosquito);
        addMonster( 220, 155, monsters.mosquito);
        addMonster( 150, 95, monsters.mosquito);
        addMonster( 290, 95, monsters.mosquito);
        addMonster( 120, 140, monsters.mosquito);
        addMonster( 50, 80, monsters.mosquito);
        addMonster( 190, 80, monsters.mosquito);
        addMonster( 135, 140, monsters.mosquito);
        addMonster( 65, 80, monsters.mosquito);
        addMonster( 205, 80, monsters.mosquito);
        addMonster( 135, 155, monsters.mosquito);
        addMonster( 65, 95, monsters.mosquito);
        addMonster( 205, 95, monsters.mosquito);
        addMonster( 220, 240, monsters.mosquito);
        addMonster( 150, 180, monsters.mosquito);
        addMonster( 290, 180, monsters.mosquito);
        addMonster( 235, 240, monsters.mosquito);
        addMonster( 165, 180, monsters.mosquito);
        addMonster( 305, 180, monsters.mosquito);
        addMonster( 220, 220, monsters.mosquito);
        addMonster( 150, 390, monsters.mosquito);
        addMonster( 290, 170, monsters.mosquito);
        addMonster( 235, 60, monsters.mosquito);
        addMonster( 165, 70, monsters.mosquito);
        addMonster( 305, 60, monsters.mosquito);
        addMonster( 220, 255, monsters.mosquito);
        addMonster( 150, 295, monsters.mosquito);
        addMonster( 290, 195, monsters.mosquito);
        addMonster( 120, 340, monsters.mosquito);
        addMonster( 50, 180, monsters.mosquito);
        addMonster( 190, 180, monsters.mosquito);
        addMonster( 135, 240, monsters.mosquito);
        addMonster( 65, 195, monsters.mosquito);
        addMonster( 205, 380, monsters.mosquito);
        addMonster( 335, 155, monsters.mosquito);
        addMonster( 25, 95, monsters.mosquito);
        addMonster( 15, 95, monsters.mosquito);
        addMonster( 22, 240, monsters.mosquito);
        addMonster( 15, 180, monsters.mosquito);
        addMonster( 29, 180, monsters.mosquito);
        addMonster( 2, 240, monsters.mosquito);
        addMonster( 65, 180, monsters.mosquito);
        addMonster( 35, 60, monsters.mosquito);
        addMonster( 350, 60, monsters.bigMosquito);
        addMonster( 35, 260, monsters.bigMosquito);
     }
     if(level === 77){
        px = 180;
        py = 330;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 300, 100, monsters.poisonWeed);
        addMonster( 100, 100, monsters.poisonWeed);
     }
     if(level === 78){
        px = 10;
        py = 250;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 300, 100, monsters.poisonWeed);
        addMonster( 300, 300, monsters.poisonWeed);
        addMonster( 300, 200, monsters.bigMosquito);
     }
     if(level === 79){
        px = 10;
        py = 250;
        maxHP = 450;
        maxMP = 450;
        addPoison(0,50,100,100);
        addPoison(100,50,100,170);
        addPoison(200,220,80,80);
        addPoison(320,50,80,80);
        addPoison(0,320,80,80);
        addMonster( 300, 100, monsters.bigMosquito);
        addMonster( 300, 300, monsters.bigMosquito);
        addMonster( 300, 200, monsters.poisonWeed);
     }
     if(level === 80){
        px = 10;
        py = 330;
        maxHP = 450;
        maxMP = 450;
        addMonster( 300, 60, monsters.poisonFlower);
        addMonster( 230, 265, monsters.miniPoisonFlower);
        addMonster( 230, 190, monsters.miniPoisonFlower);
        addMonster( 230, 340, monsters.miniPoisonFlower);
     }
     if(level === 81){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 200, 100, monsters.lavaBlob);
     }
     if(level === 82){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.lavaBlob);
        addMonster( 300, 100, monsters.lavaHound);
     }
     if(level === 83){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.bomb);
        addMonster( 300, 100, monsters.bomb);
     }
     if(level === 84){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.lavaHound);
        addMonster( 300, 100, monsters.lavaHound);
     }
     if(level === 85){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.lavaBlob);
        addMonster( 300, 100, monsters.lavaBlob);
        addMonster(200, 100, monsters.lavaHound);
        addMonster(10, 100, monsters.bomb);
        addMonster(350, 100, monsters.bomb);
     }
     if(level === 86){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.bomb);
        addMonster( 300, 100, monsters.bomb);
        addMonster(200, 100, monsters.bomb);
        addMonster(10, 100, monsters.bomb);
        addMonster(350, 100, monsters.bomb);
        addMonster( 100, 200, monsters.bomb);
        addMonster( 300, 200, monsters.bomb);
        addMonster(200, 200, monsters.bomb);
     }
     if(level === 87){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.lavaBlob);
        addMonster( 200, 100, monsters.golem);
        addMonster( 300, 100, monsters.lavaHound);
     }
     if(level === 88){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 100, monsters.golem);
        addMonster( 200, 100, monsters.golem);
        addMonster( 300, 100, monsters.golem);
        addMonster( 200, 175, monsters.bomb);
     }
     if(level === 89){
        px = 100;
        py = 330;
        maxHP = 500;
        maxMP = 500;
        addLava(0,170,200,100);
        addLava(300,50,100,100);
        addLava(320,320,80,80);
        addLava(0,50,80,80);
        addLava(0,320,80,80);
        addMonster( 100, 110, monsters.lavaBlob);
        addMonster( 200, 110, monsters.golem);
        addMonster( 300, 110, monsters.lavaHound);
        addMonster( 200, 60, monsters.bomb);
        addMonster( 100, 60, monsters.bomb);
        addMonster( 300, 60, monsters.bomb);
     }
     if(level === 90){
        px = 10;
        py = 200;
        maxHP = 500;
        maxMP = 500;
        addLava(0,50,100,100);
        addLava(0,300,100,100);
        addMonster( 300, 60, monsters.castle);
     }
     if(level === 91){
        px = 25;
        py = 250;
        maxHP = 550;
        maxMP = 550;
        addMonster( 331, 341, monsters.darkBlob);
        addMonster( 331, 61, monsters.darkBlob);
     }
     if(level === 92){
        px = 25;
        py = 230;
        maxHP = 550;
        maxMP = 550;
        addMonster( 331, 230, monsters.darkBlob);
        addMonster( 331, 138, monsters.darkBlob);
        addMonster( 331, 338, monsters.ghostBlob);
        addMonster( 243, 88, monsters.bomb);
        addMonster( 243, 338, monsters.bomb);
        addMonster( 43, 338, monsters.bomb);
     }
     if(level === 93){
        px = 25;
        py = 205;
        maxHP = 550;
        maxMP = 550;
        addMonster( 191, 202, monsters.ghostBlob);
        addMonster( 191, 64, monsters.darkBlob);
        addMonster( 191, 319, monsters.darkBlob);
        addMonster( 343, 64, monsters.ghostBlob);
        addMonster( 343, 319, monsters.ghostBlob);
     }
     if(level === 94){
        px = 165;
        py = 205;
        maxHP = 550;
        maxMP = 550;
        addMonster( 51, 60, monsters.ghostBlob);
        addMonster( 153, 60, monsters.ghostBlob);
        addMonster( 284, 60, monsters.ghostBlob);
        addMonster( 51, 320, monsters.ghostBlob);
        addMonster( 153, 320, monsters.ghostBlob);
        addMonster( 284, 320, monsters.ghostBlob);
        addMonster( 51, 180, monsters.darkBlob);
        addMonster( 284, 220, monsters.darkBlob);
     }
     if(level === 95){
        px = 35;
        py = 195;
        maxHP = 550;
        maxMP = 550;
        addMonster( 313, 195, monsters.sirBlobsalot);
     }
     if(level === 96){
        px = 20;
        py = 330;
        maxHP = 550;
        maxMP = 550;
        addMonster( 285, 177, monsters.darkBlob);
        addMonster( 333, 260, monsters.darkMage);
        addMonster( 333, 340, monsters.ghostBlob);
        addCoral(95,250,200,150,0,0,0);
        addCoral(0,10,125,150,0,0,0);
        addCoral(275,50,200,110,0,0,0);
     }
     if(level === 97){
        px = 20;
        py = 330;
        maxHP = 550;
        maxMP = 550;
        addMonster( 285, 177, monsters.doppelganger);
        addMonster( 335, 177, monsters.doppelganger);
        addMonster( 335, 74, monsters.doppelganger);
        addMonster( 266, 74, monsters.darkMage);
        addCoral(150,250,250,150,0,0,0);
        addCoral(0,50,250,100,0,0,0);
        
     }
     if(level === 98){
        px = 20;
        py = 330;
        maxHP = 550;
        maxMP = 550;
        addMonster( 330, 81, monsters.doppelganger);
        addMonster( 20, 81, monsters.doppelganger);
        addMonster( 200, 181, monsters.doppelganger);
        addMonster( 119, 181, monsters.ghostBlob);
        addMonster( 330, 301, monsters.darkMage);
        addCoral(100,300,200,100,0,0,0);
        addCoral(100,50,200,100,0,0,0);
        
     }
     if(level === 99){
        px = 173;
        py = 202;
        maxHP = 550;
        maxMP = 550;
        addMonster( 284, 200, monsters.doppelganger);
        addMonster( 54, 200, monsters.doppelganger);
        addMonster( 173, 100, monsters.darkBlob);
        addMonster( 173, 300, monsters.darkBlob);
        addMonster( 53, 100, monsters.ghostBlob);
        addMonster( 53, 300, monsters.ghostBlob);
        addMonster( 300, 100, monsters.ghostBlob);
        addMonster( 300, 300, monsters.ghostBlob);
        addCoral(0,50,50,400,0,0,0);
        addCoral(50,50,50,125,0,0,0);
        addCoral(50,275,50,125,0,0,0);
        addCoral(100,325,50,125,0,0,0);
        addCoral(100,0,50,125,0,0,0);
        addCoral(150,375,50,125,0,0,0);
        addCoral(150,-50,50,125,0,0,0);
        addCoral(200,-50,50,125,0,0,0);
        addCoral(200,375,50,125,0,0,0);
        addCoral(300,275,50,125,0,0,0);
        addCoral(300,50,50,125,0,0,0);
        addCoral(250,325,50,125,0,0,0);
        addCoral(250,0,50,125,0,0,0);
        addCoral(350,50,50,400,0,0,0);
     }
     if(level === 100){
        px = 35;
        py = 195;
        maxHP = 550;
        maxMP = 550;
        addMonster( 313, 195, monsters.archBlobomancer);
     }
     if(level === 101){
        px = 12;
        py = 195;
        maxHP = 600;
        maxMP = 600;
        addMonster( 205, 195, monsters.sirBlobsalot);
        addMonster( 313, 200, monsters.archBlobomancer);
     }
     if(level === 102){
        px = 20;
        py = 195;
        maxHP = 600;
        maxMP = 600;
        addMonster( 308, 190, monsters.darkLord);
     }
     if(level === "???"){
        px = 175;
        py = 195;
        maxHP = 600;
        maxMP = 600;
        addMonster( 100, -200, monsters.TRUE_DARKLORD);
        addMonster( -10, -360, monsters.damageCloudPleaseIgnore);
     }
     if(level === "angel"){
        px = 11231235;
        py = 195;
        maxHP = 600;
        maxMP = 600;
        addMonster( -123123110, -360, monsters.damageCloudPleaseIgnore); 
     }
     if(level === "B1"){
        px = 112;
        py = 205;
        maxHP = 600;
        maxMP = 600;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 323, 200, monsters.rainbowBlob);
     }
     if(level === "B2"){
        px = 112;
        py = 205;
        maxHP = 600;
        maxMP = 600;
        addMonster( 10, 80, monsters.crusher10000);
        addMonster( 250, 59, monsters.darkKingBlob);
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
     }
     if(level === "B3"){
        px = 50;
        py = 205;
        maxHP = 700;
        maxMP = 700;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 250, 150, monsters.livingTornado);
        addCloud(70,200,120,70);
        addCloud(70,250,120,70);
        addCloud(330,200,120,70);
        addCloud(330,250,120,70);
        addCloud(205,125,240,140);
        addCloud(205,325,240,140);
        addCloud(205,225,240,140);
        addIce(125,175,150,100);
     }
     if(level === "B4"){
        px = 50;
        py = 205;
        maxHP = 700;
        maxMP = 700;
        addMonster( 0, -250, monsters.queenThunderCloud);
        addMonster(300,205,monsters.thrym);
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addCloud(70,200,120,70);
        addCloud(70,250,120,70);
        addCloud(330,200,120,70);
        addCloud(330,250,120,70);
        addCloud(205,325,240,140);
        addCloud(205,225,240,140);
     }
     if(level === "B5"){
         windsped = 2;
        px = 50;
        py = 205;
        maxHP = 800;
        maxMP = 800;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 330, 200, monsters.sandSquid);
     }
     if(level === "B6"){
         windsped = 2;
        px = 50;
        py = 205;
        maxHP = 800;
        maxMP = 800;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 300, 200, monsters.darkMirage);
        addMonster( 10000, 50, monsters.apocalypseKraken);
        addMonster( 200, 200, monsters.tent);
        addMonster( 200, 200, monsters.tent);
        addMonster( 200, 200, monsters.tent);
        addMonster( 200, 200, monsters.tent);
        addMonster( 200, 200, monsters.tent);
        addMonster( 200, 200, monsters.tent);
        addMonster( 200, 200, monsters.tentacle);
     }
     if(level === "B7"){
        px = 50;
        py = 300;
        maxHP = 900;
        maxMP = 900;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 300, 100, monsters.vampireMosquito);
        addVines(190,50,20,400);
        addVines(0,200,400,20);
     }
     if(level === "B8"){
        px = 50;
        py = 300;
        maxHP = 900;
        maxMP = 900;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 220, 120, monsters.ruinedAltar);
        addMonster( 3000, 60, monsters.rottenYggdrasil);
     }
     if(level === "B9"){
        px = 10;
        py = 200;
        maxHP = 1000;
        maxMP = 1000;
        addLava(150,250,100,200);
        addLava(320,50,80,80);
        addLava(0,50,80,80);
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 320, 200, monsters.wrathHound);
     }
     if(level === "B10"){
        px = 50;
        py = 300;
        maxHP = 1000;
        maxMP = 1000;
        addMonster( 3230000000, 200, monsters.damageCloudPleaseIgnore);
        addMonster( 300, 60, monsters.adamantFortress);
     }
     if(level === "the end"){
        px = 11231235;
        py = 195;
        maxHP = 1000;
        maxMP = 1000;
        addMonster( -123123110, -360, monsters.damageCloudPleaseIgnore); 
     }
     if(dif === 2){
        maxHP = ceil(maxHP * (3/4));
        maxMP = ceil(maxMP * (3/4));
     }
     if(dif === 0){
        maxHP *= 1.5;   
     }
     if(dif === 4){
        maxHP *= 2;   
     }
     if(godMode){
        maxHP *= 10;
     }
     if(darkMode === "ON"){
        maxHP-=corrupted;   
     }
     if(HP<maxHP){
     HP = maxHP;
     }
     if(MP<maxMP){
     MP = maxMP;
     }
     if(HP>maxHP){
     HP = maxHP;
     }
     if(MP>maxMP){
     MP = maxMP;
     }
};

// Start the very first level
StartLevel();

var pointInEllipse = function(x,y,ex,ey,ew,eh) {
    x-=ex;
    y-=ey;
    y*=ew/eh;
    var dist = sqrt(x*x+y*y);
    return(dist<ew/2);
};

var overlapCircle = function(x1, y1, x2, y2, size1, size2) {
    var dist = sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
    return dist < (size1 + size2)/2;
};

var gear = function(x,y,outer,inner,start,end,sides) {
    if (overlapCircle((x-outer)+outer,(y-outer)+outer,px+pw/2,py+ph/2,outer*2,pw)) {
        if(level === "???"){
            HP -= 10;
        }else  if(level === "B2"){
            HP -= 5;
        }else{
            HP-=1;   
        }
        Phurt = true;
    }

    beginShape();
    var deg;
    for (var i = 0; i < sides; i++) {
        deg = start + (end-start) * i / sides;
        vertex(x+cos(deg)*outer,y-sin(deg)*outer);

        deg = start + (end-start) * (i+0.5) / sides;
        vertex(x+cos(deg)*outer,y-sin(deg)*outer);

        deg = start + (end-start) * (i+0.5) / sides;
        vertex(x+cos(deg)*inner,y-sin(deg)*inner);

        deg = start + (end-start) * (i+1) / sides;
        vertex(x+cos(deg)*inner,y-sin(deg)*inner);
    }
    endShape();
};


// x,y is the center of the flower head
var drawFlower = function(x, y, totalPetals, currentPetals, size) {
    // Degrees offset for the last petal
    var clocking = 54;
    
    for (var i = 0 ; i < currentPetals ; i++) {
        var angle = i / totalPetals * 360 + clocking;
        translate(x,y);
        rotate(angle);
        ellipse(size*40, 0, size*60, size*30);
        rotate(-angle);
        translate(-x,-y);
    }
    rotate(0);
    translate(0,0);
};

var DrawLines = function() {
   for ( var i = 0 ; i < lines.length ; i++ ) {
     line( lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
   }
    if (level === 20) {
     fill(56, 32, 1);
     gear(200,-30,180,150,0+frame,360+frame,15);
     gear(gearplaceL,220,180,150,0-frame,360-frame,15);
     gear(gearplaceR,220,180,150,0+frame,360+frame,15);
     line(180,80,150,55);
     line(220,80,250,55);
    }
    if (level === "B2") {
        if(es[0].mon.name === "crusher10000"){
             fill(138, 138, 138);
             gear(200,gearplaceT,180,150,0+frame,360+frame,15);
             gear(200,gearplaceB,180,150,0+frame,360+frame,15);
             gear(gearplaceL,220,180,150,0-frame,360-frame,15);
             line(gearplaceL+100,170,gearplaceL+130,205);
             line(gearplaceL+100,260,gearplaceL+130,235);
        }
    }
    if (level === "???"){
        fill(56, 32, 1);        
        gear(gearplaceL,220,48,38,0-frame,360-frame,15);
        gear(gearplaceR,338,48,38,0+frame,360+frame,15);
    }
};

var HitEnemies = function(tryX, tryY, eNum) {
    for ( var i = 0 ; i < es.length ; i++ ) {
        var e = es[i];
        if(e.mon.name === "kingBlob"||e.mon.name === "confuseClone"||e.mon.name === "necromancer"||e.mon.name === "nightshade"||e.mon.name === "ironweedHydra1"||e.mon.name === "ironweedHydra2"||e.mon.name === "ironweedHydra3"||e.mon.name === "spore"||e.mon.name === "apocalypseKraken" || e.mon.name === "poisonFlower" || e.mon.name === "miniPoisonFlower"||e.mon.name === "dedalot"||e.mon.name === "dedmancer"||e.mon.name === "dedalotII"||e.mon.name === "dedlich"||e.undead) {
         continue;   
        }
        if (i !== eNum) {
            if ( overlap(tryX, tryY, es[eNum].mon.width, es[eNum].mon.height,
                e.x, e.y, e.mon.width, e.mon.height) ) {
                    return true;
                }
        }
    }
    return false;
};

var hitBlocks = function(tryX, tryY, w,h) {
  for (var i = 0; i < blocks.length; i++) {
     var b = blocks[i]; 
     if ( overlap(tryX, tryY, w, h, b.x, b.y, b.w, b.h) ) {
        return true;
    }
  }
  for (var i = 0; i < coral.length; i++) {
     var b = coral[i]; 
     if ( overlap(tryX, tryY, w, h, b.x, b.y, b.w, b.h) ) {
        return true;
    }
  }
};

var doDamage = function(e, type, damage) {
    if(e.mon.name === "darkLord"){
        hurt = 20;
    }
    if (type === "stun slash" && e.mon.name !== "rainbowBlob"&& e.mon.name!=="livingTornado"&& e.mon.name!=="livingBlizzard" && e.mon.name !== "thrym" && e.mon.name !== "frozenWarrior" && e.mon.name !== "frozenDefender" && e.mon.name !== "sandWall" && e.mon.name !== "tentacle" && e.mon.name !== "tent" && e.mon.name !== "vampireMosquito") {
        if(e.mon.name === "darkLord" || e.mon.name === "ULTRAMech"){
            e.stun = frame+8;  
        }else{
            if(darkMode === "ON"){
                e.stun = frame+999999999999999999999;//oh no they lsot their spine  
            }else{
                e.stun = frame+180;  
            }
        }
    }
    if (type === "slow dart" && e.mon.name !== "ghostBlob"&& e.mon.name !== "livingTornado" && e.mon.name !== "rainbowBlob"&& e.mon.name!=="livingBlizzard") {
        e.slow = frame+450;   
    }
    if (type === "freezePound" && e.mon.name !== "rainbowBlob"&& e.mon.name!=="livingTornado"&& e.mon.name!=="livingBlizzard" && e.mon.name !== "thrym"&& e.mon.name !== "sandWall"&& e.mon.name !== "tentacle" && e.mon.name !== "tent") {
        if(e.mon.name === "darkLord" || e.mon.name === "ULTRAMech"&& e.mon.name !== "frozenWarrior" && e.mon.name !== "frozenDefender"){
            e.freeze = frame+16;  
        }else{
            e.freeze = frame+180;  
        }
    }
    var scale = 1.0;
    if(e.mon.name === "damageCloudPleaseIgnore"){
        return;   
    }
    if (e.mon.image === "avatars/spunky-sam-green" && type === "blob cannon" && darkMode === "OFF") {
        scale = -1;
    }
    if (e.mon.name === "TfireBlob" && type === "fire") {
        return;
    }
    if (e.mon.name === "Trobot" && type === "fire") {
        return;
    }
    if (e.mon.name === "TelBlob" && type === "lightning") {
        return;
    }
    if (e.mon.name === "Trobot" && type === "lightning") {
        scale = 2;
    }
    if (e.mon.name === "fireBlob" && type === "fire") {
        return;
    }
    if (e.mon.name === "robot" && type === "fire") {
        return;
    }
    if (e.mon.name === "elBlob" && type === "lightning") {
        return;
    }
    if (e.mon.name === "robot" && type === "lightning") {
        scale = 2;
    }
    if (e.mon.name === "crusher2000" && type === "lightning") {
        scale = 2;
    }
    if (e.mon.name === "crusher2000" && type === "blob cannon") {
        scale = 0.5;
    }
    if (e.mon.name === "crusher2000" && type === "fire") {
        return;
    }
    if (e.mon.name === "elcloud" && type === "lightning") {
        return;
    }
    if (e.mon.name === "livIce" && type === "fire") {
        scale = 2;
    }
    if (e.mon.name === "iceBlob" && type === "fire") {
        scale = 2;
    }
    if (e.mon.name === "frostBeast" && type === "lightning") {
        scale = 0.5;
    }
    if (e.mon.name === "frostBeast" && type === "slash") {
        scale = 0.5;
    }
    if (e.mon.name === "frostBeast" && type === "stun slash") {
        scale = 0.5;
    }
    if (e.mon.name === "kraken" && type === "blob cannon") {
        scale = 0.25;
    }
    if (e.mon.name === "glassBlob" && (type === "groundPound" || type === "freezePound")) {
        damage = 500;
    }
    if (e.mon.name === "sandKing" && type === "groundPound") {
        return;
    }
    if (e.mon.name === "darkLord" && type === "groundPound") {
        return;
    }
    if (e.mon.name === "roboMonkey" && (type === "lightning" || type === "stun slash")) {
        scale = 2;
    }
    if (e.mon.name === "roboMonkey" && type === "fire") {
        return;
    }
    if (e.mon.name === "weed" && type === "fire") {
        scale = 2;
    }
    if (e.mon.name === "altar" && type === "fire") {
        return;
    }
    if (e.mon.name === "poisonFlower" && numinFlowers > 0) {
        return;
    }
    if (e.mon.name === "lavaBlob" && type === "fire") {
        return;
    }
    if (e.mon.name === "lavaHound" && type === "fire") {
        return;
    }
    if (e.mon.name === "bomb" && type === "groundPound") {
        return;
    }
    if (e.mon.name === "bomb" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "golem" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "golem" && type === "fire") {
        return;
    }
    if (e.mon.name === "adamantFortress" && type === "fire") {
        return;
    }
    if (e.mon.name === "adamantFortress" && type === "blob cannon") {
        scale = 0.25;
    }
    if (e.mon.name === "adamantFortress" && type === "slow dart") {
        scale = 0.1;
    }
    if (e.mon.name === "adamantFortress" && type === "sand pit") {
        scale = 0.25;
    }
    if (e.mon.name === "adamantFortress" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "robot" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "robot" && type === "stun slash") {
        scale = 2;
    }
    if (e.mon.name === "skyBlob" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "miniSkyBlob" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "cloud" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "elcloud" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "fog" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "livIce" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "squid" && type === "tentacle") {
        return;
    }
    if (e.mon.name === "sandBlob" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "mummy" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "sarcophagus" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "mummy" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "roboMonkey" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "poisonBlob" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "poisonMiniBlob" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "miniPoisonMiniBlob" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "poisonWeed" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "kingBlob" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "crusher2000" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "queenCloud" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "frostBeast" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "kraken" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "altar" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "poisonFlower" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "miniPoisonFlower" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "darkBlob" && type === "poison") {
        scale = 0.5;
    }
    if (e.mon.name === "darkBlob" && type === "fire") {
        scale = 0.5;
    }
    if (e.mon.name === "darkBlob" && type === "lightning") {
        scale = 0.5;
    }
    if (e.mon.name === "darkBlob" && type === "sand pit") {
        scale = 0.5;
    }
    if (e.mon.name === "darkBlob" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "darkKingBlob" && type === "poison") {
        return;
    }
    if (e.mon.name === "darkKingBlob" && type === "fire") {
        scale = 0.5;
    }
    if (e.mon.name === "darkKingBlob" && type === "lightning") {
        scale = 0.5;
    }
    if (e.mon.name === "darkKingBlob" && type === "sand pit") {
        scale = 0.25;
    }
    if (e.mon.name === "darkKingBlob" && type === "eruption") {
        scale = 0.25;
    }
    if (e.mon.name === "darkKingBlob" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "darkKingBlob" && spectral && type === "slash") {
        return;
    }
    if (e.mon.name === "darkKingBlob" && spectral && type === "groundPound") {
        return;
    }
    if (e.mon.name === "darkKingBlob" && spectral&&type === "blob cannon") {
        scale = 0;
    }
    if (e.mon.name === "darkKingBlob" && spectral&& type === "stun slash") {
        scale = 0;
    }
    if (e.mon.name === "darkKingBlob" && spectral &&type === "tentacle") {
        scale = 0;
    }
    if (e.mon.name === "darkKingBlob" && spectral&& type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "darkKingBlob" && spectral && type === "slow dart") {
        scale = 0;
    }
    if (e.mon.name === "darkKingBlob" && spectral && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "crusher10000" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "crusher10000" && type === "poison") {
        return;
    }
    if (e.mon.name === "crusher10000" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "crusher10000" && type === "slash") {
        scale = 0.5;
    }
    if (e.mon.name === "crusher10000" && type === "tentacle") {
        scale = 0.5;
    }
    if (e.mon.name === "crusher10000" && type === "lightning") {
        scale = 2;
        HP -= 4;
        Phurt = true;
    }
    if (e.mon.name === "crusher10000" && type === "sand pit") {
        scale = 0.5;
    }
    if (e.mon.name === "crusher10000" && type === "stun slash") {
        return;
    }
    if (e.mon.name === "crusher10000" && type === "eruption") {
        scale = 0.5;
    }
     if (e.mon.name === "rainbowBlob" && type === "poison") {
        return;
    }
    if (e.mon.name === "rainbowBlob" && type === "fire") {
        return;
    }
    if (e.mon.name === "rainbowBlob" && type === "lightning") {
        return;
    }
    if (e.mon.name === "rainbowBlob" && type === "sand pit") {
        scale = 0.5;
    }
    if (e.mon.name === "rainbowBlob" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "rainbowBlob" && type === "charge") {
        scale = 0.5;
    }
    if (e.mon.name === "ghostBlob" && type === "slash") {
        return;
    }
    if (e.mon.name === "ghostBlob" && type === "groundPound") {
        return;
    }
    if (e.mon.name === "ghostBlob" && type === "blob cannon") {
        scale = 0;
    }
    if (e.mon.name === "ghostBlob" && type === "stun slash") {
        scale = 0;
    }
    if (e.mon.name === "ghostBlob" && type === "tentacle") {
        scale = 0;
    }
    if (e.mon.name === "ghostBlob" && type === "sand pit") {
        scale = 0;
    }
    if (e.mon.name === "ghostBlob" && type === "slow dart") {
        scale = 0;
    }
    if (e.mon.name === "ghostBlob" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "sirBlobsalot" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "archBlobomancer" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "sirBlobsalot" && !charge && spin !== 0 && pound !== 0) {
        scale /= 4;
    }
    if (e.mon.name === "sirBlobsalot" && type === "charge") {
        scale /= 4;
    }
    if (e.mon.name === "archBlobomancer" && type === "charge") {
        scale /= 4;
    }
    if (e.mon.name === "darkLord" && type === "charge") {
        scale /= 4;
    }
    if (e.mon.name === "darkLord" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "darkLord" && type === "sand pit") {
        return;
    }
    if (e.mon.name === "darkLord" && !talked) {
        scale /= 4;
    }
    if (e.mon.name === "ULTRAMech" && type === "fire") {
        return;
    }
    if (e.mon.name === "ULTRAMech" && type === "poison") {
        return;
    }
    if (e.mon.name === "ULTRAMech" && type === "slash") {
        scale = 0.5;
    }
    if (e.mon.name === "ULTRAMech" && type === "tentacle") {
        scale = 0.5;
    }
    if (e.mon.name === "ULTRAMech" && e.state === "defense") {
        scale /= 4;
    }
    if (e.mon.name === "ULTRAMech" && type === "lightning") {
        scale = 2;
        HP -= 4;
        Phurt = true;
    }
    if(e.mon.name === "livingTornado" && (type === "blob cannon" || type === "slow dart" ||type === "dark missile")){
        return true;
    }
    if (e.mon.name === "livingTornado" && type === "eruption") {
        scale = 0.25;
    }
    if (e.mon.name === "livingTornado" && type === "charge") {
        scale = 0.25;
    }
    if (e.mon.name === "livingTornado" && type === "slash") {
        scale = 0.25;
    }
    if (e.mon.name === "livingTornado" && type === "tentacle") {
        scale = 0.25;
    }
    if (e.mon.name === "livingTornado" && type === "poison") {
        return;
    }
    if (e.mon.name === "livingBlizzard" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "livingBlizzard" && type === "fire") {
        scale = 2;
    }
    if (e.mon.name === "livingBlizzard" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "livingBlizzard" && type === "charge") {
        scale = 0.25;
    }
    if (e.mon.name === "mist" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "mist" && type === "poison") {
        scale = 0.5;
    }
    if (e.mon.name === "queenThunderCloud" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "queenThunderCloud" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "queenThunderCloud" && type === "blob cannon") {
        scale = 0.25;
    }
    if (e.mon.name === "queenThunderCloud" && type === "slow dart") {
        scale = 0.25;
    }
    if (e.mon.name === "queenThunderCloud" && type === "lightning") {
        scale = 0;
    }
    if (e.mon.name === "queenThunderCloud" && type === "eruption") {
        scale = 0.25;
    }
    if (e.mon.name === "thrym" && type === "eruption") {
        scale = 0.75;
    }
    if (e.mon.name === "thrym" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "thrym" && type === "lightning") {
        scale = 0.75;
    }
    if (e.mon.name === "thrym" && type === "slash") {
        scale = 0.75;
    }
    if (e.mon.name === "thrym" && type === "tentacle") {
        scale = 0.75;
    }
    if (e.mon.name === "thrym" && type === "charge") {
        scale = 0.5;
    }
    if (e.mon.name === "frozenWarrior" && type === "eruption") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenWarrior" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "frozenWarrior" && type === "lightning") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenWarrior" && type === "slash") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenWarrior" && type === "tentacle") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenWarrior" && type === "charge") {
        scale = 0.5;
    }
    if (e.mon.name === "frozenDefender" && type === "eruption") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenDefender" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "frozenDefender" && type === "lightning") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenDefender" && type === "slash") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenDefender" && type === "tentacle") {
        scale = 0.75;
    }
    if (e.mon.name === "frozenDefender" && type === "charge") {
        scale = 0.5;
    }
    if (e.mon.name === "frozenDefender" && e.defense === "right" && px>=e.x) {
        scale /= 4;
    }
    if (e.mon.name === "frozenDefender" && e.defense === "left" && px<e.x) {
        scale /= 4;
    }
    if (e.mon.name === "sandSquid" && type === "charge") {
        scale = 0.25;
    }
    if (e.mon.name === "sandSquid" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "sandSquid" && type === "lightning") {
        scale = 0.8;
    }
    if (e.mon.name === "sandSquid" && type === "slash") {
        scale = 1;
    }
    if (e.mon.name === "sandSquid" && type === "stun slash") {
        scale = 1;
    }
    if (e.mon.name === "sandSquid" && type === "blob cannon") {
        scale = 1;
    }
    if (e.mon.name === "sandSquid" && type === "slow dart") {
        scale = 0.25;
    }
    if (e.mon.name === "sandSquid" && type === "tentacle") {
        return;
    }
    if (e.mon.name === "sandSquid" && type === "sand pit") {
        return;
    }
    if (e.mon.name === "sandSquid" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "sandSquid" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "scarab" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "scarab" && type === "eruption") {
        return;
    }
    if (e.mon.name === "scarab" && type === "sand pit") {
        scale = 0;
    }
    if(e.mon.name === "pharaoh" && type === "sand pit"){
        scale = 0;   
    }
    if(e.mon.name === "pharaoh" && type === "poison"){
        scale = 0;   
    }
    if(e.mon.name === "royalSarcophagus" && type === "poison"){
        return;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "fire"){
        scale = 0.1;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "lightning"){
        scale = 0.1;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "slash"){
        scale = 0.1;
    }
    if(e.mon.name === "royalSarcophagus" && type === "blob cannon"){
        scale = 0.1; 
    }
    if(e.mon.name === "royalSarcophagus" && type === "stun slash"){
        scale = 0.1;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "tentacle"){
        scale = 0.1;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "sand pit"){
        return;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "slow dart"){
        scale = 0.1;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "eruption"){
        scale = 0.1;  
    }
    if(e.mon.name === "royalSarcophagus" && type === "charge"){
        scale = 0.1;  
    }
    if(e.mon.name === "darkMirage" && type === "charge"){
        scale = 0;  
    }
    if(e.mon.name === "darkMirage" && type === "sand pit"){
        scale = 0;  
    }
    if(e.mon.name === "darkMirage" && type === "poison"){
        scale = 0;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "poison"){
        scale = 0;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "charge"){
        scale = 0;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "sand pit"){
        scale = 0.5;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "tentacle"){
        scale = 0;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "eruption"){
        scale = 0.25;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "blob cannon"){
        scale = 0.5;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "slow dart"){
        scale = 0.5;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "slash"){
        scale = 0.5;  
    }
    if((e.mon.name === "tentacle" || e.mon.name === "tent") && type === "lightning"){
        scale = 0.5;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "lightning"){
        scale = 0.5;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "blob cannon"){
        scale = 0.15;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "slow dart"){
        scale = 0.15;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "charge"){
        scale = 0;
    }
    if(e.mon.name === "apocalypseKraken" && type === "poison"){
        scale = 0;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "eruption"){
        scale = 0.25;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "slash"){
        scale = 0.5;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "tentacle"){
        scale = 0;  
    }
    if(e.mon.name === "apocalypseKraken" && type === "sand pit"){
        scale = 0.25;  
    }
    if (e.mon.name === "nightshade" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "nightshade" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra1" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra1" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra1" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "ironweedHydra1" && type === "slash") {
        scale = 0.25;
    }
    if (e.mon.name === "ironweedHydra1" && type === "tentacle") {
        scale = 0.25;
    }
    if (e.mon.name === "ironweedHydra1" && type === "lightning") {
        scale = 1.5;
    }
    if (e.mon.name === "ironweedHydra1" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra1" && type === "sand pit") {
        scale = 0.1;
    }
    if (e.mon.name === "ironweedHydra1" && type === "blob cannon") {
        scale = 0.5;
    }
    
    
    if (e.mon.name === "ironweedHydra2" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra2" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra2" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "ironweedHydra2" && type === "slash") {
        scale = 0.25;
    }
    if (e.mon.name === "ironweedHydra2" && type === "tentacle") {
        scale = 0.25;
    }
    if (e.mon.name === "ironweedHydra2" && type === "lightning") {
        scale = 1.5;
    }
    if (e.mon.name === "ironweedHydra2" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra2" && type === "sand pit") {
        scale = 0.1;
    }
    if (e.mon.name === "ironweedHydra2" && type === "blob cannon") {
        scale = 0.5;
    }
    
    
    if (e.mon.name === "ironweedHydra3" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra3" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra3" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "ironweedHydra3" && type === "slash") {
        scale = 0.25;
    }
    if (e.mon.name === "ironweedHydra3" && type === "tentacle") {
        scale = 0.25;
    }
    if (e.mon.name === "ironweedHydra3" && type === "lightning") {
        scale = 1.5;
    }
    if (e.mon.name === "ironweedHydra3" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "ironweedHydra3" && type === "sand pit") {
        scale = 0.1;
    }
    if (e.mon.name === "ironweedHydra3" && type === "blob cannon") {
        scale = 0.5;
    }
    if (e.mon.name === "vampireMosquito" && type !== "heal" && type !== "restore" && type !== "freezePound") {
        e.tp = 100;
        addMonster(e.x,e.y,monsters.infestedMosquito);
    }
    if (e.mon.name === "ruinedAltar" && type === "blob cannon") {
        scale = 0.5;
    }
    if (e.mon.name === "ruinedAltar" && type === "slow dart") {
        scale = 0;
    }
    if (e.mon.name === "ruinedAltar" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "ruinedAltar" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "ruinedAltar" && type === "lightning") {
        scale = 0.5;
    }
    if (e.mon.name === "ruinedAltar" && type === "slash") {
        scale = 0.75;
    }
    if (e.mon.name === "ruinedAltar" && type === "stun slash") {
        scale = 0.5;
    }
    if (e.mon.name === "ruinedAltar" && type === "tentacle") {
        scale = 0.5;
    }
    if (e.mon.name === "ruinedAltar" && type === "sand pit") {
        scale = 0.1;
    }
    if (e.mon.name === "ruinedAltar" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "ruinedAltar" && type === "charge") {
        scale = 0;
    }
    
    if (e.mon.name === "rottenYggdrasil" && type === "blob cannon") {
        scale = 0.5;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "slow dart") {
        scale = 0.25;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "fire") {
        scale = 2;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "stun slash") {
        scale = 0.75;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "tentacle") {
        scale = 0.75;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "sand pit") {
        scale = 0.1;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "eruption") {
        scale = 0.75;
    }
    if (e.mon.name === "rottenYggdrasil" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "lavaHound" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "lavaHound" && type === "eruption") {
        scale = 0;
    }
    if (e.mon.name === "wrathHound" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "wrathHound" && type === "sand pit") {
        scale = 0.3;
    }
    if (e.mon.name === "wrathHound" && type === "eruption") {
        scale = 0;
    }
    if (e.mon.name === "wrathHound" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "demon" && type === "fire") {
        scale = 0;
    }
    if (e.mon.name === "demon" && type === "eruption") {
        scale = 0;
    }
    if (e.mon.name === "demon" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "demon" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "reactor" && type === "groundPound") {
        return;
    }
    if (e.mon.name === "reactor" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "bodySnatcher" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "bodySnatcher" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "necromancer" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "necromancer" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "necromancer" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "eruption") {
        scale = 0.5;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "lightning") {
        scale = 0.5;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "slow dart") {
        scale = 0.25;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "stun slash") {
        scale = 0.75;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "slash") {
        scale = 0.75;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "tentacle") {
        scale = 0.75;
    }
    if (e.mon.name === "sirBlobsalotII" && weapon === "sword and shield" && !charge) {
        scale /= 4;
    }
    if (e.mon.name === "sirBlobsalotII" && type === "charge") {
        scale /= 4;
    }
    if (e.mon.name === "archBlobolich" && type === "charge") {
        scale = 0;
    }
    if (e.mon.name === "archBlobolich" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "archBlobolich") {
        scale = 0.75;
    }
    if (e.mon.name === "castle" && type === "fire") {
        return;
    }
    if (e.mon.name === "castle" && type === "blob cannon") {
        scale = 0.25;
    }
    if (e.mon.name === "castle" && type === "slow dart") {
        scale = 0.1;
    }
    if (e.mon.name === "castle" && type === "sand pit") {
        scale = 0.25;
    }
    if (e.mon.name === "castle" && type === "poison") {
        scale = 0;
    }
    if (e.mon.name === "castle") {
        scale /= 5;
    }
    if (e.mon.name === "adamantFortress") {
        scale /= 5;
    }
    if (type === "poison" && scale !== 0) {
        if (e.poison <= frame){
            e.poison = frame + 5;
        }else if(e.poison >= frame + 500){
            e.poison += 20;
        }else if(e.poison >= frame + 400){
            e.poison += 15;
        }else if(e.poison >= frame + 300){
            e.poison += 12;
        }else if(e.poison >= frame + 200){
            e.poison += 8;
        }else if(e.poison >= frame + 100){
            e.poison += 5;
        }else if(e.poison > frame){
            e.poison += 3;
        }
    }
    if (e.mon.name === "sarcophagus") {
        if(type === "fire") {
            if (e.weakness === 1) {
                scale = 2.0;
            }else if (e.resistance === 1) {
                scale = 0.5;
            }
        }
        if(type === "lightning") {
            if (e.weakness === 2) {
                scale = 2.0;
            }else if (e.resistance === 2) {
                scale = 0.5;
            }
        }
        if(type === "slash") {
            if (e.weakness === 3) {
                scale = 2.0;
            }else if (e.resistance === 3) {
                scale = 0.5;
            }
        }
    }
    if (e.mon.name === "royalSarcophagus") {
        if(type === "fire") {
            if (e.royalWeakness === 1) {
                scale *= 10;
            }
            if (e.royalWeakness2 === 1) {
                scale *= 10;
            }
            if (e.royalWeakness3 === 1) {
                scale *= 10;
            }
        }
        if(type === "lightning") {
            if (e.royalWeakness === 2) {
                scale *= 8;
            }
            if (e.royalWeakness2 === 2) {
                scale *= 8;
            }
            if (e.royalWeakness3 === 2) {
                scale *= 8;
            }
        }
        if(type === "slash") {
            if (e.royalWeakness === 3) {
                scale *= 5;
            }
            if (e.royalWeakness2 === 3) {
                scale *= 5;
            }
            if (e.royalWeakness3 === 3) {
                scale *= 5;
            }
        }
        if(type === "blob cannon") {
            if (e.royalWeakness === 4) {
                scale *= 6;
            }
            if (e.royalWeakness2 === 4) {
                scale *= 6;
            }
            if (e.royalWeakness3 === 4) {
                scale *= 6;
            }
        }
        if(type === "stun slash") {
            if (e.royalWeakness === 5) {
                scale *= 10;
            }
            if (e.royalWeakness2 === 5) {
                scale *= 10;
            }
            if (e.royalWeakness3 === 5) {
                scale *= 10;
            }
        }
        if(type === "tentacle") {
            if (e.royalWeakness === 6) {
                scale *= 5;
            }
            if (e.royalWeakness2 === 6) {
                scale *= 5;
            }
            if (e.royalWeakness3 === 6) {
                scale *= 5;
            }
        }
        if(type === "slow dart") {
            if (e.royalWeakness === 7) {
                scale *= 13;
            }
            if (e.royalWeakness2 === 7) {
                scale *= 13;
            }
            if (e.royalWeakness3 === 7) {
                scale *= 13;
            }
        }
        if(type === "eruption") {
            if (e.royalWeakness === 8) {
                scale *= 5;
            }
            if (e.royalWeakness2 === 8) {
                scale *= 5;
            }
            if (e.royalWeakness3 === 8) {
                scale *= 5;
            }
        }
        if(type === "charge") {
            if (e.royalWeakness === 9) {
                scale *= 5;
            }
            if (e.royalWeakness2 === 9) {
                scale *= 5;
            }
            if (e.royalWeakness3 === 9) {
                scale *= 5;
            }
        }
    }
    if(dif === 0){
        scale *= 1.2;
    }
    if(dif === 4){
        scale *= 1.5;
    }
    if(dif === 2){
        scale *= 0.8;   
    }
    if(godMode){
        scale*=12312312312;   
    }
    scale /= (numPharaohs*0.75 + 1);
    damage *= scale;
    e.jitter = 10 * scale * scale;
    
    if(e.mon.name === "darkKingBlob"){
        kingBlobBurst += damage;
    }
    
    if (damage <= 0 || e.mon.name === "weed" || e.mon.name === "nightshade" || e.mon.name === "poisonWeed"){
        e.jitter = 0;   
    }
    e.hitFrame = frame;
    e.hitType = type;
    e.hp -= damage;
    e.tp += damage;
    if(e.mon.name === "archBlobolich"){
        blobolichDmg += damage;
        cloneTp = e.tp;   
    }
    if(e.mon.name === "sirBlobsalotII"){
        blobsalotDmg += damage;
    }
    if(e.mon.name === "tent"){
        tentDamaged = damage; 
    }
    if(e.mon.name === "ruinedAltar"){
        mechanize -= damage;   
    }
    if(e.mon.name === "tentacle" && tentDamaged !== 0){
        e.hp+=damage;
    }
    if (e.hp >= e.mon.maxHp && e.mon.name !== "bigMosquito" && e.mon.name !== "vampireMosquito"){
        e.hp = e.mon.maxHp;   
    }
    if (e.hp < 0 && e.mon.name !== "sirBlobsalotII" && e.mon.name !== "archBlobolich") {
        e.hp = 0;   
    }
    
    if (e.mon.name === "sandBlob" && (type === "fire" || type === "lightning")){
        e.glass += damage;
        if (e.glass >= 100&&e.hp>0){
            addMonster(e.x,e.y,monsters.glassBlob);
            e.hp = 0;
        }
    }
    if (e.mon.name === "cloud" && (type === "lightning" || type === "stun slash")) {
        addMonster(e.x,e.y,monsters.elcloud);
        e.hp = 0;
    }
    if (e.mon.name === "sarcophagus" && e.hp <= 0) {
        if(level!==60){
            addMonster(e.x,e.y,monsters.mummy);
        }else{
            addMonster(e.x,e.y,monsters.miniMummy);   
        }
    }
    if (e.mon.name === "royalSarcophagus" && e.hp <= 0) {
        if(level !== "B10"){
            addMonster(e.x,e.y,monsters.pharaoh);
            addMonster(e.x-25,e.y,monsters.scarab);
            addMonster(e.x-25,e.y+10,monsters.scarab);
            addMonster(e.x-25,e.y+20,monsters.scarab);
            addMonster(e.x-25,e.y+30,monsters.scarab);
            addMonster(e.x-25,e.y+40,monsters.scarab);
            addMonster(e.x-25,e.y+50,monsters.scarab);
            addMonster(e.x-25,e.y+60,monsters.scarab);
            addMonster(e.x-25,e.y+70,monsters.scarab);
            addMonster(e.x+85,e.y,monsters.scarab);
            addMonster(e.x+85,e.y+10,monsters.scarab);
            addMonster(e.x+85,e.y+20,monsters.scarab);
            addMonster(e.x+85,e.y+30,monsters.scarab);
            addMonster(e.x+85,e.y+40,monsters.scarab);
            addMonster(e.x+85,e.y+50,monsters.scarab);
            addMonster(e.x+85,e.y+60,monsters.scarab);
            addMonster(e.x+85,e.y+70,monsters.scarab);
        }
    }
};

var doAttack = function(x,y,size,type,damage) {
    for( var i = 0; i < es.length; i++) {
        var e = es[i];
        var emx = e.x + e.mon.width/2;
        var emy = e.y + e.mon.height/2;
        var dist = sqrt( (emx-x) * (emx-x) + (emy-y) * (emy-y));
        if (dist< (size + e.mon.width)  * 0.5) {
            if(doDamage(e, type, damage)){
                return true;
            }
            if (type === "freezePound" && e.mon.name !== "reactor"){
                e.bomb = -500;   
            }
            if (type === "fire" || type === "eruption"){
                e.bomb = 0;   
            }
        }   
    }
};
var doAttackBox = function(x,y,w,h,type,damage) {
    for( var i = 0; i < es.length; i++) {
        var e = es[i];
        if (overlap(x, y, w, h, e.x, e.y, e.mon.width, e.mon.height) ) {
            doDamage(e, type, damage);
        }   
    }
};

var EnemyMoveOk = function(tryx, tryy, i, e) {
    return !HitLines(tryx,tryy,e.mon.width,e.mon.height) && !HitEnemies(tryx, tryy, i) && !hitBlocks(tryx,tryy,e.mon.width,e.mon.height);
};

// Monsters move every turn, and also when they get bumped by another monster
var MoveMonster = function(i) {
    var e = es[i];
    
    if (e.frame === frame) {
        // Already moved this frame, don't get in an infinite push loop!
        return;
    }
    e.frame = frame;
    
  // Move monsters
      var tryx=e.x;
      var tryy=e.y;
      var stop = 0;
      if (frame%10===9){
        e.rx = floor(random(1,3));
        e.ry = floor(random(1,3));
      }
      if(e.mon.name === "darkLord" && charging >= 140){
        textSize(120);
        fill(166, 0, 0);
        text("!",px-5+pw/3,py+ph+15);  
      }
      // Robot stops before getting all the way on top of player
      if (e.mon.name === "robot" || e.mon.name === "ULTRAMech") {
        stop = 30;   
      }
      var speed = e.mon.speed;
      if (dif === 0) {
          speed /= 1.5;
      } else if (dif === 4/*baby mode*/) {
          speed /= 2;
      }
      speed *= (numPharaohs*0.75 + 1);
      if(e.mon.name === "bodySnatcher" && e.hasBody){
        speed*=-2;   
      }
      if(e.mon.name === "thrym" && (thrymAttack === "freezePound"||thrymAttack === "absolute 0"||thrymAttack === "rest")){
            speed = 0;
        }
      if(e.mon.name === "ULTRAMech"){
            if(e.state === "defense"){
                speed/=2;   
            }else if(e.state === "attack"){
                if(e.hp <= e.mon.maxHp/2){
                    speed*=-1;   
                }
            }
      }
      if(e.mon.name === "sirBlobsalot" || e.mon.name === "sirBlobsalotII" || e.mon.name === "darkLord" || e.mon.name === "frozenWarrior"){
        if(charging>180){
            speed *= 5;   
        }
      }
      if(((e.mon.name === "darkMage"||e.mon.name === "archBlobolich"||e.mon.name === "necromancer"||e.mon.name==="vampireMosquito") && e.tp >= 100) || (e.mon.name === "clone" && cloneTp >= 100)){
          tryx = random(10,350);
          tryy = random(50,350);
          if(e.mon.name === "vampireMosquito"){
                while(tryx < px+150&&tryx > px-150){
                    tryx = random(10,350);
                    tryy = random(50,350); 
                }
          }
          if(EnemyMoveOk( tryx, tryy, i, e)){
            e.tp = 0;
            soulAttack = 0;
          }
      }
      if((e.mon.name === "archBlobomancer") && e.tp >= 100 && !teleporting){
          tryx = random(100,300);
          tryy = random(100,300);
          if(EnemyMoveOk( tryx, tryy, i, e)){
            e.tp = 0;  
          }
      }
      if(e.mon.name === "archBlobomancer" && teleporting){
            speed = 0;   
      }
      if(e.mon.name === "golem" && frame > e.lastPoundFrame + 300 && frame < e.lastPoundFrame + 400){
           speed = 0;
      }
      if((darkAttack === "blob cannon"||darkAttack === "tentacle"||darkAttack === "lightning") && e.mon.name === "darkLord"){
            speed = speed*-2;   
        }
      if(e.slow > frame){
        if(e.mon.name === "mosquito" || e.mon.name === "infestedMosquito"|| e.mon.name === "scarab"){
            if(tryx<px+pw/2-stop) {
                tryx+=speed/3;   
            }
            if(tryx>px+pw/2+stop) {
                tryx-=speed/3;   
            }
            if(tryy<py+ph/2-stop) {
                tryy+=speed/3;   
            }
            if(tryy>py+ph/2 + stop) {
                tryy-=speed/3;   
            }
        }else if((e.mon.name === "sirBlobsalot" || e.mon.name === "sirBlobsalotII" || (e.mon.name === "darkLord" && charging > 180)||e.mon.name === "frozenWarrior")){
            if(charging > 180){
                if(weapon === "sword and shield"){
                    if(targx <= prex){
                        targx = -2000;
                        tryx-=speed;   
                    }
                    if(targx > prex){
                        targx = 2000;
                        tryx+=speed;   
                    }
                    if(targy<prey-20) {
                        targy = -2000;
                        tryy-=speed;   
                    }
                    if(targy>prey+20) {
                        targy = 2000;
                        tryy+=speed;   
                    }
                }else if(weapon === "spear"){
                    //don't forget to change the other section below
                    if(e.hp<=e.mon.maxHp/2){
                        if(charged === 2){
                            charge = false;
                            weapon = "axe";
                            swipe = 0;
                            charging = 0;   
                            charged = 0;
                        }else{
                            charged++;  
                            charging = 100;
                            
                        }
                    }else{
                        charge = false;
                        weapon = "axe";
                        swipe = 0;
                        charging = 0;
                        charged = 0;
                    }
                    tryx = targx;
                    tryy = targy;
                    e.x = targx;
                    e.y = targy;
                    fill(192,192,192);
                    ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,300,300);
                    if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 300)) {
                        HP -= 300;
                        playerPoundedFrame = frame;
                        playerPoundedEnemy = e;
                    }
                }
            }else{
                if(tryx<px-stop) {
                    tryx+=speed/3;   
                }
                if(tryx>px+stop) {
                    tryx-=speed/3;   
                }
                if(tryy<py-stop) {
                    tryy+=speed/3;   
                }
                if(tryy>py + stop) {
                    tryy-=speed/3;   
                }
            }
            }else if(e.mon.name === "darkLord"){
                if(darkCharge > 0){
                    
                }else{
                    if(tryx<px-stop) {
                        tryx+=speed/1.5;   
                    }
                    if(tryx>px+stop) {
                        tryx-=speed/1.5;   
                    }
                    if(tryy<py-stop) {
                        tryy+=speed/1.5;   
                    }
                    if(tryy>py + stop) {
                        tryy-=speed/1.5;   
                    }
                }
            }else if(e.mon.name === "bodySnatcher" && noBody){
                for(var j = 0; j < es.length; j++){
                    var e2 = es[j];
                    if(e2.hasBody){
                        if(tryx<e2.x-stop) {
                            tryx+=speed/3;   
                        }
                        if(tryx>e2.x+stop) {
                            tryx-=speed/3;   
                        }
                        if(tryy<e2.y-stop) {
                            tryy+=speed/3;   
                        }
                        if(tryy>e2.y + stop) {
                            tryy-=speed/3;   
                        }
                        if(overlapCircle(e2.x+e2.mon.width/2, e2.y+e2.mon.height/2, e.x+e.mon.width/2, e.y+e.mon.height/2, e2.mon.width+20, e.mon.width)) {
                            e2.hasBody = false;
                            e.hasBody = true;
                            e.x = random(5,340);
                            e.y = random(50,340);
                        }
                    }
                }
            }else{
                if(tryx<px-stop) {
                   tryx+=speed/3;   
                }
                if(tryx>px+stop) {
                    tryx-=speed/3;   
                }
                if(tryy<py-stop) {
                    tryy+=speed/3;   
                }
                if(tryy>py + stop) {
                    tryy-=speed/3;   
                }
        }
      }else{
        if(e.mon.name === "mosquito" ||e.mon.name==="infestedMosquito"|| e.mon.name === "scarab"){
            if(tryx<px+pw/2-stop) {
                tryx+=speed;   
            }
            if(tryx>px+pw/2+stop) {
                tryx-=speed;   
            }
            if(tryy<py+ph/2-stop) {
                tryy+=speed;   
            }
            if(tryy>py+ph/2 + stop) {
                tryy-=speed;   
            }
        }else if(e.mon.name === "sirBlobsalot" || e.mon.name === "sirBlobsalotII" || (e.mon.name === "darkLord" && charging >180) || e.mon.name === "frozenWarrior"){
            if(charging > 180){
                if(weapon === "sword and shield"){
                    if(targx <= prex){
                        targx = -2000;
                        tryx-=speed;   
                    }
                    if(targx > prex){
                        targx = 2000;
                        tryx+=speed;   
                    }
                    if(targy<prey-20) {
                        targy = -2000;
                        tryy-=speed;   
                    }
                    if(targy>prey+20) {
                        targy = 2000;
                        tryy+=speed;   
                    }
                }else if(weapon === "spear"){
                    //don't forget to change the section above
                    if(e.hp<=e.mon.maxHp/2){
                        if(charged === 2){
                            charge = false;
                            weapon = "axe";
                            swipe = 0;
                            charging = 0;   
                            charged = 0;
                        }else{
                            charged++;  
                            charging = 100;
                            
                        }
                    }else{
                        charge = false;
                        weapon = "axe";
                        swipe = 0;
                        charging = 0;
                        charged = 0;
                    }
                    tryx = targx;
                    tryy = targy;
                    e.x = targx;
                    e.y = targy;
                    fill(192,192,192);
                    ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,300,300);
                    if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 300)) {
                        HP -= 300;
                        playerPoundedFrame = frame;
                        playerPoundedEnemy = e;
                    }
                }
            }else{
                if(tryx<px-stop) {
                    tryx+=speed;   
                }
                if(tryx>px+stop) {
                    tryx-=speed;   
                }
                if(tryy<py-stop) {
                    tryy+=speed;   
                }
                if(tryy>py + stop) {
                    tryy-=speed;   
                }
            }
        }else if(e.mon.name === "darkLord"){
            if(darkCharge > 0){
                
            }else{
                if(tryx<px-stop) {
                    tryx+=speed;   
                }
                if(tryx>px+stop) {
                    tryx-=speed;   
                }
                if(tryy<py-stop) {
                    tryy+=speed;   
                }
                if(tryy>py + stop) {
                    tryy-=speed;   
                }
            }
        }else if(e.mon.name === "livingTornado"){
            if(e.rx === 1){
                tryx+=speed;
            }else if(e.rx === 2){
                tryx-=speed;   
            }
            if(e.ry === 1){
                tryy+=speed;
            }else if(e.ry === 2){
                tryy-=speed;   
            }
        }else if(e.mon.name === "bodySnatcher" && noBody && !e.hasBody){
            for(var j = 0; j < es.length; j++){
                var e2 = es[j];
                if(e2.hasBody){
                    if(tryx<e2.x-stop) {
                        tryx+=speed;   
                    }
                    if(tryx>e2.x+stop) {
                        tryx-=speed;   
                    }
                    if(tryy<e2.y-stop) {
                        tryy+=speed;   
                    }
                    if(tryy>e2.y + stop) {
                        tryy-=speed;   
                    }
                    if(overlapCircle(e2.x+e2.mon.width/2, e2.y+e2.mon.height/2, e.x+e.mon.width/2, e.y+e.mon.height/2, e2.mon.width+20, e.mon.width)) {
                        e2.hasBody = false;
                        e.hasBody = true;
                        e.x = random(5,340);
                        e.y = random(50,340);
                    }
                }
            }
        }else{
            if(tryx<px-stop) {
                tryx+=speed;   
            }
            if(tryx>px+stop) {
                tryx-=speed;   
            }
            if(tryy<py-stop) {
                tryy+=speed;   
            }
            if(tryy>py + stop) {
                tryy-=speed;   
            }
        }
      }
      if(e.mon.name === "livingTornado"){
        e.hitFrame -= 5;  
      }
      if(e.mon.name === "livingBlizzard"){
        e.hitFrame -= 2;  
      }
      if(e.mon.name === "thrym"){
          if(es.length<=2){
              
          }else{
            speed = e.mon.speed; 
          }
      }
      // If getting pushed away from player, move the opposite direction
      if( ((e.hitType === "groundPound" && e.hitFrame > frame - 30) || (e.hitType === "slash" && e.hitFrame > frame - 5) || (e.hitType === "tentacle" && e.hitFrame > frame - 10)||(e.hitType === "eruption" && e.hitFrame > frame - 50))&&e.mon.name!=="ghostBlob"&&e.mon.name!=="clone"&&e.mon.name!=="archBlobolich"&&e.mon.name!=="demon"&&e.mon.name!=="bodySnatcher"&&e.mon.name!=="pharaoh"&&e.mon.name!=="inkBlob"&&e.mon.name!=="vampireMosquito"&&e.mon.name!=="darkMage"&&e.mon.name!=="necromancer"&&e.mon.name!=="archBlobomancer") {
        if((e.mon.name === "darkLord"&&(darkAttack === "blob cannon"||darkAttack === "tentacle"||darkAttack === "lightning"))||e.mon.name === "ULTRAMech"){
            return; 
        }
        if(e.mon.name === "confuseClone"){
            speed = 1;   
        }
        if(e.x<px) {
            tryx=e.x - speed * 6;
        }
        if(e.x>px) {
            tryx=e.x + speed * 6;
        }
        if(e.y<py) {
            tryy=e.y - speed * 6;   
        }
        if(e.y>py) {
            tryy=e.y + speed * 6;   
        }
          // bump other monsters that it runs into
          if (e.mon.speed > 0) {
              for(var j = 0; j < es.length; j++){
                if (j === i) {
                    // Don't push self
                    continue;
                }
                var e2 = es[j];
                // Some monsters are immune to pushing
                if ( e2.mon.name === "sandKing" || e2.mon.name === "kingBlob" || e2.mon.name === "darkKingBlob" || e2.mon.name === "poisonFlower" || e2.mon.name === "miniPoisonFlower" || e2.mon.name === "bomb" || e2.mon.name === "reactor" || e2.mon.name === "ghostBlob"||e2.mon.name==="inkBlob"||e2.mon.name ==="darkLord"||e2.mon.name ==="ULTRAMech"||e.mon.name === "pharaoh" || e2.mon.name === "demon" || e2.mon.name === "clone" || e2.mon.name === "archBlobolich"|| e2.mon.name === "bodySnatcher") {
                    continue;
                }
                // If it would run into it, start it moving
                if ( overlap(tryx, tryy, es[i].mon.width, es[i].mon.height, e2.x, e2.y, e2.mon.width, e2.mon.height ) ) {
                    e2.hitType = e.hitType;
                    e2.hitFrame = e.hitFrame;
                    e2.jitter = 0;
                    // Let it try to move out of the way now
                    MoveMonster(j);
                }
              }
          }
        
      }
      if(EnemyMoveOk( tryx, tryy, i, e)||e.mon.name === "ghostBlob"||e.mon.name === "demon" || e.mon.name==="inkBlob") {
          if(e.mon.name === "sirBlobsalot"){
            if(talked && (!charge || charging > 180)&&spin!==0){
                e.x = tryx;
                e.y = tryy;
            }
          }else if(e.mon.name === "sirBlobsalotII"){
            if((!charge || charging > 180)&&spin!==0){
                e.x = tryx;
                e.y = tryy;
            }
          }else if(e.mon.name === "frozenWarrior"){
            if((!charge || charging > 180)){
                e.x = tryx;
                e.y = tryy;
            }
          }else if(e.mon.name === "archBlobomancer"){
              if(talked){
                e.x = tryx;
                e.y = tryy;
              }
            }else if(e.mon.name === "darkLord"){
              if(talked){
                e.x = tryx;
                e.y = tryy;
              }
            }else if(e.mon.name === "bomb" && level === "B6"){
                e.x+=2;
            }else{
            e.x = tryx;
            e.y = tryy;
          }
      }else if(EnemyMoveOk( e.x, tryy, i, e)) {
          e.y=tryy;
          if((e.mon.name === "sirBlobsalot"|| e.mon.name === "sirBlobsalotII" ||e.mon.name === "darkLord") && charging > 180){
            if(e.mon.name !== "sirBlobsalotII"){
                testFrame = 0;
                charging = 0;
            }else{
                charging = 120;   
            }
            if(e.mon.name !== "sirBlobsalotII"){
                charge = false;
                charged = 0;
            }else{
                if(e.hp<=e.mon.maxHp/2){
                    if(charged === 3){
                        charge = false;
                        charged = 0;
                        testFrame2 = 0;
                        weapon = "greatsword";
                    }
                }else{
                    if(charged === 1){
                        charge = false;
                        charged = 0;
                        testFrame2 = 0;
                        weapon = "greatsword";
                    }   
                }
                charged++;   
            }
            darkLightning = 30;
            fill(255, 47, 0);
            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,250,250);
            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 250)&&!Pinvincible) {
                HP -= 300;
                playerPoundedFrame = frame;
                playerPoundedEnemy = e;
            }
            if(e.hp <= 3000){
                cycle = "spin";
            }else{
                cycle = "charge";
            }
          }
          if((e.mon.name === "frozenWarrior") && charging > 180){
            charge = false;
            charging = 0;
            testFrame2 = 0;
            fill(82, 235, 255);
            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,250,250);
            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 250)&&!Pinvincible) {
                HP -= 200;
                stun = 80;
                playerPoundedFrame = frame;
                playerPoundedEnemy = e;
            }
          }
      }else if(tryx!==e.x && EnemyMoveOk( tryx, e.y, i, e)) {
        e.x=tryx;   
        if((e.mon.name === "sirBlobsalot"|| e.mon.name === "sirBlobsalotII" ||e.mon.name === "darkLord") && charging > 180){
            if(e.mon.name !== "sirBlobsalotII"){
                testFrame = 0;
                charging = 0;
            }else{
                charging = 120;   
            }
            if(e.mon.name !== "sirBlobsalotII"){
                charge = false;
                charged = 0;
            }else{
                if(e.hp<=e.mon.maxHp/2){
                    if(charged === 3){
                        charge = false;
                        charged = 0;
                        testFrame2 = 0;
                        weapon = "greatsword";
                    }
                }else{
                    if(charged === 1){
                        charge = false;
                        charged = 0;
                        testFrame2 = 0;
                        weapon = "greatsword";
                    }   
                }
                charged++;   
            }
            darkLightning = 30;
            fill(255, 47, 0);
            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,250,250);
            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 250)&&!Pinvincible) {
                HP -= 300;
                playerPoundedFrame = frame;
                playerPoundedEnemy = e;
            }
            if(e.hp <= 3000){
                cycle = "spin";
            }else{
                cycle = "charge";
            }
        }
        if((e.mon.name === "frozenWarrior") && charging > 180){
            charge = false;
            charging = 0;
            testFrame2 = 0;
            fill(82, 235, 255);
            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,250,250);
            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 250)&&!Pinvincible) {
                HP -= 200;
                stun = 160;
                playerPoundedFrame = frame;
                playerPoundedEnemy = e;
            }
          }
      }
      if(e.mon.name === "sirBlobsalotII" && charge && weapon === "spear"){
          e.y-=10;
      }
};

var addButton = function(name, x, y, w, h) {
    var tw = textWidth(name);
    if (w === 0){
        w = tw+20;
    } else {
    }
    var inside = false;
    if (mouseX >= x && mouseX <= x+w && mouseY >= y && mouseY <= y+h) {
        inside = true;
        fill(48, 48, 48);
    }else{
        fill(89, 88, 88);
    }
    rect(x,y,w,h);
    fill(255, 255, 255);
    text(name, x+(w-tw)/2, y+h-5);
    return mouseJustPressed && inside;
};

draw = function() {
    if (!mouseWasPressed && mouseIsPressed){
        mouseJustPressed = true;   
    }else{
        mouseJustPressed = false;   
    }
    mouseWasPressed = mouseIsPressed;
    Phurt = false;
    tR--;
    if(tR < 0){
        tR = 0;   
    }
    if(charging <= 180 && weapon !== "spear"){
         targx = px;
         targy = py;
    }
    if(charging === 130 && weapon === "spear"){
         targx = px;
         targy = py;
    }
    if(teleporting && cycle2 === "bigShot"){
        bigSize++;   
    }
    if(bigSize>80){
        bigSize = 80;   
    }
    pcharging--;
    darkCharge--;
    hurt--;
    dswitch++;
    if(level === "???" && !talked){
        if(frame >= 100){
            darknessAlpha--;   
        }
    }
    for (var i = 0; i<es.length; i++){
        var e = es[i];
        if(e.mon.name === "darkMage" || e.mon.name === "necromancer" || e.mon.name === "archBlobolich"){
            e.tp += 0.1;
        }
        if(e.mon.name === "archBlobolich"){
            cloneTp = e.tp;   
        }
        if((e.mon.name === "sirBlobsalot"||e.mon.name === "sirBlobsalotII"||e.mon.name === "darkLord"||e.mon.name === "frozenWarrior") && charge <= 180){
            prex = e.x;
            prey = e.y;
        }
    }
    //main menu
    if (level === 0) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Dragon Adventure", 37, 80);
        textSize(15);
        text("Version 2.8.1",10,30);
        if(darkMode === "ON"){
            tint(55, 55, 55, 255);
            image(player,260,100);
            noTint();
        }else{
            image(getImage("avatars/piceratops-ultimate"),260,100);
        }
        textSize(40);
        if (addButton("Play", 20, 120, 0, 40)) {
            level = 1;   
            StartLevel();
        }
        textSize(35);
        text("Nope",20,200);
        textSize(40);
        if(dif !== 5 && oneLife !== "ON"){
            if (addButton("Level Select", 20, 170, 0, 40)) {
               level = -1;
            }
        }
        
        if (addButton("Difficulty", 20, 220, 0, 40)) {
            level = -20; 
        }
        if (addButton("Help", 20, 270, 0, 40)) {
            level = -9;
        }
        if (addButton("Update log", 20, 320, 0, 40)) {
            level = -10;
        }
        if (addButton("Bestiary", 220, 257, 0, 40)) {
            level = -50;
        }
        if (addButton("Credits", 248, 320, 0, 40)) {
            level = -49;
        }
        return;
    }
    //credits
    if (level === -49) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Credits!", 125, 35);
        textSize(20);
        text("The code, concept, and lore:", 25, 125);
        if (addButton("Jibanyanc!", 281, 102, 0, 29)) {
            println("My sub page :D\\nhttps://www.khanacademy.org/computer-programming/jibanyancs-sub-page/6293086086414336");
        }
        text("Beta testing/bug finding and bestiary:", 25, 255);
        if (addButton("Obsta07!", 25, 268, 0, 29)) {
            println("Here's my epic beta tester's sub page!\\nhttps://www.khanacademy.org/computer-programming/sub-to-obsta07/6295863248863232");
        }
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        return;
    }
    //level select
    if (level === -1) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Starter World", 80, 35);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i), 40 * (i-1) , 45, 35, 30)) {
                level = i;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Gear World", 95, 120);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+10), 40 * (i-1) ,130, 35, 30)) {
                level = i + 10;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Sky World", 104, 205);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+20), 40 * (i-1) ,215, 35, 30)) {
                level = i + 20;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Ice World", 115, 290);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+30), 40 * (i-1) ,300, 35, 30)) {
                level = i + 30;
                StartLevel();
                return;
            }
        }
        if (addButton("Next", 332, 355, 0, 30)) {
            level = -2;
        }
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        return;
    }
    if (level === -2) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Water World", 100, 35);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+40), 40 * (i-1) , 45, 35, 30)) {
                level = i+40;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Sand World", 101, 120);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+50), 40 * (i-1) , 130, 35, 30)) {
                level = i+50;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Jungle World", 101, 205);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+60), 40 * (i-1) , 215, 35, 30)) {
                level = i+60;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Poison World", 101, 290);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+70), 40 * (i-1) , 300, 35, 30)) {
                level = i+70;
                StartLevel();
                return;
            }
        }
        if (addButton("Back", 5, 355, 0, 30)) {
            level = -1;
        }
        if (addButton("Next", 332, 355, 0, 30)) {
            level = -3;
        }
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        return;
    }
    if (level === -3) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Lava World", 100, 35);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+80), 40 * (i-1) , 45, 35, 30)) {
                level = i+80;
                StartLevel();
                return;
            }
        }
        textSize(40);
        text("Dark World", 104, 120);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str(i+90), 40 * (i-1) , 130, 35, 30)) {
                level = i+90;
                StartLevel();
                return;
            }
        }
        if (addButton("101", 120, 175, 35, 30)) {
            level = 101;
            StartLevel();
            return;
        }
        if (addButton("💀", 240, 175, 35, 30)) {
            level = -99;
        }
        if (addButton("Back", 5, 355, 0, 30)) {
            level = -2;
        }
        if (addButton("Next", 332, 355, 0, 30)) {
            level = -4;
        }
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        return;
    }
    if (level === -4) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Bonus World", 100, 35);
        textSize(20);
        for (var i = 1; i <= 10; i++) {
            if (addButton(str("B"+i), 40 * (i-1) , 45, 35, 30)) {
                level = "B"+i;
                StartLevel();
                return;
            }
        }
        text("Welcome to the bonus world! This world is not for the faint of heart! These brutal levels will give even the best of players a struggle! Most of these enemies have special ways to take them down that require knowledge about every attack in the game! I suggest reading the bestiary and beating the game in at least easy mode before attempting these harsh levels!",5,100,400,9999999999);
        if (addButton("Back", 5, 355, 0, 30)) {
            level = -3;
        }
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        return;
    }
    if (level === -99) {
        background(102, 97, 97);
        textSize(20);
        if (addButton("Phase1", 100, 175, 72, 30)) {
            level = 102;
            StartLevel();
            return;
        }
        if (addButton("Phase2", 250, 175, 72, 30)) {
            level = 102;
            phase2 = true;
            StartLevel();
            return;
        }
        if (addButton("Phase3", 175, 229, 72, 30)) {
            level = "???";
            StartLevel();
            return;
        }
        if (addButton("Back", 5, 355, 0, 30)) {
            level = -3;
        }
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        return;
    }
    //update log
    var updates = [
    "- Added alerts for when to use charge 2/22/2025",
    "- Made heal and restore scale with difficulty 2/22/2025",
    "- Fixed some bugs on B10! 2/22/2025",
    "- Speedrun mode works on all difficulties! 2/22/2025",
    "- Finished B10! Every level is done! 2/22/2025",
    "- Fixed bug that prevented skipping on level 101 12/1/2024",
    "- Nerfed and changed ArchBlobomancer 9/20/2024",
    "- Completely revamped boss 9! 9/19/2024",
    "- Finished bonus level 9! 6/30/2024",
    "- Finished bonus level 7 and 8! 6/19/2024",
    "- Revamped most of level 90 dialogue! 5/3/2024",
    "- Changed the lightning attack in darklord phase two! 4/20/2024",
    "- Finished bonus level 5 and 6! 4/16/2024",
    "- Biiiiig True Darklord nerf! 3/15/2024",
    "- Revamped every single difficulty! 3/14/2024",
    "- Finished bonus level 3 and 4! 2/27/2024",
    "- ArchBlobomancer got some new dialogue! 2/14/2024",
    "- Waaaay too many bug fixes! 2/14/2024",
    "- Bonus levels 1 and 2 are done! 2/14/2024",
    "- Dark Lord finished! (8 months later) Has 3 phases! 1/26/2024",
    "- Dark world mostly finished! Still need Dark Lord 5/7/2023",
    "- 9th boss, the castle, FINALLY CAME OUT! 4/25/2023",
    "- Poison became OP 4/25/2023",
    "- New warning when sandpits spawn in level 60 4/25/2023",
    "- Hint on level 51 on how to beat sand blobs 4/25/2023",
    "- Small hint on how to change weapons added 4/25/2023",
    "- Slightly faster MP regen in normal mode 12/16/2022",
    "- Levels 81-89 are out! Comes with a new move! 11/16/2022",
    "- Tutorials button got turned back into help button 11/16/2022",
    "- Sandking got nerfed! Slower summon speeds! 7/25/2022",
    "- FreezePound got nerfed! Now costs 80 MP 7/15/2022",
    "- Levels 71-80 are here! Comes with a new attack! 7/15/2022",
    "- Frost beast has once again been nerfed 7/11/2022",
    "- Levels 61-70 are here! Comes with a new attack! 6/9/2022",
    "- Enemies taking kb will do kb to enemies they hit! 5/23/2022",
    "- The tentacle attack now does knock back! 5/23/2022",
    "- Second tutorial finished! 5/22/2022",
    "- Fixed bug that made robots prevent attacks 5/21/2022",
    "- Speedrun mode now gives normal MP regeneration 5/18/2022",
    "- The help menu has been replaced with tutorials 5/14/2022",
    "- Tutorials have been added! 5/14/2022",
    "- Easy mode got easier! 4/23/2022",
    "- New weapons, hotkey switches, Queen cloud nerf 3/15/2022",
    "- The new world is here! Levels 51-60! 3/13/2022",
    "- Frost beast nerfed. Slower summon time 2/26/2022",
    "- Players can't go to level select in speedrun mode 2/26/2022",
    "- Speedrun mode is here! Turn it on in difficulty 2/25/2022",
    "- Kraken boss finished! (5th boss) Very fun! 2/5/2022",
    "- Difficulty has been added! 2/4/2022",
    "- Help button works now! 2/3/2022",
    "- Pressing M while dead brings you back to menu 2/3/2022",
    "- Added update log 2/2/2022",
    "- Level select works now 2/1/2022",
    "- Added menu! Only play button works 1/29/2022",
    "- The movement sytem is less buggy now! 1/22/2022",
    "- Levels 41-49 are finished! 1/21/2022",
    "- Frost Beast has been finished!! (fourth boss) 1/17/2022",
    "- Queencloud (third boss) has been nerfed 1/15/2022",
    ];
    
    if (level === -10) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Update log", 100, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(14);
        
        for (var i = 0; i < 15 ; i++) {
            text(updates[i], 5, 70+20*i);
        }        
        
        textSize(20);
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -11;
        }
        return;   
    }
    if (level === -11) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Update log", 100, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(14);
        for (var i = 15; i < 30 ; i++) {
            text(updates[i], 5, 70+20*(i-15));
        }
        textSize(20);
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -12;
        }
        textSize(20);
        if (addButton("Back", 5, 368, 0, 30)) {
            level = -10;
        }
        return;   
    }
    if (level === -12) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Update log", 100, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(14);
        for (var i = 30; i < 45 ; i++) {
            text(updates[i], 5, 70+20*(i-30));
        }
        textSize(20);
        if (addButton("Back", 5, 368, 0, 30)) {
            level = -11;
        }
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -13;
        }
        return;   
    }
    if (level === -13) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Update log", 100, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(14);
        for (var i = 45; i < 60 ; i++) {
            text(updates[i], 5, 70+20*(i-45));
        }
        textSize(20);
        if (addButton("Back", 5, 368, 0, 30)) {
            level = -12;
        }
        return;   
    }
    if (level === -31){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
      background(102, 97, 97);
      textSize(50);
      fill(255, 255, 255);
      text("Excellent!",100,50);
      text(hoursStr + ":" + minutesStr + ":" + secondsStr,120,150);
      textSize(20);
      text(" Press M to head back to category selection\\n\\n                 Catagory: (10 Levels)",2,250);
        text("Difficulty mode:",90,200);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",231,200);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",231,200);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",231,200);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",231,200);
        }
      if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = -30;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            speedrunMode = false;
            corrupted = 0;
            skipB10 = false;
         }
      
      return;
    } 
    if (level === -32){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
      background(66, 194, 245);
      textSize(50);
      fill(255, 255, 255);
      text("Super!",125,50);
      text(hoursStr + ":" + minutesStr + ":" + secondsStr,120,150);
      textSize(20);
      textSize(20);
      text(" Press M to head back to category selection\\n\\n                 Catagory: (30 Levels)",2,250);
        text("Difficulty mode:",90,200);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",231,200);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",231,200);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",231,200);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",231,200);
        }
      if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = -30;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            speedrunMode = false;
            corrupted = 0;
            skipB10 = false;
         }
      
      return;
    } 
    if (level === -33){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
      background(0, 15, 255);
      textSize(50);
      fill(255, 255, 255);
      text("Fantastic!",100,50);
      text(hoursStr + ":" + minutesStr + ":" + secondsStr,120,150);
      textSize(20);
      text(" Press M to head back to category selection\\n\\n                 Catagory: (50 Levels)",2,250);
        text("Difficulty mode:",90,200);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",231,200);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",231,200);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",231,200);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",231,200);
        }
      if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = -30;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            speedrunMode = false;
            corrupted = 0;
            skipB10 = false;
         }
      
      return;
    } 
    if (level === -34){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
      background(108, 63, 36);
      textSize(50);
      fill(255, 255, 255);
      text("Stupendous!",65,50);
      text(hoursStr + ":" + minutesStr + ":" + secondsStr,120,150);
      textSize(20);
      text(" Press M to head back to category selection\\n\\n                 Catagory: (90 Levels)",2,250);
        text("Difficulty mode:",90,200);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",231,200);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",231,200);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",231,200);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",231,200);
        }
      if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = -30;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            speedrunMode = false;
            corrupted = 0;
            skipB10 = false;
         }
      
      return;
    } 
    if (level === -35){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
      background(71, 68, 68);
      textSize(50);
      fill(255, 255, 255);
      text("Incredible!",90,50);
      text(hoursStr + ":" + minutesStr + ":" + secondsStr,120,150);
      textSize(20);
      text(" Press M to head back to category selection\\n\\n                 Catagory: (Story Mode)",2,250);
        text("Difficulty mode:",90,200);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",231,200);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",231,200);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",231,200);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",231,200);
        }
      if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = -30;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            speedrunMode = false;
            corrupted = 0;
            skipB10 = false;
         }
      
      return;
    } 
    if (level === -36){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
      background(0, 0, 0);
      textSize(50);
      fill(255, 255, 255);
      text("Unbelievable!",60,50);
      text(hoursStr + ":" + minutesStr + ":" + secondsStr,120,150);
      textSize(20);
      text(" Press M to head back to category selection\\n\\n                 Catagory: (All Levels)",2,250);
        text("Difficulty mode:",90,200);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",231,200);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",231,200);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",231,200);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",231,200);
        }
      if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = -30;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            speedrunMode = false;
            corrupted = 0;
            skipB10 = false;
         }
      
      return;
    } 
    //tutorial
    if (level === -9) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Help", 154, 35);
        textSize(15);
        text("Welcome to Dragon Adventure! To play, use WASD or the arrow keys to move. Use the space bar to attack!\\n \\nAll attacks cost MP. Some attacks you can hold down the space bar, others you can't. To switch between attacks, use keys 1,2,3,4,5,6,7,8,9,0,-,=,p,[,]\\n\\n",5,50,380,999999);
        textSize(20);
        fill(255, 145, 0);
        ellipse(170,220,60,60);
        fill(255, 255, 255);
        rect(100,330,30,10);
        image(getImage("avatars/piceratops-ultimate"),30,180,pw+20,ph+20);
        text("Fire / Lightning: HOLD",30,280);
        image(getImage("avatars/piceratops-ultimate"),30,290,pw+20,ph+20);
        text("Ground Pound / Slash: PRESS",30,385);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -131234567890;
        }
        return;
    }
    if (level === -131234567890) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Help", 154, 35);
        textSize(15);
        text("You will start off with only 4 attacks. Every ten levels has a boss. After defeating it, you will go to the next world and gain a new attack! Some enemies have weaknesses, immunities and resistances.\\nIf any more help is needed, consult the BESTIARY for tips!\\n\\nEach world has its own special feature that you can figure out on your own!\\n\\nThere will be many twists and turns along your journey,\\nbut it's important that you keep at it. EVERY LEVEL HAS A SOLUTION, and every move will be useful in some way, even late into the adventure. \\n\\n                  Good luck and have fun!",5,50,380,999999);
        textSize(20);
        
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -9;
        }
        return;
    }
    //BESTIARY
    if (level === -50) {
        
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Bestiary", 115, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(15);
        text("Welcome to the bestiary! Here, you will find lore and tips about various enemies and bosses! Enemies are sorted by world! Special thanks to Obsta07 who made all of this!",5,50,400,9999);
        text("A world that takes place in abandoned ruins.", 20, 120+60);
           
        text("A factory-like location that builds with several machines.", 20, 220+20); 
    
        text("A place high up in the clouds.", 20, 245+60);
        
        text("A freezing cave filled with slippery ice.", 20, 310+54);
        
        textSize(20);
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -51;
        }
        if (addButton("Starter World", 20, 120, 0, 40)) {
           level = -100;
        }
        if (addButton("Gear World", 20, 185, 0, 40)) {
            level = -200; 
        }
        if (addButton("Sky World", 20, 245, 0, 40)) {
            level = -300;
        }
        if (addButton("Ice World", 20, 310, 0, 40)) {
            level = -400;
        }
        return;
    }
    if (level === -100){
        background(102, 97, 97);
        textSize(20);
        text("Starter World",2,20);
        text("Click on an enemy \\nto learn about them!",5,160);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -50;
        }
        if (addButton("", 40, 36, 100, 101)) {
            level = -101;
        }
        if (addButton("", 40, 220, 100, 101)) {
            level = -102;
        }
        if (addButton("", 234, 0, 200, 400)) {
            level = -103;
        }
        image(getImage("avatars/spunky-sam-green"),40,36,100,100);
        image(getImage("avatars/spunky-sam-green"),80,255,20,20);
        image(getImage("avatars/spunky-sam-green"),200,36,300,300);
        return;
    }
    
    if (level === -101){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -100;
        }
        textSize(15);
        fill(143, 58, 8);
        text("BLOB\\n/bläb/\\n\\nHealth: 100\\nSpeed: Normal\\nDamage: Normal",10,30);
        text("These blobs are your typical enemy. They can be\\neasily dispatched with any move in your current\\nweapon lineup. Slash is fairly effective against them.\\n\\nAgainst groups, try pushing them back and taking \\nthem on one at a time. If you're more experienced,\\ntry attacking two at once!\\nHow did they become this way?",5,180);
        fill(102, 97, 97);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-green"),290,36,100,100);
        return;
    }
    
    if (level === -102){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -100;
        }
        textSize(15);
        fill(143, 58, 8);
        text("MINI BLOB\\n/ˈminē bläb/\\n\\nHealth: 10\\nSpeed: Turbo\\nDamage: Normal",10,30);
        text("Smaller versions of their regular counterparts.\\nThey're pretty weak, so try an attack like Fire to\\ndispose of them very quickly. Same thing applies\\nto groups of them",5,180);
        fill(102, 97, 97);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-green"),325,80,20,20);
        return;
    }
    if (level === -103){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -100;
        }
        textSize(15);
        fill(143, 58, 8);
        text("KING BLOB\\n/kiNG bläb/\\n\\nHealth: 1000\\nImmune to: Ground Pound\\nDamage: Normal",10,30);
        text("The king of the blobs. Wants to \\nstop the dragon in his path. His\\ncorruption led his assistants' \\ncorruption as well.\\n\\nHe will use his minions to attack\\nyou. Take them out quickly! Make\\nsure to dodge his projectiles too.\\n\\n                If you win, you will\\n                unlock Blob Cannon.",5,180);
        fill(102, 97, 97);
        rect(233,-1,300,400);
        image(getImage("avatars/spunky-sam-green"),200,36,300,300);
        return;
    }
    
    
    if (level === -200){
        background(82, 49, 0);
        textSize(20);
        fill(255, 255, 255);
        text("Gear World",200,370);
        text("Click on an enemy to learn about them!",5,160);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -50;
        }
        if (addButton("", 4, 240, 120, 120)) {
            level = -201;
        }
        if (addButton("", 140, 240, 100, 101)) {
            level = -202;
        }
        if (addButton("", 280, 240, 100, 101)) {
            level = -203;
        }
        if (addButton("", -1, 0, 400, 120)) {
            level = -204;
        }
        fill(255, 133, 51);
        ellipse(67,300,110,110);
        image(getImage("avatars/spunky-sam-red"),17,250,100,100);
        image(getImage("avatars/spunky-sam-orange"),180,275,20,20);
        image(getImage("avatars/robot_male_1"),280,240,100,100);
        fill(56, 32, 1);
        pushMatrix();
        translate(0,-31);
     gear(200,-30,180,150,0+frame,360+frame,15);
     line(180,80,150,55);
     line(220,80,250,55);
     frame++;
     popMatrix();
        return;
    }
    if (level === -201){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -200;
        }
        textSize(15);
        fill(143, 58, 8);
        text("FIRE BLOB\\n/ˈfī(ə)r bläb/\\n\\nHealth: 150        Immune to: Fire\\nSpeed: Normal\\nDamage: High",10,30);
        text("A bit harder than regular Blobs. They seem well\\nacquainted with them though. You may find them together.\\nDon't use Fire though, as their firey aura will protect them.\\n\\nIf you're going against multiple, use Lightning.\\nIf not, Slash is still a good option.\\n\\nAs you progress through the game, keep in mind that you\\ngain an additional 50 max HP and MP, in addition to a new\\nmove after each boss!",5,160);
        fill(82, 49, 0);
        rect(280,36,110,110);
        fill(255, 133, 51);
        ellipse(339,90,100,100);
        image(getImage("avatars/spunky-sam-red"),290,36,100,100);
        return;
    }
    if (level === -202){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -200;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ELECTRIC BLOB\\n/əˈlektrik bläb/\\n\\nHealth: 50        Immune to: Lightning\\nSpeed: Fast     Properties: Stun\\nDamage: Normal",10,30);
        text("Mini Blobs that have the property of electricity. They seem\\nto hang out with normal Mini Blobs sometimes.\\n\\nThey're immune to any electric attacks. Make sure to\\navoid them at all costs, as if you touch one, you'll be\\nstunned! You can't move while this occurs, so you'll have\\nto wait for it to wear off. A short cooldown is required\\nbefore you can be stunned again. They're not very strong,\\nso use Fire to vanquish them.",5,180);
        fill(82, 49, 0);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-orange"),325,80,20,20);
        return;
    }
    if (level === -203){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -200;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ROBOT\\n/ˈrōˌbät,ˈrōbət/\\n\\nHealth: 300        Immune to: Fire\\nSpeed: Moderately Slow \\nDamage: Normal      Properties: Grab\\nWeaknesses: Lightning",10,30);
        text("Robots that were corrupted after the central unit met the\\nsame fate. Watch out for their grab!\\n\\nBeing made of unreactive metal, they are immune to Fire.\\nIf you're touched, they'll grab you and they won't let go\\nuntil you use Ground Pound to push them off. They're\\nalso weak to Lightning, so use that to take them out\\nquickly!",5,190);
        fill(82, 49, 0);
        rect(280,36,110,110);
        image(getImage("avatars/robot_male_1"),290,36,100,100);
        return;
    }
    if (level === -204){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -200;
        }
        textSize(15);
        fill(143, 58, 8);
        text("CRUSHER 2000      If you win, you will unlock Stun Slash\\n/krəSHər 2000/\\n\\nHealth: 2000        Immune to: Fire, Ground Pound\\nDamage: Normal      Weaknesses: Lightning, Blob Cannon",10,150);
        text("The corrupted central unit affected all the robots in Gear\\nWorld. Will this be as far as the Dragon will go?\\n\\nThe new move you unlocked last world will be useful here.\\n                Lightning is better suited for hitting more enemies\\n                at once. Oh, and be quick too. Or else...",5,290);
        fill(82, 49, 0);
        rect(-1,0,400,125);
        pushMatrix();
        translate(0,-31);
    fill(56, 32, 1);
     gear(200,-30,180,150,0+frame,360+frame,15);
     line(180,80,150,55);
     line(220,80,250,55);
     frame++;
     popMatrix();
        return;
    }
    
    if (level === -300){
        background(66, 194, 245);
        textSize(20);
        fill(255, 255, 255);
        text("Sky World",100,390);
        text("Click on an enemy \\nto learn about them!",220,370);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -50;
        }
        if (addButton("", 4, 240, 120, 120)) {
            level = -301;
        }
        if (addButton("", 14, 130, 100, 101)) {
            level = -302;
        }
        if (addButton("", 180, 130, 200, 101)) {
            level = -303;
        }
        if (addButton("", 180, 240, 200, 101)) {
            level = -304;
        }
        if (addButton("", -1, 0, 400, 120)) {
            level = -305;
        }
        image(getImage("avatars/spunky-sam"),17,250,100,100);
        image(getImage("avatars/spunky-sam"),57,165,20,20);
        fill(255, 212, 246);
        pushMatrix();
        translate(240,145);
            ellipse(x+80/2,y+50/2,80*2,50*2);
            fill(247, 172, 231);
            ellipse(x+80/2,y+50/2,80,50);
            arc(x+80*0.3,y+50*0.3,10,5,180,360);
            arc(x+80*0.7,y+50*0.3,10,5,180,360);
        popMatrix();
        pushMatrix();
        fill(84, 79, 8);
        translate(240,256);
            ellipse(x+80/2,y+50/2,80*2,50*2);
            fill(0, 0, 0);
            ellipse(x+80/2,y+50/2,80,50);
            fill(255, 255, 255);
            arc(x+80*0.3,y+50*0.3,10,5,180,360);
            arc(x+80*0.7,y+50*0.3,10,5,180,360);
        popMatrix();
        fill(255, 217, 255);
        ellipse(200,50,400,100);
        line(180,80-50,150,65-50);
        line(220,80-50,250,65-50);
        return;
    }
    if (level === -301){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -300;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SKY BLOB\\n/skī bläb/\\n\\nHealth: 300       \\nSpeed: Fast\\nDamage: Normal",10,30);
        text("Masters of air. They are ruled by Queen Cloud.\\n\\nThey're faster than the average Blob. Your new move\\nmay help out with them. Groups may be difficult, so try\\nsomething like Lightning to deal damage quickly. Some\\nground attacks may prove ineffective.",5,180);
        fill(66, 194, 245);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam"),290,36,100,100);
        return;
    }
    if (level === -302){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -300;
        }
        textSize(15);
        fill(143, 58, 8);
        text("MINI SKY BLOB\\n/ˈminē skī bläb/\\n\\nHealth: 100       \\nSpeed: Turbo\\nDamage: Normal",10,30);
        text("Smaller versions of their large counterparts. Anything else\\nsaid would just be a repeat about Mini Blobs.\\n\\nTheir above average health may prove to be a nuisance,\\nso push them back and keep them back! Lightning may\\nbe useful...",5,180);
        fill(66, 194, 245);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam"),325,80,20,20);
        return;
    }
    if (level === -303){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -300;
        }
        textSize(15);
        fill(143, 58, 8);
        text("CLOUD         Weaknesses: Blob Cannon\\n/kloud/     Properties:  Heal\\n\\nHealth: 100       \\nSpeed: Moderately Slow        \\nDamage: Normal",2,30);
        text("Happy beings that would rather not attack, and help their \\nteammates instead! Queen Cloud's not too happy about \\ntheir inconsistent healing though.\\n\\nIf a wounded enemy is in their radius, it will heal them, \\nalthough the radius is quite small. Try not to use Lightning \\nor Stun Slash on them, or they will turn into a more \\naggressive Electric Cloud! \\nThey're not strong though, so it should be a simple task.",5,180);
        fill(66, 194, 245);
        rect(195,36,170,110);
        pushMatrix();
        fill(255, 212, 246);
        translate(240,55);
            ellipse(x+80/2,y+50/2,80*2,50*2);
            fill(247, 172, 231);
            ellipse(x+80/2,y+50/2,80,50);
            arc(x+80*0.3,y+50*0.3,10,5,180,360);
            arc(x+80*0.7,y+50*0.3,10,5,180,360);
        popMatrix();
        
        return;
    }
    if (level === -304){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -300;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ELECTRIC CLOUD         Weaknesses: Blob Cannon\\n/əˈlektrik kloud/     \\n\\nHealth: 150       \\nSpeed: Moderately Fast        \\nDamage: Normal\\nProperties:  Stun         Immune to: Lightning",2,35);
        text("Grumpy clouds that stun their targets longer than the \\naverage enemy. Their shocks are no laughing matter. They\\nare formed when Clouds touch electricity.\\n\\nBe extra wary to avoid these foul creatures! A single touch \\ncould put you in grave danger! They are also faster \\nthan their happy counterparts, so be ready to ground\\npound!",5,190);
        fill(66, 194, 245);
        rect(195,36,170,110);
        pushMatrix();
        fill(84, 79, 8);
        translate(240,55);
            ellipse(x+80/2,y+50/2,80*2,50*2);
            fill(0, 0, 0);
            ellipse(x+80/2,y+50/2,80,50);
            fill(255, 255, 255);
            arc(x+80*0.3,y+50*0.3,10,5,180,360);
            arc(x+80*0.7,y+50*0.3,10,5,180,360);
        popMatrix();
        
        return;
    }
    if (level === -305){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -300;
        }
        if (addButton("Next", 335, 368, 0, 30)) {
            level = -306;
        }
        textSize(15);
        fill(143, 58, 8);
        text("QUEEN CLOUD      \\n/kwēn kloud/\\n\\nHealth: 3000        Immune to: Ground Pound\\nWeaknesses: Blob Cannon          Properties: Heal",10,150);
        text("Has the personality of a Cloud and Electric Cloud \\ncombined into one. She might not be able to attack the \\ndragon directly, but she's determined to end his run here.\\n\\nWhile she can't attack directly, she can shoot a healing \\nshot at the enemies she spawns to heal them. \\n                Defeat the enemies quickly!",5,260);
        fill(66, 194, 245);
        rect(-1,0,400,125);
        fill(255, 217, 255);
        ellipse(200,50,400,100);
        line(180,80-50,150,65-50);
        line(220,80-50,250,65-50);
        return;
    }
    if (level === -306){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -305;
        }
        textSize(15);
        fill(143, 58, 8);
        text("QUEEN CLOUD      If you win, you will unlock Heal\\n/kwēn kloud/\\n\\nHealth: 3000        Immune to: Ground Pound\\nWeaknesses: Blob Cannon          Properties: Heal",10,150);
        text("She will also spawn enemies on her own if enough time\\nhas passed. Make sure to use Blob Cannon on the clouds \\nand Lightning on the blobs!\\nThe healing projectile also gets bigger as more health is \\ndrained.",5,260);
        fill(66, 194, 245);
        rect(-1,0,400,125);
        fill(255, 217, 255);
        ellipse(200,50,400,100);
        line(180,80-50,150,65-50);
        line(220,80-50,250,65-50);
        return;
    }
    if (level === -400){
        background(131, 182, 252);
        textSize(20);
        fill(255, 255, 255);
        text("Ice World",200,370);
        text("Click on an enemy to learn about them!",5,160);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -50;
        }
        if (addButton("", 4, 240, 120, 120)) {
            level = -401;
        }
        if (addButton("", 140, 240, 100, 101)) {
            level = -402;
        }
        if (addButton("", 278, 240, 102, 101)) {
            level = -403;
        }
        if (addButton("", 180, 0, 110, 110)) {
            level = -404;
        }
        image(getImage("avatars/spunky-sam"),17,250,100,100);
        fill(171, 206, 245);
            rect(150,250,80,80);
            line(150+15,250+10,150+25,250+20);
            line(150+65,250+10,150+55,250+20);
        pushMatrix();
        translate(280,250);
        fill(186, 186, 186);
            ellipse(x+100/2,y+60/2,100,60);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
     popMatrix();
     pushMatrix();
     translate(187,-5);
     fill(150, 215, 255);
            ellipse(x+100/2,y+100/2,100,100);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
    popMatrix();
        return;
    }
    if (level === -401){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -400;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ICE BLOB\\n/īs bläb/         Properties: Stun, Icy\\n\\nHealth: 700      Weaknesses: Fire \\nSpeed: Normal\\nDamage: Normal",10,30);
        text("Icy creatures created with evil magic and ice. They're not \\nnatural.\\n\\nTheir super high health makes them intimidating, \\nso use the dragon's Fire breath to melt them quicker! \\nBe sure to steer clear of them too, as they have stunning \\nproperties. It is said they melt in hot environments.",5,180);
        fill(131, 182, 252);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam"),290,36,100,100);
        return;
    }
    if (level === -402){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -400;
        }
        textSize(15);
        fill(143, 58, 8);
        text("LIVING ICE\\n/ˈliviNG īs/         Properties: Stun, Icy\\n\\nHealth: 50      Weaknesses: Fire \\nSpeed: Very Fast\\nDamage: High",10,30);
        text("Creatures made of evil magic and ice. Formed in the shape \\nof a cube. Definitely not natural either. These beings are \\nalso rumored to melt in hot environments.\\n\\nEven though they have low health, do NOT underestimate \\nthem, as their damage output is quite high. \\nAvoid them at all costs and melt them quickly!",5,180);
        fill(131, 182, 252);
        rect(280,36,110,110);
        pushMatrix();
        translate(145,-200);
        fill(171, 206, 245);
            rect(150,250,80,80);
            line(150+15,250+10,150+25,250+20);
            line(150+65,250+10,150+55,250+20);
        popMatrix();
        return;
    }
    if (level === -403){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -400;
        }
        textSize(15);
        fill(143, 58, 8);
        text("FOG\\n/fôɡ,fäɡ/    \\n\\nHealth: 450  Weaknesses: Blob Cannon \\nSpeed: Turbo\\nDamage: Normal",10,30);
        text("Clouds of fog made with evil magic. They are quite fast \\nfor their size.\\n\\nBlob Cannon is your best bet, because of their size. \\nThey don't pose too much of a threat, and have no \\nproperties to mess up your strategies either. \\nTheir only threat is their high health.",5,180);
        fill(131, 182, 252);
        rect(280,36,110,110);
        pushMatrix();
        translate(285,50);
        fill(186, 186, 186);
            ellipse(x+100/2,y+60/2,100,60);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
     popMatrix();
        return;
    }
    if (level === -404){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -400;
        }
        if (addButton("Next", 335, 368, 0, 30)) {
            level = -405;
        }
        textSize(15);
        fill(143, 58, 8);
        text("FROST BEAST\\n/frôst bēst/    \\n\\nHealth: 4000 Weaknesses: Blob Cannon \\nSpeed: Normal-Turbo\\nDamage: Normal        Properties: Stun",10,30);
        text("The king of ice! Created with the most evil magic and ice, \\nand was formed in the shape of a circle. Hopes to freeze \\nthe dragon in his tracks! \\n\\nFrost Beast's most threatening attack is his Freeze Pound \\nattack, which will freeze you in place. He also stuns you \\nconsiderably longer than Ice Blobs. Use the ice on the \\nbattlefield to steer clear of him and his minions! He gets \\nfaster as the fight progresses.\\n\\n                 ",5,180);
        fill(131, 182, 252);
        rect(280,36,110,110);
        pushMatrix();
     translate(285,33);
     fill(150, 215, 255);
            ellipse(x+100/2,y+100/2,100,100);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
    popMatrix();
        return;
    }
    if (level === -405){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -404;
        }
        textSize(15);
        fill(143, 58, 8);
        text("FROST BEAST\\n/frôst bēst/    \\n\\nHealth: 4000 Weaknesses: Blob Cannon \\nSpeed: Normal-Turbo\\nDamage: Normal        Properties: Stun",10,30);
        text("At the start of battle, he will spawn two Ice Blobs. If you\\ncan pile them together, it will help, as the spawn times\\nare rare in this fight. Later on, he will bring in Living Ice\\nto assist him.\\n\\nThey can appear out of nowhere, so stay away from the \\ncorners and melt them quickly!\\n\\nIf you win, you will unlock Freeze Pound",5,180);
        fill(131, 182, 252);
        rect(280,36,110,110);
        pushMatrix();
     translate(285,33);
     fill(150, 215, 255);
            ellipse(x+100/2,y+100/2,100,100);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
    popMatrix();
        return;
    }
    
    if (level === -51) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Bestiary", 115, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(15);
        text("Welcome to the bestiary! Here, you will find lore and tips about various enemies and bosses! Enemies are sorted by world! Special thanks to Obsta07 who made all of this!",5,50,400,9999);
        text("A world on the seafloor. Grab the bubbles!", 20, 120+60);
           
        text("A sandy desert with gusty winds.", 20, 220+20); 
    
        text("A jungle that holds many organisms and vine terrain.", 20, 245+60);
        
        text("A poisonous swamp with dangerous mosquitoes.", 20, 310+54); 
        
        textSize(20);
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -52;
        }
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -50;
        }
        if (addButton("Water World", 20, 120, 0, 40)) {
           level = -500;
        }
        if (addButton("Sand World", 20, 185, 0, 40)) {
            level = -600; 
        }
        if (addButton("Jungle World", 20, 245, 0, 40)) {
            level = -700;
        }
        if (addButton("Poison World", 20, 310, 0, 40)) {
            level = -800;
        }
        return;
    }
    
    if (level === -500){
        background(0, 13, 255);
        textSize(20);
        fill(255, 255, 255);
        text("Water World",150,370);
        text("Click on an \\nenemy to learn \\nabout them!",130,160);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -51;
        }
        if (addButton("", 10, 10, 100, 100)) {
            level = -501;
        }
        if (addButton("", 10, 130, 100, 101)) {
            level = -502;
        }
        if (addButton("", 10, 240, 102, 101)) {
            level = -503;
        }
        if (addButton("",270, 0, 200, 400)) {
            level = -504;
        }
        image(getImage("avatars/spunky-sam"),10,8,100,100);
        image(getImage("avatars/orange-juice-squid"),17,135,95,95);
        image(getImage("avatars/spunky-sam-orange"),17,245,95,95);
        image(getImage("avatars/orange-juice-squid"),200,13,400,400);
        return;
    }
    if (level === -501){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -500;
        }
        textSize(15);
        fill(143, 58, 8);
        text("WATER BLOB\\n/ˈwädər bläb/         Properties: Liquid\\n\\nHealth: 400      \\nSpeed: Normal\\nDamage: Normal",10,30);
        text("Neutral creatures with ranged attacks. They live under the \\nsea. Because of this, they evaporate on dry land.\\n\\nTheir ranged attack may prove to be an issue, as they deal \\naround 30 damage a piece. Try stunning them to prevent\\nthis and get good damage in.",5,180);
        fill(0, 15, 255);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam"),290,36,100,100);
        return;
    }
    if (level === -502){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -500;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SQUID\\n/skwid/         Properties: Sacrificial Grab,\\n                                        Liquid\\n\\nHealth: 500      \\nSpeed: Normal\\nDamage: Normal",10,30);
        text("Average sized squids. Were friendly, before they got \\ncorrupted that is... they would also evaporate if they were \\non dry land.\\n\\nThey're hard to get off if they grab you, so ground pound \\nthem as soon as possible. Their health depletes when \\nthey're latched on to you, so you might be able to vanquish \\nthem if lucky. If all hope is lost, Freeze Pound them!",5,180);
        fill(0, 15, 255);
        rect(280,36,110,110);
        image(getImage("avatars/orange-juice-squid"),290,40,100,100);
        return;
    }
    if (level === -503){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -500;
        }
        textSize(15);
        fill(143, 58, 8);
        text("MUD BLOB\\n/məd bläb/         \\n\\nHealth: 600      \\nSpeed: Moderately Slow\\nDamage: Very High",10,30);
        text("Angry Water Blobs that got mixed with dirt. Their ranged \\nattack proves them to be the most dangerous enemy so far \\non the dragon's quest!\\n\\nTheir slow moving projecticles do great damage when hit \\nby. This combined with their high health makes them tough \\nto defeat! Evade and vanquish them at all costs and keep \\nyour distance! If you're feeling confident though, go for the \\nstun and slash them!",5,180);
        fill(0, 15, 255);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-orange"),290,40,100,100);
        return;
    }
    if (level === -504){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -500;
        }
        textSize(15);
        fill(143, 58, 8);
        text("THE KRAKEN          Properties: Grab\\n/T͟Hē ˈKrɑːkən /    \\n\\nHealth: 5000      \\nWeaknesses: Blob Cannon\\nDamage: Normal",10,30);
        text("A great friendly squid that got corrupted \\nlike the others. If the dragon can't beat \\nhim, he'll be meeting a watery grave!\\n\\nHe attacks by moving 5 of his tentacles \\nat varying speeds, back and forth. If \\nyou're hit, you'll be stunned until the \\ntentacle moves away. Navigate between \\nthem and don't forget to grab bubbles!\\n                If you win, you will unlock\\n                 Tentacle ",5,180);
        fill(0, 15, 255);
        rect(275,0,130,400);
        image(getImage("avatars/orange-juice-squid"),200,13,400,400);
        return;
    }
    if (level === -600){
        background(181, 145, 0);
        textSize(20);
        fill(255, 255, 255);
        text("Sand World",150,370);
        text("Click on an \\nenemy to learn \\nabout them!",130,160);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -51;
        }
        if (addButton("", 270, 10, 120, 120)) {
            level = -603;
        }
        if (addButton("", 140, 10, 100, 101)) {
            level = -602;
        }
        if (addButton("", 10, 10, 102, 101)) {
            level = -601;
        }
        if (addButton("",150, 240, 120, 100)) {
            level = -604;
        }
        image(getImage("avatars/starky-seed"),145,10,95,95);
        image(getImage("avatars/spunky-sam-orange"),17,13,95,95);
        fill(255, 200, 0);
        pushMatrix();
        translate(310,20);
            rect(x,y,50,85);
            line(x+3,y+10,x+13,y+20);
            line(x+48,y+10,x+38,y+20);
            popMatrix();
        image(getImage("avatars/primosaur-ultimate"),160,240,100,100);
        return;
    }
    if (level === -601){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -600;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SAND BLOB\\n/sand bläb/         \\n\\nHealth: 1000            Properties: Sandy     \\nSpeed: Normal\\nDamage: High",10,30);
        text("Magical blobs made of sand that got corrupted like all the\\nothers. It is said that they turn to glass in hotter than home\\nenvironments.\\n\\nTaking them out normally takes a while, so try using Fire or \\nLightning on it. Once 100 damage is dealt with those \\nweapons, it will turn into a Glass Blob, which is much \\nweaker overall. Proceed to use Ground Pound or Freeze\\nPound on them to shatter them!",5,180);
        fill(181, 145, 0);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-orange"),290,40,100,100);
        return;
    }
    if (level === -602){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -600;
        }
        textSize(15);
        fill(143, 58, 8);
        text("MUMMY\\n/ˈməmē/         \\n\\nHealth: 750            Properties: Slow     \\nSpeed: Normal\\nDamage: High",10,30);
        text("Small but normal moving fellas that slow your movement. \\nTry using your new tentacle attack to get a safe distance \\nfrom them!\\n\\nAs said above, keep your distance yet again. Their slowing \\ncombined with the wind can get the dragon caught in a bad \\nsituation. There are no special tricks to get around their \\nhigh health. There is also a rare mini variant with only 250\\n health, but only the Sand King knows about those kind.",5,180);
        fill(181, 145, 0);
        rect(280,36,110,110);
        image(getImage("avatars/starky-seed"),290,40,100,100);
        return;
    }
    if (level === -603){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -600;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SARCOPHAGUS\\n/särˈkäfəɡəs/         \\n\\nHealth: 1000           Weaknesses: Fire,     \\nSpeed: Normal      Lightning, Slash\\nDamage: Normal             (All random)",10,30);
        text("Tombs that hold Mummies inside. Because they didn't have \\nenough health already! However, there is a smart way \\nto deal with them if you're struggling.\\n\\nWhen spawned, they have a chance to be either weak to, \\nnot as effective against, or normal damage against Fire, \\nLightning, or Slash. Take advantage of this! The less time \\nyou have to fight them, the better! Upon defeat, they spawn \\na Mummy, so take them out normally afterwards.",5,180);
        fill(181, 145, 0);
        rect(280,36,110,110);
        fill(255, 200, 0);
        pushMatrix();
        translate(310,35);
            rect(x,y,50,85);
            line(x+3,y+10,x+13,y+20);
            line(x+48,y+10,x+38,y+20);
            popMatrix();
        return;
    }
    if (level === -604){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -600;
        }
        if (addButton("Next", 335, 368, 0, 30)) {
            level = -605;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SAND KING       \\n/sand kiNG/ \\n               Weaknesses: Blob Cannon   \\n                   Immune to: Ground Pound  \\n\\nHealth: 6000      \\nSpeed: Extremely Fast (Reverse)\\nDamage: High",10,30);
        text("A cowardly king with great speed. After being corrupted, he \\nbecame more brave to do evil things, but he's still a coward \\nat heart. Hopefully the dragon won't succumb and be \\nforced to live in his own tomb!\\n\\nSand King is a very finicky opponent, and will run away if\\nthe dragon gets too close. He attacks by using whirlpools. \\nAn ! will appear shortly before one comes up. Ride the \\nwind to escape it if you're caught. He also spawns \\n                 minions from this world.",5,195);
        fill(181, 145, 0);
        rect(280,36,110,110);
        image(getImage("avatars/primosaur-ultimate"),290,40,100,100);
        return;
    }
    if (level === -605){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -604;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SAND KING       If you win, you will unlock Sand Pit\\n/sand kiNG/ \\n               Weaknesses: Blob Cannon   \\n                   Immune to: Ground Pound  \\n\\nHealth: 6000      \\nSpeed: Extremely Fast (Reverse)\\nDamage: High",10,30);
        text("Freeze Pound can keep him in place, but it's more time \\nconsuming. Be sure to save your MP for the end of the\\nfight, as the wind will get stronger and stronger\\nas the fight nears its end.\\nMini Mummies can be dealt with Tentacle, but rarely, he\\nwill spawn Sarcophagi. Quickly find their weakness, but\\nif you're quick enough, you won't have to deal with them.",5,210);
        fill(181, 145, 0);
        rect(280,36,110,110);
        image(getImage("avatars/primosaur-ultimate"),290,40,100,100);
        return;
    }
    if (level === -700){
        background(32, 158, 0);
        textSize(20);
        fill(255, 255, 255);
        text("Jungle World",150,370);
        text("Click on an \\nenemy to learn \\nabout them!",13,160);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -51;
        }
        if (addButton("", 270, 10, 120, 100)) {
            level = -703;
        }
        if (addButton("", 140, 10, 100, 101)) {
            level = -702;
        }
        if (addButton("", 10, 10, 102, 100)) {
            level = -701;
        }
        if (addButton("",15, 240, 120, 120)) {
            level = -704;
        }
        if (addButton("",200, 120, 300, 200)) {
            level = -705;
        }
        image(getImage("avatars/spunky-sam-green"),180,50,20,20);
        image(getImage("avatars/spunky-sam-green"),17,13,95,95);
        image(getImage("avatars/robot_male_1"),280,13,95,95);
        fill(125, 125, 125);
            ellipse(220+200/2,120+200/2,200,200);
            rect(200+70,310,100,10);
            popMatrix();
            line(300,210,250,210);
            line(250,210,250,230);
            line(250,230,300,230);
            line(300,230,300,210);
            line(380,210,330,210);
            line(330,210,330,230);
            line(330,230,380,230);
            line(380,230,380,210);
            line(300,220,330,220);
        fill(6, 102, 16);
        arc( 70, 280, 70, 70,  -50, 230 );
        rect(65 + 50/2 - 25, 310 + 50 - 55, 10, 50);
        return;
    }
    if (level === -701){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -700;
        }
        textSize(15);
        fill(143, 58, 8);
        text("JUNGLE BLOB\\n/jəNGɡ(ə)l bläb/         \\n\\nHealth: 800     Heals from: Blob Cannon       \\nSpeed: Normal\\nDamage: High",10,30);
        text("Peaceful beings that only would've attacked if provoked, \\nthat was before a mysterious entity corrupted their altar.\\n\\nThey have a fast moving projectile attack, so try using your \\nnew move to rid of them fast!",5,180);
        fill(32, 158, 0);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-green"),290,40,100,100);
        return;
    }
    if (level === -702){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -700;
        }
        textSize(15);
        fill(143, 58, 8);
        text("JUNGLE YOUNGLING\\n/jəNGɡ(ə)l ˈyəNGliNG/         \\n\\nHealth: 250     Heals from: Blob Cannon       \\nSpeed: Turbo\\nDamage: High",10,30);
        text("These Mini Jungle Blobs were also corrupted. They move \\nfast and damage higher than other Mini Blobs. \\n\\nSand pit makes really quick work of them if they're caught\\nin it. Keep them away or suffer their high damage!",5,180);
        fill(32, 158, 0);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-green"),325,80,20,20);
        return;
    }
    if (level === -703){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -700;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ROBO-MONKEY         Weaknesses: Lightning, Stun Slash\\n/ˈrōbō ˈməNGkē/         \\n\\nHealth: 800     Immune to: Fire       \\nSpeed: Turbo\\nDamage: Normal",10,30);
        text("Monkeys that were turned into robots after the altar was \\ncorrupted. High speed and health could make them a \\nthreat!\\n\\nTreat them like a fast robot. Utilize their weaknesses with \\nsome knockback or stun. Remember to be quick about it \\ntoo. Like all robots, they are immune to fire.",5,180);
        fill(32, 158, 0);
        rect(280,36,110,110);
        image(getImage("avatars/robot_male_1"),290,40,100,100);
        return;
    }
    if (level === -704){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -700;
        }
        textSize(15);
        fill(143, 58, 8);
        text("WEED                   Weaknesses: Fire\\n/wēd/         \\n\\nHealth: 500           \\nSpeed: Very Slow\\nDamage: Super High",10,30);
        text("These plants are the most dangerous enemy yet \\non the dragon's adventure! High damage and range make \\nthem a tough enemy to defeat!\\n\\nTheir head extends from their stem, so stay away. \\nUse an attack like tentacle to keep them away, but be\\ncareful, they're hard to hit. It may be difficult to use their \\nweakness on them, since you'll have to get up close.",5,180);
        fill(32, 158, 0);
        rect(280,36,110,110);
        pushMatrix();
        translate(265,-210);
        fill(6, 102, 16);
        arc( 70, 280, 70, 70,  -50, 230 );
        rect(65 + 50/2 - 25, 310 + 50 - 55, 10, 50);
        popMatrix();
        return;
    }
    if (level === -705){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 370, 0, 30)) {
            level = -700;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ALTAR     Properties: Slow            \\n/ˈɔltər/         \\n\\nHealth: 7000           \\nDamage: Normal\\nWeaknesses: Blob Cannon",0,30);
        text("The central station that \\nwas corrupted in order to \\ncorrupt all the creatures.\\nin the jungle. The dragon must defeat it to prevent being\\ntangled in vines for eternity!\\n\\nIts main attack is a missile burst. The projectiles slow you \\ndown, but they can get really hard to avoid. Try hitting both \\nthe enemies it sends out and it with the same attack!\\nSand pit can help with this.\\n                 If you win, you will unlock Slow Dart",5,180);
        fill(32, 158, 0);
        rect(180,0,300,230);
        pushMatrix();
        translate(-25,-110);
       fill(125, 125, 125);
            ellipse(220+200/2,120+200/2,200,200);
            rect(200+70,310,100,10);
            line(300,210,250,210);
            line(250,210,250,230);
            line(250,230,300,230);
            line(300,230,300,210);
            line(380,210,330,210);
            line(330,210,330,230);
            line(330,230,380,230);
            line(380,230,380,210);
            line(300,220,330,220);
        popMatrix();
        return;
    }
if (level === -800){
    background(108, 0, 166);
        textSize(20);
        fill(255, 255, 255);
        text("Poison World",270,30);
        text("Click on an \\nenemy to \\nlearn \\nabout them!",140,200);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -51;
        }
        if (addButton("", 10, 120, 120, 100)) {
            level = -803;
        }
        if (addButton("", 140, 10, 100, 101)) {
            level = -802;
        }
        if (addButton("", 10, 10, 102, 100)) {
            level = -801;
        }
        if (addButton("",15, 240, 120, 120)) {
            level = -804;
        }
        if (addButton("",150, 120, 50, 50)) {
            level = -805;
        }
        if (addButton("",250, 40, 300, 350)) {
            level = -806;
        }
        tint(160, 0, 130, 255);
        image(poisonBlob, 180, 50, 20, 20);
        image(poisonBlob, 15, 10, 100, 100);
        noTint();
        
        fill(49, 6, 102);
        arc( 70, 280, 70, 70,  -50, 230 );
        rect(65 + 50/2 - 25, 310 + 50 - 55, 10, 50);
        pushMatrix();
        translate(100,-160);
        fill(121, 0, 191);
            rect(200+22,200+110,20,220);
            drawFlower(232,275, 5, 8000/1000, 1);
            fill(219, 183, 0);
            ellipse(200+33,200+76,80,80);
        popMatrix();
        fill(125, 125, 125);
            ellipse(170+10/2,140+10/2,10,10);
        pushMatrix();
        translate(50,120);
        fill(120+500/30, 0, 0);
            ellipse(x+50/2,y+50-5,(50/1.5)*(500/1000),(50/1.5)*(500/1000));
            fill(125, 125, 125);
            ellipse(x+50/2,y+50/2,50/1.5,50/1.5);
            rect(x+50-10,y+50-30,20,0);
        popMatrix();
        return;
    }
    if (level === -801){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -800;
        }
        textSize(15);
        fill(143, 58, 8);
        text("POISON BLOB\\n/ˈpoizn bläb/         \\n\\nHealth: 1000       Properties: Poison       \\nSpeed: Normal\\nDamage: Very High",10,30);
        text("Blobs mostly made of evil, mixed with swampland.  \\n\\nIf they touch the dragon, you'll be inflicted with poison, \\nwhich does a total of around 50 damage over time. Sand \\nPit should work on them easily.",5,180);
        fill(121, 0,191);
        rect(280,36,110,110);
        tint(160, 0, 130, 255);
        image(poisonBlob, 290, 40, 100, 100);
        return;
    }
    if (level === -802){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -800;
        }
        textSize(15);
        fill(143, 58, 8);
        text("MINI POISON BLOB\\n/ˈminē ˈpoizn bläb/         \\n\\nHealth: 500       Properties: Poison       \\nSpeed: Very Fast\\nDamage: High",10,30);
        text(" Blobs made of evil mixed with swampy turf, but now\\n smaller! And more annoying to dodge...\\n\\n They're faster than their larger counterparts, so they're\\n very dangerous with their properties. Try to Sand Pit them \\n if you're struggling!",5,180);
        fill(121, 0,191);
        rect(280,36,110,110);
        tint(160, 0, 130, 255);
        image(poisonBlob, 325, 75, 20, 20);
        return;
    }
    if (level === -803){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -800;
        }
        textSize(15);
        fill(143, 58, 8);
        text("BIG MOSQUITO\\n/big məˈskēdō/         \\n\\nHealth: 500       Properties: Drain, Vamp       \\nSpeed: Moderately Fast\\nDamage: High",10,30);
        text("When some mosquitos were affected by the curse, they \\nturned to a humongous size! Now out for the dragon's fresh \\nblood... this can't be good.\\n\\nWhile not appearing as frequently as their smaller kind, \\nthey can be more dangerous. Their Vamp property will \\nallow them to heal themselves by taking away the dragon's \\nHP! They can exceed maximum HP with this property, but \\nif they drink up to 1500 HP, they will burst and be \\nvanquished in the process. They also drain your MP faster \\n                than their smaller kind. Sand pit them if possible.",5,170);
        fill(121, 0,191);
        rect(280,36,110,110);
        pushMatrix();
        translate(310,50);
        fill(120+500/30, 0, 0);
            ellipse(x+50/2,y+50-5,(50/1.5)*(500/1000),(50/1.5)*(500/1000));
            fill(125, 125, 125);
            ellipse(x+50/2,y+50/2,50/1.5,50/1.5);
            rect(x+50-10,y+50-30,20,0);
        popMatrix();
        return;
    }
    if (level === -805){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -800;
        }
        textSize(15);
        fill(143, 58, 8);
        text("MOSQUITO\\n/məˈskēdō/         \\n\\nHealth: 5       Properties: Drain       \\nSpeed: Fast\\nDamage: Normal",10,30);
        text("These small bugs were affected by the corrupt curse as \\nwell. They are very weak enemies, but can slow your \\nprogress and drain your health quickly!\\n\\nThey always come in large swarms of 10 or more. Try \\nusing a ranged attack to vanquish them very quickly. Don't \\nlet groups gang up on you or they'll do a ton of damage! \\nThey will also drain your MP at a similar rate, leaving you \\ndefenseless, so stay a good distance away from them \\nwhile trying to hit them all at once.",5,170);
        fill(121, 0,191);
        rect(280,36,110,110);
        fill(125, 125, 125);
            ellipse(330+10/2,80+10/2,10,10);
        return;
    }
    if (level === -804){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -800;
        }
        textSize(15);
        fill(143, 58, 8);
        text("POISON WEED\\n/ˈpoizn wēd/         \\n\\nHealth: 800       Properties: Poison       \\nSpeed: Very Slow\\nDamage: Ultra High",10,30);
        text("The weeds are back and harder than ever! With their \\npoison property and higher HP, they will be super difficult \\nto defeat!\\n\\nSuper high damage make them really tough to destroy, \\nespecially when confronted by other enemies. Slow Dart is \\na viable option for slowing them down. Sand Pit and \\nTentacle work best, since Ground Pound has a tough time \\nkeeping them away. Their heads have huge range across \\nthe battlefield.",5,170);
        fill(121, 0,191);
        rect(280,36,110,110);
        pushMatrix();
        translate(265,-210);
        fill(49, 6, 102);
        arc( 70, 280, 70, 70,  -50, 230 );
        rect(65 + 50/2 - 25, 310 + 50 - 55, 10, 50);
        popMatrix();
        return;
    }
    if (level === -806){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -800;
        }
        if (addButton("Next", 195, 368, 0, 30)) {
            level = -807;
        }
        textSize(15);
        fill(143, 58, 8);
        text("POISON FLOWER\\n/ˈpoizn ˈflouər/         \\n\\nHealth: 5000              \\nWeaknesses: Blob Cannon\\nDamage: Very High",10,30);
        text("It used to be a normal flower, before it \\ngot corrupted and mutated in the\\nprocess. This enemy could make \\nthe dragon become the next poison \\nswamp creature if not careful!\\n\\nDefeat the 3 Mini Poison Flowers \\nbefore targeting it, as you can't do \\ndamage to it until you do. Try \\nattacking multiple at once!",5,170);
        fill(121, 0, 191);
            rect(200+60,0,300,400);
        pushMatrix();
        translate(100,-160);
        fill(121, 0, 191);
            rect(200+22,200+110,20,220);
            drawFlower(232,275, 5, 8000/1000, 1);
            fill(219, 183, 0);
            ellipse(200+33,200+76,80,80);
        popMatrix();
        return;
    }
    if (level === -807){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -806;
        }
        textSize(15);
        fill(143, 58, 8);
        text("POISON FLOWER\\n/ˈpoizn ˈflouər/         \\n\\nHealth: 5000              \\nWeaknesses: Blob Cannon\\nDamage: Very High",10,30);
        text("Sand Pit is of utmost priority for\\ndamage. The bouncing projectiles it\\nsends out can be dodged if they're\\npositioned the right way. \\nWhen it reaches half health, it will\\nspawn 3 more Mini Poison Flowers\\nwhich are more aggressive.\\nEnemies can be countered with Sand \\nPit if prepared.\\n                    If you win, you \\n                    will unlock Poison",5,170);
        fill(121, 0, 191);
            rect(200+60,0,300,400);
        pushMatrix();
        translate(100,-160);
        fill(121, 0, 191);
            rect(200+22,200+110,20,220);
            drawFlower(232,275, 5, 8000/1000, 1);
            fill(219, 183, 0);
            ellipse(200+33,200+76,80,80);
        popMatrix();
        return;
    }
    if (level === -52) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Bestiary", 115, 35);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        textSize(15);
        text("Welcome to the bestiary! Here, you will find lore and tips about various enemies and bosses! Enemies are sorted by world! Special thanks to Obsta07 who made all of this!",5,50,400,9999);
        textSize(25);
           
        text("A hot volcano with very\\nstrong foes.", 20, 200); 
    
        
        
        text("A very dark realm with the \\ntoughest challenges of all!", 20, 315); 
        
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -51;
        }
        if (addButton("Lava World", 20, 120, 0, 40)) {
           level = -900;
        }
        if (addButton("Dark World", 20, 245, 0, 40)) {
            level = -1000;
        }
        return;
    }
    if (level === -900){
    background(108, 63, 36);
        textSize(20);
        fill(255, 255, 255);
        text("Lava World",270,30);
        text("Click on an \\nenemy to \\nlearn \\nabout them!",140,200);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -52;
        }
        if (addButton("", 10, 120, 120, 100)) {
            level = -903;
        }
        if (addButton("", 140, 10, 100, 101)) {
            level = -902;
        }
        if (addButton("", 10, 10, 102, 100)) {
            level = -901;
        }
        if (addButton("",15, 240, 120, 120)) {
            level = -904;
        }
        if (addButton("",250, 40, 300, 400)) {
            level = -905;
        }
        image(getImage( "avatars/spunky-sam-red"),10,10,100,100);
        tint(255, 0, 0, 255);
        image(lavaHound, 140, 10, 100, 100);
        noTint();
        pushMatrix();
        translate(50,150);
        fill(46, 46, 46);
            ellipse(x+50/2,y+50/2,50/1.2,50/1.2);
            fill(77, 62, 0);
            rect(x+50/2-3, y-50/2+10, 5, 50/2.5);
            line(x+40,y+15,x+30,y+25);
            line(x+10,y+15,x+20,y+25);
            fill(255, 0, 0);
                ellipse(x+25,y-10,10,10);
        popMatrix();
        image(getImage("avatars/robot_male_3"),35,250,75,75);
        pushMatrix();
        translate(46,265);
        fill(189, 0, 0);
        arc(x+27,y+50,75,25,0,180);
        popMatrix();
        fill(125, 125, 125);
            rect(300,60-10,100,100);
            rect(300,60+90,100,150);
            rect(300,60+240,100,100);
            image(getImage("avatars/spunky-sam-green"), 310, 150, 65, 65);
            image(getImage("avatars/spunky-sam"), 312, 223, 60, 60);
            image(getImage("avatars/spunky-sam-red"), 350, 75, 50, 50);
            image(getImage("avatars/spunky-sam-red"), 350, 325, 50, 50);
            stroke(107, 71, 0);
            strokeWeight(5);
            line(310,75,310,134);
            line(310,134,350,105);
            line(350,105,311,74);
            line(300,105,349,105);
            line(310,325,310,384);
            line(310,384,350,355);
            line(350,355,311,324);
            line(300,355,349,355);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(309,71,309,137);
            line(312,130,312,78);
            line(297,103,309,103);
            line(342,103,312,103);
            line(297,103,297,107);
            line(297,107,309,107);
            line(342,107,312,107);
            line(342,107,312,130);
            line(342,103,312,78);
            line(352,105,309,137);
            line(352,105,309,71);
            line(309,321,309,387);
            line(312,380,312,328);
            line(297,353,309,353);
            line(342,353,312,353);
            line(297,353,297,357);
            line(297,357,309,357);
            line(342,357,312,357);
            line(342,357,312,380);
            line(342,353,312,328);
            line(352,355,309,387);
            line(352,355,309,321);
        return;
    }
    if (level === -901){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -900;
        }
        textSize(15);
        fill(143, 58, 8);
        text("LAVA BLOB\\n/ˈlävə bläb/         \\n\\nHealth: 1250        Immune to: Fire    \\nSpeed: Normal\\nDamage: Very High",10,30);
        text("Commanded by Generals Sir Blobsalot and Arch \\nBlobomancer, these Lava Blobs were enhanced by a\\nmysterious being to be even more evil than they already\\nwere! \\n\\nYour new move is very powerful. Give it a try on this \\nstandard enemy and they should be vanquished in no time! \\nOther than that, they deal high damage for a blob, and \\ncan't be hit with fire, so they are basically a much \\n                tougher Fire Blob.",5,190);
        fill(108, 63, 36);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam-red"),290,40,100,100);
        return;
    }
    if (level === -903){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -900;
        }
        textSize(15);
        fill(143, 58, 8);
        text("BOMB                 Properties: Short Fuse\\n/bäm/         \\n\\nHealth: 1000        Immune to: Ground \\n                             Pound, Poison    \\nSpeed: Fast\\nDamage: Unbelievably High",10,30);
        text("Bombs that came to life from evil magic. Really dangerous \\nexplosions!!! Stay away! What was Blobsalot thinking with \\nthis trooper?\\n\\nAvoid them at all costs, or you'll be vanquished \\nimmediately! Fire detonates them, so don't use it unless \\nthey're at low enough health. However, they will explode on \\ntheir own after enough time passes by. Use Freeze Pound \\nto defuse them, but you'll have to find a different way to \\n               stall them if you want to vanquish them that way...",5,190);
        fill(108, 63, 36);
        rect(280,36,110,110);
        pushMatrix();
        translate(310,65);
        fill(46, 46, 46);
            ellipse(x+50/2,y+50/2,50/1.2,50/1.2);
            fill(77, 62, 0);
            rect(x+50/2-3, y-50/2+10, 5, 50/2.5);
            line(x+40,y+15,x+30,y+25);
            line(x+10,y+15,x+20,y+25);
            fill(255, 0, 0);
                ellipse(x+25,y-10,10,10);
        popMatrix();
        return;
    }
    if (level === -902){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -900;
        }
        textSize(15);
        fill(143, 58, 8);
        text("LAVA HOUND\\n/ˈlävə hound/         \\n\\nHealth: 1000        Immune to: Fire    \\nSpeed: Turbo\\nDamage: High",10,30);
        text("Similar to lava blobs these creatures were also\\nenhanced with magic. Commanded by Sir Blobsalot \\nand Arch Blobomancer.\\n\\nTheir speed, health and damage make them like a bigger \\nMini Blob, making them harder to avoid. Keep them away \\nwith your Ground Pound, and use your powerful attacks!",5,180);
        fill(108, 63, 36);
        rect(280,36,110,110);
        tint(255, 0, 0, 255);
        image(lavaHound, 285, 40, 100, 100);
        noTint();
        return;
    }
    if (level === -904){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -900;
        }
        textSize(15);
        fill(143, 58, 8);
        text("GOLEM\\n/ˈgōləm/       Properties: Knockback  \\n\\nHealth: 1500        Immune to: Fire,    \\nSpeed: Slow                   Poison\\nDamage: Ultra High",10,30);
        text("Constructs fueled by evil and lava. The last of the main \\ntroops, and not the easiest to deal with.\\n\\nVery strong enemies, with very high health and damage. \\nGround Pound still works good on them, so use that to \\nkeep them away. They have an eruption attack that will \\nhave them stop in place to charge it up, so prepare in \\nadvance. There is also a rare broken variant which does \\nnot have this. Use your most powerful moves and \\n                  don't get caught in the blast radius. ",5,180);
        fill(108, 63, 36);
        rect(280,36,110,110);
        image(getImage("avatars/robot_male_3"),300,45,75,75);
        pushMatrix();
        translate(310,60);
        fill(189, 0, 0);
        arc(x+27,y+50,75,25,0,180);
        popMatrix();
        return;
    }
    if (level === -905){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -900;
        }
        if (addButton("Next", 210, 368, 0, 30)) {
            level = -906;
        }
        textSize(15);
        fill(143, 58, 8);
        text("THE CASTLE      Defense: Ultra High\\n/T͟Hə kas(ə)l/         \\n\\nHealth: 9000              \\nImmune to: Several things\\nDamage: Very High",10,30);
        text("Well, you did it. You've made it to the \\nbase of Sir Blobsalot and Arch \\nBlobomancer. These two command the \\nlava troops of the area, and are \\ndetermined to defeat the dragon once \\nand for all.\\n\\nThese two are slightly unpredictable, \\nbut know that they'll take significantly\\nless damage from most attacks. Find the\\n                 one that works best!                    ",5,160);
        fill(108, 63, 36);
            rect(200+80,0,300,400);
        pushMatrix();
        fill(125, 125, 125);
            rect(300,60-10,100,100);
            rect(300,60+90,100,150);
            rect(300,60+240,100,100);
            image(getImage("avatars/spunky-sam-green"), 310, 150, 65, 65);
            image(getImage("avatars/spunky-sam"), 312, 223, 60, 60);
            image(getImage("avatars/spunky-sam-red"), 350, 75, 50, 50);
            image(getImage("avatars/spunky-sam-red"), 350, 325, 50, 50);
            stroke(107, 71, 0);
            strokeWeight(5);
            line(310,75,310,134);
            line(310,134,350,105);
            line(350,105,311,74);
            line(300,105,349,105);
            line(310,325,310,384);
            line(310,384,350,355);
            line(350,355,311,324);
            line(300,355,349,355);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(309,71,309,137);
            line(312,130,312,78);
            line(297,103,309,103);
            line(342,103,312,103);
            line(297,103,297,107);
            line(297,107,309,107);
            line(342,107,312,107);
            line(342,107,312,130);
            line(342,103,312,78);
            line(352,105,309,137);
            line(352,105,309,71);
            line(309,321,309,387);
            line(312,380,312,328);
            line(297,353,309,353);
            line(342,353,312,353);
            line(297,353,297,357);
            line(297,357,309,357);
            line(342,357,312,357);
            line(342,357,312,380);
            line(342,353,312,328);
            line(352,355,309,387);
            line(352,355,309,321);
        return;
    }
    if (level === -906){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -905;
        }
        textSize(15);
        fill(143, 58, 8);
        text("THE CASTLE      Defense: Ultra High\\n/T͟Hə kas(ə)l/         \\n\\nHealth: 9000              \\nImmune to: Several things\\nDamage: Very High",10,30);
        text("The ballistae they fire is easily dodgeable\\nif you move when the !'s show up. It is\\nalso important to know when enemies \\narrive on the battlefield. Try noticing a\\npattern (Such as 'Here they come').\\nMost enemies can easily be countered\\nwith Sand Pit or Poison. Do as much\\ndamage as you can in between waves!\\n\\nIf you win, you will unlock Eruption",5,170);
        fill(108, 63, 36);
            rect(200+80,0,300,400);
        pushMatrix();
        fill(125, 125, 125);
            rect(300,60-10,100,100);
            rect(300,60+90,100,150);
            rect(300,60+240,100,100);
            image(getImage("avatars/spunky-sam-green"), 310, 150, 65, 65);
            image(getImage("avatars/spunky-sam"), 312, 223, 60, 60);
            image(getImage("avatars/spunky-sam-red"), 350, 75, 50, 50);
            image(getImage("avatars/spunky-sam-red"), 350, 325, 50, 50);
            stroke(107, 71, 0);
            strokeWeight(5);
            line(310,75,310,134);
            line(310,134,350,105);
            line(350,105,311,74);
            line(300,105,349,105);
            line(310,325,310,384);
            line(310,384,350,355);
            line(350,355,311,324);
            line(300,355,349,355);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(309,71,309,137);
            line(312,130,312,78);
            line(297,103,309,103);
            line(342,103,312,103);
            line(297,103,297,107);
            line(297,107,309,107);
            line(342,107,312,107);
            line(342,107,312,130);
            line(342,103,312,78);
            line(352,105,309,137);
            line(352,105,309,71);
            line(309,321,309,387);
            line(312,380,312,328);
            line(297,353,309,353);
            line(342,353,312,353);
            line(297,353,297,357);
            line(297,357,309,357);
            line(342,357,312,357);
            line(342,357,312,380);
            line(342,353,312,328);
            line(352,355,309,387);
            line(352,355,309,321);
        return;
    }
    if (level === -1000){
    background(71, 68, 68);
        textSize(20);
        fill(255, 255, 255);
        text("Dark World",270,390);
        text("Click on an \\nenemy to \\nlearn \\nabout them!",140,140);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -52;
        }
        if (addButton("", 270, 10, 120, 100)) {
            level = -1003;
        }
        if (addButton("", 140, 10, 100, 101)) {
            level = -1002;
        }
        if (addButton("", 10, 10, 102, 100)) {
            level = -1001;
        }
        if (addButton("", 10, 120, 102, 100)) {
            level = -1004;
        }
        if (addButton("", 280, 120, 102, 100)) {
            level = -1005;
        }
        if (addButton("",15, 240, 100, 100)) {
            level = -1006;
        }
        if (addButton("",280, 240, 100, 100)) {
            level = -1007;
        }
        if (addButton("",140, 240, 100, 100)) {
            level = -1008;
        }
        tint(255, 0, 0, 255);
        image(darkBlob, 10, y, 100, 100);
        noTint();
        
        tint(122, 118, 157, 25);
        image(darkBlob, 140, y, 100, 100);
        noTint();
        
        tint(0, 0, 0, 255);
        image(darkBlob, 280, y, 100, 100);
        noTint();
        
        image(getImage("avatars/spunky-sam-green"),22,240,85,85);
        sword(45+49,260+3);
        shield(25-2,260+3);
        
        image(getImage("avatars/spunky-sam"),10,115,100,100);
        
        image(getImage("avatars/piceratops-ultimate"),285,121,100,100);
        
        
        image(getImage("avatars/spunky-sam"),290,240,90,90);
        staff(300-2,260-5);
        
        image(getImage("avatars/starky-ultimate"),140,240,100,100);
        
        return;
    }
    if (level === -1001){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("DARK BLOB       Resistances: Fire, Lightning, Sand Pit,          \\n/därk bläb/           Eruption     \\n\\nHealth: 1250            \\nSpeed: Normal\\nDamage: Very High",10,30);
        text("Dark Blobs are made of pure evil. This world will also limit \\nyour vision. Luckily, some moves can grant you light, like \\nthe new one you just unlocked! The layout of each stage \\nwill probably be different too, to throw you off...\\n\\nPoison still should work just fine on them. Be careful about \\nbumbling into them in the dark! They deal the same \\ndamage as their lava cousins, so keep your distance like \\nall the others!",5,180);
        fill(71, 68, 68);
        rect(280,36,110,110);
        tint(255, 0, 0, 255);
        image(darkBlob, 285, 40, 100, 100);
        noTint();
        return;
    }
    if (level === -1002){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("GHOST BLOB           Properties: Spectral      \\n/ɡōst bläb/         \\n\\nHealth: 800         Immune to: Most things          \\nSpeed: Normal\\nDamage: High",10,30);
        text("Evil Residue from fallen blobs. They are rarely created by \\nTHE DARK LORD since they are very hard to make.\\n\\nThey can only be damaged by attacks that create light. \\nFreeze Pound still works on them though. Their spectral \\nproperty lets them travel through any obstacles and \\nenemies. Eruption works best on them, because of its high \\ndamage.",5,180);
        fill(71, 68, 68);
        rect(280,36,110,110);
        tint(122, 118, 157, 25);
        image(darkBlob, 285, 40, 100, 100);
        noTint();
        return;
    }
    if (level === -1003){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("INK BLOB           Properties: Death Burst      \\n/iNGk bläb/         \\n\\nHealth: 600         Immune to: Ground\\n                             Pound, Sand Pit         \\nSpeed: Normal\\nDamage: High",10,30);
        text("Completely shadowy figures made by the Dark Lord. Since \\nthese minions were not corrupted, they were born evil, and \\ncan be made at will as long as darkness lurks in this world.\\n\\nPoison and Eruption work best, as always. While they can \\nbe frozen using Freeze Pound, they are immune to all \\nforms of Knockback. If they are vanquished, they will burst \\ninto 8 ink missiles that do average damage. Try to \\npile them together to hit more of them.",5,190);
        fill(71, 68, 68);
        rect(280,36,110,110);
        tint(0, 0, 0, 255);
        image(darkBlob, 285, 40, 100, 100);
        noTint();
        return;
    }
    if (level === -1004){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("DARK MAGE           Properties: Teleportation      \\n/därk māj/         \\n\\nHealth: 800          \\nSpeed: Normal\\nDamage: Super High",10,30);
        text("Blobs who know the secret to powerful dark magic. They \\nare ranged attackers and will do a lot to get away from you.\\n\\nThese blobs have the ability to teleport if they feel like \\nthey're in danger. Their magic does high damage and is \\nfired more often than other ranged attacks. Try to get close \\nto them to use eruption, as it only takes two of them to \\nvanquish them.",5,190);
        fill(71, 68, 68);
        rect(280,36,110,110);
        image(getImage("avatars/spunky-sam"),285,40,100,100);
        return;
    }    
    if (level === -1005){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("DOPPELGANGER           Properties: Darkness      \\n/ˈdäpəlˌɡaNGər/         \\n\\nHealth: 500          \\nSpeed: Turbo\\nDamage: Normal",10,30);
        text("A mysterious being that takes on the look of the person \\nwho is looking at it, so no one knows what one truly looks \\nlike. Their evil magic lets them steal the good in one's soul, \\nand will never give it back unless it's defeated. Don't get \\nthem confused with the dragon. The good in souls is what \\ngives a person natural lighting in dark areas.\\n\\nDefeat them quickly, or you'll be quick to roam the \\ndarkness until you do. Eruption works great in conjunction \\n                with other enemies!",5,190);
        fill(71, 68, 68);
        rect(280,36,110,110);
        image(getImage("avatars/piceratops-ultimate"),285,40,100,100);
        return;
    }
    if (level === -1006){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("SIR BLOBSALOT           Properties: Knockback      \\n/sər bläbsālät/       Defense: Super High\\n\\nHealth: 5000          If you win, you will\\nSpeed: Normal         unlock Charge\\nDamage: Extremely High",10,30);
        text("Blobsalot is willing to do anything to protect his master, \\nTHE DARK LORD. So THE DARK LORD made him more \\npowerful, with several incredible abilities. He is a melee \\nfighter. Thinks of Arch Blobomancer as some kind of \\nassistant perhaps, as he was the one responsible for \\nsupplying the troops. Not as smart as him though.\\n\\nHis charge attack is tricky, try luring him into a wall to \\ndodge it. Wait for him to put his guard down before\\n                attacking!",5,190);
        fill(71, 68, 68);
        rect(280,36,110,110);
        pushMatrix();
        translate(273,-200);
        image(getImage("avatars/spunky-sam-green"),22,240,85,85);
        sword(45+49,260+3);
        shield(25-2,260+3);
        popMatrix();
        return;
    }
    if (level === -1007){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        textSize(15);
        fill(143, 58, 8);
        text("ARCH BLOBOMANCER           Properties: Teleportation      \\n/ärCH bläbəˌmansər/       \\n\\nHealth: 5000      If you win, you will    \\nSpeed: Turbo             unlock Restore\\nDamage: Extremely High",10,30);
        text("Sir Blobsalot's partner and a powerful dark mage. So \\npowerful he could still beat many things without THE DARK \\nLORD'S enhancements. He is more intellectual than \\nBlobsalot, and stands by his side at almost any opportunity, \\neven with bad choices. So much so that according to \\nlegend few people know about, his magic is said to not be \\nnearly as powerful when he's around him, as if he feels \\nmore safe around him...\\n\\n                Be ready for his attacks. Moving vertical and\\n                counterclockwise are the key for most attacks.",5,180);
        fill(71, 68, 68);
        rect(280,36,110,110);
        pushMatrix();
        translate(2,-200);
        image(getImage("avatars/spunky-sam"),290,240,90,90);
        staff(300-2,260-5);
        popMatrix();
        return;
    }
    if (level === -1008){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1000;
        }
        if (addButton("Next", 332, 368, 0, 30)) {
            level = -1009;
        }
        textSize(15);
        fill(143, 58, 8);
        text("THE DARK LORD           Properties: Many      \\n/T͟Hə därk lôrd/       \\n\\nHealth: ???  Immune to: Ground Pound,\\n                     Sand Pit, Poison  \\nSpeed: Turbo         \\nDamage: Unrivaled",10,30);
        text("Yes, this is it. The Dark Lord himself. He was the very first \\nDark Mage, and grew his power himself to become mostly \\nimmortal and take control of the world. To prevent angels \\nfrom intervening with this dastardly deed, he wiped out \\nmost of their population. At this point, he could possibly \\ntake on a god himself. Wants to make this the end of the\\ndragon's world...\\n His shadow form is the most powerful form you will face.\\nVery little is known about him, but know that he is very\\n                    very powerful. The first thing you\\n                  should know is that Charge gives--",5,186);
        fill(71, 68, 68);
        rect(280,36,110,110);
      
        
        image(getImage("avatars/starky-ultimate"),295,45,85,85);
        return;
    }
    if (level === -1009){
        background(245, 242, 166);
        textSize(20);
        if (addButton("Back", 3, 368, 0, 30)) {
            level = -1008;
        }
        
        textSize(15);
        fill(143, 58, 8);
        text("THE DARK LORD           Properties: Many      \\n/T͟Hə därk lôrd/       \\n\\nHealth: ???  Immune to: Ground Pound,\\n                     Sand Pit, Poison  \\nSpeed: Turbo         \\nDamage: Unrivaled",10,30);
        text("you invincibility frames while active, so use that if you\\nknow there's no way to dodge an attack (Say, you're in\\na corner and there's undodgeable projectiles coming\\nyour way.) The Dark Lord also cannot be knocked back by \\nGround Pound, and is resistant to Freeze Pound, so use\\nSlow Dart and MAINLY Tentacle to keep him back if he's\\nchasing you, (Eruption works too, if you have enough MP).\\nMove slowly but swiftly to avoid bullet attacks. Lastly, the\\nbottom corners are your friends here! It's much better to \\n                  be below attacks than above them. Good Luck!\\n                  (And stay safe).",5,186);
        fill(71, 68, 68);
        rect(280,36,110,110);
      
        
        image(getImage("avatars/starky-ultimate"),295,45,85,85);
        return;
    }
    //difficulty
    if (level === -20) {
        background(102, 97, 97);
        if(oneLife === "ON"){
            textSize(15);
            text("WARNING: One life mode is turned on! This means a single death will send you to the beginning!", 55, 50,300,99999);   
        }
        textSize(40);
        fill(255, 255, 255);
        text("Difficulty", 125, 35);
        if(dif === 1){
            text("Normal", 135, 210);
            textSize(15);
            text("The classic experience!", 120, 280,300,99999);
        }else if (dif === 0){
            text("Easy", 155, 210);
            textSize(15);
            text("For those who find the original game too hard!", 55, 280,300,99999);
        }else if(dif === 2){
            text("Hard", 155, 210);
            textSize(15);
            text("WARNING: The original game is really hard! Enabling hard mode will only cause pain and suffering!", 50, 280,300,99999);
        }else if(dif === 4){
            text("Baby", 155, 210);
            textSize(15);
            text("For the newcomers who really really struggle with this game lol", 55, 280,300,99999);
        }
        if (addButton("Speedrun Mode", 2, 360, 0, 30)) {
            level = -30;
        }
        if (addButton("One Life Mode: " + oneLife, 240, 360, 0, 30)) {
            if(oneLife === "OFF"){
                oneLife = "ON";   
            }else if(oneLife === "ON"){
                oneLife = "OFF";   
            }
        }
        /*if (addButton("Dark Mode: " + darkMode, 265, 325, 0, 30)) {
            if(checkMode === false){
                level = "Dark Mode";
            }else if(darkMode === "OFF"){
                darkMode = "ON";   
            }else if(darkMode === "ON"){
                darkMode = "OFF";   
            }
        }*/
        textSize(15);
        text("Press these buttons to change the difficulty!", 55, 240);
        textSize(20);
        if (addButton("Menu", 5, 5, 0, 30)) {
            level = 0;
        }
        if (addButton(">", 280, 180, 0, 30)) {
            if(dif === 1){
                dif = 2;   
            }else if(dif === 0){
                dif = 1;   
            }else if(dif === 2){
                dif = 4;   
            }else if(dif === 4){
                dif = 0;    
            }
        }
        if (addButton("<", 90, 180, 0, 30)) {
            if(dif === 1){
                dif = 0;   
            }else if(dif === 0){
                dif = 4;   
            }else if(dif === 2){
                dif = 1;   
            }else if(dif === 4){
                dif = 2;
            }
        }
        return;
    }
    if (level === "Dark Mode") {
        background(102, 97, 97);
        textSize(20);
        if (addButton("Back", 5, 5, 0, 30)) {
            level = -20;
        }
        textSize(40);
        fill(255, 255, 255);
        text("Dark Mode", 115, 35);
        textSize(15);
        text("So you want to dabble into dark magic, huh? I should warn you though, dark magic is not something to play with!\\n\\nDark magic allows you to create immensely powerful attacks, but each use will claw away at your maximum health!\\n\\nAre you sure you want to try dark magic?",5,50,400,9999);
        textSize(30);
        if (addButton("Yes", 160, 225, 0, 40)) {
            darkMode = "ON";
            level = -20;
            checkMode = true;
        }
        return;
    }
    
    if (level === -30) {
        background(102, 97, 97);
        textSize(40);
        fill(255, 255, 255);
        text("Speedrun", 115, 35);
        textSize(20);
        if (addButton("Back", 5, 5, 0, 30)) {
            level = -20;
        }
        textSize(20);
        text("Difficulty mode:",150,145);
        if(dif === 1){
            fill(255, 255, 255);
            text("Normal",291,145);
        }else if (dif === 0){
            fill(89, 255, 0);
            text("Easy",291,145);
        }else if(dif === 2){
            fill(255, 0, 0);
            text("Hard",291,145);
        }else if(dif === 4){
            fill(0, 255, 242);
            text("Baby",291,145);
        }
        fill(255, 255, 255);
        textSize(15);
        text("Welcome to Speedrun mode! Pick a category, and try to beat the levels as fast as you can!",5,60,400,9999);
        text("The timer will start as soon as a category is selected.",30,380);
        if(oneLife === "ON"){
            fill(255, 0, 0);
            text("ONE LIFE MODE IS ON!",160,335);
        }
        if(darkMode === "ON"){
            fill(239, 64, 255);
            text("Dark Mode is on!\\n(This will put you in another speedrun bracket)",150,310,250,99999);
        }
        textSize(20);
       if (addButton("10 Levels", 20, 120, 0, 40)) {
           level = 1;
           speedrunMode = true;
           category = "10l";
           StartLevel();
        }
        if (addButton("30 Levels", 20, 185, 0, 40)) {
            level = 1; 
            speedrunMode = true;
            category = "30l";
            StartLevel();
            
        }
        if (addButton("50 Levels", 20, 245, 0, 40)) {
            level = 1;
            speedrunMode = true;
            category = "50l";
            StartLevel();
        }
        if (addButton("90 Levels", 20, 310, 0, 40)) {
            level = 1;
            speedrunMode = true;
            category = "90l";
            StartLevel();
        } 
        if (addButton("Story Mode (102 Levels)", 150, 185, 0, 40)) {
            level = 1;
            speedrunMode = true;
            category = "102l";
            StartLevel();
        }
        if (addButton("100% (All Levels)", 150, 245, 0, 40)) {
            level = 1;
            speedrunMode = true;
            category = "Alll";
            StartLevel();
        } 
        return;
    }
    if ((keyDown !== -1 && key.toString() === "k" || keyDown !== -1 && key.toString() === "K")&&level === "the end"){
        frameRate(180);   
    }else{
        frameRate(60);   
    }
    if ((keyJustPressed && key.toString() === "k" || keyJustPressed && key.toString() === "K")&&HP > 0){
        for(var i = 0; i < es.length; i++){
            var e = es[i];
            if(e.mon.name === "brokenCastle"){
                
                if (category === "90l" && speedrunMode){
                    level = -34;
                }else{
                    level += 1;
                    StartLevel();
                }
            }
            if((level === "B10" || level === 90) && !skipB10){
                skipB10 = true;
                texts = [];
                text1 = true;
                text2 = true;
                text3 = true;
                ballistaWait = true;
                lastCataFrame = frame;
                testFrame = 0;
            }
            if(level === "B10"){
                if(e.mon.name === "dedalotII"){
                    texts = [];
                    testFrame2 = 99999999;
                }
                if(e.mon.name === "dedlich"){
                    texts = [];
                    testFrame3 = 99999999;
                }
            }
            if(e.mon.name === "dedalot"){
                texts = [];
                es.splice(i,1);
                if(es.length === 0){
                    transform = false;
                    talked = false;
                    level += 1;
                    StartLevel();
                }
            }
            if(e.mon.name === "dedmancer"){
                texts = [];
                es.splice(i,1);
                 if(es.length === 0){
                    transform = false;
                    talked = false;
                    level += 1;
                    StartLevel();
                }
            }    
            if(e.mon.name === "darkLord" && !talked && !phase2&&level!=="???"){
                texts = [];
                transform = true;
                talked = true;
                addText(frame,"Let's get this over with.                 ",5,e.x-120,e.y,100,0, 0, 0);
                
            }
            if(e.mon.name === "darkLord" && !talked && text5&&level!=="???"){
                texts = [];
                phase2 = true;
                StartLevel();
                
            }
            if(e.mon.name === "darkLord" && text7&&level!=="???"){
                talked = false;
                level = "???";
                StartLevel();
                
            }
            if(e.mon.name === "TRUE_DARKLORD" && !talked){
                talked = true;
                level = "???";
                StartLevel();
            }
            if(e.mon.name === "TRUE_DARKLORD" && text10){
                godMode = false;
                showHealth = false;
                level = "angel";
                StartLevel();
            }
            if(level === "angel"){
                if(testFrame >= 60){
                    level = "B1";
                    StartLevel();
                }
            }
            if(darkAttack === "die"){
                if(secretVar){
                    godMode = true;
                    showHealth = true;
                    StartLevel();
                }
            }
        }
    } 
    //if dead
    if(HP <= 0) {
    if(darkMode==="ON" && corrupted >= maxMP){
        background(157, 0, 255);
        textSize(40);
        fill(255, 255, 255);
        text("You were corrupted",22,160);
        textSize(20);
        text("press M to go to the main menu",55,350);
        if(level === 40) {
         es[0].mon.speed = 1;   
        }
         if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = 0;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            corrupted = 0;
            skipB10 = false;
            if(speedrunMode){
                speedrunMode = false;
            }
         }
    }else{
        background(200, 0, 0);
        textSize(50);
        fill(255, 255, 255);
        text("You died",92,160);
        textSize(20);
        text("press R to restart",111,350);
        textSize(12);
        text("or press M to go to the main menu",95,380);
        if(level === 40) {
         es[0].mon.speed = 1;   
        }
         if ( keyJustPressed && key.toString() === "r" || keyJustPressed && key.toString() === "R"){
            if(oneLife === "ON" && level !== "???"){
                level = 1; 
                totalFrame = 0;
                corrupted = 0;
            }
            upPressed = false;
            downPressed = false;
            leftPressed = false;
            rightPressed = false;
            spacePressed = false;
            StartLevel();
         }
         if ( keyJustPressed && key.toString() === "m" || keyJustPressed && key.toString() === "M"){
            level = 0;
            totalFrame = 0;
            talked = false;
            transform = false;
            phase2 = false;
            secretVar = false;
            godMode = false;
            showHealth = false;
            corrupted = 0;
            upPressed = false;
            downPressed = false;
            leftPressed = false;
            rightPressed = false;
            spacePressed = false;
            if(speedrunMode){
                speedrunMode = false;
            }
            skipB10 = false;
         }
    }
     return;
    }
    if(rinc){
        tintr++;   
    }else{
        tintr--;   
    }
    if(tintr<=0){
        rinc = true;   
    }
    if(tintr>=300){
        rinc = false;   
    }
    if(ginc){
        tintg++;   
    }else{
        tintg--;   
    }
    if(tintg<=0){
        ginc = true;   
    }
    if(tintg>=300){
        ginc = false;   
    }
    if(binc){
        tintb++;   
    }else{
        tintb--;   
    }
    if(tintb<=0){
        binc = true;   
    }
    if(tintb>=300){
        binc = false;   
    }
    //regenerate HP/MP
     swipe += 1;
     frame += 1;
     fire -= 1;
     darkLightning -= 1;
     testFrame += 1;
     testFrame2 += 1;
     testFrame3 += 1;
     totalFrame += 1;
     mirageFrame += 1;
     mirageSummon += 1;
     mirageRevive += 1;
     tempound += 1;
     ropound += 1;
     kingBlobBurst -= 1;
     chargeText -= 1;
     if(kingBlobBurst < 0){
        kingBlobBurst = 0;   
     }
     handDamageCoolDown1 -= 1;
     handDamageCoolDown2 -= 1;
     if(level === "???"){
         statsy -= statsyInc;
         if(statsy > 450){
            statsy = 400; 
         }
         if(frame >= 8000 || talked){
            if(statsy < 350){
                statsy = 350; 
            } 
         }
    }
     if(dif === 1 || dif === 2) {
        if(HP<maxHP && frame % 10 === 0) {
            if(godMode){
                HP += 10;
            }else{
                HP += 1;
            }
        }
        if(MP<maxMP && frame % 2 === 0 && spacePressed === false ) {
            if(godMode){
                MP += 10;
                if(MP>maxMP){
                    MP = maxMP;   
                }
            }else{
                MP += 1;
                if(MP>maxMP){
                    MP = maxMP;   
                }
            }
        }
    }else if(dif === 0){
        if(HP<maxHP && frame % 5 === 0) {
            if(godMode){
                HP += 10;
            }else{
                HP += 1;
            }
        }
        if(MP<maxMP && frame % 1 === 0 && spacePressed === false ) {
            if(godMode){
                MP += 10;
                if(MP>maxMP){
                    MP = maxMP;   
                }
            }else{
                MP += 1;
                if(MP>maxMP){
                    MP = maxMP;   
                }
            }
        }   
    }else if(dif === 4){
        if(HP<maxHP && frame % 2 === 0) {
            if(godMode){
                HP += 10;
            }else{
                HP += 1;
            }
        }
        if(MP<maxMP && frame % 1 === 0 && spacePressed === false ) {
            if(godMode){
                MP += 20;
                if(MP>maxMP){
                    MP = maxMP;   
                }
            }else{
                MP += 2;
                if(MP>maxMP){
                    MP = maxMP;   
                }
            }
        }   
    }
    stun -= 1;
    slow -= 1;
    confuse -= 1;
    decay -= 1;
    superSlow -= 1;
    background(backr, backg, backb);
    //draw pit
    if (level === 60) {
        var pitStart = 1200;
        if(es[0].mon.name === "sandKing") {
            if(es[0].hp <= 1000){
                pitStart = 600;
            }
        }
        if(frame-pitFrame2+180>pitStart){
            textSize(120);
            fill(166, 0, 0);
            text("!",px-5+pw/3,py+ph+15);
        }
        if(frame-pitFrame2>pitStart){
            pitx2 = px+pw/2;
            pity2 = py+ph/2;
            pitFrame2 = frame;
        }
        var pitSize2 = 0;
        var time2 = 300;
        if(frame-pitFrame2<60){
            pitSize2=(frame-pitFrame2)*2;
        }else if(frame-pitFrame2<time2){
            pitSize2=120;
        }else if(frame-pitFrame2<time2+60){
            pitSize2=120-2*(frame-pitFrame2-time2);
        }
        if(pitSize2>0){
            var pullx = pitx2-(px+pw/2);
            var pully = pity2-(py+ph/2); 
            var pullen = sqrt(pullx*pullx+pully*pully);
            if (pullen < (pitSize2+pw)/2) {
                if(pullen>0){
                    px+=pullx/pullen*5;
                    py+=pully/pullen*5;
                }
                HP-=1;
            }
            stroke(150, 120, 0);
            var angle = frame*40;
            var x = sin(angle)*10;
            var y = cos(angle)*10;
            for (var i = pitSize2; i > 0; i-=20){
                var fade2 = i/pitSize2;
                fill(171*fade2, 135*fade2, 0);
                ellipse(pitx2+x*(1-fade2),pity2+y*(1-fade2),i,i);
                noStroke();
            }
            stroke(0, 0, 0);
        }
    }
    //dark mirage sand pit
    if(level === "B6"){
        if(mirageRevive > 700000){
            var pitStart = 1200;
            if (mirageFrame === 1){
                pitx2 = random(50,350);
                pity2 = random(100,350);
                /*pitx3 = random(50,350);
                pity3 = random(100,350);
                pitx4 = random(50,350);
                pity4 = random(100,350);
                pitx5 = random(50,350);
                pity5 = random(100,350);*/
            }
            if(mirageFrame < 120){
                textSize(100);
                fill(166, 0, 0);
                text("!",pitx2,pity2);
                /*text("!",pitx3,pity3);
                text("!",pitx4,pity4);
                text("!",pitx5,pity5);*/
            }
            if(mirageFrame === 120){
                pitFrame3 = frame;
            }
            var pitSize2 = 0;
            var time2 = 300;
            if(frame-pitFrame3<60){
                pitSize2=(frame-pitFrame3)*2;
            }else if(frame-pitFrame3<time2){
                pitSize2=120;
            }else if(frame-pitFrame3<time2+60){
                pitSize2=120-2*(frame-pitFrame3-time2);
            }
            if(pitSize2>0){
                var pullx = pitx2-(px+pw/2);
                var pully = pity2-(py+ph/2); 
                /*var pullx2 = pitx3-(px+pw/2);
                var pully2 = pity3-(py+ph/2); 
                var pullx3 = pitx4-(px+pw/2);
                var pully3 = pity4-(py+ph/2); 
                var pullx4 = pitx5-(px+pw/2);
                var pully4 = pity5-(py+ph/2);*/
                var pullen = sqrt(pullx*pullx+pully*pully);
                /*var pullen2 = sqrt(pullx2*pullx2+pully2*pully2);
                var pullen3 = sqrt(pullx3*pullx3+pully3*pully3);
                var pullen4 = sqrt(pullx4*pullx4+pully4*pully4);*/
                if (pullen < (pitSize2+pw)/2) {
                    if(pullen>0){
                        if(!grab){
                            px+=pullx/pullen*5;
                            py+=pully/pullen*5;
                        }
                    }
                    HP-=3;
                }
                /*if (pullen2 < (pitSize2+pw)/2) {
                    if(pullen2>0){
                        px+=pullx2/pullen2*5;
                        py+=pully2/pullen2*5;
                    }
                    HP-=3;
                }
                if (pullen3 < (pitSize2+pw)/2) {
                    if(pullen3>0){
                        px+=pullx3/pullen3*5;
                        py+=pully3/pullen3*5;
                    }
                    HP-=3;
                }
                if (pullen4 < (pitSize2+pw)/2) {
                    if(pullen4>0){
                        px+=pullx4/pullen4*5;
                        py+=pully4/pullen4*5;
                    }
                    HP-=3;
                }*/
                stroke(150, 120, 0);
                var angle = frame*40;
                var x = sin(angle)*10;
                var y = cos(angle)*10;
                for (var i = pitSize2; i > 0; i-=20){
                    var fade2 = i/pitSize2;
                    fill(171*fade2, 135*fade2, 0);
                    ellipse(pitx2+x*(1-fade2),pity2+y*(1-fade2),i,i);
                    /*ellipse(pitx3+x*(1-fade2),pity3+y*(1-fade2),i,i);
                    ellipse(pitx4+x*(1-fade2),pity4+y*(1-fade2),i,i);
                    ellipse(pitx5+x*(1-fade2),pity5+y*(1-fade2),i,i);*/
                    noStroke();
                }
                stroke(0, 0, 0);
            }
            if(mirageFrame >= 500){
                mirageFrame = 0;   
            }
        }
    }
    if(level === 102){
        var pitStart = 1200;
        if (dswitch === 1&&darkAttack === "sand pit"){
            pitx2 = random(50,350);
            pity2 = random(100,350);
            pitx3 = random(50,350);
            pity3 = random(100,350);
            pitx4 = random(50,350);
            pity4 = random(100,350);
            pitx5 = random(50,350);
            pity5 = random(100,350);
        }
        if(dswitch < 120&&darkAttack === "sand pit"){
            textSize(100);
            fill(166, 0, 0);
            text("!",pitx2,pity2);
            text("!",pitx3,pity3);
            text("!",pitx4,pity4);
            text("!",pitx5,pity5);
        }
        if(dswitch === 120&&darkAttack === "sand pit"){
            pitFrame2 = frame;
        }
        if(dswitch >= 500&&darkAttack === "sand pit"){
            darkAttack = "fire";
            dswitch = 0;
        }
        var pitSize2 = 0;
        var time2 = 300;
        if(frame-pitFrame2<60){
            pitSize2=(frame-pitFrame2)*2;
        }else if(frame-pitFrame2<time2){
            pitSize2=120;
        }else if(frame-pitFrame2<time2+60){
            pitSize2=120-2*(frame-pitFrame2-time2);
        }
        if(pitSize2>0){
            var pullx = pitx2-(px+pw/2);
            var pully = pity2-(py+ph/2); 
            var pullx2 = pitx3-(px+pw/2);
            var pully2 = pity3-(py+ph/2); 
            var pullx3 = pitx4-(px+pw/2);
            var pully3 = pity4-(py+ph/2); 
            var pullx4 = pitx5-(px+pw/2);
            var pully4 = pity5-(py+ph/2); 
            var pullen = sqrt(pullx*pullx+pully*pully);
            var pullen2 = sqrt(pullx2*pullx2+pully2*pully2);
            var pullen3 = sqrt(pullx3*pullx3+pully3*pully3);
            var pullen4 = sqrt(pullx4*pullx4+pully4*pully4);
            if (pullen < (pitSize2+pw)/2) {
                if(pullen>0){
                    px+=pullx/pullen*5;
                    py+=pully/pullen*5;
                }
                HP-=1;
            }
            if (pullen2 < (pitSize2+pw)/2) {
                if(pullen2>0){
                    px+=pullx2/pullen2*5;
                    py+=pully2/pullen2*5;
                }
                HP-=1;
            }
            if (pullen3 < (pitSize2+pw)/2) {
                if(pullen3>0){
                    px+=pullx3/pullen3*5;
                    py+=pully3/pullen3*5;
                }
                HP-=1;
            }
            if (pullen4 < (pitSize2+pw)/2) {
                if(pullen4>0){
                    px+=pullx4/pullen4*5;
                    py+=pully4/pullen4*5;
                }
                HP-=1;
            }
            stroke(150, 120, 0);
            var angle = frame*40;
            var x = sin(angle)*10;
            var y = cos(angle)*10;
            for (var i = pitSize2; i > 0; i-=20){
                var fade2 = i/pitSize2;
                fill(171*fade2, 135*fade2, 0);
                ellipse(pitx2+x*(1-fade2),pity2+y*(1-fade2),i,i);
                ellipse(pitx3+x*(1-fade2),pity3+y*(1-fade2),i,i);
                ellipse(pitx4+x*(1-fade2),pity4+y*(1-fade2),i,i);
                ellipse(pitx5+x*(1-fade2),pity5+y*(1-fade2),i,i);
                noStroke();
            }
            stroke(0, 0, 0);
        }
    }
    // sand squid pit effects, must be here so they draw underneath all the monsters
    for (var i = 0 ; i < es.length ; i++ ) {
        var e = es[i];
        if (e.mon.name !== "sandSquid" && e.mon.name !== "darkMirage") {
            continue;
        }
        if(e.mon.name === "darkMirage"){
            if(mirageAttack !== "burrow"){
                continue;   
            }
        }
        e.sinkTime++;
        if(frame === 2){
            e.sinkTime = 400;   
        }
        // start a teleports
        if ( e.sinkTime >= 500 || e.sink) {
            e.teleportFrame = frame;
            e.startX = e.x + e.mon.width/2;
            e.startY = e.y + e.mon.height/2;
            e.endX = 50 + random() * 300;
            e.endY = 100 + random() * 250;
            e.sink = false;
            e.state = "defense";
            e.sinkTime = 0;
        }

        if (e.teleportFrame < 0 ) {
            continue;
        }

        var pitOpenTime = 60;
        var epitTime = frame-e.teleportFrame;
        var epitx;
        var epity;
        var epitSize;
        if (epitTime < pitOpenTime) {
            // freeze in place as the pit grows
            e.x = e.startX - e.mon.width/2;
            e.y = e.startY - e.mon.height/2;
            epitx = e.startX;
            epity = e.startY;
            epitSize = epitTime * 2;
        } else if (epitTime < pitOpenTime*4 ) {
            // move off screen while the pit stays open
            e.x = -999;
            e.y = -999;
            epitx = e.startX;
            epity = e.startY;
            epitSize = pitOpenTime * 2;
        } else if (epitTime < pitOpenTime*5) {
            // move off screen while the pit closes
            e.x = -999;
            e.y = -999;
            epitx = e.startX;
            epity = e.startY;
            epitSize = (pitOpenTime*3 - epitTime+120) * 2;
            textSize(120);
            fill(166, 0, 0);
            text("!",e.endX,e.endY);
        } else if (epitTime < pitOpenTime*6 ) {
            // target pit is opening, keep off screen
            e.x = -999;
            e.y = -999;
            epitx = e.endX;
            epity = e.endY;
            epitSize = (epitTime-120 - pitOpenTime*3) * 2;
        } else if (epitTime < pitOpenTime*7 ) {
            e.state = "attack";
            // allow squid to move away while end pit is closing
            if (epitTime === pitOpenTime*6) {
                e.x = e.endX - e.mon.width/2;
                e.y = e.endY - e.mon.height/2;
                if(e.mon.name === "darkMirage"){
                    e.hp += 100;   
                    if(e.hp>e.mon.maxHp){
                        e.hp = e.mon.maxHp;   
                    }
                }
            }
            epitx = e.endX;
            epity = e.endY;
            epitSize = (pitOpenTime*5 - epitTime+120) * 2;
        } else {
            // teleport complete
            e.teleportFrame = -99;
        }
        
        // see if the player is in the pit
        var pullx = epitx-(px+pw/2);
        var pully = epity-(py+ph/2); 
        var pullen = sqrt(pullx*pullx+pully*pully);
        if (pullen < (epitSize+pw)/2) {
            if(pullen>0){
                px+=pullx/pullen*5;
                py+=pully/pullen*5;
            }
            HP-=3;
        }
        
        // draw the pit
        stroke(150, 120, 0);
        var angle = frame*40;
        var x = sin(angle)*10;
        var y = cos(angle)*10;
        for (var j = epitSize; j > 0; j-=20) {
            var fade = j/120;
            fill(171*fade, 135*fade, 0);
            ellipse(epitx+x*(1-fade),epity+y*(1-fade),j,j);
            noStroke();
        }

        stroke(0, 0, 0);
    }
    if (level !== 0) {
        if(darkMode === "OFF"){
            var pitSize = 0;
            var time = 300;
            if(frame-pitFrame<60){
                pitSize=(frame-pitFrame)*2;
            }else if(frame-pitFrame<time){
                pitSize=120;
            }else if(frame-pitFrame<time+60){
                pitSize=120-2*(frame-pitFrame-time);
            }
            if(pitSize>0){
                for (var i = 0; i<es.length; i++){
                    var e = es[i];
                    if(e.mon.name === "skyBlob" || e.mon.name === "miniSkyBlob" || e.mon.name === "cloud" || e.mon.name === "elcloud" || e.mon.name === "fog" || e.mon.name === "sandBlob"|| e.mon.name === "mummy" || e.mon.name === "ghostBlob"|| e.mon.name === "demon"||e.mon.name==="inkBlob"|| e.mon.name === "darkLord" || e.mon.name === "sirBlobsalotII" || e.mon.name === "archBlobolich" || e.mon.name === "clone" || e.mon.name === "pharaoh"){
                        continue;  
                    }
                    var pullx = pitx-(e.x+e.mon.width/2);
                    var pully = pity-(e.y+e.mon.height/2);
                    var pullen = sqrt(pullx*pullx+pully*pully);
                    if (pullen < (pitSize+e.mon.width)/2) {
                        if(pullen>0 && e.mon.speed > 0){
                            var tryx = e.x + pullx/pullen*5;
                            var tryy = e.y + pully/pullen*5;
                            if (EnemyMoveOk( tryx, tryy, i, e) && e.mon.name!== "ULTRAMech" && e.mon.name !== "sandSquid") {
                                 e.x = tryx;
                                  e.y = tryy;
                            }
                        }
                        doDamage(e,"sand pit", 2);
                    }
                }
                stroke(209, 164, 0);
                var angle = frame*40;
                var x = sin(angle)*10;
                var y = cos(angle)*10;
                for (var i = pitSize; i > 0; i-=20){
                    var fade = i/pitSize;
                    fill(209*fade, 164*fade, 0);
                    ellipse(pitx+x*(1-fade),pity+y*(1-fade),i,i);
                    noStroke();
                }
                stroke(0, 0, 0);
            }
        }else if(darkMode === "ON"){
            var pitSize = 0;
            var time = 300;
            if(blackHoleHeld){
                pitSize=(frame-pitFrame)*2;
            }
            if(pitSize>0){
                for (var i = 0; i<es.length; i++){
                    var e = es[i];
                    if(e.mon.name === "ghostBlob"||e.mon.name==="inkBlob"|| e.mon.name === "darkLord"){
                        continue;  
                    }
                    var pullx = pitx-(e.x+e.mon.width/2);
                    var pully = pity-(e.y+e.mon.height/2);
                    var pullen = sqrt(pullx*pullx+pully*pully);
                    if (pullen < (pitSize+e.mon.width)/2) {
                        if(pullen>0 && e.mon.speed > 0){
                            var tryx = e.x + pullx/pullen*5;
                            var tryy = e.y + pully/pullen*5;
                            if (EnemyMoveOk( tryx, tryy, i, e) && e.mon.name!== "ULTRAMech") {
                                 e.x = tryx;
                                  e.y = tryy;
                            }
                        }
                        doDamage(e,"black hole", 5);
                    }
                }
                stroke(191, 0, 255);
                var angle = frame*40;
                var x = sin(angle)*10;
                var y = cos(angle)*10;
                for (var i = pitSize; i > 0; i-=20){
                    var fade = i/pitSize;
                    fill(191*fade/2, 0, 255*fade/2);
                    ellipse(pitx+x*(1-fade),pity+y*(1-fade),i,i);
                    noStroke();
                }
                stroke(0, 0, 0);
            }
        }
    }

    //fire blob's aura
    for (var i = 0; i<es.length;i++) {
        var e = es[i];
        if (e.mon.name === "fireBlob" || e.mon.name === "TfireBlob") {
             fill(255, 133, 51);
             if(e.freeze > frame && e.mon.name !== "iceBlob" && e.mon.name !== "livIce"&& e.mon.name !== "rainbowBlob"){
                continue;   
             }
             ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2, firer*2, firer*2);
         }
    }
    
    //Draw poison
    for (var i = 0;i<poison.length;i++) {
        if(level === 102 || level === "B6"){
            fill(0, 0, 0);
        }else{
            fill(79, 0, 158);
        }
        var p = poison[i];
        if(p.life >9999999){
            fill(43, 255, 0);   
        }
        if(p.life>0){
            p.life-=1;
            if(p.life < 100){
                p.x+=1;
                p.y+=1;
                p.w-=2;
                p.h-=2;
                if(p.w<=0){
                    if(level!==102&&level!=="B6"&&level!=="B7"&&level!=="B10"){
                        if(level === "B8"){
                            addMonster(p.x,p.y,monsters.miniPoisonMiniBlob);
                        }else{
                            addMonster(p.x,p.y,monsters.poisonMiniBlob);
                        }
                    }
                    poison.splice(i,1);
                    i--;
                    continue;
                }
            }
        }
        rect(p.x,p.y,p.w,p.h);
        if (overlap(px,py,pw,ph,p.x,p.y,p.w,p.h)) {
            if(level === 102){
                poisonFrame = frame + 1;
            }else if(level === "B6"){
                poisonFrame = frame + 150;
                HP--;
            }else{
                poisonFrame = frame + 150;
            }
        }
    }
    
    //Draw lava
    for (var i = 0;i<lava.length;i++) {
        fill(181, 0, 0);
        var l = lava[i];
        rect(l.x,l.y,l.w,l.h);
        if(l.life>0){
            l.life-=1;
            if(l.life < 100){
                l.x+=1;
                l.y+=1;
                l.w-=2;
                l.h-=2;
                if(l.w<=0){
                    lava.splice(i,1);
                    i--;
                    continue;
                }
            }
        }
        if (overlap(px,py,pw,ph,l.x,l.y,l.w,l.h)) {
            if(level === "???"){
                HP -= 20000000000;
            }else{
                HP -= 3;
            }
            Phurt = true;
        }
    }
    
    //Draw vines
    for (var i = 0;i<vines.length;i++) {
        if(level === "B7"||level === "B8"){
            fill(58, 0, 115);
        }else{
            fill(44, 94, 0);
        }
        var v = vines[i];
        rect(v.x,v.y,v.w,v.h);
        if (overlap(px,py,pw,ph,v.x,v.y,v.w,v.h) && !Pinvincible) {
                superSlow = 2;
                if(level === "B7"||level === "B8"){
                    poisonFrame = frame + 150;   
                }
        }
    }
    
    //draw coral
    for (var i = 0;i<coral.length;i++) {
        var C = coral[i];
        fill(C.r, C.g, C.b);
        rect(C.x,C.y,C.w,C.h);
    }
    
    //see how many pharaohs are alive
    numPharaohs = 0;
    for (var i = 0;i<es.length;i++) {
        var e = es[i];
        if(e.mon.name === "pharaoh"){
            numPharaohs++;   
        }
    }
    
    //draw tents ig
    doTents();
    
    //Draw clouds
    var touchCloud = false;
    for (var i = 0;i<clouds.length;i++) {
        fill(255, 255, 255);
        var c = clouds[i];
        ellipse(c.x,c.y,c.w,c.h);
        if (pointInEllipse(px+pw/2,py+ph/2,c.x,c.y,c.w,c.h)) {
            touchCloud = true;
        }
    }
    if((level>=21 && level <= 30)||level === "B3"||level === "B4") {
        if(fall) {
            if (pw<=1||ph<=1){
               HP = 0; 
            }else{
            pw-=1;
            ph-=1;
        }
        }else{
            if(!touchCloud||fall) {
                MP-=1;
                if(MP<=0) {
                    MP=0;
                    fall = true;
                }
            }
        }
    }
    //Draw ice
    var touchIce = false;
    for (var i = 0;i<ice.length;i++) {
        fill(138, 216, 255);
        var I = ice[i];
        rect(I.x,I.y,I.w,I.h);
        if (overlap(px,py,pw,ph,I.x,I.y,I.w,I.h)) {
            touchIce = true;
        }
    }
    DrawLines();
    
    var useFire = false;
    var useLightning = false;
    var useEruption = false;
    
    textSize(12);
    var tryx = px;
    var tryy = py;
    if (touchIce && !touchWall) {
        tryx += dirx*5;
        tryy += diry*5;
    }else if (stun <= 0 && !grab && !fall) {
        var speed = 5;
        
        //if mechanized then go slower
        if(mechanize>0){
            speed /= 1.5;
        }
        if (slow > 0) {
            speed /= 2;
        }
        if (superSlow > 0) {
            speed /= 5;
        }
        if ( upPressed && !downPressed && pcharging<=0) {
              tryy-=speed;
              dirx = 0;
              diry = -1;
          }  
          else if ( downPressed && !upPressed &&pcharging<=0) {
              tryy+=speed;
               dirx = 0;
                diry = 1;
          }
          else if ( leftPressed && !rightPressed&&pcharging<=0 ) {
                tryx-=speed;
                  dirx = -1;
                  diry = 0;
          }
          else if ( rightPressed && !leftPressed&&pcharging<=0 ) {
                tryx+=speed;
                 dirx = 1;
                 diry = 0;
          }
          if(pcharging > 0){
              Pinvincible = true;
              speed *= (pcharging/15);
              if(speed > 15){
                speed = 15;   
              }
              if ( dirx === 0 && diry === -1) {
                  tryy-=speed;
              }  
              else if ( dirx === 0 && diry === 1) {
                  tryy+=speed;
              }
              else if ( dirx === -1&&diry === 0) {
                    tryx-=speed;
              }
              else if ( dirx === 1 && diry === 0 ) {
                    tryx+=speed;
              }
              doAttack(px,py,pw,attack,pcharging);
          }else{
            Pinvincible = false;
          }
    }
    if(frame < playerPoundedFrame + 30){
                if(px<playerPoundedEnemy.x) {
                    tryx-=5;   
                }
                if(px>playerPoundedEnemy.x) {
                    tryx+=5;   
                }
                if(py<playerPoundedEnemy.y) {
                    tryy-=5;   
                }
                if(py>playerPoundedEnemy.y) {
                    tryy+=5;   
                }   
    }
    //wiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiind
    if(frame%240===239){
        windir = floor(random(1,5));   
    }
    if((level >= 51 && level < 61)||(queenAttack === "wind"&&level === "B4"&&testFrame >= 60)||level === "B5"||level === "B6"){
    if(windir === 1){
        if(!grab){
            tryy-=windsped;
        }
        party-=windsped;
    }else if(windir === 2){
        if(!grab){
            tryx+=windsped;
        }
        partx+=windsped;
    }else if(windir === 3){
        if(!grab){
            tryy+=windsped;
        }
        party+=windsped;
    }else if(windir === 4){
        if(!grab){
            tryx-=windsped;
        }
        partx-=windsped;
    }
    }
      // collide with world
      if(!HitLines(tryx,tryy,pw,ph) && !hitBlocks(tryx,tryy,pw,ph)&&pcharge<=0) {
        px = tryx;
        py = tryy;
        touchWall = false;
      }else if( tryy !== py && !HitLines(px,tryy,pw,ph) && !hitBlocks(px,tryy,pw,ph)&&pcharge<=0) {
        // try only up / down
        py = tryy;
        touchWall = false;
      }else if(tryx !== px && !HitLines(tryx,py,pw,ph) && !hitBlocks(tryx,py,pw,ph)&&pcharge<=0) {
        // try only side to side
        px = tryx;
        touchWall = false;
      }else{
       touchWall = true;
       if(pcharging > 0){
           fill(255, 77, 0);
           ellipse(px+pw/2,py+ph/2,pcharging*3,pcharging*3);
           doAttack(px+pw/2,py+ph/2,pcharging*3,attack,pcharging*3);
           useEruption = true;
       }
        pcharging = 0;
      }
    
      if (spacePressed && !fall) {
          // check for attack
          if(darkMode === "ON"){
              if ( attack=== "heal"&&MP>24&&keyJustPressed) {
                    MP -= 25;
                    corrupted+=0.05;
                    for(var i = 0; i>=0; i++){
                        px = random(10,350);
                        py = random(50,350);
                        if(!HitLines(px,py,pw,ph)){
                            i=-10;  
                        }
                    }
                  }
          }
          if(stun <= 0){
              if(darkMode === "ON"){
                  if ( attack=== "fire"&& MP>99&&keyJustPressed) {
                        if (level >= 41 && level <= 50) {
                            
                        }else{
                            MP -= 100;
                            xfire = px+pw/2+dirx*100;
                            yfire= py+ph/2+diry*100;
                            fire = 60;
                            corrupted+=0.8;
                        }
                  }
                   if (attack=== "lightning"&& MP>79&&keyJustPressed) {
                    MP -= 80;
                    corrupted+=0.5;
                    if(dirx === 1 || dirx === -1){
                        addLightning("fat",py+ph/2,60);   
                    }
                    if(diry === 1 || diry === -1){
                        addLightning(px+pw/2,"fat",60);   
                    }
                  }
                  if (attack=== "poison"&& MP>2) {
                    fill(79, 0, 158);
                    MP -= 3;
                    var poisonx = px+pw/2+dirx*100;
                    var poisony= py+ph/2+diry*100;  
                    var poisonSize = 60;
                    ellipse(poisonx,poisony,poisonSize,poisonSize);
                    doAttack(poisonx,poisony,poisonSize,attack,1);
                  }
                  if (attack=== "charge"&& MP>1) {
                    fill(79, 0, 158);
                    prep = true;
                    MP -= 2;
                    pcharge++;  
                  }
                    if ( attack=== "groundPound"&&keyJustPressed&&MP>24) {
                    fill(255, 255, 255);
                    MP -= 25;
                    var poundx = px+pw/2;
                    var poundy= py+ph/2;  
                    var poundSize = 200;
                    ellipse(poundx,poundy,poundSize,poundSize);
                    doAttack(poundx,poundy,poundSize,attack,0);
                  }
                  if ( attack=== "freezePound"&&keyJustPressed&&MP>79) {
                    fill(82, 235, 255);
                    MP -= 80;
                    var poundx = px+pw/2;
                    var poundy= py+ph/2;  
                    var poundSize = 200;
                    ellipse(poundx,poundy,poundSize,poundSize);
                    doAttack(poundx,poundy,poundSize,attack,0);
                  }
                  if ( attack=== "eruption"&&keyJustPressed&&MP>300) {
                    fill(186, 0, 0);
                    MP -= 300;
                    useEruption = true;
                    var poundx = px+pw/2;
                    var poundy= py+ph/2;  
                    var poundSize = 300;
                    ellipse(poundx,poundy,poundSize,poundSize);
                    doAttack(poundx,poundy,poundSize,attack,450);
                  }
                  if ( attack === "blob cannon"&&keyJustPressed&&MP>19) {
                    fill(255, 255, 255);
                    MP -= 20;
                    HP-=10;
                    corrupted+=0.1;
                    var m = addMissile(px+pw/2,py+ph/2,10,15,10,88, 166, 255,true);
                    m.vx = dirx*10;
                    m.vy = diry*10;
                  }
                  if ( attack === "slow dart"&&keyJustPressed&&MP>59) {
                    fill(255, 255, 255);
                    MP -= 60;
                    var m = addMissile(px+pw/2,py+ph/2,10,15,10,1,0,0,true,600);
                    m.vx = dirx*10;
                    m.vy = diry*10;
                  }
                    if ( attack=== "slash" &&keyJustPressed && MP>49) {
                        fill(255, 255, 255);
                        MP -= 50;
                        corrupted+=0.2;
                        var slashx = px+dirx*50;
                        var slashy= py+diry*50;  
                        addSlash(slashx,slashy,30);
                  }
                  if ( attack=== "tentacle" &&keyJustPressed && MP>59) {
                        fill(255, 157, 0);
                        MP -= 60;
                        var size = 200;
                        var slashw = 5 + abs(dirx)*size;
                        var slashh = 5 + abs(diry)*size;
                        var slashx = px+pw/2+dirx*(size+50)/2 - slashw/2;
                        var slashy= py+ph/2+diry*(size+50)/2 - slashh/2;  
                        rect(slashx,slashy,slashw,slashh);
                        doAttackBox(slashx,slashy,slashw,slashh,attack,50);
                  }
                  if ( attack=== "stun slash" &&keyJustPressed && HP>maxHP/2) {
                        fill(255, 242, 0);
                        HP /= 2;
                        HP -= 50;
                        var slashx = px+dirx*50;
                        var slashy= py+diry*50;  
                        addSlash(slashx,slashy,60, true);
                        corrupted+=10;
                  }
                  if ( attack=== "restore"&&HP>50) {
                    if((level === 102&&!talked)||(level === "B10" && !ballistaWait)){
                        fill(0, 179, 255);
                        var restorex = px+pw/2;
                        var restorey= py+ph/2;  
                        var restoreSize = 80;
                        ellipse(restorex,restorey,restoreSize,restoreSize);
                    }else{
                        fill(0, 179, 255);
                        if(MP < maxMP*2){
                            if(godMode){
                                HP -= 10;
                            }else{
                                HP -= 1;
                            }
                            if(godMode){
                                MP += 20;
                            }else{
                                MP += 2;
                            }
        
                        }
                        if(MP > maxMP*2){
                            MP = maxMP*2;   
                        }
                        var restorex = px+pw/2;
                        var restorey= py+ph/2;  
                        var restoreSize = 80;
                        ellipse(restorex,restorey,restoreSize,restoreSize);
                        doAttack(restorex,restorey,restoreSize,attack,0);
                    }
                  }
                  if ( attack=== "sand pit"&&MP>0) {
                    MP -= 1;
                    corrupted+=0.01;
                    if(!blackHoleHeld){
                        pitFrame = frame;
                        pitx = px+pw/2;
                        pity = py+ph/2;
                    }
                    blackHoleHeld = true;
                  }else{
                    blackHoleHeld = false;  
                  }
              }else{
                  if ( attack=== "fire"&& MP>0) {
                      if (level >= 41 && level <= 50) {
                        fill(158, 158, 158);
                      }else{
                        fill(255, 145, 0);
                      }
                    MP -= 1;
                    var firex = px+pw/2+dirx*100;
                    var firey= py+ph/2+diry*100;  
                    var fireSize = 60;
                    ellipse(firex,firey,fireSize,fireSize);
                    if (level >= 41 && level <= 50) {
                        doAttack(firex,firey,fireSize,attack,0);
                    }else{
                        doAttack(firex,firey,fireSize,attack,1);
                        useFire = true;
                    }
                  }
                   if (attack=== "lightning"&& MP>4) {
                    fill(0, 196, 255);
                    MP -= 5;
                    useLightning = true;
                    var lightx = px+pw/2+dirx*100;
                    var lighty= py+ph/2+diry*100;  
                    var lightSize = 60;
                    if (level >= 41 && level <= 50) {
                       lightSize *= 1.5; 
                    }
                    ellipse(lightx,lighty,lightSize,lightSize);
                    doAttack(lightx,lighty,lightSize,attack,4);
                  }
                  if (attack=== "poison"&& MP>2) {
                    fill(79, 0, 158);
                    MP -= 3;
                    var poisonx = px+pw/2+dirx*100;
                    var poisony= py+ph/2+diry*100;  
                    var poisonSize = 60;
                    ellipse(poisonx,poisony,poisonSize,poisonSize);
                    doAttack(poisonx,poisony,poisonSize,attack,1);
                  }
                  if (attack=== "charge"&& MP>1) {
                    fill(79, 0, 158);
                    prep = true;
                    MP -= 2;
                    pcharge++;  
                  }
                    if ( attack=== "groundPound"&&keyJustPressed&&MP>24) {
                    fill(255, 255, 255);
                    MP -= 25;
                    var poundx = px+pw/2;
                    var poundy= py+ph/2;  
                    var poundSize = 200;
                    ellipse(poundx,poundy,poundSize,poundSize);
                    doAttack(poundx,poundy,poundSize,attack,0);
                  }
                  if ( attack=== "freezePound"&&keyJustPressed&&MP>79) {
                    fill(82, 235, 255);
                    MP -= 80;
                    var poundx = px+pw/2;
                    var poundy= py+ph/2;  
                    var poundSize = 200;
                    ellipse(poundx,poundy,poundSize,poundSize);
                    doAttack(poundx,poundy,poundSize,attack,0);
                  }
                  if ( attack=== "eruption"&&keyJustPressed&&MP>300) {
                    fill(186, 0, 0);
                    MP -= 300;
                    useEruption = true;
                    var poundx = px+pw/2;
                    var poundy= py+ph/2;  
                    var poundSize = 300;
                    ellipse(poundx,poundy,poundSize,poundSize);
                    doAttack(poundx,poundy,poundSize,attack,450000);//change this (450)
                  }
                  if ( attack === "blob cannon"&&keyJustPressed&&MP>99) {
                    fill(255, 255, 255);
                    MP -= 100;
                    var m = addMissile(px+pw/2,py+ph/2,10,15,10,95, 145, 3);
                    m.vx = dirx*10;
                    m.vy = diry*10;
                  }
                  if ( attack === "slow dart"&&keyJustPressed&&MP>59) {
                    fill(255, 255, 255);
                    MP -= 60;
                    var m = addMissile(px+pw/2,py+ph/2,10,15,5,232,139,9);
                    m.vx = dirx*10;
                    m.vy = diry*10;
                  }
                    if ( attack=== "slash" &&keyJustPressed && MP>49) {
                        fill(255, 255, 255);
                        MP -= 50;
                        var slashx = px+pw/2+dirx*50;
                        var slashy= py+ph/2+diry*50;  
                        var slashw = 5 + abs(dirx)*20;
                        var slashh = 5 + abs(diry)*20;
                        rect(slashx-slashw/2,slashy-slashh/2,slashw,slashh);
                        doAttackBox(slashx,slashy,slashw,slashh,attack,50);
                  }
                  if ( attack=== "tentacle" &&keyJustPressed && MP>59) {
                        fill(255, 157, 0);
                        MP -= 60;
                        var size = 200;
                        var slashw = 5 + abs(dirx)*size;
                        var slashh = 5 + abs(diry)*size;
                        var slashx = px+pw/2+dirx*(size+50)/2 - slashw/2;
                        var slashy= py+ph/2+diry*(size+50)/2 - slashh/2;  
                        rect(slashx,slashy,slashw,slashh);
                        doAttackBox(slashx,slashy,slashw,slashh,attack,50);
                  }
                  if ( attack=== "stun slash" &&keyJustPressed && MP>49) {
                        fill(255, 242, 0);
                        MP -= 50;
                        var sslashx = px+pw/2+dirx*50;
                        var sslashy= py+ph/2+diry*50;  
                        var sslashw = 5 + abs(dirx)*20;
                        var sslashh = 5 + abs(diry)*20;
                        rect(sslashx-sslashw/2,sslashy-sslashh/2,sslashw,sslashh);
                        doAttackBox(sslashx,sslashy,sslashw,sslashh,attack,25);
                  }
                  if ( attack=== "heal"&&MP>1) {
                    fill(255, 178, 254);
                    MP -= 2;
                    if(dif === 1 || dif === 2){
                        if(godMode){
                            HP += 10;
                        }else{
                            HP += 1;
                        }
                    }else if(dif === 0 || dif === 4){
                        if(godMode){
                            HP += 15;
                        }else{
                            HP += 1.5;
                        }
                    }
                    if (HP > maxHP){
                        HP = maxHP;   
                    }
                    var healx = px+pw/2;
                    var healy= py+ph/2;  
                    var healSize = 80;
                    ellipse(healx,healy,healSize,healSize);
                    doAttack(healx,healy,healSize,attack,0);
                  }
                  if ( attack=== "restore"&&HP>50) {
                    if((level === 102&&!talked)||(level === "B10" && !ballistaWait)){
                        fill(0, 179, 255);
                        var restorex = px+pw/2;
                        var restorey= py+ph/2;  
                        var restoreSize = 80;
                        ellipse(restorex,restorey,restoreSize,restoreSize);
                    }else{
                        fill(0, 179, 255);
                        if(MP < maxMP*2){
                            if(dif === 1 || dif === 2){
                                if(godMode){
                                    HP -= 10;
                                }else{
                                    HP -= 1;
                                }
                                if(godMode){
                                    MP += 20;
                                }else{
                                    MP += 2;
                                }
                            }else if(dif === 0){
                                if(godMode){
                                    HP -= 15;
                                }else{
                                    HP -= 1.5;
                                }
                                if(godMode){
                                    MP += 30;
                                }else{
                                    MP += 3;
                                }
                            }else if(dif === 4){
                                if(godMode){
                                    HP -= 20;
                                }else{
                                    HP -= 2;
                                }
                                if(godMode){
                                    MP += 40;
                                }else{
                                    MP += 4;
                                }
                            }
        
                        }
                        if(MP > maxMP*2){
                            MP = maxMP*2;   
                        }
                        var restorex = px+pw/2;
                        var restorey= py+ph/2;  
                        var restoreSize = 80;
                        ellipse(restorex,restorey,restoreSize,restoreSize);
                        doAttack(restorex,restorey,restoreSize,attack,0);
                    }
                  }
                  if ( attack=== "sand pit"&&MP>299&&keyJustPressed&&level !== "B3"&&level !== "B4") {
                    fill(255, 178, 254);
                    MP -= 300;
                    pitx = px+pw/2;
                    pity = py+ph/2;
                    pitFrame = frame;
                  }
              }
          }
      }
      if(!prep && attack === "charge"&&pcharge>0){
            pcharging = pcharge;
            pcharge = 0;
          }
      prep = false;
      
      //boss 1 effects
    if(es[0].mon.name === "kingBlob") {
           if(frame > lastSummonFrame + 600) {
                lastSummonFrame = frame; 
            if(es[0].hp <= 500) {
                addMonster( 202, 233, monsters.miniBlob);
            }else{
                addMonster( 202, 233, monsters.blob);
            }
           }
            if(frame > lastThrowFrame + 100) {
                lastThrowFrame = frame;
                if(es[0].hp <= 500) {
                    addMissile(300,200, 8, 40, 5, 44, 60, 0);
                }else{
                    addMissile(300,200, 5, 20, 2, 95, 145, 2);
                }
            }
    }
      //boss 2 effects
        if(es[0].mon.name === "crusher2000") {
                if(frame > lastSummonFrame + 1000) {
                    lastSummonFrame = frame; 
                    if(es[0].hp <= 1000 && es[0].hp > 500) {
                        addMonster( 150, 150, monsters.robot);
                    }else if (es[0].hp >1000){
                        if (crusherswap === false) {
                            addMonster( 150, 150, monsters.fireBlob);
                            crusherswap = true;
                        }else{
                            addMonster( 150, 150, monsters.elBlob);
                            crusherswap = false;
                        }
                    }
                }
                if (es[0].hp <= 500) {
                   if(frame > lastThrowFrame + 50) {
                      lastThrowFrame = frame;
                      addMissile(200,100, 5, 20, 2, 97, 61, 0);   
                    }
                    gearplaceL += 0.05;
                    gearplaceR -= 0.05;
                }else{
                    if(frame > lastThrowFrame + 100) {
                        lastThrowFrame = frame;
                        addMissile(200,100, 5, 20, 2, 97, 61, 0);   
                    }
                }
        }
      //boss 3 effects
      if(es[0].mon.name === "queenCloud") {
           if(frame > lastSummonFrame + 3000) {
                lastSummonFrame = frame; 
            if(es[0].hp <= 2000 && es[0].hp>1000) {
                addMonster(180,150, monsters.miniSkyBlob);
            }else if(es[0].hp <= 1000){
                addMonster(150,150, monsters.skyBlob);
                addMonster(200,150, monsters.miniSkyBlob);
            }else{
                addMonster( 180,150, monsters.skyBlob);
            }
           }
           if(frame > lastThrowFrame + 200) {
              lastThrowFrame = frame;
              if(es[0].hp <= 2000 && es[0].hp > 1000) {
                addHPMissile(200,100, 8, 70, -2, 255, 168, 242);
              }else if(es[0].hp <= 1000){
                addHPMissile(200,100, 8, 60, -2, 255, 168, 242);
              }else{
                addHPMissile(200,100, 8, 50, -1, 255, 168, 242);   
              }
           }
           if(es[0].hp <= 2000 && es[0].hp > 1000 && cloudSummon1 === false){
               addMonster(100,200, monsters.cloud);
               addMonster(250,200, monsters.cloud);
               addMonster(175,250, monsters.cloud);
               cloudSummon1 = true;
           }
           if(es[0].hp <= 1000 && cloudSummon2 === false){
               addMonster(1,200, monsters.elcloud);
               addMonster(320,200, monsters.elcloud);
               cloudSummon2 = true;
           }
      }
      //boss 4 effects
      if(es[0].mon.name === "frostBeast") {
        if(es[0].hp <= 2000 && es[0].hp > 1000) {
            if(frame > lastSummonFrame + 1200) {
                lastSummonFrame = frame; 
                addMonster( 10, 60, monsters.livIce);
                addMonster( 310, 310, monsters.livIce);
            }
        }else{
       if(frame > lastSummonFrame + 7800) {
        lastSummonFrame = frame; 
        addMonster( 10, 60, monsters.iceBlob);
        addMonster( 340, 340, monsters.iceBlob);
       }
        }
       if(superFreeze === true && frame > lastFreezeFrame + freezeDelay){
           lastFreezeFrame = frame;
           superFreeze = false;
           if(es[0].hp <= 3000 && es[0].hp >2000){
                es[0].mon.speed = 1.2;
           }else if(es[0].hp <= 2000 && es[0].hp > 1000){
                es[0].mon.speed = 1.5;
           }else if(es[0].hp <= 1000) {
                es[0].mon.speed = 2; 
           }else{
                es[0].mon.speed = 1;
           }
           fill(0, 230, 255);
           ellipse(es[0].x+es[0].mon.width/3.5,es[0].y+es[0].mon.height/3.5,es[0].mon.width*3.5,es[0].mon.height*3.5);
           if(pointInEllipse(px+pw/2,py+ph/3.5,es[0].x+es[0].mon.width/3.5,es[0].y+es[0].mon.height/3.5,es[0].mon.width*3.5,es[0].mon.height*3.5)){
               stun = 160;
              }
       }
       if(frame > lastFreezeFrame + 600) {
        lastFreezeFrame = frame;
        es[0].mon.speed = 0;
        superFreeze = true;
        if(es[0].hp <= 1000){
            freezeDelay = 50;   
        }
       }
      }
      
    //boss 6 effects
    if(es[0].mon.name === "sandKing") {
        if (es[0].hp > 5000){
            if(frame > lastSummonFrame + 2800) {
                lastSummonFrame = frame; 
                addMonster( 202, 233, monsters.sandBlob);
            }
        }else if(es[0].hp <= 5000 && es[0].hp > 4000){
            if(frame > lastSummonFrame + 2400) {
                lastSummonFrame = frame; 
                addMonster( 202, 233, monsters.sandBlob);
            }
        }else if(es[0].hp <= 4000 && es[0].hp > 3000){
            if(frame > lastSummonFrame + 9500) {
                lastSummonFrame = frame; 
                addMonster( 202, 233, monsters.miniMummy);
            }
        }else if(es[0].hp <= 3000 && es[0].hp > 2000){
            if(frame > lastSummonFrame + 9000) {
                lastSummonFrame = frame; 
                addMonster( 202, 233, monsters.miniMummy);
            }
        }else if(es[0].hp <= 2000 && es[0].hp > 1000){
            if(frame > lastSummonFrame + 10000) {
                lastSummonFrame = frame; 
                addMonster( 202, 233, monsters.sarcophagus);
            }
        }else if(es[0].hp <= 1000){
            windsped += 0.0005;
        }
    }
    
     //boss 7 effects
    if(es[0].mon.name === "altar") {
        if(frame % 200 === 199) {
            var numMissiles = 10;
            var altarM = 2;
            if (es[0].hp <= 6000 && es[0].hp > 5000){
                numMissiles = 11;
                altarM = 3;
            }else if (es[0].hp <= 5000 && es[0].hp > 4000){
                numMissiles = 12;
            }else if (es[0].hp <= 4000 && es[0].hp > 3000){
                numMissiles = 13;
                altarM = 2;
            }else if (es[0].hp <= 3000 && es[0].hp > 2000){
                numMissiles = 14;
                altarM = 3;
            }else if (es[0].hp <= 2000 && es[0].hp > 1000){
                numMissiles = 15;
                altarM = 2;
            }else if (es[0].hp <= 1000){
                numMissiles = 20;
                altarM = 5;
            }
            var angleOffset = random() * 360 / numMissiles;
            for (var i = 0 ; i < numMissiles ; i++) {
                var angle = i * 360 / numMissiles + angleOffset;
                  var m = {
                      x: es[0].x + es[0].mon.width/2,
                      y: es[0].y + es[0].mon.height/2,
                      vx: 5 * cos(angle),
                      vy: 5 * sin(angle),
                      size: 20,
                      damage: altarM,
                      red: 232,
                      green: 140,
                      blue: 9,
                      slow: true
                  };
                ms.push(m);
            }
        }
         if (es[0].hp > 6000){
            if(altarWait){
                if(frame > lastSummonFrame + 4200) {
                    lastSummonFrame = frame; 
                    addMonster( 160, 200, monsters.jungleBlob);
                    altarWait = false;
                }
            }else{
                if(frame > lastSummonFrame + 2100) {
                    lastSummonFrame = frame; 
                    addMonster( 160, 200, monsters.jungleBlob);
                }
            }
        }else if (es[0].hp <= 6000 && es[0].hp > 5000){
            if(frame > lastSummonFrame + 2100) {
                lastSummonFrame = frame; 
                addMonster( 160, 200, monsters.roboMonkey);
            }
        }else if (es[0].hp <= 5000 && es[0].hp > 4000){
            if(frame > lastSummonFrame + 1250) {
                lastSummonFrame = frame; 
                addMonster( 160, 200, monsters.jungleYoungling);
            }
        }else if (es[0].hp <= 4000 && es[0].hp > 3000){
            if(altarWait2){
                if(frame > lastSummonFrame + 3150) {
                    lastSummonFrame = frame; 
                    addMonster( 160, 200, monsters.jungleBlob);
                    altarWait2 = false;
                }
            }else{
                if(frame > lastSummonFrame + 2100) {
                    lastSummonFrame = frame; 
                    addMonster( 160, 200, monsters.jungleBlob);
                }
            }
        }else if (es[0].hp <= 3000 && es[0].hp > 2000){
            if(frame > lastSummonFrame + 2100) {
                lastSummonFrame = frame; 
                addMonster( 160, 200, monsters.roboMonkey);
            }
        }else if (es[0].hp <= 2000 && es[0].hp > 1000){
            if(frame > lastSummonFrame + 1250) {
                lastSummonFrame = frame; 
                addMonster( 160, 200, monsters.jungleYoungling);
            }
        }
    }
    //boss 8 effects
    if(es[0].mon.name === "poisonFlower") {
        if(es[0].hp <= 2500){
            if(frame > lastSummonFrame + 800) {
                lastSummonFrame = frame;
                addMonster( 300, 145, monsters.mosquito);
                addMonster( 300, 170, monsters.mosquito);
                addMonster( 350, 170, monsters.mosquito);
                addMonster( 350, 145, monsters.mosquito);
                addMonster( 330, 125, monsters.mosquito);
                addMonster( 315, 145, monsters.mosquito);
                addMonster( 315, 170, monsters.mosquito);
                addMonster( 335, 170, monsters.mosquito);
                addMonster( 335, 145, monsters.mosquito);
                addMonster( 330, 110, monsters.mosquito);
            }
        }else{
            if(frame > lastSummonFrame + 1000) {
                lastSummonFrame = frame;
                addMonster( 300, 145, monsters.mosquito);
                addMonster( 300, 170, monsters.mosquito);
                addMonster( 350, 170, monsters.mosquito);
                addMonster( 350, 145, monsters.mosquito);
                addMonster( 330, 125, monsters.mosquito);
                addMonster( 315, 145, monsters.mosquito);
                addMonster( 315, 170, monsters.mosquito);
                addMonster( 335, 170, monsters.mosquito);
                addMonster( 335, 145, monsters.mosquito);
                addMonster( 330, 110, monsters.mosquito);
            }
        }
        if(frame > lastThrowFrame + 200) {
            lastThrowFrame = frame;
            if(es[0].hp <= 2500){
                if(numinFlowers<3){
                    var m = addMissile(300,145, 5, 20, 2, 219, 183, 0);
                    m.bounce = 3;
                    m = addMissile(310,170, 5, 20, 2, 219, 183, 0);
                    m.bounce = 3;
                    if(numinFlowers<2){
                        m = addMissile(350,170, 5, 20, 2, 219, 183, 0);
                        m.bounce = 3;
                        m = addMissile(350,145, 5, 20, 2, 219, 183, 0);
                        m.bounce = 3;
                    }
                    if(numinFlowers<1){
                        m = addMissile(330,125, 5, 20, 2, 219, 183, 0);
                        m.bounce = 3;
                    }
                }    
            }else{
                if(numinFlowers<3){
                    var m = addMissile(300,145, 5, 20, 2, 219, 183, 0);
                    m.bounce = 2;
                    m = addMissile(310,170, 5, 20, 2, 219, 183, 0);
                    m.bounce = 2;
                    if(numinFlowers<2){
                        m = addMissile(350,170, 5, 20, 2, 219, 183, 0);
                        m.bounce = 2;
                        m = addMissile(350,145, 5, 20, 2, 219, 183, 0);
                        m.bounce = 2;
                    }
                    if(numinFlowers<1){
                        m = addMissile(330,125, 5, 20, 2, 219, 183, 0);
                        m.bounce = 2;
                    }
                }
            }
        }
        if(es[0].hp <= 2500){
            if(frame > lastPoisonThrowFrame + 2000) {
                lastPoisonThrowFrame = frame;
                var m = addMissile(300,145, 5, 30, 0, 79, 0, 158);
                m.splat = true;
            }
        }else{
            if(frame > lastPoisonThrowFrame + 2400) {
                lastPoisonThrowFrame = frame;
                var m = addMissile(300,145, 5, 30, 0, 79, 0, 158);
                m.splat = true;
            }   
        }
        if(!poisonFlowerSummon && es[0].hp <= 2500){
            addMonster( 230, 265, monsters.miniPoisonFlower);
            addMonster( 230, 190, monsters.miniPoisonFlower);
            addMonster( 230, 340, monsters.miniPoisonFlower);
            poisonFlowerSummon = true;
        }
    }
    //boss 9
    if(es[0].mon.name === "brokenCastle") {
        if(!dedText){
        texts = [];
        testFrame = 0;
        addText(frame,"WHAT!!!!!!                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+300,"NOOO!!! HOW COULD THIS HAPPEN!!                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+700,"OUR CASTLE HAS FALLEN!!                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+1100,"We have failed to stop the dragon for now. We shall now retreat into the realm of darkness where we shall be properly equipped to fight this dragon!!!                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+2100,"What fools we were to leave our equipment behind!                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+2500,"Let's get going now while we have the chance!                 ", 5, 200, 250, 100, 0, 166, 255);
        addText(frame+2950,"We shall meet again dragon!                 ", 5, 200, 250, 100, 0, 166, 255);
        dedText = true;
        }
        if(testFrame === 3350){
            if (speedrunMode && category === "90l"){
                level = -34;
                
                
            }else{
                level += 1;
                StartLevel();
            }
        }
    }
    if(es[0].mon.name === "castle") {
        if(!text1){
        addText(frame+50,"So, you have arrived.                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+380,"I have been waiting for you for quite some time.                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+850,"I was beginning to hope that you fell somewhere along your journey.                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+1450,"But alas, here we are.                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+1850,"And since we are here,                 ", 5, 200, 150, 100, 0, 255, 0);
        addText(frame+2250,"A battle must be done.                 ", 5, 200, 150, 100, 0, 255, 0);
        text1 = true;
        }
        if(!text2 && (testFrame >= 2650 || es[0].hp < 9000)){
            testFrame = 0;
            texts = [];
            if(es[0].hp < 9000){
                addText(frame,"Hey! I was talking!                 ", 5, 200, 150, 100, 0, 255, 0);
                addText(frame+300,"Anyways,                 ", 5, 200, 150, 100, 0, 255, 0);
                addText(frame+600,"A battle must be done.                 ", 5, 200, 150, 100, 0, 255, 0);
            }else{
                addText(frame,"Fire the ballistae!                 ", 5, 200, 150, 100, 0, 255, 0);
                text3 = true;
                ballistaWait = true;
                testFrame = -500;
            }
            text2 = true;
        }
        if(!text3 && testFrame >= 900 && text2){
            testFrame = -500;
            addText(frame,"Fire the ballistae!                 ", 5, 200, 150, 100, 0, 255, 0);
            ballistaWait = true;
            text3 = true;
        }
        if(!text4 && testFrame >= 0 && ballistaWait){
            testFrame = 0;
            skipB10 = true;
            addText(frame,"Arch Blobomancer, I need you to bring out the troops                ", 5, 200, 150, 100, 0, 255, 0);
            addText(frame+400,"Yes Sir!                 ", 5, 225, 250, 100, 0, 166, 255);
            addText(frame+600,"We're going to bring back every single monster that you have fought before!                 ", 5, 200, 150, 100, 0, 255, 0);
            addText(frame+1200,"Here comes the first wave!                 ", 5, 200, 250, 100, 0, 166, 255);
            text4 = true;
        }
            if(text4 && testFrame>=1600 && !wave1){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.blob);
                addMonster( 250, 110, monsters.miniBlob);
                addMonster( 240, 131, monsters.blob);
                addMonster( 250, 182, monsters.miniBlob);
                addMonster( 240, 203, monsters.blob);
                addMonster( 250, 254, monsters.miniBlob);
                addMonster( 240, 275, monsters.blob);
                addMonster( 250, 326, monsters.miniBlob);
                addMonster( 240, 347, monsters.blob);
                wave1 = true;
            }
            if(!text5 && wave1 && text4){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"It seems that we will need better troops.                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+350,"Then bring out the next set of troops!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+750,"Yes sir!                 ", 5, 225, 250, 100, 0, 166, 255);
                    addText(frame+1000,"Here comes wave two!                 ", 5, 200, 250, 100, 0, 166, 255);
                    text5 = true;   
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text5 && testFrame>=1400 && !wave2){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.fireBlob);
                addMonster( 250, 110, monsters.elBlob);
                addMonster( 240, 131, monsters.robot);
                addMonster( 250, 182, monsters.elBlob);
                addMonster( 240, 203, monsters.fireBlob);
                addMonster( 250, 254, monsters.elBlob);
                addMonster( 240, 275, monsters.robot);
                addMonster( 250, 326, monsters.elBlob);
                addMonster( 240, 347, monsters.fireBlob);
                wave2 = true;
            }
            if(!text6 && wave2 && text5){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"Hmm, shall I bring out the next wave?                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+400,"Yes! Do so immediately!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+750,"Yes sir!                 ", 5, 225, 250, 100, 0, 166, 255);
                    addText(frame+1000,"Here they come!                 ", 5, 200, 250, 100, 0, 166, 255);
                    text6 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text6 && testFrame>=1400 && !wave3){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.skyBlob);
                addMonster( 220, 131, monsters.cloud);
                addMonster( 220, 203, monsters.elcloud);
                addMonster( 220, 275, monsters.cloud);
                addMonster( 240, 347, monsters.miniSkyBlob);
                wave3 = true;
            }
            if(!text7 && wave3 && text6){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"Hmph! It still was not enough! BRING OUT THE ICE BLOBS!!!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+600,"Chill out! Here they come!                 ", 5, 200, 250, 100, 0, 166, 255);
                    text7 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text7 && testFrame>=1000 && !wave4){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.iceBlob);
                addMonster( 150, 110, monsters.livIce);
                addMonster( 220, 131, monsters.iceBlob);
                addMonster( 180, 203, monsters.fog);
                addMonster( 220, 275, monsters.iceBlob);
                addMonster( 150, 320, monsters.livIce);
                addMonster( 240, 347, monsters.iceBlob);
                wave4 = true;
            }
            if(!text8 && wave4 && text7){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"... wellllllll I kind of forgot we were in a volcano.                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+500,"Well, the water blobs can live a bit longer than ice blobs (albeit still hindered)                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+1100,"Yea, just bring them out. We already have them so why not?                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+1600,"Here they come!                 ", 5, 200, 250, 100, 0, 166, 255);
                    text8 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text8 && testFrame>=2000 && !wave5){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.waterBlob);
                addMonster( 190, 105, monsters.squid);
                addMonster( 240, 160, monsters.waterBlob);
                addMonster( 250, 213, monsters.mudBlob);
                addMonster( 240, 275, monsters.waterBlob);
                addMonster( 190, 319, monsters.squid);
                addMonster( 240, 347, monsters.waterBlob);
                wave5 = true;
            }
             if(!text9 && wave5 && text8){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"Gah! Still not enough!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+300,"We should bring out the desert blobs                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+600,"Good idea! Here they come!                 ", 5, 200, 150, 100, 0, 255, 0);
                    text9 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text9 && testFrame>=1000 && !wave6){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.sandBlob);
                addMonster( 240, 160, monsters.sandBlob);
                addMonster( 250, 213, monsters.mummy);
                addMonster( 240, 275, monsters.sandBlob);
                addMonster( 240, 347, monsters.sandBlob);
                wave6 = true;
            }
            if(!text10 && wave6 && text9){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"Even that didn't work!                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+300,"I have an idea! The jungle blobs should do!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+800,"Here they come!                 ", 5, 200, 150, 100, 0, 255, 0);
                    text10 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text10 && testFrame>=1200 && !wave7){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.jungleBlob);
                addMonster( 240, 160, monsters.jungleYoungling);
                addMonster( 250, 213, monsters.jungleYoungling);
                addMonster( 240, 275, monsters.jungleYoungling);
                addMonster( 240, 347, monsters.jungleBlob);
                wave7 = true;
            }
            if(!text11 && wave7 && text10){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"Hmmmm, we need something different. Let's bring out the poison blobs                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+600,"Good idea! Here they come!                 ", 5, 200, 150, 100, 0, 255, 0);
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                    text11 = true;
                }
            }
            if(text11 && testFrame>=1000 && !wave8){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.poisonBlob);
                addMonster( 240, 160, monsters.bigMosquito);
                addMonster( 250, 213, monsters.poisonMiniBlob);
                addMonster( 240, 275, monsters.bigMosquito);
                addMonster( 240, 347, monsters.poisonBlob);
                wave8 = true;
            }
            if(!text12 && wave8 && text11){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"We're down to our last wave, let's make this one count!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+500,"LAST WAVE! COME OUT!                ", 5, 200, 250, 100, 0, 166, 255);
                    text12 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(text12 && testFrame>=900 && !wave9){
                testFrame = 0;
                HP+=250;
                if(HP>maxHP){
                    HP=maxHP;   
                }
                MP+=500;
                if(MP>maxMP){
                    MP=maxMP;   
                }
                addMonster( 240, 59, monsters.lavaBlob);
                addMonster( 240, 160, monsters.bomb);
                addMonster( 250, 213, monsters.golem);
                addMonster( 240, 347, monsters.lavaHound);
                wave9 = true;
            }
            if(!text13 && wave9 && text12){
                if(es.length === 1){
                    testFrame = 0;
                    addText(frame,"*Sigh* we ran out of troops                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+500,"Uhhhh just let the balistae keep firing. Maybe they'll get a lucky shot?                 ", 5, 200, 250, 100, 0, 166, 255);
                    text13 = true;
                    if(es[0].hp > 500){
                        es[0].hp -= 1000;
                        if(es[0].hp < 500){
                            es[0].hp = 500;   
                        }
                    }
                }
            }
            if(!text14 && testFrame >= 1600 && wave9 && text13){
                testFrame = 0;
                addText(frame,"Well, there isn't much else to do other than talk soooo...                 ", 5, 200, 250, 100, 0, 166, 255);
                addText(frame+700,"What do you mean? Are we just going to stand here and let the castle fall? Disappoint our master?                 ", 5, 200, 150, 100, 0, 255, 0);
                addText(frame+1600,"Well, I mean we can't just jump down and fight. We left our weapons behind, remember?                 ", 5, 200, 250, 100, 0, 166, 255);
                addText(frame+2300,"Oh yea. Fair enough......                 ", 5, 200, 150, 100, 0, 255, 0);
                addText(frame+2600,"Speaking of our master, I heard a rumor once. I'm not normally one to believe in these things but this one is really interesting!                 ", 5, 200, 250, 100, 0, 166, 255);
                addText(frame+3400,"Hmmm, I don't think now's the time to be talking about that...                 ", 5, 200, 150, 100, 0, 255, 0);
                addText(frame+3900,"Pfft, it's not like it would help the dragon.                  ", 5, 200, 250, 100, 0, 166, 255);
                addText(frame+4400,"Anyways, I heard that our master created a machine. Some have heard that it could become stronger than our master himself!                 ", 5, 200, 250, 100, 0, 166, 255);
                addText(frame+5400,"Too bad we won't get to see it. It is magically hidden by the Dark Lord.                 ", 5, 200, 250, 100, 0, 166, 255);
                addText(frame+6100,"Sigh, if only our master could come here. He is much too busy though. How stupid could we be to leave our weapons behind!                 ", 5, 200, 150, 100, 0, 255, 0);
                text14 = true;
            }
        if(frame+30 > lastThrowFrame + 200 && ballistaWait){
            fill(166, 0, 0);
            textSize(50);
            text("!",250,120);
            text("!",250,370);
            textSize(12);
        }
        if(frame > lastThrowFrame + 200 && ballistaWait) {
                lastThrowFrame = frame;
                addMissile(300,100, 10, 20, 5, 115, 79, 0);
                addMissile(300,350, 10, 20, 5, 115, 79, 0);
            }
    }
    //sir blobsalot
    for (var i = 0 ; i < es.length ; i++) {
        var e = es[i];
        if(e.mon.name === "dedalot"){
            if(!text5){
                testFrame = 0;
                texts=[];
                if(level === 101){
                    addText(frame,"WHAT!                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+300,"HOW COULD I LOSE!?                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+600,"I'm sorry master!                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+900,"I've failed you...                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+1200,"And I have paid with my life.                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+1600,"Farewell...                 ",5,e.x-120,e.y,100,0,255,0);
                }else{
                    addText(frame,"WHAT!                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+300,"NONONONNONO!                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+600,"DEFEATED AGAIN!?!?                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+900,"*Huff huff* THIS ISN'T THE LAST OF ME!                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+1300,"I WILL DO ANYTHING TO SAVE MY MASTER!!! *huff*                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+1800,"THE NEXT FIGHT WILL BE OUR LAST! *huff huff*                 ",5,e.x-120,e.y,100,0,255,0);
                    addText(frame+2250,"LEAVE NOW! I AM WARNING YOU! *huuufff*                 ",5,e.x-120,e.y,100,0,255,0);
                }
                text5 = true;
            }
            if(level === 101){
                if(testFrame === 1900){
                    es.splice(i,1);
                    if(es.length === 0){
                        transform = false;
                        talked = false;
                        level += 1;
                        StartLevel();
                    }
                }
            }else{
                if(testFrame === 2600){
                    es.splice(i,1);
                    if(es.length === 0){
                        transform = false;
                        talked = false;
                        level += 1;
                        StartLevel();
                    }
                }
            }
        }
        if(e.mon.name === "sirBlobsalot") {
        if(!text1){
            texts=[];
            testFrame = 0;
            if(level === 101){
                texts = [];
                addText(frame+60,"This is your last chance to leave dragon.                 ",5,e.x-120,e.y,100,0,255,0);
                addText(frame+500,"If you don't leave now, there will be a fight to the death.                 ",5,e.x-120,e.y,100,0,255,0);
                addText(frame+1000,"Arch Blobomancer and I will hold nothing back!                 ",5,e.x-120,e.y,100,0,255,0);
                addText(frame+1500,"Heh, still here? Get ready for the battle of your life!                 ",5,e.x-120,e.y,100,0,255,0);
            }else{
                addText(frame+60,"So you followed us in here, I see.                 ",5,e.x-120,e.y,100,0,255,0);
                addText(frame+460,"I assume that you came to defeat the Dark Lord?                 ",5,e.x-120,e.y,100,0,255,0);
                addText(frame+960,"You do realize that I will sacrifice myself to protect the Dark Lord                 ",5,e.x-120,e.y,100,0,255,0);
                addText(frame+1560,"Still here? Fine, let's get this over with.                 ",5,e.x-120,e.y,100,0,255,0);
            }
            text1 = true;
        }
        if(e.hp < 5000 && !talked){
            testFrame = 0;
            talked = true;
            testFrame2 = 0;
            texts = [];
            if(!text2){ 
                if(level === 101){
                    addText(frame,"FINE! HAVE IT YOUR WAY!                ",5,e.x-120,e.y,100,0,255,0);
                }else{
                    addText(frame,"FINE! HAVE IT YOUR WAY!                 ",5,e.x-120,e.y,100,0,255,0);
                }
            }
        }
        if(testFrame === 2010 && !talked){
            testFrame = 0;
            testFrame2 = 0;
            talked = true;   
        }
        if(talked){
            //sirBlobsalot fight
            if(testFrame === 500 && cycle === "charge"){
                charge = true;
            }
            if(testFrame === 250 && cycle === "spin"){
                spin = 0;   
            }
            if(testFrame === 310 && cycle === "spin"){
                spin = 1;
                e.mon.speed*=3;
                e.mon.damage*=3;
            }
            if(testFrame === 600 && cycle === "spin"){
                spin = -1;
                e.mon.speed/=3;
                e.mon.damage/=3;
                testFrame = 0;
                if(e.hp <= 2000){
                    cycle = "pound";
                }else{
                    cycle = "charge";   
                }
            }
            if(testFrame === 300 && cycle === "pound"){
                pound = 0;   
            }
            if(testFrame === 420 && cycle === "pound"){
                pound = -1;
                testFrame = 0;
                fill(192,192,192);
                ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,250,250);
                if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 250)) {
                    HP -= 300;
                    playerPoundedFrame = frame;
                    playerPoundedEnemy = e;
                }
                cycle = "charge";   
            }
            if(charge){
                charging ++;
            }
        }
    }
    }
    //arch blobomancer
    for (var i = 0; i < es.length ; i++) {
        if(es.length > 1 && es[0].mon.name !== "archBlobomancer"){
            i++;   
        }
        var e = es[i];
        if(e.mon.name === "dedmancer"){
            if(!text6){
                testFrame2 = 0;
                texts=[];
                if(level === 101){
                    texts = [];
                    addText(frame,"NOOO!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+200,"I'VE FAILED AGAIN!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+600,"I'm sorry master.                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+900,"But even though my body may be destroyed...                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+1400,"My soul will live on.                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+1800,"I will find a way to revive myself as a lich!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+2300,"This is not the end of me!!!                 ",5,e.x-120,e.y,100,0, 166, 255);
                }else{
                    addText(frame,"WHATTTTT!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+300,"IMPOSSIBLE!!!!!!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+600,"EVEN AFTER THE DARK LORD'S GIFT...                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+1000,"I COULDN'T EVEN BEAT THIS PUNY DRAGON!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+1400,"GRRRRRR!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+1700,"I'LL SHOW YOU!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+2000,"SIR BLOBSALOT AND I SHALL VANQUISH YOU!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+2500,"YOU WILL STAND NO CHANCE AGAINST THE BOTH OF US!                 ",5,e.x-120,e.y,100,0, 166, 255);
                    addText(frame+3000,"LEAVE NOW! THIS IS YOUR LAST CHANCE!                 ",5,e.x-120,e.y,100,0, 166, 255);
                }
                text6 = true;
                //transform = false;
                //talked = false;
            }
            if(level === 101){
                if(testFrame2 === 2700){
                    es.splice(i,1);
                    if(es.length === 0){
                        transform = false;
                        talked = false;
                        level += 1;
                        StartLevel();
                    }
                }
            }else{
                if(testFrame2 === 3500){
                    es.splice(i,1);
                    if(es.length === 0){
                        level += 1;
                        StartLevel();
                    }
                }
            }
        }
        if(e.mon.name === "archBlobomancer") {
        if(!text1&&level!==101){
            texts=[];
            testFrame2 = 0;
            addText(frame+60,"Hmmmm. So you did follow us in here.                 ",5,e.x-120,e.y,100,0, 166, 255);
            addText(frame+460,"I knew Sir Blobsalot made the wrong choice telling you where we were going.                 ",5,e.x-120,e.y,100,0, 166, 255);
            addText(frame+1060,"You've come to beat the Dark Lord?                 ",5,e.x-120,e.y,100,0, 166, 255);
            addText(frame+1460,"Pffft. You stand no chance against him.                 ",5,e.x-120,e.y,100,0, 166, 255);
            addText(frame+1960,"His magic is even more advanced than mine!                 ",5,e.x-120,e.y,100,0, 166, 255);
            addText(frame+2460,"Care to witness raw power?                 ",5,e.x-120,e.y,100,0, 166, 255);
            text1 = true;
        }
        if(e.hp < 5000 && !talked){
            testFrame2 = 0;
            talked = true;
            testFrame = 0;
            if(!text2){
                texts = [];
                if(level === 101){
                    addText(frame,"ACK! CHEATER!               ",5,e.x-120,e.y,100,0, 166, 255);
                }else{
                    addText(frame,"ACK! CHEATER!                 ",5,e.x-120,e.y,100,0, 166, 255);      }
            }
        }
        if(testFrame2 === 2900 && !talked){
            testFrame2 = 0;
            testFrame = 0;
            talked = true;   
        }
        if(talked){
            //archBlobomancer fight
            //cycle2: "shoot" "tp" "bigShot" "scatter"
            if(cycle2 === "shoot"){
                if(testFrame2 === 100){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 110){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 120){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 130){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 140){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                
                if(testFrame2 === 240){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 250){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 260){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 270){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 280){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                
                if(testFrame2 === 380){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 390){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 400){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 410){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 420){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                
                if(testFrame2 === 520){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 530){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 540){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 550){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 560){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                
                if(testFrame2 === 660){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 670){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 680){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 690){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);   
                }
                if(testFrame2 === 700){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);
                    e.tp = 200;
                    testFrame2 = 0;
                    if(e.hp <= 4000){
                        cycle2 = "tp";
                        e.x = 345;
                        e.y = 55;
                        teleporting = true;
                    }else{
                        cycle2 = "shoot";   
                    }
                }
            }
            if(cycle2 === "tp"){
                if(testFrame2 === 100){
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 110){
                    e.x = 5;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 120){
                    e.x = 5;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 130){
                    e.x = 345;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 140){
                    e.x = 345;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                    teleporting = true;
                }
                if(testFrame2 === 150){
                    e.x = 5;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 160){
                    e.x = 5;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 170){
                    e.x = 345;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 180){
                    e.x = 345;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                    teleporting = true;
                }
                if(testFrame2 === 190){
                    e.x = 5;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 200){
                    e.x = 5;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 210){
                    e.x = 345;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 220){
                    e.x = 345;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                    teleporting = true;
                }
                if(testFrame2 === 230){
                    e.x = 5;
                    e.y = 55;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 240){
                    e.x = 5;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 250){
                    e.x = 345;
                    e.y = 345;
                    addMissile(e.x,e.y, 5, 12, 7, 89, 166, 255, true);
                }
                if(testFrame2 === 300){
                    teleporting = false;
                    e.tp = 100;
                    testFrame2 = 0;
                    if(e.hp<=3000){
                        cycle2 = "bigShot";
                    }else{
                        cycle2 = "shoot";   
                    }
                }
            }
            if(cycle2 === "bigShot"){
                if(testFrame2 >= 100){
                    teleporting = true;
                    e.x = 170;
                    e.y = 210;
                    fill(89, 166, 255);
                    pushMatrix();
                    translate(e.x+25,e.y-75-bigSize/2);
                    rotate(45);
                    rect(0,0,bigSize,bigSize);
                    popMatrix(); 
                }
                if(testFrame2 === 180){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 80, 89, 166, 255, true);
                }
                if(testFrame2 === 190){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 70, 89, 166, 255, true);
                }
                if(testFrame2 === 200){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 60, 89, 166, 255, true);
                }
                if(testFrame2 === 210){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 50, 89, 166, 255, true);
                }
                if(testFrame2 === 220){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 40, 89, 166, 255, true);
                }
                if(testFrame2 === 230){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 30, 89, 166, 255, true);
                }
                if(testFrame2 === 240){
                    bigSize*=2;
                    bigSize/=3;
                    addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 20, 89, 166, 255, true);
                    
                    bigSize = 0;
                    testFrame2 = 0;
                    teleporting = false;
                    if(e.hp<=2000){
                        cycle2 = "scatter";
                    }else{
                        cycle2 = "shoot";   
                    }
                }
            }
            if(cycle2 === "scatter"){
                if(testFrame2 >= 100){
                    teleporting = true;
                    e.x = 170;
                    e.y = 210;
                }
                if(testFrame2 >= 150){
                    addMissile(e.x,e.y, 5, 12, 15, 89, 166, 255, true);
                }
                if(testFrame2 === 250){
                    testFrame2 = 0;
                    teleporting = 0;
                    cycle2 = "shoot";
                }
            }
                
        }
        
    }
    //dark lord
    for (var i = 0 ; i < es.length ; i++) {
        var e = es[i];
        if(e.mon.name === "darkLord") {
            
        if(!text1 && !phase2&&level!=="???"){
            texts = [];
            testFrame2 = 0;
            if(talked){
                addText(frame,"Let's get this over with.                 ",5,e.x-120,e.y,100,0, 0, 0); 
            }else{
                addText(frame+60,"So you finally made it.                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+400,"You made it past all of those creatures I corrupted...                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+900,"All of my minions...                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+1200,"And even the two generals, Sir Blobsalot and Arch Blobomancer.                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+1800,"I'm impressed. Really! I am!                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+2200,"But your efforts were worthless. I am undefeatable!                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+2700,"My dark magic can do ANYTHING! And it will soon become...                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+3250,"EVERYTHING!!! HAHAHA!                 ",5,e.x-120,e.y,100,0, 0, 0);
                addText(frame+3600,"PREPARE TO BREATHE YOUR LAST, DRAGON!                 ",5,e.x-120,e.y,100,0, 0, 0);
            }
            text1 = true;
        }
        if(e.hp < 10000 && !talked && testFrame2 < 4000&&!text2&&!phase2&&level!=="???"){
            testFrame2 = 3600;
            if(!text2){
                texts = [];
                addText(frame,"Attack me all you want. It doesn't matter.                 ",5,e.x-120,e.y,100,0, 0, 0);
                text2 = true;
            }
        }
        if(testFrame2 === 4200 && !talked && !text3&&!phase2&&level!=="???"){
            if(!text3){
                texts = [];
                addText(frame,"Now, LET US FINISH THIS!                 ",5,e.x-120,e.y,100,0, 0, 0);
                text3 = true;
            }  
        }
        if(testFrame2 > 0 && !text4 && phase2&&level!=="???"){
            testFrame2 = 0;
            
            if(!text4){
                texts = [];
                if(talked){
                    addText(frame,"Ready for round two?                 ",5,e.x-120,e.y,100,0, 0, 0);
                }else if (text5){
                    addText(frame,"Hgnnnh...                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+300,"I see...                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+600,"You are stronger than I thought.                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+1100,"But none of this matters.                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+1600,"Heh, can't you see? I'm immortal! Nothing can kill me!                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+2400,"Ready for round two?                 ",5,e.x-120,e.y,100,0, 0, 0);
                }
                text4 = true;
            }  
            
        }
        if(testFrame2 > 0 && !text10 && !phase2 && text7&&level!=="???"){
            testFrame2 = 0;
            if(!text10){
                texts = [];
                if (text7){
                    addText(frame,"Heh...                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+300,"Tenacious little thing.                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+600,"Do you not understand???                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+960,"I'm immortal! Why bother trying?                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+1400,"...                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+1600,"Still here?                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+1800,"...                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+2000,"Heh...                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+2200,"I guess I'll just have to show my true form!                 ",5,e.x-120,e.y,100,0, 0, 0);
                    addText(frame+2700,"HAHAHAHAHAHAHAHAHA!!!!                 ",5,e.x-120,e.y,100,0, 0, 0);
                }
                text10 = true;
            }  
            
        }
        if(text10 && testFrame2 >= 3060 && level === 102){
            level = "???";
            StartLevel();
        }
        if(testFrame2 >= 2100 && !talked && text4 && !text7 && phase2 && e.hp < 10000){
            e.hp+=50;
            theOkLol = true;
            if(e.hp > 10000){
                e.hp = 10000;   
            }
        }
        if(testFrame2 >= 2700 && !talked && text4 && phase2 && e.hp >= 10000){
            testFrame2 = 0;
            talked = true; 
            soul = 0;
            dswitch = 0;
            dtents = [];
            darkAttack = "lightning";
        }
        if(testFrame2 === 4600 && !talked && !text4){
            testFrame2 = 0;
            talked = true;   
        }
        if(talked){
            //darkLord fight
            if(!phase2){
                if(darkAttack === "fire"){
                    if(e.hp <= 2000){
                        dfire = 130;   
                    }
                    if(darkCharge > 0){
                       if(darkCharge > 1){
                           fill(143, 143, 143);
                            ellipse(dtargx+pw/2,dtargy+ph/2,dfire*2.5,dfire*2.5);
                       }else if(darkCharge === 1){
                           if(e.hp <= 2000){
                            fill(79, 0, 158);
                           }else{
                            fill(255, 145, 0);
                           }
                            ellipse(dtargx+pw/2,dtargy+ph/2,dfire*2.5,dfire*2.5);
                            darkAttack = "slash";
                            dswitch = 0;
                            if(overlapCircle(px+pw/2, py+ph/2, dtargx+pw/2, dtargy+ph/2, pw, dfire*2.5)) {
                                HP-=250;
                                if(e.hp <= 2000){
                                    poisonFrame = frame + 500;
                                }
                            }   
                       }
                    }
                    if(e.x>=px+pw/2-dfire&&e.x<=px+pw/2+dfire&&e.y>=py+ph/2-dfire&e.y<=py+ph/2 + dfire&&darkCharge <= 0) {
                        darkCharge = 60;
                        dtargx = px;
                        dtargy = py;
                    }
                }else if(darkAttack === "slash"){
                    if(dswitch >= 300){
                        dswitch = 0;
                        darkCharge = 0;
                        if(e.hp <= 9000){
                            darkAttack = "blob cannon";
                        }else{
                            darkAttack = "fire";   
                        }
                    }
                    if(darkCharge > 0){
                       if(darkCharge > 1){
                           line(dtargx+pw/4,dtargy,dtargx,dtargy+ph);
                           line(dtargx+pw/4+20,dtargy,dtargx+20,dtargy+ph);
                           line(dtargx+pw/4+40,dtargy,dtargx+40,dtargy+ph);
                       }else if(darkCharge === 1){
                            if(e.hp <= 8000){
                                stroke(255, 230, 0);
                                line(dtargx+pw/4,dtargy,dtargx,dtargy+ph);
                                line(dtargx+pw/4+20,dtargy,dtargx+20,dtargy+ph);
                                line(dtargx+pw/4+40,dtargy,dtargx+40,dtargy+ph);
                                stroke(0, 0, 0);
                                if(overlapCircle(px+pw/2, py+ph/2, dtargx+pw/2, dtargy+ph/2, pw, 65)) {
                                    HP-=150;
                                    if(stun <= 0){
                                        stun = 13;
                                    }
                                }   
                            }else{
                                stroke(255, 0, 0);
                                line(dtargx+pw/4,dtargy,dtargx,dtargy+ph);
                                line(dtargx+pw/4+20,dtargy,dtargx+20,dtargy+ph);
                                line(dtargx+pw/4+40,dtargy,dtargx+40,dtargy+ph);
                                stroke(0, 0, 0);
                                if(overlapCircle(px+pw/2, py+ph/2, dtargx+pw/2, dtargy+ph/2, pw, 65)) {
                                    HP-=150;
                                }   
                            }
                       }
                    }
                    if(e.x>=px-dslash&&e.x<=px+dslash&&e.y>=py-dslash&e.y<=py + dslash&&darkCharge <= 0) {
                        darkCharge = 15;
                        dtargx = px;
                        dtargy = py;
                    }  
                }else if(darkAttack === "blob cannon"){
                    if(dswitch >= 60){
                        if(dswitch%5 === 4) {
                            if(e.hp <= 3000){
                                addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,30,25,232, 140, 8);      
                            }else{
                                addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,95, 145, 2);      
                            }
                        }
                    }
                    if(dswitch >= 150){
                        dswitch = 0;
                        if(e.hp <= 7000){
                            darkAttack = "heal";
                        }else{
                            darkAttack = "fire";   
                        }  
                    }
                }else if(darkAttack === "heal"){
                    if(e.hp <= 1000){
                        dpound = 120;   
                    }
                    if(darkCharge<=0&&hurt<=0){
                        fill(255, 178, 254);
                        ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,75,75);
                        e.hp+=1;
                    }
                    if(darkCharge > 1){
                        fill(0, 0, 0);
                        ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,dpound*2,dpound*2);
                    }
                    if(darkCharge === 1){
                        if(e.hp<=1000){
                            fill(186, 0, 0);
                            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,dpound*2,dpound*2);
                            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, dpound*2)) {
                                HP -= 3000000000;
                            }
                        }else if(e.hp<=6000){
                            fill(82, 235, 255);
                            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,dpound*2,dpound*2);
                            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, dpound*2)) {
                                HP -= 30;
                                stun = 50;
                            }
                        }else{
                            fill(255, 255, 255);
                            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,dpound*2,dpound*2);
                            if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, dpound*2)) {
                                HP -= 30;
                                playerPoundedFrame = frame;
                                playerPoundedEnemy = e;
                            }
                        }
                    }
                    if(e.x>=px-dpound&&e.x<=px+dpound&&e.y>=py-dpound&e.y<=py + dpound&&darkCharge <= 0) {
                        darkCharge = 15;
                        dtargx = px;
                        dtargy = py;
                    } 
                    if(dswitch >= 500){
                        dswitch = 0;
                        darkCharge = 0;
                        if(e.hp <= 5000){
                            darkAttack = "tentacle";
                            dtents = [];
                        }else{
                            darkAttack = "fire";   
                        }  
                    }
                }else if(darkAttack === "tentacle"){
                    if(dswitch >= 60 && HP>0){
                        if(dswitch%10 === 9) {
                            addDtents(random(0,350),random(50,350),65,65,50);
                        }
                    }
                    for(var i = 0; i<dtents.length; i++){
                        var d = dtents[i];
                        d.time--;
                        if(d.time > 1){
                            line(d.x+pw/4,d.y,d.x,d.y+ph);
                            line(d.x+pw/4+20,d.y,d.x+20,d.y+ph);
                            line(d.x+pw/4+40,d.y,d.x+40,d.y+ph);
                        }else{
                            stroke(255, 157, 0);
                            line(d.x+pw/4,d.y,d.x,d.y+ph);
                            line(d.x+pw/4+20,d.y,d.x+20,d.y+ph);
                            line(d.x+pw/4+40,d.y,d.x+40,d.y+ph);
                            stroke(0, 0, 0);
                            if(overlapCircle(px+pw/2, py+ph/2, d.x+pw/2, d.y+ph/2, pw, 65)) {
                                HP-=150;
                            }
                            dtents.splice(i,1);
                        }
                    }
                    if(dswitch >= 500){
                        dswitch = 0;
                        darkCharge = 0;
                        if(e.hp <= 4000){
                            dtents = [];
                            darkAttack = "sand pit";
                        }else{
                            darkAttack = "fire";   
                        }  
                    }
                }
            }else if(phase2){
                if(darkAttack === "lightning"){
                    if(HP>0){
                        if(dswitch === 60) {
                            randPlace = floor(random(0,3));
                            randPlace2 = floor(random(0,3));
                        }
                        if(dswitch >= 60 && dswitch < 120) {
                            if(randPlace === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",60,250);
                                text("!",60,350);
                                textSize(12);
                            }
                            if(randPlace === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",190,150);
                                text("!",190,250);
                                text("!",190,350);
                                textSize(12);
                            }
                            if(randPlace === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",310,150);
                                text("!",310,250);
                                text("!",310,350);
                                textSize(12);   
                            }
                            if(randPlace2 === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",190,150);
                                text("!",310,150);
                                textSize(12);
                            }
                            if(randPlace2 === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,250);
                                text("!",190,250);
                                text("!",310,250);
                                textSize(12);
                            }
                            if(randPlace2 === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,350);
                                text("!",190,350);
                                text("!",310,350);
                                textSize(12); 
                            }
                        }
                        if(dswitch === 120) {
                            darkLightning = 30;
                            if(randPlace === 0){
                                fill(0, 196, 255);
                                rect(30,0,90,400);
                                if(overlap(30,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 1){
                                fill(0, 196, 255);
                                rect(160,0,90,400);
                                if(overlap(160,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 2){
                                fill(0, 196, 255);
                                rect(280,0,90,400); 
                                if(overlap(280,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 0){
                                fill(0, 196, 255);
                                rect(0,70,400,90);
                                if(overlap(0,70,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 1){
                                fill(0, 196, 255);
                                rect(0,170,400,90); 
                                if(overlap(0,170,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 2){
                                fill(0, 196, 255);
                                rect(0,270,400,90); 
                                if(overlap(0,270,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                        }
                        if(dswitch === 130) {
                            randPlace = floor(random(0,3));
                            randPlace2 = floor(random(0,3));
                        }
                        if(dswitch >= 130 && dswitch < 190) {
                            if(randPlace === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",60,250);
                                text("!",60,350);
                                textSize(12);
                            }
                            if(randPlace === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",190,150);
                                text("!",190,250);
                                text("!",190,350);
                                textSize(12);
                            }
                            if(randPlace === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",310,150);
                                text("!",310,250);
                                text("!",310,350);
                                textSize(12);   
                            }
                            if(randPlace2 === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",190,150);
                                text("!",310,150);
                                textSize(12);
                            }
                            if(randPlace2 === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,250);
                                text("!",190,250);
                                text("!",310,250);
                                textSize(12);
                            }
                            if(randPlace2 === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,350);
                                text("!",190,350);
                                text("!",310,350);
                                textSize(12); 
                            }
                        }
                        if(dswitch === 190) {
                            darkLightning = 30;
                            if(randPlace === 0){
                                fill(0, 196, 255);
                                rect(30,0,90,400);
                                if(overlap(30,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 1){
                                fill(0, 196, 255);
                                rect(160,0,90,400);
                                if(overlap(160,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 2){
                                fill(0, 196, 255);
                                rect(280,0,90,400); 
                                if(overlap(280,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 0){
                                fill(0, 196, 255);
                                rect(0,70,400,90);
                                if(overlap(0,70,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 1){
                                fill(0, 196, 255);
                                rect(0,170,400,90); 
                                if(overlap(0,170,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 2){
                                fill(0, 196, 255);
                                rect(0,270,400,90); 
                                if(overlap(0,270,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                        }
                        if(dswitch === 200) {
                            randPlace = floor(random(0,3));
                            randPlace2 = floor(random(0,3));
                        }
                        if(dswitch >= 200 && dswitch < 260) {
                            if(randPlace === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",60,250);
                                text("!",60,350);
                                textSize(12);
                            }
                            if(randPlace === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",190,150);
                                text("!",190,250);
                                text("!",190,350);
                                textSize(12);
                            }
                            if(randPlace === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",310,150);
                                text("!",310,250);
                                text("!",310,350);
                                textSize(12);   
                            }
                            if(randPlace2 === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",190,150);
                                text("!",310,150);
                                textSize(12);
                            }
                            if(randPlace2 === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,250);
                                text("!",190,250);
                                text("!",310,250);
                                textSize(12);
                            }
                            if(randPlace2 === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,350);
                                text("!",190,350);
                                text("!",310,350);
                                textSize(12); 
                            }
                        }
                        if(dswitch === 260) {
                            darkLightning = 30;
                            if(randPlace === 0){
                                fill(0, 196, 255);
                                rect(30,0,90,400);
                                if(overlap(30,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 1){
                                fill(0, 196, 255);
                                rect(160,0,90,400);
                                if(overlap(160,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 2){
                                fill(0, 196, 255);
                                rect(280,0,90,400); 
                                if(overlap(280,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 0){
                                fill(0, 196, 255);
                                rect(0,70,400,90);
                                if(overlap(0,70,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 1){
                                fill(0, 196, 255);
                                rect(0,170,400,90); 
                                if(overlap(0,170,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 2){
                                fill(0, 196, 255);
                                rect(0,270,400,90); 
                                if(overlap(0,270,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                        }
                        if(dswitch === 270) {
                            randPlace = floor(random(0,3));
                            randPlace2 = floor(random(0,3));
                        }
                        if(dswitch >= 270 && dswitch < 330) {
                            if(randPlace === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",60,250);
                                text("!",60,350);
                                textSize(12);
                            }
                            if(randPlace === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",190,150);
                                text("!",190,250);
                                text("!",190,350);
                                textSize(12);
                            }
                            if(randPlace === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",310,150);
                                text("!",310,250);
                                text("!",310,350);
                                textSize(12);   
                            }
                            if(randPlace2 === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",190,150);
                                text("!",310,150);
                                textSize(12);
                            }
                            if(randPlace2 === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,250);
                                text("!",190,250);
                                text("!",310,250);
                                textSize(12);
                            }
                            if(randPlace2 === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,350);
                                text("!",190,350);
                                text("!",310,350);
                                textSize(12); 
                            }
                        }
                        if(dswitch === 330) {
                            darkLightning = 30;
                            if(randPlace === 0){
                                fill(0, 196, 255);
                                rect(30,0,90,400);
                                if(overlap(30,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 1){
                                fill(0, 196, 255);
                                rect(160,0,90,400);
                                if(overlap(160,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 2){
                                fill(0, 196, 255);
                                rect(280,0,90,400); 
                                if(overlap(280,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 0){
                                fill(0, 196, 255);
                                rect(0,70,400,90);
                                if(overlap(0,70,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 1){
                                fill(0, 196, 255);
                                rect(0,170,400,90); 
                                if(overlap(0,170,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 2){
                                fill(0, 196, 255);
                                rect(0,270,400,90); 
                                if(overlap(0,270,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                        }
                        if(dswitch === 340) {
                            randPlace = floor(random(0,3));
                            randPlace2 = floor(random(0,3));
                        }
                        if(dswitch >= 340 && dswitch < 400) {
                            if(randPlace === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",60,250);
                                text("!",60,350);
                                textSize(12);
                            }
                            if(randPlace === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",190,150);
                                text("!",190,250);
                                text("!",190,350);
                                textSize(12);
                            }
                            if(randPlace === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",310,150);
                                text("!",310,250);
                                text("!",310,350);
                                textSize(12);   
                            }
                            if(randPlace2 === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",190,150);
                                text("!",310,150);
                                textSize(12);
                            }
                            if(randPlace2 === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,250);
                                text("!",190,250);
                                text("!",310,250);
                                textSize(12);
                            }
                            if(randPlace2 === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,350);
                                text("!",190,350);
                                text("!",310,350);
                                textSize(12); 
                            }
                        }
                        if(dswitch === 400) {
                            darkLightning = 30;
                            if(randPlace === 0){
                                fill(0, 196, 255);
                                rect(30,0,90,400);
                                if(overlap(30,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 1){
                                fill(0, 196, 255);
                                rect(160,0,90,400);
                                if(overlap(160,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 2){
                                fill(0, 196, 255);
                                rect(280,0,90,400); 
                                if(overlap(280,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 0){
                                fill(0, 196, 255);
                                rect(0,70,400,90);
                                if(overlap(0,70,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 1){
                                fill(0, 196, 255);
                                rect(0,170,400,90); 
                                if(overlap(0,170,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 2){
                                fill(0, 196, 255);
                                rect(0,270,400,90); 
                                if(overlap(0,270,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                        }
                        if(dswitch === 410) {
                            randPlace = floor(random(0,3));
                            randPlace2 = floor(random(0,3));
                        }
                        if(dswitch >= 410 && dswitch < 470) {
                            if(randPlace === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",60,250);
                                text("!",60,350);
                                textSize(12);
                            }
                            if(randPlace === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",190,150);
                                text("!",190,250);
                                text("!",190,350);
                                textSize(12);
                            }
                            if(randPlace === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",310,150);
                                text("!",310,250);
                                text("!",310,350);
                                textSize(12);   
                            }
                            if(randPlace2 === 0){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,150);
                                text("!",190,150);
                                text("!",310,150);
                                textSize(12);
                            }
                            if(randPlace2 === 1){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,250);
                                text("!",190,250);
                                text("!",310,250);
                                textSize(12);
                            }
                            if(randPlace2 === 2){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",60,350);
                                text("!",190,350);
                                text("!",310,350);
                                textSize(12); 
                            }
                        }
                        if(dswitch === 470) {
                            darkLightning = 30;
                            if(randPlace === 0){
                                fill(0, 196, 255);
                                rect(30,0,90,400);
                                if(overlap(30,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 1){
                                fill(0, 196, 255);
                                rect(160,0,90,400);
                                if(overlap(160,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace === 2){
                                fill(0, 196, 255);
                                rect(280,0,90,400); 
                                if(overlap(280,0,90,400,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 0){
                                fill(0, 196, 255);
                                rect(0,70,400,90);
                                if(overlap(0,70,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 1){
                                fill(0, 196, 255);
                                rect(0,170,400,90); 
                                if(overlap(0,170,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                            if(randPlace2 === 2){
                                fill(0, 196, 255);
                                rect(0,270,400,90); 
                                if(overlap(0,270,400,90,px,py,pw,ph)){
                                    HP-=200;   
                                }
                            }
                        }
                    }
                    if(dswitch >= 500){
                        dswitch = 0;
                        darkCharge = 0;
                        darkAttack = "dark cannon";
                    }
                }else if(darkAttack === "dark cannon"){
                    if(dswitch >= 60){
                        if(dswitch%10 === 9) {
                            addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,0, 0, 0, true, 400);      
                        }
                    }
                    if(dswitch >= 200){
                        dswitch = 0;
                        darkAttack = "fog";
                    }
                }else if(darkAttack === "fog"){
                    if(dswitch === 1){
                        state = floor(random(1,5));
                    }
                    if(dswitch < 60){
                        if(state === 1){
                            textSize(100);
                            fill(166, 0, 0);
                            text("!",20,150);
                            text("!",80,150);
                            text("!",140,150);
                            text("!",20,250);
                            text("!",80,250);
                            text("!",140,250);
                            text("!",20,350);
                            text("!",80,350);
                            text("!",140,350);
                        }else if(state === 2){
                            textSize(100);
                            fill(166, 0, 0);
                            text("!",350,150);
                            text("!",290,150);
                            text("!",230,150);
                            text("!",350,250);
                            text("!",290,250);
                            text("!",230,250);
                            text("!",350,350);
                            text("!",290,350);
                            text("!",230,350);
                        }
                        else if(state === 3){
                            textSize(100);
                            fill(166, 0, 0);
                            text("!",30,140);
                            text("!",90,140);
                            text("!",150,140);
                            text("!",210,140);
                            text("!",270,140);
                            text("!",330,140);
                            text("!",30,220);
                            text("!",90,220);
                            text("!",150,220);
                            text("!",210,220);
                            text("!",270,220);
                            text("!",330,220);
                        } else if(state === 4){
                            textSize(100);
                            fill(166, 0, 0);
                            text("!",30,280);
                            text("!",90,280);
                            text("!",150,280);
                            text("!",210,280);
                            text("!",270,280);
                            text("!",330,280);
                            text("!",30,360);
                            text("!",90,360);
                            text("!",150,360);
                            text("!",210,360);
                            text("!",270,360);
                            text("!",330,360);
                        }
                        textSize(12);
                    }else if(dswitch === 60){
                        if(state === 1) {
                            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 20,80);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 80,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 140,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 20,160);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 80,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 140,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 20,240);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 80,240);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 140,240);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 20,320);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 80,320);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 140,320);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 20,400);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 80,400);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 140,400);  
                            m.splat = true;
                        }else if(state === 2) {
                            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 350,80);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 290,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 230,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 350,160);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 290,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 230,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 350,240);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 290,240);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 230,240);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 350,320);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 290,320);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 230,320);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 350,400);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 290,400);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 230,400);  
                            m.splat = true;
                        }else if(state === 3) {
                            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 30,80);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 90,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 150,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 210,80);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 270,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 330,80);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 390,80);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 30,160);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 90,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 150,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 210,160);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 270,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 330,160);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 390,160);          
                            m.splat = true; 
                        }else if(state === 4) {
                            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 30,270);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 90,270);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 150,270);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 210,270);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 270,270);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 330,270);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 390,270);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 30,350);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 90,350);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 150,350);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 210,350);          
                            m.splat = true; 
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 270,350);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 330,350);  
                            m.splat = true;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 30, 0, 0, 0, 0, false, 0, 390,350);          
                            m.splat = true; 
                        }
                    }
                    if(dswitch >= 500){
                        dswitch = 0;
                        if(e.hp <= 7000){
                            darkCharge = 200;
                            darkAttack = "charge";
                        }else{
                            dtents = [];
                            darkAttack = "lightning";   
                        }
                    }
                }else if(darkAttack === "charge"){
                    darkLightning = 1;
                    darkCharge = 1;
                    charging+=2;
                    if(dswitch >= 600){
                        charging = 0;
                        dswitch = 0;
                        darkLightning = 30;
                        if(e.hp <= 5000){
                            darkAttack = "mana ray";
                        }else{
                            dtents = [];
                            darkAttack = "lightning";   
                        }
                    }
                }else if(darkAttack === "mana ray"){
                    darkCharge = 1;
                    e.x = 170;
                    e.y = 210;
                    if(dswitch >= 99){
                        if(dswitch%50 === 49) {
                            addMissile(e.x+25,e.y-75-bigSize/2, 5, bigSize, 15, 0, 0, 0, true);
                        }
                    }else{
                        bigSize++;
                        fill(0, 0, 0);
                        pushMatrix();
                        translate(e.x+25,e.y-75-bigSize/2);
                        rotate(45);
                        rect(0,0,bigSize,bigSize);
                        popMatrix(); 
                    }
                    if(dswitch >= 400){
                        bigSize = 0;
                        charging = 0;
                        dswitch = 0;
                        darkAttack = "summon";
                    }
                }else if(darkAttack === "summon"){
                    if(dswitch < 500){
                        darkCharge = 1;
                        e.x = 170;
                        e.y = 210;   
                    }
                    if(dswitch === 200){
                        addMonster(100, 210, monsters.inkBlob);
                        dswitch++;
                    }
                    if(dswitch === 400){
                        addMonster(240, 210, monsters.inkBlob);
                        dswitch++;
                    }
                    if(dswitch >= 800){
                        dswitch = 0;
                        dtents = [];
                        darkAttack = "lightning";
                    }
                }
            }
        }
    }
    }
    }
        if(es[0].mon.name === "TRUE_DARKLORD") {
            if(!text1&&!talked){
                addText(frame+2400,"INTIMIDATED NOW?                 ", 5, 150, 300, 350, 0, 0, 0);
                addText(frame+2700,"HEH, I DON'T SEE WHY YOU SHOULD EVEN TRY.                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+3500,"SEE MY HEALTH?                 ", 5, 150, 300, 350, 0, 0, 0);
                addText(frame+3800,"IT'S INFINITE SO DON'T BOTHER.                 ", 5, 150, 300, 350, 0, 0, 0);
                addText(frame+4300,"I'M STILL CURIOUS THOUGH...                 ", 5, 150, 300, 350, 0, 0, 0);
                addText(frame+4800,"HOW DID YOU MAKE IT PAST EVERYTHING?                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+5300,"HEH, MY DEFENSES WERE IMPENETRABLE.                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+5800,"SURELY THERE'S MORE TO THE STORY.                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+6300,"IT WAS ALMOST LIKE YOU COULD REVIVE.                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+6800,"HEH, I KNOW YOUR SHENANIGANS!                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+7300,"YOUR TRICKS WON'T WORK ANYMORE!                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+7800,"WE'LL JUST STAY HERE TILL THE END OF TIME!                 ", 5, 75, 300, 350, 0, 0, 0);
                addText(frame+8300,"READY TO DIE ONCE MORE?                 ", 5, 140, 300, 350, 0, 0, 0);
                text1 = true;
            }
            if(frame >= 8700 && !talked){
                talked = true;
                frame = 0;
                testFrame2 = 0;
            }
            if(talked){
               //true dark lord fight
               if(darkAttack === "blob cannon"){
                   if(testFrame2 >= 100 && testFrame2 <200){
                        if(testFrame2%5 === 4) {
                            addMissile(Lhandx+200,Lhandy+175,10,15,5,95, 145, 2);
                            addMissile(Rhandx-200,Rhandy+175,10,15,5,95, 145, 2);
                        }
                   }
                   if(testFrame2 >= 200){
                       darkAttack = "gears";
                       testFrame2 = 0;
                   }
               }else if(darkAttack === "gears"){
                   if(testFrame2 >= 60 && testFrame2 <120){
                        gearplaceL+=10;   
                        gearplaceR-=10; 
                        if(gearplaceL > 450){
                            gearplaceL = 450;   
                        }
                        if(gearplaceL < -50){
                            gearplaceL = -50;   
                        }
                        if(gearplaceR > 450){
                            gearplaceR = 450;   
                        }
                        if(gearplaceR < -50){
                            gearplaceR = -50;   
                        }
                   }
                   if(testFrame2 >= 120 && testFrame2 <180){
                        gearplaceL-=10;   
                        gearplaceR+=10; 
                        if(gearplaceL > 450){
                            gearplaceL = 450;   
                        }
                        if(gearplaceL < -50){
                            gearplaceL = -50;   
                        }
                        if(gearplaceR > 450){
                            gearplaceR = 450;   
                        }
                        if(gearplaceR < -50){
                            gearplaceR = -50;   
                        }
                   }
                   if(testFrame2 >= 180 && testFrame2 <210){
                        Lhandy+=15;
                        Rhandy+=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                   }
                   if(testFrame2 >= 210 && testFrame2 <240){
                        Lhandy-=15;
                        Rhandy-=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                   }
                   if(testFrame2 >= 240){
                       if(secretVar && !godMode){
                        darkAttack = "die";
                        underText = "Press k to skip the cutscene";
                        underTextTime = 400;
                       }else{
                         darkAttack = "summon";  
                       }
                       testFrame2 = 0;
                   }
               }else if(darkAttack === "summon"){
                   if(testFrame2 >= 20 && testFrame2 <240){
                       if(testFrame2%50 === 49) {
                            addMonster(10,10, monsters.inkBlob);  
                            addMonster(350,10, monsters.inkBlob); 
                       }
                   }
                   if(testFrame2 >= 480){
                        darkAttack = "ice slam";
                        testFrame2 = 0;   
                   }
               }else if(darkAttack === "ice slam"){
                   addIce(120,0,160,400);
                   if(testFrame2 >= 60 && testFrame2 <90){
                       textSize(120);
                        fill(166, 0, 0);
                        text("!",60,300);
                        text("!",300,300);
                   }
                   if(testFrame2 >= 90 && testFrame2 <120){
                       Lhandy+=15;
                        Rhandy+=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                   }
                   if(testFrame2 >= 120 && testFrame2 <150){
                        Lhandy-=15;
                        Rhandy-=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                   }
                   if(testFrame2 >= 150 && testFrame2 <180){
                       Lhandy+=15;
                        Rhandy+=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                   }
                   if(testFrame2 >= 180 && testFrame2 <210){
                        Lhandy-=15;
                        Rhandy-=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                   }
                   if(testFrame2 >= 210 && testFrame2 <240){
                       Lhandy+=15;
                        Rhandy+=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                   }
                   if(testFrame2 >= 240 && testFrame2 <270){
                        Lhandy-=15;
                        Rhandy-=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                   }
                   if(testFrame2 >= 270){
                       ice = [];
                        darkAttack = "burst";
                        testFrame2 = 0;   
                   }
               }else if(darkAttack === "burst"){
                   if(testFrame2 >= 60 && testFrame2 < 240){
                        if(testFrame2%10 === 9) {
                            addMissile(es[0].x+es[0].mon.width/2,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                            addMissile(es[0].x+es[0].mon.width/2-50,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                            addMissile(es[0].x+es[0].mon.width/2+50,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                        }
                    }
                    /*if(testFrame2 >= 450 && testFrame2 < 630){
                        if(testFrame2%10 === 9) {
                            addMissile(es[0].x+es[0].mon.width/2,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                            addMissile(es[0].x+es[0].mon.width/2-50,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                            addMissile(es[0].x+es[0].mon.width/2+50,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                        }
                    }
                    if(testFrame2 >= 840 && testFrame2 < 1020){
                        if(testFrame2%10 === 9) {
                            addMissile(es[0].x+es[0].mon.width/2,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                            addMissile(es[0].x+es[0].mon.width/2-50,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                            addMissile(es[0].x+es[0].mon.width/2+50,es[0].y+es[0].mon.height/2,10,15,25,0, 0, 0, true, 600);   
                        }
                    }*/
                    if(testFrame2 >= 570){
                        darkAttack = "slam";
                        testFrame2 = 0;
                    }
               }else if(darkAttack === "slam"){
                   if(testFrame2 >= 60 && testFrame2 <90){
                       textSize(120);
                        fill(166, 0, 0);
                        text("!",60,300);
                        text("!",300,300);
                   }
                   if(testFrame2 >= 120 && testFrame2 <150){
                        textSize(120);
                        fill(166, 0, 0);
                        text("!",176,268);
                        text("!",176,366);
                   }
                   if(testFrame2 >= 180 && testFrame2 <210){
                        textSize(120);
                        fill(166, 0, 0);
                        text("!",176,268);
                        text("!",300,366);
                        text("!",60,366);
                   }
                   if(testFrame2 >= 90 && testFrame2 <120){
                       Lhandy+=15;
                        Rhandy+=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                   }
                   if(testFrame2 >= 120 && testFrame2 <150){
                        Lhandy-=15;
                        Rhandy-=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                   }
                   if(testFrame2 >= 150 && testFrame2 <180){
                       Lhandy+=15;
                        Rhandy+=15;
                        Lhandx+=15;
                        Rhandx-=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                        if(Lhandx >= -32){
                            Lhandx = -32;   
                        }
                        if(Rhandx <= 418){
                            Rhandx = 418;   
                        }
                   }
                   if(testFrame2 >= 180 && testFrame2 <210){
                        Lhandy-=15;
                        Rhandy-=15;
                        Lhandx-=15;
                        Rhandx+=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                        if(Lhandx <= -142){
                            Lhandx = -142;   
                        }
                        if(Rhandx >= 542){
                            Rhandx = 542;   
                        }
                   }
                   if(testFrame2 >= 210 && testFrame2 <240){
                       Lhandy+=15;
                        Rhandy+=15;
                        Lhandx+=15;
                        Rhandx-=15;
                        if(Lhandy >= 175){
                            Lhandy = 175;   
                        }
                        if(Rhandy >= 175){
                            Rhandy = 175;   
                        }
                        if(Lhandx >= 152){
                            Lhandx = 152;   
                        }
                        if(Rhandx <= 258){
                            Rhandx = 258;   
                        }
                   }
                   if(testFrame2 >= 240 && testFrame2 <270){
                        Lhandy-=15;
                        Rhandy-=15;
                        Lhandx-=15;
                        Rhandx+=15;
                        if(Lhandy <= -32){
                            Lhandy = -32;   
                        }
                        if(Rhandy <= -32){
                            Rhandy = -32;   
                        }
                        if(Lhandx <= -142){
                            Lhandx = -142;   
                        }
                        if(Rhandx >= 542){
                            Rhandx = 542;   
                        }
                   }
                   if(testFrame2 >= 270){
                        darkAttack = "petal barrage";
                        testFrame2 = 0;   
                   }
               }else if(darkAttack === "petal barrage"){
                   if(testFrame2 >= 60 && testFrame2 < 120){
                        if(testFrame2%10 === 9) {
                            var m = addMissile(es[0].x+es[0].mon.width/2,es[0].y+es[0].mon.height/2,10,15,10,0, 0, 0);   
                            m.bounce = 3;   
                        }
                    }
                    if(testFrame2 >= 180 && testFrame2 < 240){
                        if(testFrame2%10 === 9) {
                            var m = addMissile(es[0].x+es[0].mon.width/2,es[0].y+es[0].mon.height/2,10,15,10,0, 0, 0);   
                            m.bounce = 3;   
                        }
                    }
                    if(testFrame2 >= 300 && testFrame2 < 360){
                        if(testFrame2%10 === 9) {
                            var m = addMissile(es[0].x+es[0].mon.width/2,es[0].y+es[0].mon.height/2,10,15,10,0, 0, 0);   
                            m.bounce = 3;   
                        }
                    }
                    if(testFrame2 >= 360){
                        darkAttack = "lava cannon";
                        testFrame2 = 0;   
                   }
               }else if(darkAttack === "lava cannon"){
                   if(testFrame2 >= 0 && testFrame2 < 60){
                        textSize(120);
                        fill(166, 0, 0);
                        text("!",176,268);
                        text("!",176,366);
                   }
                   if(testFrame2 === 60){
                       addLava(120,0,160,400);
                   }
                    if(testFrame2 >= 240){
                        lava = [];
                        if(godMode){
                            darkAttack = "pop";
                        }else{
                            darkAttack = "talk";
                        }
                        testFrame2 = 0;   
                    }
               }else if(darkAttack === "talk"){
                   if(testFrame2 === 1){
                   addText(frame,"WHY ARE WE STILL HERE?                 ", 5, 122, 300, 350, 0, 0, 0);
                   addText(frame+360,"NOTHING WILL GET ACCOMPLISHED                 ", 5, 96, 300, 350, 0, 0, 0);
                   }
                   if(testFrame2 >= 800){
                        darkAttack = "pop";
                        testFrame2 = 0;
                   }
               }else if(darkAttack === "pop"){
                   if(!godMode){
                       textSize(15);
                       fill(255, 255, 255);
                       text("Use charge!\\n   press [", 155, 280);
                   }
                   if(testFrame2 >= 0 && testFrame2 < 60){
                        textSize(120);
                        fill(166, 0, 0);
                        text("!",18,300);
                        
                   }
                   if(testFrame2 >= 10 && testFrame2 < 70){
                        textSize(120);
                        fill(166, 0, 0);
                        text("!",84,350);
                   }
                   if(testFrame2 >= 20 && testFrame2 < 80){
                       textSize(120);
                        fill(166, 0, 0);
                       text("!",150,250);
                   }
                   if(testFrame2 >= 30 && testFrame2 < 90){
                       textSize(120);
                        fill(166, 0, 0);
                        text("!",216,300);
                   }
                   if(testFrame2 >= 40 && testFrame2 < 100){
                       textSize(120);
                        fill(166, 0, 0);
                       text("!",282,350);
                   }
                   if(testFrame2 >= 50 && testFrame2 < 110){
                       textSize(120);
                        fill(166, 0, 0);
                        text("!",348,250);
                   }
                   if(testFrame2 === 60){
                       var m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 1*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = -1*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = -1*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 1*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = 1*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = -1*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(18,250,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 70){
                       var m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 1*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = -1*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = -1*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 1*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = 1*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = -1*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(84,300,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 80){
                       var m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 1*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = -1*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = -1*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 1*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = 1*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = -1*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(150,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 90){
                       var m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 1*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = -1*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = -1*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 1*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = 1*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = -1*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(216,250,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 100){
                       var m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 1*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = -1*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = -1*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 1*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = 1*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = -1*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(282,300,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 110){
                       var m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 1*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = -1*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = -1*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 1*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = 1*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = 0*10;
                        m.vy = -1*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(348,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 >= 170){
                        darkAttack = "line";
                        testFrame2 = 0;
                   }
               }else if(darkAttack === "line"){
                   if(!godMode){
                       textSize(15);
                       fill(255, 255, 255);
                       text("Use charge!\\n   press [", 155, 280);
                   }
                   if(testFrame2 === 60){
                       var m = addMissile(432,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,240,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,280,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,320,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,360,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 100){
                       var m = addMissile(-32,200,10,15,25,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(-32,240,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(-32,280,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(-32,320,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                        m = addMissile(-32,360,10,15,15,0, 0, 0);
                        m.vx = 1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 === 140){
                       var m = addMissile(432,200,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,240,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,280,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,320,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                        m = addMissile(432,360,10,15,15,0, 0, 0);
                        m.vx = -1*10;
                        m.vy = 0*10;
                   }
                   if(testFrame2 >= 180){
                        darkAttack = "pew";
                        testFrame2 = 0;
                   }
               }else if(darkAttack === "pew"){
                   if(!godMode){
                       textSize(15);
                       fill(255, 255, 255);
                       text("Use charge!\\n   press [", 155, 280);
                   }
                   stroke(255, 0, 0);
                   line(pew1x,400,pew1x,0);
                   stroke(0, 0, 255);
                   line(pew2x,400,pew2x,0);
                   stroke(0, 0, 0);
                   if(!pewSwap){
                        pew1x+=5;
                        pew2x-=5;
                   }
                   if(pewSwap){
                        pew1x-=5;
                        pew2x+=5;
                   }
                   if(pew1x>=400){
                       pewSwap = true;
                   }
                   if(pew1x<=0){
                        pewSwap = false;   
                   }
                   if(testFrame2 >= 60){
                        if(testFrame2%10 === 9) {
                            var m = addMissile(pew1x,400,10,15,15,255, 0, 0);
                            m.vx = 0*10;
                            m.vy = -1*10;
                            m = addMissile(pew2x,400,10,15,0,0, 0, 255);
                            m.vx = 0*10;
                            m.vy = -1*10;
                        }
                   }
                   if(testFrame2 >= 300){
                       if(godMode){
                        darkAttack = "blob cannon";
                       }else{
                        darkAttack = "die";
                       }
                        testFrame2 = 0;
                        pew1x = 0;
                        pew2x = 400;
                        pewSwap = false;
                   }
               }else if(darkAttack === "die"){
                   px = 175;
                    py = 195;
                    if(testFrame2 === 1){
                        texts = [];
                        if(secretVar){
                            addText(frame,"WHY DO I HAVE A SENSE OF DEJA VU?                  ", 5, 90, 300, 350, 0, 0, 0);
                        }else{
                            addText(frame,"JUST DIE ALREADY                 ", 5, 145, 300, 350, 0, 0, 0);
                        }
                    }
                    if(secretVar && testFrame2 >= 540 && testFrame2 <= 1000){
                        if(blessing<80){
                            blessing+=0.2;
                        }
                        if(blessing > 80){
                            blessing = 80;   
                        }
                    }
                    if(secretVar && testFrame2 === 950){
                        texts = [];
                        addText(frame,"WHAT?                 ", 5, 150, 300, 350, 0, 0, 0);
                        addText(frame+300,"A BLESSING?                 ", 5, 150, 300, 350, 0, 0, 0);
                        addText(frame+700,"NONONONONONO!                 ", 5, 150, 300, 350, 0, 0, 0);
                        addText(frame+1100,"UHHH THIS SHOULD BE FINE... RIGHT????                 ", 5, 90, 300, 350, 0, 0, 0);
                    }
                    if(secretVar && testFrame2 >= 2550){
                        if(blessing>0){
                            blessing-=0.2;
                        }
                        if(blessing < 0){
                            blessing = 0;   
                        }
                    }
                    if(secretVar && testFrame2 === 3050){
                        es[0].hp = es[0].mon.maxHp;
                        showHealth = true;   
                    }
                    if(secretVar && testFrame2 === 3170){
                        texts = [];
                        addText(frame,"WELL THIS DOESN'T LOOK GOOD                 ", 5, 100, 300, 350, 0, 0, 0);
                    }
                    if(secretVar && testFrame2 === 3600){
                        godMode = true;
                        testFrame2 = 0;
                        maxHP *= 10;
                        HP = maxHP;
                        testFrame = 0;
                        darkAttack = "blob cannon";
                    }
                    if(testFrame2 === 120){
                        if(secretVar){
                            
                        }else{
                            addLava(120,0,160,400);
                            secretVar = true;
                        }
                    }
               }else if(darkAttack === "final breath"){
                    if(!text10){
                        testFrame2 = 0;
                        text10 = true;
                        texts = [];
                        addText(frame,"wut                 ", 5, 145, 300, 350, 0, 0, 0);
                        addText(frame+300,"HOW???                 ", 5, 145, 300, 350, 0, 0, 0);
                        addText(frame+600,"I'M THE UNBEATABLE DARK LORD!                 ", 5, 100, 300, 350, 0, 0, 0);
                        addText(frame+1000,"HOW AM I DYING?                 ", 5, 145, 300, 350, 0, 0, 0);
                        addText(frame+1400,"I WAS HACKING ON YOU! YOU'RE NOT SUPPOSED TO WIN                 ", 5, 20, 300, 350, 0, 0, 0);
                        addText(frame+2100,"NOOOOOOOOOOOOOOOOOO                 ", 25, 145, 300, 350, 0, 0, 0);
                    }
                    if(testFrame2 >= 2100){
                        whiteAlpha++;   
                    }
                    if(testFrame2 >= 2500){
                        level = "angel";
                        StartLevel();
                    }
               }
               if(godMode){
                   if(darkSummon === "world1"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.blob);   
                            addMonster(10,250,monsters.blob);  
                            addMonster(10,300,monsters.blob);  
                            addMonster(350,200,monsters.blob);   
                            addMonster(350,250,monsters.blob);  
                            addMonster(350,300,monsters.blob);
                            addMonster(60,200,monsters.miniBlob);   
                            addMonster(60,250,monsters.miniBlob);  
                            addMonster(60,300,monsters.miniBlob);  
                            addMonster(330,200,monsters.miniBlob);   
                            addMonster(330,250,monsters.miniBlob);  
                            addMonster(330,300,monsters.miniBlob);
                            testFrame = 0;
                            darkSummon = "world2";
                       }
                   }else if(darkSummon === "world2"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.fireBlob);   
                            addMonster(10,250,monsters.robot);  
                            addMonster(10,300,monsters.fireBlob);  
                            addMonster(350,200,monsters.fireBlob);   
                            addMonster(350,250,monsters.robot);  
                            addMonster(350,300,monsters.fireBlob);
                            addMonster(60,200,monsters.elBlob);   
                            addMonster(60,250,monsters.elBlob);  
                            addMonster(60,300,monsters.elBlob);  
                            addMonster(330,200,monsters.elBlob);   
                            addMonster(330,250,monsters.elBlob);  
                            addMonster(330,300,monsters.elBlob);
                            testFrame = 0;
                            darkSummon = "world3";
                       }
                   }else if(darkSummon === "world3"){
                       if(testFrame === 600){
                            addMonster(10,180,monsters.skyBlob);   
                            addMonster(25,250,monsters.cloud);  
                            addMonster(10,310,monsters.skyBlob);  
                            addMonster(350,180,monsters.skyBlob);   
                            addMonster(305,250,monsters.elcloud);  
                            addMonster(350,310,monsters.skyBlob);
                            addMonster(80,200,monsters.miniSkyBlob);   
                            addMonster(120,250,monsters.miniSkyBlob);  
                            addMonster(80,300,monsters.miniSkyBlob);  
                            addMonster(300,200,monsters.miniSkyBlob);   
                            addMonster(260,250,monsters.miniSkyBlob);  
                            addMonster(300,300,monsters.miniSkyBlob);
                            testFrame = 0;
                            darkSummon = "world4";
                       }
                   }else if(darkSummon === "world4"){
                       if(testFrame === 600){
                            addMonster(10,190,monsters.iceBlob);   
                            addMonster(10,250,monsters.fog);  
                            addMonster(10,310,monsters.iceBlob);  
                            addMonster(350,190,monsters.iceBlob);   
                            addMonster(290,250,monsters.fog);  
                            addMonster(350,320,monsters.iceBlob);
                            addMonster(110,175,monsters.livIce);   
                            addMonster(110,310,monsters.livIce);  
                            addMonster(230,175,monsters.livIce);  
                            addMonster(230,310,monsters.livIce);
                            testFrame = 0;
                            darkSummon = "world5";
                       }
                   }else if(darkSummon === "world5"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.waterBlob);   
                            addMonster(10,250,monsters.mudBlob);  
                            addMonster(10,300,monsters.waterBlob);  
                            addMonster(350,200,monsters.waterBlob);   
                            addMonster(350,250,monsters.mudBlob);  
                            addMonster(350,300,monsters.waterBlob);
                            addMonster(60,250,monsters.squid);  
                            addMonster(300,250,monsters.squid);
                            testFrame = 0;
                            darkSummon = "world6";
                       }
                   }else if(darkSummon === "world6"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.sandBlob);   
                            addMonster(10,250,monsters.mummy);  
                            addMonster(10,300,monsters.sandBlob);  
                            addMonster(350,200,monsters.sandBlob);   
                            addMonster(350,250,monsters.mummy);  
                            addMonster(350,300,monsters.sandBlob);
                            addMonster(60,250,monsters.sarcophagus);  
                            addMonster(300,250,monsters.sarcophagus);
                            testFrame = 0;
                            darkSummon = "world7";
                       }
                   }else if(darkSummon === "world7"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.jungleBlob);   
                            addMonster(10,250,monsters.jungleYoungling);  
                            addMonster(10,300,monsters.jungleBlob);  
                            addMonster(350,200,monsters.jungleBlob);   
                            addMonster(350,250,monsters.jungleYoungling);  
                            addMonster(350,300,monsters.jungleBlob);
                            addMonster(80,250,monsters.weed);  
                            addMonster(300,250,monsters.weed);
                            testFrame = 0;
                            darkSummon = "world8";
                       }
                   }else if(darkSummon === "world8"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.poisonBlob);   
                            addMonster(10,250,monsters.poisonMiniBlob);  
                            addMonster(10,300,monsters.poisonBlob);  
                            addMonster(350,200,monsters.poisonBlob);   
                            addMonster(350,250,monsters.poisonMiniBlob);  
                            addMonster(350,300,monsters.poisonBlob);
                            addMonster(80,250,monsters.bigMosquito);  
                            addMonster(300,250,monsters.bigMosquito);
                            testFrame = 0;
                            darkSummon = "world9";
                       }
                   }
                   else if(darkSummon === "world9"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.lavaBlob);   
                            addMonster(10,250,monsters.lavaHound);  
                            addMonster(10,300,monsters.lavaBlob);  
                            addMonster(350,200,monsters.lavaBlob);   
                            addMonster(350,250,monsters.lavaHound);  
                            addMonster(350,300,monsters.lavaBlob);
                            addMonster(80,250,monsters.golem);  
                            addMonster(300,250,monsters.golem);
                            testFrame = 0;
                            darkSummon = "world10";
                       }
                   }else if(darkSummon === "world10"){
                       if(testFrame === 600){
                            addMonster(10,200,monsters.darkBlob);   
                            addMonster(10,250,monsters.ghostBlob);  
                            addMonster(10,300,monsters.darkBlob);  
                            addMonster(350,200,monsters.darkBlob);   
                            addMonster(350,250,monsters.ghostBlob);  
                            addMonster(350,300,monsters.darkBlob);
                            addMonster(80,250,monsters.darkMage);  
                            addMonster(300,250,monsters.darkMage);
                            testFrame = 0;
                            darkSummon = "world1";
                       }
                   }
               }
            }
        }
        if(level === "angel") {
            if(testFrame2 === 1){
                texts = [];
                addText(frame+60,"Well done hero                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+360,"You have vanquished the dark lord!                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+860,"The world is now free of his reign.                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+1360,"Your adventure is still far from over.                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+1960,"There are more challenges yet to come.                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+2560,"I doubt you'll need that blessing anymore.                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+3160,"Besides, you have your own power that no other power could beat (;                 ", 5, 150, 200, 100, 0, 0, 0);
                addText(frame+4000,"For now though, you can test your strength in the bonus levels. I'll see you there!                 ", 5, 150, 200, 100, 0, 0, 0);
            }
            if(testFrame2 === 4800){
                level = "B1";
                godMode = false;
                showHealth = false;
                StartLevel();
            }
        }
        if(level === "B1"){
            //bonus 1
            if(!wave1){
                if(es.length === 1){
                    wave1 = true;
                    testFrame2 = 0;
                    HP+=300;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=600;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave2 && text1){
                if(es.length === 1){
                    wave2 = true;
                    testFrame2 = 0;
                   HP+=300;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=600;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave3 && text2){
                if(es.length === 1){
                    wave3 = true;
                    testFrame2 = 0;
                    HP+=300;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=600;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave4 && text3){
                if(es.length === 1){
                    wave4 = true;
                    testFrame2 = 0;
                   HP+=300;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=600;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(text4){
                if(es.length === 1){
                    level = "B2";
                    StartLevel();
                }
            }
            if(testFrame2 < 60 && wave1 && !wave2){
                textSize(120);
                fill(166, 0, 0);
                text("!",20,280);
                text("!",350,280);
            }
            if(testFrame2 === 60 && wave1 && !wave2){
                text1 = true;
                addMonster(15,210,monsters.rainbowBlob);  
                addMonster(345,210,monsters.rainbowBlob); 
            }
            if(testFrame2 < 60 && wave2 && !wave3){
                textSize(120);
                fill(166, 0, 0);
                text("!",250,170);
            }
            if(testFrame2 === 60 && wave2 && !wave3){
                text2 = true;
                addMonster(245,100,monsters.ULTRAMech);
            }
            if(testFrame2 < 60 && wave3 && !wave4){
                textSize(120);
                fill(166, 0, 0);
                text("!",15,380);
                text("!",335,180);
            }
            if(testFrame2 === 60 && wave3 && !wave4){
                text3 = true;
                addMonster(10,310,monsters.rainbowBlob);
                addMonster(330,110,monsters.ULTRAMech);
            }
            if(testFrame2 < 60 && wave4 && !wave5){
                textSize(120);
                fill(166, 0, 0);
                text("!",335,180);
                text("!",335,380);
                text("!",335,280);
            }
            if(testFrame2 === 60 && wave4 && !wave5){
                text4 = true;
                addMonster(330,110,monsters.ULTRAMech);
                addMonster(330,210,monsters.rainbowBlob);
                addMonster(330,310,monsters.ULTRAMech);
            }
        }
        if(level === "B2"){
            if(chargeText > 0){
                textSize(18);
                fill(255, 255, 255);
                text("Use charge!\n   press [", 145, 90);
            }
            //bonus 2
            //EX boss 1 effects
            for (var i = 0; i<es.length; i++){
                var e = es[i];
                if(es.length === 1){
                    if(testFrame3 >= 180){
                        level = "B3";
                        StartLevel();
                    }
                }
                if(e.mon.name === "darkKingBlob") {
                    if(!spectral){
                        if(kingBlobBurst >= 100){
                            kingBlobBurst = 0; 
                            var numMissiles = 50;
                            var angleOffset = random() * 360 / numMissiles;
                            for (var i = 0 ; i < numMissiles ; i++) {
                                var angle = i * 360 / numMissiles + angleOffset;
                                  var m = {
                                      x: e.x + e.mon.width/2,
                                      y: e.y + e.mon.height/2,
                                      vx: 5 * cos(angle),
                                      vy: 5 * sin(angle),
                                      size: 20,
                                      damage: 20,
                                      red: 0,
                                      green: 0,
                                      blue: 0,
                                  };
                                ms.push(m);
                            }
                        }
                        if(kingBlobAttack === "triple attack"){
                            if(frame > lastThrowFrame + 100) {
                                if(crusherAttack !== "flamethrower"){
                                lastThrowFrame = frame;
                                addMissile(300,200, 5, 20, 20, 0,0,0);
                                var m = addMissile(300,200, 5, 20, 20, 0,0,0);
                                m.vy-=4;
                                m = addMissile(300,200, 5, 20, 20, 0,0,0);
                                m.vy+=4;
                                }
                            }
                            if(testFrame >= 1000){
                                lastThrowFrame = frame;
                                testFrame = 0;
                                kingBlobAttack = "shot blast";
                            }
                        }
                        if(kingBlobAttack === "shot blast"){
                            if(frame > lastThrowFrame + 140) {
                                textSize(120);
                                if(crusherAttack === "flamethrower"){
                                    fill(0, 0, 0);
                                }else{
                                    fill(166, 0, 0);
                                }
                                text("!",px-5+pw/3,py+ph+15);
                            }
                            if(frame > lastThrowFrame + 200) {
                                
                                lastThrowFrame = frame;
                                if(crusherAttack !== "flamethrower"){
                                addMissile(300,200, 20, 20, 20, 0,0,0);
                                addMissile(300,200, 15, 20, 20, 0,0,0);
                                addMissile(300,200, 10, 20, 20, 0,0,0);
                                addMissile(300,200, 5, 20, 20, 0,0,0);
                                addMissile(300,200, 1, 20, 20, 0,0,0);
                                }
                            }
                            if(testFrame >= 1260){
                                testFrame = 0;
                                lastThrowFrame = frame;
                                kingBlobAttack = "rapid fire";
                            }
                        }
                        if(kingBlobAttack === "rapid fire"){
                            if(frame > lastThrowFrame + 140) {
                                textSize(120);
                                if(crusherAttack === "flamethrower" || crusherAttack=== "grind"){
                                    fill(69, 69, 69);
                                }else{
                                    fill(21, 0, 255);
                                }
                                text("!",px-5+pw/3,py+ph+15);
                            }
                            if(frame > lastThrowFrame +200) {
                                if(crusherAttack !== "flamethrower" && crusherAttack!== "grind"){
                                    if(frame%5 === 4){
                                        addMissile(300,200, 5, 20, 20, 0,0,0);
                                    }
                                }
                                if(frame >= lastThrowFrame +300){
                                    lastThrowFrame = frame;
                                }
                            }
                            if(testFrame >= 1300){
                                lastThrowFrame = frame;
                                testFrame = 0;
                                kingBlobAttack = "triple attack";
                            }
                        }
                        if(e.hp <= 4000 && !wave1){
                            wave1 = true;
                            spectral = true;
                            lastThrowFrame = frame;
                            testFrame = 0;
                            if(kingBlobAttack === "triple attack"){
                                kingBlobAttack = "shot blast";
                            }else if(kingBlobAttack === "shot blast"){
                                kingBlobAttack = "rapid fire";
                            }else if(kingBlobAttack === "rapid fire"){
                                kingBlobAttack = "triple attack";
                            }
                        }
                        if(e.hp <= 2500 && !wave3){
                            wave3 = true;
                            spectral = true;
                            lastThrowFrame = frame;
                            testFrame = 0;
                            if(kingBlobAttack === "triple attack"){
                                kingBlobAttack = "shot blast";
                            }else if(kingBlobAttack === "shot blast"){
                                kingBlobAttack = "rapid fire";
                            }else if(kingBlobAttack === "rapid fire"){
                                kingBlobAttack = "triple attack";
                            }
                        }
                        if(e.hp <= 1000 && !wave5){
                            wave5 = true;
                            spectral = true;
                            lastThrowFrame = frame;
                            testFrame = 0;
                            if(kingBlobAttack === "triple attack"){
                                kingBlobAttack = "shot blast";
                            }else if(kingBlobAttack === "shot blast"){
                                kingBlobAttack = "rapid fire";
                            }else if(kingBlobAttack === "rapid fire"){
                                kingBlobAttack = "triple attack";
                            }
                        }
                    }else if(spectral){
                        if(frame%150 === 149){
                            if(crusherAttack !== "flamethrower"){
                            addMissile(300,200, 5, 20, 20, 89, 166, 255, false, 400);
                            }
                        }
                        if(e.hp <= 3500 && !wave2){
                            wave2 = true;
                            spectral = false;
                            lastThrowFrame = frame;
                            testFrame = 0;
                            ms = [];
                        }
                        if(e.hp <= 2000 && !wave4){
                            wave4 = true;
                            spectral = false;
                            lastThrowFrame = frame;
                            testFrame = 0;
                            ms = [];
                        }
                        if(e.hp <= 500 && !wave6){
                            wave6 = true;
                            spectral = false;
                            lastThrowFrame = frame;
                            testFrame = 0;
                            ms = [];
                        }
                    }
                }
                //EX boss 2 effects
                if(e.mon.name === "crusher10000") {
                    if(e.hp <= 1000){
                        gearplaceL+=0.05;
                        e.x+=0.05;
                    }
                    if(crusherAttack === "lightning"){
                        if(testFrame2 >= 60){
                            if(randPlace === 0){
                                line(0,125,400,125);
                            }else if(randPlace === 1){
                                line(0,225,400,225);
                            }else if(randPlace === 2){
                                line(0,325,400,325);                                
                            }
                        }
                        if(testFrame2 >= 120){
                            if(randPlace === 0){
                                line(0,125,400,125);
                                fill(255, 230, 0);
                                rect(0,100,400,50);
                                if((py>=100&&py<=150)||(py+ph>=100&&py+ph<=150)||(py+ph/2>=100&&py+ph/2<=150)){
                                    if(!Pinvincible){
                                        HP-=50;
                                        Phurt = true; 
                                    }   
                                }
                            }else if(randPlace === 1){
                                line(0,225,400,225);
                                fill(255, 230, 0);
                                rect(0,200,400,50);
                                if((py>=200&&py<=250)||(py+ph>=200&&py+ph<=250)||(py+ph/2>=200&&py+ph/2<=250)){
                                    if(!Pinvincible){
                                        HP-=50;
                                        Phurt = true; 
                                    }   
                                }
                            }else if(randPlace === 2){
                                line(0,325,400,325);
                                fill(255, 230, 0);
                                rect(0,300,400,50);
                                if((py>=300&&py<=350)||(py+ph>=300&&py+ph<=350)||(py+ph/2>=300&&py+ph/2<=350)){
                                    if(!Pinvincible){
                                        HP-=50;
                                        Phurt = true; 
                                    }
                                }
                            }
                        }
                        if(testFrame2 >= 180){
                            if(scroll === "down"){
                                randPlace++;   
                            }else if(scroll === "up"){
                                randPlace--;   
                            }
                            if(randPlace === 0){
                                scroll = "down";   
                            }
                            if(randPlace === 2){
                                scroll = "up";   
                            }
                            numLightning ++;
                            if(numLightning <5){
                                crusherAttack = "lightning";
                                testFrame2 = 0;
                            }else{
                                numLightning = 0;
                                crusherAttack = "grind";
                                testFrame2 = 0;
                            }
                        }
                    }
                    if(crusherAttack === "grind"){
                        if(testFrame2 >=60 && testFrame2 <120){
                            textSize(120);
                            fill(166, 0, 0);
                            text("!",175,200);
                        }
                        if(testFrame2 >=80 && testFrame2 <140){
                            textSize(120);
                            fill(166, 0, 0);
                            text("!",175,350);
                        }
                        if(testFrame2 >=120 && testFrame2 <140){
                            if(gearplaceT<= 50){
                                gearplaceT+=10;   
                            }
                        }
                        if(testFrame2 >=140 && testFrame2 < 160){
                            if(gearplaceT>= -150){
                                gearplaceT-=10;   
                            }
                            if(gearplaceB>= 400){
                                gearplaceB-=10;   
                            }
                        }
                        if(testFrame2 >=160 && testFrame2 < 180){
                            if(gearplaceB<= 600){
                                gearplaceB+=10;   
                            }
                            if(gearplaceB> 600){
                                 gearplaceB = 600;
                            }
                            if(gearplaceT< -150){
                                 gearplaceT = -150;
                            }
                        }
                        if(testFrame2 >= 200){
                            testFrame2 = 0;
                            crusherAttack = "grab";
                        }
                    }
                    if(crusherAttack === "grab"){
                        fill(138, 138, 138);
                        rect(grabx,graby,400,50);
                        if(testFrame2 >= 120 && testFrame2 <180){
                            textSize(60);
                            fill(255, 225, 0);
                            text("!",px-5,py+ph+25);
                            text("!",px-5,py+10);
                            text("!",px+45,py+ph+25);
                            text("!",px+45,py+10);
                            graby = py;
                        }
                        if(testFrame2 >= 180 && testFrame2 <240){
                            if(grabx<0){
                                grabx+=10;
                            }
                            if(grabx>0){
                                grabx = 0;   
                            }
                        }
                         if(testFrame2 >= 240 && testFrame2 <300){
                            if(grabx>-400){
                                grabx-=10;
                                if(grab){
                                    px-=10;
                                    if(px<0){
                                        px = 0;
                                    }
                                }
                            }
                            if(grabx<-400){
                                grabx = -400;   
                            }
                        }
                        if(testFrame2 >=300){
                            crusherAttack = "flamethrower";
                            testFrame2 = 0;
                            if(spectral){
                                ms = [];   
                            }
                        }
                    }
                    if(crusherAttack === "flamethrower"){
                        if(testFrame2>=60 && testFrame2 <120){
                            if(grabx<-300){
                                grabx+=10;
                            }
                            if(grabx>-300){
                                grabx = -300;   
                            }
                            graby = 50;
                        }
                        if(testFrame2>=120 && testFrame2 <280){
                            if(graby<350){
                                graby+=2;
                            }
                            if(graby>350){
                                graby = 350;   
                            }
                            addMissile(grabx+400,random(graby,graby+50), 5, 20, 2, 255, 145, 0, true, 120);
                        }
                        if(testFrame2>=280){
                            if(grabx>-400){
                                grabx-=10;
                            }
                            if(grabx<-400){
                                grabx = -400;   
                            }
                            
                        }
                        if(testFrame2 >=300){
                            crusherAttack = "lightning";
                            testFrame2 = 0;
                        }
                        fill(138, 138, 138);
                        rect(grabx,graby,400,50);
                    }
                }
            }
        }
        if(level === "B3"){
            //bonus 3
            if(!wave1){
                if(es.length === 1){
                    wave1 = true;
                    testFrame2 = 0;
                    HP+=350;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=700;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave2 && text1){
                if(es.length === 1){
                    wave2 = true;
                    testFrame2 = 0;
                   HP+=350;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=700;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave3 && text2){
                if(es.length === 1){
                    wave3 = true;
                    testFrame2 = 0;
                    HP+=350;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=700;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave4 && text3){
                if(es.length === 1){
                    wave4 = true;
                    testFrame2 = 0;
                   HP+=350;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=700;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave5 && text4){
                if(es.length === 1){
                    wave5 = true;
                    testFrame2 = 0;
                   HP+=350;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=700;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(text5){
                if(es.length === 1){
                    level = "B4";
                    StartLevel();
                }
            }
            if(testFrame2 < 60 && wave1 && !wave2){
                textSize(120);
                fill(166, 0, 0);
                text("!",350,280);
            }
            if(testFrame2 === 60 && wave1 && !wave2){
                text1 = true;
                addMonster(300,210,monsters.livingBlizzard); 
            }
            if(testFrame2 < 60 && wave2 && !wave3){
                textSize(120);
                fill(166, 0, 0);
                text("!",20,280);
                text("!",350,280);
            }
            if(testFrame2 === 60 && wave2 && !wave3){
                text2 = true;
                addMonster(15,210,monsters.mist);  
                addMonster(300,210,monsters.mist);
            }
            if(testFrame2 < 60 && wave3 && !wave4){
                textSize(120);
                fill(166, 0, 0);
                text("!",15,180);
                text("!",335,380);
            }
            if(testFrame2 === 60 && wave3 && !wave4){
                text3 = true;
                addMonster(20,100,monsters.livingTornado);
                addMonster(300,280,monsters.livingTornado);
            }
            if(testFrame2 < 60 && wave4 && !wave5){
                textSize(120);
                fill(166, 0, 0);
                text("!",335,180);
                text("!",335,380);
                text("!",335,280);
            }
            if(testFrame2 === 60 && wave4 && !wave5){
                text4 = true;
                addMonster(280,90,monsters.livingTornado);
                addMonster(280,210,monsters.livingBlizzard);
                addMonster(280,330,monsters.mist);
            }
            if(testFrame2 < 60 && wave5 && !wave6){
                textSize(120);
                fill(166, 0, 0);
                text("!",335,160);
                text("!",335,380);
                text("!",35,380);
                text("!",35,160);
            }
            if(testFrame2 === 60 && wave5 && !wave6){
                text5 = true;
                addMonster(280,90,monsters.livingTornado);
                addMonster(5,70,monsters.mist);
                addMonster(280,330,monsters.mist);
                addMonster(20,290,monsters.livingBlizzard);
            }
        }
        if(level === "B4"){
            //bonus 4
            //EX boss 3 effects
            for (var i = 0; i<es.length; i++){
                var e = es[i];
                if(es.length === 1){
                    if(testFrame3 >= 0){
                        level = "B5";
                        StartLevel();
                    }
                }
                if(e.mon.name === "queenThunderCloud") {
                    if(frame > lastThrowFrame + 200 && es.length > 2) {
                      lastThrowFrame = frame;
                      addHPMissile(200,100, 8, 50, -2, 255, 168, 242);   
                   }
                    if(queenAttack === "hailstorm"){
                        if(testFrame === 60){
                            var m = addMissile(0,0,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(150,0,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(300,0,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(450,0,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(-150,0,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            var m = addMissile(-100,-100,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(50,-100,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(200,-100,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(350,-100,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(500,-100,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            var m = addMissile(0,-200,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(150,-200,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(300,-200,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(450,-200,5,15,2, 82, 235, 254);
                            m.inc = 0;
                            m = addMissile(-150,-200,5,15,2, 82, 235, 254);
                            m.inc = 0;
                        }
                        if(testFrame === 100){
                            if(way === "right"){
                                way = "left";   
                            }else if(way === "left"){
                                way = "right";
                            }
                        }
                        if(testFrame === 180){
                            if(way === "right"){
                                way = "left";   
                            }else if(way === "left"){
                                way = "right";
                            }
                        }
                        if(testFrame === 260){
                            if(way === "right"){
                                way = "left";   
                            }else if(way === "left"){
                                way = "right";
                            }
                        }
                        if(testFrame === 340){
                            if(way === "right"){
                                way = "left";   
                            }else if(way === "left"){
                                way = "right";
                            }
                        }
                        if(testFrame === 420){
                            testFrame = 0;
                            queenAttack = "hurricane";
                        }
                    }else if(queenAttack === "hurricane"){
                        if(testFrame < 60){
                            textSize(120);
                            fill(166, 0, 0);
                            text("!",185,270);
                        }
                        if(testFrame === 60){
                            var m = addMissile(200,70,5,0,0, 82, 235, 253);
                            m.vx = 0;
                            m.vy = 4;
                        }
                        if(testFrame === 120){
                            var m = addMissile(200,70,5,0,0, 82, 235, 253);
                            m.vx = 2;
                            m.vy = 4;
                        }
                        if(testFrame === 180){
                            var m = addMissile(200,70,5,0,0, 82, 235, 253);
                            m.vx = -2;
                            m.vy = 4;
                        }
                        if(testFrame >= 300){
                            testFrame = 0;
                            queenAttack = "wind";
                        }
                    }else if(queenAttack === "wind"){
                        if(testFrame >= 60){
                            windsped=4;  
                            windir = 1;
                        }else{
                            textSize(80);
                            fill(166, 0, 0);
                            text("|",185,250);
                            text("v",175,270);
                        }
                        if(testFrame >= 180){
                            testFrame = 0;
                            queenAttack = "hailstorm";
                        }
                    }
                }
                //EX boss 4 effects
                if(e.mon.name === "thrym") {
                    if(warriorDown && defenderDown && !comeBack){
                       comeBack = true;
                       e.x = 300;
                       e.y = 205;
                    }
                    if(!splitt&&e.hp<e.mon.maxHp/2){
                        testFrame2 = 0;
                        splitt = true;
                        e.x = 100000000;
                    }
                    if(splitt && !spawned){
                        if(testFrame2>60){
                            addMonster(140,160,monsters.frozenWarrior);
                            addMonster(220,160,monsters.frozenDefender);
                            spawned = true;
                            testFrame2 = 0;
                        }else{
                            textSize(120);
                            fill(4, 0, 255);
                            text("!",140,250);
                            text("!",220,250);    
                        }
                    }
                    if(!splitt || comeBack){
                        if(thrymAttack === "ice shot"){
                            if(testFrame2%100 === 99) {
                                var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,5,15,2, 82, 235, 250);
                                m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,5,15,2, 82, 235, 250);
                                m.vy+=1;
                                m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,5,15,2, 82, 235, 250);
                                m.vy-=1;
                            }
                            if(testFrame2 >= 300){
                                testFrame2 = 0;
                                thrymAttack = "freezePound";
                            }
                        }else if(thrymAttack === "ice spike"){
                            if(testFrame2 === 60) {
                                spikeAx = px+pw/2;
                                spikeAy = py+ph/2;
                            }
                            if(testFrame2 >= 60 && testFrame2 < 240) {
                                fill(135, 135, 135);
                                ellipse(spikeAx,spikeAy,50,50);
                            }
                            if(testFrame2 === 120) {
                                spikeBx = px+pw/2;
                                spikeBy = py+ph/2;
                            }
                            if(testFrame2 >= 120 && testFrame2 < 240) {
                                fill(135, 135, 135);
                                ellipse(spikeBx,spikeBy,50,50);
                            }
                            if(testFrame2 === 180) {
                                spikeCx = px+pw/2;
                                spikeCy = py+ph/2;
                            }
                            if(testFrame2 >= 180 && testFrame2 < 240) {
                                fill(135, 135, 135);
                                ellipse(spikeCx,spikeCy,50,50);
                            }
                            if(testFrame2 >= 240) {
                                fill(82, 235, 255);
                                ellipse(spikeAx,spikeAy,50,50);
                                ellipse(spikeBx,spikeBy,50,50);
                                ellipse(spikeCx,spikeCy,50,50);
                                if(overlapCircle(px+pw/2, py+ph/2, spikeAx, spikeAy, pw, 50)){
                                    HP--;
                                    superSlow = 2;
                                }
                                if(overlapCircle(px+pw/2, py+ph/2, spikeBx, spikeBy, pw, 50)){
                                    HP--;
                                    superSlow = 2;
                                }
                                if(overlapCircle(px+pw/2, py+ph/2, spikeCx, spikeCy, pw, 50)){
                                    HP--;
                                    superSlow = 2;
                                }
                            }
                            if(testFrame2 >= 600){
                                testFrame2 = 0;
                                thrymAttack = "absolute 0";
                            }
                        }else if(thrymAttack === "freezePound"){
                            if(testFrame2<120){
                                textSize(60);
                                fill(82, 235, 255);
                                text("!",e.x+e.mon.width/2-110,e.y+e.mon.height/2-100);
                                text("!",e.x+e.mon.width/2-110,e.y+e.mon.height/2+130);
                                text("!",e.x+e.mon.width/2+90,e.y+e.mon.height/2-100);
                                text("!",e.x+e.mon.width/2+90,e.y+e.mon.height/2+130);
                            }
                            if(testFrame2 === 120){
                                if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2,e.y+e.mon.height/2, pw, 300)){
                                    fill(82, 235, 255);
                                    ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,300,300);
                                    stun = 160;
                                }
                            }
                            if(testFrame2 >= 120){
                                testFrame2 = 0;
                                thrymAttack = "ice spike";   
                            }
                        }else if(thrymAttack === "absolute 0"){
                            if(testFrame2 >= 60){
                                chargeUp++;   
                            }
                            if(chargeUp >= 300){
                                MP = 0;
                               testFrame2 = 0;
                               chargeUp =  0;
                               if(es.length <= 2){
                                   thrymAttack = "ice shot";
                               }else{
                                   thrymAttack = "rest";
                               }
                            }
                            fill(82, 235, 255, 100);
                            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,chargeUp,chargeUp);
                        }else if(thrymAttack === "rest"){
                            if (testFrame2 >= 600){
                                testFrame2 = 0;
                                thrymAttack = "ice shot";
                            }
                        }
                    }
                }
            }
        }
         if(level === "B5"){
            //bonus 5
            if(!wave1){
                if(es.length === 1){
                    wave1 = true;
                    testFrame2 = 0;
                    HP+=400;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=800;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave2 && text1){
                if(es.length === 1){
                    wave2 = true;
                    testFrame2 = 0;
                   HP+=400;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=800;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave3 && text2){
                if(es.length === 1){
                    wave3 = true;
                    testFrame2 = 0;
                    HP+=400;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=800;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave4 && text3){
                if(es.length === 1){
                    wave4 = true;
                    testFrame2 = 0;
                   HP+=400;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=800;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave5 && text4){
                if(es.length === 1){
                    wave5 = true;
                    testFrame2 = 0;
                   HP+=400;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=800;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave6 && text5){
                if(es.length === 1){
                    wave6 = true;
                    testFrame2 = 0;
                   HP+=400;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=800;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(text6){
                if(es.length === 1){
                    level = "B6";
                    StartLevel();
                }
            }
            if(testFrame2 < 60 && wave1 && !wave2){
                textSize(120);
                fill(166, 0, 0);
                text("!",310,280);
                text("!",310,180);
                text("!",310,380);
            }
            if(testFrame2 === 60 && wave1 && !wave2){
                text1 = true;
                addMonster(300,210,monsters.sandSquid);
                addMonster(300,110,monsters.sandSquid);
                addMonster(300,310,monsters.sandSquid);
            }
            if(testFrame2 < 60 && wave2 && !wave3){
                textSize(120);
                fill(160, 0, 163);
                text("!",350,280);
            }
            if(testFrame2 === 60 && wave2 && !wave3){
                text2 = true;
                addMonster(300,210,monsters.scarab);
                addMonster(310,210,monsters.scarab);
                addMonster(320,210,monsters.scarab);
                addMonster(330,210,monsters.scarab);
                addMonster(340,210,monsters.scarab);
                addMonster(350,210,monsters.scarab);
                addMonster(290,210,monsters.scarab);
                addMonster(280,210,monsters.scarab);
                addMonster(300,220,monsters.scarab);
                addMonster(310,220,monsters.scarab);
                addMonster(320,220,monsters.scarab);
                addMonster(330,220,monsters.scarab);
                addMonster(340,220,monsters.scarab);
                addMonster(350,220,monsters.scarab);
                addMonster(290,220,monsters.scarab);
                addMonster(280,220,monsters.scarab);
                addMonster(300,230,monsters.scarab);
                addMonster(310,230,monsters.scarab);
                addMonster(320,230,monsters.scarab);
                addMonster(330,230,monsters.scarab);
                addMonster(340,230,monsters.scarab);
                addMonster(350,230,monsters.scarab);
                addMonster(290,230,monsters.scarab);
                addMonster(280,230,monsters.scarab);
                addMonster(300,200,monsters.scarab);
                addMonster(310,200,monsters.scarab);
                addMonster(320,200,monsters.scarab);
                addMonster(330,200,monsters.scarab);
                addMonster(340,200,monsters.scarab);
                addMonster(350,200,monsters.scarab);
                addMonster(290,200,monsters.scarab);
                addMonster(280,200,monsters.scarab);
            }
            if(testFrame2 < 60 && wave3 && !wave4){
                textSize(120);
                fill(166, 0, 0);
                text("!",190,280);
                text("!",15,180);
                text("!",15,380);
            }
                
            if(testFrame2 === 60 && wave3 && !wave4){
                text3 = true;
                addMonster(20,100,monsters.sandSquid);
                addMonster(20,280,monsters.sandSquid);
                addMonster(180,210,monsters.pharaoh);
            }
            if(testFrame2 < 60 && wave4 && !wave5){
                textSize(120);
                fill(160, 0, 163);
                text("!",185,180);
                text("!",185,380);
            }
            if(testFrame2 === 60 && wave4 && !wave5){
                text4 = true;
                addMonster(135,110,monsters.scarab);
                addMonster(145,110,monsters.scarab);
                addMonster(155,110,monsters.scarab);
                addMonster(165,110,monsters.scarab);
                addMonster(175,110,monsters.scarab);
                addMonster(185,110,monsters.scarab);
                addMonster(125,110,monsters.scarab);
                addMonster(115,110,monsters.scarab);
                addMonster(135,120,monsters.scarab);
                addMonster(145,120,monsters.scarab);
                addMonster(155,120,monsters.scarab);
                addMonster(165,120,monsters.scarab);
                addMonster(175,120,monsters.scarab);
                addMonster(185,120,monsters.scarab);
                addMonster(125,120,monsters.scarab);
                addMonster(115,120,monsters.scarab);
                addMonster(135,130,monsters.scarab);
                addMonster(145,130,monsters.scarab);
                addMonster(155,130,monsters.scarab);
                addMonster(165,130,monsters.scarab);
                addMonster(175,130,monsters.scarab);
                addMonster(185,130,monsters.scarab);
                addMonster(125,130,monsters.scarab);
                addMonster(115,130,monsters.scarab);
                addMonster(135,100,monsters.scarab);
                addMonster(145,100,monsters.scarab);
                addMonster(155,100,monsters.scarab);
                addMonster(165,100,monsters.scarab);
                addMonster(175,100,monsters.scarab);
                addMonster(185,100,monsters.scarab);
                addMonster(125,100,monsters.scarab);
                addMonster(115,100,monsters.scarab);
                
                addMonster(135,310,monsters.scarab);
                addMonster(145,310,monsters.scarab);
                addMonster(155,310,monsters.scarab);
                addMonster(165,310,monsters.scarab);
                addMonster(175,310,monsters.scarab);
                addMonster(185,310,monsters.scarab);
                addMonster(125,310,monsters.scarab);
                addMonster(115,310,monsters.scarab);
                addMonster(135,320,monsters.scarab);
                addMonster(145,320,monsters.scarab);
                addMonster(155,320,monsters.scarab);
                addMonster(165,320,monsters.scarab);
                addMonster(175,320,monsters.scarab);
                addMonster(185,320,monsters.scarab);
                addMonster(125,320,monsters.scarab);
                addMonster(115,320,monsters.scarab);
                addMonster(135,330,monsters.scarab);
                addMonster(145,330,monsters.scarab);
                addMonster(155,330,monsters.scarab);
                addMonster(165,330,monsters.scarab);
                addMonster(175,330,monsters.scarab);
                addMonster(185,330,monsters.scarab);
                addMonster(125,330,monsters.scarab);
                addMonster(115,330,monsters.scarab);
                addMonster(135,300,monsters.scarab);
                addMonster(145,300,monsters.scarab);
                addMonster(155,300,monsters.scarab);
                addMonster(165,300,monsters.scarab);
                addMonster(175,300,monsters.scarab);
                addMonster(185,300,monsters.scarab);
                addMonster(125,300,monsters.scarab);
                addMonster(115,300,monsters.scarab);
            }
            if(testFrame2 < 60 && wave5 && !wave6){
                textSize(120);
                fill(166, 0, 0);
                text("!",190,280);
            }
            if(testFrame2 === 60 && wave5 && !wave6){
                text5 = true;
                addMonster(180,210,monsters.royalSarcophagus);
            }
            if(testFrame2 < 60 && wave6 && !wave7){
                textSize(120);
                fill(166, 0, 0);
                text("!",335,160);
                text("!",335,380);
                text("!",35,380);
                text("!",35,160);
            }
            if(testFrame2 === 60 && wave6 && !wave7){
                text6 = true;
                addMonster(280,90,monsters.sandSquid);
                addMonster(5,70,monsters.royalSarcophagus);
                addMonster(280,300,monsters.royalSarcophagus);
                addMonster(20,290,monsters.sandSquid);
            }
        }
      
      //move blocks
      for(var i = 0; i < blocks.length; i++){
          var b = blocks[i];
          if(b.dir === 0){
            // opening up
              b.h-=b.speed;
              if (b.h < 0) {
                b.h = 0;
                b.dir = 1;
              }
              if(overlap(px,py,pw,ph, b.x,b.y,b.w,b.h)) {
                HP-=1;
                Phurt=true;
            }
          }else if (b.dir === 1) {
              // closing down
           b.h += b.speed;
            if (b.h>b.maxH){
                b.h=b.maxH;
                b.dir=0;
            }
            if(overlap(px,py,pw,ph, b.x,b.y,b.w,b.h)) {
                if (!HitLines(px,py+b.speed,pw,ph)) {
                    py+=b.speed;
                }
             HP-=1;
             Phurt=true;
            }
            for (var j = 0 ; j < es.length ; j++) {
                var e = es[j];
                if (overlap(e.x, e.y, e.mon.width, e.mon.height, b.x, b.y, b.w, b.h) && EnemyMoveOk( e.x, e.y + b.speed, j, e) ) {
                    e.y += b.speed;
                }
            }
          } else if(b.dir === 2){
            // opening down
              b.y+=b.speed;
              b.h-=b.speed;
              if (b.h < 0) {
                b.h = 0;
                b.dir = 3;
              }
              if(overlap(px,py,pw,ph, b.x,b.y,b.w,b.h)) {
                HP-=1;
                Phurt=true;
            }
          }else if (b.dir === 3) {
              // closing up
            b.y-=b.speed;
            b.h += b.speed;
            if (b.h>b.maxH){
                b.h=b.maxH;
                b.dir=2;
            }
              if(overlap(px,py,pw,ph, b.x,b.y,b.w,b.h)) {
                if (!HitLines(px,py-b.speed,pw,ph)) {
                    py-=b.speed;
                }
             HP-=1;
             Phurt=true;
            }
            for (var j = 0 ; j < es.length ; j++) {
                var e = es[j];
                if (overlap(e.x, e.y, e.mon.width, e.mon.height, b.x, b.y, b.w, b.h) && EnemyMoveOk( e.x, e.y - b.speed, j, e)) {
                    e.y -= b.speed;
                }
            }
          }

          fill(66, 36, 3);
          rect(b.x, b.y, b.w, b.h);
      }
      var totalNum = es.length;
          for (var j = 0; j<es.length;j++) {
                var e = es[j];
              if(e.mon.name === "dedalot"){
                totalNum--;  
              }
          }
      //move missiles
       for(var i = 0; i < ms.length; i++){
          var m = ms[i];
          if(m.red === 1 && m.green === 0 && m.blue === 0 && m.homingTime > 0){
              var errorInc = 0.05;
              if(inBonus && level !== "B4" && level !== "B2" && es.length > 1){
                  if(m.x < es[1].x-10){
                    m.homingErrorX += errorInc;  
                  }
                  if(m.x > es[1].x+10){
                    m.homingErrorX -= errorInc;  
                  }
                  if(m.y < es[1].y-10){
                    m.homingErrorY += errorInc;  
                  }
                  if(m.y > es[1].y+10){
                    m.homingErrorY -= errorInc;  
                  }
              }else{
                  if(m.x < es[0].x-10){
                    m.homingErrorX += errorInc;  
                  }
                  if(m.x > es[0].x+10){
                    m.homingErrorX -= errorInc;  
                  }
                  if(m.y < es[0].y-10){
                    m.homingErrorY += errorInc;  
                  }
                  if(m.y > es[0].y+10){
                    m.homingErrorY -= errorInc;  
                  }
              }
              m.vx = m.homingErrorX;
              m.vy = m.homingErrorY;
              m.homingTime--;
              corrupted+=0.005;
              if(m.homingTime <= 0){
                ms.splice(i,1);   
              }
          }else if(m.homingTime !== undefined && m.homingTime > 0){
              var errorInc = 0.03;
              if(m.x < px-10){
                m.homingErrorX += errorInc;  
              }
              if(m.x > px+10){
                m.homingErrorX -= errorInc;  
              }
              if(m.y < py-10){
                m.homingErrorY += errorInc;  
              }
              if(m.y > py+10){
                m.homingErrorY -= errorInc;  
              }
              m.vx = m.homingErrorX;
              m.vy = m.homingErrorY;
              m.homingTime--;
              if(m.homingTime <= 0){
                ms.splice(i,1);   
              }
          }
          if(m.tcheck !== undefined){
              m.x += m.tx;
              m.y += m.ty;
          }else if(m.red === 82 && m.green === 235 && m.blue === 254){
              if(way === "right"){
                m.inc+=0.1;
              }else if(way === "left"){
                 m.inc-=0.1; 
              }
              if(m.inc <0){
                m.y-=m.inc;
              }else if(m.inc>0){
                m.y+=m.inc;   
              }
              m.x+=m.inc;
          }else{
                if(m.spin){
                    if(m.angleInc > 0){
                        m.angle += m.angleInc;
                        m.angleInc-=m.angleDecay;
                    }
                    m.vx = 5 * cos(m.angle);
                    m.vy = 5 * sin(m.angle);
                }
                if(m.pulse){
                    m.pulseTime++;
                    if(m.pulseTime >= m.pulseTimeIn){
                        if(m.spin){
                            m.x -= m.vx*3;
                            m.y -= m.vy*3;
                        }else{
                            m.x -= m.vx;
                            m.y -= m.vy;   
                        }
                    }else{
                        m.x += m.vx;
                        m.y += m.vy;   
                    }
                    if(m.pulseTime >= m.pulseTimeOut){
                       m.pulseTime = 0;
                    }
                }else{
                    m.x += m.vx;
                    m.y += m.vy;
                }
          }
            if(m.red === 25 && m.green === 25 && m.blue === 25){
                //head missile
                var x = m.x + cos(m.mouthDir) * abs(m.charge);
                var y = m.y + sin(m.mouthDir) * abs(m.charge);
            
                var size = 60;
                m.charge = 1;
                
                if (overlap(px, py, pw, ph, x-size/2, y-size/2, size, size)) {
                    HP -= 5;
                    Phurt = true;
                }
                var dx = px - m.x;
                var dy = py - m.y;
                
                m.mouthDir = atan2( dy, dx );
                var mouthDir = m.mouthDir;
                var biteSpeed = 8;
                // The mouth will go between 0 and 90 degrees open, then back to 0.
                var mouthAngle = abs( (frame*biteSpeed % 180) - 90 );
                
                var angle1 = mouthDir + mouthAngle / 2;
                var angle2 = mouthDir + 360 -  mouthAngle / 2;
                // draw the circle part
                fill(158, 158, 158);
                arc( x, y, size, size,  angle1, angle2 );
            }
          if(m.red === 82 && m.green === 235 && m.blue === 253){
              //tornado missiles
                m.xpit = m.x;
                m.ypit = m.y;
                pitFrame2 = frame;
                var pitSize2 = 120;
                if(pitSize2>0){
                    var pullx = m.xpit-(px+pw/2);
                    var pully = m.ypit-(py+ph/2); 
                    var pullen = sqrt(pullx*pullx+pully*pully);
                    if (pullen < (pitSize2+pw)/2) {
                        if(pullen>0){
                            if(!HitLines(tryx,tryy,pw,ph)){
                                px+=pullx/pullen*5;
                                py+=pully/pullen*5;
                            }
                        }
                        if(!Pinvincible){
                            HP-=3;
                            if(es[0].mon.name === "queenThunderCloud"){
                                es[0].hp+=1;
                                if(es[0].hp > es[0].mon.maxHp){
                                    es[0].hp = es[0].mon.maxHp;   
                                }
                            }
                        }
                    }
                    stroke(204, 204, 204);
                    var angle = frame*40;
                    var x = sin(angle)*10;
                    var y = cos(angle)*10;
                    for (var j = 0; j < 120; j+=20){
                        var k = 120-j;
                        var fade2 = k/pitSize2;
                        fill(255*fade2, 255*fade2, 255*fade2);
                        ellipse(m.xpit+x*(1-fade2),m.ypit+y*(1-fade2),k,k);
                        noStroke();
                    }
                    stroke(0, 0, 0);
                }
          }
          if(m.red === 82 && m.green === 233 && m.blue === 253){
              //sandstorm missiles
                m.xpit = m.x;
                m.ypit = m.y;
                pitFrame2 = frame;
                var pitSize2 = 120;
                if(pitSize2>0){
                    var pullx = m.xpit-(px+pw/2);
                    var pully = m.ypit-(py+ph/2); 
                    var pullen = sqrt(pullx*pullx+pully*pully);
                    if (pullen < (pitSize2+pw)/2) {
                        if(pullen>0){
                            if(!HitLines(tryx,tryy,pw,ph)){
                                if(!grab){
                                    px+=pullx/pullen*5;
                                    py+=pully/pullen*5;
                                }
                            }
                        }
                        if(!Pinvincible){
                            HP-=3;
                        }
                    }
                    stroke(150, 120, 0);
                    var angle = frame*40;
                    var x = sin(angle)*10;
                    var y = cos(angle)*10;
                    for (var j = 0; j < 120; j+=20){
                        var k = 120-j;
                        var fade2 = k/pitSize2;
                        fill(171*fade2, 135*fade2, 0);
                        ellipse(m.xpit+x*(1-fade2),m.ypit+y*(1-fade2),k,k);
                        noStroke();
                    }
                    stroke(0, 0, 0);
                }
          }
          if(m.red === 50 && m.green === 200 && m.blue === 255){
              //tsunami missiles
                m.xpit = m.x;
                m.ypit = m.y;
                pitFrame2 = frame;
                var pitSize2 = 120;
                if(pitSize2>0){
                    var pullx = m.xpit-(px+pw/2);
                    var pully = m.ypit-(py+ph/2); 
                    var pullen = sqrt(pullx*pullx+pully*pully);
                    if (pullen < (pitSize2+pw)/2) {
                        if(pullen>0){
                            if(!HitLines(tryx,tryy,pw,ph)){
                                if(!grab){
                                    px+=pullx/pullen*5;
                                    py+=pully/pullen*5;
                                }
                            }
                        }
                        if(!Pinvincible){
                            HP-=3;
                        }
                    }
                    stroke(55, 0, 255);
                    var angle = frame*40;
                    var x = sin(angle)*10;
                    var y = cos(angle)*10;
                    for (var j = 0; j < 120; j+=20){
                        var k = 120-j;
                        var fade2 = k/pitSize2;
                        fill(0, 71*fade2, 171);
                        ellipse(m.xpit+x*(1-fade2),m.ypit+y*(1-fade2),k,k);
                        noStroke();
                    }
                    stroke(0, 0, 0);
                }
          }
          if(m.tcheck !== undefined){
            m.tdist-=1;
            m.dist = m.tdist;
          }else{
            m.dist-=1;
          }
          if(m.splat && m.dist<0){
            var p = addPoison(m.x-30, m.y-30,80,80);
            if(level === 80){
                p.life = 500;
            }
            if(level === 102){
                p.life = 500;   
            }
            if(level === "B6"){
                p.life = 500;   
            }
            if(level === "B8"){
                p.life = 500;   
            }
            ms.splice(i,1);
            i--;
          }
          if(m.explode && m.dist<0){
            fill(255, 102, 0);
            if(m.red === 255 && m.green === 102 && m.blue === 0){
                ellipse(m.x,m.y,200,200);
                if(overlapCircle(px+pw/2, py+ph/2, m.x, m.y, pw, 200) && !Pinvincible) {
                    HP -= 200; 
                    Phurt = true;
                }
            }else if(m.red === 255 && m.green === 204 && m.blue === 0){
                fill(255,204, 0);
                ellipse(m.x,m.y,200,200);
                if(yggSummon){
                    fill(255, 102, 0);
                    ellipse(m.x,m.y,100,100);
                }
                if(overlapCircle(px+pw/2, py+ph/2, m.x, m.y, pw, 200) && !Pinvincible) {
                    confuse = 1500;
                    Phurt = true;
                }
                if(yggSummon){
                    if(overlapCircle(px+pw/2, py+ph/2, m.x, m.y, pw, 100) && !Pinvincible) {
                    HP-=100;
                    Phurt = true;
                }   
                }
            }else if(m.red === 0 && m.green === 1 && m.blue === 0){
                fill(158, 119, 0);
                if(yggSummon){
                    ellipse(m.x,m.y,300,300);
                    for(var j = 0; j<10; j++){
                        addMonster(random(m.x-150,m.x+150),random(m.y-150,m.y+150),monsters.spore);   
                    }
                }else{
                    ellipse(m.x,m.y,200,200);
                    for(var j = 0; j<10; j++){
                        addMonster(random(m.x-100,m.x+100),random(m.y-100,m.y+100),monsters.spore);   
                    }  
                }
            }else{
                ellipse(m.x,m.y,100,100);
                if(overlapCircle(px+pw/2, py+ph/2, m.x, m.y, pw, 100) && !Pinvincible) {
                    HP -= 100; 
                    Phurt = true;
                }
            }
            if(m.red === 255 && m.green === 102 && m.blue === 0 && halfHealth){
                var numMissiles = 4;
                var altarM = 5;
                var angleOffset = random() * 360 / numMissiles;
                for (var j = 0 ; j < numMissiles ; j++) {
                    var angle = j * 360 / numMissiles + angleOffset;
                      var p = {
                          x: m.x,
                          y: m.y,
                          vx: 5 * cos(angle),
                          vy: 5 * sin(angle),
                          size: 15,
                          damage: altarM,
                          red: 254,
                          green: 102,
                          blue: 0,
                          explode: true,
                          dist: 20,
                      };
                    ms.push(p);
                }
            }
            ms.splice(i,1);
            i--;
          }
          if(m.x<-300||m.x>700||m.y<-300||m.y>700){
            ms.splice(i,1);
          }
          if(m.bounce>0){
            if(m.x<0){
                m.vx = -m.vx;
                m.bounce-=1;
            }
            if(m.y>400){
                m.vy = -m.vy;
                m.bounce-=1;
            }
            if(m.x>400){
                m.vx = -m.vx;
                m.bounce-=1;
            }
            if(m.y<55){
                m.vy = -m.vy;
                m.bounce-=1;
            }
          }
          if (m.red === 88 && m.green === 166 && m.blue === 255){
            if(doAttack(m.x,m.y,m.size,"blob cannon",m.damage)){
                var p = addMissile(m.x,m.y,10,15,30,89, 166, 255, true);
                p.vx = -m.vx;
                p.vy = -m.vy;
                ms.splice(i,1);
            }
          }else if (m.red === 1 && m.green === 0 && m.blue === 0){
            if(doAttack(m.x,m.y,m.size,"dark missile",m.damage)){
                var p = addMissile(m.x,m.y,10,15,30,2, 0, 0, true, 600);
                p.vx = -m.vx;
                p.vy = -m.vy;
                ms.splice(i,1);
            }
          }else if (m.red === 95 && m.green === 145 && m.blue === 3){
            if(doAttack(m.x,m.y,m.size,"blob cannon",m.damage)){
                var p = addMissile(m.x,m.y,10,15,30,94, 145, 3);
                p.vx = -m.vx;
                p.vy = -m.vy;
                ms.splice(i,1);
            }
        }else if(m.red === 232 && m.green === 139 && m.blue === 9){
            if(doAttack(m.x,m.y,m.size,"slow dart",m.damage)){
                var p = addMissile(m.x,m.y,10,15,5,231,139,9);
                p.slow = true;
                p.vx = -m.vx;
                p.vy = -m.vy;
                ms.splice(i,1); 
            }
          }else if(m.damage < 0) {
            //healing missiles
            for (var j = 0; j<es.length;j++) {
                var e = es[j];
                if (e.mon.name === "queenCloud" || e.mon.name === "queenThunderCloud") {
                    continue;
                }
                if(overlapCircle(e.x+e.mon.width/2,e.y+e.mon.width/2,m.x+m.size/2, m.y+m.size/2, e.mon.width, m.size)) {
                        e.hp-=m.damage;
                        if(e.hp > e.mon.maxHp){
                            e.hp = e.mon.maxHp;
                        }
                }
            }
          }else{
            if(overlapCircle(px+pw/2, py+pw/2, m.x+m.size/2, m.y+m.size/2, pw, m.size) && !Pinvincible) {
                if(m.red === 0 && m.green === 0 && m.blue === 255){
                    stun = 50;
                }
                if(m.red === 0 && m.green === 0 && m.blue === 1){
                    HP -= 50;
                    soulLink+=1;
                    ms.splice(i,1);
                }
                if(m.red === 82 && m.green === 235 && m.blue === 250){
                    slow = 180;
                }
                if(level === 101 && totalNum>1){
                    HP -= m.damage/6;
                }else if(es[0].mon.name === "queenThunderCloud" && m.red === 82 && m.green === 235 && m.blue === 254){
                    HP -= m.damage;
                    es[0].hp+=1;
                    if(es[0].hp > es[0].mon.maxHp){
                        es[0].hp = es[0].mon.maxHp;   
                    }
                }else{
                    HP -= m.damage;
                }
                Phurt = true;
                if(m.slow === true){
                    slow = 300;  
                }
                if(m.freeze === true){
                    stun = 60;  
                }
                if(m.poison === true){
                    poisonFrame = frame + 250;   
                }
                if(m.decay === true){
                    decay = 60;  
                }
                if(m.confuse === true){
                    confuse = 150;  
                }
                if(m.red === 232 && m.green === 140 && m.blue === 8){
                    superSlow = 300;  
                }
              }
            }
       }
       if(level === "B6"){
            //bonus 6
            for (var i = 0; i<es.length; i++){
                var e = es[i];
                if(es.length === 1){
                    if(testFrame3 >= 180){
                        level = "B7";
                        StartLevel();
                    }
                }
                if(mirageRevive >= 17100 && mirageRevive < 17700){
                    blink++;
                     if(blink < 80) {
                        textSize(120);
                        fill(0, 0, 0);
                        text("!",185,270); 
                     }
                     if(blink === 160){
                        blink = 0;   
                     }
                }else if(mirageRevive >= 17700 && mirageRevive < 18000){
                    textSize(120);
                    fill(0, 0, 0);
                    text("!",185,270);
                }else if(mirageRevive === 18000){
                    addMonster( 200, 200, monsters.darkMirage);   
                    mirageRevive = 123719283719837192837192;
                    mirageAttack = "sandstorm";
                }
                //EX boss 5 effects
                if(e.mon.name === "apocalypseKraken" && tentDed){
                    if(e.hp<=e.mon.maxHp/2 && !halfHealth){
                        backr = 0;
                        backg = 13;
                        backb = 255;
                        halfHealth = true;
                        flooded = true;
                        e.x = 1000000;
                        tentDed = false;
                        tents = [];
                        tentsAlive = 1;
                        grabx = - 400;
                        addMonster( 200, 200, monsters.tent);
                        addMonster( 200, 200, monsters.tent);
                        addMonster( 200, 200, monsters.tent);
                        addMonster( 200, 200, monsters.tent);
                        addMonster( 200, 200, monsters.tent);
                        addMonster( 200, 200, monsters.tent);
                        addMonster( 200, 200, monsters.tentacle);
                    }
                    if(krakenAttack === "tentacle"){
                        if(testFrame2 === 2){
                            e.x = 400;   
                        }
                        e.x-=3;
                        if(e.x<180&&e.x>-180){
                            e.x = 180;   
                        }
                        if(!halfHealth){
                            if(testFrame2 === 70){
                                innitTents();  
                            }
                        }else{
                            if(testFrame2 === 70){
                                randPlace = floor(random(0,5)); 
                            }
                            if(testFrame2 >= 70 && testFrame2 < 130){
                                textSize(80);
                                fill(166, 0, 0);
                                if(randPlace !== 0){
                                    text("!",50,110);
                                }
                                if(randPlace !== 1){
                                    text("!",50,185);
                                }
                                if(randPlace !== 2){
                                    text("!",50,260);
                                }
                                if(randPlace !== 3){
                                    text("!",50,330);
                                }
                                if(randPlace !== 4){
                                    text("!",50,400);
                                }
                            }
                            if(testFrame2 === 130){
                                innitTents(); 
                            }
                            if(testFrame2 === 290){
                                randPlace = floor(random(0,5)); 
                            }
                            if(testFrame2 >= 290 && testFrame2 < 350){
                                textSize(80);
                                fill(166, 0, 0);
                                if(randPlace !== 0){
                                    text("!",50,110);
                                }
                                if(randPlace !== 1){
                                    text("!",50,185);
                                }
                                if(randPlace !== 2){
                                    text("!",50,260);
                                }
                                if(randPlace !== 3){
                                    text("!",50,330);
                                }
                                if(randPlace !== 4){
                                    text("!",50,400);
                                }
                            }
                            if(testFrame2 === 350){
                                innitTents(); 
                            }
                            if(testFrame2 === 510){
                                randPlace = floor(random(0,5)); 
                            }
                            if(testFrame2 >= 510 && testFrame2 < 570){
                                textSize(80);
                                fill(166, 0, 0);
                                if(randPlace !== 0){
                                    text("!",50,110);
                                }
                                if(randPlace !== 1){
                                    text("!",50,185);
                                }
                                if(randPlace !== 2){
                                    text("!",50,260);
                                }
                                if(randPlace !== 3){
                                    text("!",50,330);
                                }
                                if(randPlace !== 4){
                                    text("!",50,400);
                                }
                            }
                            if(testFrame2 === 570){
                                innitTents(); 
                            }
                        }
                        if(testFrame2 === 660){
                           testFrame2 = 0;
                           krakenAttack = "tsunami";
                        }
                    }
                    if(krakenAttack === "tsunami"){
                        if(!flooded){
                            if(testFrame2 === 50){
                                var m = addMissile(400,100,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                var m = addMissile(400,350,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 100){
                                var m = addMissile(400,225,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 150){
                                var m = addMissile(400,100,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 162){
                                var m = addMissile(400,225,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 175){
                                var m = addMissile(400,350,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 250){
                                testFrame2 = 0;
                                krakenAttack = "ships";
                            }
                        }else{
                            if(testFrame2 === 150){
                                var m = addMissile(400,100,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                var m = addMissile(400,350,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                var m = addMissile(-55,100,5,0,0, 50, 200, 255);  
                                m.vx = 5;
                                m.vy = 0;
                                var m = addMissile(-55,350,5,0,0, 50, 200, 255);  
                                m.vx = 5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 250){
                                var m = addMissile(400,225,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                m = addMissile(-55,225,5,0,0, 50, 200, 255);  
                                m.vx = 5;
                                m.vy = 0;
                            }
                            if(testFrame2 === 350){
                                var m = addMissile(400,100,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                m = addMissile(-55,100,5,0,0, 50, 200, 255);  
                                m.vx = 5;
                                m.vy = 0; 
                            }
                            if(testFrame2 === 375){
                                var m = addMissile(400,225,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                m = addMissile(-55,225,5,0,0, 50, 200, 255);  
                                m.vx = 5;
                                m.vy = 0;  
                            }
                            if(testFrame2 === 425){
                                var m = addMissile(400,350,5,0,0, 50, 200, 255);  
                                m.vx = -5;
                                m.vy = 0;
                                m = addMissile(-55,350,5,0,0, 50, 200, 255);  
                                m.vx = 5;
                                m.vy = 0;    
                            }
                            if(testFrame2 === 500){
                                testFrame2 = 0;
                                krakenAttack = "ink";
                            }
                        }
                    }
                    if(krakenAttack === "ink"){
                        e.x+=3;
                        if(e.x>400){
                            e.x = -400;   
                        }   
                        if(e.x>=-180 && e.x<175){
                            e.x = -180;   
                        }
                        if(testFrame2 >= 200&&testFrame2 < 260){
                            textSize(120);
                            fill(0, 0, 0);
                            text("!",px-5+pw/3,py+ph+15);  
                        }
                        if(testFrame2>=260 && testFrame2<380){
                            if(testFrame2%3 === 2){
                                var m = addMissile(0,225,5,25,0, 0, 0, 0);
                                m.splat = true;
                                m.vx*=random(-1,1);
                                if(m.vx === 0){
                                    m.vx = 1;   
                                }
                                m.vy*=random(-1,1);
                                if(m.vy === 0){
                                    m.vy = 1;   
                                }
                            }
                        }
                        if(testFrame2>=800){
                            testFrame2 = 0;
                            krakenAttack = "geyser";   
                        }
                    }
                    if(krakenAttack === "geyser"){
                        if(testFrame2 === 2){
                            geyser = true;
                        }
                        if(testFrame2>=830 && testFrame2 < 890){
                            for(var i = 0; i < bubbles.length; i++) {
                                var b = bubbles[i];
                                textSize(50);
                                fill(166, 0, 0);
                                text("!",b.x-5,b.y); 
                            }
                        }
                        if(testFrame2 === 890){
                            for(var i = 0; i < bubbles.length; i++) {
                                var b = bubbles[i];
                                fill(161, 161, 161);
                                ellipse(b.x,b.y,150,150);
                                if(overlapCircle(px+pw/2, py+ph/2, b.x+b.w/2, b.y+b.h/2, pw, 150)) {
                                    HP -= 100; 
                                    Phurt = true;
                                }
                            }
                            geyser = false;
                            bubbles = [];
                        }
                        if(testFrame2>=930){
                            e.x-=3;
                        }
                        if(testFrame2 === 1030){
                            testFrame2 = 0;
                            krakenAttack = "tentacle";
                        }
                    }
                    if(krakenAttack === "ships"){
                        e.x+=3;
                        if(e.x>400){
                            e.x = -400;   
                        }   
                        if(e.x>=-180 && e.x<175){
                            e.x = -180;   
                        }
                        if(testFrame2 >= 200&&testFrame2 < 260){
                            boatx = -100;
                            boaty = 250;
                            textSize(120);
                            fill(166, 0, 0);
                            text("!",250,260);
                            randPlace = floor(random(0,10));
                        }
                        if(testFrame2>=260&&testFrame2<360){
                            if(randPlace !== 9){
                                boatx+=4;
                                fill(107, 64, 0);
                                arc(boatx,boaty,200,100,0,180);
                                line(boatx,boaty,boatx,boaty-100);
                                fill(158, 0, 0);
                                triangle(boatx,boaty-100,boatx,boaty-40,boatx+60,boaty-70);
                                image(getImage("avatars/spunky-sam-orange"),boatx-100,boaty-50,50,50);
                                image(getImage("avatars/spunky-sam-orange"),boatx-50,boaty-50,50,50);
                                image(getImage("avatars/spunky-sam-orange"),boatx+30,boaty-50,50,50);
                                if(randPlace === 1 || randPlace === 2){
                                    fill(0, 0, 0);
                                    textSize(15);
                                    text("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",boatx-150,boaty-50);
                                }
                            }else{
                                boatx+=4;
                                var bombx = 50;
                                var bomby = -45;
                                fill(107, 64, 0);
                                arc(boatx,boaty,200,100,0,180);
                                line(boatx,boaty,boatx,boaty-100);
                                fill(158, 0, 0);
                                triangle(boatx,boaty-100,boatx,boaty-40,boatx+60,boaty-70);
                                fill(46, 46, 46);
                                ellipse(boatx+50/2+bombx,boaty+50/2+bomby,50/1.2,50/1.2);
                                fill(77, 62, 0);
                                rect(boatx+50/2+bombx - 3, boaty+50/2+bomby - 42, 5, 50/2.5);
                                line(boatx+40+bombx,boaty+15+bomby,boatx+30+bombx,boaty+25+bomby);
                                line(boatx+10+bombx,boaty+15+bomby,boatx+20+bombx,boaty+25+bomby);
                                fill(255, 0, 0);
                                ellipse(boatx+25+bombx,boaty-12+bomby,10,10);
                                bombx = 0;
                                fill(46, 46, 46);
                                ellipse(boatx+50/2+bombx,boaty+50/2+bomby,50/1.2,50/1.2);
                                fill(77, 62, 0);
                                rect(boatx+50/2+bombx - 3, boaty+50/2+bomby - 42, 5, 50/2.5);
                                line(boatx+40+bombx,boaty+15+bomby,boatx+30+bombx,boaty+25+bomby);
                                line(boatx+10+bombx,boaty+15+bomby,boatx+20+bombx,boaty+25+bomby);
                                fill(255, 0, 0);
                                ellipse(boatx+25+bombx,boaty-12+bomby,10,10);
                                bombx = -75;
                                fill(46, 46, 46);
                                ellipse(boatx+50/2+bombx,boaty+50/2+bomby,50/1.2,50/1.2);
                                fill(77, 62, 0);
                                rect(boatx+50/2+bombx - 3, boaty+50/2+bomby - 42, 5, 50/2.5);
                                line(boatx+40+bombx,boaty+15+bomby,boatx+30+bombx,boaty+25+bomby);
                                line(boatx+10+bombx,boaty+15+bomby,boatx+20+bombx,boaty+25+bomby);
                                fill(255, 0, 0);
                                ellipse(boatx+25+bombx,boaty-12+bomby,10,10);
                            }
                        }
                        if(testFrame2 === 360){
                            if(randPlace !== 9){
                               addMonster(boatx-100,boaty-50,monsters.mudBlob);
                               addMonster(boatx-50,boaty-50,monsters.mudBlob);
                               addMonster(boatx+30,boaty-50,monsters.mudBlob);
                            }else{
                                addMonster(boatx-50,boaty-50,monsters.bomb);
                            }
                            boatx = -100;
                            boaty = 250;
                        }
                        if(testFrame2 === 600){
                            testFrame2 = 0;
                            krakenAttack = "cannon";
                        }
                    }
                    if(krakenAttack === "cannon"){
                        graby = py;
                        if(grabx<-400){
                            grabx = -400;   
                        }
                        if(grabx>-300){
                            grabx = -300;   
                        }
                        if(testFrame2>=100&&testFrame2<300 &&grabx!== -300){
                            grabx+=10;   
                        }
                        if(testFrame2>=150&&testFrame2<810){
                            if(testFrame2%100 === 99){
                                addMonster(grabx+400,graby,monsters.bomb);
                            }
                        }
                        if(testFrame2>=810){
                            grabx-=10;
                        }
                        if(testFrame2>=930){
                            e.x-=3;
                        }
                        if(testFrame2 === 1030){
                            testFrame2 = 0;
                            krakenAttack = "tentacle";
                        }
                    }
                }
                if(e.mon.name === "tentacle"){
                    if(mirageRevive > 700000){
                        if(testFrame2 === 600){
                            tentx = random(0,350);   
                        }
                        if(testFrame2 >= 600 && testFrame2 < 660){
                            textSize(120);
                            fill(255, 136, 0);
                            text("!",tentx,150);
                            text("!",tentx,250);
                            text("!",tentx,350);
                        }
                        if(testFrame2 >= 660){
                            if(e.state === "attack"){
                                tenty-=5;
                            }
                            if(e.state === "defense"){
                                tenty+=5;   
                            }
                            if(tenty<50){
                                tenty = 50;   
                            }
                            if(tenty>450){
                                tenty = 450;   
                            }
                            if(e.state === "attack" && tenty <= 50){
                                e.state = "defense";   
                            }
                            if(e.state === "defense" && tenty >= 450){
                                e.state = "attack";
                                tentx = 2000000;
                                testFrame2 = 0;
                            }
                        }
                    }else{
                        if(testFrame2 === 60){
                            tentx = random(0,350);   
                        }
                        if(testFrame2 >= 60 && testFrame2 < 120){
                            textSize(120);
                            fill(255, 136, 0);
                            text("!",tentx,150);
                            text("!",tentx,250);
                            text("!",tentx,350);
                        }
                        if(testFrame2 >= 120){
                            if(e.state === "attack"){
                                tenty-=5;
                            }
                            if(e.state === "defense"){
                                tenty+=5;   
                            }
                            if(tenty<50){
                                tenty = 50;   
                            }
                            if(tenty>450){
                                tenty = 450;   
                            }
                            if(e.state === "attack" && tenty <= 50){
                                e.state = "defense";   
                            }
                            if(e.state === "defense" && tenty >= 450){
                                e.state = "attack";
                                tentx = 2000000;
                                testFrame2 = 0;
                            }
                        }
                    }
                }
                //EX boss 6 effects
                if(e.mon.name === "darkMirage") {
                    mirageHP = e.hp;
                    if(mirageHP < 0){
                        mirageHP = 0;   
                    }
                    //The sand pit attack is not in this part of the code lol go search "dark mirage sand pit"
                    if(mirageAttack === "sandstorm"){
                        if(testFrame%100 === 99) {
                            addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,5,0,0, 82, 233, 253);   
                        }
                        if(testFrame >= 300){
                            testFrame = 0;
                            mirageAttack = "burrow";
                            e.sinkTime = 500;
                        }
                    }
                    if(testFrame >= 1500&&mirageAttack === "burrow"){
                        mirageAttack = "sand wall";
                        testFrame = 0;
                        e.sinkTime = 0;
                    }
                    if(mirageAttack === "sand wall"){
                        if(testFrame >= 60 && testFrame < 180){
                            textSize(120);
                            fill(255, 225, 0);
                            text("!",px-5+pw/3,py+ph+15);   
                        }
                        if(testFrame === 180){
                            addMonster(px+5-pw/4,py+5-ph/4,monsters.sandWall);
                        }
                        if(testFrame >= 240){
                            mirageAttack = "sandstorm";
                            testFrame = 0;
                        }
                    }
                    if(e.hp<=e.mon.maxHp/2){
                        if(mirageSummon >= 1600){
                            addMonster(random(50,300),random(100,300),monsters.mirage);
                            addMonster(random(50,300),random(100,300),monsters.mirage);
                            mirageSummon = 0;
                        }
                    }
                }
            }
        }
        if(level === "B7"){
            //bonus 7
            if(!wave1){
                if(es.length === 1){
                    wave1 = true;
                    testFrame2 = 0;
                    HP+=450;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=900;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave2 && text1){
                if(es.length === 1){
                    wave2 = true;
                    testFrame2 = 0;
                   HP+=450;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=900;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave3 && text2){
                if(es.length === 1){
                    wave3 = true;
                    testFrame2 = 0;
                    HP+=450;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=900;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave4 && text3){
                if(es.length === 1){
                    wave4 = true;
                    testFrame2 = 0;
                   HP+=450;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=900;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave5 && text4){
                if(es.length === 1){
                    wave5 = true;
                    testFrame2 = 0;
                   HP+=450;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=900;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave6 && text5){
                if(es.length === 1){
                    wave6 = true;
                    testFrame2 = 0;
                   HP+=450;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=900;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(text6){
                if(es.length === 1){
                    level = "B8";
                    StartLevel();
                }
            }
            if(testFrame2 < 60 && wave1 && !wave2){
                textSize(120);
                fill(166, 0, 0);
                text("!",310,180);
            }
            if(testFrame2 === 60 && wave1 && !wave2){
                text1 = true;
                addMonster(300,110,monsters.nightshade);
            }
            if(testFrame2 < 60 && wave2 && !wave3){
                textSize(120);
                fill(160, 0, 163);
                text("!",185,380);
                fill(166, 0, 0);
                text("!",80,150);
                text("!",300,150);   
            }
            if(testFrame2 === 60 && wave2 && !wave3){
                text2 = true;
                addMonster(200,310,monsters.infestedMosquito);
                addMonster(210,310,monsters.infestedMosquito);
                addMonster(220,310,monsters.infestedMosquito);
                addMonster(230,310,monsters.infestedMosquito);
                addMonster(240,310,monsters.infestedMosquito);
                addMonster(250,310,monsters.infestedMosquito);
                addMonster(190,310,monsters.infestedMosquito);
                addMonster(180,310,monsters.infestedMosquito);
                addMonster(200,320,monsters.infestedMosquito);
                addMonster(210,320,monsters.infestedMosquito);
                addMonster(220,320,monsters.infestedMosquito);
                addMonster(230,320,monsters.infestedMosquito);
                addMonster(240,320,monsters.infestedMosquito);
                addMonster(250,320,monsters.infestedMosquito);
                addMonster(190,320,monsters.infestedMosquito);
                addMonster(180,320,monsters.infestedMosquito);
                addMonster(200,330,monsters.infestedMosquito);
                addMonster(210,330,monsters.infestedMosquito);
                addMonster(220,330,monsters.infestedMosquito);
                addMonster(230,330,monsters.infestedMosquito);
                addMonster(240,330,monsters.infestedMosquito);
                addMonster(250,330,monsters.infestedMosquito);
                addMonster(190,330,monsters.infestedMosquito);
                addMonster(180,330,monsters.infestedMosquito);
                addMonster(200,300,monsters.infestedMosquito);
                addMonster(210,300,monsters.infestedMosquito);
                addMonster(220,300,monsters.infestedMosquito);
                addMonster(230,300,monsters.infestedMosquito);
                addMonster(240,300,monsters.infestedMosquito);
                addMonster(250,300,monsters.infestedMosquito);
                addMonster(190,300,monsters.infestedMosquito);
                addMonster(180,300,monsters.infestedMosquito);
                addMonster(100,110,monsters.vampireMosquito);
                addMonster(300,110,monsters.vampireMosquito);
            }
            if(testFrame2 < 60 && wave3 && !wave4){
                textSize(120);
                fill(166, 0, 0);
                text("!",185,380);
                text("!",80,150);
                text("!",300,150); 
            }
                
            if(testFrame2 === 60 && wave3 && !wave4){
                text3 = true;
                addMonster(180,340,monsters.vampireMosquito);
                addMonster(100,110,monsters.nightshade);
                addMonster(300,110,monsters.nightshade);
            }
            if(testFrame2 < 60 && wave4 && !wave5){
                textSize(120);
                fill(166, 0, 0);
                text("!",190,280);
                text("!",290,280);
                text("!",90,280);
            }
            if(testFrame2 === 60 && wave4 && !wave5){
                text4 = true;
                addMonster(180,210,monsters.nightshade);
                addMonster(80,210,monsters.vampireMosquito);
                addMonster(280,210,monsters.vampireMosquito);
            }
            if(testFrame2 < 60 && wave5 && !wave6){
                textSize(120);
                fill(166, 0, 0);
                text("!",335,160);
                text("!",335,380);
                text("!",35,380);
                text("!",35,160);
            }
            if(testFrame2 === 60 && wave5 && !wave6){
                text5 = true;
                addMonster(280,90,monsters.vampireMosquito);
                addMonster(5,70,monsters.vampireMosquito);
                addMonster(280,300,monsters.vampireMosquito);
                addMonster(20,290,monsters.vampireMosquito);
            }
            if(testFrame2 < 60 && wave6 && !wave7){
                textSize(120);
                fill(166, 0, 0);
                text("!",285,150);
            }
            if(testFrame2 === 60 && wave6 && !wave7){
                text6 = true;
                addMonster(280,100,monsters.ironweedHydra1);
                addMonster(280,100,monsters.ironweedHydra2);
                addMonster(280,100,monsters.ironweedHydra3);
            }
        }
        if(level === "B8"){
            //bonus 8
            for (var i = 0; i<es.length; i++){
                var e = es[i];
                if(es.length === 1){
                    if(testFrame3 >= 180){
                        level = "B9";
                        StartLevel();
                    }
                }
                //EX boss 7 effects
                if(e.mon.name === "ruinedAltar") {
                    if(e.hp <= e.mon.maxHp/2 && altarAttack !== "suck"){
                        halfHealth = true;   
                    }
                    if(altarAttack === "pulse"){
                        if(testFrame <= 500){
                            if(testFrame % 100 === 99) {
                                var numMissiles = 18;
                                var altarM = 5;
                                var angleOffset = random() * 360 / numMissiles;
                                for (var i = 0 ; i < numMissiles ; i++) {
                                    var angle = i * 360 / numMissiles + angleOffset;
                                      var m = {
                                          x: e.x + e.mon.width/2,
                                          y: e.y + e.mon.height/2,
                                          vx: 5 * cos(angle),
                                          vy: 5 * sin(angle),
                                          size: 20,
                                          damage: altarM,
                                          red: 232,
                                          green: 140,
                                          blue: 9,
                                          slow: true,
                                          pulse: true,
                                          pulseTimeIn: 50,
                                          pulseTimeOut: 505,
                                          pulseTime: 0,
                                      };
                                    ms.push(m);
                                }
                            }
                        }
                        if(testFrame >= 700){
                            altarAttack = "explode";
                            testFrame = 0;
                        }
                    }
                    if(altarAttack === "explode"){
                        if(testFrame <= 500){
                            if(testFrame % 80 === 79) {
                                var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,15,255, 102, 0);
                                m.explode = true;
                            }
                        }
                        if(testFrame >= 600){
                            altarAttack = "suck";
                            testFrame = 0;
                            order = [];
                        }
                    }
                    if(altarAttack === "suck"){
                        if(testFrame === 50){
                            randPlace = floor(random(0,4));   
                            order.push(randPlace);
                        }
                        if(testFrame >= 50 && testFrame <= 100){
                            textSize(100);
                            fill(166, 0, 0);
                            if(randPlace !== 0){
                                text("!",10,130);   
                            }
                            if(randPlace !== 1){
                                text("!",10,210);   
                            }
                            if(randPlace !== 2){
                                text("!",10,290);   
                            }
                            if(randPlace !== 3){
                                text("!",10,370);   
                            }
                        }
                        if(testFrame >= 100&& testFrame <= 150){
                            if(randPlace !== 0){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,50,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(0,5);  
                                }
                            }
                            if(randPlace !== 1){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,150,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,2); 
                                }
                            }
                            if(randPlace !== 2){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,250,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,2); 
                                }
                            }
                            if(randPlace !== 3){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,350,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,-4);  
                                }
                            }
                        }
                        
                        
                        if(testFrame === 180){
                            if(randPlace === 0){
                                randPlace = floor(random(0,3));  
                            }else if(randPlace === 3){
                                randPlace = floor(random(1,4)); 
                            }else{
                                randPlace = floor(random(0,4)); 
                            }
                            order.push(randPlace);
                        }
                        if(testFrame >= 180 && testFrame <= 230){
                            textSize(100);
                            fill(166, 0, 0);
                            if(randPlace !== 0){
                                text("!",10,130);   
                            }
                            if(randPlace !== 1){
                                text("!",10,210);   
                            }
                            if(randPlace !== 2){
                                text("!",10,290);   
                            }
                            if(randPlace !== 3){
                                text("!",10,370);   
                            }
                        }
                        if(testFrame >= 230&& testFrame <= 280){
                            if(randPlace !== 0){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,50,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(0,5);  
                                }
                            }
                            if(randPlace !== 1){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,150,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,2); 
                                }
                            }
                            if(randPlace !== 2){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,250,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,2); 
                                }
                            }
                            if(randPlace !== 3){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,350,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,-4);  
                                }
                            }
                        }
                        
                        
                        if(testFrame === 310){
                            if(randPlace === 0){
                                randPlace = floor(random(0,3));  
                            }else if(randPlace === 3){
                                randPlace = floor(random(1,4)); 
                            }else{
                                randPlace = floor(random(0,4)); 
                            } 
                            order.push(randPlace);
                        }
                        if(testFrame >= 310 && testFrame <= 360){
                            textSize(100);
                            fill(166, 0, 0);
                            if(randPlace !== 0){
                                text("!",10,130);   
                            }
                            if(randPlace !== 1){
                                text("!",10,210);   
                            }
                            if(randPlace !== 2){
                                text("!",10,290);   
                            }
                            if(randPlace !== 3){
                                text("!",10,370);   
                            }
                        }
                        if(testFrame >= 360&& testFrame <= 410){
                            if(randPlace !== 0){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,50,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(0,5);  
                                }
                            }
                            if(randPlace !== 1){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,150,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,2); 
                                }
                            }
                            if(randPlace !== 2){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,250,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,2); 
                                }
                            }
                            if(randPlace !== 3){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(0,350,10,50,10,128, 128, 128);
                                    m.vx = 10;
                                    m.vy = random(-1,-4);  
                                }
                            }
                        }
                        
                        
 
                        if(halfHealth){
                            if(testFrame >= 440 && testFrame <= 490){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",e.x-50,e.y+e.mon.height/2+25); 
                            }
                            if(testFrame >= 490&& testFrame <= 540){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                    m.vx = -4;
                                    m.vy = random(-7,-4);  
                                }
                                if(order[2] !== 0){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(-7,-4);  
                                    }
                                }
                                if(order[2] !== 1){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(-2,-1.5); 
                                    }
                                }
                                if(order[2] !== 2){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(0,0.5); 
                                    }
                                }
                                if(order[2] !== 3){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(2,5);  
                                    }
                                }
                            }
                            
                            
                            if(testFrame >= 570 && testFrame <= 620){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",e.x-50,e.y+e.mon.height/2+25); 
                            }
                            if(testFrame >= 620&& testFrame <= 670){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                    m.vx = -4;
                                    m.vy = random(-7,-4);  
                                }
                                if(order[1] !== 0){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(-7,-4);  
                                    }
                                }
                                if(order[1] !== 1){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(-2,-1.5); 
                                    }
                                }
                                if(order[1] !== 2){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(0,0.5); 
                                    }
                                }
                                if(order[1] !== 3){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(2,5);  
                                    }
                                }
                            }
                            
                            if(testFrame >= 700 && testFrame <= 750){
                                textSize(100);
                                fill(166, 0, 0);
                                text("!",e.x-50,e.y+e.mon.height/2+25); 
                            }
                            if(testFrame >= 750 && testFrame <= 800){
                                if(testFrame % 5 === 4) {
                                    var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                    m.vx = -4;
                                    m.vy = random(-7,-4);  
                                }
                                if(order[0] !== 0){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(-7,-4);  
                                    }
                                }
                                if(order[0] !== 1){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(-2,-1.5);  
                                    }
                                }
                                if(order[0] !== 2){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(0,0.5); 
                                    }
                                }
                                if(order[0] !== 3){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(e.x+e.mon.width+50,e.y+e.mon.height/2+25,10,50,10,128, 128, 128);
                                        m.vx = -10;
                                        m.vy = random(2,5);  
                                    }
                                }
                            }
                            if(testFrame >= 1000){
                                order = [];
                                altarAttack = "spin";
                                testFrame = 0;
                            }
                        }else{
                            if(testFrame === 440){
                                if(randPlace === 0){
                                    randPlace = floor(random(0,3));  
                                }else if(randPlace === 3){
                                    randPlace = floor(random(1,4)); 
                                }else{
                                    randPlace = floor(random(0,4)); 
                                }  
                            }
                            if(testFrame >= 440 && testFrame <= 490){
                                textSize(100);
                                fill(166, 0, 0);
                                if(randPlace !== 0){
                                    text("!",10,130);   
                                }
                                if(randPlace !== 1){
                                    text("!",10,210);   
                                }
                                if(randPlace !== 2){
                                    text("!",10,290);   
                                }
                                if(randPlace !== 3){
                                    text("!",10,370);   
                                }
                            }
                            if(testFrame >= 490&& testFrame <= 540){
                                if(randPlace !== 0){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,50,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(2,5);  
                                    }
                                }
                                if(randPlace !== 1){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,150,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(-1,2); 
                                    }
                                }
                                if(randPlace !== 2){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,250,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(-1,2); 
                                    }
                                }
                                if(randPlace !== 3){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,350,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(-1,-4);  
                                    }
                                }
                            }
                            
                            
                            if(testFrame === 570){
                                if(randPlace === 0){
                                    randPlace = floor(random(0,3));  
                                }else if(randPlace === 3){
                                    randPlace = floor(random(1,4)); 
                                }else{
                                    randPlace = floor(random(0,4)); 
                                }   
                            }
                            if(testFrame >= 570 && testFrame <= 620){
                                textSize(100);
                                fill(166, 0, 0);
                                if(randPlace !== 0){
                                    text("!",10,130);   
                                }
                                if(randPlace !== 1){
                                    text("!",10,210);   
                                }
                                if(randPlace !== 2){
                                    text("!",10,290);   
                                }
                                if(randPlace !== 3){
                                    text("!",10,370);   
                                }
                            }
                            if(testFrame >= 620&& testFrame <= 670){
                                if(randPlace !== 0){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,50,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(2,5);  
                                    }
                                }
                                if(randPlace !== 1){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,150,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(-1,2); 
                                    }
                                }
                                if(randPlace !== 2){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,250,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(-1,2); 
                                    }
                                }
                                if(randPlace !== 3){
                                    if(testFrame % 5 === 4) {
                                        var m = addMissile(0,350,10,50,10,128, 128, 128);
                                        m.vx = 10;
                                        m.vy = random(-1,-4);  
                                    }
                                }
                            }
                            if(testFrame >= 800){
                                altarAttack = "spin";
                                testFrame = 0;
                            }
                        }
                    }
                    if(altarAttack === "spin"){
                        if(testFrame <= 500){
                            if(testFrame % 100 === 99) {
                                var numMissiles = 18;
                                var altarM = 12;
                                var angleOffset = random() * 360 / numMissiles;
                                for (var i = 0 ; i < numMissiles ; i++) {
                                    var angle = i * 360 / numMissiles + angleOffset;
                                      var m = {
                                          x: e.x + e.mon.width/2,
                                          y: e.y + e.mon.height/2,
                                          vx: 5 * cos(angle),
                                          vy: 5 * sin(angle),
                                          size: 20,
                                          damage: altarM,
                                          red: 232,
                                          green: 140,
                                          blue: 9,
                                          pulse: false,
                                          pulseTimeIn: 30,
                                          pulseTimeOut: 32,
                                          pulseTime: 0,
                                          spin: true,
                                          angle: angle,
                                          angleInc: 5,
                                          angleDecay: 0.1,
                                      };
                                    if(!halfHealth){
                                        m.pulse = true;   
                                    }
                                    ms.push(m);
                                }
                            }
                        }
                        if(testFrame >= 700){
                            if(halfHealth){
                                altarAttack = "spiral";
                            }else{
                                altarAttack = "pulse";
                            }
                            testFrame = 0;
                        }
                    }
                    if(altarAttack === "spiral"){
                        if(testFrame <= 500){
                            if(testFrame % 10 === 9) {
                                var numMissiles = 4;
                                var altarM = 12;
                                var angleOffset = random() * 360 / numMissiles;
                                for (var i = 0 ; i < numMissiles ; i++) {
                                    var angle = i * 360 / numMissiles + angleOffset;
                                      var m = {
                                          x: e.x + e.mon.width/2,
                                          y: e.y + e.mon.height/2,
                                          vx: 5 * cos(angle),
                                          vy: 5 * sin(angle),
                                          size: 20,
                                          damage: altarM,
                                          red: 232,
                                          green: 140,
                                          blue: 9,
                                          pulse: false,
                                          pulseTimeIn: 30,
                                          pulseTimeOut: 32,
                                          pulseTime: 0,
                                          spin: true,
                                          angle: angle,
                                          angleInc: 5,
                                          angleDecay: 0.1,
                                      };
                                    ms.push(m);
                                }
                            }
                        }
                        if(testFrame >= 700){
                            altarAttack = "mechanize";
                            testFrame = 0;
                        }
                    }
                    if(altarAttack === "mechanize"){
                        if(testFrame === 200){
                            mechanize = 600;
                            if(attack === "fire"){
                                attack = "groundPound";
                            }
                            if(attack === "lightning"){
                                attack = "groundPound";
                            }
                            if(attack === "blob cannon"){
                                attack = "slash";
                            }
                            if(attack === "heal"){
                                attack = "stun slash";
                            }
                            if(attack === "sand pit"){
                                attack = "tentacle";
                            }
                            if(attack === "slow dart"){
                                attack = "tentacle";
                            }
                            if(attack === "poison"){
                                attack = "eruption";
                            }
                            if(attack === "restore"){
                                attack = "charge";
                            }
                        }
                        if(testFrame >= 300){
                            altarAttack = "pulse";
                            testFrame = 0;
                        }
                    }
                }
                //EX boss 8 effects
                if(e.mon.name === "rottenYggdrasil") {
                    if(!yggSummon && e.hp<=e.mon.maxHp/2){
                        yggSummon = true;
                        addMonster( 20, 100, monsters.rottenStalk);
                        addMonster( 320, 100, monsters.rottenStalk);
                        addMonster( 20, 320, monsters.rottenStalk);
                        addMonster( 320, 320, monsters.rottenStalk);
                    }
                    if(showYggdrasil){
                        e.x = 300;
                        if(frame%500 === 499) {
                            var m = addMissile(e.x+50,e.y+50, 7, 0, 2, 25, 25, 25);   
                            m.bounce = 3;
                            if(yggSummon){
                               m.bounce = 5; 
                            }
                        }
                        if(yggAttack === "poison stream"){
                            if(testFrame2 >= 200&&testFrame2 < 260){
                                textSize(120);
                                fill(174, 0, 255);
                                text("!",e.x-30,e.y+e.mon.height/2+50);  
                            }
                            if(testFrame2>=260 && testFrame2<380){
                                if(testFrame2%15 === 14){
                                    var m = addMissile(e.x+30,e.y+80,5,25,0,79, 0, 158);
                                    m.splat = true;
                                    if(!yggSummon){
                                        m.vx=random(-4,0);
                                        if(m.vx === 0){
                                            m.vx = 1;   
                                        }
                                        m.vy=random(0,3);
                                        if(m.vy === 0){
                                            m.vy = 1;   
                                        }
                                    }
                                }
                            }  
                            if(testFrame2 === 1200){
                                yggAttack = "petal barrage";
                                testFrame2 = 0;
                            }
                        }
                        if(yggAttack === "petal barrage"){
                            var petTime = 100;
                            if(yggSummon){
                                petTime = 50;   
                            }
                            if(testFrame2 % petTime === petTime-1 && testFrame2 <= 500) {
                                var numMissiles = 20;
                                var altarM = 10;
                                var angleOffset = random() * 360 / numMissiles;
                                for (var j = 0 ; j < numMissiles ; j++) {
                                    var angle = j * 360 / numMissiles + angleOffset;
                                    var m = {
                                      x: e.x+30,
                                      y: e.y+80,
                                      vx: 5 * cos(angle),
                                      vy: 5 * sin(angle),
                                      size: 20,
                                      damage: altarM,
                                      red: 168,
                                      green: 15,
                                      blue: 15,
                                      bounce: 1,
                                      spin: true,
                                      angle: angle,
                                      angleInc: 10,
                                      angleDecay: 0.1,
                                    };
                                    if(yggSummon){
                                        m.angleInc = 10;
                                        m.angleDecay = 0.2;
                                    }
                                    ms.push(m);
                                }
                            }
                            if(testFrame2 >= 800){
                                yggAttack = "confuse";
                                testFrame2 = 0;
                            }
                        }
                        if(yggAttack === "confuse"){
                            if(testFrame2 >= 140 && testFrame2 < 200) {
                                textSize(120);
                                fill(255, 204, 0);
                                text("!",e.x-30,e.y+e.mon.height/2+50); 
                            }
                            if(testFrame2 >= 200 && testFrame2 < 500) {
                                if(testFrame2%15 === 14){
                                    var m = addMissile(e.x+30,e.y+80,5,25,0,255, 204, 0);
                                    m.explode = true;
                                    m.vx=random(-4,0);
                                    if(m.vx === 0){
                                        m.vx = 1;   
                                    }
                                    m.vy=random(0,3);
                                    if(m.vy === 0){
                                        m.vy = 1;   
                                    }
                                }
                            }
                            if(testFrame2 >= 700){
                                yggAttack = "spores";
                                testFrame2 = 0;
                            }
                        }
                        if(yggAttack === "spores"){
                            if(testFrame2 >= 140 && testFrame2 < 200) {
                                textSize(120);
                                fill(158, 119, 0);
                                text("!",e.x-30,e.y+e.mon.height/2+50); 
                            }
                            if(testFrame2 === 200) {
                                var m = addMissile(e.x+30,e.y+80,5,25,0,0,1,0);
                                m.explode = true;
                                m.dist = 50;
                                m.vx=-3;
                                m.vy=1.5;
                            }
                            if(testFrame2 >= 700){
                                yggAttack = "poison stream";
                                testFrame2 = 0;
                            }
                        }
                    }else{
                        e.x = 3000;   
                    }
                }
            }
        }
        if(level === "B9"){
            //bonus 9
            if(!wave1){
                if(es.length === 1){
                    wave1 = true;
                    testFrame2 = 0;
                    HP+=500;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=1000;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave2 && text1){
                if(es.length === 1){
                    wave2 = true;
                    testFrame2 = 0;
                   HP+=500;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=1000;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave3 && text2){
                if(es.length === 1){
                    wave3 = true;
                    testFrame2 = 0;
                    HP+=500;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=1000;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave4 && text3){
                if(es.length === 1){
                    wave4 = true;
                    testFrame2 = 0;
                   HP+=500;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=1000;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave5 && text4){
                if(es.length === 1){
                    wave5 = true;
                    testFrame2 = 0;
                   HP+=500;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=1000;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(!wave6 && text5){
                if(es.length === 1){
                    wave6 = true;
                    testFrame2 = 0;
                   HP+=500;
                    if(HP>maxHP){
                        HP=maxHP;   
                    }
                    MP+=1000;
                    if(MP>maxMP*2){
                        MP=maxMP*2;   
                    }
                }
            }
            if(text6){
                if(es.length === 1){
                    level = "B10";
                    StartLevel();
                }
            }
            if(testFrame2 < 60 && wave1 && !wave2){
                textSize(120);
                fill(166, 0, 0);
                text("!",180,180);
            }
            if(testFrame2 === 60 && wave1 && !wave2){
                text1 = true;
                addMonster(170,110,monsters.demon);
            }
            if(testFrame2 < 60 && wave2 && !wave3){
                textSize(120);
                fill(72, 255, 0);
                text("!",180,180);
            }
            if(testFrame2 === 60 && wave2 && !wave3){
                text2 = true;
                addMonster(170,110,monsters.reactor);
            }
            if(testFrame2 < 60 && wave3 && !wave4){
                textSize(120);
                fill(166, 0, 0);
                text("!",180,180);
                text("!",40,250);
                text("!",340,250);  
            }
                
            if(testFrame2 === 60 && wave3 && !wave4){
                text3 = true;
                addMonster(170,110,monsters.bodySnatcher);
                addMonster(330,180,monsters.wrathHound);
                addMonster(30,180,monsters.wrathHound);
            }
            if(testFrame2 < 60 && wave4 && !wave5){
                textSize(120);
                fill(166, 0, 0);
                text("!",180,180);
                text("!",40,250);
                text("!",340,250); 
            }
            if(testFrame2 === 60 && wave4 && !wave5){
                text4 = true;
                addMonster(170,110,monsters.bodySnatcher);
                addMonster(330,180,monsters.bodySnatcher);
                addMonster(30,180,monsters.bodySnatcher);
            }
            if(testFrame2 < 60 && wave5 && !wave6){
                textSize(120);
                fill(166, 0, 0);
                text("!",180,180);
            }
            if(testFrame2 === 60 && wave5 && !wave6){
                text5 = true;
                addMonster(170,110,monsters.necromancer);
            }
            if(testFrame2 < 60 && wave6 && !wave7){
                textSize(120);
                fill(166, 0, 0);
                text("!",100,180);
                text("!",280,180); 
            }
            if(testFrame2 === 60 && wave6 && !wave7){
                text6 = true;
                addMonster(90,110,monsters.necromancer);
                addMonster(270,110,monsters.necromancer);
            }
        }
        if(level === "B10"){
        //bonus 10
            for (var i = 0; i<es.length; i++){
                var e = es[i];
                if(e.mon.name === "dedalotII"){
                    dying = true;
                    if(!blobsalotText){
                        testFrame2 = 0;
                        texts = [];
                        addText(frame,"WHAT!                 ",5,e.x-120,e.y,100,0,255,0);
                        addText(frame+250,"This is really getting pathetic...                 ",5,e.x-120,e.y,100,0,255,0);
                        addText(frame+650,"However, this is not the last of me!                 ",5,e.x-120,e.y,100,0,255,0);
                        addText(frame+1050,"I'm sure Arch Blobomancer will resurrect me again.                  ",5,e.x-120,e.y,100,0,255,0);
                        addText(frame+1500,"Death is but an illusion to us...                 ",5,e.x-120,e.y,100,0,255,0);
                        addText(frame+1900,"Until next time dragon!                 ",5,e.x-120,e.y,100,0,255,0);
                        blobsalotText = true;
                    }
                    if(testFrame2 >= 2250){
                        es.splice(i,1);
                        dying = false;
                        testFrame = 123123123123;
                        if(es.length === 0){
                            //idk what to put here yet
                        }
                    }
                }
                if(e.mon.name === "sirBlobsalotII"){
                    //sirBlobsalotII fight
                    if(!blobsalotOut){
                        blobsalotOut = true;   
                    }
                    if(testFrame2 === 500 && weapon === "sword and shield"){
                        charge = true;
                    }
                    if(testFrame2 === 250 && weapon === "greatsword"){
                        spin = 0;
                    }
                    if(testFrame2 === 310 && weapon === "greatsword"){
                        spin = 1;
                        e.mon.speed*=3;
                        e.mon.damage*=3;
                    }
                    if(testFrame2 === 600 && weapon === "greatsword"){
                        spin = -1;
                        e.mon.speed/=3;
                        e.mon.damage/=3;
                        testFrame2 = 0;
                        weapon = "spear";
                        charged = 0;
                        charging = 0;
                    }
                    if(testFrame2 === 250 && weapon === "spear"){
                        charge = true;
                    }

                    if(weapon === "axe"){
                        if(swipe>=50 && swipe<100){
                            fill(166, 0, 0);
                            if((py>=e.y-20&&py<=e.y+80)||(py+ph>=e.y-20&&py+ph<=e.y+80)){
                                if(px<e.x){
                                    //rect(e.x-130,e.y-20,130,100);
                                    arc(e.x,e.y+30,300,100,90,270);
                                }else{
                                    //rect(e.x+60,e.y-20,130,100);
                                    arc(e.x+60,e.y+30,300,100,-90,90);
                                }
                            }else{
                                if(py<e.y){
                                    //rect(e.x-60,e.y-90,180,70);
                                    arc(e.x+30,e.y-20,200,200,-180,0);
                                }else{
                                    //rect(e.x-60,e.y+80,180,70);
                                    arc(e.x+30,e.y+80,200,200,0,180);
                                }
                            }
                        }
                        if(swipe>=100){
                            swipe=0;
                            fill(192,192,192);
                            if((py>=e.y-20&&py<=e.y+80)||(py+ph>=e.y-20&&py+ph<=e.y+80)){
                                if(px<e.x){
                                    //rect(e.x-130,e.y-20,130,100);
                                    arc(e.x,e.y+30,300,100,90,270);
                                    if(overlap(px,py,pw,ph,e.x-130,e.y-20,130,100)){
                                        HP-=300;   
                                    }
                                    if(e.hp<=e.mon.maxHp/2){
                                        var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = -10;
                                        m.vy = 0;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = -10;
                                        m.vy = 5;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = -10;
                                        m.vy = -5;
                                    }
                                }else{
                                    //rect(e.x+60,e.y-20,130,100);
                                    arc(e.x+60,e.y+30,300,100,-90,90);
                                    if(overlap(px,py,pw,ph,e.x+60,e.y-20,130,100)){
                                        HP-=300;   
                                    }
                                    if(e.hp<=e.mon.maxHp/2){
                                        var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 10;
                                        m.vy = 0;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 10;
                                        m.vy = 5;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 10;
                                        m.vy = -5;
                                    }
                                }
                            }else{
                                if(py<e.y){
                                    //rect(e.x-60,e.y-90,180,70);
                                    arc(e.x+30,e.y-20,200,200,-180,0);
                                    if(overlap(px,py,pw,ph,e.x-60,e.y-90,180,70)){
                                        HP-=300;   
                                    }
                                    if(e.hp<=e.mon.maxHp/2){
                                        var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 0;
                                        m.vy = -10;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 5;
                                        m.vy = -10;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = -5;
                                        m.vy = -10;
                                    }
                                }else{
                                    //rect(e.x-60,e.y+80,180,70);
                                    arc(e.x+30,e.y+80,200,200,0,180);
                                    if(overlap(px,py,pw,ph,e.x-60,e.y+80,180,70)){
                                        HP-=300;   
                                    }
                                    if(e.hp<=e.mon.maxHp/2){
                                        var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 0;
                                        m.vy = 10;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = 5;
                                        m.vy = 10;
                                        m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                                        m.vx = -5;
                                        m.vy = 10;
                                    }
                                }
                            }
                            if(swiped >= 6){
                                swiped = 0;
                                swipe = 0;
                                weapon = "hammer";
                                testFrame2 = 0;
                            }else{
                                swiped++;   
                            }
                        }
                    }
                    if(testFrame2 === 300 && weapon === "hammer"){
                        pound = 0;   
                    }
                    if(testFrame2 === 420 && weapon === "hammer"){
                        pound = -1;
                        testFrame2 = 0;
                        fill(192,192,192);
                        ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,350,350);
                        if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 325)) {
                            HP -= 300;
                            stun = 120;
                            playerPoundedFrame = frame;
                            playerPoundedEnemy = e;
                        }
                        if(e.hp<=e.mon.maxHp/2){
                            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 10;
                            m.vy = 10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -10;
                            m.vy = -10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 10;
                            m.vy = -10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -10;
                            m.vy = 10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 0;
                            m.vy = 10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 0;
                            m.vy = -10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 10;
                            m.vy = 0;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -10;
                            m.vy = 0;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -10;
                            m.vy = -5;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -10;
                            m.vy = 5;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 10;
                            m.vy = -5;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 10;
                            m.vy = 5;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -5;
                            m.vy = -10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 5;
                            m.vy = -10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = 5;
                            m.vy = 10;
                            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,25,192,192,192);
                            m.vx = -5;
                            m.vy = 10;
                        }
                        weapon = "flail";   
                    }
                    if(charge){
                        charging ++;
                    }   
                }
                if(e.mon.name === "clone"){
                    //goofy clone stuf
                    if(lichAttack !== "energy surge"){
                        if(frame%110 === 109) {
                            addMissile(e.x,e.y, 5, 20, 0, 145, 0, 131);
                        }
                    }
                    if(lichAttack === "soul drain" && testFrame3>=59){
                        if(soulAttack >= 100) {
                            addMissile(e.x,e.y, 15, 10, 1, 0, 0, 0);
                        }
                    }
                }
                if(e.mon.name === "ringClone"){
                    if(e.cloneFire >= 45){
                        e.hp = 0;   
                    }
                }
                if(e.mon.name === "confuseClone"){
                    if(e.cloneFire >= 120){
                        e.hp = 0;   
                    }
                }
                if(e.mon.name === "dedlich"){
                    dying = true;
                    if(!lichText){
                        testFrame3 = 0;
                        texts = [];
                        addText(frame,"NOOOOOO!                 ",5,e.x-120,e.y,100,0, 166, 255);
                        addText(frame+250,"YOU FOOL! THIS IS NOT THE END OF ME!                 ",5,e.x-120,e.y,100,0, 166, 255);
                        addText(frame+650,"I AM IMMORTAL! THIS WILL ONLY DELAY THE INEVITABLE.                 ",5,e.x-120,e.y,100,0, 166, 255);
                        addText(frame+1100,"I WILL BE BACK! MARK MY WORDS!                 ",5,e.x-120,e.y,100,0, 166, 255);
                        lichText = true;
                    }
                    if(testFrame3 >= 1500){
                        es.splice(i,1);
                        dying = false;
                        testFrame = 123123123123;
                        if(es.length === 0){
                            //idk what to put here yet
                        }
                    }
                }
                if(e.mon.name === "archBlobolich"){
                    //archblobolich fight
                    if(!blobolichOut){
                        e.tp = 100;
                        blobolichOut = true; 
                        if(halfHealth){
                            addMonster( floor(random(10,240)), floor(random(80,320)), monsters.clone);
                            addMonster( floor(random(10,240)), floor(random(80,320)), monsters.clone);
                            addMonster( floor(random(10,240)), floor(random(80,320)), monsters.clone);
                        }else{
                            addMonster( floor(random(10,240)), floor(random(80,320)), monsters.clone);
                        }
                    }
                    mirageHP = e.hp;
                    if(!halfHealth && e.hp <= e.mon.maxHp/2){
                        halfHealth = true;
                        addMonster( floor(random(10,240)), floor(random(80,320)), monsters.clone);
                        addMonster( floor(random(10,240)), floor(random(80,320)), monsters.clone);
                    }
                    if(lichAttack !== "energy surge"){
                        if(frame%110 === 109) {
                            addMissile(e.x,e.y, 5, 20, 5, 145, 0, 131);
                        }
                    }
                    if(lichAttack === "illusion ring"){
                        if(halfHealth){
                            if(testFrame3 === 310){
                                addMonster(px-65,py-65,monsters.ringClone); 
                                addMonster(px+65,py-65,monsters.ringClone); 
                                addMonster(px-65,py+65,monsters.ringClone); 
                                addMonster(px+65,py+65,monsters.ringClone);
                            }
                            if(testFrame3 === 340){
                                addMonster(px-65,py-65,monsters.ringClone); 
                                addMonster(px+65,py-65,monsters.ringClone); 
                                addMonster(px-65,py+65,monsters.ringClone); 
                                addMonster(px+65,py+65,monsters.ringClone);
                            }
                            if(testFrame3 === 370){
                                addMonster(px-65,py-65,monsters.ringClone); 
                                addMonster(px+65,py-65,monsters.ringClone); 
                                addMonster(px-65,py+65,monsters.ringClone); 
                                addMonster(px+65,py+65,monsters.ringClone);
                            }
                        }
                        if(testFrame3 === 400){
                            addMonster(px-65,py-65,monsters.ringClone); 
                            addMonster(px+65,py-65,monsters.ringClone); 
                            addMonster(px-65,py+65,monsters.ringClone); 
                            addMonster(px+65,py+65,monsters.ringClone);
                            lichAttack = "confuse";
                            testFrame3 = 0;
                        }
                    }
                    if(lichAttack === "confuse"){
                        if(testFrame3 === 400){
                            addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone); 
                            addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone); 
                            addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone);
                            if(halfHealth){
                                addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone); 
                                addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone); 
                                addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone);
                                addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone); 
                                addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone); 
                                addMonster(floor(random(10,240)), floor(random(80,320)),monsters.confuseClone);
                            }
                        }
                        if(testFrame3 === 500){
                            lichAttack = "annihilating darkness";
                            testFrame3 = 0;
                            soulLink = 0;   
                        }
                    }
                    if(lichAttack === "soul drain"){
                        if(testFrame3>=60){
                            if(soulAttack >= 100) {
                                addMissile(e.x,e.y, 15, 10, 1, 0, 0, 1);
                                soulAttack = 0;
                            }else{
                                soulAttack++;   
                            }
                            if(halfHealth){
                                if(frame%15 === 14) {
                                    MP-=soulLink*10;
                                    if(MP<0){
                                        MP=0;   
                                    }
                                    e.hp+=soulLink*3;
                                    if(e.hp>=e.mon.maxHp){
                                        e.hp = e.mon.maxHp;   
                                    }
                                }
                            }else{
                                if(frame%20 === 19) {
                                    MP-=soulLink*10;
                                    if(MP<0){
                                        MP=0;   
                                    }
                                    e.hp+=soulLink*3;
                                    if(e.hp>=e.mon.maxHp){
                                        e.hp = e.mon.maxHp;   
                                    }
                                }
                            }
                            if(testFrame3 >= 1000){
                                lichAttack = "meteor swarm";   
                                testFrame3 = 0;
                                soulLink = 0;
                            }
                        }else{
                            textSize(120);
                            fill(0, 0, 0);
                            text("!",px-5+pw/3,py+ph+15);
                            textSize(12);
                        }
                    }
                    if(lichAttack === "annihilating darkness"){
                        dark+=3;
                        if(halfHealth){
                            dark+=3;   
                        }
                        if(dark >= 1000){
                            dark = 1000;   
                        }
                        if(testFrame3 === 400){
                            lichAttack = "soul drain"; 
                            testFrame3 = 0;
                            dark = 0;
                        }
                    }
                    if(lichAttack === "meteor swarm"){
                        if(testFrame3 === 1){
                            metx = floor(random(10,240));
                            mety = floor(random(80,320));
                            metx2 = floor(random(10,240));
                            mety2 = floor(random(80,320));
                            metx3 = floor(random(10,240));
                            mety3 = floor(random(80,320));
                        }
                        if(testFrame3 >= 30 && testFrame3 <105){
                            metShadow+=3.33;
                            fill(0,0,0,150);
                            ellipse(metx,mety,metShadow,metShadow);
                        }
                        if(testFrame3 === 105){
                            fill(255, 0, 0);
                            ellipse(metx,mety,250,250);
                            if(overlapCircle(px+pw/2, py+ph/2, metx, mety, pw, 250)){
                                HP -= 450;
                            }
                            if(halfHealth){
                                var m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 10;m.vy = 10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = -10;m.vy = -10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 10;m.vy = -10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = -10;m.vy = 10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 0;m.vy = 10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 0;m.vy = -10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 10;m.vy = 0;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = -10;m.vy = 0;//horrendous code but it's more compact
                            }
                            metShadow = 0;
                            metx = floor(random(10,240));
                            mety = floor(random(80,320));
                        }
                        if(testFrame3 >= 90 && testFrame3 <165){
                            metShadow2+=3.33;
                            fill(0,0,0,150);
                            ellipse(metx2,mety2,metShadow2,metShadow2);
                        }
                        if(testFrame3 === 165){
                            fill(255, 0, 0);
                            ellipse(metx2,mety2,250,250);
                            if(overlapCircle(px+pw/2, py+ph/2, metx2, mety2, pw, 250)){
                                HP -= 450;
                            }
                            if(halfHealth){
                                var m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 10;m.vy = 10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = -10;m.vy = -10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 10;m.vy = -10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = -10;m.vy = 10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 0;m.vy = 10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 0;m.vy = -10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 10;m.vy = 0;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = -10;m.vy = 0;
                            }
                            metShadow2 = 0;
                            metx2 = floor(random(10,240));
                            mety2 = floor(random(80,320));
                        }
                        if(testFrame3 >= 150 && testFrame3 <225){
                            metShadow3+=3.33;
                            fill(0,0,0,150);
                            ellipse(metx3,mety3,metShadow3,metShadow3);
                        }
                        if(testFrame3 === 225){
                            fill(255, 0, 0);
                            ellipse(metx3,mety3,250,250);
                            if(overlapCircle(px+pw/2, py+ph/2, metx3, mety3, pw, 250)){
                                HP -= 450;
                            }
                            if(halfHealth){
                                var m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = 10;m.vy = 10;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = -10;m.vy = -10;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = 10;m.vy = -10;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = -10;m.vy = 10;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = 0;m.vy = 10;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = 0;m.vy = -10;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = 10;m.vy = 0;m = addMissile(metx3,mety3,10,15,25,99,54,0);m.vx = -10;m.vy = 0;
                            }
                            metShadow3 = 0;
                            metx3 = floor(random(10,240));
                            mety3 = floor(random(80,320));
                        }
                        if(testFrame3 >= 210 && testFrame3 <285){
                            metShadow+=3.33;
                            fill(0,0,0,150);
                            ellipse(metx,mety,metShadow,metShadow);
                        }
                        if(testFrame3 === 285){
                            fill(255, 0, 0);
                            ellipse(metx,mety,250,250);
                            if(overlapCircle(px+pw/2, py+ph/2, metx, mety, pw, 250)){
                                HP -= 450;
                            }
                            if(halfHealth){
                                var m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 10;m.vy = 10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = -10;m.vy = -10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 10;m.vy = -10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = -10;m.vy = 10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 0;m.vy = 10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 0;m.vy = -10;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = 10;m.vy = 0;m = addMissile(metx,mety,10,15,25,99,54,0);m.vx = -10;m.vy = 0;
                            }
                            metShadow = 0;
                            metx = floor(random(10,240));
                            mety = floor(random(80,320));
                        }
                        if(testFrame3 >= 270 && testFrame3 < 345){
                            metShadow2+=3.33;
                            fill(0,0,0,150);
                            ellipse(metx2,mety2,metShadow2,metShadow2);
                        }
                        if(testFrame3 === 345){
                            fill(255, 0, 0);
                            ellipse(metx2,mety2,250,250);
                            if(overlapCircle(px+pw/2, py+ph/2, metx2, mety2, pw, 250)){
                                HP -= 450;
                            }
                            if(halfHealth){
                                var m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 10;m.vy = 10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = -10;m.vy = -10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 10;m.vy = -10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = -10;m.vy = 10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 0;m.vy = 10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 0;m.vy = -10;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = 10;m.vy = 0;m = addMissile(metx2,mety2,10,15,25,99,54,0);m.vx = -10;m.vy = 0;
                            }
                            metShadow2 = 0;
                            metx2 = floor(random(10,240));
                            mety2 = floor(random(80,320));
                        }
                        if(testFrame3 === 346){
                            if(halfHealth){
                                lichAttack = "energy surge";
                            }else{
                                lichAttack = "illusion ring";
                            }
                            testFrame3 = 0;
                            metShadow = 0;
                            metShadow2 = 0;
                            metShadow3 = 0;
                        }
                    }
                    if(lichAttack === "energy surge"){
                        e.tp = 0;
                        if(testFrame3 >= 60){
                            e.x=150;
                            e.y=200;
                        }
                        if(testFrame3 === 150){
                            var rundom = floor(random(0,3));
                            if(rundom === 0){
                                addText(frame,"AHAHAHAHAHAHAHA!    ", 5, 200, 230, 100, 0, 166, 255);   
                            }else if(rundom === 1){
                                addText(frame,"Die you fool!       ", 5, 200, 230, 100, 0, 166, 255);   
                            }else if(rundom === 2){
                                addText(frame,"Witness my power!    ", 5, 200, 230, 100, 0, 166, 255);   
                            }
                        }
                        if(testFrame3 >= 150){
                            rotation+=1;
                            if(frame%5 === 4){
                                var m = addMissile(e.x,e.y,10,15,30,255, 0, 0);
                                m.vx = cos(rotation+90)*3;
                                m.vy = sin(rotation+90)*3;
                                var m = addMissile(e.x,e.y,10,15,30,255,204, 0);
                                m.confuse = true;
                                m.vx = cos(rotation-90)*3;
                                m.vy = sin(rotation-90)*3;
                                var m = addMissile(e.x,e.y,10,15,15,78, 235, 250);
                                m.freeze = true;
                                m.vx = cos(rotation)*3;
                                m.vy = sin(rotation)*3;
                                var m = addMissile(e.x,e.y,10,15,15,232, 139, 8);
                                m.slow = true;
                                m.vx = cos(rotation)*3;
                                m.vy = -sin(rotation)*3;
                                var m = addMissile(e.x,e.y,10,15,15,79, 0, 158);
                                m.poison = true;
                                m.vx = -cos(rotation)*3;
                                m.vy = sin(rotation)*3;
                                var m = addMissile(e.x,e.y,10,15,15,0, 0, 0);
                                m.decay = true;
                                m.vx = -cos(rotation)*3;
                                m.vy = -sin(rotation)*3;
                            }
                        }
                        if(testFrame3 === 300){
                            e.tp = 100;
                            lichAttack = "illusion ring";   
                            testFrame3 = 0;
                        }   
                    }
                }
                if(e.mon.name === "adamantFortress") {
                    if(blobsalot === "dead" && blobolich === "dead" && es.length<=2){
                        if(!castleDed){
                            castleDed = 0;
                            testFrame = 0;
                        }
                        whiteAlpha++;
                        castleDed++;
                        if(castleDed >= 255){
                            level = "the end";
                            StartLevel();
                        }
                    }
                    if(!text1){
                    addText(frame+50,"HAHAHAHAHAHAHAHHA!                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+400,"YOU WEREN'T EXPECTING ME AGAIN WERE YOU?                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+900,"You don't know who I am?                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+1250,"I'm Arch Blobomancer! What did you expect?                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+1750,"I literally told you I was going to revive myself!                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+2300,"What, was it the visual change?                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+2700,"I came back from the dead! Of course I would look different!                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+3250,"Pfft, at least you got to keep your color. I look pale and lifeless!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+3900,"Uh that's because you are pale and lifeless.                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+4400,"WHAT! YOU MEAN I'M GOING TO LOOK LIKE THIS FOREVER?!                 ", 5, 200, 150, 100, 0, 255, 0);
                    addText(frame+4950,"Hey, it's the best I could do.                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+5350,"Anyways, enough chit-chat. We're here to avenge our Lord!                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+5850,"Our castle has plenty of new improvements! We even got new troops!                 ", 5, 200, 250, 100, 0, 166, 255);
                    addText(frame+6500,"READY UP THE ARTILLERY!                 ", 5, 200, 250, 100, 0, 166, 255);
                    text1 = true;
                    }
                    if(!text2 && testFrame >= 6850){
                        testFrame = -200;
                        texts = [];
                        addText(frame,"Fire!                 ", 5, 200, 150, 100, 0, 255, 0);
                        text3 = true;
                        ballistaWait = true;
                        testFrame = 0;
                        text2 = true;
                        skipB10 = true;
                        lastCataFrame = frame;
                    }
                    if(!text4 && testFrame >= 0 && ballistaWait){
                        testFrame = 0;
                        addText(frame,"Alright, no more messing around.                 ", 5, 200, 250, 100, 0, 166, 255);
                        addText(frame+400,"FIRST WAVE, OUT!                 ", 5, 200, 250, 100, 0, 166, 255);
                        text4 = true;
                    }
                        if(text4 && testFrame>=700 && !wave1){
                            testFrame = 0;
                            HP+=500;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=1000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 240, 59, monsters.blob);
                            addMonster( 250, 110, monsters.miniBlob);
                            addMonster( 240, 131, monsters.rainbowBlob);
                            addMonster( 240, 275, monsters.rainbowBlob);
                            addMonster( 250, 326, monsters.miniBlob);
                            addMonster( 240, 347, monsters.blob);
                            wave1 = true;
                        }
                        if(wave1 && !boss1){
                            if(es.length === 2){
                                boss1 = true;
                                testFrame = 0;
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                addMonster( 240, 203, monsters.sirBlobsalotII);
                                addText(frame,"HAHA! MY TURN TO FIGHT!                 ", 5, 200, 180, 100, 0, 255, 0);
                            }
                        }
                        if(!text5 && (testFrame >= 5000 || blobsalotDmg >= 1500) && boss1){
                            blobsalotOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "sirBlobsalotII"){
                                    swipe = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobsalotDmg > 1500){
                                        e2.hp += blobsalotDmg-1500;
                                    }
                                    if(spin === 1){
                                        spin = -1;
                                        e2.mon.speed/=3;
                                        e2.mon.damage/=3;   
                                    }
                                    blobsalotDmg = 0;
                                    blobsalot = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                }
                            }
                            testFrame = 0;
                            addText(frame,"Ahem, MECHS, OUT!                 ", 5, 200, 250, 100, 0, 166, 255);
                            text5 = true;
                        }
                        if(text5 && testFrame>=400 && !wave2){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 240, 59, monsters.robot);
                            addMonster( 240, 131, monsters.robot);
                            addMonster( 250, 182, monsters.elBlob);
                            addMonster( 240, 203, monsters.ULTRAMech);
                            addMonster( 250, 254, monsters.elBlob);
                            addMonster( 240, 275, monsters.robot);
                            addMonster( 240, 347, monsters.robot);
                            wave2 = true;
                        }
                        if(wave2 && !boss2){
                            if(es.length === 2){
                                boss2 = true;
                                testFrame = 0;                                    
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                addMonster( 240, 203, monsters.archBlobolich);
                                addText(frame,"I'll deal with the dragon                 ", 5, 200, 180, 100, 0, 166, 255);
                            }
                        }
                        if(!text6 && (testFrame >= 3000 || blobolichDmg >= 2500) && boss2){
                            testFrame = 0;
                            blobolichOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "archBlobolich"){
                                    dark = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 1500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobolichDmg > 2500){
                                        e2.hp += blobolichDmg-2500;
                                    }
                                    blobolichDmg = 0;
                                    blobolich = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    }
                                    j-=1;
                                }
                                if(e2.mon.name === "clone"){
                                    es.splice(j,1);   
                                    j-=1;
                                }
                            }
                            addText(frame,"Bring out the living tornadoes!                 ", 5, 200, 150, 100, 0, 255, 0);
                            text6 = true;
                        }
                        if(text6 && testFrame>=400 && !wave3){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 185, 71, monsters.livingTornado);
                            addMonster( 220, 203, monsters.cloud);
                            addMonster( 185, 285, monsters.livingTornado);
                            wave3 = true;
                        }
                        if(wave3 && !boss3){
                            if(es.length === 2){
                                boss3 = true;
                                testFrame = 0;
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobsalot);
                                addText(frame,"HERE I COME!                 ", 5, 200, 180, 100, 0, 255, 0);
                            }
                        }
                        if(!text7 && (testFrame >= 5000 || blobsalotDmg >= 1500) && boss3){
                            blobsalotOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "sirBlobsalotII"){
                                    swipe = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobsalotDmg > 1500){
                                        e2.hp += blobsalotDmg-1500;
                                    }
                                    if(spin === 1){
                                        spin = -1;
                                        e2.mon.speed/=3;
                                        e2.mon.damage/=3;   
                                    }
                                    blobsalotDmg = 0;
                                    blobsalot = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                }
                            }
                            testFrame = 0;
                            addText(frame,"Alright, send out the blizzard!                 ", 5, 200, 250, 100, 0, 166, 255);
                            text7 = true;
                        }
                        if(text7 && testFrame>=400 && !wave4){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 200, 71, monsters.mist);
                            addMonster( 185, 183, monsters.livingBlizzard);
                            addMonster( 200, 325, monsters.mist);
                            wave4 = true;
                        }
                        if(wave4 && !boss4){
                            if(es.length === 2){
                                boss4 = true;
                                testFrame = 0;                                    
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobolich);
                                addText(frame,"Ready for more?                 ", 5, 200, 180, 100, 0, 166, 255);
                            }
                        }
                        if(!text8 && (testFrame >= 3000 || blobolichDmg >= 2500) && boss4){
                            testFrame = 0;
                            blobolichOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "archBlobolich"){
                                    dark = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 1500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobolichDmg > 2500){
                                        e2.hp += blobolichDmg-2500;
                                    }
                                    blobolichDmg = 0;
                                    blobolich = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                    j-=1;
                                }
                                if(e2.mon.name === "clone"){
                                    es.splice(j,1);   
                                    j-=1;
                                }
                            }
                            addText(frame,"Here come the sand squids!                 ", 5, 200, 150, 100, 0, 255, 0);
                            text8 = true;
                        }
                        if(text8 && testFrame>=400 && !wave5){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 225, 71, monsters.mudBlob);
                            addMonster( 225, 155, monsters.sandSquid);
                            addMonster( 225, 225, monsters.sandSquid);
                            addMonster( 225, 325, monsters.mudBlob);
                            addMonster( 280, 225, monsters.scarab);
                            addMonster( 280, 210, monsters.scarab);
                            addMonster( 280, 195, monsters.scarab);
                            addMonster( 280, 180, monsters.scarab);
                            addMonster( 280, 165, monsters.scarab);
                            addMonster( 280, 240, monsters.scarab);
                            addMonster( 280, 255, monsters.scarab);
                            addMonster( 280, 270, monsters.scarab);
                            addMonster( 280, 150, monsters.scarab);
                            wave5 = true;
                        }
                        if(wave5 && !boss5){
                            if(es.length === 2){
                                boss5 = true;
                                testFrame = 0;
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobsalot);
                            }
                        }
                        if(!text9 && (testFrame >= 5000||blobsalotDmg>=1500) && boss5){
                            blobsalotOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "sirBlobsalotII"){
                                    swipe = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobsalotDmg > 1500){
                                        e2.hp += blobsalotDmg-1500;
                                    }
                                    if(spin === 1){
                                        spin = -1;
                                        e2.mon.speed/=3;
                                        e2.mon.damage/=3;   
                                    }
                                    blobsalotDmg = 0;
                                    blobsalot = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                }
                            }
                            if(es.length <= 2){
                                testFrame = 0;
                                addText(frame,"Alright, sarcophagus time!                 ", 5, 200, 250, 100, 0, 166, 255);
                                text9 = true;
                            }
                        }
                        if(text9 && testFrame>=400 && !wave6){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 225, 71, monsters.mummy);
                            addMonster( 225, 173, monsters.royalSarcophagus);
                            addMonster( 225, 325, monsters.mummy);
                            wave6 = true;
                        }
                        if(wave6 && !boss6){
                            if(es.length === 2){
                                boss6 = true;
                                testFrame = 0;                                    
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobolich);
                            }
                        }
                        if(!text10 && (testFrame >= 3000 || blobolichDmg >= 2500) && boss6){
                            testFrame = 0;
                            blobolichOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "archBlobolich"){
                                    dark = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 1500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobolichDmg > 2500){
                                        e2.hp += blobolichDmg-2500;
                                    }
                                    blobolichDmg = 0;
                                    blobolich = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                    j-=1;
                                }
                                if(e2.mon.name === "clone"){
                                    es.splice(j,1);   
                                    j-=1;
                                }
                            }
                            if(es.length <= 2){
                                addText(frame,"BRING OUT THE IRONWEED HYDRA!                 ", 5, 200, 150, 100, 0, 255, 0);
                                text10 = true;
                            }
                        }
                        if(text10 && testFrame>=400 && !wave7){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 235, 193, monsters.ironweedHydra1);
                            addMonster( 235, 193, monsters.ironweedHydra2);
                            addMonster( 235, 193, monsters.ironweedHydra3);
                            wave7 = true;
                        }
                        if(wave7 && !boss7){
                            if(es.length === 2){
                                boss7 = true;
                                testFrame = 0;
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobsalot);
                            }
                        }
                        if(!text11 && (testFrame >= 5000||blobsalotDmg>=1500) && boss7){
                            blobsalotOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "sirBlobsalotII"){
                                    swipe = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobsalotDmg > 1500){
                                        e2.hp += blobsalotDmg-1500;
                                    }
                                    if(spin === 1){
                                        spin = -1;
                                        e2.mon.speed/=3;
                                        e2.mon.damage/=3;   
                                    }
                                    blobsalotDmg = 0;
                                    blobsalot = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                }
                            }
                            if(es.length <= 2){
                                testFrame = 0;
                                addText(frame,"Alright! Bring out the poison bugs!                 ", 5, 200, 250, 100, 0, 166, 255);
                                text11 = true;
                            }
                        }
                        if(text11 && testFrame>=400 && !wave8){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 225, 71, monsters.vampireMosquito);
                            addMonster( 235, 193, monsters.nightshade);
                            addMonster( 225, 325, monsters.vampireMosquito);
                            addMonster( 280, 225, monsters.infestedMosquito);
                            addMonster( 280, 210, monsters.infestedMosquito);
                            addMonster( 280, 195, monsters.infestedMosquito);
                            addMonster( 280, 180, monsters.infestedMosquito);
                            addMonster( 280, 165, monsters.infestedMosquito);
                            addMonster( 280, 240, monsters.infestedMosquito);
                            addMonster( 280, 255, monsters.infestedMosquito);
                            addMonster( 280, 270, monsters.infestedMosquito);
                            addMonster( 280, 150, monsters.infestedMosquito);
                            wave8 = true;
                        }
                        if(wave8 && !boss8){
                            if(es.length === 2){
                                boss8 = true;
                                testFrame = 0;                                    
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobolich);
                            }
                        }
                        if(!text12 && (testFrame >= 3000 || blobolichDmg >= 2500) && boss8){
                            testFrame = 0;
                            blobolichOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "archBlobolich"){
                                    dark = 0;
                                    e2.x = 240;
                                    e2.y = 203;
                                    e2.hp += 1500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobolichDmg > 2500){
                                        e2.hp += blobolichDmg-2500;
                                    }
                                    blobolichDmg = 0;
                                    blobolich = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    } 
                                    j-=1;
                                }
                                if(e2.mon.name === "clone"){
                                    es.splice(j,1);   
                                    j-=1;
                                }
                            }
                            if(es.length <= 2){
                                addText(frame,"Out with the demon!                 ", 5, 200, 150, 100, 0, 255, 0);
                                text12 = true;
                            }
                        }
                        if(text12 && testFrame>=400 && !wave9){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 225, 71, monsters.wrathHound);
                            addMonster( 225, 125, monsters.lavaHound);
                            addMonster( 225, 173, monsters.demon);
                            addMonster( 225, 255, monsters.lavaHound);
                            addMonster( 225, 325, monsters.wrathHound);
                            wave9 = true;
                        }
                        if(wave9 && !boss9){
                            if(es.length === 2){
                                boss9 = true;
                                testFrame = 0;
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobsalot);
                            }
                        }
                        if(!text13 && (testFrame >= 5000||blobsalotDmg>=1500) && boss9 && blobolich !== "dead"){
                            blobsalotOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "sirBlobsalotII"){
                                    swipe = 0;
                                    e2.x = 240;
                                    e2.y = 153;
                                    e2.hp += 500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobsalotDmg > 1500){
                                        e2.hp += blobsalotDmg-1500;
                                    }
                                    if(spin === 1){
                                        spin = -1;
                                        e2.mon.speed/=3;
                                        e2.mon.damage/=3;   
                                    }
                                    blobsalotDmg = 0;
                                    blobsalot = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    }  
                                }
                            }
                            if(es.length <= 2){
                                testFrame = 0;
                                addText(frame,"AHAHA! NECROMANCERS! GO!                 ", 5, 190, 250, 110, 0, 166, 255);
                                text13 = true;
                            }
                        }
                        if(text13 && testFrame>=400 && !wave10){
                            testFrame = 0;
                            HP+=1000;
                            if(HP>maxHP){
                                HP=maxHP;   
                            }
                            MP+=2000;
                            if(MP>maxMP*2){
                                MP=maxMP*2;   
                            }
                            addMonster( 225, 71, monsters.necromancer);
                            addMonster( 225, 325, monsters.necromancer);
                            addMonster( 225, 171, monsters.necromancer);
                            addMonster( 225, 225, monsters.necromancer);
                            wave10 = true;
                        }
                        if(wave10 && !boss10){
                            if(es.length === 2){
                                boss10 = true;
                                testFrame = 0;                                    
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=250;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=500;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobolich);
                            }
                        }
                        if(!text14 && (testFrame >= 3000 || blobolichDmg >= 2500) && boss10 && blobsalot !== "dead"){
                            testFrame = 0;
                            blobolichOut = false;
                            for(var j = 0; j < es.length; j++){
                                var e2 = es[j];
                                if(e2.mon.name === "archBlobolich"){
                                    dark = 0;
                                    e2.x = 240;
                                    e2.y = 253;
                                    e2.hp += 1500;
                                    if(e2.hp>e2.mon.maxHp){
                                        e2.hp = e2.mon.maxHp;   
                                    }
                                    if(blobolichDmg > 2500){
                                        e2.hp += blobolichDmg-2500;
                                    }
                                    blobolichDmg = 0;
                                    blobolich = e2;
                                    if(e2.hp > 0){
                                        es.splice(j,1); 
                                    }  
                                    j-=1;
                                }
                                if(e2.mon.name === "clone"){
                                    es.splice(j,1);   
                                    j-=1;
                                }
                            }
                            if(es.length <= 2){
                                if(blobolich === "dead"){
                                    addText(frame,"You pesky dragon! I'm out of troops!                 ", 5, 200, 150, 100, 0, 255, 0);
                                    addText(frame+400,"I guess I'll have to fight by myself!                 ", 5, 200, 150, 100, 0, 255, 0);
                                    addText(frame+750,"Here I come!                 ",5, 200, 150, 100, 0, 255, 0);
                                }else{
                                    addText(frame,"Hmmmm we're out of troops...                 ", 5, 200, 150, 100, 0, 255, 0);
                                    addText(frame+400,"Well! Guess we'll have to fight by ourselves!                 ", 5, 200, 150, 100, 0, 255, 0);
                                    addText(frame+750,"Here we come!                 ", 5, 200, 250, 100, 0, 166, 255);
                                }
                                text14 = true;
                            }
                        }
                        if(text14 && testFrame >= 1000 &&!boss11){
                            if(es.length === 2){
                                boss11 = true;
                                testFrame = 0;
                                testFrame2 = 0;
                                testFrame3 = 0;
                                HP+=1000;
                                if(HP>maxHP){
                                    HP=maxHP;   
                                }
                                MP+=2000;
                                if(MP>maxMP*2){
                                    MP=maxMP*2;   
                                }
                                es.push(blobsalot);
                                es.push(blobolich);
                            }
                        }
                    if(castleDed === false && !dying){ 
                        if(frame+30 > lastThrowFrame + 200 && ballistaWait){
                            fill(166, 0, 0);
                            textSize(50);
                            if(!blobolichOut){
                                text("!",250,120);
                                text("!",250,370);
                            }
                            textSize(12);
                        }
                        if(frame > lastThrowFrame + 200 && ballistaWait) {
                            lastThrowFrame = frame;
                            if(!blobolichOut){
                                addMissile(300,100, 10, 20, 15, 189, 189, 189);
                                addMissile(300,350, 10, 20, 15, 189, 189, 189);
                            }
                        }
                        if(frame+60 === lastCataFrame +500 && ballistaWait){
                            catax = px+pw/2;
                            catay = py+ph/2;
                        }
                        if(frame+60 > lastCataFrame + 500 && ballistaWait){
                            fill(217, 217, 217);
                            textSize(120);
                            if(!blobolichOut || (lichAttack !== "energy surge" && lichAttack !== "meteor swarm")){
                                text("!",catax-15,catay+40);
                            }
                            textSize(12);
                        }
                        if(frame > lastCataFrame + 500 && ballistaWait) {
                            lastCataFrame = frame;
                            if(!blobolichOut || (lichAttack !== "energy surge" && lichAttack !== "meteor swarm")){
                                ellipse(catax,catay,200,200);
                                if(overlapCircle(px+pw/2, py+ph/2, catax, catay, pw, 200)) {
                                    HP -= 200; 
                                    Phurt = true;
                                }
                            }
                        }
                    }
                }   
            }
        }
        if(level === "the end") {
            if(testFrame2 === 1){
                if(dif === 1){
                    texts = [];
                    addText(frame+60,"Well done!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+360,"You have completed every single level!                 ", 5, 150, 200, 100, 0, 0, 0);
                        addText(frame+860,"Beating the game in normal mode is quite the feat!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1360,"The only thing left to do is to beat the game in hard mode!                  ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1930,"I will warn you, it is excruciatingly hard!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+2470,"There is also the dark lord's secret creation, but no one knows where it is.                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+3070,"Anyways! See you soon!                 ", 5, 150, 200, 100, 0, 0, 0);
                }
            }
            if(dif === 1){
                if(testFrame2 === 3420){
                    level = 0;
                }
            }
            if(testFrame2 === 1){
                if(dif === 0){
                    texts = [];
                    addText(frame+60,"Well done!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+360,"You have completed every single level!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+860,"Although, you've only beaten them on easy mode!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1360,"I suggest playing on normal mode now. It can change the dynamic of most bosses!                  ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1945,"I will warn you, it is much harder than you might be used to!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+2470,"There is also the dark lord's secret creation, but no one knows where it is.                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+3070,"Anyways! See you soon!                 ", 5, 150, 200, 100, 0, 0, 0);
                }
            }
            if(dif === 0){
                if(testFrame2 === 3420){
                    level = 0;
                }
            }
            if(testFrame2 === 1){
                if(dif === 4){
                    texts = [];
                    addText(frame+60,"Well done!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+360,"You have completed every single level!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+800,"Although, you've only beaten them on baby mode!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1300,"I suggest playing on at least easy mode now. You'll have to use every skill you've learned so far!                  ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+2000,"I will warn you, it might be harder than you are used to!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+2525,"There is also the dark lord's secret creation, but no one knows where it is.                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+3125,"Anyways! See you soon!                 ", 5, 150, 200, 100, 0, 0, 0);
                }
            }
            if(dif === 4){
                if(testFrame2 === 3475){
                    level = 0;
                }
            }
            if(testFrame2 === 1){
                if(dif === 2){
                    texts = [];
                    addText(frame+60,"Amazing job!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+360,"You have completed every single level! On hard mode!                 ", 5, 150, 200, 100, 0, 0, 0);
                        addText(frame+860,"You are probably the best player ever!                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1300,"There's not much left to do. Maybe try speedrunning the game!                  ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+1900,"There is also the dark lord's secret creation, but no one knows where it is.                 ", 5, 150, 200, 100, 0, 0, 0);
                    addText(frame+2530,"Anyways! See you soon!                 ", 5, 150, 200, 100, 0, 0, 0);
                }
            }
            if(dif === 2){
                if(testFrame2 === 2870){
                    level = 0;
                }
            }
        }
      
       //draw texts
    for (var i = 0; i < texts.length; i++){
        var t = texts[i];
        var c = (frame - t.startFrame)/t.speed;
        fill(t.r, t.g, t.b);
        if (c <= 0){
            continue;   
        }
        if (c > t.str.length + 20){
            continue;   
        }
        var s = t.str.slice(0, c);
        text(s, t.x, t.y, t.w, 99999);
    }
    fill(255, 255, 255);
       
      //move enemy
      grab = false;
        if(((py>=graby&&py<=graby+50)||(py+ph>=graby&&py+ph<=graby+50))&&(px<grabx+400)&&(level === "B2"||level === "B6")){
            if(!Pinvincible){
                if(level === "B2"){
                    grab = true;
                }
                Phurt = true; 
            }   
        }
      for(var i = 0; i < es.length; i++){
          var e = es[i];
          if(e.mon.name === "ringClone" || e.mon.name === "confuseClone"){
            e.cloneFire++;   
          }
          if(level === "???" && !talked && e.mon.name === "TRUE_DARKLORD" && frame >= 3200){
            if(texty < 20){
                texty += 0.5;   
            }
            if(texty > 20){
                texty = 20;   
            }
          }
          if(level === "???" && !talked && e.mon.name === "TRUE_DARKLORD" && frame >= 1300){
            if(e.y < 0){
                e.y+=0.2;
                Lhandy+=0.2;
                Rhandy+=0.2;
            }
            if(e.y > 0){
                e.y = 0;  
                Lhandy=-37;
                Rhandy=-37;
            }
          }
          if(level === "???" && talked && e.mon.name === "TRUE_DARKLORD"){
              if(e.y !== 0){
                e.y = 0;  
                Lhandy=-37;
                Rhandy=-37;
              }
            }
          if (e.stun > frame) {
            if(e.mon.name !== "elcloud" && e.mon.name !== "elBlob" && e.mon.name !== "ghostBlob" && e.mon.name!=="inkBlob" && e.mon.name !== "sirBlobsalot" && e.mon.name !== "sirBlobsalotII" && e.mon.name !== "archBlobolich" && e.mon.name !== "clone"){
            continue;
            }
          }
          if (e.freeze > frame) {
            if(e.mon.name !== "iceBlob" && e.mon.name !== "livIce" && e.mon.name !== "frostBeast"&& e.mon.name !== "sirBlobsalot" && e.mon.name !== "sirBlobsalotII" && e.mon.name !== "archBlobolich" && e.mon.name !== "clone"){
            continue;
            }
          }
          if(testFrame3 >= 60 && e.mon.name === "archBlobolich" && lichAttack === "energy surge"){
              continue;
          }
          if (e.mon.name === "fireBlob" || e.mon.name === "TfireBlob") {
          if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, firer)) {
                HP -= 1; 
                Phurt = true;
          }
          }
          if(e.mon.name === "elcloud") {
              if(pointInEllipse(px+pw/2,py+ph/2,e.x+e.mon.width/2,e.y+e.mon.height/2,e.mon.width*2,e.mon.height*2)){
                  if (stun < -240) {
                    stun = 90;
                  }
              }
          }
          if(e.mon.name === "livIce") {
              if(overlap(px,py,pw,ph,e.x,e.y,e.mon.width,e.mon.height)){
                  if (stun < -240) {
                    stun = 60;
                  }
              }
          }
          if(e.mon.name === "TelBlob") {
              if(overlap(px,py,pw,ph,e.x,e.y,e.mon.width,e.mon.height)){
                  if (stun < -240) {
                    stun = 60;
                  }
              }
          }
        if(e.mon.name === "queenCloud") {
            if(pointInEllipse(px+pw/2,py+ph/2,e.x+e.mon.width/2,e.y+e.mon.height/2,e.mon.width,e.mon.height)){ 
            HP -= 1;
            Phurt = true;
            }
        }
        if(e.mon.name === "queenThunderCloud") {
            if(py<e.y+e.mon.height){ 
            HP -= 3;
            Phurt = true;
            }
        }
        if(e.mon.name === "waterBlob") {
           if(frame%100 === 99) {
               addMissile(e.x,e.y, 5, 20, 2, 89, 166, 255);
           }
        }
        if(e.mon.name === "necromancer") {
            if(e.revive < 1000){
                e.revive++;
            }else{
                if(deadPool[0] !== undefined){
                    deadPool[0].hp = deadPool[0].mon.maxHp/2;
                    deadPool[0].bomb = 500;
                    deadPool[0].undead = true;
                    es.push(deadPool[0]);
                    deadPool.splice(0,1);
                    e.revive = 0;
                }
            }
            if(e.revive >800){
                if(deadPool[e.necronum] !== undefined){
                    textSize(120);
                    fill(133, 133, 133);
                    text("!",deadPool[e.necronum].x,deadPool[e.necronum].y);  
                }
            }
        }
        if(e.mon.name === "pharaoh") {
           if(frame%ceil(100/numPharaohs) === floor(99/numPharaohs)) {
               if(e.state === "attack"){
                   addMissile(e.x,e.y,10,15,30,255, 0, 0);
                   e.state = "freeze";
               }else if(e.state === "freeze"){
                   var m = addMissile(e.x,e.y,10,15,15,78, 235, 250);
                   m.freeze = true;
                   e.state = "slow";
               }else if(e.state === "slow"){
                   var m = addMissile(e.x,e.y,10,15,15,232, 139, 8);
                   m.slow = true;
                   e.state = "poison";
               }else if(e.state === "poison"){
                   var m = addMissile(e.x,e.y,10,15,15,79, 0, 158);
                   m.poison = true;
                   e.state = "decay";
               }else if(e.state === "decay"){
                   var m = addMissile(e.x,e.y,10,15,15,0, 0, 0);
                   m.decay = true;
                   e.state = "attack";
               }
           }
        }
      if(e.mon.name === "frozenDefender") {
           if(frame%100 === 99) {
               if(px>=e.x){
                    e.defense = "right";
                }else{
                    e.defense = "left";
                }
                if(e.hp>e.mon.maxHp){
                    e.hp = e.mon.maxHp;   
                }
           }
      }
      if(e.mon.name === "scarab"){
          e.sinkTime++;
            if(e.sinkTime >= e.scarabSink){
                e.x = 100000;
            }
            if(e.sinkTime >= e.scarabSink + 120){
                textSize(120);
                fill(160, 0, 163);
                text("!",px-5+pw/3,py+ph+15);
            }
            if(e.sinkTime >= e.scarabSink + 180){
                e.x = px;
                e.y = py;
                e.sinkTime = 0;
                e.scarabSink = random(100,500);
            }
      }
        if(e.mon.name === "tentacle"){
            e.x = tentx;
            e.y = tenty;
            e.hp -= tentDamaged;
            tentDamaged = 0;
        }
        if(e.mon.name === "tent"){
            e.x = tentx;
            e.y = tenty+50*e.tents; 
            if(tentDed){
                e.hp = 0;
            }
        }
      if(e.mon.name === "frozenWarrior"){
            if(testFrame2 >= 120){
                charge = true;
                charging+=2;
            }
      }
      if(e.mon.name === "livingBlizzard") {
           if(frame%180 === 179) {
               var numMissiles2 = 8;
                var angleOffset2 = random() * 360 / numMissiles2;
                for (var k = 0; k < numMissiles2; k++) {
                    var angle = k * 360 / numMissiles2 + angleOffset2;
                      var m = {
                          x: e.x + e.mon.width/2,
                          y: e.y + e.mon.height/2,
                          vx: 5 * cos(angle),
                          vy: 5 * sin(angle),
                          size: 20,
                          damage: 1,
                          red: 199,
                          green: 249,
                          blue: 255,
                          slow: true,
                      };
                    ms.push(m);
                }
           }
      }
      if(e.mon.name === "darkMage") {
           if(frame%50 === 49) {
               addMissile(e.x,e.y, 5, 12, 10, 89, 166, 255, true);
           }
      }
      if(e.mon.name === "necromancer") {
           if(frame%90 === 89) {
               addMissile(e.x,e.y, 5, 12, 10, 39, 116, 205, true);
           }
      }
      if(e.mon.name === "jungleBlob") {
           if(frame%150 === 149) {
               addMissile(e.x,e.y, 10, 10, 5, 46, 89, 1);
           }
      }
      if(e.mon.name === "mudBlob") {
           if(frame%150 === 149) {
               addMissile(e.x,e.y, 2, 20, 10, 82, 65, 2);
           }
      }
      if(e.mon.name === "ULTRAMech"){
          if(e.state === "attack"){
            e.burst += 1;
            if(e.burst>= 120){
                if(frame%5 === 4) {
                    addMissile(e.x+e.mon.width/2,e.y, 5, 15, 25, 201, 0, 0);
                }
            }
            if(e.burst>= 180){
                e.burst = 0;
            }
          }
          if(e.hp <= e.mon.maxHp/2){
                if(overlapCircle(e.x+e.mon.width/2, e.y+e.mon.height/2, px+pw/2, py+ph/2, pw, 300)) {
                    e.state = "defense";
                }else{
                    e.state = "attack";
                }
          }
      }
      if(e.mon.name === "miniPoisonFlower") {
          if(es[0].mon.name === "poisonFlower"){
            if(es[0].hp <= 2500){
                if(frame%200 === 199) {
                   var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 20, 2, 219, 183, 0);
                   m.bounce = 3;
                }
            }else{
                if(frame%200 === 199) {
                   var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2, 5, 20, 2, 219, 183, 0);
                   m.bounce = 2;
                }
            }
          }
      }
      
      
      MoveMonster( i );
       //rect(Lhandx+175,Lhandy+100,75,100);
       //rect(Rhandx-250,Rhandy+100,75,100);
       
       //true darklord hand hitbox
       if(px+pw/2>=Lhandx+175 && px+pw/2<=Lhandx+175+75 && py+ph/2>=Lhandy+100 && py+ph/2<=Lhandy+100+100 && !Pinvincible) {
           Phurt = true;
            if(handDamageCoolDown1 <= 0){
                HP-=300;
                handDamageCoolDown1 = 15;
            }
       }
       if(px+pw/2>=Rhandx-250 && px+pw/2<=Rhandx-250+75 && py+ph/2>=Rhandy+100 && py+ph/2<=Rhandy+100+100 && !Pinvincible) {
           Phurt = true;
            if(handDamageCoolDown2 <= 0){
                HP-=300;
                handDamageCoolDown2 = 15;
            }
       }
       //living blizzard's aura
       if(e.mon.name === "livingBlizzard"){
            if(e.mon.damage !== 0 && overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, e.mon.width*2)) {
                superSlow = 2;
            }
       }
       // Hurt player
       var wi = e.mon.width;
       var hei = e.mon.height;
       if(e.mon.name === "sirBlobsalotII" && spin === 1){
        wi*=2;
        hei*=2;
       }
       if((e.mon.damage !== 0||e.mon.name === "sandWall") && overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, wi)) {
        if(!Pinvincible || e.mon.name === "damageCloudPleaseIgnore"){
                if((e.mon.name === "sirBlobsalot"|| e.mon.name === "sirBlobsalotII" || e.mon.name === "darkLord" || e.mon.name === "frozenWarrior") && charging >180){
                    if(e.mon.name!=="sirBlobsalotII" || weapon!=="spear"){
                        HP -= e.mon.damage*5;
                    }
                }else{
                    HP -= e.mon.damage*(numPharaohs*0.75 + 1);
                }
            var steal;
            steal = e.mon.damage;
            if(e.mon.name === "doppelganger"){
                if(soul > -150){
                    soul -= steal;
                    e.soul += steal;
                }
            }
            if(e.mon.name === "bodySnatcher"){
                if(!noBody){
                    noBody = true;
                    e.hasBody = true;
                    if(e.hp>250){
                        e.hp = 250;   
                    }
                    e.x = random(5,340);
                    e.y = random(50,340);
                }
            }
            if(soul < -150){
                soul = -150;
            }
            if(e.soul > 150){
                e.soul = 150;
            }
            Phurt = true;
            if(e.bomb > -500){
                e.bomb = 0;
            }
            if (stun <-240 && e.mon.name === "elBlob"){
              stun = 60;   
            }
            if (slow < 480 && e.mon.name === "mummy"){
              slow = 480;   
            }
            if (slow < 480 && e.mon.name === "pharaoh"){
              slow = 480;   
            }
            if (slow < 480 && e.mon.name === "miniMummy"){
              slow = 480;   
            }
            if (stun <-240 && e.mon.name === "iceBlob"){
              stun = 90;   
            }
            if (stun <-240 && e.mon.name === "rainbowBlob"){
              stun = 60;   
            }
            if (stun <-240 && e.mon.name === "frostBeast"){
              stun = 160;   
            }
            if (e.mon.name === "poisonBlob" || e.mon.name === "poisonMiniBlob" || e.mon.name === "miniPoisonMiniBlob"|| e.mon.name === "rainbowBlob"){
              poisonFrame = frame + 150;   
            }
            if (e.mon.name === "robot" || e.mon.name === "Trobot" || e.mon.name === "ULTRAMech") {
              grab = true;  
            }
            if (e.mon.name === "sandWall") {
              grab = true;  
            }
            if (e.mon.name === "tentacle") {
              grab = true;
            }
            if (e.mon.name === "tent") {
              grab = true;
            }
            if (e.mon.name === "squid") {
              grab = true;
              e.hp -= 2;
            }
            if (e.mon.name === "sandSquid") {
              grab = true;
              if(e.state === "attack"){
                e.sink = true;
              }
            }
            if (e.mon.name === "mosquito"||e.mon.name === "infestedMosquito"){
                if(MP>0){
                    MP-=1;
                }
            }
            if (e.mon.name === "bigMosquito"||e.mon.name === "vampireMosquito"){
                e.hp+=e.mon.damage;
                if(e.mon.name === "vampireMosquito"){
                    e.hp+=e.mon.damage;
                    e.bitten = true;
                    bitten = true;
                    poisonFrame = frame + 200;
                }
                if(e.hp >= e.mon.maxHp*3){
                    e.hp = 0;   
                }
                if(MP>1){
                    MP-=2;
                }else if(MP>0){
                    MP-=1;
                }
            }
        }
      }
    }
    //counting tiny numming flowers
    numinFlowers = 0;
    for(var i = 0; i < es.length; i++){
        if(es[i].mon.name === "miniPoisonFlower" || es[i].mon.name === "rottenStalk"){
            numinFlowers += 1;   
        }
    }
    
    if(level === "B8" && altarDead && numinFlowers <= 0){
        showYggdrasil = true;   
    }else{
        showYggdrasil = false;   
    }
    
    //dark player fire
    if(fire>1){
        fill(143, 143, 143);
        ellipse(xfire,yfire,100*2.5,100*2.5);   
    }else if(fire === 1){
        fill(255, 145, 0); 
        ellipse(xfire,yfire,100*2.5,100*2.5); 
        doAttack(xfire,yfire,100*2.5,"fire",250);
        darkLightning = 30;
    }
    //dark player lightning
    for(var i = 0; i < arrLight.length; i++){
        var l = arrLight[i];
        if(l.time>1){
            if(l.x === "fat"){
                line(0,l.y,400,l.y);   
            }
            if(l.y === "fat"){
                line(l.x,50,l.x,400);   
            }
        }else if(l.time === 1){
            fill(0, 196, 255);
            if(l.x === "fat"){
                rect(0,l.y-25,400,50);  
                doAttackBox(0,l.y-25,400,50,"lightning",200);
            }
            if(l.y === "fat"){
                rect(l.x-25,50,50,400);
                doAttackBox(l.x-25,50,50,400,"lightning",200);
            }
            darkLightning = 30;
        }
        l.time--;
    }
    //dark player slash
    for(var i = 0; i < arrSlash.length; i++){
        var s = arrSlash[i];
        if(s.time>1){
            line(s.x+pw/4,s.y,s.x,s.y+ph);
            line(s.x+pw/4+20,s.y,s.x+20,s.y+ph);
            line(s.x+pw/4+40,s.y,s.x+40,s.y+ph);
        }else if(s.time === 1){
            if(s.spineGone){
                stroke(255, 230, 0);
                doAttackBox(s.x,s.y,50,50,"stun slash",150);
            }else{
                stroke(255, 0, 0);
                doAttackBox(s.x,s.y,50,50,"slash",150);
            }
            line(s.x+pw/4,s.y,s.x,s.y+ph);
            line(s.x+pw/4+20,s.y,s.x+20,s.y+ph);
            line(s.x+pw/4+40,s.y,s.x+40,s.y+ph);
            stroke(0, 0, 0);
        }
        s.time--;
    }
    
     var jx = 0;
     var jy = 0;
     //check if necromancer died
        if(necroDied){
            for(var i = 0; i < es.length; i++){
                var e = es[i];
                if(e.mon.name === "necromancer"){
                    e.necronum--;   
                }
            }
            necroDied = false;
        }
     //draw enemies
     for(var i = 0; i < es.length; i++){
         var e = es[i];
         //show hitbox below sprite (uncomment below)
         //rect(e.x,e.y,e.mon.width,e.mon.height);
          jx = 0;
          jy = 0;
        if(e.mon.name === "livingTornado"){
            //draw living tornados
            e.xpit = e.x+e.mon.width/2;
            e.ypit = e.y+e.mon.height/2;
            pitFrame2 = frame;
            var pitSize2 = 120;
            if(pitSize2>0){
                var pullx = e.xpit-(px+pw/2);
                var pully = e.ypit-(py+ph/2); 
                var pullen = sqrt(pullx*pullx+pully*pully);
                if (pullen < (pitSize2+pw)/2) {
                    if(pullen>0){
                        px+=pullx/pullen*5;
                        py+=pully/pullen*5;
                    }
                    HP-=3;
                }
                stroke(204, 204, 204);
                var angle = frame*40;
                var x = sin(angle)*10;
                var y = cos(angle)*10;
                for (var j = 0; j < 120; j+=20){
                    var k = 120-j;
                    var fade2 = k/pitSize2;
                    fill(255*fade2, 255*fade2, 255*fade2);
                    ellipse(e.xpit+x*(1-fade2),e.ypit+y*(1-fade2),k,k);
                    noStroke();
                }
                stroke(0, 0, 0);
            }
            line(e.x+15,e.y,e.x+30,e.y+15);
            line(e.x+e.mon.width-15,e.y,e.x+e.mon.width-30,e.y+15);
        }
        if(e.mon.name === "livingBlizzard"){
            fill(199, 249, 255,200);
            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,e.mon.width*2,e.mon.height*2);
            fill(255, 255, 255);
            ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,e.mon.width,e.mon.height);
            line(e.x+15,e.y+15,e.x+30,e.y+30);
            line(e.x+e.mon.width-15,e.y+15,e.x+e.mon.width-30,e.y+30);
        }
        if(level > 80 && level < 91 && (e.mon.name === "iceBlob" || e.mon.name === "livIce")){
            e.hp -= 3;
        }
        if(level > 80 && level < 91 && e.mon.name === "waterBlob"){
            e.hp -= 1;
        }
        if(level > 80 && level < 91 && e.mon.name === "squid"){
            e.hp -= 1;
        }
        if (e.mon.name === "sandBlob" && level>80 && level < 91){
            e.glass += 1;
            if (e.glass >= 100&&e.hp>0){
                addMonster(e.x,e.y,monsters.glassBlob);
                e.hp = 0;
            }
        }
        if(e.mon.name === "brokenCastle"){
            e.jitter = 10;
            jx = random();  
            jy = random();
        }
        if(e.mon.name === "darkKingBlob" && kingBlobAttack === "dying"){
            e.jitter = 15;
            jx = random();  
            jy = random();
        }
        if(e.mon.name === "thrym"){
            e.jitter = 0;
        }
        if(e.mon.name === "dedalot" || e.mon.name === "dedmancer" || e.mon.name === "dedalotII" || e.mon.name === "dedlich"){
            e.jitter = 10;
            jx = random()*e.jitter/2;  
            jy = random()*e.jitter/2;
        }
        if(frame - e.hitFrame < 15 || e.mon.name === "dedalot"|| e.mon.name === "dedmancer" || e.mon.name === "dedalotII"|| e.mon.name === "dedlich" || e.mon.name === "brokenCastle") {
          jx = random()*e.jitter;  
          jy = random()*e.jitter; 
         }else if (frame < e.stun && e.mon.name !== "elcloud" && e.mon.name !== "elBlob" && e.mon.name !== "castle" && e.mon.name !== "ghostBlob"&&e.mon.name!=="inkBlob"&& e.mon.name !== "sirBlobsalot" && e.mon.name !== "sirBlobsalotII" && e.mon.name !== "adamantFortress") {
          jx = random()*4;  
          jy = random()*4; 
         }
         if(e.poison > frame){
            e.hp -= 5;   
         }
         if(e.mon.name === "clone" || e.mon.name === "ringClone"){
            jx = 0;
            jy = 0;
         }
         if(e.mon.name === "confuseClone"){
            jx = random()*4;  
            jy = random()*4;
         }
         var x = e.x + jx;
         var y = e.y + jy;
         

         if (e.mon.name === "livIce") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(171, 206, 245);
            }
            rect(x,y,e.mon.width,e.mon.height);
            line(x+15,y+10,x+25,y+20);
            line(x+65,y+10,x+55,y+20);
         }
         if (e.mon.name === "sandWall") {
            fill(245, 240, 171);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
         }
         if (e.mon.name === "tentacle") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(255, 136, 0);
            }
            rect(x,y,e.mon.width,9999);
         }
        if (e.mon.name === "cloud") {
            fill(255, 212, 246);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width*2,e.mon.height*2);
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(247, 172, 231);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            arc(x+e.mon.width*0.3,y+e.mon.height*0.3,10,5,180,360);
            arc(x+e.mon.width*0.7,y+e.mon.height*0.3,10,5,180,360);
            for (var j = 0; j<es.length; j++) {
                var e2 = es[j];
                var name = e2.mon.name;
                if (name !== "cloud"&& name !== "elcloud"&&name !== "queenCloud") {
                    if(pointInEllipse(e2.x+e2.mon.width/2,e2.y+e2.mon.height/2,x+e.mon.width/2,y+e.mon.height/2,e.mon.width*2,e.mon.height*2)) {
                        if(e2.hp<e2.mon.maxHp) {
                            e2.hp+=1;
                        }
                    }
                }
            }
       }
       if (e.mon.name === "elcloud") {
            fill(84, 79, 8);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width*2,e.mon.height*2);
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(0, 0, 0);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            fill(255, 255, 255);
            arc(x+e.mon.width*0.3,y+e.mon.height*0.3,10,5,180,360);
            arc(x+e.mon.width*0.7,y+e.mon.height*0.3,10,5,180,360);
       }
       if (e.mon.name === "fog") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(186, 186, 186);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
       }
       if (e.mon.name === "mist") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(186, 186, 186, e.fade);
            }
            //no obsta this does not mean the mist enemy has an attack and defense state this is just me reusing code that I already have lol
            if(e.state === "attack"){
                e.fade-=2;   
            }else if(e.state === "defense"){
                e.fade+=2;   
            }
            if(e.fade <= -50){
                e.state = "defense";
            }else if(e.fade >= 255){
                e.state = "attack";   
            }
            if(e.fade <= 0){
                strokeWeight(0.0001);
            }else{
                strokeWeight(1*(e.fade/255));
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
            strokeWeight(1);
       }
       if (e.mon.name === "frostBeast") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(150, 215, 255);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
       }
       if (e.mon.name === "thrym") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(196, 233, 255);
            }
            beginShape();
            vertex(e.x+0,e.y+50);
            vertex(e.x+10,e.y-10);
            vertex(e.x+15,e.y+25);
            endShape();
            beginShape();
            vertex(e.x+20,e.y+10);
            vertex(e.x+25,e.y-15);
            vertex(e.x+37,e.y+10);
            endShape();
            beginShape();
            vertex(e.x+40,e.y);
            vertex(e.x+50,e.y-25);
            vertex(e.x+55,e.y+5);
            endShape();
            beginShape();
            vertex(e.x+55,e.y+10);
            vertex(e.x+60,e.y-15);
            vertex(e.x+70,e.y+10);
            endShape();
            beginShape();
            vertex(e.x+70,e.y+10);
            vertex(e.x+75,e.y-25);
            vertex(e.x+90,e.y+25);
            endShape();
            fill(150, 215, 255);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            fill(0, 0, 0);
            line(x+25,y+10,x+35,y+25);
            line(x+65,y+25,x+75,y+10);
       }
       if (e.mon.name === "sarcophagus") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(255, 200, 0);
            }
            rect(x,y,e.mon.width,e.mon.height);
            line(x+3,y+10,x+13,y+20);
            line(x+48,y+10,x+38,y+20);
       }
       if (e.mon.name === "royalSarcophagus") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(255, 136, 0);
            }
            rect(x,y,e.mon.width,e.mon.height);
            line(x+3,y+10,x+13,y+20);
            line(x+48,y+10,x+38,y+20);
       }
       if (e.mon.name === "queenCloud") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(255, 217, 255);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            line(180,80,150,65);
            line(220,80,250,65);
       }
       if (e.mon.name === "queenThunderCloud") {
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(84, 79, 8);
            }
            ellipse(400/2,50+100/2,400,100);
            stroke(255, 255, 255);
            line(180,80,150,65);
            line(220,80,250,65);
            stroke(0, 0, 0);
       }
       if(e.mon.name === "weed") {
            runPlant(e);
            rect(x + e.mon.width/2 - 25, y + e.mon.height - 55, 10, 80);
       }
       if(e.mon.name === "poisonWeed") {
            runPlant(e);
            rect(x + e.mon.width/2 - 25, y + e.mon.height - 55, 10, 80);
       }
       if(e.mon.name === "ironweedHydra1"){
            runPlant(e);
            rect(x + e.mon.width/2 - 25, y + e.mon.height - 55, 10, 80);
       }
       if(e.mon.name === "ironweedHydra2"){
            runPlant(e);
            rect(x + e.mon.width/2 - 25, y + e.mon.height - 55, 10, 80);
       }
       if(e.mon.name === "ironweedHydra3"){
            runPlant(e);
            rect(x + e.mon.width/2 - 25, y + e.mon.height - 55, 10, 80);
            if(frame%100 === 99){
                addMissile(e.x,e.y, 7, 0, 2, 25, 25, 25);   
            }
       }
       if(e.mon.name === "nightshade") {
            runPlant(e);
            rect(x + e.mon.width/2 - 25, y + e.mon.height - 55, 10, 80);
            e.sporeDrop++;
            if(e.sporeDrop >= 120){
                addMonster(e.x,e.y,monsters.spore);
                e.sporeDrop = 0;
            }
       }
       if(e.mon.name === "spore"){
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(158, 119, 0);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            e.sporeDrop++;
            if(e.sporeDrop >= 600){
               addMonster(e.x,e.y,monsters.nightshade); 
               es.splice(i,1);
            }
       }
       if (e.mon.name === "altar") {
            fill(125, 125, 125);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            rect(x+49,310,100,10);
            line(300,210,250,210);
            line(250,210,250,230);
            line(250,230,300,230);
            line(300,230,300,210);
            line(380,210,330,210);
            line(330,210,330,230);
            line(330,230,380,230);
            line(380,230,380,210);
            line(300,220,330,220);
       }
       if (e.mon.name === "ruinedAltar") {
            fill(125, 125, 125);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
            line(x+15,y+e.mon.height-50,x+50,y+50);
            line(x+50,y+50,x+100,y+10);
            line(x+100,y+10,x+127,y+5);
            line(x+e.mon.width/2,y+e.mon.height,x+e.mon.width/2+25,y+e.mon.height-50);
            line(x+e.mon.width/2+25,y+e.mon.height-50,x+e.mon.width/2+30,y+e.mon.height-70);
            line(x+e.mon.width/2+30,y+e.mon.height-70, x+e.mon.width/2-15,y+e.mon.height-130);
            line(x+e.mon.width/2-15,y+e.mon.height-130, x+e.mon.width/2+60,y+e.mon.height-180);
            rect(x+49,310,100,10);
            line(300,210,250,210);
            line(250,210,250,230);
            line(250,230,300,230);
            line(300,230,300,210);
            line(380,210,330,210);
            line(330,210,330,230);
            line(330,230,380,230);
            line(380,230,380,210);
            line(300,220,330,220);
            if(mechanize > 0){
                stroke(255, 0, 0);
                line(px+pw/2,py+pw/2,e.x+e.mon.width/2,e.y+e.mon.height/2);
                stroke(0, 0, 0);
            }
       }
       if (e.mon.name === "mosquito"||e.mon.name === "infestedMosquito"||e.mon.name === "scarab") {
            if(e.undead){
               fill(255,255,255);
            }else{
            fill(125, 125, 125);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width,e.mon.height);
       }
       if (e.mon.name === "bigMosquito") {
            fill(120+e.hp/30, 0, 0);
            ellipse(x+e.mon.width/2,y+e.mon.height-5,(e.mon.width/1.5)*(e.hp/1000),(e.mon.height/1.5)*(e.hp/1000));
            if(e.undead){
               fill(255,255,255);
            }else{
                fill(125, 125, 125);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width/1.5,e.mon.height/1.5);
            rect(x+e.mon.width-10,y+e.mon.height-30,20,0);
       }
       if(e.mon.name === "vampireMosquito"){
           fill(120+e.hp/30, 0, 0);
            ellipse(x+e.mon.width/2,y+e.mon.height-5,(e.mon.width/1.5)*(e.hp/2000),(e.mon.height/1.5)*(e.hp/2000));
            if(e.undead){
               fill(255,255,255);
            }else{
            fill(82, 0, 0);
            }
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width/1.5,e.mon.height/1.5);
            rect(x+e.mon.width-10,y+e.mon.height-30,20,0);
       }
       if (e.mon.name === "poisonFlower") {
            fill(121, 0, 191);
            rect(e.x+22,e.y+110,20,220);
            drawFlower(e.x+33,e.y+76, 5, e.hp/1000, 1);
            if(e.undead){
               fill(255,255,255);
            }else{
            fill(219, 183, 0);
            }
            ellipse(e.x+33,e.y+76,80,80);
       }
       if (e.mon.name === "miniPoisonFlower") {
            fill(121, 0, 191);
            var x = e.x+e.mon.width/2;
            var y = e.y+e.mon.height/2;
            rect(x,y-10,70,20);
            drawFlower(x,y, 5, e.hp/200,0.7);
            if(e.undead){
               fill(255,255,255);
            }else{
            fill(219, 183, 0);
            }
            ellipse(x,y,e.mon.width,e.mon.height);
       }
       if (e.mon.name === "rottenYggdrasil") {
            fill(168, 15, 15);
            rect(e.x+22,e.y+110,20,220);
            drawFlower(e.x+33,e.y+76, 5, e.hp/1000, 1);
            if(e.undead){
               fill(255,255,255);
            }else{
            fill(183, 255, 181);
            }
            ellipse(e.x+33,e.y+76,80,80);
       }
       if (e.mon.name === "rottenStalk") {
            fill(168, 15, 15);
            var x = e.x+e.mon.width/2;
            var y = e.y+e.mon.height/2;
            if(e.y<200){
                rect(x-10,y-10,20,-70);
            }else{
                rect(x-10,y-10,20,70);
            }
            drawFlower(x,y, 5, e.hp/200,0.7);
            if(e.undead){
               fill(255,255,255);
            }else{
            fill(183, 255, 181);
            }
            ellipse(x,y,e.mon.width,e.mon.height);
            if(frame >= e.headTime-60){
                textSize(120);
                fill(107, 107, 107);
                text("!",e.x+e.mon.width/3-10,e.y+e.mon.height);  
            }
            if(frame >= e.headTime){
                var m = addMissile(e.x,e.y, 7, 0, 2, 25, 25, 25);   
                m.bounce = 2;
                e.headTime = frame+random(400,600);
            }
            if(numinFlowers <= 3){
                if(frame % 500 === 499) {
                    var numMissiles = ceil(e.hp/200);
                    var altarM = 5;
                    var angleOffset = random() * 360 / numMissiles;
                    for (var j = 0 ; j < numMissiles ; j++) {
                        var angle = j * 360 / numMissiles + angleOffset;
                        var m = {
                          x: e.x + e.mon.width/2,
                          y: e.y + e.mon.height/2,
                          vx: 5 * cos(angle),
                          vy: 5 * sin(angle),
                          size: 20,
                          damage: altarM,
                          red: 168,
                          green: 15,
                          blue: 15,
                          bounce: 1,
                        };
                        ms.push(m);
                    }
                }
            }
            if(numinFlowers<=2){
                runPlant(e);   
            }
       }
       if (e.mon.name === "castle") {
            fill(125, 125, 125);
            rect(x,y-10,100,100);
            rect(x,y+90,100,150);
            rect(x,y+240,100,100);
            image(getImage("avatars/spunky-sam-green"), 310, 150, 65, 65);
            image(getImage("avatars/spunky-sam"), 312, 223, 60, 60);
            image(getImage("avatars/spunky-sam-red"), 350, 75, 50, 50);
            image(getImage("avatars/spunky-sam-red"), 350, 325, 50, 50);
            stroke(107, 71, 0);
            strokeWeight(5);
            line(310,75,310,134);
            line(310,134,350,105);
            line(350,105,311,74);
            line(300,105,349,105);
            line(310,325,310,384);
            line(310,384,350,355);
            line(350,355,311,324);
            line(300,355,349,355);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(309,71,309,137);
            line(312,130,312,78);
            line(297,103,309,103);
            line(342,103,312,103);
            line(297,103,297,107);
            line(297,107,309,107);
            line(342,107,312,107);
            line(342,107,312,130);
            line(342,103,312,78);
            line(352,105,309,137);
            line(352,105,309,71);
            line(309,321,309,387);
            line(312,380,312,328);
            line(297,353,309,353);
            line(342,353,312,353);
            line(297,353,297,357);
            line(297,357,309,357);
            line(342,357,312,357);
            line(342,357,312,380);
            line(342,353,312,328);
            line(352,355,309,387);
            line(352,355,309,321);
       }
       if (e.mon.name === "adamantFortress") {
            fill(199, 199, 199);
            rect(x,y-10,100,100);
            rect(x,y+90,100,150);
            rect(x,y+240,100,100);
            if(!blobsalotOut && blobsalot !== "dead"){
                ghost.background(255, 255, 255, 0);
                ghost.image(getImage("avatars/spunky-sam-green"),0,0,100,100);
                ghost.filter(GRAY);
                ghost.filter(INVERT);
                image(ghost, 320, 150, 65, 65); 
                shield(315,157);
            }
            if(!blobolichOut && blobolich !== "dead"){
                tint(100, 0, 100, 255);
                image(necromancer, 322, 223, 60, 60);
                noTint();
                staff(320,224);
            }
            tint(tintr,tintg,tintb, 255);
            image(rainbowBlob, 350, 75, 50, 50);
            noTint();
            tint(tintr,tintg,tintb, 255);
            image(rainbowBlob, 350, 325, 50, 50);
            noTint();
            stroke(107, 71, 0);
            strokeWeight(5);
            line(310,75,310,134);
            line(310,134,350,105);
            line(350,105,311,74);
            line(300,105,349,105);
            line(310,325,310,384);
            line(310,384,350,355);
            line(350,355,311,324);
            line(300,355,349,355);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(309,71,309,137);
            line(312,130,312,78);
            line(297,103,309,103);
            line(342,103,312,103);
            line(297,103,297,107);
            line(297,107,309,107);
            line(342,107,312,107);
            line(342,107,312,130);
            line(342,103,312,78);
            line(352,105,309,137);
            line(352,105,309,71);
            line(309,321,309,387);
            line(312,380,312,328);
            line(297,353,309,353);
            line(342,353,312,353);
            line(297,353,297,357);
            line(297,357,309,357);
            line(342,357,312,357);
            line(342,357,312,380);
            line(342,353,312,328);
            line(352,355,309,387);
            line(352,355,309,321);
            if(blobolichOut){
                fill(138, 0, 184,180);
                ellipse(300,105,20,20);
                ellipse(300,355,20,20);
            }
       }
       if (e.mon.name === "brokenCastle") {
            fill(125, 125, 125);
            rect(x,y-10,100,100);
            rect(x,y+90,100,150);
            rect(x,y+240,100,100);
            image(getImage("avatars/spunky-sam-green"), 310, 150, 65, 65);
            image(getImage("avatars/spunky-sam"), 312, 223, 60, 60);
            image(getImage("avatars/spunky-sam-red"), 350, 75, 50, 50);
            image(getImage("avatars/spunky-sam-red"), 350, 325, 50, 50);
            stroke(107, 71, 0);
            strokeWeight(5);
            line(310,75,310,134);
            line(310,134,350,105);
            line(350,105,311,74);
            line(300,105,349,105);
            line(310,325,310,384);
            line(310,384,350,355);
            line(350,355,311,324);
            line(300,355,349,355);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(309,71,309,137);
            line(312,130,312,78);
            line(297,103,309,103);
            line(342,103,312,103);
            line(297,103,297,107);
            line(297,107,309,107);
            line(342,107,312,107);
            line(342,107,312,130);
            line(342,103,312,78);
            line(352,105,309,137);
            line(352,105,309,71);
            line(309,321,309,387);
            line(312,380,312,328);
            line(297,353,309,353);
            line(342,353,312,353);
            line(297,353,297,357);
            line(297,357,309,357);
            line(342,357,312,357);
            line(342,357,312,380);
            line(342,353,312,328);
            line(352,355,309,387);
            line(352,355,309,321);
       }
       if(e.mon.name === "TRUE_DARKLORD"){
           if(e.undead){
               fill(255,255,255);
            }else{
            fill(102, 102, 102);
            }
            ellipse(200,e.y,200,200);
            beginShape();
            vertex(Lhandx,Lhandy);
            vertex(Lhandx+200,Lhandy+200);
            vertex(Lhandx+201,Lhandy+189);
            vertex(Lhandx+211,Lhandy+200);
            vertex(Lhandx+212,Lhandy+189);
            vertex(Lhandx+222,Lhandy+200);
            vertex(Lhandx+223,Lhandy+189);
            vertex(Lhandx+232,Lhandy+200);
            vertex(Lhandx+233,Lhandy+189);
            vertex(Lhandx+243,Lhandy+200);
            vertex(Lhandx+244,Lhandy+189);
            vertex(Lhandx+56,Lhandy);
            endShape();
            beginShape();
            vertex(Rhandx,Rhandy);
            vertex(Rhandx-200,Rhandy+200);
            vertex(Rhandx-201,Rhandy+189);
            vertex(Rhandx-211,Rhandy+200);
            vertex(Rhandx-212,Rhandy+189);
            vertex(Rhandx-222,Rhandy+200);
            vertex(Rhandx-223,Rhandy+189);
            vertex(Rhandx-232,Rhandy+200);
            vertex(Rhandx-233,Rhandy+189);
            vertex(Rhandx-243,Rhandy+200);
            vertex(Rhandx-244,Rhandy+189);
            vertex(Rhandx-56,Rhandy);
            endShape();
            fill(255, 149, 0);
            arc(200-40, e.y+30, 50, 50, 40, 220);
            arc(200+40, e.y+30, 50, 50, -40, 140);
        }
       if (e.mon.name === "bomb") {
            fill(46, 46, 46);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width/1.2,e.mon.height/1.2);
            fill(77, 62, 0);
            rect(x+e.mon.width/2-3, y-e.mon.width/2+10, 5, e.mon.height/2.5);
            line(x+40,y+15,x+30,y+25);
            line(x+10,y+15,x+20,y+25);
            if (e.bomb > 0){
                e.bomb -= 1;
                e.hp -= 1;
                fill(255, 0, 0);
                ellipse(x+26,y-10,10,10);
            }else if(e.bomb <= 0 && e.bomb > -500){
                fill(255, 102, 0);
                ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,e.hp/2.5,e.hp/2.5);
                if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, e.hp/2.5)) {
                HP -= e.hp; 
                Phurt = true;
                if(HP>0){
                    e.hp = 0;   
                }
          }else{
            e.hp = 0; 
          }
            }
       }
       if (e.mon.name === "reactor") {
            fill(122, 122, 122);
            ellipse(x+e.mon.width/2,y+e.mon.height/2,e.mon.width/1.2,e.mon.height/1.2);
            fill(163, 163, 163);
            rect(x+e.mon.width/2-3, y-e.mon.width/2+10, 5, e.mon.height/2.5);
            line(x+40,y+15,x+30,y+25);
            line(x+10,y+15,x+20,y+25);
            if (e.bomb > 0){
                e.bomb -= 1;
                e.hp -= 1;
                fill(26, 255, 0);
                ellipse(x+26,y-10,10,10);
            }else if(e.bomb <= 0 && e.bomb > -500){
                fill(47, 255, 0);
                var spawn = addPoison(e.x+e.mon.width/2-e.hp/5/2,e.y+e.mon.height/2-e.hp/5/2,e.hp/5,e.hp/5);
                spawn.life = 9999999999;
                ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,e.hp/2.5,e.hp/2.5);
                if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, e.hp/2.5)) {
                HP -= e.hp; 
                Phurt = true;
                if(HP>0){
                    e.hp = 0;   
                }
          }else{
            e.hp = 0; 
          }
            }
       }
       
        if (e.mon.image !== "") {
            if (e.mon.name === "poisonBlob" || e.mon.name === "poisonMiniBlob" || e.mon.name === "miniPoisonMiniBlob"){
                tint(160, 0, 130, 255);
                image(poisonBlob, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "lavaHound"){
                tint(255, 0, 0, 255);
                image(lavaHound, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "wrathHound"){
                tint(100, 0, 0, 255);
                image(wrathHound, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "necromancer"){
                tint(100, 0, 0, 255);
                image(necromancer, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if(e.mon.name === "archBlobolich" || e.mon.name === "clone" || e.mon.name === "ringClone" || e.mon.name === "dedlich"){
                tint(100, 0, 100, 255);
                image(necromancer, x, y, e.mon.width, e.mon.height);
                noTint();   
                staff(e.x-2,e.y-5);
            }else if (e.mon.name === "bodySnatcher"){
                if(e.hasBody){
                    tint(255, 255, 255, 255);
                    var dirdotx = e.x+e.mon.width/2+dirx*35;
                    var dirdoty = e.y+e.mon.height/2+diry*35;  
                    ellipse(dirdotx,dirdoty,5,5);
                }else{
                    tint(255, 255, 255, 15);
                }
                image(bodySnatcher, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "demon"){
                tint(149, 0, 255, 255);
                image(demon, x, y, e.mon.width, e.mon.height);
                noTint();
                fill(149, 0, 255);
                if(e.undead){
                    fill(255,255,255);
                }
                arc(x+25,y+50,50,25,0,180);
            }else if (e.mon.name === "darkBlob"){
                tint(255, 0, 0, 255);
                image(darkBlob, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if(e.mon.name === "darkKingBlob"){
                if(spectral){
                    tint(122, 118, 157, 50);
                    image(darkBlob, x, y, e.mon.width, e.mon.height);
                    noTint(); 
                }else{
                   tint(255, 0, 0, 255);
                    image(darkBlob, x, y, e.mon.width, e.mon.height);
                    noTint(); 
                }
            }else if (e.mon.name === "rainbowBlob"){
                tint(tintr,tintg,tintb, 255);
                image(rainbowBlob, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "inkBlob"){
                tint(0, 0, 0, 255);
                image(darkBlob, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "ghostBlob"){
                tint(122, 118, 157, 25);
                image(darkBlob, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "darkLord"&&transform){
                tint(0, 0, 0, 255);
                image(darkLord, x, y, e.mon.width, e.mon.height);
                noTint();
            }else if (e.mon.name === "golem"){
                var img = getImage(e.mon.image);
                image(img,x,y,e.mon.width,e.mon.height);
                fill(189, 0, 0);
                arc(x+25,y+50,50,25,0,180);
                fill(255, 255, 255);
                if(frame === e.lastPoundFrame + 400){
                    e.lastPoundFrame = frame;
                    fill(255, 102, 0);
                    ellipse(e.x+e.mon.width/2,e.y+e.mon.height/2,250,250);
                    if(overlapCircle(px+pw/2, py+ph/2, e.x+e.mon.width/2, e.y+e.mon.height/2, pw, 250)) {
                        HP -= 300;
                        playerPoundedFrame = frame;
                        playerPoundedEnemy = e;
                    }
                }
            }else if(e.mon.name === "apocalypseKraken"){
                image(e.image,x,y,e.mon.width,e.mon.height);
                fill(138, 138, 138);
                rect(grabx,graby,400,50);
            }else if (e.mon.name === "ULTRAMech"){
                var img;
                if(e.state === "attack"){
                    img = getImage("avatars/robot_male_3");
                    fill(115, 115, 115);
                    arc(x+25,y+50,50,25,0,180);
                    fill(255, 255, 255);
                }else if(e.state === "defense"){
                    var img = getImage("avatars/robot_male_1");
                }
                image(img,x,y,e.mon.width,e.mon.height);
            }else{
                if(e.mon.name === "sirBlobsalot" && spin === 1){
                    fill(192,192,192);
                    ellipse(e.x+30,e.y+32,120,120);
                }
                if(e.mon.name === "sirBlobsalotII" && spin === 1){
                    fill(192,192,192);
                    ellipse(e.x+30,e.y+32,150,150);
                    if(e.hp <= e.mon.maxHp/2){
                        if (testFrame2%50===49){
                            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,5,0,0, 82, 235, 253);
                            var ra = floor(random(0,8));
                            if(ra === 0){
                                m.vx = 0;
                                m.vy = 4; 
                            }else if(ra === 1){
                                m.vx = 0;
                                m.vy = -4; 
                            }else if(ra === 2){
                                m.vx = 4;
                                m.vy = 0; 
                            }else if(ra === 3){
                                m.vx = -4;
                                m.vy = 0; 
                            }else if(ra === 4){
                                m.vx = 2;
                                m.vy = 2; 
                            }else if(ra === 5){
                                m.vx = -2;
                                m.vy = 2; 
                            }else if(ra === 6){
                                m.vx = 2;
                                m.vy = -2; 
                            }else if(ra === 7){
                                m.vx = -2;
                                m.vy = -2; 
                            }
                        }
                    }
                }
                if(e.mon.name === "sirBlobsalotII" || e.mon.name === "dedalotII"){
                    e.undead = true;   
                }
                if(!e.undead){
                    image(e.image,x,y,e.mon.width,e.mon.height);
                }
            }
            if(e.undead){
                ghost.background(255, 255, 255, 0);
                ghost.image(getImage(e.mon.image),0,0,100,100);
                ghost.filter(GRAY);
                ghost.filter(INVERT);
                image(ghost,x,y,e.mon.width,e.mon.height);   
            }
            if(e.mon.name === "frozenWarrior"){
                if(charge){
                    if(targx>=e.x){
                        pushMatrix();
                        translate(e.x+100,e.y+25);
                        rotate(90);
                        sword(0,0);
                        popMatrix();
                    }else{
                        pushMatrix();
                        translate(e.x-40,e.y+46);
                        rotate(-90);
                        sword(0,0);
                        popMatrix();
                    }
                }else{
                    if(px>=e.x){
                        sword(e.x+49,e.y+3);
                    }else{
                        sword(e.x-9,e.y+3);
                    }   
                }
            }
            if(e.mon.name === "frozenDefender"){
                if(e.defense === "right"){
                    shield(e.x+51,e.y+3);
                }else if(e.defense === "left"){
                    shield(e.x-2,e.y+3);
                }   
            }
            if (e.mon.name === "sirBlobsalot") {
                if(charge){
                    if(targx>=e.x){
                        shield(e.x+51,e.y+3);
                        pushMatrix();
                        translate(e.x+100,e.y+25);
                        rotate(90);
                        sword(0,0);
                        popMatrix();
                    }else{
                        shield(e.x-2,e.y+3);
                        pushMatrix();
                        translate(e.x-40,e.y+46);
                        rotate(-90);
                        sword(0,0);
                        popMatrix();
                    }
                }else if(spin >= 0){
                    if(spin === 0){
                        if(targx>=e.x){
                            shield(e.x+51,e.y+3);
                            pushMatrix();
                            translate(e.x-40,e.y+46);
                            rotate(-90);
                            sword(0,0);
                            popMatrix();
                        }else{
                            shield(e.x-2,e.y+3);
                            pushMatrix();
                            translate(e.x+100,e.y+25);
                            rotate(90);
                            sword(0,0);
                            popMatrix();
                        }
                    }else{
                        
                    }
                }else if(pound >= 0){
                    if(px>=e.x){
                        sword(e.x-9,e.y-7);
                        shield(e.x+51,e.y+3);
                    }else{
                        sword(e.x+49,e.y-7);
                        shield(e.x-2,e.y+3);
                    }
                }else{
                    if(px>=e.x){
                        sword(e.x-9,e.y+3);
                        shield(e.x+51,e.y+3);
                    }else{
                        sword(e.x+49,e.y+3);
                        shield(e.x-2,e.y+3);
                    }
                }
            }
            if (e.mon.name === "sirBlobsalotII") {
                if(charge){
                    if(weapon === "sword and shield"){
                        if(targx>=e.x){
                            shield(e.x+51,e.y+3);
                            pushMatrix();
                            translate(e.x+100,e.y+25);
                            rotate(90);
                            sword(0,0);
                            popMatrix();
                        }else{
                            shield(e.x-2,e.y+3);
                            pushMatrix();
                            translate(e.x-40,e.y+46);
                            rotate(-90);
                            sword(0,0);
                            popMatrix();
                        }
                    }else if(weapon === "spear"){
                        spear(e.x+25,e.y-40); 
                        if(charging > 130){
                            textSize(120);
                            fill(166, 0, 0);
                            text("!",targx-5+pw/3,targy+ph+15); 
                        }
                    }
                }else if(spin >= 0){
                    if(spin === 0){
                        if(targx>=e.x){
                            pushMatrix();
                            translate(e.x+100,e.y+26);
                            rotate(90);
                            greatsword(0,0);
                            popMatrix();
                        }else{
                            pushMatrix();
                            translate(e.x-40,e.y+45);
                            rotate(-90);
                            greatsword(0,0);
                            popMatrix();
                        }
                    }else{
                        
                    }
                }else if(pound >= 0){
                    if(px>=e.x){
                        pushMatrix();
                        translate(e.x-40,e.y+11);
                        rotate(-90);
                        hammer(0,0);
                        popMatrix();
                    }else{
                        pushMatrix();
                        translate(e.x+100,e.y-4);
                        rotate(90);
                        hammer(0,0);
                        popMatrix();
                    }
                }else{
                    if(weapon === "sword and shield"){
                        if(px>=e.x){
                            sword(e.x-9,e.y+3);
                            shield(e.x+51,e.y+3);
                        }else{
                            sword(e.x+49,e.y+3);
                            shield(e.x-2,e.y+3);
                        }
                    }else if(weapon === "greatsword"){
                        if(px>=e.x){
                            greatsword(e.x+54,e.y+3);
                        }else{
                            greatsword(e.x-14,e.y+3);
                        }
                    }else if(weapon === "spear"){
                        if(px>=e.x){
                            spear(e.x+54,e.y+3);
                        }else{
                            spear(e.x-4,e.y+3);
                        }
                    }else if(weapon === "axe"){
                        if(px>=e.x){
                            axe(e.x+54,e.y-5);
                        }else{
                            axe(e.x-4,e.y-5);
                        }
                    }else if(weapon === "hammer"){
                        if(px>=e.x){
                            hammer(e.x+54,e.y-5);
                        }else{
                            hammer(e.x-4,e.y-5);
                        }
                    }else if(weapon === "flail"){
                        if(px>=e.x){
                            fill(192,192,192);
                            rect(e.x+57,e.y-5,5,65);
                            runPlant(e);
                        }else{
                            fill(192,192,192);
                            rect(e.x-2,e.y-5,5,65);
                            runPlant(e);
                        }
                        if(testFrame2 >= 1000){
                            weapon = "sword and shield";
                            testFrame2 = 0;
                            charged = 0;
                        }
                    }
                    
                }
            }
            if(e.mon.name === "dedalot" || e.mon.name === "dedalotII"){
                sword(e.x+49,e.y+3);
                shield(e.x-2,e.y+3);   
            }
            if (e.mon.name === "archBlobomancer"||e.mon.name === "dedmancer") {
                staff(e.x-2,e.y-5);
            }
        }
        if(e.mon.name === "darkLord" && testFrame2 > 4000 && !talked && !phase2){
            beamy+=40;
            fill(0);
            rect(e.x,beamy,80,2000);
            if(testFrame2 === 4020){
                transform = true;   
            }
        }
     }
    //draws true dark lord's prep attacks
    if(darkAttack === "blob cannon" && level === "???" && talked){
       if(testFrame2 < 100){
           fill(95, 145, 2);
           ellipse(Lhandx+200,Lhandy+175,30,30);
           ellipse(Rhandx-200,Rhandy+175,30,30);
       }
    }
    // draw missiles
     for(var i = 0; i < ms.length; i++){
         var m = ms[i];
         if(m.red === 145 && m.green === 0 && m.blue === 131){
            magic(m.x,m.y,20,25,-frame,360-frame,8);   
          }else{
             fill(m.red, m.green, m.blue);
             if(m.dark === true){
                pushMatrix();
                translate(m.x,m.y-m.size/2);
                rotate(45);
                rect(0,0,m.size,m.size);
                popMatrix();
             }else{
                ellipse(m.x, m.y, m.size, m.size);
             }
          }
     }
    
   // Tap-to-use keys won't work until the are pressed again.
    keyJustPressed = false;
    
    //draw wind
    if((level >= 51 && level <61)||level === "B5"||level === "B6"){
        for(var i = 0 ; i < dotx.length ; i++) {
            point((partx+dotx[i])%400,(party+doty[i])%400);
        }
    }
    if(level === "B4"&&queenAttack === "wind"&&testFrame >= 60){
        for(var i = 0 ; i < dotx.length ; i++) {
            point((partx+dotx[i])%400,(party+doty[i])%400);
        }
    }
    if(level===51){
        fill(145, 94, 0, 255);
        rect(140,175,120,80);
        rect(190,255,20,40);
        fill(0, 0, 0);
        textSize(11);
        text("Use fire/lightning on that sand blob! It'll turn them to glass, which can be shattered with ground pound!",145,180,120,9999);
    }
    
    //draw darkness
    if((level >= 91 && level <= 102 && level !== 95 && level !== 100 && level !== 101)||lichAttack === "annihilating darkness"){
        if(level !== 102 || (level === 102 && talked && phase2)){
            var R = 150;
            if(darkLightning > 0){
                R = 15000;
            }else{
                R = 150;
            }
            if(lichAttack === "annihilating darkness"){
                R = 1000;
                R -= dark;
            }
            if(useEruption){
                tR = 300;   
            }
            R += tR;
            if(useFire){
                if(R<300){
                    R = 300;
                }
            }else if(useLightning){
                if(R<450){
                    R = 450;
                }
            }
            if(lichAttack === "annihilating darkness"){
                if(R <= 0){
                    HP = 0;   
                }
            }
            stroke(0, 0, 0);
            noFill();
            strokeWeight(1200);
            ellipse(px + pw/2, py + ph/2, R + 1200 + soul, R + 1200+soul);
            
            fill(255, 255, 255);
            strokeWeight(1);
        }
    }
    
    //draw timer
    if (speedrunMode){
        var seconds = floor(totalFrame/60);
        var hours = floor(seconds / (60*60));
        seconds -= hours * (60*60);
        var minutes = floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursStr = str(hours);
        var minutesStr = str(minutes).padStart(2, "0");
        var secondsStr = str(seconds).padStart(2, "0");
        fill(0, 0, 0);
        rect(300,50,99,20);
        fill(255, 255, 255);
        textSize(15);
        text(hoursStr + ":" + minutesStr + ":" + secondsStr,320,65);
    }
    if(level === "???"&& !talked){
        if(frame === 1100){
            statsyInc = 5;
        }else if(frame > 1100 && frame < 2000){
            statsyInc-=0.5;
        }else if(frame === 8300){
            statsyInc=0;   
        }else if(frame > 8300 || talked){
            statsyInc+=0.5;   
        }
    }
    fill(backr, backg, backb);
    rect(0,0-statsy,400,50);
    textSize(12);
    fill(255, 255, 255,underTextTime);
    text(underText,10,45+statsy);
    underTextTime--;
    fill(255, 255, 255);
    if(HP>maxHP){
        if(godMode){
            text("HP:"+ceil(maxHP/10),258,28+statsy);      
        }else if(dif === 0){
            text("HP:"+ceil(maxHP/1.5),258,28+statsy);
        }else if(dif === 4){
            text("HP:"+ceil(maxHP/2),258,28+statsy);
        }else{
            text("HP:"+maxHP,258,28+statsy);
        }
    }else{
        if(godMode){
            text("HP:"+ceil(HP/10),258,28+statsy);        
        }else if(dif === 0){
            text("HP:"+ceil(HP/1.5),258,28+statsy);
        }else if(dif === 4){
            text("HP:"+ceil(HP/2),258,28+statsy);
        }else{
            text("HP:"+ceil(HP),258,28+statsy);
        }
    }
    text("MP:"+MP,326,28+statsy);
    if(attack === "blob cannon" && darkMode === "ON"){
        text("Attack: dark cannon",21,28+statsy);
    }else if(attack === "stun slash"&& darkMode === "ON"){
        text("Attack: bone break",21,28+statsy);
    }else if(attack === "heal"&& darkMode === "ON"){
        text("Attack: teleport",21,28+statsy);
    }else if(attack === "sand pit"&& darkMode === "ON"){
        text("Attack: black hole",21,28+statsy);
    }else if(attack === "slow dart"&& darkMode === "ON"){
        text("Attack: dark missile",21,28+statsy);
    }else{
        text("Attack: "+attack,21,28+statsy);
    }
    text("Level: "+(level),159,28+statsy);
    if (stun >= 0) {
        textSize(8);
        text("Stunned!",160,40+statsy);
    }
    if (bitten) {
        textSize(8);
        text("Bitten!",220,40+statsy);
        Phurt = true;
        HP-=0.2;
    }
    if (confuse>0) {
        textSize(8);
        text("Confused!",220,40+statsy);
    }
    if (slow > 0 || superSlow > 0) {
        textSize(8);
        text("Slowed!",40,40+statsy);
    }
    if(mechanize>0){
        textSize(8);
        text("Mechanized!",220,40+statsy);   
    }
    if (decay > 0) {
        textSize(8);
        text("Decaying!",220,40+statsy);
        MP-=10;
        if(MP<0){
            MP = 0;   
        }
    }
    if (grab) {
        textSize(8);
        text("Grabbed!",280,40+statsy);
    }
    if(poisonFrame > frame) {
        HP -= 0.5;
        Phurt = true;
        textSize(8);
        fill(255, 255, 255);
        text("Poisoned!", 330,40+statsy);
    }
    if ((level >= 41 && level <= 50)||flooded) {
        //Air
        var barW = 100;
        var airW = barW*air/maxAir;
        if(air > 0){
            air-=1;
        }else{
         HP -= 1;   
        }
        if (air > maxAir*0.6) {
            fill(43, 224, 3);
        }else if(air > maxAir *0.3) {
            fill(204, 191, 4);
        }else{
            fill(255, 0, 0);
        }
        rect(300,40, airW, 10);
        //spawn bubbles
        if(!geyser){
            if (frame%450===299){
                while(1){
                    var hitCoral = false;
                    var bub = {x:random(15,385),y:random(65,385),w:30,h:30};
                    for (var i=0; i<coral.length; i++) {
                        var c = coral[i];
                       if(overlap(bub.x,bub.y,bub.w,bub.h,c.x,c.y,c.w,c.h)){
                           hitCoral = true;
                       }
                    }
                    if(!hitCoral){
                        bubbles.push(bub);
                        break;
                    }
                }
            }
        }else{
            if (frame%20===19){
                while(1){
                    var hitCoral = false;
                    var bub = {x:random(15,385),y:random(65,385),w:30,h:30};
                    for (var i=0; i<coral.length; i++) {
                        var c = coral[i];
                       if(overlap(bub.x,bub.y,bub.w,bub.h,c.x,c.y,c.w,c.h)){
                           hitCoral = true;
                       }
                    }
                    if(!hitCoral){
                        bubbles.push(bub);
                        break;
                    }
                }
            }
        }
        //draws bubs
        for(var i = 0; i < bubbles.length; i++) {
            var b = bubbles[i];
            fill(255, 255, 255);
            ellipse(b.x, b.y, b.w, b.h);
            if(overlap(px,py,pw,ph,b.x,b.y,b.w,b.h)) {
                air = maxAir;
                bubbles.splice(i,1);
                i--;
            }
        }
    }
    textSize(12);
    for (var i=0 ; i < es.length; i++) {
        var e = es[i];
        //show hitboxes above sprite (uncomment below)
        //rect(e.x,e.y,e.mon.width,e.mon.height);
            if (e.mon.name === "crusher2000") {
              fill(255, 255, 255);
              text(e.hp,100,70);
         }else if(e.mon.name === "queenCloud") {
             fill(0, 0, 0);
             text(e.hp,100,77);
         }else if(e.mon.name === "queenThunderCloud") {
             fill(255, 255, 255);
             text(ceil(e.hp),100,77);
         }else if(e.mon.name === "apocalypseKraken"){
             fill(255, 255, 255);
             if(e.x>100){
                text(ceil(e.hp),e.x +75,e.y +15); 
             }else{
                text(ceil(e.hp),e.x +275,e.y +15);  
             }
         }else if(e.mon.name === "thrym") {
             fill(0, 0, 0);
             text(ceil(e.hp),e.x+10,e.y-15);
         }else if(e.mon.name === "mirage"){
            fill(255, 255, 255);
            text(ceil(mirageHP),e.x + 20,e.y - 5);
        }else if(e.mon.name === "clone"){
            fill(255, 255, 255);
            text(ceil(mirageHP),e.x + 20,e.y - 5);
        }else if(e.mon.name === "ringClone" || e.mon.name === "confuseClone"){
            
        }else if(e.mon.name === "tent"){
            
        }else if(e.mon.name === "TRUE_DARKLORD") {
            fill(255, 255, 255);
            if(showHealth){
                text(e.hp,136,texty-5);   
            }else{
                text("Infinite",180,texty);
            }
         }else if(e.mon.name === "darkKingBlob"){
            fill(255, 255, 255);
            text(ceil(e.hp),300,80);
        }else if(e.mon.name === "castle" || e.mon.name === "adamantFortress"){
                 fill(255, 255, 255);
                 text(ceil(e.hp), 335, 394); 
                }else if(e.mon.name === "brokenCastle"){
                 fill(255, 255, 255);
                }else if(e.mon.name === "dedalot"){
                 fill(255, 255, 255);
                }else if(e.mon.name === "dedmancer"){
                 fill(255, 255, 255);
                }else if(e.mon.name === "dedalotII"){
                 fill(255, 255, 255);
                }else if(e.mon.name === "dedlich"){
                 fill(255, 255, 255);
                }else if (e.mon.name === "bomb"){
                if((level>=21&&level<=30)||(level >= 91 && level <= 102 && level !== 95 && level !== 100 && level !== 101)){
                    fill(0, 0, 0);
                }else{
                 fill(255, 255, 255);
                }
                text(ceil(e.hp),e.x + 30,e.y - 10);
                }else if(e.mon.name === "reactor"){
                    fill(0, 255, 13);
                    text(ceil(e.hp),e.x + 30,e.y - 10);   
                }else{
            if(((level>=21&&level<=30)||level === "B3"||level === "B4")||(level >= 91 && level <= 102 && level !== 95 && level !== 100 && level !== 101)){
                if(level === 102){
                    if(talked && phase2){
                        fill(0, 0, 0);  
                    }else{
                        fill(255, 255, 255);
                    }
                }else{
                    fill(0, 0, 0);
                }
            }else{
                fill(255, 255, 255);
            }
            if(e.mon.name !== "ghostBlob" && e.mon.name !== "mist" && (e.mon.name !== "bodySnatcher" || e.hasBody)){
                text(ceil(e.hp),e.x + 20,e.y - 5); 
            }
         }
        }
     
     //draw player
     if(level === "???"&& !talked){
        if(frame >= 500 && frame <= 550){
            Phurt = true;   
        }
        if(frame >= 700 && frame <= 750){
            Phurt = true;   
        }
        if(frame >= 900 && frame <= 1000){
            Phurt = true;   
        }
     }
     if (Phurt) {
      jx = random()*5;  
      jy = random()*5;   
     }else{
        jx=0;
        jy=0;
     }
     fill(255, 254, 171);
     ellipse(px+pw/2,py+pw/2,blessing,blessing);
     if(!noBody){
         if(darkMode === "ON"){
             tint(55, 55, 55, 255);
             image(player,px+jx,py+jy,pw,ph);
             noTint();
         }else{
            image(getImage("avatars/piceratops-ultimate"),px+jx,py+jy,pw,ph);
         }
            if(mechanize>0){
                fill(122, 122, 122);
                rect(px+18,py+9,10,5);
                fill(255, 0, 0);
                rect(px+20,py+10,6,3);
            }
            fill(255, 255, 255);
            var dirdotx = px+pw/2+dirx*35;
            var dirdoty = py+ph/2+diry*35;  
            if (!fall) {
                ellipse(dirdotx,dirdoty,5,5);
            }
     }
     //level ??? black screen (or white screen)
     if(level === "???"){
         fill(0, 0, 0, darknessAlpha);
        rect(-10,-10,999,999);  
        fill(255, 255, 255, whiteAlpha);
        rect(-10,-10,999,999); 
     }
     if(level === "B10"){
        fill(255, 255, 255, whiteAlpha);
        rect(-10,-10,999,999); 
    }
    
    //check if all monsters are dead 
    
  for (var i=0 ; i < es.length; i++) {
      var e = es[i];
      if(e.hp >= 0){
        if(e.mon.name === "damageCloudPleaseIgnore"&& level === "angel" && speedrunMode && category === "102l"){
            es.splice(i,1);
        }
        if(e.mon.name === "damageCloudPleaseIgnore"&& level === "the end" && speedrunMode && category === "Alll"){
            es.splice(i,1);
        }
      }
      if(e.hp <= 0) {
          if(!e.undead){
            deadPool.push(e);
          }
        if(e.mon.name === "castle"){
            es = [];
            underText = "Press k to skip the cutscene";
            underTextTime = 400;
            addMonster( 300, 60, monsters.brokenCastle);
        }else if (e.mon.name === "sirBlobsalot"){
            underText = "Press k to skip the cutscene";
            underTextTime = 400;
            addMonster(313, 195,monsters.dedalot);
            es.splice(i,1);
            for(var j = 0; j < es.length; j++){
                var e2 = es[j];       
                if(e2.mon.name === "dedmancer"){
                    es.splice(j,1);   
                }
            }
        }else if (e.mon.name === "archBlobomancer"){
            underText = "Press k to skip the cutscene";
            underTextTime = 400;
            addMonster(313, 195,monsters.dedmancer);
            es.splice(i,1);
            for(var j = 0; j < es.length; j++){
                var e2 = es[j];       
                if(e2.mon.name === "dedalot"){
                    es.splice(j,1);   
                }
            }
        }else if(e.mon.name === "darkLord" && !talked && (text5 || text7)&&level!=="???"){
                    underText = "Press k to skip the cutscene";
                    underTextTime = 300;
                    
        
        }else if(e.mon.name === "darkLord"){
            if(!text5 && !phase2 && !theOkLol){
                talked = false;
                testFrame2 = 0;
                e.x = 308;
                e.y = 190;
                phase2 = true;
                text5 = true;
            }
            if(!text7 && phase2 && theOkLol){
                talked = false;
                phase2 = false;
                testFrame2 = 0;
                e.x = 308;
                e.y = 190;
                text7 = true;
            }
        }else if(e.mon.name === "TRUE_DARKLORD"){
            darkAttack = "final breath";
            darkSummon = "";
        }else if(e.mon.name === "crusher10000"){
            testFrame3 = 0;
            crusherAttack = "";
            grabx = -400;
            es.splice(i,1);
        }else if(e.mon.name === "darkKingBlob"){
            if(chargeText <= 0){
                chargeText = 160;
            }
            kingBlobAttack = "dying";
            testFrame3 = 0;
            if(chargeText <= 100){
                es.splice(i,1);
                var numMissiles = 50;
                var angleOffset = random() * 360 / numMissiles;
                for (var i = 0 ; i < numMissiles ; i++) {
                    var angle = i * 360 / numMissiles + angleOffset;
                      var m = {
                          x: e.x + e.mon.width/2,
                          y: e.y + e.mon.height/2,
                          vx: 5 * cos(angle),
                          vy: 5 * sin(angle),
                          size: 20,
                          damage: 20,
                          red: 0,
                          green: 0,
                          blue: 0,
                      };
                    ms.push(m);
                    m = {
                      x: e.x + e.mon.width/2+20,
                      y: e.y + e.mon.height/2,
                      vx: 5 * cos(angle),
                      vy: 5 * sin(angle),
                      size: 20,
                      damage: 20,
                      red: 0,
                      green: 0,
                      blue: 0,
                    };
                    ms.push(m);
                    m = {
                      x: e.x + e.mon.width/2+40,
                      y: e.y + e.mon.height/2,
                      vx: 5 * cos(angle),
                      vy: 5 * sin(angle),
                      size: 20,
                      damage: 20,
                      red: 0,
                      green: 0,
                      blue: 0,
                    };
                    ms.push(m);
                } 
            }
        }else if(e.mon.name === "inkBlob"){
            var m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = 1*10;
            m.vy = 1*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = -1*10;
            m.vy = -1*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = 1*10;
            m.vy = -1*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = -1*10;
            m.vy = 1*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = 0*10;
            m.vy = 1*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = 0*10;
            m.vy = -1*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = 1*10;
            m.vy = 0*10;
            m = addMissile(e.x+e.mon.width/2,e.y+e.mon.height/2,10,15,5,0, 0, 0);
            m.vx = -1*10;
            m.vy = 0*10;
            es.splice(i,1);
        }else if(e.mon.name === "frozenWarrior"){
            warriorDown = true;
            es.splice(i,1);
        }else if(e.mon.name === "frozenDefender"){
            defenderDown = true;
            es.splice(i,1);
        }else if(e.mon.name === "queenThunderCloud"){
            testFrame3 = 0;
            queenAttack = "";
            es.splice(i,1);
        }else if(e.mon.name === "thrym"){
            testFrame3 = 0;
            thrymAttack = "";
            es.splice(i,1);
        }else if(e.mon.name === "mirage"){
            addMonster(e.x,e.y,monsters.scarab);
            mirageSummon += 100;
            es.splice(i,1);
        }else if(e.mon.name === "darkMirage"){
            mirageRevive = 0;
            mirageAttack = "";
            testFrame3 = 0;
            es.splice(i,1);
            firstMirageDeath = true;
        }else if(e.mon.name === "tentacle"){
            es.splice(i,1);
            tentDed = true;
            krakenAttack = "tentacle";
            testFrame2 = 0;
            tentx = 2000;
            tenty = 450;
        }else if(e.mon.name === "apocalypseKraken"){
            es.splice(i,1);
            krakenAttack = "";
            testFrame2 = 0;
            testFrame3 = 0;
            grabx = -400;
            geyser = false;
        }else if(e.mon.name === "infestedMosquito"){
            var spawn = addPoison(e.x-40,e.y-40,80,80);
            spawn.life = 500;
            es.splice(i,1);
        }else if(e.mon.name === "wrathHound"){
            var lova = addLava(e.x,e.y,80,80);
            lova.life = 500;
            es.splice(i,1);
        }else if(e.mon.name === "vampireMosquito"){
            if(e.bitten){
                bitten = false;   
            }
            es.splice(i,1);
        }else if(e.mon.name === "rottenStalk"){
            testFrame2 = 0;
            es.splice(i,1);   
        }else if(e.mon.name === "ruinedAltar"){
            es.splice(i,1);
            testFrame2 = 0;
            altarAttack = "";
            addMonster( 20, 100, monsters.rottenStalk);
            addMonster( 320, 100, monsters.rottenStalk);
            addMonster( 20, 320, monsters.rottenStalk);
            addMonster( 320, 320, monsters.rottenStalk);
            altarDead = true;
            mechanize = 0;
        }else if(e.mon.name === "bodySnatcher" && e.hasBody){
            es.splice(i,1);
            noBody = false;
            e.hasBody = false;
        }else if(e.mon.name === "necromancer"){
            es.splice(i,1);
            necroDied = true;
            necromancers--;
        }else if (e.mon.name === "sirBlobsalotII"){
            blobsalotOut = false;
            underText = "Press k to skip the cutscene";
            underTextTime = 400;
            testFrame = -123123123;
            addMonster(230, 203,monsters.dedalotII);
            blobsalot = "dead";
            es.splice(i,1);
            for(var j = 0; j < es.length; j++){
                var e2 = es[j];       
                if(e2.mon.name === "dedlich"){
                    es.splice(j,1);   
                }
            }
        }else if (e.mon.name === "archBlobolich"){
            blobolichOut = false;
            underText = "Press k to skip the cutscene";
            underTextTime = 400;
            testFrame = -123123123;
            addMonster(240, 203,monsters.dedlich);
            blobolich = "dead";
            for(var j = 0; j < es.length; j++){
                var e2 = es[j];       
                if(e2.mon.name === "clone"){
                    es.splice(j,1);   
                    j-=1;
                }
            }
            for(var j = 0; j < es.length; j++){
                var e2 = es[j];       
                if(e2.mon.name === "dedalotII"){
                    es.splice(j,1);   
                }
            }
            es.splice(i,1);
            
        }else if(e.mon.name === "ringClone"){
            addMissile(e.x,e.y, 5, 20, 10, 145, 0, 131);
            es.splice(i,1);
        }else if(e.mon.name === "confuseClone"){
            fill(255, 102, 0);
            ellipse(e.x,e.y,250,250);
            if(overlapCircle(px+pw/2, py+ph/2, e.x, e.y, pw, 250) && !Pinvincible) {
                HP -= 200; 
                confuse = 1500;
                Phurt = true;
            }   
            es.splice(i,1);
        }else if(e.mon.name === "adamantFortress"){
            e.hp = 1;
        }else{
            if(e.mon.name === "doppelganger"){
                soul += e.soul;   
            }
            es.splice(i,1);
        }
      }
  }
  
  
  
  if(es.length === 0){
      
    
    if (level === 10 && speedrunMode && category === "10l"){
      level = -31;
    return;
    
    }else if (level === 30 && speedrunMode && category === "30l"){
      level = -32;
    return;
    
    }else if (level === 50 && speedrunMode && category === "50l"){
      level = -33;
    return;
    
    }else if (level === 90 && speedrunMode && category === "90l"){
        level = -34;
    return;
    
    }else if (level === "angel" && speedrunMode && category === "102l"){
      level = -35;
    return;
    
    }else if (level === "the end" && speedrunMode && category === "Alll"){
      level = -36;
    return;
    
    }else{
         
        level += 1;
        StartLevel();
    }
        
  }
  
};
`


//WOAH! 20,000+ lines!?!?!?! YEEAAAAAAAAAAAAAAAAAAAAAAA LES GOOOOOOOOOOO!!!!

// obsta was here
