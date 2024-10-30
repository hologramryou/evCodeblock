// Basic Text Block
Blocks['text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput('abc'));
        this.setOutput(true, 'String');
        this.setColour(160);
        this.setTooltip('A text string');
        this.setHelpUrl('');
        // Thêm spacing để tạo khoảng cách
        this.setSpacing(true);
    }
};

// Text Join Block
Blocks['text_join'] = {
    init: function () {
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, 'String');
        this.setColour(160);
        this.setTooltip('Create a piece of text by joining together any number of items');
        this.setHelpUrl('');
    },
    updateShape_: function () {
        if (this.itemCount_ == 0) {
            this.appendDummyInput()
                .appendField('create empty text');
        } else {
            this.appendDummyInput()
                .appendField('join');
            for (var i = 0; i < this.itemCount_; i++) {
                if (i > 0) {
                    this.appendDummyInput()
                        .appendField('with');
                }
                this.appendValueInput('ADD' + i)
                    .setCheck('String');
            }
        }
    }
};

// Text Append Block
Blocks['text_append'] = {
    init: function () {
        this.setColour(160);
        this.appendValueInput('TEXT')
            .appendField('append text')
            .setCheck('String');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Append some text to variable %1');
    }
};

// Text Length Block
Blocks['text_length'] = {
    init: function () {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text');
    }
};

// Text Reverse Block
Blocks['text_reverse'] = {
    init: function () {
        this.appendValueInput('TEXT')
            .setCheck('String')
            .appendField('reverse text');

        // Thêm khoảng cách giữa các field
        this.setInputsInline(false);

        // Đặt kiểu output
        this.setOutput(true, 'String');

        // Đặt màu cho block
        this.setColour(160);

        // Thêm một khoảng trống nhỏ
        this.setPaddingRight(10);

        // Đặt tooltip
        this.setTooltip('Reverse the characters in the text');

        // Cho phép block được di chuyển
        this.setMovable(true);

        // Thêm khoảng cách với block khác
        this.setSpacing(20);
    }
};
// Text Replace Block
Blocks['text_replace'] = {
    init: function () {
        this.appendValueInput('TEXT')
            .setCheck('String')
            .appendField('in text');
        this.appendValueInput('FROM')
            .setCheck('String')
            .appendField('replace');
        this.appendValueInput('TO')
            .setCheck('String')
            .appendField('with');
        this.setOutput(true, 'String');
        this.setColour(160);
        this.setInputsInline(true);
        this.setTooltip('Replace all occurrences of some text within some other text');
    }
};

Blockly.Blocks['add_text'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("add text");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Add text to a string.");
        this.setHelpUrl("");
    }
};


// JavaScript generators for the blocks
JavaScript['text'] = function (block) {
    var code = JSON.stringify(block.getFieldValue('TEXT'));
    return [code, JavaScript.ORDER_ATOMIC];
};

JavaScript['text_join'] = function (block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = JavaScript.valueToCode(block, 'ADD' + i,
            JavaScript.ORDER_NONE) || '\'\'';
    }
    var code = elements.join(' + ');
    return [code, JavaScript.ORDER_ADDITION];
};

JavaScript['text_append'] = function (block) {
    var value = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_NONE) || '\'\'';
    var varName = JavaScript.nameDB_.getName(block.getFieldValue('VAR'), 'VARIABLE');
    return varName + ' += ' + value + ';\n';
};

JavaScript['text_length'] = function (block) {
    var text = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_MEMBER) || '\'\'';
    return [text + '.length', JavaScript.ORDER_MEMBER];
};

JavaScript['text_reverse'] = function (block) {
    var text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_MEMBER) || '\'\'';
    return [text + '.split(\'\').reverse().join(\'\')', JavaScript.ORDER_FUNCTION_CALL];
};

JavaScript['text_replace'] = function (block) {
    var text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_MEMBER) || '\'\'';
    var from = JavaScript.valueToCode(block, 'FROM', JavaScript.ORDER_NONE) || '\'\'';
    var to = JavaScript.valueToCode(block, 'TO', JavaScript.ORDER_NONE) || '\'\'';
    return [text + '.replace(new RegExp(' + from + ', \'g\'), ' + to + ')',
    JavaScript.ORDER_FUNCTION_CALL];
};