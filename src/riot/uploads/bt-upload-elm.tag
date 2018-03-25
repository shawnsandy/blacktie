<bt-upload-elm>

	<div class="upload-elm">
		<label for={ opts.fieldName || "upload" } class={ uploadStyle }>
			<input type="file" class={ opts.fileClass || "file-elm" } name={ opts.fieldName || "upload" } change={ detectChange } >
			<span class={ labelStyle }>
				<div class="upload">
						<yield>File Upload</yield>
				</div>
			</span>
			<span class="file-elm-placeholder">
				<div class="placeholder">{ placeholder }</div>
			</span>
		</label>
	</div>

	<script>

		const placeHolder = opts.uploadPlaceholder || "Please select a file to upload";
		const placeHolderClass = opts.placeholderClasses || "file-elm-placeholder";
		const elmColor = opts.color || "lightgray";
		const labelClass = opts.labelClasses || "";
		const classes = opts.elmClass || ""

		this.placeholder = placeHolder;
		this.labelStyle = "file-elm-label " + labelClass + " " + elmColor+"-elm";
		this.uploadStyle = 'elm-border elm-border-'+ elmColor + " " + classes;

		detectChange(e)
		{
			console.log('changed', e.target.files[0].name);
			this.placeholder = e.target.files[0].name;

		}

	</script>

</bt-upload-elm>
