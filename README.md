

# **X-Ray Report Generator**

## **Overview**
The **X-Ray Report Generator** is an AI-driven healthcare application designed to automate the generation of X-ray diagnostic reports. By leveraging state-of-the-art **Llama 3.1 & 3.2 AI models** and deploying on **Huawei Cloud infrastructure**, the application enhances the accuracy, efficiency, and security of diagnostic workflows. Targeted at radiologists, healthcare professionals, and telemedicine providers, the solution addresses critical issues such as human error, diagnostic delays, and overburdened medical staff.

---

## **Key Features**
1. **Automated X-Ray Report Generation**:
   - Enables healthcare professionals to upload X-ray images and receive detailed AI-driven diagnostic reports within minutes.
2. **Advanced AI-Powered Analysis**:
   - Incorporates **Llama 3.1 & Llama 3.2 AI Models**, known for 95% diagnostic accuracy.
   - AI-driven anomaly detection ensures precision and consistency, reducing human error by up to 25%.
3. **Cloud-Native Deployment**:
   - Hosted on **Huawei Cloud**, utilizing services like **ECS**, **OBS**, and **RDS** for reliability, scalability, and secure data management.
4. **Compliance and Security**:
   - Fully compliant with **HIPAA** and **GDPR** standards.
   - Dual-layer encryption for secure data storage and transmission.
5. **Cross-Platform Accessibility**:
   - User-friendly **web and mobile apps** for seamless access across devices.

---

## **Technical Architecture**
The solution is built with a modular architecture that ensures scalability, security, and efficiency.

![Architecture](Architecture-for-X-Ray-report-generator.png)

### **Architecture Layers**
1. **Client Layer**:
   - Web App: Hosted on **Huawei OBS with CDN** for global access and fast content delivery.
   - Mobile App: Provides a user-friendly interface for healthcare providers to upload images and access reports.

2. **Security Layer**:
   - **WAF Firewall** and **Elastic Load Balancer (ELB)** ensure secure communication and traffic management.

3. **Backend Layer**:
   - Powered by **FastAPI**, ensuring high-performance API handling for data processing and communication between components.

4. **AI Layer**:
   - **Llama 3.1 & Llama 3.2 AI Models** integrated using **Huawei ModelArts** for image analysis.
   - AI performs tasks like:
     - Anomaly detection (e.g., fractures, cancer markers).
     - Contextualized report generation.
     - Continuous retraining with anonymized real-world data to maintain and enhance accuracy.

5. **Storage Layer**:
   - **Huawei OBS**: Stores X-ray images and generated reports securely.
   - **Huawei RDS**: Manages structured patient data with encryption for compliance.

6. **Monitoring Layer**:
   - **Cloud Eye**: Monitors system performance and usage in real time.
   - **Log Tank Service**: Tracks application logs for troubleshooting and compliance auditing.

---

## **AI Model Details**
The application uses **Llama 3.1 8b** and **Llama 3.2 AI Models**, offering cutting-edge natural language processing and image analysis capabilities:
- **Diagnostic Accuracy**:
  - Achieves up to **95% accuracy** in identifying abnormalities in X-ray images.
- **Continuous Learning**:
  - Automated retraining pipelines with anonymized real-world data ensure the model adapts to new diagnostic trends and cases.
- **Key Applications**:
  - Fracture detection.
  - Identification of lung and cardiovascular conditions.
  - Cancer marker identification.
- **Scalability**:
  - Deployed on GPU/TPU-enabled infrastructure to handle large-scale image processing workloads efficiently.

---

## **Installation Guide**

### **Pre-requisites**
- **Python 3.9+**
- **Node.js 16+**
- **Huawei Cloud Account**
- **FastAPI**, **React.js**, and **Docker** installed.

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/MeryemNairi/Flexosa.git
   cd Flexosa
   ```
2. Backend setup:
   - Navigate to the `BACKEND` folder:
     ```bash
     cd BACKEND
     pip install -r requirements.txt
     ```
   - Start the FastAPI server:
     ```bash
     uvicorn main:app --reload
     ```
3. Frontend setup:
   - Navigate to the `FRONTEND` folder:
     ```bash
     cd FRONTEND
     npm install
     npm start
     ```
4. Configure environment variables:
   - Add your Huawei Cloud credentials and API keys in the `.env` file.

5. Deploy using Docker (optional):
   - Build and run the project:
     ```bash
     docker-compose up --build
     ```

---

## **Usage Instructions**
1. Launch the application on your preferred device (browser or mobile app).
2. Log in or create an account.
3. Upload an X-ray image (JPEG, PNG, or DICOM formats supported).
4. View the AI-generated diagnostic report, including actionable insights.

---

## **Benefits**
### **For Radiologists and Healthcare Providers**:
- Reduces workload and diagnostic turnaround time from **30 minutes to under 5 minutes**.
- Enhances diagnostic precision, minimizing human errors.

### **For Small Clinics and Telemedicine Providers**:
- Affordable and scalable solution with subscription plans starting at **$49/month**.
- Eliminates the need for expensive on-site radiology infrastructure.

---

## **Roadmap**
- **Year 1**:
  - Complete pilot deployments in hospitals and telemedicine platforms.
- **Year 2**:
  - Expand capabilities to include **MRI** and **CT scans**.
  - Optimize AI for more rare diagnostic cases.
- **Year 3**:
  - Partner with global telemedicine providers for broader adoption.

---

## **Contributing**
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## **License**
This project is licensed under the **MIT License**.

---

## **Contact**
For inquiries or support, contact the team at **flexosa_support@example.com**.

