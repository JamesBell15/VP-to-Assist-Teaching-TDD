const rubyGenerator = new Blockly.Generator('RUBY');
rubyGenerator.PRECEDENCE = 0;

// allow blocks to join together
rubyGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + '\n' + rubyGenerator.blockToCode(nextBlock);
  }
  return code;
};

// value generators
// nil
rubyGenerator['logic_null'] = function(block) {
  return ['nil', rubyGenerator.PRECEDENCE];
};

// text
rubyGenerator['text'] = function(block) {
  const textValue = block.getFieldValue('TEXT');
  const code = `"${textValue}"`;
  return [code, rubyGenerator.PRECEDENCE];
};

// number
rubyGenerator['math_number'] = function(block) {
  const code = String(block.getFieldValue('NUM'));
  return [code, rubyGenerator.PRECEDENCE];
};

// boolean
rubyGenerator['logic_boolean'] = function(block) {
  const code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, rubyGenerator.PRECEDENCE];
};

// statement generators
// print text
rubyGenerator['p'] = function(block) {
  const value = rubyGenerator.valueToCode(
      block, 'P_VALUE', rubyGenerator.PRECEDENCE);
  const code = `p ${value}`;
  return code;
};

// describe
// it block
rubyGenerator['describe'] = function(block) {
  const value = block.getFieldValue('DESCRIBE_VALUE')
  const statement = rubyGenerator.statementToCode(
      block, 'DESCRIBE_STATEMENT', rubyGenerator.PRECEDENCE);
  const code = `RSpec.describe "${value}" do\n${statement}\nend`;
  return code;
};

// it block
rubyGenerator['it'] = function(block) {
  const value = block.getFieldValue('IT_VALUE')
  const statement = rubyGenerator.statementToCode(
      block, 'IT_STATEMENT', rubyGenerator.PRECEDENCE);
  const code = `it "${value}" do\n${statement}\nend`;
  return code;
};

// expects
rubyGenerator['expect'] = function(block) {
  const value = block.getFieldValue('EXPECT_VALUE')
  const statement = rubyGenerator.statementToCode(
      block, 'EXPECT_STATEMENT', rubyGenerator.PRECEDENCE);
  const code = `expect(${value}).to${statement}`;
  return code;
};

// eq
rubyGenerator['eq'] = function(block) {
  const value = block.getFieldValue('EQ_VALUE')
  const code = `eq(${value})`;
  return code;
};

// path to
rubyGenerator['path_to'] = function(block) {
  const value = block.getFieldValue('PATH');
  const code = value;
  return code + "__";
};
