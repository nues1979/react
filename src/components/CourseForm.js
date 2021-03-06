import React from "react";
import Textinput from "./common/TextInput";
import Select from "./common/Select";
//import * as courseApi from "../api/courseApi";
import { Link } from "react-router-dom";

function CourseForm(props) {
  const courseId = props.course.slug;
  console.log(courseId);
  return (
    <form onSubmit={props.onSubmit}>
      <Textinput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        className="form-control"
        value={props.course.title}
        error={props.errors.title}
      />
      <Select
        id="author"
        label="author"
        name="authorId"
        className="form-control"
        onChange={props.onChange}
        value={props.course.authorId}
        error={props.errors.authorId}
      />

      <Textinput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
      <button className="btn btn-primary">
        {" "}
        <Link to="/courses" onClick={props.handleDelete}>
          delete
        </Link>
        de
      </button>
    </form>
  );
}

export default CourseForm;
