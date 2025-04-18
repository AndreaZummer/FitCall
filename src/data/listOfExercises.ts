import { Exercise } from "../entities";

export let listOfWorkouts: Exercise[] = [];

class Workout implements Exercise {
    id: number;
    name: string;
    description: string;
    detail: string;
    imageURL: string;
    bodyPart: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička") [];
    time: number;
    difficulty: "ľahké" | "stredné" | "ťažké";
    series: number;
    interval: number;
    repeat?: number;
    equipment?: "činky" | "expander" | "kettlebell" | "slider";

    constructor(id: number, name: string, description: string, 
                detail: string, imageURL: string, 
                bodyPart: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička") [], 
                time: number, difficulty: "ľahké" | "stredné" | "ťažké",
                series: number,interval: number, 
                repeat?: number, equipment?: "činky" | "expander" | "kettlebell" | "slider") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.detail = detail;
        this.imageURL = imageURL;
        this.bodyPart = bodyPart;
        this.time = time;
        this.difficulty = difficulty;
        this.series = series;
        this.interval = interval;
        this.repeat = repeat;
        this.equipment = equipment;
    }

    toPlainObject() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            detail: this.detail,
            imageURL: this.imageURL,
            bodyPart: this.bodyPart,
            time: this.time,
            difficulty: this.difficulty,
            series: this.series,
            interval: this.interval,
            repeat: this.repeat,
            equipment: this.equipment
        }
    }
}

