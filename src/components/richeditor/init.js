export function init() {
  const richedditor = $('#editor').wysiwyg({
    'class': '',
    toolbar: 'top-selection',
    buttons: {
      bold: {
        title: 'Bold (Ctrl+B)',
        image: '\uf032',
        hotkey: 'b'
      },
      italic: {
        title: 'Italic (Ctrl+I)',
        image: '\uf033',
        hotkey: 'i'
      },
      underline: {
        title: 'Underline (Ctrl+U)',
        image: '\uf0cd',
        hotkey: 'u'
      },
      strikethrough: {
        title: 'Strikethrough (Ctrl+S)',
        image: '\uf0cc'
      },
      forecolor: {
        title: 'Text color',
        image: '\uf1fc'
      },
      highlight: {
        title: 'Background color',
        image: '\uf043'
      },
      alignleft: {
        title: 'Left',
        image: '\uf036',

        showselection: false
      },
      aligncenter: {
        title: 'Center',
        image: '\uf037',

        showselection: false
      },
      alignright: {
        title: 'Right',
        image: '\uf038',

        showselection: false
      },
      alignjustify: {
        title: 'Justify',
        image: '\uf039',
        showselection: false
      },
      subscript: {
        title: 'Subscript',
        image: '\uf12c',
        showselection: true
      },
      superscript: {
        title: 'Superscript',
        image: '\uf12b',
        showselection: true
      },
      indent: {
        title: 'Indent',
        image: '\uf03c',
        showselection: false
      },
      outdent: {
        title: 'Outdent',
        image: '\uf03b',
        showselection: false
      },
      orderedList: {
        title: 'Ordered list',
        image: '\uf0cb',
        showselection: false
      },
      unorderedList: {
        title: 'Unordered list',
        image: '\uf0ca',
        showselection: false
      },
      removeformat: {
        title: 'Remove format',
        image: '\uf12d'
      }
    }
  });
  return richedditor;
}
