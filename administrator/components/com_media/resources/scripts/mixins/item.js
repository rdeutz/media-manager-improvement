import * as types from './../store/mutation-types';
import * as store from './../store/store';

// define a mixin object
export const itemMixin = {
	computed: {
		/* Get the item url */
		thumbUrl() {
			return this.item.thumb_path;
		},
		/* Check if the item is an image to edit */
		canEdit() {
			return ['jpg', 'jpeg', 'png'].indexOf(this.item.extension.toLowerCase()) > -1;
		}
	},
	methods: {
		/* Preview an item */
		openPreview() {
			this.$store.commit(types.SHOW_PREVIEW_MODAL);
			this.$store.dispatch('getFullContents', this.item);
		},
		/* Delete an item */
		deleteItem() {
			this.$store.dispatch('deleteItem', this.item);
		},
		/* Edit an item */
		editItem() {
			// TODO should we use relative urls here?
			const fileBaseUrl = Joomla.getOptions('com_media').editViewUrl + '&path=';

			window.location.href = fileBaseUrl + this.item.path;
		},
		/* Toggle the item selection */
		toggleSelect() {
			this.$store.dispatch('toggleBrowserItemSelect', this.item);
		}
	}
}
