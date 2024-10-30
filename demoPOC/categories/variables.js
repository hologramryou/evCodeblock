Blocks['variables_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable('item'), 'VAR');
        this.setOutput(true);
        this.setColour(330);
        this.setTooltip('Get the value of a variable');
        this.setHelpUrl('');
    }
};

JavaScript['variables_get'] = function (block) {
    var varName = JavaScript.nameDB_.getName(block.getFieldValue('VAR'), 'VARIABLE');
    return [varName, JavaScript.ORDER_ATOMIC];
};