# professional-cloud-web-app
# CloudSphere – AWS Cloud Infrastructure Project

CloudSphere is a cloud-hosted web application built to demonstrate practical AWS Cloud Engineering and DevOps skills. It uses AWS services to host a frontend, run a Node.js backend, store application data, and monitor backend health.

# Live Application

- **Frontend:** http://cloudsphere-frontend-pranav.s3-website.ap-south-1.amazonaws.com
- **GitHub Repository:** https://github.com/bankarpranav12/professional-cloud-web-app

##Architecture

The application uses the following architecture:

1. **Amazon S3** – Hosts the static frontend.
2. **Amazon EC2** – Runs the Node.js and Express backend.
3. **Application Load Balancer (ALB)** – Distributes incoming HTTP traffic to backend instances.
4. **Auto Scaling Group (ASG)** – Manages backend EC2 instances.
5. **Amazon RDS (MySQL)** – Stores application data.
6. **Amazon VPC** – Provides isolated networking with public and private subnets.
7. **AWS Systems Manager Parameter Store** – Securely stores the database password.
8. **AWS IAM** – Controls permissions for AWS resource access.
9. **Amazon CloudWatch** – Monitors backend target health.
10. **Amazon SNS** – Sends email notifications for unhealthy backend targets.

# Technologies Used

- AWS
- Amazon S3
- Amazon EC2
- Amazon VPC
- Application Load Balancer
- Auto Scaling Group
- Amazon RDS (MySQL)
- AWS IAM
- AWS Systems Manager Parameter Store
- Amazon CloudWatch
- Amazon SNS
- Node.js
- Express.js
- JavaScript, HTML, CSS
- Git and GitHub
- Linux

## Application Features

- Static frontend hosting using Amazon S3.
- Node.js backend running on EC2.
- Backend health-check API.
- MySQL database integration with Amazon RDS.
- Create and retrieve health-check records through REST APIs.
- Load balancing through an Application Load Balancer.
- Automatic EC2 instance management using an Auto Scaling Group.
- Secure database password retrieval through Parameter Store and IAM.
- Backend health monitoring and email alerts using CloudWatch and SNS.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend welcome message |
| GET | `/api/health` | Checks backend health |
| GET | `/api/db-health` | Checks database connectivity |
| POST | `/api/health-checks` | Saves a health-check record |
| GET | `/api/health-checks` | Retrieves health-check records |

## Project Structure

```text
professional-cloud-web-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

# Security Practices

- Used IAM roles instead of storing AWS access keys on EC2.
- Stored the database password as a SecureString in Parameter Store.
- Used security groups to control network traffic.
- Kept the RDS database private rather than publicly accessible.
- Avoided committing environment files and database credentials to GitHub.

# What I Learned

Through this project, I gained hands-on experience with:

- Deploying a web application on AWS.
- Configuring VPCs, public and private subnets, route tables, and gateways.
- Hosting static websites using Amazon S3.
- Deploying and managing Node.js applications on EC2.
- Connecting an application to an RDS MySQL database.
- Configuring load balancing and auto scaling.
- Managing IAM permissions and application secrets.
- Monitoring infrastructure and configuring email alerts.
- Using Git and GitHub for version control.

# Author
Pranav Bankar

[GitHub](https://github.com/bankarpranav12)
