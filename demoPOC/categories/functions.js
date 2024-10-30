// Định nghĩa các khối hàm
Blockly.Blocks['procedures_defnoreturn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("define function");
        this.appendStatementInput("STACK")
            .appendField("do");
        this.setColour(290);
    }
};

Blockly.Blocks['procedures_callnoreturn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("call function");
        this.setPreviousStatement(true);
        this.setColour(290);
    }
};
