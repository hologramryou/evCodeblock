Blocks['controls_repeat_ext'] = {
    init: function () {
        this.appendValueInput('TIMES')
            .setCheck('Number')
            .appendField('repeat');
        this.appendStatementInput('DO')
            .appendField('do');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('Repeat some statements');
        this.setHelpUrl('');
    }
};

JavaScript['controls_repeat_ext'] = function (block) {
    var times = JavaScript.valueToCode(block, 'TIMES', JavaScript.ORDER_ATOMIC);
    var branch = JavaScript.statementToCode(block, 'DO');
    return 'for (let count = 0; count < ' + times + '; count++) {\n' + branch + '}\n';
};