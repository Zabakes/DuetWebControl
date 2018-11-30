'use strict'

import Vue from 'vue'
import StatusPanel from './StatusPanel.vue'
import ToolsPanel from './ToolsPanel.vue'
import ChartPanel from './ChartPanel.vue'
import MovementPanel from './MovementPanel.vue'

Vue.component('status-panel', StatusPanel)
Vue.component('tools-panel', ToolsPanel)
Vue.component('chart-panel', ChartPanel)
Vue.component('movement-panel', MovementPanel)

export default {
	StatusPanel,
	ToolsPanel,
	ChartPanel,
	MovementPanel
}