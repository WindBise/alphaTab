// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Beat } from "@src/model/Beat";
import { JsonHelper } from "@src/io/JsonHelper";
import { NoteSerializer } from "@src/generated/model/NoteSerializer";
import { AutomationSerializer } from "@src/generated/model/AutomationSerializer";
import { BendPointSerializer } from "@src/generated/model/BendPointSerializer";
import { Note } from "@src/model/Note";
import { BendStyle } from "@src/model/BendStyle";
import { Ottavia } from "@src/model/Ottavia";
import { Duration } from "@src/model/Duration";
import { Automation } from "@src/model/Automation";
import { BrushType } from "@src/model/BrushType";
import { WhammyType } from "@src/model/WhammyType";
import { BendPoint } from "@src/model/BendPoint";
import { VibratoType } from "@src/model/VibratoType";
import { GraceType } from "@src/model/GraceType";
import { PickStroke } from "@src/model/PickStroke";
import { CrescendoType } from "@src/model/CrescendoType";
import { DynamicValue } from "@src/model/DynamicValue";
import { BeamDirection } from "@src/rendering/utils/BeamDirection";
import { BeatBeamingMode } from "@src/model/Beat";
export class BeatSerializer {
    public static fromJson(obj: Beat, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k, v)); 
    }
    public static toJson(obj: Beat | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("id", obj.id); 
        o.set("notes", obj.notes.map(i => NoteSerializer.toJson(i))); 
        o.set("isempty", obj.isEmpty); 
        o.set("whammystyle", obj.whammyStyle as number); 
        o.set("ottava", obj.ottava as number); 
        o.set("islegatoorigin", obj.isLegatoOrigin); 
        o.set("duration", obj.duration as number); 
        o.set("automations", obj.automations.map(i => AutomationSerializer.toJson(i))); 
        o.set("dots", obj.dots); 
        o.set("fadein", obj.fadeIn); 
        o.set("lyrics", obj.lyrics); 
        o.set("hasrasgueado", obj.hasRasgueado); 
        o.set("pop", obj.pop); 
        o.set("slap", obj.slap); 
        o.set("tap", obj.tap); 
        o.set("text", obj.text); 
        o.set("brushtype", obj.brushType as number); 
        o.set("brushduration", obj.brushDuration); 
        o.set("tupletdenominator", obj.tupletDenominator); 
        o.set("tupletnumerator", obj.tupletNumerator); 
        o.set("iscontinuedwhammy", obj.isContinuedWhammy); 
        o.set("whammybartype", obj.whammyBarType as number); 
        o.set("whammybarpoints", obj.whammyBarPoints.map(i => BendPointSerializer.toJson(i))); 
        o.set("vibrato", obj.vibrato as number); 
        o.set("chordid", obj.chordId); 
        o.set("gracetype", obj.graceType as number); 
        o.set("pickstroke", obj.pickStroke as number); 
        o.set("tremolospeed", obj.tremoloSpeed as number | null); 
        o.set("crescendo", obj.crescendo as number); 
        o.set("displaystart", obj.displayStart); 
        o.set("playbackstart", obj.playbackStart); 
        o.set("displayduration", obj.displayDuration); 
        o.set("playbackduration", obj.playbackDuration); 
        o.set("dynamics", obj.dynamics as number); 
        o.set("invertbeamdirection", obj.invertBeamDirection); 
        o.set("preferredbeamdirection", obj.preferredBeamDirection as number | null); 
        o.set("beamingmode", obj.beamingMode as number); 
        return o; 
    }
    public static setProperty(obj: Beat, property: string, v: unknown): boolean {
        switch (property) {
            case "id":
                obj.id = v! as number;
                return true;
            case "notes":
                obj.notes = [];
                for (const o of (v as (Map<string, unknown> | null)[])) {
                    const i = new Note();
                    NoteSerializer.fromJson(i, o);
                    obj.addNote(i);
                }
                return true;
            case "isempty":
                obj.isEmpty = v! as boolean;
                return true;
            case "whammystyle":
                obj.whammyStyle = JsonHelper.parseEnum<BendStyle>(v, BendStyle)!;
                return true;
            case "ottava":
                obj.ottava = JsonHelper.parseEnum<Ottavia>(v, Ottavia)!;
                return true;
            case "islegatoorigin":
                obj.isLegatoOrigin = v! as boolean;
                return true;
            case "duration":
                obj.duration = JsonHelper.parseEnum<Duration>(v, Duration)!;
                return true;
            case "automations":
                obj.automations = [];
                for (const o of (v as (Map<string, unknown> | null)[])) {
                    const i = new Automation();
                    AutomationSerializer.fromJson(i, o);
                    obj.automations.push(i);
                }
                return true;
            case "dots":
                obj.dots = v! as number;
                return true;
            case "fadein":
                obj.fadeIn = v! as boolean;
                return true;
            case "lyrics":
                obj.lyrics = v as string[] | null;
                return true;
            case "hasrasgueado":
                obj.hasRasgueado = v! as boolean;
                return true;
            case "pop":
                obj.pop = v! as boolean;
                return true;
            case "slap":
                obj.slap = v! as boolean;
                return true;
            case "tap":
                obj.tap = v! as boolean;
                return true;
            case "text":
                obj.text = v as string | null;
                return true;
            case "brushtype":
                obj.brushType = JsonHelper.parseEnum<BrushType>(v, BrushType)!;
                return true;
            case "brushduration":
                obj.brushDuration = v! as number;
                return true;
            case "tupletdenominator":
                obj.tupletDenominator = v! as number;
                return true;
            case "tupletnumerator":
                obj.tupletNumerator = v! as number;
                return true;
            case "iscontinuedwhammy":
                obj.isContinuedWhammy = v! as boolean;
                return true;
            case "whammybartype":
                obj.whammyBarType = JsonHelper.parseEnum<WhammyType>(v, WhammyType)!;
                return true;
            case "whammybarpoints":
                obj.whammyBarPoints = [];
                for (const o of (v as (Map<string, unknown> | null)[])) {
                    const i = new BendPoint();
                    BendPointSerializer.fromJson(i, o);
                    obj.addWhammyBarPoint(i);
                }
                return true;
            case "vibrato":
                obj.vibrato = JsonHelper.parseEnum<VibratoType>(v, VibratoType)!;
                return true;
            case "chordid":
                obj.chordId = v as string | null;
                return true;
            case "gracetype":
                obj.graceType = JsonHelper.parseEnum<GraceType>(v, GraceType)!;
                return true;
            case "pickstroke":
                obj.pickStroke = JsonHelper.parseEnum<PickStroke>(v, PickStroke)!;
                return true;
            case "tremolospeed":
                obj.tremoloSpeed = JsonHelper.parseEnum<Duration>(v, Duration);
                return true;
            case "crescendo":
                obj.crescendo = JsonHelper.parseEnum<CrescendoType>(v, CrescendoType)!;
                return true;
            case "displaystart":
                obj.displayStart = v! as number;
                return true;
            case "playbackstart":
                obj.playbackStart = v! as number;
                return true;
            case "displayduration":
                obj.displayDuration = v! as number;
                return true;
            case "playbackduration":
                obj.playbackDuration = v! as number;
                return true;
            case "dynamics":
                obj.dynamics = JsonHelper.parseEnum<DynamicValue>(v, DynamicValue)!;
                return true;
            case "invertbeamdirection":
                obj.invertBeamDirection = v! as boolean;
                return true;
            case "preferredbeamdirection":
                obj.preferredBeamDirection = JsonHelper.parseEnum<BeamDirection>(v, BeamDirection);
                return true;
            case "beamingmode":
                obj.beamingMode = JsonHelper.parseEnum<BeatBeamingMode>(v, BeatBeamingMode)!;
                return true;
        } 
        return false; 
    }
}

