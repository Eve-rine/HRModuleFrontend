import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faEdit as fortawesomefreesolidsvgicons_faEdit } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faEdit)

    import  { faPrint as fortawesomefreesolidsvgicons_faPrint } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faPrint)

    import  { faDownload as fortawesomefreesolidsvgicons_faDownload } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faDownload)

    import  { faEye as fortawesomefreesolidsvgicons_faEye } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faEye)

    import  { faTh as fortawesomefreesolidsvgicons_faTh } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faTh)

    import  { faFlag as fortawesomefreeregularsvgicons_faFlag } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faFlag)

    import  { faWindowClose as fortawesomefreeregularsvgicons_faWindowClose } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faWindowClose)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
