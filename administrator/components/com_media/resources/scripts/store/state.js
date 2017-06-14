// Get the disks from joomla option storage
const options = Joomla.getOptions('com_media', {});
if (options.providers === undefined || options.providers.length === 0) {
    throw new TypeError('Media providers are not defined.');
}

// The initial state
export default {
    // The enabled disks
    disks: options.providers,
    // The selected disk. Providers are ordered by plugin ordering, so we set the first provider
    // in the list as the default provider.
    selectedDisk: options.providers[0].name,
    // The selected directory of the active disk
    selectedDirectory: '/',
    // Whether or not the create folder modal should be shown
    showCreateFolderModal: false,
    // The currently selected items
    selectedItems: [],
}