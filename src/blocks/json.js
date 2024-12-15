import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        "type" : "object",
        "message0" : "{ %1 %2 }",
        "args0" : [
            {"type" : "input_dummy"},
            {"type" : "input_statement", "name" : "MEMBERS"}
        ],
        "output" : null,
        "colour" : 230,
    },
    {
        "type" : "member",
        "message0" : "%1 %2 %3",
        "args0" : [
            {"type" : "field_input", "name" : "MEMBER_NAME", "text" : ""},
            {"type" : "field_label", "name" : "COLON", "text" : ":"},
            {"type" : "input_value", "name" : "MEMBER_VALUE"}
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 230,
    },
    {
        "type" : "print",
        "message0" : "%1 %2 %3",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "print"},
            {"type" : "field_label", "name" : "COLON", "text" : ":"},
            {"type" : "input_value", "name" : "MEMBER_VALUE"}
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 230,
    },
    {
        "type" : "move",
        "message0" : "%1 %2 %3",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Di chuyển"
            },
            {"type" : "field_label", "name" : "COLON", "text" : ":"},
            {"type" : "input_value", "name" : "MEMBER_VALUE"}
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 230,
    },
    {
        "type" : "up",
        "message0" : "%1 %2 %3",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Đợi"},
            {"type" : "input_value", "name" : "MEMBER_VALUE"},
            {"type" : "field_label", "name" : "COLON", "text" : "ms"}
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : "ff9300",
    },
    // my commit
    {
        "type" : "speak",
        "message0" : "%1 %2 %3",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Nói"},
            {"type" : "field_label", "name" : "COLON", "text" : ":"},
            {"type" : "input_value", "name" : "TEXT_TO_SPEAK"}
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : "f500ff"
    },
    {
        "type" : "think",
        "message0" : "Nghĩ %1",
        "args0" : [ {
            "type" : "input_value",
            "name" : "TEXT_TO_THINK",
            "check" : "String"
        } ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : "f500ff",
        "tooltip" : "Stores the specified text to 'think' about",
        "helpUrl" : ""
    },
    {
        "type" : "repeat",
        "message0" : "%1 %2 %3 %4",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Lặp lại"
            },
            {"type" : "field_label", "name" : "COLON", "text" : ":"},
            {"type" : "input_value", "name" : "MEMBER_VALUE"},
            {"type" : "input_statement", "name" : "DO"}
        ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    {
        "type" : "forever",
        "message0" : "%1 %2 %3",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Liên tục"
            },
            {"type" : "field_label", "name" : "COLON", "text" : ":"},
            {"type" : "input_statement", "name" : "DO"}
        ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    {
        "type" : "if",
        "message0" : "%1 %2 %3 %4",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Nếu"},
            {"type" : "input_value", "name" : "CONDITION", "check" : "Boolean"},
            {"type" : "field_label", "name" : "THEN", "text" : "thì"},
            {"type" : "input_statement", "name" : "DO"}
        ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    {
        "type" : "if_else",
        "message0" : "%1 %2 %3 %4 %5 %6",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Nếu"},
            {"type" : "input_value", "name" : "CONDITION", "check" : "Boolean"},
            {"type" : "field_label", "name" : "THEN", "text" : "thì"},
            {"type" : "input_statement", "name" : "DO"},
            {"type" : "field_label", "name" : "ELSE", "text" : "nếu không"},
            {"type" : "input_statement", "name" : "DO_ELSE"}
        ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    {
        "type" : "wait_until",
        "message0" : "%1 %2 %3",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Đợi đến khi"
            },
            {"type" : "input_value", "name" : "CONDITION", "check" : "Boolean"},
            {"type" : "field_label", "name" : "THEN", "text" : "thì"}
        ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    {
        "type" : "repeat_until",
        "message0" : "%1 %2 %3 %4",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Lặp lại cho đến khi"
            },
            {"type" : "input_value", "name" : "CONDITION", "check" : "Boolean"},
            {"type" : "field_label", "name" : "THEN", "text" : "thì"},
            {"type" : "input_statement", "name" : "DO"}
        ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    {
        "type" : "stop",
        "message0" : "%1",
        "args0" : [ {
            "type" : "field_label",
            "name" : "MEMBER_NAME",
            "text" : "Dừng lại"
        } ],
        "colour" : "#ff9300",
        "previousStatement" : null,
        "nextStatement" : null
    },
    // cảm biến
    {
        "type" : "key_pressed",
        "message0" : "%1 %2",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Bàn phím: nút đang ấn"
            },
            {
                "type" : "field_dropdown",
                "name" : "KEY",
                "options" : [
                    [ "A", "a" ],        [ "B", "b" ], [ "C", "c" ],
                    [ "D", "d" ],        [ "E", "e" ], [ "F", "f" ],
                    [ "G", "g" ],        [ "H", "h" ], [ "I", "i" ],
                    [ "J", "j" ],        [ "K", "k" ], [ "L", "l" ],
                    [ "M", "m" ],        [ "N", "n" ], [ "O", "o" ],
                    [ "P", "p" ],        [ "Q", "q" ], [ "R", "r" ],
                    [ "S", "s" ],        [ "T", "t" ], [ "U", "u" ],
                    [ "V", "v" ],        [ "W", "w" ], [ "X", "x" ],
                    [ "Y", "y" ],        [ "Z", "z" ], [ "Space", " " ],
                    [ "Enter", "Enter" ]
                ]
            }
        ],
        "output" : "Boolean",
        "colour" : "00e4ff",
        "tooltip" : "Checks if the selected keyboard key is currently pressed",
        "helpUrl" : ""
    },
    {
        "type" : "ultrasonic_sensor_status",
        "message0" : "%1 %2",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "SENSOR_NAME",
                "text" : "Cảm biến siêu âm 1:"
            },
            {
                "type" : "field_dropdown",
                "name" : "STATUS_TYPE",
                "options" : [
                    [ "Khoảng cách", "DISTANCE" ],
                    [ "Có vật thể", "OBJECT_PRESENT" ],
                    [ "Không có vật thể", "NO_OBJECT" ]
                ]
            }
        ],
        "output" : "Number",
        "colour" : "00e4ff",
        "tooltip" :
            "Checks the status of Ultrasonic Sensor 1, such as distance or object presence",
        "helpUrl" : ""
    },
    {
        "type" : "ultrasonic_sensor2_status",
        "message0" : "%1 %2",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "SENSOR_NAME",
                "text" : "Cảm biến siêu âm 2:"
            },
            {
                "type" : "field_dropdown",
                "name" : "STATUS_TYPE",
                "options" : [
                    [ "Khoảng cách", "DISTANCE" ],
                    [ "Có vật thể", "OBJECT_PRESENT" ],
                    [ "Không có vật thể", "NO_OBJECT" ]
                ]
            }
        ],
        "output" : "Number",
        "colour" : "00e4ff",
        "tooltip" :
            "Checks the status of Ultrasonic Sensor 2, such as distance or object presence",
        "helpUrl" : ""
    },
    // Di chuyển
    {
        "type" : "move_backward",
        "message0" : "%1 %2 %3",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Đi lùi"},
            {"type" : "field_label", "name" : "COLON", "text" : ":"}, {
                "type" : "input_value",
                "name" : "MEMBER_VALUE",
                "check" : "StepNumber"
            }
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "move_forward",
        "message0" : "%1 %2 %3",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Tiến lên"
            },
            {"type" : "field_label", "name" : "COLON", "text" : ":"}, {
                "type" : "input_value",
                "name" : "MEMBER_VALUE",
                "check" : "StepNumber"
            }
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "turn_left",
        "message0" : "%1 %2 %3",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Quay trái"
            },
            {"type" : "field_label", "name" : "COLON", "text" : ":"}, {
                "type" : "input_value",
                "name" : "MEMBER_VALUE",
                "check" : "StepNumber"
            }
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "turn_right",
        "message0" : "%1 %2 %3",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Quay phải"
            },
            {"type" : "field_label", "name" : "COLON", "text" : ":"}, {
                "type" : "input_value",
                "name" : "MEMBER_VALUE",
                "check" : "StepNumber"
            }
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "move_backward_infi",
        "message0" : "%1 ",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Đi lùi"}
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "move_forward_infi",
        "message0" : "%1 ",
        "args0" : [ {
            "type" : "field_label",
            "name" : "MEMBER_NAME",
            "text" : "Tiến lên"
        } ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "turn_left_infi",
        "message0" : "%1 ",
        "args0" : [ {
            "type" : "field_label",
            "name" : "MEMBER_NAME",
            "text" : "Quay trái"
        } ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    {
        "type" : "turn_right_infi",
        "message0" : "%1 ",
        "args0" : [ {
            "type" : "field_label",
            "name" : "MEMBER_NAME",
            "text" : "Quay phải"
        } ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 210,
    },
    // Linh kiện
    {
        "type" : "turn_up",
        "message0" : "%1",
        "args0" : [
            {
                "type" : "field_label",
                "name" : "MEMBER_NAME",
                "text" : "Quay lên 90 độ"
            },
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 128,
    },
    {
        "type" : "turn_down",
        "message0" : "%1",
        "args0" : [ {
            "type" : "field_label",
            "name" : "MEMBER_NAME",
            "text" : "Quay xuống 90 độ"
        } ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 180,
    },
    {
        "type" : "rotate",
        "message0" : "%1 %2 %3",
        "args0" : [
            {"type" : "field_label", "name" : "MEMBER_NAME", "text" : "Quay "},
            {"type" : "field_label", "name" : "COLON", "text" : ":"}, {
                "type" : "input_value",
                "name" : "MEMBER_VALUE",
                "check" : "DegreeNumber"
            }
        ],
        "previousStatement" : null,
        "nextStatement" : null,
        "colour" : 180,
    },
    // Giá trị
    {
        "type" : "step",
        "message0" : "%1 bước",
        "args0" : [
            {
                "type" : "field_number",
                "name" : "NUM",
                "value" : "1",
                "min" : "1",
                "precision" : "1"
            },
        ],
        "output" : "StepNumber",
        "colour" : 120,
        "tooltip" : "Số bước ",
    },
    {
        "type" : "degree",
        "message0" : "%1 độ",
        "args0" : [
            {
                "type" : "field_number",
                "name" : "NUM",
                "value" : "0",
                "min" : "0",
                "max" : "180",
                "precision" : "1"
            },
        ],
        "output" : "DegreeNumber",
        "colour" : 120,
        "tooltip" : "Góc quay ",
    },
    //KIENSON
    {
        "type": "text_block",
        "message0": "khối chữ %1",
        "args0": [
          {
            "type": "field_input",
            "name": "TEXT",
            "text": "abc"
          }
        ],
        "output": "String",
        "colour": 230
      },
      {
        "type": "number_block",
        "message0": "khối số %1",
        "args0": [
          {
            "type": "field_number",
            "name": "NUM",
            "value": 0,
            "min": -Infinity,
            "max": Infinity
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_add",
        "message0": "(%1) + (%2)",
        "args0": [
          {
            "type": "field_number",
            "name": "A",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "B",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_subtract",
        "message0": "(%1) - (%2)",
        "args0": [
          {
            "type": "field_number",
            "name": "A",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "B",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_multiply",
        "message0": "(%1) * (%2)",
        "args0": [
          {
            "type": "field_number",
            "name": "A",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "B",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_divide",
        "message0": "(%1) / (%2)",
        "args0": [
          {
            "type": "field_number",
            "name": "A",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "B",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_random_int",
        "message0": "lấy ngẫu nhiên từ %1 đến %2",
        "args0": [
          {
            "type": "field_number",
            "name": "FROM",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "TO",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_modulo",
        "message0": "%1 chia lấy dư cho %2",
        "args0": [
          {
            "type": "field_number",
            "name": "DIVIDEND",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "DIVISOR",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_round",
        "message0": "làm tròn %1",
        "args0": [
          {
            "type": "field_number",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": 230
      },
      {
        "type": "math_compare",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "field_number",
            "name": "A",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              ["=", "EQ"],
              [">", "GT"],
              ["<", "LT"],
              [">=", "GTE"],
              ["<=", "LTE"]
            ]
          },
          {
            "type": "field_number",
            "name": "B",
            "check": "Number"
          }
        ],
        "output": "Boolean",
        "colour": 230
      },
    //VAR
   
    
    {
      "type": "variables_set",
      "message0": "set %1 to %2",
      "args0": [
        {
          "type": "field_input",
          "name": "VAR",
          "text": "item"  // Default name, but user can change it
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "tooltip": "Assign a value to a dynamically created variable.",
      "helpUrl": ""
    },
    {
      "type": "variables_get",
      "message0": "get %1",
      "args0": [
        {
          "type": "field_input",
          "name": "VAR",
          "text": "item"  // Default name, but user can change it
        }
      ],
      "output": null,
      "colour": 330,
      "tooltip": "Retrieve the value of a dynamically created variable.",
      "helpUrl": ""
    }





]);
