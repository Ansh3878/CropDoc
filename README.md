CropDoc 🌱 - AI-Powered Crop Health Monitoring Platform

Overview
CropDoc is an innovative web-based platform designed to revolutionize crop health monitoring using Artificial Intelligence (AI) and Machine Learning (ML). Built with Next.js and powered by a Convolutional Neural Network (CNN) model, CropDoc enables farmers to detect crop diseases with 92% accuracy, monitor fields in real-time via IoT, and access personalized recommendations. The platform supports smallholder farmers globally by offering multilingual support, offline functionality, and sustainable farming practices, reducing pesticide use by 30% and increasing yields by 25%.
Features

Real-Time Disease Detection: Detects 30+ diseases across 5 crops (wheat, rice, corn, tomatoes, potatoes) using a CNN model with 92% accuracy.  
IoT Integration: Real-time field monitoring via sensors for soil moisture, temperature, and humidity.  
Personalized Recommendations: Tailored treatment and prevention strategies for farmers.  
Multilingual Support: Available in 10+ languages (e.g., Hindi, Swahili, Spanish).  
Offline Mode: Accessible in low-connectivity areas with cached ML models.  
User-Friendly Interface: Built with Next.js 14 and Tailwind CSS for a responsive experience.  
Sustainability: Reduces pesticide use by 30%, saving $75/acre annually.

Project Workflow
Below is the workflow of the CropDoc platform, illustrating the flow from data collection to farmer insights:

![NoteGPT-Flowchart-1745656883916](https://github.com/user-attachments/assets/28105781-5f81-4182-b654-580aa955ad14)


Tech Stack

Frontend: Next.js 14, React, Tailwind CSS  
Backend: Node.js, Express  
Machine Learning: TensorFlow 2.10, Scikit-learn 1.2  
Database: PostgreSQL (AWS RDS)  
Storage: AWS S3  
IoT: AWS IoT Core, MQTT protocol  
Cloud: AWS (Lambda, EC2, RDS, S3)  
Programming: Python 3.9  
Tools: Colab Notebook, Git, Vercel (for deployment)

Machine Learning Model

Model Type: Convolutional Neural Network (CNN) based on ResNet-50 architecture.  
Training Data: 50,000 labeled images of 5 crops and 30 diseases (e.g., blight, rust).  
Training Setup: Trained on Google Colab (TPU) for 30 epochs.  
Performance Metrics:  
Accuracy: 92%  
Precision: 90%  
Recall: 93%  
F1 Score: 91.5%


Deployment: Hosted on AWS Lambda for real-time inference (<2 seconds/image).  
Feature Engineering: Extracted leaf texture, color, and lesion patterns; used recursive feature elimination (RFE) to select top 10 features.

Next.js Implementation
The CropDoc frontend is built using Next.js 14, ensuring a fast, responsive, and SEO-friendly user experience. Key features include:  

Image Upload: Handled via Multer, with files stored on AWS S3.  
Dynamic Dashboard: Displays diagnostics, IoT data, and recommendations using React components.  
Multilingual Support: Implemented with next-i18next for 10+ languages.  
Offline Mode: Utilizes service workers to cache ML models and static assets.  
Styling: Tailwind CSS for responsive, mobile-first design.  
API Integration: Fetches diagnostics from the Node.js backend via REST API endpoints.

Installation and Setup
Prerequisites

Node.js (v16 or higher)  
Python 3.9  
AWS account (for S3, Lambda, IoT Core)  
PostgreSQL

Steps

Clone the Repository  
gh repo clone Ansh3878/CropDoc
cd cropdoc


Install Dependencies  
# Frontend (Next.js)
cd frontend
npm install
# Backend (Node.js)
cd ../backend
npm install
# ML Model (Python)
cd ../ml-model
pip install -r requirements.txt

Run the Application  
# Start Backend
cd backend
npm run dev

# Start Frontend
cd frontend
npm run dev

# Train ML Model (optional)
cd ml-model
python train_model.py


Access the AppOpen (https://crop-doc.vercel.app/) in your browser to use CropDoc.


Usage

Upload Crop Images: Farmers can upload images via the Next.js dashboard.  
View Diagnostics: The CNN model processes images and displays disease diagnoses (e.g., "Blight detected").  
Monitor Fields: IoT data (soil moisture, temperature) is visualized in real-time.  
Get Recommendations: Receive treatment and prevention tips tailored to the crop and disease.

Results

Pilot Study: Tested with 100 farmers in India (Jan-Mar 2025), covering 500 acres.  
Impact:  
Yield Increase: 25% (2 tons/acre to 2.5 tons/acre).  
Pesticide Reduction: 30% (5 kg/acre to 3.5 kg/acre).  
Cost Savings: $75/acre annually.


User Feedback:  
90% found the platform easy to use.  
85% reported improved decision-making.




Future Scope

Expand to 50+ crops and 100+ diseases.  
Integrate weather APIs for predictive analytics.  
Develop a mobile app with AR-based crop scanning.  
Incorporate drone-based monitoring for large-scale farms.  
Target 1M farmers by 2027, aligning with UN SDG 2 (Zero Hunger).

Contributing
We welcome contributions! Please follow these steps:  

Fork the repository.  
Create a feature branch (git checkout -b feature/your-feature).  
Commit your changes (git commit -m "Add your feature").  
Push to the branch (git push origin feature/your-feature).  
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Kaggle and PlantVillage for providing crop image datasets.  
AWS for cloud infrastructure support.  
Farmers who participated in the pilot study for their valuable feedback.

