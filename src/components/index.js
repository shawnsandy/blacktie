import riot from 'riot'
import "riot-hot-reload"

import './tags/todo.tag'
import './tags/icon.tag'
import "blacktie-cards/bt-cards-elm.tag"
import 'blacktie-file-upload/bt-upload.tag'
import 'blacktie-file-upload/bt-upload-rounded.tag'
import './confirm-actions/bt-confirm-action.tag'
import './scroll/bt-scroll-up.tag'
import './images/bt-image.tag'
import './elm/bt-elm-lead.tag'
import './truncate/bt-truncate.tag'
import './svgs/bt-svg-icon.tag'
import "blacktie-icons/bt-icon.tag"
import 'blacktie-icons/bt-icon-bytes.tag'
import './svgs/bt-icon-material.tag'
import './loaders/spin-loader/bt-loader-spin.tag'
import './selections/dropdown/bt-dropdown.tag'
import './loaders/processing/bt-loader-processing.tag'

riot.mount('*')
