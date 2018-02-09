import { h, app } from "hyperapp";
import { u } from "umbrellajs";

const onCreate = elm => {

};

const getFileName = elm => {

 u(elm.target)
    .parent()
    .find(".file-name")
    .html(elm.target.files[0].name);
   // console.log(elm.target.files[0])

};

export const FileUploads = ({
  file = "Please select file to upload",
  label = "File Upload",
  className = "file has-name is-fullwidth",
  name = "resume",
  required = null
}) => (
  <div
    key={name}
    class={className}
    oncreate={e => {

      onCreate(e);
    }}
  >
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name={name}
        required={required}
        onchange={ e => {
          getFileName(e)
        }}
      />
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload" />
        </span>
        <span class="file-label">{label}</span>
      </span>
      <span class="file-name">{file}</span>
    </label>
  </div>
);
