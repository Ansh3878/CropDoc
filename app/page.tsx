import Link from "next/link"
import { ArrowRight, Leaf, Shield, Zap, BarChart, Database, Users, HelpCircle } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-green-500">
            <Leaf className="h-6 w-6" />
            <span>CropDoc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              FAQ
            </Link>
            <Link href="https://v0-contact-form-with-animation-h7t1ix.vercel.app/contact" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          <a href="https://v0-cropdoc-login-pages.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="hidden sm:flex px-4 py-2 text-sm font-medium border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
              Login
            </button>
            </a>
            <a href="https://huggingface.co/spaces/Anshul3878/Crop_disease_detection_2" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-green-500 rounded-md hover:bg-green-600 transition-colors">
              Get Started
            </button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero section with 3D visualization */}
        <section className="relative pt-16">
          <div className="w-full h-[90vh] bg-gradient-to-b from-gray-900 to-gray-950">
            <HeroSection />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="container px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
                Detect Crop Diseases <span className="text-green-500">Instantly</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md max-w-2xl mx-auto mb-8">
                Advanced AI-powered detection to identify and treat crop diseases before they spread
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <a href="https://huggingface.co/spaces/Anshul3878/Crop_disease_detection_2" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 text-base font-medium text-gray-900 bg-green-500 rounded-md hover:bg-green-600 transition-colors">
                    Scan Your Crops
                  </button>
              </a>
                <button className="px-6 py-3 text-base font-medium text-gray-200 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-md hover:bg-gray-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Why Choose <span className="text-green-500">CropDoc</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Our platform combines cutting-edge AI technology with agricultural expertise to provide the most accurate
              disease detection and treatment recommendations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Instant Detection</h3>
                <p className="text-gray-400">
                  Our AI analyzes images in seconds to identify diseases with over 95% accuracy, saving you valuable
                  time.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Treatment Recommendations</h3>
                <p className="text-gray-400">
                  Get personalized treatment plans based on the specific disease, crop type, and severity level.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Preventive Measures</h3>
                <p className="text-gray-400">
                  Learn how to protect your crops from future infections with our expert advice and early warning
                  system.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Detailed Analytics</h3>
                <p className="text-gray-400">
                  Track disease patterns, treatment effectiveness, and crop health over time with comprehensive reports.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Extensive Disease Database</h3>
                <p className="text-gray-400">
                  Access information on over 500 crop diseases, their symptoms, causes, and recommended treatments.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Expert Community</h3>
                <p className="text-gray-400">
                  Connect with agricultural experts and other farmers to share knowledge and get additional support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section id="how-it-works" className="py-20 bg-gray-950">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              How <span className="text-green-500">CropDoc</span> Works
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Our simple three-step process makes it easy to identify and treat crop diseases quickly and effectively.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">Take a Photo</h3>
                <p className="text-gray-400 mb-4">
                  Capture a clear image of the affected plant part using your smartphone or upload an existing photo.
                </p>
                <img
                  src="/image.webp?height=100&width=200"
                  alt="Taking a photo of crop"
                  className="w-full h-40 object-cover rounded-lg bg-gray-700"
                />
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">AI Analysis</h3>
                <p className="text-gray-400 mb-4">
                  Our advanced AI model analyzes the image to identify the disease, its severity, and spread pattern.
                </p>
                <img
                  src="/image (4).webp?height=150&width=300"
                  alt="AI analyzing crop disease"
                  className="w-full h-40 object-cover rounded-lg bg-gray-700"
                />
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">Get Results</h3>
                <p className="text-gray-400 mb-4">
                  Receive detailed diagnosis and treatment recommendations within seconds, including organic options.
                </p>
                <img
                  src="/image (1).webp?height=150&width=300"
                  alt="Treatment recommendations"
                  className="w-full h-40 object-cover rounded-lg bg-gray-700"
                />
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="px-6 py-3 text-base font-medium text-gray-900 bg-green-500 rounded-md hover:bg-green-600 transition-colors flex items-center mx-auto">
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Statistics section */}
        <section className="py-16 bg-gray-900">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
                <div className="text-gray-400">Diseases Detected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
                <div className="text-gray-400">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
                <div className="text-gray-400">Farmers Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">30%</div>
                <div className="text-gray-400">Crop Loss Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section id="testimonials" className="py-20 bg-gray-950">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">What Farmers Are Saying</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Hear from farmers who have transformed their crop management with CropDoc.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700" >
                <div className="flex items-center mb-4">
                {/* <Image
            src="/images/testimonials/john-smith.jpg"
            alt="John Smith"
            width={48}
            height={48}
            className="rounded-full mr-4"
          /> */}

                  <img
                  src="/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
                  alt="John Smith"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                  {/* <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div> */}
                  <div>
                    <h4 className="font-bold text-white">John Smith</h4>
                    <p className="text-gray-400 text-sm">Wheat Farmer, Kansas</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "CropDoc helped me identify a fungal infection before it spread to my entire wheat field. The early
                  detection saved me thousands of dollars in potential losses."
                </p>
                <div className="flex text-green-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-center mb-4">
                <img
                  src="/omid-armin-HtQLD6HOS94-unsplash.jpg"
                  alt="John Smith"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                  {/* <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div> */}
                  <div>
                    <h4 className="font-bold text-white">Maria Rodriguez</h4>
                    <p className="text-gray-400 text-sm">Tomato Grower, California</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The treatment recommendations are incredibly specific and effective. I've been able to reduce my
                  pesticide use by 40% while maintaining healthier crops."
                </p>
                <div className="flex text-green-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-center mb-4">
                <img
                  src="/ian-dooley-d1UPkiFd04A-unsplash.jpg"
                  alt="John Smith"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                  {/* <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div> */}
                  <div>
                    <h4 className="font-bold text-white">David Chen</h4>
                    <p className="text-gray-400 text-sm">Rice Farmer, Louisiana</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The app is incredibly easy to use, even for someone like me who isn't tech-savvy. The disease
                  database has been an invaluable educational resource."
                </p>
                <div className="flex text-green-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section id="faq" className="py-20 bg-gray-900">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Get answers to common questions about CropDoc and how it can help your farming operation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>How accurate is the disease detection?</span>
                </h3>
                <p className="text-gray-400 ml-8">
                  Our AI model has been trained on over 1 million images and achieves 95% accuracy across 500+ crop
                  diseases. The system continues to improve with each scan.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Do I need an internet connection to use CropDoc?</span>
                </h3>
                <p className="text-gray-400 ml-8">
                  Yes, an internet connection is required for the AI analysis. However, you can take photos offline and
                  upload them when you have connectivity.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>What crops does CropDoc support?</span>
                </h3>
                <p className="text-gray-400 ml-8">
                  CropDoc currently supports 30 major crops including wheat, rice, corn, soybeans, cotton, potatoes,
                  tomatoes, and various fruits. We're constantly adding more.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Is there a limit to how many scans I can perform?</span>
                </h3>
                <p className="text-gray-400 ml-8">
                  Free accounts can perform up to 5 scans per month. Premium subscribers get unlimited scans, detailed
                  analytics, and priority support.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Can CropDoc recommend organic treatments?</span>
                </h3>
                <p className="text-gray-400 ml-8">
                  Yes, CropDoc provides both conventional and organic treatment options for each detected disease,
                  allowing you to choose based on your farming practices.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>How do I get help if the app can't identify a disease?</span>
                </h3>
                <p className="text-gray-400 ml-8">
                  Premium users can submit unidentified cases to our team of agricultural experts who will analyze the
                  images and provide personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 bg-green-900 text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Crops?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of farmers who are already using CropDoc to detect and treat crop diseases early. Start
              protecting your harvest today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://huggingface.co/spaces/Anshul3878/Crop_disease_detection_2" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 text-base font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors">
                Get Started for Free
              </button>
              </a>
              <button className="px-6 py-3 text-base font-medium text-white bg-green-800 border border-green-700 rounded-md hover:bg-green-700 transition-colors">
                View Pricing Plans
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-green-500 mb-4">
                <Leaf className="h-6 w-6" />
                <span>CropDoc</span>
              </Link>
              <p className="text-gray-500 mb-4">
                Advanced AI-powered crop disease detection and treatment recommendations.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="text-gray-400 hover:text-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://x.com/?lang=en" className="text-gray-400 hover:text-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/" className="text-gray-400 hover:text-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:text-green-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-green-500 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-green-500 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-green-500 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="https://v0-contact-form-with-animation-h7t1ix.vercel.app/contact" className="hover:text-green-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-green-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500 transition-colors">
                    Disease Database
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500 transition-colors">
                    Treatment Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500 transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500 transition-colors">
                    Community Forum
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
              <p className="mb-4">Have questions? Reach out to our support team.</p>
              <a href="https://v0-contact-form-with-animation-h7t1ix.vercel.app/contact" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 text-sm font-medium text-green-500 border border-green-500 rounded-md hover:bg-green-900/50 transition-colors">
                Contact Support
              </button>
              </a>
              <p className="mt-4 text-sm">
                Email: support@cropdoc.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-600">
            <p>© {new Date().getFullYear()} CropDoc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

