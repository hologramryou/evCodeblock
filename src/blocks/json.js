import * as Blockly from 'blockly';


export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  "type": "object",
  "message0": "{ %1 %2 }",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
},
{
  "type": "member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "MEMBER_NAME",
      "text": ""
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
},
{
    "type": "print",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "field_label",
        "name": "MEMBER_NAME",
        "text": "print"
      },
      {
        "type": "field_label",
        "name": "COLON",
        "text": ":"
      },
      {
        "type": "input_value",
        "name": "MEMBER_VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
  },
{
    "type": "move",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "field_label",
        "name": "MEMBER_NAME",
        "text": "Di chuyển"
      },
      {
        "type": "field_label",
        "name": "COLON",
        "text": ":"
      },
      {
        "type": "input_value",
        "name": "MEMBER_VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
},
{
"type": "up",
"message0": "%1 %2 %3",
                                                                              "args0": [
                                                                                {
                                                                                  "type": "field_label",
                                                                                  "name": "MEMBER_NAME",
                                                                                  "text": "Tiến Lên"
                                                                                },
                                                                                {
                                                                                  "type": "field_label",
                                                                                  "name": "COLON",
                                                                                  "text": ":"
                                                                                },
                                                                                {
                                                                                  "type": "input_value",
                                                                                  "name": "MEMBER_VALUE"
                                                                                }
                                                                              ],
                                                                              "previousStatement": null,
                                                                              "nextStatement": null,
                                                                              "colour": 230,
                                                                          },
   //my commit
                                                                          {
                                                                            "type": "speak",
                                                                            "message0": "%1 %2 %3",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Nói"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "COLON",
                                                                                "text": ":"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "TEXT_TO_SPEAK"
                                                                              }
                                                                            ],
                                                                            "previousStatement": null,
                                                                            "nextStatement": null,
                                                                            "colour": "f500ff"
                                                                          },
                                                                          {
                                                                            "type": "think",
                                                                            "message0": "Nghĩ %1",
                                                                            "args0": [
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "TEXT_TO_THINK",
                                                                                "check": "String"
                                                                              }
                                                                            ],
                                                                            "previousStatement": null,
                                                                            "nextStatement": null,
                                                                            "colour": "f500ff",
                                                                            "tooltip": "Stores the specified text to 'think' about",
                                                                            "helpUrl": ""
                                                                          },
                                                                          
                                                                          {
                                                                            "type": "wait",
                                                                            "message0": "%1 %2 %3",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Đợi"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "COLON",
                                                                                "text": ":"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "SECONDS",
                                                                                "check": "Number"
                                                                              }
                                                                            ],
                                                                            "previousStatement": null,
                                                                            "nextStatement": null,
                                                                            "colour": "#ff9300",
                                                                          },
                                                                          {
                                                                            "type": "repeat",
                                                                            "message0": "%1 %2 %3 %4",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Lặp lại"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "COLON",
                                                                                "text": ":"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "TIMES",
                                                                                "check": "Number"
                                                                              },
                                                                              {
                                                                                "type": "input_statement",
                                                                                "name": "DO"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          {
                                                                            "type": "forever",
                                                                            "message0": "%1 %2 %3",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Liên tục"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "COLON",
                                                                                "text": ":"
                                                                              },
                                                                              {
                                                                                "type": "input_statement",
                                                                                "name": "DO"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          {
                                                                            "type": "if",
                                                                            "message0": "%1 %2 %3 %4",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Nếu"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "CONDITION",
                                                                                "check": "Boolean"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "THEN",
                                                                                "text": "thì"
                                                                              },
                                                                              {
                                                                                "type": "input_statement",
                                                                                "name": "DO"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          {
                                                                            "type": "if_else",
                                                                            "message0": "%1 %2 %3 %4 %5 %6",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Nếu"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "CONDITION",
                                                                                "check": "Boolean"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "THEN",
                                                                                "text": "thì"
                                                                              },
                                                                              {
                                                                                "type": "input_statement",
                                                                                "name": "DO"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "ELSE",
                                                                                "text": "nếu không"
                                                                              },
                                                                              {
                                                                                "type": "input_statement",
                                                                                "name": "DO_ELSE"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          {
                                                                            "type": "wait_until",
                                                                            "message0": "%1 %2 %3",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Đợi đến khi"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "CONDITION",
                                                                                "check": "Boolean"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "THEN",
                                                                                "text": "thì"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          {
                                                                            "type": "repeat_until",
                                                                            "message0": "%1 %2 %3 %4",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Lặp lại cho đến khi"
                                                                              },
                                                                              {
                                                                                "type": "input_value",
                                                                                "name": "CONDITION",
                                                                                "check": "Boolean"
                                                                              },
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "THEN",
                                                                                "text": "thì"
                                                                              },
                                                                              {
                                                                                "type": "input_statement",
                                                                                "name": "DO"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          {
                                                                            "type": "stop",
                                                                            "message0": "%1",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Dừng lại"
                                                                              }
                                                                            ],
                                                                            "colour": "#ff9300",
                                                                            "previousStatement": null,
                                                                            "nextStatement": null
                                                                          },
                                                                          //cảm biến
                                                                          {
                                                                            "type": "key_pressed",
                                                                            "message0": "%1 %2",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "MEMBER_NAME",
                                                                                "text": "Bàn phím: nút đang ấn"
                                                                              },
                                                                              {
                                                                                "type": "field_dropdown",
                                                                                "name": "KEY",
                                                                                "options": [
                                                                                  ["A", "A"],
                                                                                  ["B", "B"],
                                                                                  ["C", "C"],
                                                                                  ["D", "D"],
                                                                                  ["E", "E"],
                                                                                  ["F", "F"],
                                                                                  ["G", "G"],
                                                                                  ["H", "H"],
                                                                                  ["I", "I"],
                                                                                  ["J", "J"],
                                                                                  ["K", "K"],
                                                                                  ["L", "L"],
                                                                                  ["M", "M"],
                                                                                  ["N", "N"],
                                                                                  ["O", "O"],
                                                                                  ["P", "P"],
                                                                                  ["Q", "Q"],
                                                                                  ["R", "R"],
                                                                                  ["S", "S"],
                                                                                  ["T", "T"],
                                                                                  ["U", "U"],
                                                                                  ["V", "V"],
                                                                                  ["W", "W"],
                                                                                  ["X", "X"],
                                                                                  ["Y", "Y"],
                                                                                  ["Z", "Z"],
                                                                                  ["Space", "SPACE"],
                                                                                  ["Enter", "ENTER"]
                                                                                ]
                                                                              }
                                                                            ],
                                                                            "output": "Boolean",
                                                                            "colour":"00e4ff",
                                                                            "tooltip": "Checks if the selected keyboard key is currently pressed",
                                                                            "helpUrl": ""
                                                                          },
                                                                          {
                                                                            "type": "ultrasonic_sensor_status",
                                                                            "message0": "%1 %2",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "SENSOR_NAME",
                                                                                "text": "Cảm biến siêu âm 1: trạng thái"
                                                                              },
                                                                              {
                                                                                "type": "field_dropdown",
                                                                                "name": "STATUS_TYPE",
                                                                                "options": [
                                                                                  ["Khoảng cách", "DISTANCE"],
                                                                                  ["Có vật thể", "OBJECT_PRESENT"],
                                                                                  ["Không có vật thể", "NO_OBJECT"]
                                                                                ]
                                                                              }
                                                                            ],
                                                                            "output": "Number",
                                                                            "colour": "00e4ff",
                                                                            "tooltip": "Checks the status of Ultrasonic Sensor 1, such as distance or object presence",
                                                                            "helpUrl": ""
                                                                          },
                                                                          {
                                                                            "type": "ultrasonic_sensor2_status",
                                                                            "message0": "%1 %2",
                                                                            "args0": [
                                                                              {
                                                                                "type": "field_label",
                                                                                "name": "SENSOR_NAME",
                                                                                "text": "Cảm biến siêu âm 2: trạng thái"
                                                                              },
                                                                              {
                                                                                "type": "field_dropdown",
                                                                                "name": "STATUS_TYPE",
                                                                                "options": [
                                                                                  ["Khoảng cách", "DISTANCE"],
                                                                                  ["Có vật thể", "OBJECT_PRESENT"],
                                                                                  ["Không có vật thể", "NO_OBJECT"]
                                                                                ]
                                                                              }
                                                                            ],
                                                                            "output": "Number",
                                                                            "colour": "00e4ff",
                                                                            "tooltip": "Checks the status of Ultrasonic Sensor 2, such as distance or object presence",
                                                                            "helpUrl": ""
                                                                          },
                                                                          
                                                                                                                                                                                                                                                                                                        
]);
