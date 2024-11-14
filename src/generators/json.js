import * as Blockly from 'blockly';

export const jsonGenerator = new Blockly.Generator('JSON');

const Order = {
  ATOMIC: 0,
};

jsonGenerator.forBlock['logic_null'] = function (block) {
  return ['ĐỊT MẸ MÀY', Order.ATOMIC];
};

jsonGenerator.forBlock['text'] = function (block) {
  const textValue = block.getFieldValue('TEXT');
  const code = `"${textValue}"`;
  return [code, Order.ATOMIC];
};

//Thao tác di chuyển
// Generator for the 'print' block
jsonGenerator.forBlock['print'] = function (block, generator) {
  // Get the MEMBER_VALUE, which is generated by any connected block (e.g., a 'text' block)
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  // Generate code in the form of print("value")
  const code = `alert(${value});\n`;  // Adding semicolon and newline for separation
  return code;
};

jsonGenerator.forBlock['move_forward'] = function (block, generator) {
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `Tiến lên (${value}) bước!;\n`;
  return code;
};

jsonGenerator.forBlock['move_backward'] = function (block, generator) {
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `Đi lùi (${value}) bước!;\n`;
  return code;
};

jsonGenerator.forBlock['turn_left'] = function (block, generator) {
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `Quay trái (${value}) bước!;\n`;
  return code;
};

jsonGenerator.forBlock['turn_right'] = function (block, generator) {
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `Quay phải (${value}) bước!;\n`;
  return code;
};

//Thao tác di chuyển vĩnh cửu
jsonGenerator.forBlock['move_forward_infi'] = function (block, generator) {
  const code = `while (true) {\n  Tiến lên!;\n}\n`;
  return code;
};

jsonGenerator.forBlock['move_backward_infi'] = function (block, generator) {
  const code = `while (true) {\n  Đi lùi!;\n}\n`;
  return code;
};

jsonGenerator.forBlock['turn_left_infi'] = function (block, generator) {
  const code = `while (true) {\n  Quay trái!;\n}\n`;
  return code;
};

jsonGenerator.forBlock['turn_right_infi'] = function (block, generator) {
  const code = `while (true) {\n  Quay phải!;\n}\n`;
  return code;
};

//Thao tác linh kiện
jsonGenerator.forBlock['turn_up'] = function (block, generator) {
  const code = `Quay lên (value?);\n`;
  return code;
};

jsonGenerator.forBlock['turn_down'] = function (block, generator) {
  const code = `Quay xuống (value?);\n`;
  return code;
};


jsonGenerator.forBlock['rotate'] = function (block, generator) {
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `Quay (${value}) độ;\n`;
  return code;
};

//Các loại giá trị
jsonGenerator.forBlock['step'] = function (block) {
  const stepValue = block.getFieldValue('NUM');
  const code = String(stepValue);
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock['degree'] = function (block) {
  const stepValue = block.getFieldValue('NUM');
  const code = String(stepValue);
  return [code, Order.ATOMIC];
};

//Các mục khác
jsonGenerator.forBlock['math_number'] = function (block) {
  const code = String(block.getFieldValue('NUM'));
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock['logic_boolean'] = function (block) {
  const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock['member'] = function (block, generator) {
  const name = block.getFieldValue('MEMBER_NAME');
  const value = generator.valueToCode(
    block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `"${name}": ${value}`;
  return code;
};

jsonGenerator.forBlock['lists_create_with'] = function (block, generator) {
  const values = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, 'ADD' + i,
      Order.ATOMIC);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(',\n');
  const indentedValueString =
    generator.prefixLines(valueString, generator.INDENT);
  const codeString = '[\n' + indentedValueString + '\n]';
  return [codeString, Order.ATOMIC];
};

jsonGenerator.forBlock['object'] = function (block, generator) {
  const statementMembers =
    generator.statementToCode(block, 'MEMBERS');
  const code = '{\n' + statementMembers + '\n}';
  return [code, Order.ATOMIC];
};

jsonGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock =
    block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ',\n' + jsonGenerator.blockToCode(nextBlock);
  }
  return code;
};
