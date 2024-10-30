// Khởi tạo Blockly workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
    <xml id="toolbox" style="display: none" >
    <category name="Logic" categorystyle="logic_category">
        <block type="controls_if"/>
        <block type="logic_compare"/>
        <block type="logic_operation"/>
        <block type="logic_negate"/>
        <block type="logic_boolean"/>
        <block type="logic_null"/>
        <block type="logic_ternary"/>
    </category>
    <category name="Loops" categorystyle="loop_category">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil"/>
        <block type="controls_for">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_forEach"/>
        <block type="controls_flow_statements"/>
    </category>
    <category name="Math" categorystyle="math_category">
        <block type="math_number">
            <field name="NUM">123</field>
        </block>
        <block type="math_arithmetic">
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="math_single">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">9</field>
                </shadow>
            </value>
        </block>
        <block type="math_trig">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
        <block type="math_constant"/>
        <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_round" colour="160">
            <field name="OP">ROUND</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">3.1</field>
                </shadow>
            </value>
        </block>
        <block type="math_on_list">
            <field name="OP">SUM</field>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="math_constrain">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="LOW">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="HIGH">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_float"/>
        <block type="math_atan2">
            <value name="X">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="Text" categorystyle="text_category">
        <block type="text"/>
        <block type="text_join"/>
        <block type="text_append">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="text_length">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_isEmpty">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="text_indexOf">
            <value name="VALUE">
                <block type="variables_get"/>
            </value>
            <value name="FIND">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_charAt">
            <value name="VALUE">
                <block type="variables_get"/>
            </value>
        </block>
        <block type="text_getSubstring">
            <value name="STRING">
                <block type="variables_get"/>
            </value>
        </block>
        <block type="text_changeCase">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_trim">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_count">
            <value name="SUB">
                <shadow type="text"/>
            </value>
            <value name="TEXT">
                <shadow type="text"/>
            </value>
        </block>
        <block type="text_replace">
            <value name="FROM">
                <shadow type="text"/>
            </value>
            <value name="TO">
                <shadow type="text"/>
            </value>
            <value name="TEXT">
                <shadow type="text"/>
            </value>
        </block>
        <block type="text_reverse">
            <value name="TEXT">
                <shadow type="text"/>
            </value>
        </block>
    </category>
    <category name="Lists" categorystyle="list_category">
        <block type="lists_create_with"/>
        <block type="lists_create_with"/>
        <block type="lists_repeat">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
        </block>
        <block type="lists_length"/>
        <block type="lists_isEmpty"/>
        <block type="lists_indexOf">
            <value name="VALUE">
                <block type="variables_get"/>
            </value>
        </block>
        <block type="lists_getIndex">
            <value name="VALUE">
                <block type="variables_get"/>
            </value>
        </block>
        <block type="lists_setIndex">
            <value name="LIST">
                <block type="variables_get"/>
            </value>
        </block>
        <block type="lists_getSublist">
            <value name="LIST">
                <block type="variables_get"/>
            </value>
        </block>
        <block type="lists_split">
            <value name="DELIM">
                <shadow type="text">
                    <field name="TEXT">,</field>
                </shadow>
            </value>
        </block>
        <block type="lists_sort"/>
        <block type="lists_reverse"/>
    </category>
    <category name="Operators" colour="#5C81A6">
        <block type="math_number">
            <field name="NUM">0</field>
        </block>
        <block type="math_arithmetic">
            <field name="OP">ADD</field>
            <value name="A">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="B">
                <block type="math_number">
                    <field name="NUM">2</field>
                </block>
            </value>
        </block>
    </category>
    <category name="Events" colour="#FFAB19">
        <block type="event_whenflagclicked">
            <field name="flag">1</field>
        </block>
        <block type="event_whenkeypressed">
            <field name="KEY">space</field>
        </block>
    </category>
    <category name="Control" colour="#D65F5F">
        <block type="controls_wait">
            <value name="DURATION">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <field name="TIME_UNIT">seconds</field>
        </block>
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="controls_forever">
            <statement name="DO">
            </statement>
        </block>
        <block type="controls_stop">
            <field name="STOP">all</field>
        </block>
        <block type="event_whencloned"></block>
        <block type="controls_create_clone_of">
            <field name="CLONE">myself</field>
        </block>
        <block type="controls_delete_this_clone"></block>
    </category>
    <sep/>
    <category name="Variables" categorystyle="variable_category" custom="VARIABLE"/>
    <category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"/>
</xml>

    `,
    scrollbars: true,
    trashcan: true,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    }
});

// Hàm để tạo mã JavaScript từ workspace
function generateCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('generatedCode').textContent = code;
}

// Hàm biên dịch mã JavaScript
function compileCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        eval(code);
    } catch (error) {
        console.error('Error executing code:', error);
        alert('Error executing code: ' + error.message);
    }
}
