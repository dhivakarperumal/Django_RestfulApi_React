import React from 'react';
import '../Home/App.css'; 

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center mb-4">
        Welcome to our E-Learning Platform! We are dedicated to providing high-quality online education 
        to learners around the world. Whether you're looking to develop new skills, pursue your career goals, 
        or explore new interests, our platform offers courses and resources that fit your needs.
      </p>

      <section className="mission mt-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make education accessible, affordable, and effective for everyone. We believe that 
          learning should be a lifelong journey, and we are committed to providing the best possible online learning 
          experience. With a wide range of courses and expert instructors, we aim to empower learners to succeed in their personal 
          and professional lives.
        </p>
      </section>

      <section className="team mt-5">
        <h2>Meet the Team</h2>
        <p>
          Our team consists of experienced educators, industry professionals, and passionate technologists 
          who are dedicated to making learning more engaging and effective. We work tirelessly to ensure that 
          every course on our platform is of the highest quality.
        </p>
      </section>

      <section className="vision mt-5">
        <h2>Our Vision</h2>
        <p>
          We envision a world where everyone has access to the education they need to thrive in a rapidly changing world. 
          By leveraging technology, we strive to break down barriers to education and provide opportunities for 
          growth and development to learners everywhere.
        </p>
      </section>

      <section className="values mt-5">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We embrace the power of technology to create innovative learning experiences.</li>
          <li><strong>Accessibility:</strong> We are committed to making education available to everyone, regardless of location or background.</li>
          <li><strong>Quality:</strong> We ensure that our courses and resources meet the highest standards of excellence.</li>
          <li><strong>Lifelong Learning:</strong> We believe in the importance of continuous growth and learning throughout life.</li>
        </ul>
      </section>

      <section className="story mt-5">
        <h2>Our Story</h2>
        <p>
          Our E-Learning Platform was founded with the belief that education has the power to change lives. 
          What started as a small team with a shared vision has grown into a global platform that reaches learners from 
          all walks of life. We are proud of our journey and excited about the future as we continue to evolve 
          and innovate in the world of online education.
        </p>
      </section>

    </div>
  );
};

export default About;
