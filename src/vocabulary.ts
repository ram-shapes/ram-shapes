import * as Rdf from './rdf';

export namespace rdf {
  export const NAMESPACE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
  export const first = NAMESPACE + 'first';
  export const langString = NAMESPACE + 'langString';
  export const nil = NAMESPACE + 'nil';
  export const rest = NAMESPACE + 'rest';
  export const type = NAMESPACE + 'type';
}

export namespace xsd {
  export const NAMESPACE = 'http://www.w3.org/2001/XMLSchema#';
  export const string = NAMESPACE + 'string';
  export const boolean = NAMESPACE + 'boolean';
  export const integer = NAMESPACE + 'integer';
  export const double = NAMESPACE + 'double';
  export const decimal = NAMESPACE + 'decimal';
  export const nonNegativeInteger = NAMESPACE + 'nonNegativeInteger';
  export const dateTime = NAMESPACE + 'dateTime';
}

export namespace ramp {
  export const NAMESPACE = 'http://ramp-shapes.github.io/schema#';
  export const Shape = NAMESPACE + 'Shape';
}

export function makeRampVocabulary(factory: Rdf.DataFactory) {
  const NAMESPACE = ramp.NAMESPACE;
  return {
    NAMESPACE,
    Shape: factory.namedNode(NAMESPACE + 'Shape'),
    ShapeID: factory.namedNode(NAMESPACE + 'ShapeID'),
    ShapeTypeVocabulary: factory.namedNode(NAMESPACE + 'ShapeTypeVocabulary'),
    ShapeBase: factory.namedNode(NAMESPACE + 'ShapeBase'),
    lenient: factory.namedNode(NAMESPACE + 'lenient'),

    // Object
    ObjectShape: factory.namedNode(NAMESPACE + 'ObjectShape'),
    extends: factory.namedNode(NAMESPACE + 'extends'),
    typeProperty: factory.namedNode(NAMESPACE + 'typeProperty'),
    property: factory.namedNode(NAMESPACE + 'property'),
    computedProperty: factory.namedNode(NAMESPACE + 'computedProperty'),

    // ObjectProperty and ComputedProperty
    ObjectProperty: factory.namedNode(NAMESPACE + 'ObjectProperty'),
    ComputedProperty: factory.namedNode(NAMESPACE + 'ComputedProperty'),
    PropertyPath: factory.namedNode(NAMESPACE + 'PropertyPath'),
    PropertyPathVocabulary: factory.namedNode(NAMESPACE + 'PropertyPathVocabulary'),
    PredicatePath: factory.namedNode(NAMESPACE + 'PredicatePath'),
    SequencePath: factory.namedNode(NAMESPACE + 'SequencePath'),
    InversePath: factory.namedNode(NAMESPACE + 'InversePath'),
    AlternativePath: factory.namedNode(NAMESPACE + 'AlternativePath'),
    ZeroOrMorePath: factory.namedNode(NAMESPACE + 'ZeroOrMorePath'),
    ZeroOrOnePath: factory.namedNode(NAMESPACE + 'ZeroOrOnePath'),
    OneOrMorePath: factory.namedNode(NAMESPACE + 'OneOrMorePath'),
    name: factory.namedNode(NAMESPACE + 'name'),
    shape: factory.namedNode(NAMESPACE + 'shape'),
    path: factory.namedNode(NAMESPACE + 'path'),
    transient: factory.namedNode(NAMESPACE + 'transient'),
    inversePath: factory.namedNode(NAMESPACE + 'inversePath'),
    alternativePath: factory.namedNode(NAMESPACE + 'alternativePath'),
    zeroOrMorePath: factory.namedNode(NAMESPACE + 'zeroOrMorePath'),
    zeroOrOnePath: factory.namedNode(NAMESPACE + 'zeroOrOnePath'),
    oneOrMorePath: factory.namedNode(NAMESPACE + 'oneOrMorePath'),

    // Resource and Literal
    ResourceShape: factory.namedNode(NAMESPACE + 'ResourceShape'),
    LiteralShape: factory.namedNode(NAMESPACE + 'LiteralShape'),
    onlyNamed: factory.namedNode(NAMESPACE + 'onlyNamed'),
    termDatatype: factory.namedNode(NAMESPACE + 'termDatatype'),
    termLanguage: factory.namedNode(NAMESPACE + 'termLanguage'),
    termValue: factory.namedNode(NAMESPACE + 'termValue'),
    keepAsTerm: factory.namedNode(NAMESPACE + 'keepAsTerm'),

    // Union
    UnionShape: factory.namedNode(NAMESPACE + 'UnionShape'),
    variant: factory.namedNode(NAMESPACE + 'variant'),

    // Optional and Set
    OptionalShape: factory.namedNode(NAMESPACE + 'OptionalShape'),
    SetShape: factory.namedNode(NAMESPACE + 'SetShape'),
    item: factory.namedNode(NAMESPACE + 'item'),
    minCount: factory.namedNode(NAMESPACE + 'minCount'),
    maxCount: factory.namedNode(NAMESPACE + 'maxCount'),

    // List; also uses "item"
    ListShape: factory.namedNode(NAMESPACE + 'ListShape'),
    headPath: factory.namedNode(NAMESPACE + 'headPath'),
    tailPath: factory.namedNode(NAMESPACE + 'tailPath'),
    nil: factory.namedNode(NAMESPACE + 'nil'),

    // Map; also uses "item"
    MapShape: factory.namedNode(NAMESPACE + 'MapShape'),
    mapKey: factory.namedNode(NAMESPACE + 'mapKey'),
    mapValue: factory.namedNode(NAMESPACE + 'mapValue'),

    // ShapeReference
    ShapeReference: factory.namedNode(NAMESPACE + 'ShapeReference'),
    TermPartVocabulary: factory.namedNode(NAMESPACE + 'TermPartVocabulary'),
    TermDatatype: factory.namedNode(NAMESPACE + 'TermDatatype'),
    TermLanguage: factory.namedNode(NAMESPACE + 'TermLanguage'),
    TermValue: factory.namedNode(NAMESPACE + 'TermValue'),
    termPart: factory.namedNode(NAMESPACE + 'termPart'),

    // Vocabulary; also uses "termValue"
    Vocabulary: factory.namedNode(NAMESPACE + 'Vocabulary'),
    vocabulary: factory.namedNode(NAMESPACE + 'vocabulary'),
    vocabItem: factory.namedNode(NAMESPACE + 'vocabItem'),
    vocabKey: factory.namedNode(NAMESPACE + 'vocabKey'),
  };
}
