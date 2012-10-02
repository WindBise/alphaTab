package alphatab.rendering.glyphs;
import alphatab.model.AccentuationType;
import alphatab.model.Beat;
import alphatab.model.Duration;
import alphatab.model.HarmonicType;
import alphatab.model.Note;
import alphatab.rendering.Glyph;
import alphatab.rendering.ScoreBarRenderer;
import alphatab.rendering.utils.BeamingHelper;

class ScoreBeatGlyph extends GlyphGroup
{
	public var accidentals:AccidentalGroupGlyph;
	public var noteHeads : NoteChordGlyph;
	public var restGlyph : RestGlyph;
	
	public var beat:Beat;
	
	public var beamingHelper:BeamingHelper;
	
	public function new(b:Beat) 
	{
		super();
		beat = b;
	}
	
	public override function applyGlyphSpacing(spacing:Int):Dynamic 
	{
		super.applyGlyphSpacing(spacing);
		noteHeads.updateBeamingHelper(x);
	}
		
	public override function doLayout():Dynamic 
	{
		// create glyphs
		if (!beat.isRest())
        {
            var noteLoop = function( action:Note -> Void ) {
                var i = beat.notes.length -1;
                while ( i >= 0 )
                {
                    action(beat.notes[i--]);
                }
            }
			
			//
            // Accidentals
            //
            accidentals = new AccidentalGroupGlyph(0, 0);
            noteLoop( function(n) {
                createAccidentalGlyph(n);
            });
			addGlyph(accidentals);
            
			//
            // Note heads
            //
            noteHeads = new NoteChordGlyph();
            noteHeads.beat = beat;
            noteHeads.beamingHelper = beamingHelper;
            noteLoop( function(n) {
                createNoteGlyph(n);
            });
            addGlyph(noteHeads);
			noteHeads.updateBeamingHelper(x);
			
			
            //
            // Note dots
            //
            for (i in 0 ... beat.dots)
            {
                var group = new GlyphGroup();
                noteLoop( function (n) {
                    createBeatDot(n, group);                    
                });
                addGlyph(group);
            }
		}
		else
		{
			var line = 0;
        
			switch(beat.duration)
			{
				case Whole:         
					line = 4;
				case Half:          
					line = 5;
				case Quarter:       
					line = 6;
				case Eighth:        
					line = 8;
				case Sixteenth:     
					line = 8;
				case ThirtySecond:  
					line = 8;
				case SixtyFourth:   
					line = 8;
			}
			
			var sr = cast(renderer, ScoreBarRenderer);
			var y = sr.getScoreY(line);

			addGlyph(new RestGlyph(0, y, beat.duration));
		}
		
		addGlyph(new SpacingGlyph(0, 0, Std.int(getBeatDurationWidth(beat.duration) * getScale())));
		super.doLayout();
	}
	
    private function createBeatDot(n:Note, group:GlyphGroup)
    {			
		var sr = cast(renderer, ScoreBarRenderer);
        group.addGlyph(new CircleGlyph(0, sr.getScoreY(sr.getNoteLine(n), Std.int(2*getScale())), 1.5 * getScale()));
    }

	private function createNoteGlyph(n:Note) 
    {
		var sr = cast(renderer, ScoreBarRenderer);
        var noteHeadGlyph:Glyph;
        if (n.harmonicType == HarmonicType.None)
        {
            noteHeadGlyph = new NoteHeadGlyph(n.beat.duration);
        }
        else
        {
            noteHeadGlyph = new DiamondNoteHeadGlyph();
        }

                
        // calculate y position
        var line = sr.getNoteLine(n);
        
        noteHeadGlyph.y = sr.getScoreY(line, -1);
        noteHeads.addNoteGlyph(noteHeadGlyph, n, line);
        
        if (n.isStaccato && !noteHeads.beatEffects.exists("STACCATO"))
        {
            noteHeads.beatEffects.set("STACCATO",  new CircleGlyph(0, 0, 1.5));
        }
        
        if (n.accentuated == AccentuationType.Normal && !noteHeads.beatEffects.exists("ACCENT"))
        {
            noteHeads.beatEffects.set("ACCENT",  new AccentuationGlyph(0, 0, AccentuationType.Normal));
        }
        if (n.accentuated == AccentuationType.Heavy && !noteHeads.beatEffects.exists("HACCENT"))
        {
            noteHeads.beatEffects.set("HACCENT",  new AccentuationGlyph(0, 0, AccentuationType.Heavy));
        }
		
		if (n.isTieDestination && n.tieOrigin != null) 
		{
			addGlyph(new ScoreTieGlyph(n.tieOrigin, n));
		}
    }
	
    private function createAccidentalGlyph(n:Note)
    {
		var sr = cast(renderer, ScoreBarRenderer);
        var noteLine = sr.getNoteLine(n);
        var accidental = sr.accidentalHelper.applyAccidental(n, noteLine);
        switch (accidental) 
        {
            case Sharp:   accidentals.addGlyph(new SharpGlyph(0, sr.getScoreY(noteLine)));
            case Flat:    accidentals.addGlyph(new FlatGlyph(0, sr.getScoreY(noteLine)));
            case Natural: accidentals.addGlyph(new NaturalizeGlyph(0, sr.getScoreY(noteLine + 1)));
            default:
        }
    }
    
    private function getBeatDurationWidth(d:Duration) : Int
    {
        switch(d)
        {
            case Whole:         return 82;
            case Half:          return 56;
            case Quarter:       return 36;
            case Eighth:        return 24;
            case Sixteenth:     return 14;
            case ThirtySecond:  return 14;
            case SixtyFourth:   return 14;
            default: return 0;
        }
    }	
}