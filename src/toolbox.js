export const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': 'Generated Code',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'object'  // This should match the block type defined in json.js
                }
            ]
        },
        {
            'kind': 'category',
            'name': 'Main Workspace',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'math_number'
                },
                {
                    'kind': 'block',
                    'type': 'logic_boolean'
                },
                {
                    'kind': 'block',
                    'type': 'lists_create_with'
                }
            ]
        },
        {
            'kind': 'category',
            'name': 'Output Display',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'member'  // This should match the block type defined in json.js
                },
                {
                    'kind': 'block',
                    'type': 'logic_null'
                }
            ]
        },
        {
            'kind': 'category',
            'name': 'String',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'text'  // This should match the block type defined in json.js
                },
                {
                    'kind': 'block',
                    'type': 'print'
                }
            ]
        },
        {
            'kind': 'category',
            'name': 'Di chuyển',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'move'
                },
                {
                    'kind': 'block',
                    'type': 'up'
                }
            ]
        },
        {
                    'kind': 'category',
                    'name': 'Hiển thị',
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'speak'
                        },
                        {
                            'kind': 'block',
                            'type': 'think'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Điều khiển',
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'up'
                        },
                        {
                            'kind': 'block',
                            'type': 'repeat'
                        },
                        {
                            'kind': 'block',
                            'type': 'forever'
                        },
                        {
                            'kind': 'block',
                            'type': 'if'
                        },
                        {
                            'kind': 'block',
                            'type': 'if_else'
                        },
                        {
                            'kind': 'block',
                            'type': 'wait_until'
                        },
                        {
                            'kind': 'block',
                            'type': 'repeat_until'
                        },
                        {
                            'kind': 'block',
                            'type': 'stop'
                        },
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Cảm biến',
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'key_pressed'
                        },
                        {
                            'kind': 'block',
                            'type': 'ultrasonic_sensor_status'
                        },
                        {
                            'kind': 'block',
                            'type': 'ultrasonic_sensor2_status'
                        }
                    ]
                },
        //NGOQUOCVIET
        {
                    'kind': 'category',
                    'name': 'Di chuyển',
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'move_forward'
                        },
                        {
                            'kind': 'block',
                            'type': 'move_backward'
                        },
                        {
                            'kind': 'block',
                            'type': 'turn_left'
                        },
                        {
                            'kind': 'block',
                            'type': 'turn_right'
                        },
                        {
                            'kind': 'block',
                            'type': 'move_forward_infi'
                        },
                        {
                            'kind': 'block',
                            'type': 'move_backward_infi'
                        },
                        {
                            'kind': 'block',
                            'type': 'turn_left_infi'
                        },
                        {
                            'kind': 'block',
                            'type': 'turn_right_infi'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Chuyển động linh kiện',
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'turn_up'
                        },
                        {
                            'kind': 'block',
                            'type': 'turn_down'
                        },
                        {
                            'kind': 'block',
                            'type': 'rotate'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Giá trị',
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'step'
                        },
                        {
                            'kind': 'block',
                            'type': 'degree'
                        }
                    ]
                },
        //KIENSON
        {
                   'kind': 'category',
                   'name': 'Phép toán',
                   'colour': 230,
                   'contents': [
                       {
                           'kind': 'block',
                           'type': 'text_block'
                       },
                       {
                           'kind': 'block',
                           'type': 'number_block'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_add'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_subtract'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_multiply'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_divide'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_random_int'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_modulo'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_round'
                       },
                       {
                           'kind': 'block',
                           'type': 'math_compare'
                       }
                   ]
               },
        {
          "kind": "category",
          "name": "Dynamic Variables",
          "custom": "VARIABLE",  // Enables dynamic variable creation
          "colour": 330,
          "contents": [
            {
              "kind": "block",
              "type": "variables_set"  // Use the custom dynamic_var_set block type
            },
            {
              "kind": "block",
              "type": "variables_get"  // Use the custom dynamic_var_get block type
            }
          ]
        }
    ]
};
