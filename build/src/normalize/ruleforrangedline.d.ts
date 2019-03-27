import { Encoding } from '../encoding';
import { Field } from '../fielddef';
import { GenericSpec } from '../spec/index';
import { GenericUnitSpec } from '../spec/unit';
import { NonFacetUnitNormalizer, NormalizeLayerOrUnit, NormalizerParams } from './base';
interface EncodingX2Mixins {
    x2: Encoding<Field>['x2'];
}
interface EncodingY2Mixins {
    y2: Encoding<Field>['y2'];
}
declare type RangedLineSpec = GenericUnitSpec<Encoding<Field> & (EncodingX2Mixins | EncodingY2Mixins), 'line'>;
export declare class RuleForRangedLineNormalizer implements NonFacetUnitNormalizer<RangedLineSpec> {
    name: string;
    hasMatchingType(spec: GenericSpec<any, any>): spec is RangedLineSpec;
    run(spec: RangedLineSpec, params: NormalizerParams, normalize: NormalizeLayerOrUnit): GenericUnitSpec<Encoding<Field>, "square" | "area" | "circle" | "line" | "rect" | "text" | "rule" | "trail" | "point" | "geoshape" | "bar" | "tick" | import("../mark").MarkDef<import("../mark").Mark>> | import("../spec").GenericLayerSpec<GenericUnitSpec<Encoding<Field>, "square" | "area" | "circle" | "line" | "rect" | "text" | "rule" | "trail" | "point" | "geoshape" | "bar" | "tick" | import("../mark").MarkDef<import("../mark").Mark>>>;
}
export {};
