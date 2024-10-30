Blocks['controls_if'] = {
    init: function () {
        this.appendValueInput('IF0')
            .setCheck('Boolean')
            .appendField('if');
        this.appendStatementInput('DO0')
            .appendField('do');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('If a condition is true, then do some statements');
        this.setHelpUrl('');
    }
};

JavaScript['controls_if'] = function (block) {
    var condition = JavaScript.valueToCode(block, 'IF0', JavaScript.ORDER_NONE);
    var branch = JavaScript.statementToCode(block, 'DO0');
    return 'if (' + condition + ') {\n' + branch + '}\n';
};