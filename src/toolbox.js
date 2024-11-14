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
        }
    ]
};
