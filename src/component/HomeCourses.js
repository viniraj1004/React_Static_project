import React from 'react';
import CourseList from './CourseList';


const HomeCourses = () => {
  let obj = [
    {
      name: "Python Fullstack",
      img: require('./assets/python (1).jpg'),
    },
    {
      name: "MERN Full Stack Developer",
      img: require('./assets/ui.webp'),
    },
    {
      name: "UI Development",
      img: require('./assets/python (1).jpg'),
    },
    {
      name: "React JS",
      img: require('./assets/react js training banner.webp'),
    },
    {
      name: "UI/UX Designing",
      img: require('./assets/python (2)-min.jpg'),
    },
    {
      name: "Node JS",
      img: require('./assets/nodejs.webp'),
    },
    {
      name: "Web Designing",
      img: require('./assets/web design-min.jpg'),
    },
    {
      name: "PHP with MySQL",
      img: require('./assets/phpmysql-min.jpg'),
    },
    {
      name: "Digital Marketing",
      img: require('./assets/digital.jpg'),
    },
    {
      name: "Python",
      img: require('./assets/python.webp'),
    },
    {
      name: "UI Designing",
      img: require('./assets/ui-design-min.jpg'),
    },
    {
      name: "DJango",
      img: require('./assets/django course.webp'),
    },
    {
      name: "Graphic Designing",
      img: require('./assets/graphics-design.webp'),
    },
    {
      name: "SEO",
      img: require('./assets/seo-min.jpg'),
    },
    {
      name: "Google Adwords",
      img: require('./assets/adwords-min.jpg'),
    },
    {
      name: "Java Full stack",
      img: require('./assets/jfc.jpg'),
    }
  ]
  return (
    <div className='container-fluid bg-secondary-subtle py-4'>
      <div className="container">
        <h3 className="text-center my-4">Our<span style={{ color: "#B71710" }}> Courses</span></h3>
        <div class="row">
          {
            obj.map(data => (
              <CourseList path={data.img} name={data.name} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeCourses