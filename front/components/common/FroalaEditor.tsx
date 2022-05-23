// import "froala-editor/js/plugins.pkgd";
import "froala-editor/js/froala_editor.pkgd.min.js";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";
const MyFroalaEditor = (props: any) => {
  const { config, tag, model } = props;
  return <FroalaEditor config={config} tag={tag} model={model} />;
};
export default MyFroalaEditor;
