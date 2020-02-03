
<script>
import { QUploaderBase } from 'quasar'
import firebase from 'firebase/app'
import 'firebase/storage'
import uuid from 'uuid/v4'
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  mixins: [ QUploaderBase ],
  props: {
    metadata: Object,
    filename:''
  },
  data () {
    return {
      progressUpload: 0,
      file: File,
      uploadTask: ''
    }
  },
  methods: {
    ...mapActions('settings', ['addFile']),
    upload () {
      console.log("filename", this.filename)
      this.files.forEach(file => {
        const filePath = uuid()
        const ref = 'media/' + filePath
        console.log('filePath', filePath)
        

        const uploadTask = firebase
          .storage()
          .ref()
          .child(ref)
          .put(file, this.metadata)
        uploadTask.on(
          'state_changed',
          sp => {
            this.uploadSize = sp.totalBytes
            this.uploadedSize = sp.bytesTransferred
          },
          null,
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.$emit('upload', {
                url: downloadURL,
                id: ref,
                name: file.name,
                size: file.size,
                uploadedDate: new Date(),
                lastModified: file.lastModified,
                description: ''
              })
              const payload = {
                filePath: filePath,
                filename: this.filename,
                downloadurl: downloadURL
              }

              this.addFile(payload)
              
              this.removeFile(file)
            })
          }
        )
      })
    }
  }
}
</script>