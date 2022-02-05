const teachers = [
  {
    img: './imgs/test2.png',
    name: 'Benaslin jenner',
    position: 'Software Developer Lead',
    description: 'Workig in IT',
  },
  {
    img: './imgs/test1.png',
    name: 'Prasanna',
    position: 'Professional Front-End Developer',
    description: 'He is one of the most professional front end developers in the world. He worked in google',
  },
];

teachers.map((teacher) => {
  const teachersContainer = document.getElementById('teachers');
  const teacherContainer = document.createElement('div');
  teacherContainer.className = 'teacher col-lg-6 col-12 d-flex';
  // Img
  const teacherImage = document.createElement('img');
  teacherImage.src = teacher.img;
  teacherContainer.appendChild(teacherImage);
  /* Content */
  const content = document.createElement('div');
  content.className = 'content text-start ms-3';
  teacherContainer.appendChild(content);
  // Name
  const teacherName = document.createElement('h3');
  teacherName.className = 'name h5 mt-3';
  teacherName.textContent = teacher.name;
  content.appendChild(teacherName);
  // Position
  const teacherPosition = document.createElement('h4');
  teacherPosition.classPosition = 'position';
  teacherPosition.textContent = teacher.position;
  content.appendChild(teacherPosition);
  // description
  const teacherDescription = document.createElement('p');
  teacherDescription.classDescription = 'description';
  teacherDescription.textContent = teacher.description;
  content.appendChild(teacherDescription);
  // append to html
  return teachersContainer.appendChild(teacherContainer);
});