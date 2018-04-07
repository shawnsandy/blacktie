<bt-svg-icon>
    <svg-icon>
        <use></use>
        <script>
    
        const src = opts.src || "/icons/material-icons.svg"
        const icon = opts.icon || "circle"
        const link = src +"#"+ icon
    
        this.on('mount', () => {
            let elm = this.root.children[0].children[0]
            elm.setAttribute('xlink:href', link)
            console.log('element', elm)
        })
    
        </script>
        <style>
            :scope {
                display: inline-block;
            }
        </style>
    </svg-icon>
</bt-svg-icon>