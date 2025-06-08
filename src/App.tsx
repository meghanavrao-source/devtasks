// src/App.tsx

import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import TaskForm from './features/TaskForm/TaskForm';
import KanbanBoard from './features/KanbanBoard/KanbanBoard';
import { Task, TaskStatus } from './types';

const LOCAL_STORAGE_KEY = 'devtasks-tasks';

const initialTasks: Task[] = [
  {
    id: '1',
    name: 'Set up project',
    description: 'Initialize repo and basic structure',
    dueDate: '2025-06-20',
    tags: ['setup', 'important'],
    status: TaskStatus.TODO,
  },
  {
    id: '2',
    name: 'Build components',
    description: 'Build React components',
    dueDate: '2025-06-22',
    tags: ['frontend'],
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: '3',
    name: 'Deploy',
    description: 'Deploy to production',
    dueDate: '2025-06-25',
    tags: ['deployment'],
    status: TaskStatus.DONE,
  },
];

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialTasks;
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
    );
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1.5rem', textAlign: 'center', background: '#f9fafb' }}>
          <h1>📝 Meg's Kanban :)</h1>
        </header>
        <main>
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
              maxWidth: 1200,
              margin: '0 auto',
              padding: '2rem',
            }}
          >
            <div style={{ flexBasis: '300px', flexShrink: 0 }}>
              <TaskForm addTask={addTask} />
            </div>

            <div style={{ flexGrow: 1 }}>
              <KanbanBoard tasks={tasks} onStatusChange={updateTaskStatus} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
