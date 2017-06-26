global.Action = require('idylle').Action;

const Core = require('idylle').Core;
const demo = new Core();

demo
    .on(Core.events.init.settings, require('./settings'))
    .on(Core.events.init.models, require('./models'))
    .on(Core.events.init.actions, require('./actions'))
    .on(Core.events.init.routes, require('./routes'))
    .on(Core.events.booting, require('./boot'))
    .on(Core.events.started, app => console.log(`app started on port ${app.settings.port}`))
    .start()
