import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteStudentMutation, useGetAllStudentsQuery, useLazyGetAllStudentsQuery } from "../../services/studentsApi";
function Students(){
   var [students,setStudents]=useState([])
   var {isLoading,data}=useGetAllStudentsQuery();
   var [deleteStudentFn]=useDeleteStudentMutation();
   var [getAllStudentsFn]=useLazyGetAllStudentsQuery();
//    console.log(data);

    useEffect(()=>{
        if(data) setStudents([...data])
    },[data]);


    function deleteStudent(id){
        deleteStudentFn(id).then((res)=>{
            console.log(res);
            getAllStudentsFn();
            alert('Successfully Deleted')
        })
        .catch((err)=>{
            alert("Something went wrong"+JSON.stringify(err))
        })
    }


    
    function sortByKey(k){
        const temp=[...students].sort((a,b)=>{
            if(a[k]>b[k]){
                return 1
            }else{
                return -1
            }
        })
        setStudents(temp)
    }

    return (
        <div className="border border-3 p-3 m-3 border-dark">
            {isLoading && <b>Loading...</b>}
            <div className="d-flex justify-content-between align-items-center">
                <h1>Students</h1>
                {/* <Link className="btn btn-success"
                to="/addStudent"> 
                <i class="bi bi-plus-circle"></i>
                Add Student</Link> */}
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th onClick={() => {sortByKey("name")}}>Name</th>
                        <th onClick={() => {sortByKey("age")}}>Age</th>
                        <th onClick={() => {sortByKey("gender")}}>Gender</th>
                        <th onClick={() => {sortByKey("course")}}>Course</th>
                        <th onClick={() => {sortByKey("education")}}>Education</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && students?.map((student)=>{
                       return (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.course}</td>
                            <td>{student.education}</td>
                            <td>
                                <Link className="btn btn-primary me-2" 
                                to={`/updateStudent/${student['_id']}`}>Update</Link>
                                <button className="btn btn-danger" 
                                onClick={()=>{
                                    deleteStudent(student["_id"]);}}>Delete</button>
                            </td>
                        </tr>
                       )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}
export default Students