const { combineRgb } = require('@companion-module/base')


module.exports= function (self) {
        const presets = {}

    presets['PPT01'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 01',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir1',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT02'] = {
                type: 'button',
                category: 'PPT',
                name: 'pr_init',
                style: {
                        text: 'PPT 02',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(128, 0, 0),
                },
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'send_int',  // References the name of the action
                                                options: {
                                                        path: '/abrir2',
                                                        value: 1,
                                                },
                                        },
                                ],
                                up: [],
                        },
                ],
                feedbacks: [],
    }
    presets['PPT03'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 03',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir3',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT04'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 04',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir4',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT05'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 05',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir5',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT06'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 06',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir6',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT07'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 07',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir7',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT08'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 08',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir8',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT09'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 09',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir9',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT10'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 10',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir10',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT11'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 11',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir11',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT12'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 12',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir12',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT13'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 13',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir13',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT14'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 14',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir14',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT15'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 15',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir15',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT16'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 16',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir16',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT17'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 17',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir17',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT18'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 18',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir18',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT19'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 19',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir19',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['PPT20'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'PPT 20',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(128, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/abrir20',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['ESC'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'ESC',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(0, 0, 120),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/esc',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['ANTERIOR'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: '<\nAnterior',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(255, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/up',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['Proximo'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: '>\nProximo',
            size: 'auto',
            color: combineRgb(0, 0, 0),
            bgcolor: combineRgb(0, 255, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/down',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['Fechar'] = {
        type: 'button',
        category: 'PPT',
        name: 'pr_init',
        style: {
            text: 'Fechar\nPPT',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(0, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/encerrar',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    
    presets['VIDEO01'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n01',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video1',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO02'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n02',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video2',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO03'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n03',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video3',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO04'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n04',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video4',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO05'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n05',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video5',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO06'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n06',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video6',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO07'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n07',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video7',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO08'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n08',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video8',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO09'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n09',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video9',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['VIDEO10'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'VIDEO\n10',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(25, 25, 200),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/video10',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }

    presets['FECHARVIDEO'] = {
        type: 'button',
        category: 'VIDEO',
        name: 'pr_init',
        style: {
            text: 'Fechar\nVideo',
            size: 'auto',
            color: combineRgb(255, 255, 255),
            bgcolor: combineRgb(255, 25, 25),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'send_int',  // References the name of the action
                        options: {
                            path: '/fecharVideo',
                            value: 1,
                        },
                    },
                ],
                up: [],
            },
        ],
        feedbacks: [],
    }

        return presets
}
