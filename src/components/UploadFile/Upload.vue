<template>
  <QFirebaseUploaderBase
    label="Upload photos"
    :metadata="metadata"
    auto-upload
    @upload="addImage"
    multiple/>
</template>
<script>
export default {

  methods: {
    addImage (item) {
      Vue.set(this.gallery, item.id, item)
      // this.save()
    }
  },
  components: {
    'QFirebaseUploaderBase' : require('components/UploadFile/QFirebaseUploaderBase.vue').default,
  }
}
</script>