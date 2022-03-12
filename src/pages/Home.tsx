import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

import { Header } from "../components/Header"
import { Task, TasksList } from "../components/TasksList"
import { TodoInput } from "../components/TodoInput"

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      done: false,
    }

    setTasks([...tasks, newTask])
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = [...tasks]

    const newTaskList = updatedTasks.map((task) => {
      if (task.id === id) {
        const newTask = {
          ...task,
          done: !task.done,
        }

        return newTask
      }

      return task
    })

    setTasks(newTaskList)
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = [...tasks]

    const newTaskList = updatedTasks.filter((task) => task.id !== id)

    setTasks(newTaskList)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList tasks={tasks} toggleTaskDone={handleToggleTaskDone} removeTask={handleRemoveTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
})
