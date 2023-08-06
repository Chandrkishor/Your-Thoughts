"use client";
import { General } from "@/app/store/GeneralContext";
import React, { useContext, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Button, Grid, TextField } from "@mui/material";

const AddPost = () => {
  let { setIsAddOpen } = useContext(General);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [isValid, setIsValid] = useState(true);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ direction: "rtl" }],
      ["link", "image"],
      ["clean"],
      ["undo", "redo"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const handleSubmit = () => {
    //* validate on 10000 characters
    if (value?.length > 10000) {
      setIsValid(false);
      return;
    }
    console.log("title: >>", title, "value: >>", value);
    setIsAddOpen(false);
  };

  const onClose = () => {
    setIsAddOpen(false);
    setTitle("");
    setValue("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="title"
          size="small"
          autoFocus
          fullWidth
          required
          type="text"
          label="Title"
          onChange={(e) => {
            const { id, value } = e.target;
            setTitle(value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder="compose here"
        />
        {!isValid && (
          <div style={{ color: "red", paddingTop: 10 }}>
            Content length should not exceed 10000 characters.
          </div>
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent={"flex-end"}>
          <Grid item>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddPost;
