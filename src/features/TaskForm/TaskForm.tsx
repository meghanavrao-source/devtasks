/** @jsxImportSource @emotion/react */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as S from './TaskForm.styles';
import { Task, TaskStatus } from '~/types';

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const schema = Yup.object({
  name: Yup.string().required('Task name is required'),
  description: Yup.string().max(500, 'Too long!'),
  dueDate: Yup.string().required('Due date is required'),
  tags: Yup.array().of(Yup.string()),
});

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      dueDate: '',
      tags: [''],
      status: TaskStatus.TODO,
    },
    validationSchema: schema,
    onSubmit: (values, helpers) => {
      const newTask: Task = {
        id: String(Date.now()),
        name: values.name,
        description: values.description,
        dueDate: values.dueDate,
        tags: values.tags.filter((t) => t.trim() !== ''),
        status: TaskStatus.TODO,
      };
      addTask(newTask);
      helpers.resetForm();
    },
  });

  return (
    <S.FormContainer>
      <S.FormTitle>Create Task</S.FormTitle>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <S.Input id="name" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name && <S.Error>{formik.errors.name}</S.Error>}

        <label htmlFor="description">Description</label>
        <S.TextArea id="description" rows={3} {...formik.getFieldProps('description')} />

        <label htmlFor="dueDate">Due Date</label>
        <S.Input type="date" id="dueDate" {...formik.getFieldProps('dueDate')} />
        {formik.touched.dueDate && formik.errors.dueDate && (
          <S.Error>{formik.errors.dueDate}</S.Error>
        )}

        <label>Tags</label>
        {formik.values.tags.map((tag, i) => (
          <S.TagInputWrapper key={i}>
            <S.Input
              style={{ flex: 1 }}
              name={`tags.${i}`}
              value={tag}
              onChange={formik.handleChange}
            />
            <S.Btn
              type="button"
              onClick={() => {
                const newTags = [...formik.values.tags];
                newTags.splice(i, 1);
                formik.setFieldValue('tags', newTags);
              }}
            >
              −
            </S.Btn>
          </S.TagInputWrapper>
        ))}
        <S.AddTagBtn
          type="button"
          onClick={() => formik.setFieldValue('tags', [...formik.values.tags, ''])}
        >
          Add Tag
        </S.AddTagBtn>

        <S.Btn type="submit" disabled={formik.isSubmitting}>
          Create Task
        </S.Btn>
      </form>
    </S.FormContainer>
  );
};

export default TaskForm;
