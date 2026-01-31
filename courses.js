// Courses Data with different ratings and reviews
const courses = [
  {
    id: 1,
    title: "Web Development from Start to Advanced",
    category: "Web Development",
    hours: 10,
    students: 128,
    rating: 4.8,
    reviews: 45,
    price: "Free",
    instructor: "Muhammad Ali",
    instructorTitle: "Web Developer",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    styleClass: "style-1",
    description: "Master the fundamentals of web development and build professional websites. Learn HTML, CSS, JavaScript, and modern frameworks like React. This comprehensive course covers everything from basic web design to advanced interactive applications.",
    curriculum: [
      "HTML5 and CSS3 Fundamentals",
      "JavaScript Advanced Concepts",
      "React Framework",
      "Database Design",
      "Deployment and DevOps",
      "Real-world Projects"
    ]
  },
  {
    id: 2,
    title: "Python Programming for Beginners",
    category: "Programming",
    hours: 15,
    students: 256,
    rating: 4.9,
    reviews: 87,
    price: "Free",
    instructor: "Fatima Mahmoud",
    instructorTitle: "Software Engineer",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    styleClass: "style-2",
    description: "Learn Python programming from scratch. This course teaches you the essentials of Python including variables, loops, functions, and object-oriented programming. Perfect for beginners looking to start their programming journey.",
    curriculum: [
      "Python Basics",
      "Functions and Modules",
      "Object-Oriented Programming",
      "File Handling",
      "Error Handling",
      "Building Real Applications"
    ]
  },
  {
    id: 3,
    title: "Professional UX/UI Design",
    category: "Design",
    hours: 12,
    students: 92,
    rating: 4.7,
    reviews: 38,
    price: "Free",
    instructor: "Sarah Al-Ahmad",
    instructorTitle: "Graphic Designer",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    styleClass: "style-3",
    description: "Create stunning user interfaces and experiences. Learn design principles, color theory, typography, and user research. Master tools like Figma and Adobe XD to design professional applications and websites.",
    curriculum: [
      "Design Fundamentals",
      "User Research Methods",
      "Wireframing and Prototyping",
      "Figma Mastery",
      "Interactive Design",
      "Portfolio Building"
    ]
  },
  {
    id: 4,
    title: "Mobile App Development",
    category: "Mobile Development",
    hours: 18,
    students: 173,
    rating: 4.6,
    reviews: 52,
    price: "Free",
    instructor: "Khalid Al-Otaibi",
    instructorTitle: "App Developer",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    styleClass: "style-4",
    description: "Build native mobile applications for iOS and Android. Learn React Native and Flutter frameworks. Create responsive, user-friendly apps that work seamlessly across all devices.",
    curriculum: [
      "Mobile Development Basics",
      "React Native Framework",
      "Flutter Development",
      "API Integration",
      "Database Management",
      "App Publishing"
    ]
  },
  {
    id: 5,
    title: "Big Data and Data Science",
    category: "Data Science",
    hours: 20,
    students: 145,
    rating: 4.5,
    reviews: 41,
    price: "Free",
    instructor: "Yousif Al-Daei",
    instructorTitle: "Data Scientist",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    styleClass: "style-5",
    description: "Explore the world of big data and machine learning. Learn Python libraries like Pandas, NumPy, and Scikit-learn. Analyze large datasets and create predictive models.",
    curriculum: [
      "Data Analysis Fundamentals",
      "Python for Data Science",
      "Data Visualization",
      "Machine Learning Basics",
      "Statistical Analysis",
      "Real-world Data Projects"
    ]
  },
  {
    id: 6,
    title: "Artificial Intelligence and Machine Learning",
    category: "AI/ML",
    hours: 22,
    students: 189,
    rating: 4.9,
    reviews: 64,
    price: "Free",
    instructor: "Layla Al-Daei",
    instructorTitle: "AI Engineer",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    styleClass: "style-6",
    description: "Dive deep into artificial intelligence and machine learning. Learn neural networks, deep learning, and natural language processing. Build intelligent systems that can learn from data.",
    curriculum: [
      "AI Fundamentals",
      "Machine Learning Algorithms",
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing",
      "AI Project Development"
    ]
  },
  {
    id: 7,
    title: "Digital Marketing and Advertising",
    category: "Marketing",
    hours: 14,
    students: 110,
    rating: 4.4,
    reviews: 33,
    price: "Free",
    instructor: "Ahmad Al-Qahtani",
    instructorTitle: "Digital Marketing Expert",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    styleClass: "style-7",
    description: "Master digital marketing strategies and techniques. Learn SEO, social media marketing, content marketing, and paid advertising. Build comprehensive marketing campaigns.",
    curriculum: [
      "Digital Marketing Basics",
      "SEO Optimization",
      "Social Media Strategy",
      "Content Marketing",
      "Email Marketing",
      "Analytics and Reporting"
    ]
  },
  {
    id: 8,
    title: "Cloud Computing and AWS",
    category: "Cloud",
    hours: 16,
    students: 167,
    rating: 4.8,
    reviews: 56,
    price: "Free",
    instructor: "Nour Al-Anzi",
    instructorTitle: "Infrastructure Engineer",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    styleClass: "style-8",
    description: "Learn cloud computing with Amazon Web Services. Master EC2, S3, RDS, and other AWS services. Deploy scalable applications in the cloud.",
    curriculum: [
      "Cloud Computing Fundamentals",
      "AWS Services Overview",
      "EC2 and Networking",
      "Database Services",
      "Security and IAM",
      "Cloud Architecture Design"
    ]
  },
  {
    id: 9,
    title: "Cybersecurity and Threat Protection",
    category: "Security",
    hours: 19,
    students: 134,
    rating: 4.7,
    reviews: 47,
    price: "Free",
    instructor: "Mahmoud Al-Zahrani",
    instructorTitle: "Cybersecurity Specialist",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    styleClass: "style-9",
    description: "Protect systems and data from cyber threats. Learn network security, encryption, and threat detection. Build secure applications and infrastructure.",
    curriculum: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Encryption and Cryptography",
      "Threat Detection",
      "Security Best Practices",
      "Incident Response"
    ]
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderCourses(courses);
  setupFilters();
});

