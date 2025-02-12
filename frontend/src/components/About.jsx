import React from "react";
import Footer from "./Footer";

const About = () => (
  <div>
    <div className="container mx-auto px-6 py-12 max-w-4xl bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center mt-5 text-black">
        About Us
      </h2>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        We are dedicated to connecting job seekers with employers, streamlining
        the job search experience.
      </p>

      <h3 className="text-2xl font-semibold text-center mt-8 text-gray-700">
        Our Mission
      </h3>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        Our mission is to simplify the job search process for everyone, making
        it easier for candidates to find opportunities that align with their
        skills and aspirations.
      </p>

      <h3 className="text-2xl font-semibold text-center mt-8 text-gray-700">
        What We Do
      </h3>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        We provide a platform where job seekers can browse thousands of job
        listings from various industries, upload their resumes, and apply
        directly to employers with just a few clicks.
      </p>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        Our advanced search tools allow users to filter jobs by location,
        salary, and job type, ensuring they find the right fit quickly and
        efficiently.
      </p>

      <h3 className="text-2xl font-semibold text-center mt-8 text-gray-700">
        Our Commitment
      </h3>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        We are committed to transparency and fairness in the hiring process. Our
        platform includes resources like salary insights and company reviews,
        empowering candidates to make informed decisions.
      </p>

      <h3 className="text-2xl font-semibold text-center mt-8 text-gray-700">
        Join Us
      </h3>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        Whether you are a job seeker or an employer, we invite you to join our
        community. Together, we can transform the job market and help
        individuals achieve their career goals.
      </p>

      <h3 className="text-2xl font-semibold text-center mt-8 text-gray-700">
        Get in Touch
      </h3>
      <p className="text-lg text-gray-600 text-justify mt-4 leading-relaxed">
        If you have any questions or need assistance, feel free to contact our
        support team. We are here to help you succeed!
      </p>
    </div>
    <Footer />
  </div>
);

export default About;
