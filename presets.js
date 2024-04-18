const { combineRgb } = require('@companion-module/base')


module.exports= function (self) {
        const presets = {}

        presets['pr_init'] = {
                type: 'button',
                category: 'Categoria Um',
                name: 'pr_init',
                style: {
                        text: 'Open',
                        size: 'auto',
                        color: combineRgb(255, 255, 255),
                        bgcolor: combineRgb(0, 128, 0),
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

        return presets
}