// Render courses to the grid
function renderCourses(coursesToRender) {
  const grid = document.getElementById('coursesGrid');
  grid.innerHTML = '';

  coursesToRender.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    const ratingStars = generateStars(course.rating);
    
    card.innerHTML = `
      <div class="course-image-container ${course.styleClass}">
      </div>
      <div class="course-content">
        <span class="course-badge">${course.hours}+ Hours</span>
        <h3 class="course-title">${course.title}</h3>
        <div class="course-instructor">
          <div class="instructor-avatar" style="background-image: url('${course.instructorImage}');"></div>
          <div class="instructor-info">
            <div class="instructor-name">${course.instructor}</div>
            <div class="instructor-title">${course.instructorTitle}</div>
          </div>
        </div>
        <div class="course-stats">
          <span>👥 ${course.students}+ Students</span>
          <span class="course-rating">${ratingStars} (${course.reviews})</span>
        </div>
        <div class="course-footer">
          <button class="learn-more-btn" onclick="openCourseModal(${course.id})">Learn More</button>
          <span class="price">${course.price}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Update course count
  document.getElementById('courseCount').textContent = coursesToRender.length;
}

// Generate star rating display
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '⭐'.repeat(fullStars);
  if (hasHalfStar) {
    stars += '✨';
  }
  return `${stars} ${rating.toFixed(1)}`;
}

// Open course modal
function openCourseModal(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  const modalHeader = document.getElementById('modalHeader');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');

  // Set header background color and title
  modalHeader.style.background = course.instructorImage;
  modalTitle.textContent = course.title;

  // Build modal content
  let curriculumHTML = course.curriculum.map(item => `<li>${item}</li>`).join('');
  const ratingStars = generateStars(course.rating);

  modalBody.innerHTML = `
    <div class="modal-section">
      <h3>About This Course</h3>
      <p>${course.description}</p>
    </div>

    <div class="modal-section">
      <h3>Course Details</h3>
      <div class="course-details-grid">
        <div class="detail-item">
          <strong>Duration</strong>
          <span>${course.hours}+ hours</span>
        </div>
        <div class="detail-item">
          <strong>Students</strong>
          <span>${course.students}+ enrolled</span>
        </div>
        <div class="detail-item">
          <strong>Rating</strong>
          <span>${ratingStars}</span>
        </div>
        <div class="detail-item">
          <strong>Reviews</strong>
          <span>${course.reviews} reviews</span>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <h3>Instructor</h3>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div class="instructor-avatar" style="background-image: url('${course.instructorImage}'); width: 50px; height: 50px;"></div>
        <div>
          <div style="font-weight: 600; color: var(--text-main);">${course.instructor}</div>
          <div style="color: var(--text-soft);">${course.instructorTitle}</div>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <h3>What You'll Learn</h3>
      <ul style="list-style-position: inside; color: var(--text-soft); line-height: 1.8;">
        ${curriculumHTML}
      </ul>
    </div>

    <div style="margin-top: 2rem;">
      <button class="enroll-btn" onclick="enrollCourse('${course.title}')">Enroll Now - ${course.price}</button>
    </div>
  `;

  // Show modal
  document.getElementById('courseModal').classList.add('active');
}

// Close course modal
function closeCourseModal() {
  document.getElementById('courseModal').classList.remove('active');
}

// Enroll in course
function enrollCourse(courseName) {
  alert(`You have successfully enrolled in: ${courseName}! 🎉`);
  closeCourseModal();
}

// Setup filters
function setupFilters() {
  const sortFilter = document.getElementById('sortFilter');
  const ratingFilter = document.getElementById('ratingFilter');

  sortFilter.addEventListener('change', applyFilters);
  ratingFilter.addEventListener('change', applyFilters);
}

// Apply filters and sorting
function applyFilters() {
  const sortValue = document.getElementById('sortFilter').value;
  const ratingValue = document.getElementById('ratingFilter').value;

  let filtered = courses.filter(course => {
    if (ratingValue === '') return true;
    return course.rating >= parseFloat(ratingValue);
  });

  // Apply sorting
  switch(sortValue) {
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'popular':
      filtered.sort((a, b) => b.students - a.students);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      break;
    case 'price':
      filtered.sort((a, b) => (a.price === 'Free') ? -1 : 1);
      break;
    default:
      // Keep original order
      break;
  }

  renderCourses(filtered);
}

// Close modal when clicking outside
document.getElementById('courseModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeCourseModal();
  }
});
