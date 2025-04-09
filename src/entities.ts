
export interface Exercise {
    id: number;
    name: string;
    description: string;
    detail: string;
    imageURL: string;
    bodyPart: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička") [];
    time: number;
    difficulty: "ľahké" | "stredné" | "ťažké"; 
    series: number;
    interval?: number;
    repeat?: number;
    equipment?: "činky" | "expander" | "kettlebell" | "slider";

    toPlainObject(): {
        id: number;
        name: string;
        description: string;
        detail: string;
        imageURL: string;
        bodyPart: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička")[];
        time: number;
        difficulty: "ľahké" | "stredné" | "ťažké";
        series: number;
        interval: number;
        repeat: number | undefined;
        equipment: "činky" |"expander" | "kettlebell" | "slider" | undefined;
    }
}