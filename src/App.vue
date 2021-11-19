<template>
  <div id="app">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <br />
    <button v-on:click="emptyEditor()">Empty the editor</button>

    <h2>Editor data</h2>
    <code>{{ editorData }}</code>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";

import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";

import DataFilter from "@ckeditor/ckeditor5-html-support/src/datafilter";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import ExportPdf from "@ckeditor/ckeditor5-export-pdf/src/exportpdf";

import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";

// nao funciona
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";

import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";

import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";

import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
// import Pagination from '@ckeditor/ckeditor5-pagination/src/pagination';
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

export default {
  name: "app",
  components: {
    ckeditor: CKEditor.component,
  },
  methods: {
    emptyEditor() {
      this.editorData = "";
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        plugins: [
          PasteFromOffice,
          SpecialCharacters,
          Table,
          TableToolbar,
          TextTransformation,
          MediaEmbed,
          Paragraph,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          Image,
          Essentials,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Highlight,
          FontFamily,
          FontSize,
          CloudServices,
          DataFilter,
          Essentials,
          ExportPdf,
          Alignment,
          Autoformat,
          AutoImage,
          AutoLink,
          Autosave,
          BlockQuote,
          EssentialsPlugin,
          BoldPlugin,
          ItalicPlugin,
          LinkPlugin,
          ParagraphPlugin,
          Heading,
        ],
        // The configuration of the editor.
        toolbar: {
          items: [
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "outdent",
            "indent",
            "|",
            "imageUpload",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "undo",
            "redo",
            "alignment",
            "exportPdf",
            "fontFamily",
            "fontSize",
            "pageNavigation",
          ],
        },
        language: "pt-br",
        image: {
          toolbar: [
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
          ],
        },
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
        pagination: {
          pageWidth: "21cm",
          pageHeight: "29.7cm",
          pageMargins: {
            top: "20mm",
            bottom: "20mm",
            left: "12mm",
            right: "12mm",
          },
        },
      },
    };
  },
};
</script>
