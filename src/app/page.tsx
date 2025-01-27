'use client';

import { useState } from 'react';
import CourseCard from "@/components/CourseCard";
import LessonCard from "@/components/LessonCard";
import TopicCard from "@/components/TopicCard";
import { courses } from "@/data/courses";
import { popularLessons, quickReads } from "@/data/lessons";
import { exploreTopics } from "@/data/topics";
import type { CourseType } from "@/data/courses";

export default function Home() {
  const [selectedType, setSelectedType] = useState<CourseType | 'All'>('All');

  const filteredCourses = selectedType === 'All' 
    ? courses 
    : courses.filter(course => course.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 space-y-16">
          {/* Courses Section */}
          <section>
            <h1 className="text-4xl font-serif mb-2">Courses</h1>
            <p className="text-gray-600 mb-8">
              Explore 30+ courses and 200+ lessons taught by experts in their field.
            </p>

            {/* Course Type Filter */}
            <div className="flex space-x-8 border-b border-gray-200">
              {['All', 'Introductory', 'Advanced', 'Population Specific'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type as typeof selectedType)}
                  className={`pb-4 px-1 text-sm relative ${
                    selectedType === type 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {type}
                  {selectedType === type && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Course Count */}
            <div className="mt-8 mb-6">
              <h2 className="text-sm text-gray-500">COURSES ({filteredCourses.length})</h2>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard
                  key={course.slug}
                  title={course.title}
                  description={course.description}
                  experts={course.experts}
                  viewCount={course.viewCount}
                  slug={course.slug}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Popular Lessons Section */}
          <section>
            <h2 className="text-2xl font-serif mb-6">Popular Lessons (10)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularLessons.map((lesson) => (
                <LessonCard
                  key={lesson.slug}
                  title={lesson.title}
                  category={lesson.category}
                  slug={lesson.slug}
                />
              ))}
            </div>
          </section>

          {/* Quick Reads Section */}
          <section>
            <h2 className="text-2xl font-serif mb-6">Quick Reads</h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickReads.slice(0, 4).map((lesson) => (
                  <LessonCard
                    key={lesson.slug}
                    title={lesson.title}
                    category={lesson.category}
                    slug={lesson.slug}
                  />
                ))}
              </div>
              {quickReads.length > 4 && (
                <div className="flex justify-end mt-4">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Show {quickReads.length - 4} more
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Explore Topics Section */}
          <section>
            <h2 className="text-2xl font-serif mb-6">Explore Topics</h2>
            <div className="space-y-6">
              {exploreTopics.map((topic) => (
                <TopicCard
                  key={topic.title}
                  title={topic.title}
                  viewCount={topic.viewCount}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
