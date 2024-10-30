Blocks['math_arithmetic'] = {
    init: function () {
        this.appendValueInput('A')
            .setCheck('Number');
        this.appendValueInput('B')
            .setCheck('Number')
            .appendField(new Blockly.FieldDropdown([
                ['+', 'ADD'],
                ['-', 'MINUS'],
                ['×', 'MULTIPLY'],
                ['÷', 'DIVIDE'],
                ['^', 'POWER']
            ]), 'OP');
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('Do arithmetic operations');
        this.setHelpUrl('');
    }
};

JavaScript['math_arithmetic'] = function (block) {
    var operators = {
        'ADD': [' + ', JavaScript.ORDER_ADDITION],
        'MINUS': [' - ', JavaScript.ORDER_SUBTRACTION],
        'MULTIPLY': [' * ', JavaScript.ORDER_MULTIPLICATION],
        'DIVIDE': [' / ', JavaScript.ORDER_DIVISION],
        'POWER': [' ** ', JavaScript.ORDER_EXPONENTIATION]
    };
    var tuple = operators[block.getFieldValue('OP')];
    var operator = tuple[0];
    var order = tuple[1];
    var valueA = JavaScript.valueToCode(block, 'A', order);
    var valueB = JavaScript.valueToCode(block, 'B', order);
    var code = valueA + operator + valueB;
    return [code, order];
};