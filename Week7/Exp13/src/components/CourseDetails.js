import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <>
      <h2>🎓 Course Details</h2>
      {courses?.length ? (
        courses.map(course => (
          <div key={course.id}>
            <h4>{course.name}</h4>
            <p>Duration: {course.duration}</p>
          </div>
        ))
      ) : (
        <p>No Courses Yet!</p>
      )}
    </>
  );
};

export default CourseDetails;
