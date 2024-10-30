// Hàm thêm khối tùy chỉnh
function addCustomBlock() {
    Blockly.Blocks['custom_print'] = {
        init: function () {
            this.appendValueInput("MESSAGE")
                .setCheck("String")
                .appendField("Custom Print");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
        }
    };

    Blockly.JavaScript['custom_print'] = function (block) {
        var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
        return 'console.log(' + message + ');\n';
    };
}
