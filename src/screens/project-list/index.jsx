import React from "react"
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState, useEffect } from 'react'
import { cleanObject } from 'utils/index'
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  // 搜索框
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  // 用户列表
  const [users, setUsers] = useState([])

  // 结果列表
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} setUsers={setUsers} />
      <List list={list} users={users} />
    </div>
  );
};
