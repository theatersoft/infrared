'use strict'
require('@theatersoft/bus').setTime(true)
require('@theatersoft/bus').setTag('Infrared')
require('@theatersoft/bus').bus.start()
    .then(() => {
        const
            options = {
                module: '@theatersoft/infrared',
                export: 'Infrared',
                name: 'Infrared',
                config: {
                    manager: true
                }
            },
            service = new (require(options.module)[options.export])()
        console.log('starting', options)
        service.start(options)
        process.on('SIGINT', () =>
            service.stop().then(() => process.exit()))
    })
