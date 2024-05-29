const { combineRgb } = require('@companion-module/base');

module.exports = function (self) {
    const presets = {};

    // Função para criar presets de PPT
    const createPptPreset = (index) => {
        return {
            type: 'button',
            category: 'PPT',
            name: 'pr_init',
            style: {
                text: `PPT ${index}`,
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(128, 0, 0),
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'send_int',
                            options: {
                                path: `/ppt${index}`,
                                value: 1,
                            },
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [],
        };
    };

    // Função para criar presets de VIDEO
    const createVideoPreset = (index) => {
        return {
            type: 'button',
            category: 'VIDEO',
            name: 'pr_init',
            style: {
                text: `VIDEO\n${index}`,
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(25, 25, 200),
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'send_int',
                            options: {
                                path: `/video${index}`,
                                value: 1,
                            },
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [],
        };
    };

    // Cria presets de PPT de 01 a 20
    for (let i = 1; i <= 20; i++) {
        let num = i < 10 ? `0${i}` : `${i}`;
        presets[`PPT${num}`] = createPptPreset(num);
    }



    // Cria presets de VIDEO de 01 a 10
    for (let i = 1; i <= 10; i++) {
        let num = i < 10 ? `0${i}` : `${i}`;
        presets[`VIDEO${num}`] = createVideoPreset(num);
    }

    // Presets adicionais
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
                        actionId: 'send_int',
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
    };

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
                        actionId: 'send_int',
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
    };

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
                        actionId: 'send_int',
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
    };

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
                        actionId: 'send_int',
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
    };

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
                        actionId: 'send_int',
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
    };

    return presets;
};
