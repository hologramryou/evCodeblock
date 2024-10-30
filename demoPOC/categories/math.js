Blocks['math_number'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0));
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('A number');
        this.setHelpUrl('');
    }
};

JavaScript['math_number'] = function (block) {
    var code = parseFloat(block.getFieldValue('NUM'));
    return [code, JavaScript.ORDER_ATOMIC];
};