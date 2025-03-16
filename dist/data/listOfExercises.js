"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let listOfWorkouts = [];
class Workout {
    constructor(id, name, description, detail, imageURL, bodyPart, time, difficulty, series, interval, repeat, equipment) {
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
}
const klik = new Workout(100, 'klik', 'Základný cvik na tricepsy a prsné svalstvo.', "Východisková poloha je vo vzpore kľačmo, ale hmotnosť tela je hlavne na horných končatinách, hlava smeruje v predĺžení chrbtice a pohľad medzi ruky, nepozeráme sa na pupok ani pred seba. S nádychom ideme nadol, pohybuje sa celý trup, chrbát je rovný, neprehýbame sa v bokoch, s výdychom ideme nahor.", "src\data\resources\Knee-Push-Ups.jpg.avif", "ruky", 90, "stredné", 3, 30, 10);
listOfWorkouts.push(klik);
const zamknutieVSede = new Workout(101, "Zamykanie v sede s extenziou bedrových kĺbov", "Statický cvik na spevnenie jadra tela.", "Zo sedu s vystretými a napnutými nohami pomaly klesáme trupom k zemi, akoby sme chceli zrolovať chrbát. V bode, keď sa k zemi blíži naša krížová kosť, napneme sedacie svaly a zároveň ťaháme hrudný kôš k panve, aby sme udržali nastavenú polohu chrbta. Správnou aktiváciou všetkých svalov sa naše nohy samy zdvihnú zo zeme a telom vytvoríme akoby kolísku. Pokiaľ nohy zdvihneme zo zeme vedome, cvik nie je vykonaný korektne. V polohe zotrváme dovtedy, pokiaľ sme schopní udržať maximálne svalové napätie.", "src\data\resources\zamknutie v sede.jpg", "brucho", 30, "ťažké", 2);
listOfWorkouts.push(zamknutieVSede);
const horolezec = new Workout(102, "Horolezec", "Cvik vychádzajúci z planku so zapojením brušných svalov.", "Nastavíme sa do vzporu na rukách a špičkách, keď má telo vytvárať akoby dosku od hlavy až po päty. Z tohto vzporu pomaly striedavo a s výdychom priťahujeme nohy k hrudníku. Kým sa jedna ťahá dopredu, na tej druhej o to viac strážime zapojenie sedacích svalov na správnu fixáciu panvy.", "src\data\resources\climber.jpg", "brucho", 75, "stredné", 3, 30, 20);
listOfWorkouts.push(horolezec);
