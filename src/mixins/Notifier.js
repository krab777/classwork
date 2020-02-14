import {eventBus} from "../main"

export default {
	data() {
		return {
			showNotify: false,
			notify: {
				message: null,
				status: null
			}
		}
	},

	created() {
    eventBus.$on('show-notify', (notify) => {
		this.notify = notify
		this.showNotify = true
    })
  }
}