const klik = new Workout(100, 'Klik', 'Základný cvik na tricepsy a prsné svalstvo.', "Východisková poloha je vo vzpore kľačmo, ale hmotnosť tela je hlavne na horných končatinách, hlava smeruje v predĺžení chrbtice a pohľad medzi ruky, nepozeráme sa na pupok ani pred seba. S nádychom ideme nadol, pohybuje sa celý trup, chrbát je rovný, neprehýbame sa v bokoch, s výdychom ideme nahor.", require("./resources/push-up.jpg"), ["ruky"], 120, "stredné", 3, 30, 10);
const zamknutieVSede = new Workout(101, "Zamykanie v sede", "Statický cvik na spevnenie jadra tela.", "Zo sedu s vystretými a napnutými nohami pomaly klesáme trupom k zemi, akoby sme chceli zrolovať chrbát. V bode, keď sa k zemi blíži naša krížová kosť, napneme sedacie svaly a zároveň ťaháme hrudný kôš k panve, aby sme udržali nastavenú polohu chrbta. Správnou aktiváciou všetkých svalov sa naše nohy samy zdvihnú zo zeme a telom vytvoríme akoby kolísku. Pokiaľ nohy zdvihneme zo zeme vedome, cvik nie je vykonaný korektne. V polohe zotrváme dovtedy, pokiaľ sme schopní udržať maximálne svalové napätie.", require("./resources/zamknutie v sede.jpg"), ["brucho"], 30, "ťažké", 2, 15);
const horolezec = new Workout(102, "Horolezec", "Cvik vychádzajúci z planku so zapojením brušných svalov.", "Nastavíme sa do vzporu na rukách a špičkách, keď má telo vytvárať akoby dosku od hlavy až po päty. Z tohto vzporu pomaly striedavo a s výdychom priťahujeme nohy k hrudníku. Kým sa jedna ťahá dopredu, na tej druhej o to viac strážime zapojenie sedacích svalov na správnu fixáciu panvy.", require("./resources/climber.jpg"), ["brucho", "kondička", "ruky"], 90, "stredné", 3, 30, 20);
const bocnyPlank = new Workout(103, "Bočný plank", "Statický cvik na zapojenie šikmého brušného svalstva", "Telo musí vytvárať akoby dosku od hlavy až po päty. Hlava nesmie visieť ani byť zdvihnutá či tlačená dopredu. Hrudník nesmie byť vytlačený či spadnutý do strany alebo otočený k zemi. Panva musí byť rovno.", require("./resources/Side-plank.jpg"), ["brucho"], 120, "stredné", 3, 20);
const drepSVytlakom = new Workout(104, "Drep s výtlakom", "Pokročilejšia verzia drepu s výtlakom závažia nad hlavu.", "Zo širšieho stoja rozkročného s rukami nad hlavou so závažím, urob drep s nádychom a s výdychom sa opäť vráť naspäť. Chrbát je celý čas pekne vzpriamený. Bruško aktívne. Kolená pri drepe treba tlačiť smerom von do strany.", require("./resources/drep-s-vytlakom.jpg"), ["ruky", "nohy", "zadok"], 120, "ťažké", 3, 40, 15, "kettlebell");
const dvihaniePanvyNaJednejHohe = new Workout(105, "Dvíhanie panvy na jednej nohe", "Náročnejšia verzia dvíhania panvy zameraná viac na hamstring.", "Ľahni si na chrbát, pokrč kolená a jednu nohu prednož kolmo nad panvu. Zdvihni zadok zo zeme a drž ho čo najvyššie. Po chvíľke poď s nádychom dole a opäť s výdychom nahor. Celú sériu ideme najprv na jednu nohu a potom na druhú.", require("./resources/dvihanie-panvy-na-jednej-nohe.jpg"), ["nohy", "zadok"], 120, "ťažké", 2, 30, 10);
const dvihaniePanvySNohamiNaZabuku = new Workout(106, "Dvíhanie panvy s nohami na žabku", "Klasické dvíhanie panvy v zťaženej verzii s kolenami od seba.", "Ľahni si na chrbát, spoj chodidlá proti sebe a s výdychom zdvihni zadok čo najvyššie od karimatky. S nádychom sa vráť tesne nad zem. Pokiaľ máš chodidlá príliš blízko pri zadku, budeš cítiť napätie na predných stehnách, ale ak posunieš nohy ďalej od chrbtice, budeš cítiť zadnú stranu stehien, zadok a sčasti driekovú chrbticu.", require("./resources/most-na-zabu.jpg"), ["zadok"], 120, "ťažké", 3, 30, 15);
const dvihanieNohyVLahuNaBruchu = new Workout(107, "Dvíhanie pokrčenej nohy v ľahu na bruchu", "Jednoduchý cvik na spevnenie zadku.", "Ľahni si na brucho, pokrč pravú nohu a s výdychom odtlač stehno čo najviac od podložky (noha môže ísť kolmo dohora alebo aj šikmo). S nádychom vráť stehno na karimatku.", require("./resources/dvihanie-nohy-v-lahu.jpg"), ["zadok"], 120, "ľahké", 3, 30, 15);
const unozovanieNaStyroch = new Workout(108, "Unožovanie v pozícii na štyroch", "Cvik na formovanie bočného zadku.", "V pozícii mačky s expanderom nad kolenami unož pokrčenú nohu s výdychom do strany. Trup a boky sú zafixované na jednom mieste. S nádychom nohu zase vráť. Opakuj najprv na jednu a až potom na druhú nohu.", require("./resources/unozovanie-na-4.jpg"), ["zadok"], 120, "ťažké", 3, 30, 15, "expander");
const skipping = new Workout(109, "Skipping", "Kondičné cvičenie, ktoré je možné cvičiť vo viacerých variantách.", "Bežíme na mieste. Nenašľapujeme na päty ani celé chodidlá, ale na špičky. Ruky idú na striedačku popri tele, do kríža s nohami. Môžeme yvoliť obyčajný skipping, výsoký s dvíhaním kolien alebo so zakopávaním.", require("./resources/skipping.jpg"), ["kondička", "nohy"], 150, "ľahké", 4, 30);
const drepSVyskokom = new Workout(110, "Drep s výskokom", "Cvičenie na zlepšenie kondičky a posilnenie stehien.", "Nohy dáme o niečo širšie ako je šírka panvy, špičky aj kolená smerujú mierne von. Urobíme drep s následným výskokom a dopadom do ďalšieho drepu.", require("./resources/jump-squat.jpg"), ["kondička", "nohy", "zadok"], 120, "stredné", 3, 30, 10)
const mrtvyTah = new Workout(111, "Mŕtvy ťah", "Základný cvik na formovanie zadku", "Postavte sa na šírku bokov. Chodidlá idú rovno. Pokrčte kolená a predkloňte sa ku kettlebellu. Chrbát držíme rovno. S výdychom dvihneme kettlebell až do vzpriamenej polohy. Po chvíli sa necháme viesť kettlebellom do predklonu. Kolená pokrčíme a zadok tlačíme smerom dozadu.", require("./resources/deadlift.jpg"), ["zadok"], 120, "stredné", 3, 30, 15, "kettlebell");
const unozovanieVStoji = new Workout(112, "Unožovanie v stoji", "Jednoduché cvičenie na formovanie bočného zadku", "Postavíme sa vypriamene. Expander si dáme nad členky. S výdychom unožujeme najprv jednou nohou a následne druhú sériu druhou nohou.", require("./resources/unozovanie-v-stoji.jpg"), ["zadok"], 240, "stredné", 3, 30, 10, "expander");
const jumpingJack = new Workout(113, "Jumping Jack", "Kondičné cvičenie so zapojením celého tela", "Stojíme na šírku ramien. S odrazom odskočíme do strán a ruký vzpažíme cez upaženie. Vrátime naspäť.", require("./resources/JJ.jpg"), ["kondička"], 120, "ľahké", 3, 30);
const vypadVzad = new Workout(114, "Výpad vzad", "Základné cvičenie posilňujúce nohy, ktoré sa dá vykonávať aj so záťažou.", "Vychádzame zo stoje. Jednou nohou vykročíme vzad až kým kolenu nie je tesne nad zemou. Koleno prednej nohy sa pokrčí, ale zostáva presne nad pätou, nepadá dopredu.", require("./resources/vypad-vzad.jpg"), ["nohy", "zadok"], 120, "ľahké", 3, 30, 20);
const unozovanieVPlanku = new Workout(115, "Unožovanie v planku", "Cvik v ktorom zapojíme ramená, brucho aj zadok.", "Pripravíme si slidre. Dáme sa do základného plankového postavenia s tým, že si nohy položíme na slidre. Následne unožujeme tak, že nohu ťaháme so slidrom do 90° uhla.", require("./resources/plank-s-unozenim.jpg"), ["zadok", "brucho"], 100, "stredné", 2, 40, 10, "slider");
const biceps = new Workout(116, "Bicepsový zdvih", "Najzákladnejší cvik na ruky aký je.", "Vezmeme si činky do oboch rúk. Môžeme si kľaknúť alebo stáť vzpriamene. Naraz dvihneme obe činky pokrčením lakťa. Pri návrate dole lakte celkom nevystierame.", require("./resources/biceps.jpg"), ["ruky"], 160, "ľahké", 3, 40, 15, "činky");
const triceps = new Workout(117, "Tricepsová extenzia", "Cvik na posilnenie zadnej časti rúk.", "Vezmeme si činku. Môžeme sa postaviť alebo si kľaknúť. Ruky dáme dozadu za hlavu ohnuté v lakti. S výdychom lakte vystierame. Ruky s činkou držíme nad hlavou.", require("./resources/triceps.jpg"), ["ruky"], 120, "stredné", 3, 30, 12, "činky");
const roztahovanieKolien = new Workout(118, "Odťahovanie kolien v moste", "Cvik na posilnenie vnútorných stehien.", "Ľahneme si na chrbát na podložku. Expander si dáme nad kolená. Nohy pokrčíme v kolenách a dvihneme podsadenú panvu do mosta. Kolená s výdychom tlačíme od seba. S nádychom ich vrátime naspäť, ale nie úplne. Expander nechávame stále napnutý.", require("./resources/roztahovanie kolien.jpg"), ["nohy"], 120, "stredné", 3, 30, 10, "expander");
const krabiaChodza = new Workout(119, "Krabia chôdza", "Na vyformovanie zadku a stehien.", "Expander si dáme nad kolená. Zídeme mierne do podrepu s vystretým chrbtom. Chodíme do boku, čím naťahujeme expander.", require("./resources/krabia-chodza.jpg"), ["zadok"], 120, "stredné", 3, 30, undefined, "expander");
const strecha = new Workout(120, "Zo vzporu do strechy", "Jednoduchšie cvičenie na posilnenie celého tela a zahriatie.", "Nastavíme sa do yákladnej plankovej poyície. Hlava v predĺžení chrbtice, oddtláčame sa od ramien, telo v rovine. Prechádzame do strechz vytlačením zadku do výšky a tlačením hrudníka ku stehnám. Po chvílke pomaly vraciame naspäť do planku.", require("./resources/strecha.jpg"), ["kondička", "ruky"], 90, "ľahké", 3, 25, 10);
const ruskyTwist = new Workout(121, "Ruský twist", "Cvik na spevnenie brušného svalstva.", "Vezmeme si kettlebell. Posadíme sa na podložku s mierne pokrčenými nohami. Prejdeme do záklonu aby sme správne zapojili brucho. Závažie chytíme do rúk pred seba a následne robíme rotácie hornej časti tela striedavo do jednej aj druhej strany.", require("./resources/rusky-twist.jpg"), ["brucho"], 170, "ťažké", 4, 30, 20);
const drep = new Workout(122, "Drep", "Základný cvik na posilnenie stehien a formovanie zadku.", "Postavíme sa vzpriamene s rovným chrbtom. Nohy sú trošku širšie ako panva. Špičky idú mierne do strán. Pokrčíme kolená a zídeme do drepu. Kolená idú smerom za špičkami, čiže mierne von. Nikdy nepresahujú úroveň chodidla.", require("./resources/drep.jpg"), ["nohy", "zadok"], 75, "ľahké", 2, 30, 15);
const plank = new Workout(123, "Plank", "Statická výdrž v planku.", "Nastavíme sa do yákladnej polohy. Ruky pod ramená, oddtláčame sa od lopatiek. Panva je podsadená, zapojený je stred tela. Staticky držíme.", require("./resources/plank.jpg"), ["ruky", "brucho"], 90, "ľahké", 2, 30);
const predpaženie = new Workout(124, "Predpaženie so záťažou", "Statická makačka na ruky.", "Vezmeme si činky a predpažíme pred seba do úrovne ramien, nie vyššie. Lakte úplne nedopíname. Držíme vo výdrži.", require("./resources/predpazenie.jpg"), ["ruky"], 90, "stredné", 3, 20, undefined, "činky");
const skakanieVPlanku = new Workout(125, "Preskoky v planku", "Cvik na zlepšenie kondícia a posilnenie tela.", "Nastavíme si základnú pozíciu planku. Podsadená panva, pozeráme rovno dole pod seba. Obojnožne robíme malé skoky do strán a späť.", require("./resources/plank-jack.jpg"), ["kondička", "ruky", "brucho"], 120, "ťažké", 3, 30);
const skracovackyHore = new Workout(126, "Skracovačky s vystretými nohami", "Posilníme priamé brušné svalstvo.", "Ľahneme si na chrbát a kríže priložíme k podložke. Podsadíme panvu a aktivujeme brušné svalstvo aby sa nám kríže neodlepili. Pomaly ťaháme hrudním smerom hore. Pozeráme priamo nad seba.", require("./resources/toe.jpg"), ["brucho"], 120, "stredné", 3, 30, 10);
const plankSPredpazenim = new Workout(127, "Plank s predpažením", "Posilníme brušné svalstvo.", "V tomto prípade budeme robiť plank na kolenách. Ruky sú pod ramenami a panva podsadená. Zadok nevystrčujeme. Pud ruky si dáme slidre tak, aby bol pred nami priestor. Na striedačku predpažujeme ruky kĺzaním sliderov.", require("./resources/plank-s-predpazenim.jpg"), ["brucho"], 100, "ťažké", 3, 25, 10, "slider");
const roznozovanieVLahu = new Workout(128, "Rozťahovanie nôh v ľahu na chrbte", "Cvičenie na posilnenie a formovanie vnútorných stehien.", "Ľahneme si na chrbát, s krížami prilepenými na podložku. Expander si nasadíme nad členky. Nohy vystrieme a dvihneme kolmo do vzduchu. S výdychom rozťahujeme nohy, čím naťahujeme expander.", require("./resources/roztahovanie-noh.jpg"), ["nohy"], 90, "stredné", 2, 30, 12, "expander");
const pritahyVPredklone = new Workout(129, "Príťahy v predklone", "Cvičenie na posilnenie chrbta a ramien.", "Pripravíme si činky. Nohy sú na šírku panvy. Chrbát je rovný. Ideme do predklonu s rovným chrbtom a pokrčením kolien. Ruky s činkami vystrieme smerom k zemi a s výdychom priťahujeme až do úplného pokrčenia lakťa, čím sa zapájajú medyilopatkové svaly.", require("./resources/pritahy-v-predklone.jpg"), ["ruky"], 120, "ľahké", 3, 30, 15, "činky");
const poskoky = new Workout(130, "Poskoky do strán", "Zlepšujeme kondičku.", "S nohami na šírku bokov skáčeme obojnožne do zľava do prava.", require("./resources/poskoky.jpg"), ["kondička"], 90, "ľahké", 3, 30);
const vSkracovacky = new Workout(131, "V-skracovačky", "Náročný cvik zameraný najmä na brušné svalstvo.", "Ľahneme si na chrbát s krížami prilepenými do podložky. Natiahneme ruky za hlavu. S výdychom ideme naraz hore rukami aj nohami akoby sme sa chceli sklopiť na polovicu. Hrudník aj brucho sa odlepia od zeme. S nádychom vraciame tesne nad zem.", require("./resources/v-skracovacky.jpg"), ["brucho"], 120, "ťažké", 2, 40, 10);
const uklony = new Workout(132, "Úklony", "Jednoduchý cvik na formovanie úzkeho drieku.", "Postavíme sa vzpriamene na šírku ramien. Ruky pokrčíme a dáme za hlavu, lakte tlačíme smerom do strán. S výdychom urobíme úklon, pričom panva zostáva nehybná. Cítime natiahnutie bočnej strany brucha.", require("./resources/uklony.jpg"), ["brucho"], 120, "ľahké", 3, 25, 10);
const rotaciaNaStyroch = new Workout(133, "Rotácie v pozícii na štyroch", "Zapojíme šikmé brušné svalstvo.", "Nastavíme sa do základnej pozície na všetky štyri. Neprehýbame sa v krížoch, nevystrkujeme zadok. Jednu ruku dvihneme z podložky a pokrčíme v lakti. Dáme ju za hlavu. Následne robíme rotácie lakťom pokrčenej ruky nadol smerom až ku podložke a potom nahor s tým, že ideme až dohora. Pohľad smeruje hore za rukou.", require("./resources/rotacie.jpg"), ["brucho"], 180, "ľahké", 3, 25, 10);
const noznice = new Workout(134, "Nožnice", "Cvičenie na zlepšenie kondičky a formovanie zadku.", "Urobíme mierny výpad vzad jednou nohou. Ruky si dáme do kontry k nohám. Ruka zadnej nohy je vpredu. Sme vystretí a s výdychom sa odrazíme a naray počas skoku vymeníme ruky aj nohy. Predné budú vzadu a stále sme akoby vo výpade. Takýmto štýlom preskakujeme v tempe.", require("./resources/noznice.jpg"), ["kondička", "zadok"], 120, "stredné", 3, 30, 10);
const predklony = new Workout(135, "Predklony", "Jednoduchý cvik na zahriatie.", "Postavíme sa rovno na šírku ramien. Ruky dáme pokrčené za hlavu, lakťami von. Spevníme brucho a s výdychom sa predkloníme. Chrbát držíme celý čas rovný. Zídeme vrchnou časťou tela do pravého uhla a vrátime sa naspäť nahor.", require("./resources/predklony.jpg"), ["kondička"], 180, "stredné", 4, 30, 15);
const upazovanie = new Workout(136, "Upažovanie v stoji", "Cvik na posilnenie lopatiek, chrbta a ramien.", "Postavíme sa naúzko, špičky smerujú dopredu. S rovným chrbtom ideme do predklonu. Ruky s činkami máme rovno pred sebou smerujúce k zemi. S výdychom ideme súčasne oboma rukami šikmo dozadu so zapojením svalov chrbta a ramien. Lakte sú stále mierne v pokrčení. Vrátime pomaly vedome naspäť.", require("./resources/rozpazovanie.jpg"), ["ruky"], 180, "ťažké", 4, 40, 15, "činky");
const svihadlo = new Workout(137, "Švihadlo", "Preskakovanie cez švihadlo.", "Ruky máme popri tele. Pokrčíme ich v lakti a tvárime sa akoby sme mali švihadlo. Rukami poamly točíme popri tele zatiaľ čo obojnožne vyskakujeme.", require("./resources/svihadlo.jpg"), ["kondička"], 180, "ťažké", 5, 40);
const opacnyKlik = new Workout(138, "Opačný klik", "Precvičíme ramená i brucho.", "Sadneme si na podložku a dvihneme sa do opačného mostíka. Ruky sú pod ramenami, palce smerujú k zadku alebo bokom. Kolená sú v pravom uhle nad pätami. S výdychom sa dodvihne opačná ruka a opačná noha. Snažíme sa nimí dotknúť nad nami. Vrátime naspäť a vzmeníme.", require("./resources/krabi-klik.jpg"), ["brucho", "ruky"], 180, "stredné", 3, 30, 10);
const preskokyZPlanku = new Workout(139, "Preskoky z planku", "Náročný cvik na posilnenie celého tela.", "Pripravíme si základný plank na zápästiach. Odrazíme sa od nôh a s pokrčenými nohami a rukami stále na zemi priskočíme z boku k rukám. Odskočíme opäť do planku a opakujeme na druhú stranu.", require("./resources/preskoky-z-planku.jpg"), ["kondička", "ruky", "brucho"], 180, "ťažké", 3, 30, 10);
const drepSVyponom = new Workout(140, "Drep s výponom", "Okrem precvičenia stehien a zadku si v tomto cvičení posilníme aj lýtka.", "Postavíme sa asi 3x širšie ako je panva. Špičky smerujú mierne šikmo, rovnako aj kolená. Urobíme drep. Váha je na celých chodidlách, kolená smerujú von a nepresahujú špičku. Päty odlepíme od zeme do výponu. Vrátime päty a vrátime sa do východzej polohy.", require("./resources/vypon.jpg"), ["nohy", "zadok"], 160, "stredné", 3, 40, 15)
const sikmyvypad = new Workout(141, 'Šikmý výpad', "Cvik na posilnenie svalov zadku a nôh.", "Postavíme sa rovno vzpriamene, vezmeme si závažie do rúk. S nádychom vykročíme jednou nohou šikmo dozadu za stojnú nohu. Stojná noha zostáva v pôvodnej polohe. Koleno nám nepadá, zostáva nad chodidlom. Stehno zadnej nohy sa snažíme držať čo najviac pri prednej nohe. Vrátime s výdychom.", require("./resources/sikmy-vypad.jpg"), ["nohy"], 170, "ťažké", 3, 40, 16, "kettlebell");

