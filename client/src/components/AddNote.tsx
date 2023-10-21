import React, { ChangeEvent, useState } from "react";

type Props = {
  saveNote: (e: React.FormEvent, formData: INote | any) => void;
};

const AddNote: React.FC<Props> = ({ saveNote }) => {
  const [formData, setFormData] = useState<INote>({
    title: "",
    description: "",
    status: false,
    _id: "", // A dummy value for _id
  });

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const clearForm = (): void => {
    setFormData({
      title: "",
      description: "",
      status: false,
      _id: "", // Provide a dummy _id value
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    saveNote(e, formData);
    clearForm();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleForm}
            type="text"
            id="title"
            required
            value={formData.title}
            placeholder="enter your title"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleTextArea}
            id="description"
            value={formData.description}
            placeholder="enter your description"
            required
          />
        </div>
      </div>
      <button disabled={!formData.title || !formData.description}>
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
