import {Model} from './Model';
import {X, Y, SIZE} from '../channel';
import {applyColorAndOpacity, ColorMode} from './util';

export namespace tick {
  export function markType() {
    return 'rect';
  }

  export function properties(model: Model) {
    var p: any = {};

    // x
    if (model.has(X)) {
      p.xc = {
        scale: model.scaleName(X),
        field: model.field(X, { binSuffix: '_mid' })
      };
    } else {
      p.xc = { value: 21 /* config.scale.bandWidth */ / 2 };
    }

    // y
    if (model.has(Y)) {
      p.yc = {
        scale: model.scaleName(Y),
        field: model.field(Y, { binSuffix: '_mid' })
      };
    } else {
      p.yc = { value: 21 /* config.scale.bandWidth */ / 2 };
    }

    if (model.config().mark.orient === 'horizontal') {
      p.width = { value: model.config().mark.thickness };
      p.height = model.has(SIZE)? {
            scale: model.scaleName(SIZE),
            field: model.field(SIZE)
        } : {
            value: model.sizeValue(Y)
        };
    } else {
      p.width = model.has(SIZE)? {
          scale: model.scaleName(SIZE),
          field: model.field(SIZE)
        } : {
          value: model.sizeValue(X)
        };
      p.height = { value: model.config().mark.thickness };
    }

    applyColorAndOpacity(p, model, ColorMode.ALWAYS_FILLED);
    return p;
  }

  export function labels(model: Model) {
    // TODO(#240): fill this method
    return undefined;
  }
}