listOfWorkouts.push(sikmyvypad, drepSVyponom, upazovanie, svihadlo, preskokyZPlanku, opacnyKlik, klik, drepSVytlakom, rotaciaNaStyroch, roznozovanieVLahu, roztahovanieKolien, uklony, unozovanieNaStyroch, unozovanieVPlanku, unozovanieVStoji, pritahyVPredklone, plank, plankSPredpazenim, poskoky, predklony, predpaženie, strecha, skracovackyHore, skipping, skakanieVPlanku, drep, drepSVyskokom, dvihanieNohyVLahuNaBruchu, dvihaniePanvyNaJednejHohe, dvihaniePanvySNohamiNaZabuku, horolezec, jumpingJack, krabiaChodza, vSkracovacky, vypadVzad, biceps, bocnyPlank, noznice, mrtvyTah, zamknutieVSede, ruskyTwist, triceps);
/*const brucho = listOfWorkouts.filter(exercise => {
    return exercise.bodyPart.includes("brucho");   
})

console.log(brucho.length);

const ruky = listOfWorkouts.filter(exercise => {
    return exercise.bodyPart.includes("ruky");   
})

console.log(ruky.length);

const nohy = listOfWorkouts.filter(exercise => {
    return exercise.bodyPart.includes("nohy");   
})

console.log(nohy.length);

const zadok = listOfWorkouts.filter(exercise => {
    return exercise.bodyPart.includes("zadok");   
})

console.log(zadok.length);

const kon = listOfWorkouts.filter(exercise => {
    return exercise.bodyPart.includes("kondička");   
})

console.log(kon.length);*/