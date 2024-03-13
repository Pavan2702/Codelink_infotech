import React from 'react'
import { useGetDataQuery } from '../Redux/features/API/Api'

export default function Data() {
  const {data,error} = useGetDataQuery('')
  console.log("🚀 ~ Data ~ error:", error)
  console.log("🚀 ~ Data ~ data:", data)
  return (
    <>
      <h1>Data</h1>
    </>
  )
}
