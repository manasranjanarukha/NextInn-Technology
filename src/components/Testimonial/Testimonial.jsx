import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import "./Testimonial.css";
import testimonial_1 from "../../assets/images/testimonial-1.webp";
import testimonial_2 from "../../assets/images/testimonial-2.webp";
import testimonial_3 from "../../assets/images/testimonial-3.webp";

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: testimonial_1,
      rating: 5,
      text: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication to delivering quality results is unmatched. I highly recommend their services to anyone looking for professional excellence.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, Digital Solutions",
      image: testimonial_2,
      rating: 5,
      text: "The level of creativity and technical skill demonstrated throughout our project was impressive. They transformed our vision into reality and exceeded all our expectations. Outstanding work!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, Creative Studio",
      image: testimonial_3,
      rating: 5,
      text: "Professional, reliable, and incredibly talented. The team delivered exactly what we needed on time and within budget. Their attention to detail and customer service is phenomenal.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    console.log(`Navigating to slide ${index}`);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`star ${index < rating ? "star-filled" : "star-empty"}`}
      />
    ));
  };

  return (
    <div>
      <section className="testimonial-section" id="testimonials">
        {/* Background Pattern */}

        {/* <div className="testimonial-bg-pattern">
          <div className="testimonial-bg-blur-1"></div>
          <div className="testimonial-bg-blur-2"></div>
        </div> */}

        <div className="testimonial-container">
          {/* Section Header */}
          <div className="testimonial-header">
            <h2 className="testimonial-title">TESTIMONIALS</h2>
            <hr className="testimonial-divider" />
          </div>

          {/* Testimonial Slider */}
          <div className="testimonial-slider-container">
            <div className="testimonial-slider-wrapper">
              <div
                className="testimonial-slider"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-slide">
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        {/* Client Image */}
                        <div className="testimonial-image-wrapper">
                          <div className="testimonial-image-container">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="testimonial-image"
                            />
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="testimonial-text-content">
                          {/* Stars */}
                          <div className="testimonial-stars">
                            {renderStars(testimonial.rating)}
                          </div>
                          {/* Quote */}
                          <blockquote className="testimonial-quote">
                            "{testimonial.text}"
                          </blockquote>

                          {/* Client Info */}
                          <div>
                            <h4 className="testimonial-client-name">
                              {testimonial.name}
                            </h4>
                            <p className="testimonial-client-position">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="testimonial-nav-btn testimonial-nav-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="testimonial-nav-icon" />
            </button>
            <button
              onClick={nextSlide}
              className="testimonial-nav-btn testimonial-nav-next"
              aria-label="Next testimonial"
            >
              <ChevronRight className="testimonial-nav-icon" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`testimonial-dot ${
                  index === currentSlide
                    ? "testimonial-dot-active"
                    : "testimonial-dot-inactive"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control */}

          {/* Statistics */}
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
