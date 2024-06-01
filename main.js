const { InstanceBase, Regex, runEntrypoint } = require('@companion-module/base')
const getPresetDefinitions = require('./presets')


class OSCInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.config = config
		this.updateStatus('ok')
		this.updateActions() // export actions
		this.setPresetDefinitions(getPresetDefinitions(this))
	}

	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config
	}

	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Target IP',
				width: 8,
				regex: Regex.IP,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port',
				width: 4,
				regex: Regex.PORT,
			},
		]
	}

	updateActions() {
		const sendOscMessage = (path, args) => {
			this.log('debug', `Sending OSC ${this.config.host}:${this.config.port} ${path}`)
			this.log('debug', `Sending Args ${JSON.stringify(args)}`)
			this.oscSend(this.config.host, this.config.port, path, args)
		}
		const actionDefinitions = {};

		// Adicionando send_ppt
		for (let i = 1; i <= 20; i++) {
			const name = `PPT ${i < 10 ? '0' + i : i}`;
			const defaultPath = `/ppt${i < 10 ? '0' + i : i}`;

			actionDefinitions[`send_ppt${i}`] = {
				name: name,
				options: [
					{
						type: 'textinput',
						label: 'COMANDO',
						id: 'path',
						default: defaultPath,
						useVariables: true,
					},
					{
						type: 'textinput',
						label: 'Value',
						id: 'int',
						default: 1,
						regex: Regex.SIGNED_NUMBER,
						useVariables: true,
					},
				],
				callback: async (event) => {
					const path = await this.parseVariablesInString(event.options.path);
					const int = await this.parseVariablesInString(event.options.int);

					sendOscMessage(path, [
						{
							type: 'i',
							value: parseInt(int),
						},
					]);
				},
			};
		}

		// Adicionando send_int
		actionDefinitions[`send_int`] = {
			name: 'Send Integer',
			options: [
				{
					type: 'textinput',
					label: 'COMANDO',
					id: 'path',
					default: '/send_int',
					useVariables: true,
				},
				{
					type: 'textinput',
					label: 'Value',
					id: 'int',
					default: 1,
					regex: Regex.SIGNED_NUMBER,
					useVariables: true,
				},
			],
			callback: async (event) => {
				const path = await this.parseVariablesInString(event.options.path);
				const int = await this.parseVariablesInString(event.options.int);

				sendOscMessage(path, [
					{
						type: 'i',
						value: parseInt(int),
					},
				]);
			},
		};

		// Adicionando send_video
		for (let i = 1; i <= 10; i++) {
			const name = `Video ${i < 10 ? '0' + i : i}`;
			const defaultPath = `/video${i < 10 ? '0' + i : i}`;

			actionDefinitions[`send_video${i}`] = {
				name: name,
				options: [
					{
						type: 'textinput',
						label: 'COMANDO',
						id: 'path',
						default: defaultPath,
						useVariables: true,
					},
					{
						type: 'textinput',
						label: 'Value',
						id: 'int',
						default: 1,
						regex: Regex.SIGNED_NUMBER,
						useVariables: true,
					},
				],
				callback: async (event) => {
					const path = await this.parseVariablesInString(event.options.path);
					const int = await this.parseVariablesInString(event.options.int);

					sendOscMessage(path, [
						{
							type: 'i',
							value: parseInt(int),
						},
					]);
				},
			};
		}
		// Adicionando outros comandos
		const commands = [
			{ name: 'Fechar Modo Apresentacao', defaultPath: '/esc' },
			{ name: 'Anterior', defaultPath: '/up' },
			{ name: 'Proximo', defaultPath: '/down' },
			{ name: 'Fechar PPT', defaultPath: '/encerrar' },
			{ name: 'Fechar Video', defaultPath: '/fecharVideo' },
		];

		commands.forEach((command, index) => {
			const { name, defaultPath } = command;
			actionDefinitions[`send_${name.toLowerCase().replace(/\s/g, "_")}`] = {
				name: name,
				options: [
					{
						type: 'textinput',
						label: 'COMANDO',
						id: 'path',
						default: defaultPath,
						useVariables: true,
					},
					{
						type: 'textinput',
						label: 'Value',
						id: 'int',
						default: 1,
						regex: Regex.SIGNED_NUMBER,
						useVariables: true,
					},
				],
				callback: async (event) => {
					const path = await this.parseVariablesInString(event.options.path);
					const int = await this.parseVariablesInString(event.options.int);

					sendOscMessage(path, [
						{
							type: 'i',
							value: parseInt(int),
						},
					]);
				},
			};
		});

		this.setActionDefinitions(actionDefinitions);


	}

}

runEntrypoint(OSCInstance, [])
