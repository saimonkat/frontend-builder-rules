// FIXES
import "./fixes"

import Router from './utils/Router';
import common from './routes/common';
import home from './routes/home';

/** Populate Router instance with DOM routes */
const routes = new Router({
    common,
    home,
})

window.addEventListener("DOMContentLoaded", () => {
    routes.loadEvents()
})