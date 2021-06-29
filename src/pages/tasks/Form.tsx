import React from 'react';
import { Task } from '../../types/tasks';
import { useForm } from '../../hooks/useForm';

interface IProps {
  activeRecord: Task;
  submitAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ activeRecord, submitAction }) => {
  const { formState, handleChange, handleSubmit } = useForm<Task>(
    activeRecord,
    submitAction
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
