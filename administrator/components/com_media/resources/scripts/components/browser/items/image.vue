<template>
    <div class="media-browser-image" @dblclick="openPreview()">
        <div class="media-browser-item-preview">
            <div class="image-brackground">
                <div class="image-cropped" :style="{ backgroundImage: 'url(' + thumbUrl + ')' }"></div>
            </div>
        </div>
        <div class="media-browser-item-info">
            {{ item.name }} {{ item.filetype }}
        </div>
        <div class="media-browser-select" @click.stop="toggleSelect()"></div>
        <div class="media-browser-actions d-flex">
            <a href="#" class="action-delete">
                <span class="image-browser-action fa fa-trash" aria-hidden="true" @click.stop="deleteItem()"></span>
            </a>
            <a href="#" class="action-edit" v-if="canEdit">
                <span class="image-browser-action fa fa-pencil" aria-hidden="true" @click.stop="editItem()"></span>
            </a>
        </div>
    </div>
</template>

<script>
	import * as itemMixin from './../../../mixins/item';

    export default {
        name: 'media-browser-item-image',
        props: ['item'],
        mixins: [itemMixin]
    }
</script>