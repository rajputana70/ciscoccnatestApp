pipeline {
    agent any

    stages {
        stage('Check Docker Access') {
            steps {
                sh 'whoami'
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rajputana70/ciscoccnatestApp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Next.js Docker image...'
                sh 'docker build -t nextjs-shadcn-app .'
            }
        }

        stage('Run Container') {
            steps {
                echo 'Running the container...'
                sh 'docker run -d -p 3000:3000 --name nextjs-shadcn-app nextjs-shadcn-app'
            }
        }

        stage('Verify Running Container') {
            steps {
                echo 'Verifying running containers...'
                sh 'docker ps'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker...'
            sh 'docker stop nextjs-shadcn-app || true'
            sh 'docker rm nextjs-shadcn-app || true'
        }
    }
}
