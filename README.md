# TBDETECTX 🫁 | AI-Powered Tuberculosis Detection Platform

A full-stack web application for early detection and classification of tuberculosis using deep learning and AI-powered assistance. TBDETECTX combines medical imaging, intelligent chat support, and location-based services to provide an accessible and supportive healthcare experience.

---

## 🚀 Project Overview

TBDETECTX leverages the power of **deep learning** and **modern web technologies** to:

- Classify chest X-ray images as **tuberculosis**, **sick**, or **healthy** with high accuracy.
- Offer **AI-driven conversational support** via Gemini API.
- Help users locate **nearby hospitals** through HERE API integration.
- Provide a seamless, interactive user experience via a web-based interface.

---

## 🛠️ Tech Stack

| Component         | Technology Used                                            |
|------------------|------------------------------------------------------------|
| Deep Learning     | TensorFlow, Keras, Faster R-CNN, ResNet50                 |
| Frontend          | React.js, JavaScript                                      |
| Backend           | Django, Python                                            |
| AI Chatbot        | Gemini API                                                |
| Location Services | HERE API                                                  |
| Deployment        | Docker, Heroku / AWS (optional)                           |

---

## 🔍 Features

### 🧠 Deep Learning X-ray Classifier
- Implemented **Faster R-CNN** with **ResNet50** backbone
- Achieved **90% accuracy** in classifying X-ray images into:
  - **Tuberculosis**
  - **Sick (Non-TB)**
  - **Healthy**

### 💬 AI Chatbot Support
- Integrated **Gemini API** to provide:
  - Conversational interface for user assistance
  - Health guidance based on user queries
  - Educational responses regarding tuberculosis

### 📍 Hospital Finder
- Integrated **HERE API** to:
  - Detect user location/address
  - Display nearby hospitals on the map
  - Provide navigation support for medical help

### 🌐 Full-Stack Web Application
- **Frontend:** Built with React.js for a responsive and interactive user experience.
- **Backend:** Developed using Django for seamless API integration, model inference, and data management.

---

## 🧪 Getting Started

### Prerequisites

- Python 3.8+
- Node.js & npm
- TensorFlow & Keras
- Django
- React CLI
- API Keys for:
  - HERE API
  - Gemini API
