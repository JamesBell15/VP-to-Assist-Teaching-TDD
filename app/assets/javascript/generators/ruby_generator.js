const rubyGenerator = new Blockly.Generator('RUBY');
rubyGenerator.PRECEDENCE = 0;


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

// print text
rubyGenerator['p'] = function(block) {
  const value = rubyGenerator.valueToCode(
      block, 'P_VALUE', rubyGenerator.PRECEDENCE);
  const code = `p ${value}`;
  return code;
};

// it block
rubyGenerator['it'] = function(block) {
  const value = rubyGenerator.valueToCode(
      block, 'IT_VALUE', rubyGenerator.PRECEDENCE);
  const statement = rubyGenerator.statementToCode(
      block, 'IT_STATEMENT', rubyGenerator.PRECEDENCE);
  const code = `it ${value} do\n${statement}\nend`;
  return code;
};

// describe
rubyGenerator['describe'] = function(block) {
  const value = rubyGenerator.valueToCode(
      block, 'PATH', rubyGenerator.PRECEDENCE);
  const code = value;
  return code;
};