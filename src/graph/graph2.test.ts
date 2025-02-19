const schema = {
  event: {
    types: ['AaGd6UMXfNtL6U6Xx7K8Cv'], // Event type
  },
};

const { ops, id: ageAttributeId } = createAttributeEntity({
  type: 'NUMBER',
  name: 'Age',
});

const { ops, id: metFirstAttributeId } = createAttributeEntity({
  type: 'TIME',
  name: 'Met First',
});

const { ops, mapping } = createType({
  attributes: {
    name: {
      id: NAME_ATTRIBUTE,
      type: 'TEXT',
    },
    age: {
      id: ageAttributeId,
      type: 'NUMBER',
    },
  },
  relations: {
    friend: {
      relationTypeId: 'AaGd6UMXfNtL6U6Xx7K8Cv',
      attributes: {
        metFirst: {
          id: metFirstAttributeId,
          type: 'TIME',
        },
      },
    },
  },
});

schema.person = mapping;

const createEntity = createEntityFactory(schema);

const { ops: personOps, mapping: personMapping } = createEntity({
  attributes: {
    name: 'John Doe',
  },
  relations: {
    friend: [
      {
        id: 'ABCD', // other person ID
        attributes: {
          metFirst: 'Jane Doe',
        },
      },
    ],
  },
});
