import { join } from 'path';
import { Rdf, ShapeBuilder, property, inverseProperty, self, frame, flatten } from '../src/index';
import { rdf } from './namespaces';
import { toJson, readTriplesFromTurtle, triplesToTurtleString } from './util';

const triples = readTriplesFromTurtle(join(__dirname, 'list.ttl'));

const schema = new ShapeBuilder();

const list = schema.list(schema.resource());

const listOwner = schema.object({
  properties: {
    list: property(Rdf.iri('example:hasList'), list)
  }
});

const listOfUnion = schema.object({
  properties: {
    list: property(Rdf.iri('example:hasList'), schema.list(
      schema.union(
        schema.constant(Rdf.iri('example:b1')),
        schema.constant(Rdf.iri('example:b2')),
      )
    ))
  }
});

const listSelf = schema.object({
  properties: {
    owner: inverseProperty(Rdf.iri('example:hasList'), schema.resource()),
    list: self(list),
    rest: property(rdf.rest, list),
    restAsIri: property(rdf.rest, schema.resource()),
  }
});

const PREFIXES = {
  rdf: rdf.NAMESPACE,
};

(async function main() {
  for (const {value} of frame({rootShape: list, shapes: schema.shapes, triples})) {
    console.log('FRAME list', toJson(value));
    const triples = flatten({value, rootShape: list, shapes: schema.shapes});
    console.log('FLATTEN:\n', await triplesToTurtleString(triples, PREFIXES));
  }

  for (const {value} of frame({rootShape: listOwner, shapes: schema.shapes, triples})) {
    console.log('FRAME list owner', toJson(value));
    const triples = flatten({value, rootShape: listOwner, shapes: schema.shapes});
    console.log('FLATTEN:\n', await triplesToTurtleString(triples, PREFIXES));
  }

  for (const {value} of frame({rootShape: listOfUnion, shapes: schema.shapes, triples})) {
    console.log('FRAME list of union', toJson(value));
    const triples = flatten({value, rootShape: listOfUnion, shapes: schema.shapes});
    console.log('FLATTEN:\n', await triplesToTurtleString(triples, PREFIXES));
  }

  for (const {value} of frame({rootShape: listSelf, shapes: schema.shapes, triples})) {
    console.log('FRAME list self', toJson(value));
    const triples = flatten({value, rootShape: listSelf, shapes: schema.shapes});
    console.log('FLATTEN:\n', await triplesToTurtleString(triples, PREFIXES));
  }
})();
