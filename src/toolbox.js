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
                    'type': 'wait'
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
                //{
                //    'kind': 'block',
                //    'type': 'ultrasonic_sensor_status'
                //},
                //{
                //    'kind': 'block',
                //    'type': 'ultrasonic_sensor2_status'
                //}
            ]
        },
    ]
};
