import { ScoreImporter } from '@src/importer/ScoreImporter';
import { UnsupportedFormatError } from '@src/importer/UnsupportedFormatError';
import { IOHelper } from '@src/io/IOHelper';
import { JsonConverter } from '@src/model/JsonConverter';
import { ByteBuffer } from '@src/io/ByteBuffer';
import { Settings } from '@src/Settings';
export class BinaryImporter extends ScoreImporter {
    get name() {
        return 'Binary';
    }
    read(data: Uint8Array, settings: Settings) {
        if (!settings) {
            settings = new Settings();
        }
        this.init(ByteBuffer.fromBuffer(data), settings);
        return this.readScore();
    }
    readScore() {
        let data = IOHelper.toString(this.data.readAll(), this.settings.importer.encoding);
        if (!data) {
            throw new UnsupportedFormatError('No data file found in zip');
        }
        return JsonConverter.jsonToScore(data, this.settings);
    }
}
//# sourceMappingURL=BinaryImporter.js.map
