// Tiptap
import { useEditor, EditorContent } from "@tiptap/react";
// Extensions
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

interface RichTextProps {
  text: string;
  onChange?: (richText: string) => void;
  placeholder?: string;
  editable: boolean;
  className?: any;
}

// TBC: This component will fetch text from the backend. Replace children with the returned data from the backend.
const RichText: React.FC<RichTextProps> = ({
  text,
  onChange,
  placeholder,
  editable,
  className,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: placeholder || "Placeholder" }),
    ],
    content: text,
    editorProps: {
      attributes: {
        class: className,
      },
    },
    editable: editable,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
        console.log(editor.getHTML());
      }
    },
  });

  return <EditorContent className="tiptap" editor={editor} />;
};
RichText.displayName = "RichText";

export default RichText;
